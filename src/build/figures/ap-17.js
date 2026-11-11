const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f } = require('./lib.js');
const L = (x, y, s, c, a) => T(x, y, s, { s: 22, c, a: a || 'start' });

// lungs, front view: the body's right lung (3 lobes) is on the viewer's left
const RL = 'M310 150 C240 140 150 220 130 360 C120 450 150 520 220 520 C270 520 300 490 310 440 Z';
const LL = 'M390 150 C460 140 550 220 570 360 C580 450 550 520 480 520 C440 520 410 500 398 470 C428 440 430 400 400 380 Z';
const tree = line('M350 200 L272 282 M350 200 L452 268', '#e9dccb', 18) + line('M272 282 L220 250 M272 282 L216 340 M272 282 L250 420 M452 268 L500 240 M452 268 L470 410', '#e9dccb', 10)
  + line('M220 250 L190 230 M220 250 L200 280 M216 340 L180 330 M216 340 L200 380 M250 420 L210 450 M250 420 L270 470 M500 240 L530 230 M500 240 L520 280 M470 410 L510 440 M470 410 L450 470', '#e9dccb', 5);

// alveoli cluster
const grape = (x, y, r) => circ(x, y, r, '#f2c6bc') + shine(x - r * .35, y - r * .4, r * .25);
const sac = [[520, 150], [570, 120], [600, 175], [555, 200], [505, 205], [640, 130], [620, 230]].map(([x, y]) => grape(x, y, 36)).join('');

// spirogram
const Y0 = 420, wave = (x0, n, w) => Array.from({ length: n }, (_, i) => `C${x0 + i * w + w * .25} 240 ${x0 + i * w + w * .25} 240 ${x0 + i * w + w * .5} 240 C${x0 + i * w + w * .75} 240 ${x0 + i * w + w * .75} 280 ${x0 + i * w + w} 280`).join(' ');
const SPI = `M60 280 ${wave(60, 3, 80)} C320 280 330 70 360 70 C390 70 410 350 440 350 C470 350 480 280 500 280 ${wave(500, 2, 70)}`;
const brk = (x, y1, y2, c, s) => arrow(x, y1, x, y2, c, { both: true, w: 4 }) + T(x, (y1 + y2) / 2 + 9, s, { s: 26, c, w: 800 });

module.exports = {
  'ap17-7': fig('The bronchial tree and lungs', '90 0 520 570',
    sh(RL, '#f1c9c2') + sh(LL, '#f1c9c2') + line('M300 250 C250 300 200 380 150 440 M140 330 L262 326 M410 240 C460 300 520 380 560 430', '#d9a097', 3) + rect(334, 20, 32, 186, 12, '#e9dccb') + Array.from({ length: 8 }, (_, i) => line(`M336 ${36 + i * 20} L364 ${36 + i * 20}`, '#cfc0a8', 4)).join('') + tree,
    [
      { label: 'Trachea', c: C.goldD, detail: 'The windpipe, held open by C-shaped rings of cartilage.', svg: rect(330, 16, 40, 194, 14, 'none').replace('style="fill:none"', `fill="none" stroke="${C.goldD}" stroke-width="5"`) + L(380, 60, 'Trachea', C.goldD) },
      { label: 'Primary bronchi', c: C.rose, detail: 'The trachea splits into right and left primary bronchi. The right one is shorter, wider and more vertical, so swallowed objects often lodge there.', svg: line('M350 200 L272 282 M350 200 L452 268', '#c86d56', 12) + L(380, 140, 'Primary', C.rose) + L(380, 166, 'bronchi', C.rose) },
      { label: 'Secondary bronchi to bronchioles', c: C.plumD, detail: 'One secondary (lobar) bronchus per lobe, then tertiary bronchi, bronchioles and terminal bronchioles. Cartilage fades and smooth muscle increases as they shrink.', svg: line('M272 282 L220 250 M272 282 L216 340 M272 282 L250 420 M452 268 L500 240 M452 268 L470 410', '#9c8aa2', 8) + L(350, 562, 'Smaller branches', C.plumD, 'middle') },
      { label: 'Right lung: 3 lobes', c: C.blueD, detail: 'Shorter, because the liver sits below it. Superior, middle and inferior lobes.', svg: outline(RL, C.blueD, 5) + L(100, 140, 'Right lung', C.blueD, 'start') + L(170, 290, 'superior', C.blueD, 'middle') + L(180, 380, 'middle', C.blueD, 'middle') + L(220, 480, 'inferior', C.blueD, 'middle') },
      { label: 'Left lung: 2 lobes', c: C.deep, detail: 'Two lobes, with a notch for the heart.', svg: outline(LL, C.deep, 5) + L(600, 140, 'Left lung', C.deep, 'end') + L(470, 220, 'superior', C.deep, 'middle') + L(500, 470, 'inferior', C.deep, 'middle') },
      { label: 'Pleura', c: C.goldD, detail: 'The parietal pleura lines the chest wall; the visceral pleura covers each lung. Fluid between them lets the lungs glide.', svg: outline('M314 140 C236 128 138 214 118 360 C108 460 144 534 220 534 C276 534 312 500 322 440', '#c7b07a', 4) + outline('M386 140 C464 128 562 214 582 360 C592 460 556 534 480 534 C436 534 404 512 390 476', '#c7b07a', 4) }
    ], { hint: 'The body’s right lung is on your left.' }),

  'ap17-9': fig('Alveoli and gas exchange', '0 20 820 420',
    line('M40 200 C150 200 250 190 340 170 L480 160', '#e9dccb', 30) + sac,
    [
      { label: 'Respiratory bronchiole', c: C.goldD, detail: 'Terminal bronchioles divide into respiratory bronchioles, then into alveolar ducts.', svg: line('M40 200 C150 200 250 190 340 170', '#d8c39a', 30) + L(60, 160, 'Bronchiole', '#8a6f35') },
      { label: 'Alveolar sac', c: C.rose, detail: 'Grape-like clusters of alveoli at the end of each alveolar duct. Over 300 million alveoli give about 70 square metres of surface.', svg: ring(575, 175, 120, 90, C.rose, 4, 'stroke-dasharray="8 8"') + L(560, 52, 'Alveolar sac', C.rose) },
      { label: 'Capillaries', c: C.red, detail: 'A net of capillaries wraps every alveolus. Blood arrives low in oxygen (blue) and leaves rich in oxygen (red).', svg: line('M440 330 C500 260 560 280 600 250 C640 220 690 240 740 200', '#5f7ba3', 8) + line('M460 90 C520 110 600 70 660 90 C700 100 730 80 760 70', '#c8524a', 8) + L(470, 380, 'Capillaries', C.red) },
      { label: 'Gas exchange', c: C.blueD, detail: 'Oxygen diffuses from the air into the blood and carbon dioxide from the blood into the air, across the thin respiratory membrane.', svg: arrow(560, 155, 590, 260, C.blueD, { w: 4 }) + T(616, 214, 'O₂', { s: 22, c: C.blueD }) + arrow(640, 250, 620, 160, C.muted, { w: 4 }) + T(660, 290, 'CO₂', { s: 22, c: C.muted }) },
      { label: 'Surfactant', c: C.deep, detail: 'Type II alveolar cells secrete surfactant, which lowers surface tension so the alveoli don’t collapse.', svg: ring(520, 150, 38, 38, '#8fa48a', 4) + ring(555, 200, 38, 38, '#8fa48a', 4) + L(300, 290, 'Surfactant lining', C.deep) }
    ]),

  'ap17-12': fig('Lung volumes and capacities', '0 30 860 430',
    line('M50 60 L50 420 L620 420', C.muted, 3) + T(40, 50, 'Volume', { s: 18, c: C.muted, a: 'start' }) + T(620, 450, 'Time →', { s: 18, c: C.muted, a: 'end' })
      + line('M50 360 L620 360', '#d9d2c6', 2, 'stroke-dasharray="6 8"') + T(70, 395, 'Air that always stays in', { s: 16, c: C.muted, a: 'start' })
      + line(SPI, C.ink, 4),
    [
      { label: 'Functional residual capacity', c: C.blueD, detail: 'The gas left in the lungs at the end of a normal, relaxed breath out.', svg: line('M50 280 L640 280', '#6f91a2', 2, 'stroke-dasharray="4 6"') + brk(670, 420, 280, C.blueD, 'FRC') },
      { label: 'Inspiratory capacity', c: C.rose, detail: 'The most you can breathe in, starting from the end of a resting breath out.', svg: brk(720, 280, 70, C.rose, 'IC') + line('M50 70 L640 70', '#c86d56', 2, 'stroke-dasharray="4 6"') },
      { label: 'Vital capacity', c: C.deep, detail: 'The most you can breathe out after the biggest possible breath in.', svg: brk(770, 350, 70, C.deep, 'VC') + line('M440 350 L780 350', '#7d9378', 2, 'stroke-dasharray="4 6"') },
      { label: 'Total lung capacity', c: C.goldD, detail: 'All the gas in the lungs at the end of the biggest possible breath in.', svg: brk(820, 420, 70, C.goldD, 'TLC') }
    ], { hint: 'The wavy line is normal breathing, then one deepest breath in and out.' })
};
