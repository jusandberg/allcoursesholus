const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f } = require('./lib.js');
const BONE = '#efe6cf', CART = '#bcd3dc';

// a synovial joint, upright
const TOP = 'M230 0 L370 0 L370 170 C370 246 340 262 300 262 C260 262 230 246 230 170 Z';
const BOT = 'M230 560 L370 560 L370 372 C370 320 340 304 300 304 C260 304 230 320 230 372 Z';
const capL = 'M226 150 C160 190 160 380 226 410', capR = 'M374 150 C440 190 440 380 374 410';

// limbs for the movement panels
const limb = (d, c) => line(d, c || '#e6d6c4', 18);
const torso = (x, y) => rect(x - 34, y, 68, 120, 26, '#f4ece0') + circ(x, y - 32, 26, '#f4ece0');
const arc = (cx, cy, r, a0, a1, c) => { const p = a => [cx + r * Math.cos(a), cy + r * Math.sin(a)]; const [x0, y0] = p(a0), [x1, y1] = p(a1); return line(`M${f(x0)} ${f(y0)} A${r} ${r} 0 0 ${a1 > a0 ? 1 : 0} ${f(x1)} ${f(y1)}`, c, 4) + (() => { const sg = a1 > a0 ? 1 : -1, tx = -Math.sin(a1) * sg, ty = Math.cos(a1) * sg; return arrow(x1 - tx * 12, y1 - ty * 12, x1 + tx * 4, y1 + ty * 4, c, { w: 4 }); })(); };
const cell = (x, y, name, sub, c) => T(x, y + 112, name, { s: 26, c }) + T(x, y + 138, sub, { s: 18, c: C.muted });

module.exports = {
  'ap8-4': fig('Inside a synovial joint', '0 0 600 560',
    sh(TOP, BONE) + sh(BOT, BONE),
    [
      { label: 'Articular cartilage', c: C.blueD, detail: 'Smooth cartilage covering the bone ends. It has little blood supply, so synovial fluid nourishes it.',
        svg: line('M236 200 C246 250 270 262 300 262 C330 262 354 250 364 200', CART, 14) + line('M236 360 C246 316 270 304 300 304 C330 304 354 316 364 360', CART, 14) + T(520, 214, 'Cartilage', { s: 22, c: C.blueD }) },
      { label: 'Joint cavity and synovial fluid', c: '#6f91a2', detail: 'The space between the bones, filled with slippery synovial fluid that lets the surfaces glide.',
        svg: ell(300, 283, 112, 40, '#d7e6ec') + T(300, 291, 'Synovial fluid', { s: 18, c: C.blueD }) },
      { label: 'Synovial membrane', c: C.rose, detail: 'Lines the inside of the capsule and makes the synovial fluid.',
        svg: line('M232 176 C186 210 186 360 232 396 M368 176 C414 210 414 360 368 396', '#d98aa8', 5) + T(90, 290, 'Synovial', { s: 22, c: C.rose }) + T(90, 316, 'membrane', { s: 22, c: C.rose }) },
      { label: 'Joint capsule', c: C.deep, detail: 'A sleeve that encloses the joint cavity. Looser capsules allow more movement.',
        svg: line(capL, '#8fa48a', 10) + line(capR, '#8fa48a', 10) + T(520, 300, 'Capsule', { s: 22, c: C.deep }) },
      { label: 'Ligaments', c: C.goldD, detail: 'Strong bands that reinforce the capsule and hold the bones together.',
        svg: line('M210 110 C156 200 156 370 210 460', '#c7b07a', 12) + line('M390 110 C444 200 444 370 390 460', '#c7b07a', 12) + T(520, 470, 'Ligament', { s: 22, c: C.goldD }) }
    ], { hint: 'Tap a part to find it in the joint.' }),

  'ap8-5': fig('Joint movements', '0 0 900 640',
    '',
    [
      { label: 'Flexion', c: C.rose, detail: 'Bending: the angle between the bones gets smaller, like bending the elbow.',
        svg: limb('M150 60 L150 160 L232 110') + circ(150, 160, 10, '#d9c4ad') + arc(150, 160, 70, 1.3, -.3, C.rose) + cell(150, 120, 'Flexion', 'angle gets smaller', C.rose) },
      { label: 'Extension', c: C.deep, detail: 'Straightening: the angle gets larger. Going past anatomic position is hyperextension.',
        svg: limb('M450 60 L450 160 L450 250') + circ(450, 160, 10, '#d9c4ad') + arc(450, 160, 56, -.55, 1.45, C.deep) + cell(450, 120, 'Extension', 'angle gets larger', C.deep) },
      { label: 'Abduction', c: C.goldD, detail: 'Moving a limb away from the midline, like lifting the arm out to the side.',
        svg: torso(720, 60) + limb('M756 74 L840 30') + limb('M684 74 L670 190', '#efe6da') + arc(720, 74, 90, .9, -.4, C.goldD) + cell(750, 120, 'Abduction', 'away from midline', C.goldD) },
      { label: 'Adduction', c: C.blueD, detail: 'Moving a limb toward the midline, like bringing the arm back to the side.',
        svg: torso(150, 380) + limb('M186 394 L200 510') + limb('M114 394 L100 510', '#efe6da') + arc(186, 394, 90, -.6, 1.3, C.blueD) + cell(150, 440, 'Adduction', 'toward midline', C.blueD) },
      { label: 'Rotation', c: C.plumD, detail: 'Turning a bone around its own axis, like shaking your head no.',
        svg: circ(450, 380, 42, '#f4ece0') + rect(436, 420, 28, 40, 8, '#f4ece0') + ring(450, 380, 70, 20, C.plumD, 4) + arrow(500, 394, 520, 382, C.plumD, { w: 4 }) + cell(450, 440, 'Rotation', 'turn on its own axis', C.plumD) },
      { label: 'Circumduction', c: C.sage, detail: 'The end of the limb draws a circle while the limb sweeps out a cone, like making circles with your arm.',
        svg: circ(720, 320, 12, '#d9c4ad') + line('M720 320 L670 470 M720 320 L770 470', '#c7d2c4', 3, 'stroke-dasharray="6 7"') + limb('M720 320 L700 470') + ring(720, 470, 52, 16, C.sage, 4) + cell(720, 440, 'Circumduction', 'end draws a circle', C.deep) }
    ], { hint: 'Tap a movement to see it.' }),

  'ap8-7': fig('Six types of synovial joint', '0 0 900 560',
    '',
    [
      { label: 'Ball and socket', c: C.rose, detail: 'Multiaxial: a ball in a socket moves in all planes. Shoulder and hip; the shoulder moves more.',
        svg: sh('M80 150 C80 70 220 70 220 150 L196 150 C196 96 104 96 104 150 Z', '#d8c39a') + circ(150, 140, 42, BONE) + rect(136, 160, 28, 80, 10, BONE) + shine(136, 124, 10) + cell(150, 160, 'Ball and socket', 'shoulder, hip', C.rose) },
      { label: 'Hinge', c: C.deep, detail: 'Uniaxial: flexion and extension in one plane. Elbow, knee, and the middle and end finger joints.',
        svg: rect(370, 110, 160, 50, 25, BONE) + sh('M360 160 L540 160 L540 210 L510 210 C500 180 400 180 390 210 L360 210 Z', '#d8c39a') + arrow(560, 110, 560, 60, C.deep, { w: 4, both: true }) + cell(450, 160, 'Hinge', 'elbow, knee', C.deep) },
      { label: 'Pivot', c: C.plumD, detail: 'Uniaxial: rotation in one plane, like the atlas turning on the axis.',
        svg: rect(734, 70, 32, 170, 12, '#d8c39a') + ring(750, 130, 46, 18, '#c7b07a', 14) + ring(750, 130, 66, 26, C.plumD, 3) + arrow(812, 140, 820, 130, C.plumD, { w: 4 }) + cell(750, 160, 'Pivot', 'atlas on axis', C.plumD) },
      { label: 'Condyloid', c: C.goldD, detail: 'Biaxial: an oval condyle in an oval cavity, moving in two planes. The wrist joint between the radius and carpals.',
        svg: sh('M70 420 C70 360 230 360 230 420 L206 420 C206 386 94 386 94 420 Z', '#d8c39a') + ell(150, 410, 54, 26, BONE) + rect(136, 430, 28, 60, 10, BONE) + cell(150, 440, 'Condyloid', 'wrist', C.goldD) },
      { label: 'Saddle', c: C.blueD, detail: 'Biaxial, found only in the thumb (trapezium and first metacarpal). It lets the thumb oppose the fingers.',
        svg: sh('M380 400 C410 370 490 370 520 400 L520 440 L380 440 Z', '#d8c39a') + sh('M390 396 C420 420 480 420 510 396 L510 360 C480 338 420 338 390 360 Z', BONE) + cell(450, 440, 'Saddle', 'thumb only', C.blueD) },
      { label: 'Gliding', c: C.sage, detail: 'Flat surfaces that only slide over each other, like the joints between the vertebrae’s articular processes.',
        svg: rect(680, 360, 140, 40, 10, BONE) + rect(670, 406, 140, 40, 10, '#d8c39a') + arrow(700, 340, 800, 340, C.sage, { w: 4, both: true }) + cell(750, 440, 'Gliding', 'between vertebrae', C.deep) }
    ])
};
