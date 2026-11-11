const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f } = require('./lib.js');
const rbc = (x, y, r) => circ(x, y, r || 30, '#c8524a') + circ(x, y, (r || 30) * .45, '#d97a70') + shine(x - (r || 30) * .35, y - (r || 30) * .4, (r || 30) * .25);
const wbc = (x, y, r, nuc, gran) => circ(x, y, r, '#efe4ee') + nuc + (gran ? Array.from({ length: 14 }, (_, i) => circ(x + (r * .7) * Math.cos(i * 2.4), y + (r * .7) * Math.sin(i * 2.4) * .9, 4, gran)).join('') : '');
const lobes = (x, y, n, c) => Array.from({ length: n }, (_, i) => circ(x - (n - 1) * 9 + i * 18, y + (i % 2 ? 6 : -6), 11, c)).join('');
const cellLabel = (x, name, pct, c) => T(x, 250, name, { s: 24, c }) + T(x, 278, pct, { s: 18, c: C.muted });

// ABO
const tri = (x, y) => sh(`M${x} ${y - 9} L${x + 9} ${y + 7} L${x - 9} ${y + 7} Z`, '#3b5562');
const sq = (x, y) => rect(x - 8, y - 8, 16, 16, 3, '#a68a4c');
const ab = (x, y, c, rot) => `<g transform="rotate(${rot} ${x} ${y})">${line(`M${x} ${y + 12} L${x} ${y} L${x - 8} ${y - 10} M${x} ${y} L${x + 8} ${y - 10}`, c, 4)}</g>`;
const group = (cx, name, A, B, antiA, antiB, note) => {
  const ants = Array.from({ length: 8 }, (_, i) => { const a = i / 8 * 2 * Math.PI, x = cx + 62 * Math.cos(a), y = 150 + 62 * Math.sin(a); return (i % 2 ? (B ? sq(x, y) : '') : (A ? tri(x, y) : '')); }).join('');
  const abs = [antiA ? ab(cx - 50, 270, '#3b5562', -20) + ab(cx - 20, 290, '#3b5562', 10) : '', antiB ? ab(cx + 20, 270, '#a68a4c', 15) + ab(cx + 50, 292, '#a68a4c', -10) : ''].join('');
  return rect(cx - 95, 40, 190, 300, 26, '#f7eee6') + circ(cx, 150, 56, '#c8524a') + shine(cx - 20, 128, 12) + ants + abs + T(cx, 380, name, { s: 32, c: C.ink }) + T(cx, 410, note, { s: 18, c: C.muted }) + T(cx, 330, (antiA || antiB) ? (antiA && antiB ? 'anti-A, anti-B' : antiA ? 'anti-A' : 'anti-B') : 'no antibodies', { s: 16, c: C.muted }); };

module.exports = {
  'ap13-1': fig('What blood is made of', '0 0 760 520',
    rect(300, 30, 140, 470, 60, '#f4f1ee') + T(370, 20, '', {}),
    [
      { label: 'Plasma, about 55%', c: C.goldD, detail: 'The fluid part: 91% water, 7% proteins and 2% other solutes.', svg: sh('M310 60 L430 60 L430 270 L310 270 Z', '#f2dc94') + T(480, 170, 'Plasma ~55%', { s: 26, c: '#8a6f35', a: 'start' }) + T(480, 200, '91% water', { s: 18, c: C.muted, a: 'start' }) },
      { label: 'White cells and platelets', c: C.muted, detail: 'A thin pale layer (the buffy coat) of leukocytes and thrombocytes, less than 1%.', svg: rect(310, 270, 120, 14, 0, '#f4f1ee') + T(480, 284, 'White cells and platelets <1%', { s: 18, c: C.muted, a: 'start' }) },
      { label: 'Red cells, about 45%', c: C.red, detail: 'Erythrocytes are about 95% of the volume of blood cells. There are 700 times more red cells than white.', svg: sh('M310 284 L430 284 L430 440 C430 480 400 490 370 490 C340 490 310 480 310 440 Z', '#b84a42') + T(480, 400, 'Red cells ~45%', { s: 26, c: C.red, a: 'start' }) },
      { label: 'About 5 to 6 litres', c: C.blueD, detail: 'Women have about 5 litres of blood and men about 6. Blood is about 8% of body weight.', svg: T(200, 260, '5–6 L', { s: 40, c: C.blueD, a: 'end' }) + T(200, 296, 'in an adult', { s: 18, c: C.muted, a: 'end' }) }
    ], { hint: 'Spun in a tube, blood separates into these layers.' }),

  'ap13-7': fig('The five kinds of white blood cell', '0 40 900 270',
    '',
    [
      { label: 'Neutrophil', c: C.rose, detail: 'Granular, 60% to 70%, the most common. First to respond to bacteria; makes lysozyme. Pus is largely dead neutrophils.', svg: wbc(90, 150, 52, lobes(90, 150, 3, '#8a5f86'), '#e4bcc8') + cellLabel(90, 'Neutrophil', '60–70%', C.rose) },
      { label: 'Lymphocyte', c: C.blueD, detail: 'Agranular, 20% to 25%, the smallest. Makes antibodies and drives the immune response (B and T cells).', svg: wbc(270, 150, 40, circ(270, 150, 32, '#6a5a8e')) + cellLabel(270, 'Lymphocyte', '20–25%', C.blueD) },
      { label: 'Monocyte', c: C.deep, detail: 'Agranular, 3% to 8%, the largest. Becomes a macrophage in the tissues and eats bacteria and debris.', svg: wbc(450, 150, 64, sh('M424 130 C440 110 480 120 478 146 C476 160 460 158 462 172 C462 190 424 186 420 164 C418 150 418 140 424 130 Z', '#8a6a9a')) + cellLabel(450, 'Monocyte', '3–8%', C.deep) },
      { label: 'Eosinophil', c: '#b95d48', detail: 'Granular, 2% to 4%. Fights allergy triggers, makes antihistamines and attacks some worm parasites.', svg: wbc(630, 150, 50, lobes(630, 150, 2, '#7a5a8a'), '#e58a6e') + cellLabel(630, 'Eosinophil', '2–4%', '#b95d48') },
      { label: 'Basophil', c: C.plumD, detail: 'Granular, 0.5% to 1%. Joins allergic reactions; secretes heparin, histamine and serotonin.', svg: wbc(810, 150, 50, lobes(810, 150, 2, '#7a6a9a'), '#5a4a8a') + cellLabel(810, 'Basophil', '0.5–1%', C.plumD) }
    ], { hint: 'Granular: neutrophils, eosinophils, basophils. Agranular: lymphocytes, monocytes.' }),

  'ap13-11': fig('ABO blood groups', '0 20 880 400',
    '',
    [
      { label: 'Type A', c: C.blueD, detail: 'Antigen A on the red cells; anti-B antibodies in the plasma.', svg: group(110, 'A', true, false, false, true, 'antigen A') },
      { label: 'Type B', c: C.goldD, detail: 'Antigen B on the red cells; anti-A antibodies in the plasma.', svg: group(330, 'B', false, true, true, false, 'antigen B') },
      { label: 'Type AB', c: C.plumD, detail: 'Both antigens and no antibodies: the universal recipient.', svg: group(550, 'AB', true, true, false, false, 'universal recipient') },
      { label: 'Type O', c: C.rose, detail: 'No antigens and both antibodies: the universal donor.', svg: group(770, 'O', false, false, true, true, 'universal donor') }
    ], { hint: 'Triangles are antigen A, squares antigen B. The Y shapes below are antibodies in the plasma.' })
};
