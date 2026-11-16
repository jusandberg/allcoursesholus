// More pictures for Anatomy & Physiology, lessons 1 and 2
const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f, body, smooth, box } = require('./lib.js');
const L = (x, y, s, c, a, sz) => T(x, y, s, { s: sz || 22, c, a: a || 'start' });
const hex = (x, y, r, c) => sh(Array.from({ length: 6 }, (_, i) => { const a = Math.PI / 6 + i * Math.PI / 3; return (i ? 'L' : 'M') + f(x + r * Math.cos(a)) + ' ' + f(y + r * Math.sin(a)); }).join('') + 'Z', c);
const pent = (x, y, r, c) => sh(Array.from({ length: 5 }, (_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; return (i ? 'L' : 'M') + f(x + r * Math.cos(a)) + ' ' + f(y + r * Math.sin(a)); }).join('') + 'Z', c);

// body-system overlays in the body's own coordinates (viewBox 60 30 380 950)
const VB = '-40 30 580 950';
const lab = (x, y, s, c, a) => T(x, y, s, { s: 26, c, a: a || 'start' });
const bones = line('M250 150 L250 520 M200 470 C220 510 280 510 300 470 M214 230 C230 220 270 220 286 230 M214 260 C230 250 270 250 286 260 M214 290 C230 280 270 280 286 290 M335 220 L370 380 L398 528 M165 220 L130 380 L102 528 M226 540 L210 760 L208 930 M274 540 L290 760 L292 930', '#d8c39a', 9) + ell(250, 92, 44, 50, '#efe6cf');
const muscles = [[146, 300, 16, 60], [354, 300, 16, 60], [128, 440, 12, 50], [372, 440, 12, 50], [212, 640, 24, 90], [288, 640, 24, 90], [206, 840, 16, 60], [294, 840, 16, 60], [220, 330, 26, 40], [280, 330, 26, 40]].map(([x, y, rx, ry]) => ell(x, y, rx, ry, '#d98f80')).join('');
const nerves = ell(250, 80, 42, 34, '#e3b9b0') + line('M250 120 L250 520 M250 200 L150 300 L110 520 M250 200 L350 300 L390 520 M250 500 L210 760 L200 930 M250 500 L290 760 L300 930', '#e6c264', 4);
const glands = [[250, 100, 7], [250, 160, 10], [250, 220, 9], [196, 330, 8], [304, 330, 8], [270, 340, 9], [212, 470, 8], [288, 470, 8]].map(([x, y, r]) => circ(x, y, r, '#c4a3cf')).join('');
const vessels = line('M262 262 C262 200 250 170 250 150 M250 280 L250 520 L220 760 L214 930 M250 520 L280 760 L286 930 M262 262 L350 300 L392 520 M238 262 L150 300 L108 520', '#c8524a', 6) + line('M246 290 L246 520 L216 760 M254 520 L284 760', '#5f7ba3', 5) + sh('M262 248 C252 236 236 244 240 260 C244 276 262 290 262 290 C262 290 282 276 284 260 C288 244 272 236 262 248 Z', '#c86d56');
const lymph = line('M250 170 L240 300 L250 520 M240 230 L170 240 M260 230 L330 240 M250 520 L220 560 M250 520 L280 560', '#a3b795', 4) + [[232, 168], [268, 168], [168, 238], [332, 238], [214, 480], [286, 480]].map(([x, y]) => circ(x, y, 9, '#6f91a2')).join('') + ell(320, 320, 12, 20, '#a8665a');
const resp = line('M250 112 L250 210 M250 210 L216 236 M250 210 L284 236', '#e9dccb', 10) + ell(208, 270, 40, 62, '#f1c9c2') + ell(292, 270, 36, 60, '#f1c9c2');
const dig = line('M250 112 L250 280', '#e3a68c', 9) + sh('M250 280 C290 270 320 290 312 320 C304 344 270 340 254 330 Z', '#e09c88') + sh('M190 300 C200 280 240 280 246 300 C240 320 200 330 190 300 Z', '#9a5d50') + line('M220 360 C280 350 300 380 260 390 C220 400 210 420 260 430 C300 440 300 460 250 470', '#e3a68c', 12) + line('M200 350 L200 470 L300 470 L300 350', '#d9a08a', 10);
const uri = sh('M196 316 C166 312 162 360 176 380 C188 396 218 392 220 360 C222 336 214 318 196 316 Z', '#c98d7e') + sh('M304 316 C334 312 338 360 324 380 C312 396 282 392 280 360 C278 336 286 318 304 316 Z', '#c98d7e') + line('M214 360 C226 410 232 460 240 494 M286 360 C274 410 268 460 260 494', '#c9a65a', 5) + ell(250, 510, 26, 20, '#e3a68c');
const repro = sh('M232 470 C232 440 268 440 268 470 C268 492 256 500 250 512 C244 500 232 492 232 470 Z', '#d98aa8') + ell(214, 470, 10, 7, '#eab3c7') + ell(286, 470, 10, 7, '#eab3c7') + line('M232 462 L214 470 M268 462 L286 470', '#e6b7c2', 4);

// diffusion box
const dots = (pts, c) => pts.map(([x, y]) => circ(x, y, 8, c)).join('');
const crowd = Array.from({ length: 22 }, (_, i) => [70 + (i * 37) % 120, 70 + (i * 53) % 220]);
const spread = Array.from({ length: 22 }, (_, i) => [450 + (i * 137) % 370, 70 + (i * 89 + (i % 3) * 40) % 230]);

module.exports = {
  'ap1-9': fig('The four tissue types', '0 0 880 320',
    '',
    [
      { label: 'Epithelial', c: C.rose, detail: 'Covers and protects surfaces inside and out, forms glands and lines cavities. Cells sit close together with almost nothing between them.', svg: rect(40, 60, 180, 160, 22, '#f8eee9') + Array.from({ length: 5 }, (_, i) => rect(56 + i * 30, 120, 28, 56, 6, '#efc0b0') + ell(70 + i * 30, 150, 6, 9, '#7a6681')).join('') + rect(56, 178, 150, 8, 4, '#c7b07a') + L(130, 260, 'Epithelial', C.rose, 'middle', 24) + L(130, 288, 'covers, lines', C.muted, 'middle', 17) },
      { label: 'Connective', c: C.goldD, detail: 'Binds and supports. Cells make collagen and elastin fibres set in a nonliving matrix. Blood, bone and lymphatic tissue are special kinds.', svg: rect(250, 60, 180, 160, 22, '#f8f2e4') + line('M266 90 C300 120 340 80 414 120 M266 150 C320 130 360 190 414 160 M280 200 C320 170 370 210 410 190', '#e0c584', 5) + line('M270 120 C320 110 350 150 400 100', '#c4a3cf', 3) + [[300, 110], [370, 170], [320, 180]].map(([x, y]) => ell(x, y, 10, 6, '#a68a4c')).join('') + L(340, 260, 'Connective', C.goldD, 'middle', 24) + L(340, 288, 'binds, supports', C.muted, 'middle', 17) },
      { label: 'Muscle', c: '#b9675a', detail: 'Long cells (fibres) that contract to move things. Three types: skeletal, smooth and cardiac.', svg: rect(460, 60, 180, 160, 22, '#f8ebe8') + [100, 140, 180].map(y => rect(476, y - 16, 148, 32, 16, '#d98f80') + Array.from({ length: 9 }, (_, i) => line(`M${490 + i * 15} ${y - 13} L${490 + i * 15} ${y + 13}`, '#b9675a', 3)).join('')).join('') + L(550, 260, 'Muscle', '#b9675a', 'middle', 24) + L(550, 288, 'contracts', C.muted, 'middle', 17) },
      { label: 'Nervous', c: C.plumD, detail: 'Nerve cells that link the body’s sensory and motor structures into one coordinating system.', svg: rect(670, 60, 180, 160, 22, '#f3eef5') + line('M720 140 L700 100 M720 140 L690 150 M720 140 L706 180 M720 140 L820 140 M820 140 L836 120 M820 140 L838 160', '#9c8aa2', 5) + circ(720, 140, 18, '#b49ac0') + circ(720, 140, 7, '#7a6681') + L(760, 260, 'Nervous', C.plumD, 'middle', 24) + L(760, 288, 'coordinates', C.muted, 'middle', 17) }
    ]),

  'ap1-10': fig('Covering, support and movement', VB,
    body(),
    [
      { label: 'Integumentary', c: C.goldD, detail: 'The skin plus hair, nails, sebaceous and sweat glands. Protects and insulates, helps control temperature and water, and senses temperature and pressure.', svg: body().match(/d="M[^"]*"/g).filter(d => d.length > 60).map(d => outline(d.slice(3, -1), C.goldD, 6)).join('') + ring(250, 94, 58, 58, C.goldD, 6) + lab(-30, 200, 'Skin', C.goldD) },
      { label: 'Skeletal', c: '#a68a4c', detail: 'Bones, cartilage and the membranes around bones. Protects and supports, acts as levers, makes blood cells in red marrow and stores minerals like calcium and phosphorus.', svg: bones + lab(-30, 420, 'Bones', '#8a6f35') },
      { label: 'Muscular', c: C.rose, detail: 'Muscles, fasciae, tendon sheaths and bursae. Skeletal muscle moves bones, smooth muscle moves food and blood, cardiac muscle beats the heart.', svg: muscles + lab(420, 640, 'Muscles', C.rose) }
    ]),

  'ap1-11': fig('Control and transport', VB,
    body(),
    [
      { label: 'Nervous', c: C.goldD, detail: 'Brain, spinal cord, cranial and peripheral nerves. Controls and coordinates the other systems and handles the special senses.', svg: nerves + lab(-30, 90, 'Nervous', '#8a6f35') },
      { label: 'Endocrine', c: C.plumD, detail: 'The ductless glands. The pituitary controls the thyroid, adrenals, ovaries and testes; the hypothalamus links hormones with the nervous system.', svg: glands + lab(420, 160, 'Endocrine', C.plumD) },
      { label: 'Cardiovascular', c: C.red, detail: 'Heart, arteries, veins and capillaries. Pumps blood carrying oxygen, nutrients and wastes.', svg: vessels + lab(420, 300, 'Cardio-', C.red) + lab(420, 330, 'vascular', C.red) },
      { label: 'Lymphatic (immune)', c: C.deep, detail: 'Lymph nodes, thymus, spleen and lymph vessels. Drains extra tissue fluid, carries absorbed fats to the blood and protects against disease.', svg: lymph + lab(-30, 300, 'Lymphatic', C.deep) }
    ]),

  'ap1-12': fig('Exchange, processing and reproduction', VB,
    body(),
    [
      { label: 'Respiratory', c: C.blueD, detail: 'Nasal cavities, pharynx, larynx, trachea, bronchi and lungs. Brings oxygen into the blood and removes carbon dioxide.', svg: resp + lab(-30, 260, 'Respiratory', C.blueD) },
      { label: 'Digestive', c: C.rose, detail: 'The alimentary canal (mouth to anus) plus salivary glands, liver and pancreas. Breaks food down so cells can absorb it.', svg: dig + lab(420, 340, 'Digestive', C.rose) },
      { label: 'Urinary', c: C.goldD, detail: 'Two kidneys, two ureters, the bladder and urethra. Regulates the blood chemically and makes and removes urine.', svg: uri + lab(-30, 380, 'Urinary', '#8a6f35') },
      { label: 'Reproductive', c: '#b35d80', detail: 'Ovaries, uterine tubes, uterus and vagina, or testes, vas deferens, seminal vesicles, prostate, penis and urethra. Continues the species.', svg: repro + lab(420, 480, 'Reproductive', '#b35d80') }
    ]),

  'ap1-14': fig('Negative and positive feedback', '0 0 880 420',
    '',
    [
      { label: 'Negative feedback', c: C.deep, detail: 'A change triggers a response that reverses it, bringing things back to normal.', svg: ring(220, 220, 140, 140, '#a3b795', 6) + arrow(330, 120, 346, 140, '#7d9378', { w: 6 }) + arrow(110, 320, 94, 300, '#7d9378', { w: 6 }) + circ(220, 220, 46, '#7d9378') + T(220, 238, '−', { s: 56, c: '#fff', halo: false }) + L(220, 400, 'Negative: reverses the change', C.deep, 'middle') },
      { label: 'Thermostat example', c: C.blueD, detail: 'When it gets cold, the furnace turns on; when it’s warm enough, it turns off. Body temperature control works the same way.', svg: box(220, 80, 170, 46, '#e3edf1', 'Too cold', C.blueD, 20) + box(370, 220, 150, 46, '#f4ddd6', 'Heat on', C.rose, 20) + box(220, 360, 170, 46, '#f4ddd6', 'Warm enough', C.rose, 20) + box(70, 220, 130, 46, '#e3edf1', 'Heat off', C.blueD, 20) },
      { label: 'Positive feedback', c: C.rose, detail: 'A stimulus leads to more of the same response, building up instead of settling down.', svg: line(smooth(Array.from({ length: 40 }, (_, i) => { const a = i / 39 * 4 * Math.PI, r = 20 + i * 3.4; return [660 + r * Math.cos(a), 210 + r * Math.sin(a)]; })), '#c86d56', 6) + circ(660, 210, 34, '#c86d56') + T(660, 228, '+', { s: 50, c: '#fff', halo: false }) + L(660, 400, 'Positive: builds up', C.rose, 'middle') },
      { label: 'Labour example', c: '#b35d80', detail: 'After the first contraction in labour, the uterus keeps contracting harder and more often until birth.', svg: L(660, 40, 'Labour: stronger and stronger', '#b35d80', 'middle') }
    ]),

  'ap2-3': fig('Isotopes of carbon', '0 0 880 340',
    '',
    [6, 7, 8].map((n, k) => ({ label: 'C' + (6 + n), c: [C.deep, C.goldD, C.rose][k], detail: k === 0 ? 'Carbon-12: 6 protons, 6 neutrons. All isotopes of carbon have 6 protons and 6 electrons.' : k === 1 ? 'Carbon-13: 6 protons, 7 neutrons.' : 'Carbon-14: 6 protons, 8 neutrons. Mildly radioactive; used to date fossil remains.',
      svg: (() => { const x = 150 + k * 290; let s = ring(x, 160, 110, 110, '#dfe4de', 2, 'stroke-dasharray="5 7"'); const tot = 6 + n; for (let i = 0; i < tot; i++) { const a = i / tot * 2 * Math.PI * 2.3, r = 8 + i * 3.2; s += circ(x + r * Math.cos(a), 160 + r * Math.sin(a), 13, i % 2 && i / 2 < 6.5 || i >= 12 ? '#8aa3b0' : '#ad6459'); } return s + T(x, 310, 'C' + (6 + n), { s: 30, c: [C.deep, '#7a5f22', C.rose][k] }) + T(x, 336, '6 p + ' + n + ' n', { s: 18, c: C.muted }); })() })),
    { hint: 'Red: protons. Blue: neutrons. Same element, different number of neutrons.' }),

  'ap2-10': fig('Carbohydrates, from small to large', '0 0 880 360',
    '',
    [
      { label: 'Simple sugars', c: C.goldD, detail: 'Monosaccharides: six-carbon glucose and fructose, five-carbon ribose and deoxyribose (part of RNA and DNA).', svg: hex(110, 140, 44, '#e6c98a') + T(110, 148, 'glucose', { s: 15, c: '#5f4a1a', halo: false }) + pent(110, 260, 40, '#ebd3a0') + T(110, 266, 'ribose', { s: 15, c: '#5f4a1a', halo: false }) + L(110, 340, 'Simple sugars', C.goldD, 'middle') },
      { label: 'Sucrose (a disaccharide)', c: C.rose, detail: 'Glucose plus fructose make sucrose, table sugar.', svg: hex(270, 180, 40, '#e6c98a') + pent(350, 180, 36, '#e6a99c') + line('M308 180 L318 180', C.ink, 4) + L(310, 260, 'Sucrose', C.rose, 'middle') + L(310, 288, 'glucose + fructose', C.muted, 'middle', 17) },
      { label: 'Starch and glycogen', c: C.deep, detail: 'Many glucose units bonded together store energy: starch in plants, glycogen (animal starch) in people.', svg: [[480, 120], [520, 140], [560, 120], [600, 140], [560, 170], [600, 200], [640, 180]].map(([x, y]) => hex(x, y, 20, '#a3b795')).join('') + L(560, 260, 'Starch, glycogen', C.deep, 'middle') + L(560, 288, 'store energy', C.muted, 'middle', 17) },
      { label: 'Cellulose', c: C.blueD, detail: 'Long straight glucose chains that strengthen plant cells (plant fibre).', svg: [0, 1, 2].map(r => Array.from({ length: 5 }, (_, i) => hex(720 + i * 34, 110 + r * 44, 17, '#a3bcc8')).join('')).join('') + L(790, 260, 'Cellulose', C.blueD, 'middle') + L(790, 288, 'strengthens', C.muted, 'middle', 17) }
    ], { hint: 'Carbon, hydrogen and oxygen in a 1:2:1 ratio, like C₆H₁₂O₆.' }),

  'ap2-11': fig('Lipids', '0 0 880 360',
    '',
    [
      { label: 'Triglyceride', c: C.goldD, detail: 'About 95% of body fat: one glycerol (three carbons) plus three fatty acids. Stores energy, insulates and cushions organs.', svg: rect(60, 80, 34, 180, 12, '#e6c98a') + T(77, 300, 'glycerol', { s: 16, c: C.muted }) + [110, 170, 230].map(y => line(`M94 ${y} L300 ${y}`, '#d3a84b', 10)).join('') + L(180, 50, 'Triglyceride', C.goldD, 'middle') },
      { label: 'Saturated', c: C.rose, detail: 'Only single bonds, so the chain is straight and packs tightly. Solid at room temperature: butter, beef, coconut and palm oils.', svg: line('M380 120 L600 120', '#c86d56', 10) + line('M380 150 L600 150', '#c86d56', 10) + L(490, 90, 'Saturated: straight, solid', C.rose, 'middle') },
      { label: 'Unsaturated', c: C.blueD, detail: 'One or more double bonds put kinks in the chain, so it stays liquid: sunflower, corn and fish oils.', svg: line('M380 230 L480 230 L520 260 L600 260', '#6f91a2', 10) + line('M380 290 L460 290 L500 320 L600 320', '#6f91a2', 10) + circ(498, 244, 8, '#3b5562') + L(490, 210, 'Unsaturated: kinked, liquid', C.blueD, 'middle') },
      { label: 'Phospholipid', c: C.plumD, detail: 'A water-loving head and two water-fearing tails: the building block of cell membranes.', svg: circ(740, 120, 30, '#c4b0cc') + line('M728 150 L728 280 M752 150 L752 280', '#d9cfa8', 8) + L(740, 320, 'Phospholipid', C.plumD, 'middle') }
    ], { hint: 'Lipids don’t dissolve in water.' }),

  'ap2-12': fig('How a protein takes shape', '0 0 880 340',
    '',
    [
      { label: 'Amino acids', c: C.goldD, detail: '20 amino acids are the building blocks. Each has an amine group, a carboxyl group, a hydrogen and a variable R group.', svg: ['#c86d56', '#6f91a2', '#d3a84b', '#8fa48a'].map((c, i) => circ(70 + i * 40, 160, 16, c)).join('') + L(130, 260, 'Amino acids', C.goldD, 'middle') },
      { label: 'Primary: the sequence', c: C.rose, detail: 'Amino acids joined in order by peptide bonds.', svg: line('M250 160 L390 160', '#d9cfa8', 4) + Array.from({ length: 6 }, (_, i) => circ(256 + i * 26, 160, 12, ['#c86d56', '#6f91a2', '#d3a84b', '#8fa48a'][i % 4])).join('') + L(320, 260, 'Primary', C.rose, 'middle') + L(320, 288, 'sequence', C.muted, 'middle', 17) },
      { label: 'Secondary: coils and sheets', c: C.blueD, detail: 'Hydrogen bonds coil the chain into helices or fold it into pleated sheets.', svg: line(smooth(Array.from({ length: 30 }, (_, i) => [440 + i * 4.5, 160 + 34 * Math.sin(i * .9)])), '#6f91a2', 8) + L(510, 260, 'Secondary', C.blueD, 'middle') + L(510, 288, 'helix, sheet', C.muted, 'middle', 17) },
      { label: 'Tertiary: folded', c: C.deep, detail: 'Further folding, partly from bonds between sulfur atoms, gives the 3D shape. Heat or pH changes can undo it.', svg: line(smooth([[640, 120], [700, 100], [720, 150], [660, 170], [650, 210], [720, 220], [700, 180]]), '#7d9378', 10) + L(690, 260, 'Tertiary', C.deep, 'middle') + L(690, 288, 'folded', C.muted, 'middle', 17) },
      { label: 'Quaternary: units together', c: C.plumD, detail: 'Separate folded units fit together into one working protein.', svg: [[790, 130], [830, 140], [800, 180], [840, 185]].map(([x, y], i) => circ(x, y, 24, ['#c4b0cc', '#a3b795', '#e6c98a', '#a3bcc8'][i])).join('') + L(815, 260, 'Quaternary', C.plumD, 'middle') }
    ]),

  'ap2-14': fig('Diffusion: from high to low', '0 0 880 360',
    rect(40, 50, 240, 260, 22, '#f6efe6') + rect(420, 50, 420, 260, 22, '#f6efe6') + arrow(300, 180, 400, 180, C.light, { w: 6 }),
    [
      { label: 'High concentration', c: C.rose, detail: 'Molecules start crowded together, like perfume just opened.', svg: dots(crowd, '#c86d56') + L(160, 340, 'Start: crowded', C.rose, 'middle') },
      { label: 'Spread out to low', c: C.blueD, detail: 'They move from high to low concentration until spread evenly.', svg: dots(spread, '#6f91a2') + L(630, 340, 'Later: spread evenly', C.blueD, 'middle') },
      { label: 'Brownian movement', c: C.goldD, detail: 'Random collisions with other molecules drive the spreading. Higher temperature means faster movement and faster diffusion.', svg: line('M600 120 L640 100 L630 150 L680 140 L660 190', '#a68a4c', 3) + L(700, 100, 'random bumps', C.goldD) },
      { label: 'In the lungs', c: C.deep, detail: 'Oxygen diffuses from the air (high) into the blood (low); carbon dioxide diffuses from the blood (high) into the lungs (low).', svg: L(350, 30, 'Lungs: O₂ air → blood, CO₂ blood → air', C.deep, 'middle') }
    ]),

  'ap2-16': fig('Active transport: uphill, with ATP', '0 0 860 380',
    rect(0, 60, 860, 110, 0, '#eaf1f3') + rect(0, 230, 860, 110, 0, '#f6ece6') + rect(0, 170, 860, 60, 0, '#efe6cf') + T(20, 92, 'Outside: low concentration', { s: 20, c: C.blueD, a: 'start' }) + T(20, 330, 'Inside: high concentration', { s: 20, c: C.rose, a: 'start' })
      + [[120, 120], [700, 130]].map(([x, y]) => circ(x, y, 9, '#d3a84b')).join('') + Array.from({ length: 12 }, (_, i) => circ(80 + (i * 67) % 700, 260 + (i * 29) % 60, 9, '#d3a84b')).join(''),
    [
      { label: 'Against the gradient', c: C.rose, detail: 'Active transport moves materials from low concentration to high, the opposite of diffusion.', svg: sh('M390 170 C390 150 470 150 470 170 L476 232 C476 252 384 252 384 232 Z', '#b4877b') + arrow(430, 120, 430, 290, C.rose, { w: 6 }) },
      { label: 'Needs ATP', c: C.goldD, detail: 'It takes energy in the form of ATP.', svg: rect(500, 186, 60, 30, 10, '#d3a84b') + T(530, 208, 'ATP', { s: 16, c: '#fff', halo: false }) },
      { label: 'What it moves', c: C.deep, detail: 'Sugars, amino acids, larger proteins and fats often have to be moved this way. It’s the main way most cells get what they need.', svg: L(600, 150, 'sugars, amino acids, fats', C.deep) },
      { label: 'Diffusion for contrast', c: C.blueD, detail: 'Diffusion and osmosis go from high to low on their own, with no ATP.', svg: arrow(200, 290, 200, 110, C.blueD, { w: 4 }) + L(220, 150, 'diffusion: high → low, free', C.blueD) }
    ])
};
