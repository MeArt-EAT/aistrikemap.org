/**
 * Career-Dashboard Chart-Modul (MVP Step 6).
 *
 * Rendert Multi-Country-Time-Series einer ISCO-08-Berufsgruppe für die
 * 8 MVP-Länder. Y-Achse = Score (0–1), X-Achse = Jahr. Pro Land:
 *   - Solide Linie auf score.median
 *   - Halbtransparenter Confidence-Band-Bereich zwischen score.low und
 *     score.high (via Chart.js fill: '+1' zwischen zwei Datasets)
 *
 * Datenquelle: dieselbe countryData-Map wie der Map-Modul — Career.js
 * lädt sie auf Init / Filter-Wechsel. Career-Chart erhält über die
 * öffentliche render()-API einen Map<Country, Entry[]>-Param.
 *
 * Chart.js 4.x via CDN, gemeinsame UMD-Build. Kein Time-Adapter — Jahre
 * sind als Linear-Numerics geführt.
 */
const CareerChart = (function () {
  'use strict';

  let chart = null;

  // 8-Farb-Palette, eine pro MVP-Land. Bewusst kontrastreich für Dark-Theme.
  const COUNTRY_COLORS = {
    DE: '#3498db', US: '#e74c3c', UK: '#9b59b6', FR: '#2ecc71',
    CA: '#f39c12', NL: '#1abc9c', SE: '#f1c40f', AU: '#e67e22'
  };

  const MVP_COUNTRIES = ['DE', 'US', 'UK', 'FR', 'CA', 'NL', 'SE', 'AU'];

  // Default Year-Range — passt zu buildFromLoaders-Default in
  // scripts/bundle-career-data.js (MVP-Scope-Zeitachse).
  function defaultYears() {
    const cy = new Date().getFullYear();
    const years = [];
    for (let y = 2018; y <= cy; y++) years.push(y);
    return years;
  }

  function t(key, fallback) {
    if (window.I18n && typeof I18n.t === 'function') {
      return I18n.t(key, fallback);
    }
    return fallback || key;
  }

  /**
   * Convert hex color → rgba string with alpha.
   * Simple #RRGGBB parser only — sufficient for our hardcoded palette.
   */
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
  }

  /**
   * Build Chart.js datasets from a country → entries[] map and a selected ISCO.
   * Each country produces 3 datasets (low, high, median) for confidence-band fill.
   * Countries without matching entries are skipped.
   */
  function buildDatasets(entriesByCountry, isco, years) {
    const datasets = [];
    for (const cc of MVP_COUNTRIES) {
      const entries = entriesByCountry.get(cc) || [];
      const matching = entries.filter(function (e) {
        return e.isco === isco && e.score && typeof e.score.median === 'number';
      });
      if (!matching.length) continue;

      // Lookup map year → entry for sparse-data plotting.
      const byYear = new Map(matching.map(function (e) { return [e.year, e]; }));
      const low = years.map(function (y) {
        const e = byYear.get(y);
        return e ? e.score.low : null;
      });
      const high = years.map(function (y) {
        const e = byYear.get(y);
        return e ? e.score.high : null;
      });
      const median = years.map(function (y) {
        const e = byYear.get(y);
        return e ? e.score.median : null;
      });

      const color = COUNTRY_COLORS[cc] || '#888';
      const bandColor = hexToRgba(color, 0.15);

      // Order matters for fill: 'low' first as the reference, 'high' fills DOWN
      // to 'low' (fill: '-1'), then 'median' as solid line on top.
      datasets.push({
        label: cc + ' · ' + t('career.chart.low', 'Low'),
        data: low,
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        pointRadius: 0,
        spanGaps: true,
        order: 3,
        // Hide from legend — band is one logical series.
        meta: { isBoundary: true, country: cc }
      });
      datasets.push({
        label: cc + ' · ' + t('career.chart.band', 'Band'),
        data: high,
        borderColor: 'transparent',
        backgroundColor: bandColor,
        pointRadius: 0,
        spanGaps: true,
        fill: '-1',
        order: 2,
        meta: { isBoundary: true, country: cc }
      });
      datasets.push({
        label: cc,
        data: median,
        borderColor: color,
        backgroundColor: color,
        borderWidth: 2.5,
        pointRadius: 4,
        pointHoverRadius: 6,
        spanGaps: true,
        tension: 0.15,
        order: 1,
        meta: { country: cc }
      });
    }
    return datasets;
  }

  function showEmptyState(visible) {
    const empty = document.getElementById('career-chart-empty');
    const canvas = document.getElementById('career-chart');
    if (empty) empty.hidden = !visible;
    if (canvas) canvas.style.display = visible ? 'none' : '';
  }

  /**
   * Render or update the chart.
   *   entriesByCountry: Map<2letterCC, entries[]>
   *   isco: selected ISCO code (or null / '' → empty state)
   */
  function render(entriesByCountry, isco) {
    const canvas = document.getElementById('career-chart');
    if (!canvas || typeof Chart === 'undefined') return;

    if (!isco) {
      showEmptyState(true);
      destroy();
      return;
    }

    const years = defaultYears();
    const datasets = buildDatasets(entriesByCountry || new Map(), isco, years);

    if (!datasets.length) {
      showEmptyState(true);
      destroy();
      return;
    }
    showEmptyState(false);

    const config = {
      type: 'line',
      data: { labels: years, datasets: datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'nearest', intersect: false },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              filter: function (item, data) {
                const ds = data.datasets[item.datasetIndex];
                return !(ds.meta && ds.meta.isBoundary);
              },
              color: '#ccc',
              boxWidth: 12,
              padding: 12
            }
          },
          tooltip: {
            backgroundColor: 'rgba(15,15,18,0.95)',
            titleColor: '#fff',
            bodyColor: '#ddd',
            borderColor: 'rgba(255,255,255,0.15)',
            borderWidth: 1,
            padding: 10,
            callbacks: {
              filter: function (tooltipItem) {
                const ds = tooltipItem.chart.data.datasets[tooltipItem.datasetIndex];
                return !(ds.meta && ds.meta.isBoundary);
              },
              label: function (ctx) {
                const ds = ctx.chart.data.datasets[ctx.datasetIndex];
                const country = ds.meta && ds.meta.country;
                if (typeof ctx.parsed.y !== 'number') return null;
                return country + ': ' + ctx.parsed.y.toFixed(2);
              }
            }
          }
        },
        scales: {
          x: {
            type: 'linear',
            min: years[0],
            max: years[years.length - 1],
            ticks: {
              color: '#aaa',
              stepSize: 1,
              callback: function (v) { return Number.isInteger(v) ? v : null; }
            },
            grid: { color: 'rgba(255,255,255,0.05)' },
            title: {
              display: true,
              text: t('career.chart.xAxis', 'Jahr'),
              color: '#ccc'
            }
          },
          y: {
            min: 0,
            max: 1,
            ticks: {
              color: '#aaa',
              stepSize: 0.1
            },
            grid: { color: 'rgba(255,255,255,0.05)' },
            title: {
              display: true,
              text: t('career.chart.yAxis', 'Substituierbarkeit'),
              color: '#ccc'
            }
          }
        }
      }
    };

    if (chart) {
      chart.data = config.data;
      chart.options = config.options;
      chart.update();
    } else {
      chart = new Chart(canvas.getContext('2d'), config);
    }
  }

  function destroy() {
    if (chart) {
      chart.destroy();
      chart = null;
    }
  }

  function resize() {
    if (chart) chart.resize();
  }

  return {
    render: render,
    destroy: destroy,
    resize: resize
  };
})();
