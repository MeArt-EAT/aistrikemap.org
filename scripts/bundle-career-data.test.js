#!/usr/bin/env node
/**
 * Unit tests for scripts/bundle-career-data.js.
 * Vanilla Node — no external test framework. Run:
 *   node scripts/bundle-career-data.test.js
 * Exits non-zero if any assertion fails.
 */
'use strict';

const assert = require('node:assert/strict');
const {
  median, mean, stddev, round,
  aggregateScore, markOutliers, classifyConfidence, flagEdgeCases, buildEntry,
  buildManifest, collectSourcesUsed,
  loadTaxonomy,
  DIVERGENT_STDDEV_CUTOFF, OUTLIER_FACTOR, STALE_THRESHOLD_YEARS
} = require('./bundle-career-data');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ok  ${name}`);
    passed++;
  } catch (err) {
    console.error(`  FAIL ${name}\n       ${err.message}`);
    failed++;
  }
}

function group(label) { console.log(`\n${label}`); }

// --- math helpers ------------------------------------------------------------

group('math helpers');
test('median: odd count picks middle element', () => {
  assert.equal(median([0.1, 0.5, 0.9]), 0.5);
});
test('median: even count averages the two middle elements', () => {
  assert.equal(median([0.2, 0.4, 0.6, 0.8]), 0.5);
});
test('median: empty input returns null', () => {
  assert.equal(median([]), null);
});
test('mean: averages values', () => {
  assert.ok(Math.abs(mean([0.2, 0.4, 0.6]) - 0.4) < 1e-9);
});
test('stddev: identical values yield 0', () => {
  assert.equal(stddev([0.5, 0.5, 0.5]), 0);
});
test('stddev: single value yields 0 (degenerate)', () => {
  assert.equal(stddev([0.7]), 0);
});
test('stddev: known case [0.1, 0.5, 0.9] ~= 0.3266', () => {
  assert.ok(Math.abs(stddev([0.1, 0.5, 0.9]) - 0.32660) < 0.001);
});
test('round: 4-digit default', () => {
  assert.equal(round(0.123456), 0.1235);
});

// --- aggregateScore ----------------------------------------------------------

group('aggregateScore');
test('returns null on empty input', () => {
  assert.equal(aggregateScore([]), null);
});
test('returns null when no source has a numeric value', () => {
  assert.equal(aggregateScore([{ layer: 'A' }, { layer: 'B', value: 'n/a' }]), null);
});
test('three sources: low/median/high derived from min/median/max', () => {
  const score = aggregateScore([
    { layer: 'A', value: 0.5 },
    { layer: 'B', value: 0.3 },
    { layer: 'C', value: 0.8 }
  ]);
  assert.equal(score.low, 0.3);
  assert.equal(score.median, 0.5);
  assert.equal(score.high, 0.8);
  assert.equal(score.sources_count, 3);
});
test('two sources: median averages the two values', () => {
  const score = aggregateScore([{ layer: 'A', value: 0.4 }, { layer: 'B', value: 0.6 }]);
  assert.equal(score.median, 0.5);
  assert.equal(score.low, 0.4);
  assert.equal(score.high, 0.6);
  assert.equal(score.sources_count, 2);
});
test('identical values: stddev rounds to 0', () => {
  const score = aggregateScore([
    { layer: 'A', value: 0.5 }, { layer: 'B', value: 0.5 }, { layer: 'C', value: 0.5 }
  ]);
  assert.equal(score.stddev, 0);
});
test('divergent values: stddev exceeds the divergent cutoff', () => {
  const score = aggregateScore([
    { layer: 'A', value: 0.1 }, { layer: 'B', value: 0.5 }, { layer: 'C', value: 0.9 }
  ]);
  assert.ok(score.stddev >= DIVERGENT_STDDEV_CUTOFF,
    `expected stddev >= ${DIVERGENT_STDDEV_CUTOFF}, got ${score.stddev}`);
});
test('NaN and non-finite values are filtered out', () => {
  const score = aggregateScore([
    { layer: 'A', value: 0.4 }, { layer: 'B', value: NaN }, { layer: 'C', value: Infinity }
  ]);
  assert.equal(score.sources_count, 1);
  assert.equal(score.median, 0.4);
});

// --- classifyConfidence ------------------------------------------------------

group('classifyConfidence');
test('null score -> sparse', () => {
  assert.equal(classifyConfidence(null), 'sparse');
});
test('1 source -> sparse', () => {
  assert.equal(classifyConfidence({ sources_count: 1, stddev: 0 }), 'sparse');
});
test('2 sources -> sparse (count threshold is 3)', () => {
  assert.equal(classifyConfidence({ sources_count: 2, stddev: 0.05 }), 'sparse');
});
test('3 sources, tight spread -> robust', () => {
  assert.equal(classifyConfidence({ sources_count: 3, stddev: 0.05 }), 'robust');
});
test('3 sources, wide spread -> divergent', () => {
  assert.equal(classifyConfidence({ sources_count: 3, stddev: 0.20 }), 'divergent');
});
test('stddev exactly at cutoff -> divergent (>= boundary)', () => {
  assert.equal(classifyConfidence({ sources_count: 3, stddev: DIVERGENT_STDDEV_CUTOFF }), 'divergent');
});

// --- markOutliers ------------------------------------------------------------

group('markOutliers');
test('value > OUTLIER_FACTOR x median -> flagged outlier', () => {
  const sources = [
    { layer: 'A', value: 0.4 }, { layer: 'B', value: 0.4 }, { layer: 'C', value: 0.9 }
  ];
  const annotated = markOutliers(sources, 0.4);
  assert.equal(annotated[0].outlier, undefined);
  assert.equal(annotated[1].outlier, undefined);
  assert.equal(annotated[2].outlier, true);
});
test('value < median / OUTLIER_FACTOR -> flagged outlier (symmetric)', () => {
  const sources = [
    { layer: 'A', value: 0.6 }, { layer: 'B', value: 0.6 }, { layer: 'C', value: 0.2 }
  ];
  const annotated = markOutliers(sources, 0.6);
  assert.equal(annotated[2].outlier, true);
});
test('value within band -> not flagged', () => {
  const sources = [
    { layer: 'A', value: 0.45 }, { layer: 'B', value: 0.50 }, { layer: 'C', value: 0.55 }
  ];
  const annotated = markOutliers(sources, 0.50);
  assert.ok(annotated.every(s => s.outlier === undefined));
});
test('zero median -> no outliers (avoids divide-by-zero)', () => {
  const sources = [{ layer: 'A', value: 0 }, { layer: 'B', value: 0.1 }];
  const annotated = markOutliers(sources, 0);
  assert.equal(annotated[1].outlier, undefined);
});
test('non-numeric source values are passed through unchanged', () => {
  const sources = [{ layer: 'A', value: 0.4 }, { layer: 'B' }];
  const annotated = markOutliers(sources, 0.4);
  assert.equal(annotated[1].outlier, undefined);
});

// --- flagEdgeCases -----------------------------------------------------------

group('flagEdgeCases');
test('singleSource flag when sources_count == 1', () => {
  const flags = flagEdgeCases(
    { sources_count: 1, stddev: 0 },
    [{ layer: 'B', value: 0.4 }],
    2026
  );
  assert.ok(flags.includes('career.bias.singleSource'));
});
test('noNationalData when no Layer A source present', () => {
  const flags = flagEdgeCases(
    { sources_count: 2, stddev: 0.05 },
    [{ layer: 'B', value: 0.4 }, { layer: 'C', value: 0.5 }],
    2026
  );
  assert.ok(flags.includes('career.bias.noNationalData'));
});
test('no noNationalData when Layer A is present', () => {
  const flags = flagEdgeCases(
    { sources_count: 3, stddev: 0.05 },
    [{ layer: 'A', value: 0.4 }, { layer: 'B', value: 0.5 }, { layer: 'C', value: 0.6 }],
    2026
  );
  assert.ok(!flags.includes('career.bias.noNationalData'));
});
test(`staleSource when any source year > ${STALE_THRESHOLD_YEARS}y old`, () => {
  const flags = flagEdgeCases(
    { sources_count: 2, stddev: 0.05 },
    [{ layer: 'A', value: 0.4, year: 2026 }, { layer: 'C', value: 0.5, year: 2013 }],
    2026
  );
  assert.ok(flags.includes('career.bias.staleSource'));
});
test('no staleSource when all sources within threshold', () => {
  const flags = flagEdgeCases(
    { sources_count: 2, stddev: 0.05 },
    [{ layer: 'A', value: 0.4, year: 2025 }, { layer: 'B', value: 0.5, year: 2024 }],
    2026
  );
  assert.ok(!flags.includes('career.bias.staleSource'));
});
test('divergent flag when classified divergent', () => {
  const flags = flagEdgeCases(
    { sources_count: 3, stddev: 0.20 },
    [{ layer: 'A', value: 0.1 }, { layer: 'B', value: 0.5 }, { layer: 'C', value: 0.9 }],
    2026
  );
  assert.ok(flags.includes('career.bias.divergent'));
});
test('outlier flag mirrors annotated source', () => {
  const flags = flagEdgeCases(
    { sources_count: 3, stddev: 0.05 },
    [{ layer: 'A', value: 0.4 }, { layer: 'B', value: 0.4, outlier: true }, { layer: 'C', value: 0.4 }],
    2026
  );
  assert.ok(flags.includes('career.bias.outlier'));
});
test('null score -> empty flags array', () => {
  assert.deepEqual(flagEdgeCases(null, [], 2026), []);
});

// --- buildEntry (end-to-end) -------------------------------------------------

group('buildEntry (end-to-end)');
test('robust 3-source entry: shape + classification', () => {
  const entry = buildEntry({
    isco: '2330', country: 'DE', year: 2026, currentYear: 2026,
    sources: [
      { layer: 'A', value: 0.55, year: 2025 },
      { layer: 'B', value: 0.50, year: 2024 },
      { layer: 'C', value: 0.62, year: 2025 }
    ]
  });
  assert.equal(entry.isco, '2330');
  assert.equal(entry.country, 'DE');
  assert.equal(entry.confidence_quality, 'robust');
  assert.equal(entry.score.sources_count, 3);
  assert.ok(!entry.flags.includes('career.bias.singleSource'));
  assert.ok(!entry.flags.includes('career.bias.noNationalData'));
});
test('sparse single-source entry sets singleSource + noNationalData flags', () => {
  const entry = buildEntry({
    isco: '5322', country: 'AU', year: 2026, currentYear: 2026,
    sources: [{ layer: 'B', value: 0.4, year: 2024 }]
  });
  assert.equal(entry.confidence_quality, 'sparse');
  assert.ok(entry.flags.includes('career.bias.singleSource'));
  assert.ok(entry.flags.includes('career.bias.noNationalData'));
});
test('outlier in source list propagates to entry-level flag', () => {
  const entry = buildEntry({
    isco: '7115', country: 'DE', year: 2026, currentYear: 2026,
    sources: [
      { layer: 'A', value: 0.40, year: 2025 },
      { layer: 'B', value: 0.40, year: 2024 },
      { layer: 'C', value: 0.95, year: 2013 }
    ]
  });
  assert.ok(entry.flags.includes('career.bias.outlier'));
  assert.equal(entry.sources[2].outlier, true);
  assert.ok(entry.flags.includes('career.bias.staleSource'));
});

// --- manifest ----------------------------------------------------------------

group('manifest');
test('buildManifest carries license, attribution, countries, sources', () => {
  const manifest = buildManifest({
    countries: ['DE', 'AU'],
    generatedAt: '2026-05-01T00:00:00Z',
    sourcesUsed: [{ layer: 'B', name: 'OECD', license: 'OECD T&C', url: 'https://oecd.org' }]
  });
  assert.equal(manifest.license, 'CC-BY-NC-SA-4.0');
  assert.match(manifest.attribution, /AIStrikeMap/);
  assert.deepEqual(manifest.countries, ['DE', 'AU']);
  assert.equal(manifest.sources.length, 1);
  assert.equal(manifest.generated, '2026-05-01T00:00:00Z');
});
test('collectSourcesUsed dedupes by layer + name', () => {
  const entries = [
    { sources: [{ layer: 'A', name: 'IAB', license: 'DL-DE BY 2.0', url: 'https://iab.de' }] },
    { sources: [
      { layer: 'A', name: 'IAB', license: 'DL-DE BY 2.0', url: 'https://iab.de' },
      { layer: 'B', name: 'OECD' }
    ] }
  ];
  const result = collectSourcesUsed(entries);
  assert.equal(result.length, 2);
  assert.ok(result.some(s => s.layer === 'A' && s.name === 'IAB'));
  assert.ok(result.some(s => s.layer === 'B' && s.name === 'OECD'));
});
test('collectSourcesUsed handles entries with no sources', () => {
  assert.deepEqual(collectSourcesUsed([{}, { sources: [] }]), []);
});

// --- taxonomy (MVP step 3) ---------------------------------------------------

group('taxonomy');

const tax = loadTaxonomy();

test('taxonomy loads with correct top-level metadata', () => {
  assert.equal(tax.isco_revision, 'ISCO-08');
  assert.ok(typeof tax.version === 'string');
  assert.ok(Array.isArray(tax.cluster_groups));
  assert.ok(Array.isArray(tax.occupations));
});

test('taxonomy has exactly the planned 82 occupations', () => {
  // MVP-Scope (career-dashboard-mvp-scope.md): 10+8+10+6+12+10+8+6+6+6 = 82
  assert.equal(tax.occupations.length, 82);
});

test('taxonomy has 10 cluster groups', () => {
  assert.equal(tax.cluster_groups.length, 10);
});

test('taxonomy: every ISCO code is unique', () => {
  const seen = new Set();
  for (const occ of tax.occupations) {
    assert.ok(!seen.has(occ.isco), `duplicate ISCO ${occ.isco}`);
    seen.add(occ.isco);
  }
});

test('taxonomy: every ISCO code is a 4-digit string', () => {
  for (const occ of tax.occupations) {
    assert.match(occ.isco, /^\d{4}$/, `bad ISCO format: ${occ.isco}`);
  }
});

test('taxonomy: every occupation has required fields', () => {
  for (const occ of tax.occupations) {
    assert.ok(typeof occ.label_de === 'string' && occ.label_de.length > 0, `missing label_de on ${occ.isco}`);
    assert.ok(typeof occ.label_en === 'string' && occ.label_en.length > 0, `missing label_en on ${occ.isco}`);
    assert.ok(Array.isArray(occ.aliases_de), `missing aliases_de on ${occ.isco}`);
    assert.ok(Array.isArray(occ.aliases_en), `missing aliases_en on ${occ.isco}`);
  }
});

test('taxonomy: every cluster reference resolves to a cluster_group', () => {
  const clusterKeys = new Set(tax.cluster_groups.map(c => c.key));
  for (const occ of tax.occupations) {
    assert.ok(clusterKeys.has(occ.cluster), `unknown cluster on ${occ.isco}: ${occ.cluster}`);
  }
});

test('taxonomy: every cluster_group has required i18n metadata', () => {
  for (const cg of tax.cluster_groups) {
    assert.ok(typeof cg.key === 'string' && cg.key.length > 0);
    assert.ok(typeof cg.i18n_key === 'string' && cg.i18n_key.startsWith('career.cluster.'),
      `bad i18n_key on cluster ${cg.key}`);
    assert.ok(typeof cg.label_de === 'string' && cg.label_de.length > 0);
    assert.ok(typeof cg.label_en === 'string' && cg.label_en.length > 0);
  }
});

test('taxonomy: cluster distribution matches MVP-Scope plan', () => {
  const expected = {
    healthcare: 10, it: 8, admin: 10, education: 6, crafts: 12,
    service: 10, transport: 8, legal: 6, creative: 6, industry: 6
  };
  const actual = {};
  for (const occ of tax.occupations) {
    actual[occ.cluster] = (actual[occ.cluster] || 0) + 1;
  }
  assert.deepEqual(actual, expected);
});

// --- summary -----------------------------------------------------------------

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
