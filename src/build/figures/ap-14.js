const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f } = require('./lib.js');
// Heart in a front view section: the heart's right side is on the viewer's left.
const BLUE = '#8fa9c4', RED = '#d9776a';
const WALL = 'M190 170 C150 220 150 330 220 420 C280 500 340 540 360 560 C390 530 470 470 520 400 C580 310 560 210 500 170 C440 130 260 120 190 170 Z';
const RA = 'M196 210 C200 170 300 170 304 214 C306 254 280 282 250 282 C214 282 194 250 196 210 Z';
const LA = 'M392 200 C396 160 500 160 506 200 C508 238 480 262 450 262 C414 262 390 236 392 200 Z';
const RV = 'M206 304 C230 290 320 290 342 304 L346 470 C290 440 230 380 206 304 Z';
const LV = 'M382 296 C410 282 500 282 522 306 C520 380 466 450 382 510 Z';
const vessels = line('M326 296 L340 150 C340 120 300 112 230 120 M340 150 C360 120 420 110 540 120', '#7d8fb8', 26) // pulmonary trunk and arteries
  + line('M420 290 L420 110 C420 54 330 44 300 92', '#c86d56', 30) + line('M360 64 L356 20 M392 56 L396 14 M330 76 L318 34', '#c86d56', 10) // aorta and branches
  + line('M228 210 L228 30', '#7d8fb8', 32) + line('M220 270 L130 370', '#7d8fb8', 30) // venae cavae
  + line('M500 200 L620 180 M502 236 L620 250', '#d9776a', 16); // pulmonary veins
const heart = vessels + sh(WALL, '#c86d56') + sh(RA, BLUE) + sh(RV, BLUE) + sh(LA, RED) + sh(LV, RED) + shine(250, 150, 14, 7);
const hl = (x, y, s, c, a) => T(x, y, s, { s: 22, c, a });
const valve = (x, y, c, rot) => `<g transform="rotate(${rot || 0} ${x} ${y})">${sh(`M${x - 22} ${y - 6} L${x} ${y + 14} L${x + 22} ${y - 6} L${x + 14} ${y - 6} L${x} ${y + 4} L${x - 14} ${y - 6} Z`, c)}</g>`;
const flow = (d, c) => line(d, c, 5, 'stroke-dasharray="2 9"');

module.exports = {
  'ap14-4': fig('Chambers and great vessels', '0 0 760 580',
    heart,
    [
      { label: 'Right atrium', c: C.blueD, detail: 'Receives blood from the body through the superior and inferior venae cavae (and the coronary sinus).', svg: outline(RA, C.blueD, 5) + hl(160, 200, 'Right', C.blueD, 'end') + hl(160, 226, 'atrium', C.blueD, 'end') },
      { label: 'Right ventricle', c: '#5f7ba3', detail: 'Pumps blood into the pulmonary trunk and pulmonary arteries, to the lungs.', svg: outline(RV, '#3b5562', 5) + hl(200, 470, 'Right ventricle', '#3b5562', 'end') },
      { label: 'Left atrium', c: C.rose, detail: 'Receives oxygenated blood from the lungs through four pulmonary veins.', svg: outline(LA, C.rose, 5) + hl(640, 300, 'Left atrium', C.rose, 'end') },
      { label: 'Left ventricle', c: '#9a3f33', detail: 'Pumps blood into the aorta. It has the thickest wall because it pumps at high pressure to the whole body.', svg: outline(LV, '#9a3f33', 5) + hl(560, 470, 'Left ventricle', '#9a3f33', 'start') },
      { label: 'Venae cavae', c: '#5f7ba3', detail: 'The superior vena cava brings blood from the head, neck and arms; the inferior vena cava from the lower body.', svg: line('M228 210 L228 30', '#5f7ba3', 34) + line('M220 270 L130 370', '#5f7ba3', 32) + hl(180, 60, 'Superior', '#3b5562', 'end') + hl(110, 400, 'Inferior', '#3b5562', 'middle') },
      { label: 'Pulmonary trunk', c: '#6a6aa0', detail: 'Leaves the right ventricle and splits into the pulmonary arteries to the lungs.', svg: line('M326 296 L340 150 C340 120 300 112 230 120 M340 150 C360 120 420 110 540 120', '#5f6aa8', 28) + hl(560, 100, 'to lungs', '#5f6aa8', 'start') },
      { label: 'Aorta', c: C.red, detail: 'Leaves the left ventricle and carries blood to the whole body.', svg: line('M420 290 L420 110 C420 54 330 44 300 92', '#b04a3c', 32) + hl(470, 40, 'Aorta', C.red, 'start') },
      { label: 'Pulmonary veins', c: C.rose, detail: 'Bring oxygenated blood from the lungs to the left atrium.', svg: line('M500 200 L620 180 M502 236 L620 250', '#c8524a', 18) + hl(640, 220, 'from lungs', C.rose, 'end') },
      { label: 'Septum', c: C.ink, detail: 'The wall that separates the right side of the heart from the left.', svg: line('M362 300 L364 510', '#8a3f33', 14) + hl(364, 560, 'Septum', C.ink) }
    ], { tap: true, hint: 'Blue is blood low in oxygen, red is blood rich in oxygen. The heart’s right side is on your left.' }),

  'ap14-5': fig('Heart valves', '0 0 760 580',
    heart,
    [
      { label: 'Tricuspid valve', c: C.blueD, detail: 'Three cusps, between the right atrium and right ventricle.', svg: valve(254, 288, '#f4efe1') + ring(254, 290, 34, 22, C.blueD, 4) + hl(150, 300, 'Tricuspid', C.blueD, 'end') },
      { label: 'Bicuspid (mitral) valve', c: C.rose, detail: 'Two cusps (the only two-cusp valve), between the left atrium and left ventricle.', svg: valve(452, 278, '#f4efe1') + ring(452, 280, 34, 22, C.rose, 4) + hl(560, 300, 'Bicuspid (mitral)', C.rose, 'start') },
      { label: 'Pulmonary semilunar valve', c: '#5f6aa8', detail: 'Where the pulmonary trunk leaves the right ventricle.', svg: valve(328, 268, '#f4efe1', 180) + ring(328, 268, 28, 18, '#5f6aa8', 4) + hl(250, 160, 'Pulmonary', '#5f6aa8', 'end') },
      { label: 'Aortic semilunar valve', c: C.red, detail: 'Where the aorta leaves the left ventricle.', svg: valve(420, 262, '#f4efe1', 180) + ring(420, 262, 28, 18, C.red, 4) + hl(470, 150, 'Aortic', C.red, 'start') },
      { label: 'Chordae tendineae', c: C.goldD, detail: 'Cords that attach the AV valve cusps to papillary muscles, so the valves don’t flip backward.', svg: line('M244 296 L262 380 M264 296 L270 380 M444 290 L456 380 M462 290 L470 380', '#f4efe1', 3) + ell(266, 388, 14, 10, '#a3473a') + ell(464, 388, 14, 10, '#a3473a') + hl(560, 420, 'Chordae tendineae', C.goldD, 'start') }
    ], { hint: 'Valves keep blood from flowing backward.' }),

  'ap14-6': fig('Blood flow through the heart', '0 0 760 580',
    heart,
    [
      { label: '1 Into the right atrium', c: '#5f7ba3', detail: 'Blood low in oxygen arrives through the superior and inferior venae cavae.', svg: flow('M228 40 L236 210 M140 360 L216 260', '#1f3a52') + hl(150, 120, '1', '#1f3a52') },
      { label: '2 Tricuspid to right ventricle', c: '#3b5562', detail: 'It passes the tricuspid valve into the right ventricle.', svg: flow('M250 250 L270 380', '#1f3a52') + hl(220, 360, '2', '#1f3a52') },
      { label: '3 Out to the lungs', c: '#5f6aa8', detail: 'The right ventricle pumps it through the pulmonary semilunar valve into the pulmonary arteries, to the lungs, where it drops CO₂ and picks up O₂.', svg: flow('M300 400 L330 160 L240 120 M330 160 L540 120', '#2a2a6a') + hl(300, 150, '3', '#2a2a6a') },
      { label: '4 Back to the left atrium', c: C.rose, detail: 'Oxygen-rich blood returns through the pulmonary veins to the left atrium.', svg: flow('M620 190 L470 214', '#7a1f14') + hl(600, 160, '4', '#7a1f14') },
      { label: '5 Bicuspid to left ventricle', c: '#9a3f33', detail: 'It passes the bicuspid (mitral) valve into the left ventricle.', svg: flow('M452 240 L460 400', '#7a1f14') + hl(490, 380, '5', '#7a1f14') },
      { label: '6 Out the aorta', c: C.red, detail: 'The left ventricle pumps it through the aortic semilunar valve into the aorta, to the whole body.', svg: flow('M420 430 L420 110 C420 60 340 50 310 90', '#7a1f14') + hl(450, 70, '6', '#7a1f14') }
    ], { hint: 'Tap 1 to 6 to follow one trip through the heart.' }),

  'ap14-7': fig('The conduction system', '0 0 760 580',
    heart,
    [
      { label: 'SA node (pacemaker)', c: C.goldD, detail: 'In the right atrium wall. Starts each beat and sets the rate.', svg: circ(214, 190, 14, '#f0c75a') + hl(160, 160, 'SA node', C.goldD, 'end') },
      { label: 'Across the atria', c: '#c9a34a', detail: 'The impulse spreads over both atria, which contract.', svg: line('M214 190 C260 170 300 190 320 220 M214 190 C300 140 400 150 450 200', '#e6c264', 5, 'stroke-dasharray="3 8"') },
      { label: 'AV node', c: '#a68a4c', detail: 'In the lower right atrium. The impulse reaches it next.', svg: circ(318, 282, 13, '#e0a83a') + hl(290, 330, 'AV node', '#8a6f35', 'end') },
      { label: 'Bundle of His and branches', c: C.ink, detail: 'Runs down the septum and splits into right and left bundle branches.', svg: line('M322 290 L362 310 L362 440 M362 360 C330 420 300 440 290 450 M362 360 C400 420 440 440 450 450', '#e6c264', 7) + hl(380, 250, 'Bundle of His', '#8a6f35', 'start') },
      { label: 'Purkinje fibres', c: C.rose, detail: 'Carry the charge into the ventricle muscle, so the ventricles contract.', svg: line('M362 440 C340 500 300 470 240 400 C220 360 214 330 220 310 M362 440 C400 500 470 440 510 380 C524 350 524 330 520 312', '#f0d48a', 4) + hl(560, 460, 'Purkinje fibres', C.rose, 'start') }
    ], { hint: 'The heart starts its own beat; nerves only speed it up or slow it down.' }),

  'ap14-10': fig('Artery, vein and capillary', '0 20 900 360',
    circ(170, 170, 120, '#efe6cf') + circ(170, 170, 92, '#d98f80') + circ(170, 170, 56, '#f6e3da') + circ(170, 170, 48, '#f6c9c0')
      + ell(480, 170, 128, 106, '#efe6cf') + ell(480, 170, 108, 88, '#e3b0a6') + ell(480, 170, 96, 76, '#f6e3da') + ell(480, 170, 90, 70, '#cfd9e6')
      + circ(760, 170, 40, '#f6e3da') + circ(760, 170, 30, '#fbeeea') + ell(760, 170, 18, 12, '#c8524a')
      + T(170, 330, 'Artery', { s: 26, c: C.ink }) + T(480, 330, 'Vein', { s: 26, c: C.ink }) + T(760, 330, 'Capillary', { s: 26, c: C.ink }),
    [
      { label: 'Tunica adventitia', c: C.goldD, detail: 'The outer layer of white fibrous connective tissue.', svg: ring(170, 170, 106, 106, C.goldD, 26) + ring(480, 170, 118, 97, C.goldD, 18) },
      { label: 'Tunica media', c: C.rose, detail: 'The middle layer of smooth muscle. Thick in arteries, which are elastic and contractile; thinner in veins.', svg: ring(170, 170, 74, 74, '#b85d4e', 34) + ring(480, 170, 102, 82, '#b85d4e', 10) },
      { label: 'Tunica intima', c: C.blueD, detail: 'A single layer of endothelial cells lining the inside.', svg: ring(170, 170, 52, 52, C.blueD, 6) + ring(480, 170, 93, 73, C.blueD, 5) },
      { label: 'Lumen', c: C.muted, detail: 'The hollow core the blood flows through. Veins have a wider lumen and valves that keep blood moving toward the heart.', svg: T(170, 178, 'lumen', { s: 22, c: '#8a3f33' }) + T(480, 178, 'lumen', { s: 22, c: C.blueD }) },
      { label: 'Capillary', c: C.deep, detail: 'One cell thick (simple squamous epithelium). Nutrients, gases and wastes are exchanged here. Arterioles feed them; venules drain them.', svg: ring(760, 170, 36, 36, C.deep, 6) + T(760, 236, 'one cell thick', { s: 18, c: C.deep }) }
    ], { hint: 'Arteries have thick muscular walls; veins are thinner with a wider lumen.' })
};
