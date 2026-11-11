const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f, body } = require('./lib.js');
const L = (x, y, s, c, a) => T(x, y, s, { s: 22, c, a: a || 'start' });
const kidney = (x, flip) => sh(flip ? `M${x} 316 C${x + 30} 312 ${x + 34} 360 ${x + 20} 380 C${x + 8} 396 ${x - 22} 392 ${x - 24} 360 C${x - 26} 336 ${x - 18} 318 ${x} 316 Z` : `M${x} 316 C${x - 30} 312 ${x - 34} 360 ${x - 20} 380 C${x - 8} 396 ${x + 22} 392 ${x + 24} 360 C${x + 26} 336 ${x + 18} 318 ${x} 316 Z`, '#e0c6bd');

module.exports = {
  'ap12-1': fig('The endocrine glands', '20 30 460 540',
    body() + kidney(196) + kidney(304, true),
    [
      { label: 'Hypothalamus and pituitary', c: C.plumD, detail: 'In the brain. The hypothalamus controls the pituitary, which controls many other glands.', svg: ell(250, 84, 16, 10, '#b49ac0') + circ(250, 108, 9, '#7a6681') + L(320, 80, 'Hypothalamus', C.plumD) + L(320, 110, 'Pituitary', C.plumD) },
      { label: 'Pineal gland', c: '#9c8aa2', detail: 'Deep in the brain. Secretes melatonin.', svg: circ(262, 66, 7, '#9c8aa2') + L(320, 50, 'Pineal', '#7a6681') },
      { label: 'Thyroid and parathyroids', c: C.rose, detail: 'In the neck beside the trachea. The thyroid makes T3, T4 and calcitonin; the four parathyroids on its back control blood calcium.', svg: sh('M226 160 C222 146 236 142 244 152 L256 152 C264 142 278 146 274 160 C272 176 258 178 250 168 C242 178 228 176 226 160 Z', '#d98f80') + [[232, 152], [268, 152], [232, 168], [268, 168]].map(([x, y]) => circ(x, y, 4, '#9a5d50')).join('') + L(290, 170, 'Thyroid', C.rose) },
      { label: 'Thymus', c: C.blueD, detail: 'Behind the sternum. Large in children, it helps T cells mature.', svg: sh('M236 200 C232 230 242 250 250 250 C258 250 268 230 264 200 C258 192 242 192 236 200 Z', '#a3bcc8') + L(290, 230, 'Thymus', C.blueD) },
      { label: 'Adrenal glands', c: C.goldD, detail: 'On top of the kidneys. The cortex and medulla act as two separate glands.', svg: sh('M180 318 C186 300 206 300 212 318 Z', '#e0a83a') + sh('M288 318 C294 300 314 300 320 318 Z', '#e0a83a') + L(330, 300, 'Adrenals', C.goldD) },
      { label: 'Pancreas', c: '#a68a4c', detail: 'Behind the stomach. Its islets make insulin and glucagon.', svg: sh('M224 342 C250 330 290 332 314 342 C300 356 260 356 224 354 Z', '#dcb25a') + L(330, 352, 'Pancreas', '#8a6f35') },
      { label: 'Gonads', c: '#cb7a99', detail: 'Ovaries (in the pelvis) or testes (in the scrotum) make the sex hormones.', svg: ell(212, 470, 13, 9, '#d98aa8') + ell(288, 470, 13, 9, '#d98aa8') + L(310, 476, 'Ovaries', '#b35d80') + L(310, 504, '(or testes)', C.muted) }
    ], { hint: 'Endocrine glands are ductless: hormones go straight into the blood.' }),

  'ap12-4': fig('The hypothalamus runs the pituitary', '0 0 720 470',
    sh('M80 120 C80 40 640 40 640 120 L640 200 L80 200 Z', '#f4ddd6') + T(110, 60, 'Brain', { s: 20, c: C.muted, a: 'start' }),
    [
      { label: 'Hypothalamus', c: C.plumD, detail: 'Its neurons make releasing and release-inhibiting hormones (like TRH) that control the pituitary.', svg: ell(360, 150, 150, 46, '#c4b0cc') + [300, 360, 420].map(x => circ(x, 140, 10, '#7a6681')).join('') + T(360, 110, 'Hypothalamus', { s: 24, c: C.plumD }) },
      { label: 'Infundibulum', c: C.muted, detail: 'The stalk joining the hypothalamus to the pituitary.', svg: sh('M340 190 L380 190 L376 300 L344 300 Z', '#e6d6cf') + T(420, 250, 'Infundibulum (stalk)', { s: 20, c: C.muted, a: 'start' }) },
      { label: 'Portal vein', c: C.red, detail: 'Releasing hormones travel down this small vein to the anterior pituitary.', svg: line('M300 170 C300 220 320 260 300 330', '#c8524a', 6) + [[300, 210], [310, 260]].map(([x, y]) => circ(x, y, 6, '#d3a84b')).join('') + T(150, 260, 'Portal vein', { s: 20, c: C.red }) },
      { label: 'Anterior pituitary', c: C.goldD, detail: 'Makes and releases seven hormones, including TSH when TRH arrives.', svg: ell(300, 360, 62, 52, '#e6c98a') + T(300, 450, 'Anterior', { s: 22, c: C.goldD }) },
      { label: 'Posterior pituitary', c: C.blueD, detail: 'Stores and releases ADH and oxytocin, which are made in the hypothalamus and sent down nerve fibres.', svg: ell(410, 360, 46, 48, '#a9c0cb') + line('M380 160 C384 220 396 280 404 330', '#6f91a2', 4) + T(430, 450, 'Posterior', { s: 22, c: C.blueD }) }
    ]),

  'ap12-9': fig('Inside an adrenal gland', '0 0 860 440',
    sh('M80 230 C40 230 40 330 70 380 C90 410 150 410 160 370 C166 340 150 320 156 300 C162 270 130 230 80 230 Z', '#c98d7e') + sh('M70 232 C80 190 140 190 152 246 C130 236 100 228 70 232 Z', '#e0a83a') + T(110, 440, 'Kidney', { s: 20, c: C.muted }) + T(110, 176, 'Adrenal', { s: 20, c: C.goldD }) + line('M160 220 L290 120 M160 240 L290 330', '#c7d2c4', 3, 'stroke-dasharray="6 6"'),
    [
      { label: 'Outer cortex: aldosterone', c: C.goldD, detail: 'The outer layer secretes mineralocorticoids, mainly aldosterone, which controls sodium and potassium.', svg: circ(470, 220, 200, '#ecc98a') + line('M650 130 L700 90', '#7a5f22', 2.5) + T(706, 96, 'Aldosterone', { s: 22, c: '#7a5f22', a: 'start' }) },
      { label: 'Middle cortex: cortisol', c: '#a68a4c', detail: 'The middle layer secretes cortisol, a glucocorticoid that raises blood glucose and reduces inflammation.', svg: ring(470, 220, 148, 148, '#dcb25a', 44) + line('M612 190 L700 170', '#7a5f22', 2.5) + T(706, 176, 'Cortisol', { s: 22, c: '#7a5f22', a: 'start' }) },
      { label: 'Inner cortex: androgens', c: C.rose, detail: 'The inner layer secretes androgens.', svg: ring(470, 220, 112, 112, '#d4a26a', 28) + line('M580 250 L700 256', '#6a4a24', 2.5) + T(706, 262, 'Androgens', { s: 22, c: '#6a4a24', a: 'start' }) },
      { label: 'Medulla: epinephrine', c: '#9a5d50', detail: 'The centre secretes epinephrine (adrenaline) and some norepinephrine: fight or flight. Raises heart rate and blood pressure, releases glucose and fatty acids.', svg: circ(470, 220, 98, '#b9786a') + T(470, 214, 'Medulla', { s: 24, c: '#fff', halo: false }) + T(470, 244, 'epinephrine', { s: 20, c: '#fff', halo: false }) }
    ], { hint: 'The cortex (outside) and medulla (centre) work as two separate glands.' })
};
