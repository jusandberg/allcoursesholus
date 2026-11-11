const { C, P, sh, circ, ell, rect, line, dash, shine, T, arrow, dot, ring, outline, fig, f } = require('./lib.js');
const sign = (x, y, s, sz) => T(x, y + (sz || 22) * .36, s, { s: sz || 22, c: '#fff', halo: false });

// small charged particles
const proton = (x, y) => circ(x, y, 17, '#ad6459') + shine(x - 5, y - 6, 5) + sign(x, y, '+');
const neutron = (x, y) => circ(x, y, 17, '#8aa3b0') + shine(x - 5, y - 6, 5);
const electron = (x, y) => circ(x, y, 12, '#3b5562') + sign(x, y, '−', 20);
const around = (cx, cy, r, n, start) => Array.from({ length: n }, (_, i) => { const a = (start || 0) + i * 2 * Math.PI / n; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; });

// a red blood cell in a solution
const rbc = (x, y, kind) => {
  if (kind === 'swell') return circ(x, y, 74, '#c8524a') + shine(x - 24, y - 26, 16, 10);
  if (kind === 'shrink') { let d = ''; for (let i = 0; i <= 72; i++) { const a = i / 72 * 2 * Math.PI, r = 46 + 8 * Math.sin(a * 11); d += (i ? 'L' : 'M') + f(x + r * Math.cos(a)) + ' ' + f(y + r * .8 * Math.sin(a)); } return sh(d + 'Z', '#b0453e'); }
  return ell(x, y, 66, 48, '#c8524a') + ell(x, y + 2, 30, 18, '#d97a70') + shine(x - 26, y - 22, 12, 7);
};
const solutes = (x, y, n) => around(x, y, 0, 0).concat(Array.from({ length: n }, (_, i) => [x - 110 + ((i * 73) % 220), y - 120 + ((i * 47) % 240)])).filter(([a, b]) => Math.hypot(a - x, (b - y) * 1.3) > 92).map(([a, b]) => circ(a, b, 7, '#c7b07a')).join('');
const panel = (x, label, sub, kind, n, arrows) => rect(x - 135, 60, 270, 300, 28, '#e3edf1') + solutes(x, 210, n) + rbc(x, 210, kind) + arrows
  + T(x, 400, label, { s: 30, c: C.ink }) + T(x, 436, sub, { s: 22, c: C.muted });
const inA = (x, y) => arrow(x - 120, y, x - 82, y, C.blueD, { w: 5 }) + arrow(x + 120, y, x + 82, y, C.blueD, { w: 5 });
const outA = (x, y) => arrow(x - 64, y, x - 112, y, C.blueD, { w: 5 }) + arrow(x + 64, y, x + 112, y, C.blueD, { w: 5 });

const X = ph => 60 + ph * 55.71;
const PH = ['#c0574a', '#c96a4a', '#d07f4c', '#d6964f', '#d9ab57', '#d6bd63', '#c5c36f', '#a9bd7a', '#8fb08a', '#7fa598', '#7398a6', '#6889a8', '#5f7ba3', '#596d98'];
const pin = (ph, up, y, s, c) => line(`M${f(X(ph))} ${up ? 160 : 200} L${f(X(ph))} ${y}`, c, 3) + dot(X(ph), y, c, 7) + T(X(ph), up ? y - 16 : y + 36, s, { s: 24, c });

// a CO2 molecule: carbon in the middle, an oxygen each side
const co2 = (x, y, k) => { k = k || 1; return circ(x - 20 * k, y, 12 * k, C.rose) + circ(x + 20 * k, y, 12 * k, C.rose) + circ(x, y, 14 * k, '#596166') + T(x, y + 5 * k, 'C', { s: 13 * k, c: '#fff', w: 800, halo: false }); };
// DNA ladder (5 rungs) and an RNA strand; BASES(letter) draws every block of that base
const BCOL = { A: C.sage, T: C.blue, G: C.gold, C: C.clay, U: C.plum }, PUR = { A: 1, G: 1 };
const DNA = [['A', 'T'], ['C', 'G'], ['T', 'A'], ['G', 'C'], ['A', 'T']];
const RNA = ['A', 'C', 'U', 'G', 'A'];
const PW = 118, YW = 84; // purine and pyrimidine block widths (118 + 84 fills a rung)
const block = (x, y, w, b, dir) => rect(dir > 0 ? x : x - w, y - 22, w, 44, 12, BCOL[b]) + T(dir > 0 ? x + w / 2 : x - w / 2, y + 9, b, { s: 26, c: '#fff', w: 800, halo: false });
const BASES = b => {
  let s = '';
  DNA.forEach(([l, r], i) => { const y = 110 + i * 85, wl = PUR[l] ? PW : YW, wr = PUR[r] ? PW : YW;
    if (l === b) s += block(179, y, wl, l, 1);
    if (r === b) s += block(381, y, wr, r, -1); });
  RNA.forEach((x, i) => { if (x === b) s += block(629, 110 + i * 85, PUR[x] ? PW : YW, x, 1); });
  return s;
};
module.exports = {
  'ap2-2': fig('Inside an atom (carbon)', '0 0 620 460',
    ring(310, 230, 92, 92, '#c7d2c4', 3, 'stroke-dasharray="6 7"') + ring(310, 230, 176, 176, '#c7d2c4', 3, 'stroke-dasharray="6 7"'),
    [
      { label: 'Proton', c: '#ad6459', detail: 'In the nucleus. Positive charge, 1 unit of weight.',
        svg: [[296,212],[330,224],[290,248],[318,262],[312,196],[344,252]].map(([x,y])=>proton(x,y)).join('') + T(110, 70, 'Protons (+)', { s: 26, c: '#ad6459' }) + line('M150 82 L282 200', '#ad6459', 2.5) },
      { label: 'Neutron', c: '#3b5562', detail: 'In the nucleus. No charge, 1 unit of weight.',
        svg: [[314,230],[278,228],[336,202],[300,270],[340,272],[322,246]].map(([x,y])=>neutron(x,y)).join('') + T(520, 70, 'Neutrons', { s: 26, c: C.blueD }) + line('M486 82 L330 222', C.blueD, 2.5) },
      { label: 'Electron', c: C.ink, detail: 'Orbits the nucleus in energy levels. Negative charge, almost weightless. Electrons take part in chemical reactions.',
        svg: around(310, 230, 92, 2, .5).map(([x, y]) => electron(x, y)).join('') + around(310, 230, 176, 4, .9).map(([x, y]) => electron(x, y)).join('') + T(540, 420, 'Electrons (−)', { s: 26, c: C.ink }) },
      { label: 'Energy levels', c: C.sage, detail: 'Electrons sit in levels around the nucleus. Carbon has 2 in the first level and 4 in the outer one, so it shares 4 to fill it.',
        svg: ring(310, 230, 92, 92, C.sage, 5) + ring(310, 230, 176, 176, C.sage, 5) + T(310, 120, '1st', { s: 22, c: C.deep }) + T(310, 36, '2nd', { s: 22, c: C.deep }) }
    ], { hint: 'The nucleus holds almost all the weight; electrons do the bonding.' }),

  'ap2-5': fig('Ionic bond: table salt', '0 0 800 480',
    circ(170, 150, 46, '#b4877b') + shine(156, 134, 12) + T(170, 160, 'Na', { s: 30, c: '#fff', halo: false }) + ring(170, 150, 86, 86, '#d8cfc0', 3, 'stroke-dasharray="6 7"')
      + circ(520, 150, 52, '#8aa3b0') + shine(504, 132, 13) + T(520, 160, 'Cl', { s: 30, c: '#fff', halo: false }) + ring(520, 150, 92, 92, '#d8cfc0', 3, 'stroke-dasharray="6 7"')
      + around(520, 150, 92, 8, 0).slice(1).map(([x, y]) => electron(x, y)).join('')
      + electron(256, 150) + line('M262 128 C310 60 390 60 424 130', C.goldD, 4, 'stroke-dasharray="8 8"') + arrow(410, 108, 426, 136, C.goldD, { w: 4 }),
    [
      { label: 'Sodium gives an electron', c: '#b4877b', detail: 'Sodium has one outer electron. It gives it away and becomes a positive ion, Na⁺ (an electron donor).',
        svg: ring(170, 150, 104, 104, '#b4877b', 5) + T(170, 290, 'Na: 1 outer electron', { s: 24, c: '#8a6157' }) },
      { label: 'Chlorine takes it', c: C.blueD, detail: 'Chlorine has seven outer electrons. It takes one to fill its outer level and becomes a negative ion, Cl⁻ (an electron acceptor).',
        svg: ring(520, 150, 110, 110, C.blueD, 5) + T(520, 290, 'Cl: 7 outer electrons', { s: 24, c: C.blueD }) + electron(428, 150) },
      { label: 'Opposites attract', c: C.ink, detail: 'Na⁺ and Cl⁻ are held together by the attraction between opposite charges. That is an ionic bond. In water the ions dissociate (split apart).',
        svg: circ(330, 400, 48, '#b4877b') + T(330, 410, 'Na⁺', { s: 28, c: '#fff', halo: false }) + circ(426, 400, 54, '#8aa3b0') + T(426, 410, 'Cl⁻', { s: 28, c: '#fff', halo: false }) + T(600, 410, 'NaCl', { s: 30, c: C.ink, a: 'start' }) }
    ], { hint: 'Follow the one electron from sodium to chlorine.' }),

  'ap2-6': fig('Water: shared electrons and weak bridges', '0 0 780 480',
    circ(280, 200, 72, '#ad6459') + shine(258, 176, 18, 11) + T(280, 212, 'O', { s: 36, c: '#fff', halo: false })
      + circ(200, 296, 44, '#a3bcc8') + T(200, 306, 'H', { s: 28, c: '#fff', halo: false }) + circ(360, 296, 44, '#a3bcc8') + T(360, 306, 'H', { s: 28, c: '#fff', halo: false })
      + circ(600, 320, 58, '#ad6459') + T(600, 330, 'O', { s: 30, c: '#fff', halo: false })
      + circ(672, 254, 36, '#a3bcc8') + T(672, 262, 'H', { s: 24, c: '#fff', halo: false }) + circ(680, 384, 36, '#a3bcc8') + T(680, 392, 'H', { s: 24, c: '#fff', halo: false }),
    [
      { label: 'Covalent bond', c: C.deep, detail: 'Oxygen and each hydrogen share a pair of electrons. Covalent molecules like water don’t dissociate in water.',
        svg: ring(238, 252, 30, 30, C.deep, 5) + ring(322, 252, 30, 30, C.deep, 5) + T(110, 230, 'Shared', { s: 24, c: C.deep }) + T(110, 258, 'electrons', { s: 24, c: C.deep }) },
      { label: 'Slightly negative oxygen', c: C.rose, detail: 'Oxygen pulls the shared electrons harder, so its end of the molecule is slightly negative (δ−).',
        svg: T(280, 100, 'δ−', { s: 34, c: C.rose }) },
      { label: 'Slightly positive hydrogens', c: C.blueD, detail: 'The hydrogen ends are slightly positive (δ+). This uneven charge makes water polar.',
        svg: T(150, 370, 'δ+', { s: 34, c: C.blueD }) + T(410, 370, 'δ+', { s: 34, c: C.blueD }) },
      { label: 'Hydrogen bond', c: C.goldD, detail: 'A very weak bridge between the positive hydrogen of one water molecule and the negative oxygen of the next. Hydrogen bonds also help fold proteins.',
        svg: line('M402 304 L542 318', C.goldD, 5, 'stroke-dasharray="4 10"') + T(470, 280, 'Hydrogen', { s: 24, c: C.goldD }) + T(470, 360, 'bond', { s: 24, c: C.goldD }) }
    ]),

  'ap2-15': fig('A red blood cell in three solutions', '0 0 900 460',
    '',
    [
      { label: 'Isotonic', c: C.sage, detail: 'Equal concentration inside and out (normal saline). Water moves in and out evenly, so the cell keeps its shape.',
        svg: panel(150, 'Isotonic', 'keeps its shape', 'normal', 14, arrow(30, 300, 70, 300, C.blueD, { w: 4, both: true }) + arrow(230, 300, 270, 300, C.blueD, { w: 4, both: true })) },
      { label: 'Hypotonic', c: C.blueD, detail: 'Less solute outside (like pure water). Water moves in by osmosis; the cell swells and can burst.',
        svg: panel(450, 'Hypotonic', 'water moves in', 'swell', 4, inA(450, 210)) },
      { label: 'Hypertonic', c: C.rose, detail: 'More solute outside (like 5% salt). Water moves out; the cell shrivels (crenates).',
        svg: panel(750, 'Hypertonic', 'water moves out', 'shrink', 30, outA(750, 210)) }
    ], { hint: 'Gold dots are dissolved salt. Blue arrows show which way water moves.' }),

  'ap2-17': fig('The pH scale', '30 20 840 340',
    PH.map((c, i) => rect(X(i), 160, 55.71, 40, i === 0 ? 14 : i === 13 ? 14 : 0, c)).join('') + Array.from({ length: 15 }, (_, i) => i).filter(i => i % 1 === 0 && i < 15).map(i => T(X(i), 236, String(i), { s: 20, c: C.muted })).join('')
      + T(60, 330, '← More acidic', { s: 24, c: C.rose, a: 'start' }) + T(840, 330, 'More basic →', { s: 24, c: C.blueD, a: 'end' }) + T(450, 330, 'Neutral', { s: 24, c: C.deep }),
    [
      { label: 'Stomach acid, about 1', c: '#c0574a', detail: 'Very acidic. Each step on the scale is a tenfold change in H⁺.', svg: pin(1, true, 70, 'Stomach ~1', '#a2463b') },
      { label: 'Lemon 2, tomato 4', c: '#d6964f', detail: 'Lemon juice (pH 2) is 100 times more acidic than tomato juice (pH 4): two steps, 10 × 10.', svg: pin(2, true, 110, 'Lemon 2', '#a86a2c') + pin(4, true, 70, 'Tomato 4', '#9a7a2f') },
      { label: 'Urine, about 6', c: '#c5c36f', detail: 'Slightly acidic.', svg: pin(6, true, 110, 'Urine ~6', '#78772e') },
      { label: 'Pure water, 7', c: C.sage, detail: 'Neutral: equal H⁺ and OH⁻. Saliva is just under 7.', svg: pin(7, true, 70, 'Water 7', C.deep) },
      { label: 'Blood, 7.4', c: '#6889a8', detail: 'Slightly basic. Buffers like carbonic acid and bicarbonate keep it in a narrow range.', svg: pin(7.4, true, 110, 'Blood 7.4', C.blueD).replace(/x="(\d+\.?\d*)" y="94"/, (m, x) => `x="${+x + 70}" y="94"`) }
    ], { hint: 'Below 7 is acidic, above 7 is basic.' }),
  // CO2: made in cells, meets water (carbonic acid), breathed out, used by plants, becomes the carbon in food
  'ap2-8': fig('Where carbon dioxide goes', '0 -40 900 630',
    arrow(250, 250, 335, 250, C.light, { w: 4 }) + arrow(565, 220, 650, 165, C.light, { w: 4 })
      + dash('M750 285 C752 305 752 318 750 330', C.light, 4) + arrow(750, 322, 750, 345, C.light, { w: 4 })
      + arrow(680, 450, 575, 462, C.light, { w: 4 }) + arrow(335, 470, 230, 360, C.light, { w: 4 }),
    [
      { label: 'Made in your cells', c: C.clay, detail: 'Carbon dioxide (CO₂) is a waste product of cellular respiration, when cells turn the energy in glucose into ATP.',
        svg: circ(150, 250, 98, '#f4e8df') + ell(130, 235, 46, 24, C.clay) + line('M98 235 q10 -12 20 0 t20 0 t20 0 t20 0', '#f4e8df', 3) + circ(170, 290, 18, C.plumD) + shine(116, 205, 22, 12)
          + co2(205, 190, .8) + co2(230, 225, .65) + T(150, 390, 'Body cell', { s: 24, c: C.ink, w: 700 }) },
      { label: 'Meets water: carbonic acid', c: C.rose, detail: 'If CO₂ builds up, it reacts with water to form carbonic acid, which is toxic.',
        svg: rect(340, 200, 230, 100, 50, '#f6e3df') + T(455, 240, 'CO₂ + H₂O', { s: 26, c: C.ink, w: 700, halo: false }) + T(455, 278, '→ carbonic acid', { s: 22, c: C.rose, w: 700, halo: false }) + T(455, 335, 'toxic if it builds up', { s: 20, c: C.muted }) },
      { label: 'Breathed out', c: C.blueD, detail: 'Because it would turn to acid, we breathe CO₂ out quickly through the lungs.',
        svg: sh('M700 70 C670 70 655 110 655 160 C655 205 672 230 700 230 C718 230 724 215 724 195 L724 95 C724 80 714 70 700 70 Z', '#e7a9a0') + sh('M800 70 C830 70 845 110 845 160 C845 205 828 230 800 230 C782 230 776 215 776 195 L776 95 C776 80 786 70 800 70 Z', '#e7a9a0')
          + line('M750 30 L750 120 M750 120 L728 140 M750 120 L772 140', '#c98a80', 7) + shine(682, 110, 14, 22) + shine(818, 110, 14, 22)
          + arrow(750, 26, 750, -2, C.blueD, { w: 4 }) + co2(800, 30, .7) + T(750, 268, 'Lungs', { s: 24, c: C.ink, w: 700 }) },
      { label: 'Used by plants', c: C.sage, detail: 'Plants take in CO₂ and use it in photosynthesis.',
        svg: circ(855, 395, 26, '#ebd08c') + line('M760 500 L760 395', C.deep, 6) + sh('M760 430 C720 430 700 400 702 372 C735 370 758 392 760 430 Z', C.sage) + sh('M760 405 C800 405 822 375 818 346 C786 346 762 368 760 405 Z', '#8ea086')
          + rect(722, 496, 76, 30, 8, C.clay) + co2(690, 360, .65) + T(760, 560, 'Plant', { s: 24, c: C.ink, w: 700 }) },
      { label: 'The carbon in all organic compounds', c: C.goldD, detail: 'CO₂ is the source of the carbon in all organic compounds, like the sugars, fats and proteins in food.',
        svg: sh('M455 405 L500 430 L500 480 L455 505 L410 480 L410 430 Z', '#ebd08c') + T(455, 465, 'C', { s: 30, c: C.goldD, w: 800, halo: false }) + T(455, 534, 'Carbon in food', { s: 22, c: C.ink, w: 700 }) }
    ], { keep: true, hint: 'Follow the arrows: from your cells, out through your lungs, into plants, and back as food.' }),

  // DNA vs RNA bases: A pairs with T, C pairs with G; RNA swaps U in for T
  'ap2-13': fig('DNA and RNA bases', '0 0 900 560',
    T(280, 40, 'DNA · double strand', { s: 24, c: C.ink, w: 700 }) + T(720, 40, 'RNA · single strand', { s: 24, c: C.ink, w: 700 }),
    [
      { label: 'Adenine (A)', c: C.sage, detail: 'A purine: double ring. In DNA, A pairs with T.', svg: BASES('A') },
      { label: 'Thymine (T)', c: C.blue, detail: 'A pyrimidine: single ring. Found in DNA. RNA uses uracil instead.', svg: BASES('T') },
      { label: 'Guanine (G)', c: C.gold, detail: 'A purine: double ring. In DNA, G pairs with C.', svg: BASES('G') },
      { label: 'Cytosine (C)', c: C.clay, detail: 'A pyrimidine: single ring. In DNA, C pairs with G.', svg: BASES('C') },
      { label: 'Uracil (U)', c: C.plum, detail: 'A pyrimidine: single ring. RNA swaps uracil in for thymine.', svg: BASES('U') },
      { label: 'Sugar and phosphate backbone', c: C.ink, detail: 'Each nucleotide is a sugar, a base and a phosphate. The sugar is deoxyribose in DNA and ribose in RNA. DNA is a double helix; RNA is single-stranded.',
        svg: [170, 390, 620].map(x => rect(x - 9, 70, 18, 450, 9, '#596166') + [0, 1, 2, 3, 4].map(i => circ(x, 110 + i * 85, 8, '#ebd08c')).join('')).join('') }
    ], { hint: 'Longer blocks are purines (double ring); shorter ones are pyrimidines (single ring).' })
};
