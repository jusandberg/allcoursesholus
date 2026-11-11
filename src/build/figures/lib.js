// Drawing helpers for the picture diagrams in lessons (built into dist/courses/player/data/figures.js).
// Shapes use style="fill:#hex" so build.js gives them the soft website shading; text and arrows use
// fill="" attributes so they stay flat and readable.
const parts = require('../journey/body_parts.json');
const C = {
  ink: '#243341', sage: '#71836d', deep: '#4b5d49', light: '#c7d2c4', gold: '#c7b07a', goldD: '#a68a4c',
  blue: '#8aa3b0', blueD: '#3b5562', clay: '#b4877b', rose: '#ad6459', plum: '#9c8aa2', plumD: '#7a6681',
  body: '#fbf7ef', edge: '#e2e6df', muted: '#596166', red: '#c8524a', pink: '#e7a9a0', bone: '#efe6cf'
};
const f = n => +(+n).toFixed(1);
// A labelled part: everything inside lights up when its label is chosen. j can be "0 2" for shared parts.
const P = (j, inner) => `<g class="fg-p" data-p="${j}">${inner}</g>`;
const sh = (d, c, extra) => `<path d="${d}" style="fill:${c}${extra ? ';' + extra : ''}"></path>`;
const circ = (x, y, r, c, extra) => `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" style="fill:${c}${extra ? ';' + extra : ''}"></circle>`;
const ell = (x, y, rx, ry, c, extra) => `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(rx)}" ry="${f(ry)}" style="fill:${c}${extra ? ';' + extra : ''}"></ellipse>`;
const rect = (x, y, w, h, r, c, extra) => `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" rx="${f(r)}" style="fill:${c}${extra ? ';' + extra : ''}"></rect>`;
const line = (d, c, w, extra) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w || 3}" stroke-linecap="round" stroke-linejoin="round"${extra ? ' ' + extra : ''}></path>`;
const dash = (d, c, w) => line(d, c, w || 3, `stroke-dasharray="${(w || 3) * 2} ${(w || 3) * 2.4}"`);
const shine = (x, y, rx, ry) => `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(rx)}" ry="${f(ry ?? rx * .6)}" fill="#fff" opacity=".38" pointer-events="none"></ellipse>`;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
// text: o = {a: anchor, s: size, c: colour, w: weight, halo: white outline for text over drawings}
const T = (x, y, s, o) => { o = o || {};
  return `<text x="${f(x)}" y="${f(y)}" text-anchor="${o.a || 'middle'}" font-size="${o.s || 26}" fill="${o.c || C.ink}"${o.w ? ` font-weight="${o.w}"` : ''}${o.halo === false ? '' : ' stroke="#fff" stroke-width="' + ((o.s || 26) / 5) + '" stroke-linejoin="round" paint-order="stroke"'}>${esc(s)}</text>`; };
// arrow from (x1,y1) to (x2,y2); both=true puts a head on each end
const arrow = (x1, y1, x2, y2, c, o) => { o = o || {}; const w = o.w || 5, h = o.h || w * 3.2;
  const a = Math.atan2(y2 - y1, x2 - x1), ux = Math.cos(a), uy = Math.sin(a);
  const head = (x, y, ux, uy) => `<path d="M${f(x)} ${f(y)} L${f(x - ux * h - uy * h * .62)} ${f(y - uy * h + ux * h * .62)} L${f(x - ux * h + uy * h * .62)} ${f(y - uy * h - ux * h * .62)} Z" fill="${c}"></path>`;
  const sx = o.both ? x1 + ux * h * .8 : x1, sy = o.both ? y1 + uy * h * .8 : y1;
  return line(`M${f(sx)} ${f(sy)} L${f(x2 - ux * h * .8)} ${f(y2 - uy * h * .8)}`, c, w) + head(x2, y2, ux, uy) + (o.both ? head(x1, y1, -ux, -uy) : ''); };
const curved = (d, c, w) => line(d, c, w || 4);
const dot = (x, y, c, r) => `<circle cx="${f(x)}" cy="${f(y)}" r="${r || 8}" fill="${c}" stroke="#fff" stroke-width="3"></circle>`;

// Front body in anatomic position (from the body tour drawing), thumbs pointing out to the sides.
const BODY = parts.sil
  .replace('M114 548 C125 550 130 562 122 572', 'M88 548 C77 550 72 562 80 572')
  .replace('M386 548 C375 550 370 562 378 572', 'M412 548 C423 550 428 562 420 572')
  .replace(/<path d="M232 205[\s\S]*$/, '') // drop the faint lungs
  .split('stroke:#cdd6cb;stroke-width:2.5').join('stroke:#c3cbbf;stroke-width:3');
const body = (o) => { o = o || {};
  let s = BODY;
  if (o.ears) s = ell(191, 98, 9, 16, C.body, 'stroke:#c3cbbf;stroke-width:3') + ell(309, 98, 9, 16, C.body, 'stroke:#c3cbbf;stroke-width:3') + s;
  if (o.nose) s += line('M250 98 C246 108 246 114 252 116', '#c9b9a8', 2.5);
  return o.dx || o.dy || o.k ? `<g transform="translate(${o.dx || 0} ${o.dy || 0}) scale(${o.k || 1})">${s}</g>` : s;
};
// Side view (facing right), centred on x=640 in the same space as the front body.
const SIDE = {
  leg: 'M612 548 C606 680 612 820 616 940 L672 940 C668 820 674 680 676 548 Z',
  foot: 'M614 932 L702 934 C716 936 716 968 700 968 L612 968 C606 968 606 936 614 932 Z',
  torso: 'M626 150 L656 150 L658 186 C676 196 686 226 690 270 C694 320 694 380 690 420 C688 470 682 520 676 556 L612 556 C606 520 600 480 598 440 C592 380 590 300 594 250 C596 214 606 196 624 186 Z',
  arm: 'M622 204 C612 280 612 360 620 470 C622 492 650 492 652 470 C656 380 654 290 650 212 C646 196 626 194 622 204 Z',
  hand: 'M620 466 C614 490 616 516 630 524 C644 530 654 512 652 490 L650 466 Z'
};
const side = (o) => { o = o || {}; const st = 'stroke:#c3cbbf;stroke-width:3';
  let s = sh(SIDE.leg, C.body, st) + sh(SIDE.foot, C.body, st) + sh(SIDE.torso, C.body, st)
    + circ(640, 98, 58, C.body, st) + sh('M694 92 C706 104 704 112 694 116', C.body, st)
    + line('M664 90 q7 -5 13 0', '#8a958c', 2.5) + circ(668, 108, 7, '#e7b3a3', 'opacity:.45')
    + ell(624, 100, 9, 15, C.body, st);
  if (o.arm !== false) s += sh(SIDE.arm, C.body, st) + sh(SIDE.hand, C.body, st);
  return o.dx || o.dy || o.k ? `<g transform="translate(${o.dx || 0} ${o.dy || 0}) scale(${o.k || 1})">${s}</g>` : s;
};
const ring = (x, y, rx, ry, c, w, extra) => `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(rx)}" ry="${f(ry)}" fill="none" stroke="${c}" stroke-width="${w || 5}"${extra ? ' ' + extra : ''}></ellipse>`;
const outline = (d, c, w, extra) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w || 5}" stroke-linejoin="round"${extra ? ' ' + extra : ''}></path>`;
const fig = (title, vb, art, items, o) => Object.assign({ title, vb, art, items }, o || {});
module.exports = { ring, outline, C, P, sh, circ, ell, rect, line, dash, shine, T, arrow, curved, dot, body, side, fig, esc, f };
// A neuron lying left to right, in pieces so each can light up: dendrites, body, nucleus, axon, myelin, endings.
const neuron = (x, y, k) => { k = k || 1; const X = v => f(x + v * k), Y = v => f(y + v * k);
  const den = [[-60, -60, -110, -100], [-70, -10, -140, -20], [-60, 50, -120, 90], [-20, -70, -30, -130], [-20, 70, -40, 130]]
    .map(([a, b, c, d]) => module.exports.line(`M${X(0)} ${Y(0)} Q${X(a)} ${Y(b)} ${X(c)} ${Y(d)} M${X(a)} ${Y(b)} L${X(a - 26)} ${Y(b + (b < 0 ? -10 : 14))}`, '#9c8aa2', 7 * k)).join('');
  const body = module.exports.circ(x, y, 46 * k, '#b49ac0') + module.exports.shine(x - 16 * k, y - 18 * k, 10 * k);
  const nucleus = module.exports.circ(x + 4 * k, y, 16 * k, '#7a6681');
  const axon = module.exports.line(`M${X(44)} ${Y(0)} L${X(520)} ${Y(0)}`, '#9c8aa2', 8 * k);
  const myelin = [0, 1, 2, 3].map(i => module.exports.rect(x + (90 + i * 110) * k, y - 15 * k, 90 * k, 30 * k, 15 * k, '#ebd08c')).join('');
  const ends = [-50, -18, 18, 50].map(d => module.exports.line(`M${X(520)} ${Y(0)} Q${X(560)} ${Y(d * .4)} ${X(590)} ${Y(d)}`, '#9c8aa2', 6 * k) + module.exports.circ(x + 596 * k, y + d * k, 10 * k, '#d3a84b')).join('');
  return { den, body, nucleus, axon, myelin, ends };
};
module.exports.neuron = neuron;
// a small person: head and rounded body, standing at (x, y) = feet
const person = (x, y, k, c, o) => { k = k || 1; c = c || '#c7d2c4'; o = o || {};
  return module.exports.circ(x, y - 150 * k, 26 * k, o.head || '#f4e3d6') + module.exports.sh(`M${f(x - 40 * k)} ${f(y)} L${f(x - 40 * k)} ${f(y - 80 * k)} C${f(x - 40 * k)} ${f(y - 120 * k)} ${f(x + 40 * k)} ${f(y - 120 * k)} ${f(x + 40 * k)} ${f(y - 80 * k)} L${f(x + 40 * k)} ${f(y)} Z`, c); };
// a smooth path through points (Catmull-Rom)
const smooth = pts => { let d = `M${f(pts[0][0])} ${f(pts[0][1])}`; for (let i = 0; i < pts.length - 1; i++) { const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
  d += ` C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])} ${f(p2[1])}`; } return d; };
// a rounded label box with text, for diagram nodes
const box = (x, y, w, h, c, s, tc, sz) => module.exports.rect(x - w / 2, y - h / 2, w, h, Math.min(18, h / 2), c) + (Array.isArray(s) ? s : [s]).map((t, i, a) => module.exports.T(x, y + (sz || 22) * .36 + (i - (a.length - 1) / 2) * (sz || 22) * 1.2, t, { s: sz || 22, c: tc || '#243341', halo: false })).join('');
Object.assign(module.exports, { person, smooth, box });
