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


// skull from the left side (face to the left), for the cranial bones
const SK = {
  frontal: 'M122 262 C112 214 122 150 160 112 C196 78 240 60 286 56 C276 120 252 200 226 274 C206 268 186 252 168 246 C150 244 132 250 122 262 Z',
  parietal: 'M286 56 C340 50 400 66 458 104 C452 180 448 260 450 330 C430 300 410 280 382 262 C350 236 300 224 270 246 C258 254 246 266 236 278 L226 274 C252 200 276 120 286 56 Z',
  occipital: 'M458 104 C500 132 532 182 544 240 C552 296 534 350 498 388 C486 398 474 404 462 404 C456 380 452 356 450 330 C448 260 452 180 458 104 Z',
  temporal: 'M236 278 C246 266 258 254 270 246 C300 224 350 236 382 262 C410 280 430 300 450 330 C452 356 456 380 462 404 C440 406 420 400 404 392 L300 372 C286 360 266 346 250 334 L244 300 Z',
  sphenoid: 'M226 274 L236 278 L244 300 L250 334 C236 336 218 334 206 328 C204 306 210 286 226 274 Z',
  face: 'M122 262 C114 280 108 300 98 318 C94 330 104 340 112 344 C106 360 108 380 118 392 C132 404 150 404 168 400 L236 396 C250 392 264 384 274 372 L300 372 C286 360 266 346 250 334 C236 336 218 334 206 328 C186 324 172 318 162 316 C150 314 140 300 134 286 Z',
  jaw: 'M118 404 C112 424 114 450 128 466 C142 478 168 478 196 470 L290 446 C304 440 312 426 314 410 L322 372 C324 362 316 356 308 360 L300 372 C298 390 292 404 282 412 L236 420 C200 426 160 420 132 410 Z'
};
const SKART = sh(SK.face, '#efe6cf') + sh(SK.jaw, '#efe6cf')
  + ell(168, 290, 36, 32, '#5d5348') + ell(120, 320, 10, 16, '#5d5348')
  + line('M190 322 C220 330 262 340 304 346', '#d9c79c', 10)
  + Array.from({ length: 8 }, (_, i) => rect(132 + i * 14, 392, 11, 16, 4, '#fbf7ef')).join('')
  + Array.from({ length: 8 }, (_, i) => rect(134 + i * 14, 410, 11, 14, 4, '#fbf7ef')).join('');
const SUT = 'M286 56 C276 120 252 200 226 274 M458 104 C452 180 448 260 450 330 M236 278 C246 266 258 254 270 246 C300 224 350 236 382 262 C410 280 430 300 450 330';

module.exports = {
  'ap7-10': fig('The cranial bones (left side)', '20 20 600 480',
    SKART + line(SUT, '#c9b27c', 3),
    [
      { label: 'Frontal', c: C.deep, detail: 'The forehead and the roof of the eye sockets (orbits). It joins the parietals at the coronal suture.',
        svg: sh(SK.frontal, '#a3b795') + shine(180, 140, 22, 12) + T(200, 170, 'Frontal', { s: 24, c: C.deep }) },
      { label: 'Parietals (2)', c: C.blueD, detail: 'The upper sides and roof of the skull. The two parietals meet along the top at the sagittal suture. You see the left one here.',
        svg: sh(SK.parietal, '#a3bcc8') + shine(340, 110, 26, 12) + T(360, 160, 'Parietal', { s: 24, c: C.blueD }) },
      { label: 'Temporals (2)', c: C.goldD, detail: 'The lower sides. Each one encloses an ear and has the mastoid process (the bump behind the ear) and the styloid process (a thin spike below it).',
        svg: sh(SK.temporal, '#e8d197') + ell(352, 336, 13, 11, '#5d5348') + sh('M408 392 C414 412 426 428 438 432 C446 420 448 404 444 396 Z', '#e8d197') + line('M380 384 L362 446', '#d9b979', 6) + T(330, 296, 'Temporal', { s: 24, c: '#8a6f35' }) + T(452, 452, 'Mastoid', { s: 18, c: '#8a6f35' }) + T(352, 470, 'Styloid', { s: 18, c: '#8a6f35' }) },
      { label: 'Occipital', c: C.plumD, detail: 'The back and base of the skull. It joins the parietals at the lambdoid suture. Underneath is the foramen magnum, the large opening where the spinal cord connects to the brain.',
        svg: sh(SK.occipital, '#c4b4ca') + shine(508, 200, 10, 20) + T(500, 300, 'Occipital', { s: 22, c: C.plumD }) },
      { label: 'Sphenoid', c: C.rose, detail: 'Shaped like a butterfly and anchors all the cranial bones together. From the side you only see the tip of one wing, just behind the eye socket.',
        svg: sh(SK.sphenoid, '#dd9886') + T(150, 470, 'Sphenoid', { s: 22, c: C.rose, a: 'middle' }) + line('M170 450 L222 316', C.rose, 2.5) },
      { label: 'Ethmoid', c: '#8a6f35', detail: 'The lightest cranial bone. It sits between the eye sockets and supports the nasal cavities. From the side you only see a sliver of it inside the eye socket.',
        svg: sh('M140 280 C146 270 156 268 160 276 L162 306 C154 312 144 310 140 302 Z', '#d8c39a') + T(60, 214, 'Ethmoid', { s: 22, c: '#8a6f35', a: 'middle' }) + line('M70 222 L146 286', '#8a6f35', 2.5) },
      { label: 'Sutures', c: C.ink, detail: 'Immovable joints between the cranial bones. Here you can see the coronal suture (frontal and parietal) and the lambdoid suture (parietal and occipital).',
        svg: line(SUT, C.ink, 5) + T(236, 44, 'Coronal', { s: 20, c: C.ink }) + T(504, 92, 'Lambdoid', { s: 20, c: C.ink }) }
    ], { tap: true, hint: 'The cranium has 8 bones: 1 frontal, 2 parietals, 2 temporals, 1 occipital, 1 sphenoid and 1 ethmoid. The face is left plain.' }),

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
