// More pictures for Anatomy & Physiology, lessons 11 to 14
const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f, smooth, box, body } = require('./lib.js');
const L = (x, y, s, c, a, sz) => T(x, y, s, { s: sz || 22, c, a: a || 'start' });
const rbc = (x, y, r) => circ(x, y, r || 22, '#c8524a') + circ(x, y, (r || 22) * .45, '#d97a70');
const CB = 'M110 250 C90 160 160 70 280 56 C400 44 520 90 550 180 C570 240 548 296 500 306 C470 312 440 300 420 290 C380 300 330 310 300 300 C250 320 200 330 160 310 C130 296 116 276 110 250 Z';

// cardiac cycle bar (0.8 s)
const TX = t => 80 + t * 900;

module.exports = {
  'ap11-2': fig('Ventricles and cerebrospinal fluid', '60 30 560 440',
    sh(CB, '#efc9bf') + ell(474, 330, 76, 44, '#d9a89a') + sh('M336 292 C360 304 400 304 414 292 L408 360 C402 400 398 430 394 456 L360 456 C362 420 356 380 350 350 Z', '#cfa7a0'),
    [
      { label: 'Lateral ventricles', c: C.blueD, detail: 'Two, one in each hemisphere.', svg: sh('M220 170 C260 130 360 120 420 150 C440 170 420 190 400 186 C360 170 290 170 250 200 C230 214 210 196 220 170 Z', '#a3c3d0') + L(420, 110, 'Lateral', C.blueD) },
      { label: 'Third ventricle', c: '#5f8798', detail: 'In the diencephalon, connected to the lateral ventricles by the interventricular foramen.', svg: ell(350, 240, 16, 30, '#8fb0c0') + L(250, 256, 'Third', '#5f8798', 'end') },
      { label: 'Cerebral aqueduct', c: C.plumD, detail: 'A narrow channel linking the third and fourth ventricles.', svg: line('M356 268 C370 290 392 300 400 318', '#8fb0c0', 6) },
      { label: 'Fourth ventricle', c: C.goldD, detail: 'Between the cerebellum and the lower brainstem.', svg: sh('M396 316 L426 330 L404 356 Z', '#8fb0c0') + L(330, 420, 'Fourth', C.goldD, 'end') },
      { label: 'CSF: a shock absorber', c: C.deep, detail: 'Cerebrospinal fluid circulates through the ventricles and the subarachnoid space, cushioning the CNS and carrying nutrients.', svg: outline(CB, '#a3c3d0', 8) + L(110, 60, 'CSF around and inside', C.deep) }
    ]),

  'ap11-8': fig('Sympathetic vs parasympathetic', '0 0 880 440',
    line('M440 30 L440 420', '#dfe4de', 3) + T(220, 40, 'Sympathetic: fight or flight', { s: 22, c: C.rose }) + T(660, 40, 'Parasympathetic: rest and repose', { s: 22, c: C.deep }),
    [
      { label: 'Heart', c: C.red, detail: 'Sympathetic raises heart rate and blood pressure; parasympathetic slows the heart and lowers blood pressure.', svg: L(220, 110, '♥ Heart rate up', C.rose, 'middle') + L(660, 110, '♥ Heart rate down', C.deep, 'middle') },
      { label: 'Airways and breathing', c: C.blueD, detail: 'Sympathetic opens the airways; parasympathetic slows breathing.', svg: L(220, 170, 'Airways open', C.rose, 'middle') + L(660, 170, 'Breathing slows', C.deep, 'middle') },
      { label: 'Digestion', c: C.goldD, detail: 'Sympathetic slows digestion; parasympathetic stimulates digestion, urination and defecation.', svg: L(220, 230, 'Digestion slows', C.rose, 'middle') + L(660, 230, 'Digestion, urination on', C.deep, 'middle') },
      { label: 'Pupil, sweat, glucose', c: C.plumD, detail: 'Sympathetic triggers sweating and glucose release. Parasympathetic constricts the pupil.', svg: L(220, 290, 'Sweat, glucose released', C.rose, 'middle') + L(660, 290, 'Pupil constricts', C.deep, 'middle') },
      { label: 'Where the fibres start', c: C.ink, detail: 'Sympathetic fibres come from the thoracic and lumbar cord and use acetylcholine then norepinephrine. Parasympathetic fibres come from the brainstem and sacral cord and use acetylcholine throughout.', svg: L(220, 360, 'Thoracic, lumbar cord', C.muted, 'middle', 18) + L(220, 388, 'ACh → norepinephrine', C.muted, 'middle', 18) + L(660, 360, 'Brainstem, sacral cord', C.muted, 'middle', 18) + L(660, 388, 'ACh throughout', C.muted, 'middle', 18) }
    ], { hint: 'The autonomic system controls glands, smooth muscle and cardiac muscle automatically.' }),

  'ap11-10': fig('Taste and smell', '0 0 860 400',
    '',
    [
      { label: 'Taste buds', c: C.rose, detail: 'Taste buds sit on the papillae of the tongue (and the palate and pharynx). Taste hairs poke out of the taste pore.', svg: sh('M60 330 C60 130 140 60 200 60 C260 60 340 130 340 330 Z', '#e6a99c') + Array.from({ length: 14 }, (_, i) => circ(110 + (i % 4) * 56 + (Math.floor(i / 4) % 2) * 28, 130 + Math.floor(i / 4) * 50, 9, '#d98f80')).join('') + L(200, 370, 'Tongue', C.rose, 'middle') },
      { label: 'Five tastes', c: C.goldD, detail: 'Sweet, sour, salty, bitter and umami. Food must dissolve in saliva first.', svg: L(380, 100, 'Sweet · sour · salty', C.goldD) + L(380, 130, 'bitter · umami', C.goldD) },
      { label: 'Taste nerves', c: C.plumD, detail: 'Signals travel on cranial nerves VII, IX and X to the taste cortex in the parietal lobe.', svg: L(380, 250, 'Nerves VII, IX, X → parietal lobe', C.plumD, 'start', 18) },
      { label: 'Smell receptors', c: C.blueD, detail: 'Odour molecules dissolve in mucus high in the nose (superior conchae) and bind to bipolar olfactory neurons, then pass through the olfactory bulbs to the cortex.', svg: sh('M560 330 L560 240 C560 200 600 180 640 200 L760 280 L760 330 Z', '#f0d0bc') + ell(660, 220, 70, 16, '#c4b0cc') + [600, 640, 680, 720].map(x => line(`M${x} 230 L${x} 260`, '#9c8aa2', 3)).join('') + L(660, 190, 'Olfactory bulb', C.plumD, 'middle', 18) + L(660, 370, 'Smell: top of the nose', C.blueD, 'middle') },
      { label: 'Smell shapes taste', c: C.deep, detail: 'Smell strongly affects taste, and smell receptors adapt quickly to an odour.', svg: arrow(560, 300, 360, 300, C.deep, { w: 4 }) + L(460, 284, 'smell → taste', C.deep, 'middle', 18) }
    ]),

  'ap11-12': fig('From light to sight', '0 0 880 400',
    rect(0, 40, 880, 300, 0, '#f7f1ec') + arrow(20, 70, 140, 70, '#e6b34a', { w: 6 }) + L(20, 56, 'light', '#a68a4c', 'start', 18),
    [
      { label: 'Ganglion cells', c: C.plumD, detail: 'Their axons form the optic nerve, which leaves at the optic disk: the blind spot, with no receptors.', svg: [0, 1, 2, 3].map(i => circ(220, 110 + i * 60, 16, '#c4b0cc')).join('') + line('M220 110 L200 360 M220 290 L200 360', '#9c8aa2', 3) + L(220, 380, 'Ganglion', C.plumD, 'middle', 18) },
      { label: 'Bipolar cells', c: C.blueD, detail: 'Rods and cones pass signals to bipolar cells, which pass them to ganglion cells.', svg: [0, 1, 2, 3].map(i => ell(400, 110 + i * 60, 12, 20, '#a3bcc8') + line(`M412 ${110 + i * 60} L560 ${110 + i * 60} M388 ${110 + i * 60} L236 ${110 + i * 60}`, '#8aa3b0', 2)).join('') + L(400, 380, 'Bipolar', C.blueD, 'middle', 18) },
      { label: 'Rods', c: C.ink, detail: 'More numerous and very light-sensitive. Work in dim light, no colour. Contain rhodopsin, which needs vitamin A.', svg: [0, 2].map(i => rect(570, 98 + i * 60, 160, 22, 11, '#8a958c')).join('') + L(740, 116, 'Rod', C.ink) },
      { label: 'Cones', c: C.rose, detail: 'Colour vision; need lots of light. Red, green and blue cones. The fovea centralis has the sharpest vision.', svg: [1, 3].map((i, k) => sh(`M570 ${170 + (i - 1) * 60 - 12} L690 ${170 + (i - 1) * 60 - 4} L690 ${170 + (i - 1) * 60 + 4} L570 ${170 + (i - 1) * 60 + 12} Z`, ['#c86d56', '#71836d'][k])).join('') + L(740, 176, 'Cone', C.rose) },
      { label: 'To the occipital lobe', c: C.goldD, detail: 'Vision is interpreted in the occipital lobe at the back of the brain.', svg: arrow(200, 360, 80, 380, C.goldD, { w: 4 }) + L(30, 30, 'Optic nerve → occipital lobe', C.goldD, 'start', 18) }
    ], { hint: 'Light passes through the other layers to reach the rods and cones at the back.' }),

  'ap12-2': fig('Negative feedback: thyroid hormone', '0 0 820 440',
    '',
    [
      { label: 'Hypothalamus: TRH', c: C.plumD, detail: 'The hypothalamus releases TRH, telling the pituitary to release TSH.', svg: box(220, 70, 240, 60, '#ece2ef', 'Hypothalamus', C.plumD, 22) + arrow(220, 100, 220, 170, C.plumD, { w: 5 }) + L(236, 140, 'TRH', C.plumD) },
      { label: 'Pituitary: TSH', c: C.goldD, detail: 'The anterior pituitary releases TSH, which stimulates the thyroid.', svg: box(220, 200, 240, 60, '#f5ecd6', 'Pituitary', '#7a5f22', 22) + arrow(220, 230, 220, 300, C.goldD, { w: 5 }) + L(236, 270, 'TSH', C.goldD) },
      { label: 'Thyroid hormone', c: C.rose, detail: 'The thyroid releases thyroid hormone (T3, T4).', svg: box(220, 330, 240, 60, '#f4ddd6', 'Thyroid', '#8a3f33', 22) + arrow(340, 330, 470, 330, C.rose, { w: 5 }) + L(480, 338, 'Thyroid hormone', C.rose) },
      { label: 'High levels switch it off', c: C.deep, detail: 'When thyroid hormone rises, it inhibits TSH from the pituitary and TRH from the hypothalamus, so secretion drops. When it falls, they switch back on.', svg: line('M600 310 C700 260 700 120 400 70', C.deep, 4, 'stroke-dasharray="8 8"') + line('M620 300 C660 260 560 220 400 200', C.deep, 4, 'stroke-dasharray="8 8"') + circ(560, 120, 20, '#7d9378') + T(560, 128, '−', { s: 30, c: '#fff', halo: false }) + L(600, 180, 'stops TRH and TSH', C.deep) }
    ], { hint: 'Like a thermostat: high levels turn off the signal that made them.' }),

  'ap12-5': fig('Seven anterior pituitary hormones', '0 0 880 440',
    circ(440, 220, 54, '#e6c98a') + T(440, 228, 'Anterior', { s: 18, c: '#5f4a1a', halo: false }),
    [['GH', 'Bones, muscles', 'Growth hormone: makes cells grow and divide and builds bone and muscle.'], ['TSH', 'Thyroid', 'Stimulates the thyroid.'], ['ACTH', 'Adrenal cortex', 'Stimulates the adrenal cortex to make cortisol.'], ['MSH', 'Skin', 'Increases melanin and darkens the skin.'], ['FSH', 'Ovaries, testes', 'Develops ovarian follicles; sperm production in males.'], ['LH', 'Ovaries, testes', 'Triggers ovulation and progesterone; testosterone in males.'], ['Prolactin', 'Breasts', 'Stimulates milk production after delivery.']].map(([n, t, d], i) => { const a = -Math.PI / 2 + i / 7 * 2 * Math.PI, x = 440 + 230 * Math.cos(a) * 1.35, y = 220 + 170 * Math.sin(a), c = [C.deep, C.rose, C.goldD, '#8a6a52', '#b35d80', C.plumD, C.blueD][i];
      return { label: n, c, detail: n + ' → ' + t + '. ' + d, svg: arrow(440 + 60 * Math.cos(a), 220 + 60 * Math.sin(a), x - 70 * Math.cos(a), y - 30 * Math.sin(a), c, { w: 4 }) + box(x, y, 150, 56, '#fff', [n, t], c, 17) }; }),
    { hint: 'The pituitary is pea-sized and sits in the sphenoid bone.' }),

  'ap12-6': fig('The posterior pituitary', '0 0 820 380',
    box(410, 60, 300, 56, '#ece2ef', 'Made in the hypothalamus', C.plumD, 20) + arrow(410, 90, 410, 150, '#c4b0cc', { w: 5 }) + ell(410, 180, 70, 40, '#a9c0cb') + T(410, 186, 'Posterior lobe', { s: 16, c: '#2c4652', halo: false }),
    [
      { label: 'ADH (vasopressin)', c: C.blueD, detail: 'Makes the kidneys reabsorb water, so less is lost in urine. Too little causes diabetes insipidus: 20 to 30 litres of urine a day.', svg: arrow(350, 210, 200, 290, C.blueD, { w: 5 }) + box(160, 320, 230, 60, '#e3edf1', ['ADH → kidneys', 'keep water'], C.blueD, 18) },
      { label: 'Oxytocin', c: '#b35d80', detail: 'Stimulates uterine contractions in childbirth and milk ejection during breastfeeding.', svg: arrow(470, 210, 620, 290, '#b35d80', { w: 5 }) + box(660, 320, 240, 60, '#f4e0e8', ['Oxytocin → uterus,', 'milk letdown'], '#b35d80', 18) }
    ], { hint: 'The posterior lobe stores and releases these two; it doesn’t make them.' }),

  'ap12-10': fig('Insulin and glucagon', '0 0 860 420',
    rect(330, 140, 200, 140, 30, '#f5ecd6') + T(430, 200, 'Blood glucose', { s: 20, c: '#7a5f22', halo: false }) + T(430, 228, 'kept in range', { s: 16, c: C.muted, halo: false }),
    [
      { label: 'After a meal: insulin', c: C.blueD, detail: 'Beta cells release insulin, which moves glucose into the liver (stored as glycogen), muscle and fat. Blood glucose falls.', svg: box(140, 90, 220, 60, '#e3edf1', 'Beta cells: insulin', C.blueD, 20) + arrow(250, 120, 330, 170, C.blueD, { w: 5 }) + L(40, 200, 'glucose → glycogen', C.blueD) + arrow(320, 230, 200, 290, C.blueD, { w: 4 }) + L(80, 320, 'Glucose down', C.blueD) },
      { label: 'Between meals: glucagon', c: C.rose, detail: 'Alpha cells release glucagon, which makes the liver turn stored glycogen into glucose. Blood glucose rises.', svg: box(720, 90, 230, 60, '#f4ddd6', 'Alpha cells: glucagon', '#8a3f33', 20) + arrow(610, 120, 530, 170, C.rose, { w: 5 }) + L(820, 200, 'glycogen → glucose', C.rose, 'end') + arrow(540, 230, 660, 290, C.rose, { w: 4 }) + L(780, 320, 'Glucose up', C.rose, 'end') },
      { label: 'Islets of Langerhans', c: C.goldD, detail: 'The pancreas is both exocrine (digestive juice) and endocrine; its islets hold the alpha and beta cells.', svg: L(430, 40, 'Pancreas: islets of Langerhans', '#8a6f35', 'middle') },
      { label: 'Very low glucose', c: C.plumD, detail: 'If glucose gets very low, the body breaks down fat, releasing ketones that lower blood pH (acidosis).', svg: L(430, 390, 'Very low: fat → ketones → acidosis', C.plumD, 'middle', 18) }
    ]),

  'ap13-4': fig('Making blood cells', '0 0 880 420',
    circ(100, 210, 46, '#e9d6e8') + T(100, 280, 'Stem cell', { s: 18, c: C.plumD }) + T(100, 302, '(red marrow)', { s: 15, c: C.muted }),
    [
      { label: 'Red blood cells', c: C.red, detail: 'Some stem cells become red cells, losing their nuclei on the way.', svg: arrow(150, 190, 330, 70, C.red, { w: 4 }) + circ(380, 60, 26, '#e6a99c') + circ(380, 60, 10, '#7a6681') + arrow(410, 60, 520, 60, C.light, { w: 3 }) + rbc(560, 60) + L(600, 66, 'Red cell, no nucleus', C.red) },
      { label: 'Granular white cells', c: C.rose, detail: 'Others become neutrophils, eosinophils and basophils.', svg: arrow(150, 200, 330, 160, C.rose, { w: 4 }) + circ(380, 160, 26, '#efe4ee') + [-8, 8].map(d => circ(380 + d, 160, 8, '#8a5f86')).join('') + L(420, 166, 'Granular white cells', C.rose) },
      { label: 'Lymphocytes and monocytes', c: C.blueD, detail: 'Others become lymphocytes or monocytes. The spleen, tonsils and lymph nodes also help make these.', svg: arrow(150, 220, 330, 260, C.blueD, { w: 4 }) + circ(380, 260, 22, '#efe4ee') + circ(380, 260, 16, '#6a5a8e') + L(420, 266, 'Lymphocytes, monocytes', C.blueD) },
      { label: 'Platelets', c: C.goldD, detail: 'Megakaryoblasts become huge megakaryocytes, which break up into platelets.', svg: arrow(150, 230, 330, 360, C.goldD, { w: 4 }) + circ(390, 360, 36, '#e6c98a') + arrow(430, 360, 520, 360, C.light, { w: 3 }) + [[550, 350], [580, 370], [610, 352], [570, 340]].map(([x, y]) => ell(x, y, 10, 6, '#d3a84b')).join('') + L(640, 366, 'Platelets', C.goldD) }
    ], { hint: 'Hematopoiesis happens in red bone marrow.' }),

  'ap13-5': fig('A red blood cell', '0 0 820 380',
    '',
    [
      { label: 'Biconcave disk', c: C.red, detail: 'No nucleus, so it can’t divide. Its dimpled shape gives a large surface. Lasts about 120 days.', svg: ell(200, 180, 150, 100, '#c8524a') + ell(200, 180, 70, 44, '#d97a70') + shine(140, 120, 30, 14) + sh('M60 330 C60 300 120 300 140 316 C170 300 230 300 260 316 C280 300 340 300 340 330 C340 360 280 360 260 344 C230 360 170 360 140 344 C120 360 60 360 60 330 Z', '#c8524a') + L(200, 380, 'Side view', C.muted, 'middle', 16) },
      { label: 'Heme with iron', c: C.goldD, detail: 'The heme pigment holds four iron atoms that bind oxygen in the lungs. Oxygen-rich blood is bright red.', svg: [[540, 110], [600, 90], [660, 110], [600, 150]].map(([x, y]) => circ(x, y, 16, '#d3a84b') + T(x, y + 6, 'Fe', { s: 14, c: '#fff', halo: false })).join('') + L(540, 60, 'Heme: 4 iron atoms', C.goldD) },
      { label: 'Globin', c: C.plumD, detail: 'The protein part, which carries carbon dioxide back to the lungs.', svg: line(smooth([[500, 210], [560, 180], [620, 230], [680, 190], [720, 240]]), '#b49ac0', 12) + L(540, 280, 'Globin: carries CO₂', C.plumD) },
      { label: 'Counts', c: C.deep, detail: 'Hemoglobin is about a third of the cell’s volume. Men have about 5.4 million red cells per cubic millimetre, women about 4.8 million.', svg: L(540, 330, '~5 million per mm³', C.deep) }
    ]),

  'ap13-9': fig('How blood clots', '0 0 880 400',
    rect(0, 120, 880, 160, 0, '#fbeeea') + line('M0 120 L380 120 M500 120 L880 120 M0 280 L880 280', '#d98f80', 10),
    [
      { label: 'Stage 1: platelets and thromboplastin', c: C.goldD, detail: 'Platelets clump at the cut, and damaged tissue releases thromboplastin, leading to prothrombin activator (calcium needed).', svg: [[400, 130], [430, 140], [460, 128], [480, 142], [420, 150]].map(([x, y]) => ell(x, y, 12, 7, '#d3a84b')).join('') + L(30, 60, '1 Platelets clump', C.goldD) },
      { label: 'Stage 2: thrombin', c: C.rose, detail: 'Prothrombin activator, with calcium, turns prothrombin (made by the liver) into thrombin.', svg: box(440, 60, 260, 44, '#f4ddd6', 'Prothrombin → thrombin', '#8a3f33', 18) },
      { label: 'Stage 3: fibrin net', c: C.blueD, detail: 'Thrombin turns soluble fibrinogen into insoluble fibrin threads, which trap cells and platelets: the clot.', svg: line('M360 140 L520 210 M380 200 L540 150 M400 240 L500 140 M370 170 L530 240', '#8aa3b0', 3) + rbc(420, 200, 16) + rbc(480, 180, 16) + L(600, 230, '3 Fibrin traps cells', C.blueD) },
      { label: 'After repair', c: C.deep, detail: 'The clot tightens (retraction) and serum is left behind. After repair, fibrinolysis dissolves the clot. Vitamin K is needed for many clotting factors.', svg: L(440, 350, 'Clot tightens, later dissolves · needs vitamin K', C.deep, 'middle', 18) }
    ]),

  'ap13-12': fig('The Rh factor in pregnancy', '0 0 880 380',
    '',
    [
      { label: 'First pregnancy', c: C.goldD, detail: 'An Rh-negative mother carrying an Rh-positive baby can be exposed to the baby’s blood, often at delivery, and become sensitized.', svg: ell(160, 200, 110, 140, '#f6e3da') + circ(170, 220, 50, '#f2d6cc') + T(170, 228, 'Rh+', { s: 22, c: C.red, halo: false }) + T(160, 90, 'Mother Rh−', { s: 18, c: C.ink }) + L(160, 370, '1st baby: exposure', C.goldD, 'middle') },
      { label: 'Antibodies form', c: C.plumD, detail: 'Anti-Rh antibodies form only after exposure to Rh-positive blood.', svg: [[330, 160], [360, 200], [330, 240]].map(([x, y]) => line(`M${x} ${y + 12} L${x} ${y} L${x - 8} ${y - 10} M${x} ${y} L${x + 8} ${y - 10}`, '#7a6681', 4)).join('') + L(345, 300, 'Anti-Rh', C.plumD, 'middle', 18) },
      { label: 'Next pregnancy', c: C.rose, detail: 'In a later pregnancy her antibodies can cross and destroy an Rh-positive baby’s red cells (erythroblastosis fetalis).', svg: ell(560, 200, 110, 140, '#f6e3da') + circ(570, 220, 50, '#f2d6cc') + [[540, 200], [600, 240], [580, 190]].map(([x, y]) => line(`M${x} ${y + 10} L${x} ${y} L${x - 7} ${y - 8} M${x} ${y} L${x + 7} ${y - 8}`, '#7a6681', 3)).join('') + L(560, 370, '2nd baby: at risk', C.rose, 'middle') },
      { label: 'RhoGAM prevents it', c: C.deep, detail: 'RhoGAM, given to the mother, prevents her from becoming sensitized.', svg: box(780, 200, 150, 60, '#e4ecdf', 'RhoGAM', C.deep, 22) }
    ]),

  'ap14-3': fig('Layers of the heart wall', '0 0 820 380',
    '',
    [
      { label: 'Epicardium', c: C.goldD, detail: 'The thin outer layer of serous tissue (the visceral pericardium).', svg: rect(60, 60, 60, 260, 10, '#efe6cf') + L(90, 350, 'Epicardium', '#8a6f35', 'middle', 18) },
      { label: 'Myocardium', c: C.rose, detail: 'The thick middle layer that makes up most of the heart: involuntary, striated, branched cardiac muscle.', svg: rect(120, 60, 420, 260, 0, '#d98f80') + Array.from({ length: 12 }, (_, i) => line(`M${140 + i * 34} 70 L${140 + i * 34} 310`, '#c4705f', 3)).join('') + L(330, 350, 'Myocardium (muscle)', C.rose, 'middle', 20) },
      { label: 'Endocardium', c: C.blueD, detail: 'The thin inner lining of endothelium. It covers the valves and chordae tendineae.', svg: rect(540, 60, 40, 260, 10, '#cfdde4') + L(560, 350, 'Endocardium', C.blueD, 'middle', 18) },
      { label: 'Inside the chamber', c: C.red, detail: 'The endocardium faces the blood inside the heart chambers.', svg: rect(580, 60, 200, 260, 10, '#f3c3bb') + rbc(660, 140) + rbc(720, 230) + L(680, 40, 'Blood in chamber', C.red, 'middle', 18) }
    ], { hint: 'From outside to inside: epicardium, myocardium, endocardium.' }),

  'ap14-8': fig('One heartbeat: 0.8 seconds', '0 0 1060 300',
    line(`M${TX(0)} 200 L${TX(.8)} 200`, C.muted, 2) + [0, .1, .4, .8].map(t => T(TX(t), 230, t + ' s', { s: 18, c: C.muted })).join(''),
    [
      { label: 'Atria contract: 0.1 s', c: C.goldD, detail: 'Atrial systole: the atria contract and push blood into the ventricles.', svg: rect(TX(0), 80, TX(.1) - TX(0), 100, 10, '#e6c98a') + T((TX(0) + TX(.1)) / 2, 64, 'Atria', { s: 18, c: '#7a5f22' }) },
      { label: 'Ventricles contract: 0.3 s', c: C.rose, detail: 'Ventricular systole: the ventricles contract and pump blood out.', svg: rect(TX(.1), 80, TX(.4) - TX(.1), 100, 10, '#d98f80') + T((TX(.1) + TX(.4)) / 2, 140, 'Ventricles contract', { s: 20, c: '#fff', halo: false }) },
      { label: 'All rest: 0.4 s', c: C.deep, detail: 'Diastole: everything relaxes. The heart muscle rests for half of every cycle.', svg: rect(TX(.4), 80, TX(.8) - TX(.4), 100, 10, '#a3b795') + T((TX(.4) + TX(.8)) / 2, 140, 'Everything rests', { s: 20, c: '#fff', halo: false }) },
      { label: 'About 72 beats a minute', c: C.ink, detail: 'Systole is contraction; diastole is relaxation. At about 72 beats a minute, each cycle takes about 0.8 seconds.', svg: T(530, 280, 'Systole = contraction · Diastole = relaxation · ~72 beats a minute', { s: 18, c: C.ink }) }
    ]),

  'ap14-9': fig('Two main circuits', '0 0 760 520',
    sh('M320 220 C300 200 270 210 270 240 C270 280 330 310 380 340 C430 310 490 280 490 240 C490 210 460 200 440 220 L380 260 Z', '#c86d56'),
    [
      { label: 'Pulmonary circuit', c: C.blueD, detail: 'From the right ventricle to the lungs and back to the left atrium.', svg: ell(380, 70, 140, 46, '#f1c9c2') + T(380, 78, 'Lungs', { s: 22, c: '#8a3f33', halo: false }) + line('M330 230 C250 180 250 110 280 90', '#5f7ba3', 8) + line('M480 90 C510 110 510 180 430 230', '#c8524a', 8) + L(200, 150, 'Pulmonary', C.blueD, 'end') },
      { label: 'Systemic circuit', c: C.red, detail: 'Oxygen-rich blood leaves the left ventricle through the aorta to all body organs and returns through the venae cavae.', svg: rect(220, 430, 320, 70, 30, '#f3e3d6') + T(380, 474, 'Body organs', { s: 22, c: C.ink, halo: false }) + line('M430 330 C560 360 580 420 520 440', '#c8524a', 8) + line('M240 440 C180 420 200 330 330 320', '#5f7ba3', 8) + L(600, 380, 'Systemic', C.red) },
      { label: 'Coronary', c: C.rose, detail: 'Coronary arteries branch off the ascending aorta to supply the heart muscle itself.', svg: line('M380 222 C360 250 340 270 330 290 M380 222 C400 250 420 270 440 290', '#e6c264', 4) + L(750, 250, 'Coronary: feeds heart', C.rose, 'end') },
      { label: 'Hepatic portal', c: C.goldD, detail: 'The hepatic portal vein carries blood from the digestive organs to the liver first.', svg: L(30, 470, 'Also: hepatic portal,', C.goldD) + L(30, 498, 'cerebral, fetal', C.goldD) }
    ], { hint: 'Blue: low in oxygen. Red: rich in oxygen.' }),

  'ap14-11': fig('Major arteries', '-20 30 540 950',
    body() + line('M250 170 L250 520', '#e7d6cf', 3),
    [
      { label: 'Aorta', c: C.red, detail: 'The largest artery: ascending aorta, aortic arch, thoracic aorta and abdominal aorta.', svg: line('M262 262 C262 220 240 210 236 232 L250 250 L250 500', '#b04a3c', 10) + L(-10, 400, 'Aorta', C.red) },
      { label: 'Carotid and subclavian', c: C.rose, detail: 'From the arch: the brachiocephalic artery (right common carotid and right subclavian), the left common carotid and the left subclavian.', svg: line('M240 226 L232 140 M256 226 L266 140 M236 232 L160 220 L130 380 M262 232 L340 220 L370 380', '#c8524a', 6) + L(300, 130, 'Carotids to head', C.rose) + L(380, 240, 'Subclavian to arm', C.rose) },
      { label: 'Abdominal branches', c: C.goldD, detail: 'The celiac trunk (stomach, spleen, liver), mesenteric arteries (intestines), renal arteries (kidneys) and gonadal arteries.', svg: line('M250 330 L290 310 M250 350 L210 360 M250 360 L300 362 M250 400 L280 420', '#c8524a', 5) + L(330, 340, 'Celiac, mesenteric, renal', C.goldD) },
      { label: 'Iliac to leg', c: C.blueD, detail: 'The common iliac arteries lead to the femoral, popliteal and tibial arteries of the leg.', svg: line('M250 500 L220 560 L214 760 L210 930 M250 500 L280 560 L286 760 L290 930', '#c8524a', 6) + L(330, 640, 'Iliac → femoral', C.blueD) + L(330, 668, '→ popliteal → tibial', C.blueD) }
    ])
};
