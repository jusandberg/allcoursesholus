// Builds dist/courses/player/data/figures.js: picture diagrams keyed by lesson step id (e.g. 'ap1-3').
// Each lesson file exports { 'ap1-3': fig(title, viewBox, art, items) } where items are
// { label, detail, svg, c } and svg is the part of the drawing that lights up for that label.
const fs = require('fs'), path = require('path');
const { restyle } = require('../journey/style.js');
const out = {}; let n = 0;
for (const file of fs.readdirSync(__dirname).filter(f => /^[a-z]{2}-\d+\.js$/.test(f)).sort()) {
  const F = require(path.join(__dirname, file));
  for (const [id, fg] of Object.entries(F)) {
    if (!fg.items || !fg.items.length) throw new Error(file + ' ' + id + ': no items');
    fg.items.forEach((it, j) => { if (!it.label || !it.detail) throw new Error(file + ' ' + id + ' item ' + j + ' incomplete'); });
    const parts = fg.items.map((it, j) => it.svg ? `<g class="fg-p" data-p="${j}">${it.svg}</g>` : '').join('');
    const svg = restyle((fg.art || '') + parts + (fg.top || ''), { prefix: 'fg' + (n++) + '_', shines: {} });
    out[id] = { title: fg.title, vb: fg.vb, svg, alt: fg.alt, hint: fg.hint, keep: !!fg.keep, tap: !!fg.tap,
      items: fg.items.map(it => ({ label: it.label, detail: it.detail, c: it.c })) };
  }
}
fs.writeFileSync(path.join(__dirname, '../../dist/courses/player/data/figures.js'), 'window.HOLUS_FIGS=' + JSON.stringify(out) + ';');
console.log('figures', Object.keys(out).length, Object.keys(out).join(' '));
