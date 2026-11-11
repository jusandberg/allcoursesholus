const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f, body } = require('./lib.js');
const BONE = '#efe6cf', BONED = '#d9c79c';

// long bone, lying left to right
const LB = 'M200 235 L560 235 C600 235 610 190 650 180 C720 165 740 230 740 280 C740 330 720 395 650 380 C610 370 600 325 560 325 L200 325 C160 325 150 370 110 380 C40 395 20 330 20 280 C20 230 40 165 110 180 C150 190 160 235 200 235 Z';
const spongy = [[70, 230], [90, 280], [70, 330], [110, 250], [110, 310], [140, 280], [660, 230], [690, 280], [660, 330], [630, 250], [630, 310], [610, 280], [50, 280], [710, 250], [710, 310]].map(([x, y]) => ell(x, y, 11, 8, '#e0cfa6')).join('');
const SHAFT_OUT = 'M200 235 L560 235 M200 325 L560 325';

// osteon
const OC = [250, 250];
const lacunae = [55, 80, 105, 130].map((r, k) => Array.from({ length: 6 + k * 2 }, (_, i) => { const a = (i + k * .5) / (6 + k * 2) * 2 * Math.PI; return ell(OC[0] + (r - 12) * Math.cos(a), OC[1] + (r - 12) * Math.sin(a), 7, 4, '#a68a4c', ''); }).join('')).join('');
const canaliculi = [55, 80, 105, 130].map((r, k) => Array.from({ length: 6 + k * 2 }, (_, i) => { const a = (i + k * .5) / (6 + k * 2) * 2 * Math.PI; const x = OC[0] + (r - 12) * Math.cos(a), y = OC[1] + (r - 12) * Math.sin(a); return `M${f(x)} ${f(y)} L${f(x - 14 * Math.cos(a))} ${f(y - 14 * Math.sin(a))}`; }).join(' ')).join(' ');

// a simple skeleton drawn over the body outline (front view)
const mirror = s => `<g transform="translate(500 0) scale(-1 1)">${s}</g>`;
const bone = (d, c, w) => line(d, c, w || 14);
const AX = '#9fb39a', AP = '#d8b979';
const skull = ell(250, 92, 48, 54, AX) + ell(250, 132, 26, 16, AX) + circ(232, 92, 8, '#fbf7ef') + circ(268, 92, 8, '#fbf7ef');
const spine = Array.from({ length: 17 }, (_, i) => rect(242, 158 + i * 21, 16, 17, 4, AX)).join('');
const ribs = Array.from({ length: 6 }, (_, i) => { const y = 214 + i * 24; return line(`M252 ${y} C300 ${y - 10} 330 ${y + 10} 322 ${y + 30}`, AX, 7) + line(`M248 ${y} C200 ${y - 10} 170 ${y + 10} 178 ${y + 30}`, AX, 7); }).join('') + rect(244, 212, 12, 110, 5, AX);
const upper = bone('M256 200 L322 206', AP, 10) + bone('M330 214 L362 368', AP, 14) + bone('M364 380 L390 520 M376 378 L402 518', AP, 8) + bone('M392 534 L398 580 M404 532 L412 580', AP, 6);
const lower = sh('M196 482 C200 456 232 450 250 470 C268 450 300 456 304 482 C306 510 284 530 250 530 C216 530 194 510 196 482 Z', AP) + bone('M286 536 L292 740', AP, 16) + circ(292, 756, 11, AP) + bone('M290 772 L286 930 M302 774 L300 928', AP, 8) + bone('M282 946 L320 952', AP, 10);

// vertebral column, side view (front of body to the right)
const KX = [[40, 300], [95, 324], [150, 306], [275, 262], [400, 300], [465, 324], [530, 300], [575, 272], [640, 286]];
const xAt = y => { for (let i = 1; i < KX.length; i++) if (y <= KX[i][0]) { const [y0, x0] = KX[i - 1], [y1, x1] = KX[i]; const t = (y - y0) / (y1 - y0); return x0 + (x1 - x0) * (1 - Math.cos(t * Math.PI)) / 2; } return 286; };
const seg = (y0, y1, n, c, w) => { const h = (y1 - y0) / n; return Array.from({ length: n }, (_, i) => { const y = y0 + i * h; return rect(xAt(y + h / 2) - w / 2, y + 2, w, h - 5, 4, c); }).join(''); };
const disks = (y0, y1, n) => { const h = (y1 - y0) / n; return Array.from({ length: n - 1 }, (_, i) => { const y = y0 + (i + 1) * h; return rect(xAt(y) - 20, y - 3, 40, 4, 2, '#8fb0c0'); }).join(''); };
const lab = (y, s, sub, c) => T(170, y, s, { s: 26, c, a: 'end' }) + T(170, y + 26, sub, { s: 18, c: C.muted, a: 'end' }) + line(`M180 ${y - 8} L${f(xAt(y - 8) - 30)} ${y - 8}`, c, 2);

module.exports = {
  'ap7-4': fig('The osteon (haversian system)', '0 0 640 500',
    circ(250, 250, 150, BONE) + [130, 105, 80, 55].map(r => ring(250, 250, r, r, BONED, 4)).join('') + lacunae + line(canaliculi, '#c9b27c', 1.5),
    [
      { label: 'Central (haversian) canal', c: C.red, detail: 'Runs lengthwise through the centre of each osteon and carries blood vessels.',
        svg: circ(250, 250, 28, '#f6e3da') + circ(242, 246, 8, '#c8524a') + circ(260, 256, 8, '#5f7ba3') + T(250, 30, 'Central canal', { s: 24, c: C.red }) + line('M250 40 L250 218', C.red, 2.5) },
      { label: 'Lamella', c: C.goldD, detail: 'One concentric ring of bone around the central canal.',
        svg: ring(250, 250, 105, 105, C.goldD, 8) + T(530, 120, 'Lamella', { s: 24, c: C.goldD }) + line('M500 128 L338 196', C.goldD, 2.5) },
      { label: 'Lacuna and osteocyte', c: C.plumD, detail: 'A tiny cavity between the lamellae. Each one holds a bone cell, an osteocyte.',
        svg: ell(250 + 118, 250, 14, 9, '#7a6681') + ring(368, 250, 22, 16, C.plumD, 4) + T(560, 260, 'Lacuna', { s: 24, c: C.plumD }) + line('M520 252 L392 250', C.plumD, 2.5) },
      { label: 'Canaliculi', c: '#8a6f35', detail: 'Tiny canals that link the lacunae to each other and to the central canal, so fluid can bring oxygen and nutrients and take waste away.',
        svg: line(canaliculi, '#8a6f35', 3) + T(540, 400, 'Canaliculi', { s: 24, c: '#8a6f35' }) },
      { label: 'Perforating canal', c: C.blueD, detail: 'Volkmann’s canals run crosswise and also carry blood vessels into the bone.',
        svg: rect(0, 240, 222, 20, 10, '#f6e3da') + line('M0 250 L222 250', '#c8524a', 5) + T(100, 230, 'Perforating canal', { s: 22, c: C.blueD }) }
    ], { hint: 'Fluid moves from the central canal out through the canaliculi to every osteocyte.' }),

  'ap7-6': fig('Parts of a long bone', '0 120 760 360',
    sh(LB, BONE) + spongy + rect(220, 252, 320, 56, 26, '#f2d27a') + line('M120 186 C140 240 140 320 120 376 M640 186 C620 240 620 320 640 376', '#c9b27c', 4),
    [
      { label: 'Diaphysis', c: C.ink, detail: 'The shaft, mostly compact bone.', svg: line('M210 222 L550 222', C.ink, 5) + T(380, 210, 'Diaphysis (shaft)', { s: 24, c: C.ink }) },
      { label: 'Epiphysis', c: C.rose, detail: 'Each end of the bone, filled with spongy bone.', svg: outline('M110 180 C40 165 20 230 20 280 C20 330 40 395 110 380', C.rose, 6) + T(70, 160, 'Epiphysis', { s: 24, c: C.rose }) },
      { label: 'Metaphysis', c: C.plumD, detail: 'The flared part between the shaft and each end.', svg: outline('M130 190 C160 200 170 235 200 235 M130 370 C160 360 170 325 200 325', C.plumD, 7) + T(160, 420, 'Metaphysis', { s: 22, c: C.plumD }) },
      { label: 'Epiphyseal line', c: '#8a6f35', detail: 'The growth line between the epiphysis and the rest of the bone. In children it is a growth plate of cartilage.', svg: line('M640 186 C620 240 620 320 640 376', '#8a6f35', 7) + T(620, 160, 'Epiphyseal line', { s: 22, c: '#8a6f35' }) },
      { label: 'Medullary cavity', c: C.goldD, detail: 'The hollow inside the shaft, filled with yellow marrow (mostly fat).', svg: ring(380, 280, 166, 34, C.goldD, 5) + T(380, 288, 'Medullary cavity', { s: 22, c: '#8a6f35' }) },
      { label: 'Articular cartilage', c: C.blueD, detail: 'Smooth cartilage covering the joint surface at each end.', svg: line('M58 186 C26 214 18 250 20 280 C20 310 26 346 58 374', '#8fb0c0', 12) + line('M702 186 C734 214 742 250 740 280 C740 310 734 346 702 374', '#8fb0c0', 12) + T(700, 420, 'Articular cartilage', { s: 22, c: C.blueD }) },
      { label: 'Periosteum', c: C.deep, detail: 'The tough membrane covering the outside of the bone.', svg: line(SHAFT_OUT, '#7d9378', 6) + T(380, 360, 'Periosteum', { s: 22, c: C.deep }) }
    ], { tap: true, hint: 'Tap a part to find it on the bone.' }),

  'ap7-9': fig('Axial and appendicular skeleton', '60 30 380 950',
    body(),
    [
      { label: 'Skull (axial)', c: C.deep, detail: 'Part of the axial skeleton: 28 bones, cranial and facial, plus the hyoid in the neck.', svg: skull + line('M236 150 C244 156 256 156 264 150', AX, 5) },
      { label: 'Spine, ribs and sternum (axial)', c: C.sage, detail: 'Also axial: 26 vertebrae, 24 ribs and the sternum. The axial skeleton is the body’s central column.', svg: spine + ribs },
      { label: 'Upper extremities (appendicular)', c: C.goldD, detail: 'Appendicular: the arms, hands and shoulder girdles, 64 bones.', svg: upper + mirror(upper) },
      { label: 'Lower extremities (appendicular)', c: '#8a6f35', detail: 'Appendicular: the legs, feet and pelvic girdle, 62 bones.', svg: lower + mirror(bone('M286 536 L292 740', AP, 16) + circ(292, 756, 11, AP) + bone('M290 772 L286 930 M302 774 L300 928', AP, 8) + bone('M282 946 L320 952', AP, 10)) }
    ], { hint: 'Green bones are axial, gold bones are appendicular.' }),

  'ap7-12': fig('The vertebral column (side view)', '0 20 520 660',
    line('M' + Array.from({ length: 61 }, (_, i) => `${f(xAt(40 + i * 10) - 34)} ${40 + i * 10}`).join(' L'), '#e7d5cf', 10) + T(470, 60, 'Front →', { s: 20, c: C.muted }),
    [
      { label: 'Cervical: 7', c: C.blueD, detail: 'The neck. C1 (atlas) holds up the head; C2 (axis) is the pivot it turns on.', svg: seg(40, 150, 7, '#8aa3b0', 44) + lab(100, 'Cervical', '7, neck', C.blueD) },
      { label: 'Thoracic: 12', c: C.rose, detail: 'The chest. Long downward spines and facets where the ribs attach.', svg: seg(150, 400, 12, '#d9a092', 50) + lab(280, 'Thoracic', '12, ribs attach', C.rose) },
      { label: 'Lumbar: 5', c: C.goldD, detail: 'The lower back. The largest and strongest vertebrae.', svg: seg(400, 530, 5, '#dcc27e', 58) + lab(470, 'Lumbar', '5, largest', C.goldD) },
      { label: 'Sacrum', c: C.deep, detail: 'Five vertebrae fused into one.', svg: sh(`M${f(xAt(532) - 28)} 532 L${f(xAt(532) + 28)} 532 L${f(xAt(600) + 14)} 604 L${f(xAt(600) - 18)} 604 Z`, '#a3b795') + lab(570, 'Sacrum', '5 fused', C.deep) },
      { label: 'Coccyx', c: C.plumD, detail: 'The tailbone: four small vertebrae fused together.', svg: seg(608, 650, 3, '#b49ac0', 16) + lab(640, 'Coccyx', '4 fused', C.plumD) },
      { label: 'Intervertebral disks', c: '#5f8798', detail: 'Pads of fibrocartilage between the vertebrae.', svg: disks(40, 150, 7) + disks(150, 400, 12) + disks(400, 530, 5) + T(440, 330, 'Disks', { s: 22, c: '#5f8798' }) }
    ], { hint: 'The curves: cervical and lumbar bend forward, thoracic and sacral bend back.' })
};
