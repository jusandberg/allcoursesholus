const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f, neuron } = require('./lib.js');

// spinal cord cross-section: dorsal (back) at the top
const gray = (x, y, k) => { k = k || 1; const P = (a, b) => `${f(x + a * k)} ${f(y + b * k)}`;
  return sh(`M${P(-10, -14)} C${P(-24, -70)} ${P(-64, -84)} ${P(-58, -44)} C${P(-54, -22)} ${P(-80, 0)} ${P(-78, 30)} C${P(-76, 68)} ${P(-34, 66)} ${P(-14, 18)} L${P(14, 18)} C${P(34, 66)} ${P(76, 68)} ${P(78, 30)} C${P(80, 0)} ${P(54, -22)} ${P(58, -44)} C${P(64, -84)} ${P(24, -70)} ${P(10, -14)} Z`, '#cdb7c8'); };
const cord = (x, y, k) => { k = k || 1; return ell(x, y, 124 * k, 96 * k, '#f6efe0') + gray(x, y, k) + circ(x, y + 2 * k, 6 * k, '#a3bcc8'); };

module.exports = {
  'ap10-7': fig('How an impulse travels', '0 0 860 400',
    rect(40, 70, 780, 34, 17, '#d9c2d6') + T(430, 40, 'Unmyelinated: a continuous wave, slow (about 0.5 m/s)', { s: 22, c: C.muted })
      + rect(40, 270, 780, 22, 11, '#d9c2d6') + Array.from({ length: 6 }, (_, i) => rect(52 + i * 130, 256, 112, 50, 25, '#ebd08c')).join('') + T(430, 180, 'Myelinated: jumps from node to node, fast (about 120 m/s)', { s: 22, c: C.muted }),
    [
      { label: 'Resting potential', c: C.blueD, detail: 'At rest, sodium is concentrated outside and potassium inside; the inside is negative. The sodium-potassium pump keeps it this way.',
        svg: Array.from({ length: 8 }, (_, i) => T(600 + i * 26, 64, '+', { s: 22, c: C.rose }) + T(600 + i * 26, 96, '−', { s: 22, c: C.blueD })).join('') + T(704, 140, 'resting: inside negative', { s: 18, c: C.blueD }) },
      { label: 'Depolarization', c: C.rose, detail: 'Sodium rushes in and the inside turns positive: the action potential.',
        svg: rect(260, 66, 90, 42, 21, '#c86d56', 'opacity:.55') + arrow(305, 30 + 20, 305, 80, C.rose, { w: 4 }) + T(305, 140, 'Na⁺ in: inside +', { s: 18, c: C.rose }) },
      { label: 'Repolarization', c: C.deep, detail: 'Potassium moves out and the pump restores the charges. The wave moves one way down the fibre.',
        svg: rect(150, 66, 90, 42, 21, '#8fa48a', 'opacity:.6') + arrow(195, 92, 195, 130, C.deep, { w: 4 }) + T(160, 160, 'K⁺ out', { s: 18, c: C.deep }) + arrow(360, 87, 440, 87, C.ink, { w: 4 }) },
      { label: 'Node to node', c: C.goldD, detail: 'In myelinated fibres the impulse jumps between the gaps in the myelin (the nodes), so it travels far faster.',
        svg: Array.from({ length: 5 }, (_, i) => line(`M${170 + i * 130} 250 Q${235 + i * 130} 214 ${300 + i * 130} 250`, C.goldD, 4) + arrow(290 + i * 130, 240, 300 + i * 130, 252, C.goldD, { w: 4 })).join('') + T(430, 350, 'Each gap is a node', { s: 20, c: C.goldD }) }
    ], { hint: 'Watch where the charge flips as the impulse passes.' }),

  'ap10-8': fig('A synapse', '0 0 780 440',
    sh('M0 120 C120 110 240 120 300 150 C380 190 380 290 300 330 C240 360 120 350 0 340 Z', '#d9c2d6') + sh('M780 110 C640 120 520 130 470 170 C420 210 420 270 470 310 C520 350 640 350 780 350 Z', '#e8d6e4'),
    [
      { label: 'Axon terminal (presynaptic)', c: C.plumD, detail: 'The end of the sending neuron. When the impulse arrives it releases a neurotransmitter.',
        svg: [[220, 190], [260, 250], [210, 290], [300, 220], [180, 240]].map(([x, y]) => circ(x, y, 22, '#f2e2ec') + [[-7, -5], [6, 4], [-2, 8]].map(([a, b]) => circ(x + a, y + b, 4, '#d3a84b')).join('')).join('') + T(150, 90, 'Sending neuron', { s: 22, c: C.plumD }) },
      { label: 'Synaptic cleft', c: C.blueD, detail: 'The gap between the cells. They come close but don’t touch. The signal crosses in one direction only.',
        svg: rect(372, 180, 66, 100, 20, '#e3edf1') + T(405, 400, 'Synaptic cleft', { s: 22, c: C.blueD }) + line('M405 380 L405 290', C.blueD, 2.5) },
      { label: 'Neurotransmitter', c: C.goldD, detail: 'A chemical messenger, usually acetylcholine. Others include norepinephrine, epinephrine, serotonin, dopamine and endorphins.',
        svg: [[380, 210], [400, 236], [392, 262], [416, 222], [420, 252], [384, 238]].map(([x, y]) => circ(x, y, 6, '#d3a84b')).join('') + arrow(350, 300, 440, 300, C.goldD, { w: 4 }) + T(405, 160, 'Neurotransmitter', { s: 20, c: C.goldD }) },
      { label: 'Receptors (postsynaptic)', c: C.deep, detail: 'Sites on the next neuron, muscle or gland where the neurotransmitter binds and passes the signal on.',
        svg: [200, 230, 260].map(y => rect(440, y - 8, 16, 18, 4, '#8fa48a')).join('') + T(640, 90, 'Receiving cell', { s: 22, c: C.deep }) },
      { label: 'Acetylcholinesterase', c: C.rose, detail: 'An enzyme that breaks down acetylcholine, so the signal stops instead of firing again and again.',
        svg: [[400, 196], [420, 276]].map(([x, y]) => sh(`M${x - 10} ${y} L${x} ${y - 10} L${x + 10} ${y} L${x} ${y + 10} Z`, '#c86d56')).join('') + T(560, 400, 'Breaks it down', { s: 20, c: C.rose }) }
    ]),

  'ap10-9': fig('A reflex arc', '0 0 900 560',
    cord(640, 170, 1) + T(640, 40, 'Spinal cord', { s: 22, c: C.muted }) + rect(30, 400, 280, 60, 30, '#d98f80') + T(170, 500, 'Thigh muscle', { s: 20, c: C.muted }) + ell(80, 300, 40, 24, '#f4ece0') + T(80, 360, 'Skin', { s: 20, c: C.muted }),
    [
      { label: 'Sensory receptor', c: C.goldD, detail: 'Detects the stimulus, like a thorn or the tap on the knee.', svg: sh('M60 296 L80 270 L100 296 Z', C.goldD) + T(80, 252, '1 Receptor', { s: 22, c: C.goldD }) },
      { label: 'Sensory (afferent) neuron', c: C.blueD, detail: 'Carries the impulse in to the spinal cord through the dorsal root.', svg: line('M100 296 C260 280 380 100 560 110 L600 120', '#6f91a2', 6) + ell(470, 118, 22, 14, '#a3bcc8') + arrow(300, 210, 330, 185, C.blueD, { w: 4 }) + T(300, 150, '2 Sensory', { s: 22, c: C.blueD }) },
      { label: 'Association neuron', c: C.plumD, detail: 'Inside the spinal cord, it links the sensory neuron to the motor neuron.', svg: line('M600 120 C640 150 640 190 600 220', '#7a6681', 6) + T(800, 180, '3 Association', { s: 22, c: C.plumD }) },
      { label: 'Motor (efferent) neuron', c: C.rose, detail: 'Carries the command out through the ventral root to the muscle.', svg: line('M600 220 C520 300 420 330 310 420', '#c86d56', 6) + arrow(440, 330, 400, 356, C.rose, { w: 4 }) + T(480, 400, '4 Motor', { s: 22, c: C.rose }) },
      { label: 'Effector', c: C.deep, detail: 'The organ that responds, here a muscle that contracts (as in the knee-jerk reflex).', svg: ring(170, 430, 150, 44, C.deep, 5) + T(170, 540, '5 Effector (muscle)', { s: 22, c: C.deep }) }
    ], { hint: 'Tap 1 to 5 to follow the signal round the arc.' }),

  'ap10-11': fig('The meninges around the spinal cord', '0 0 860 460',
    circ(300, 230, 210, '#efe6cf') + T(300, 470, '', {}),
    [
      { label: 'Epidural space', c: C.goldD, detail: 'Between the vertebra and the meninges. Holds fat and loose connective tissue.', svg: ring(300, 230, 186, 186, '#f2d27a', 20) + T(640, 40, 'Epidural space (fat)', { s: 22, c: C.goldD, a: 'start' }).replace('x="640"', 'x="560"') + line('M556 34 L440 96', C.goldD, 2) },
      { label: 'Dura mater', c: C.ink, detail: 'The tough outer layer.', svg: ring(300, 230, 166, 166, '#8a958c', 10) + T(560, 110, 'Dura mater (tough)', { s: 22, c: C.ink, a: 'start' }) + line('M556 104 L452 150', C.ink, 2) },
      { label: 'Subdural space', c: C.muted, detail: 'Between the dura and arachnoid. Holds serous fluid.', svg: ring(300, 230, 154, 154, '#e3edf1', 8) + T(560, 180, 'Subdural space', { s: 22, c: C.muted, a: 'start' }) + line('M556 174 L452 200', C.muted, 2) },
      { label: 'Arachnoid mater', c: C.plumD, detail: 'The middle "spider" layer, with web-like strands.', svg: ring(300, 230, 144, 144, '#b49ac0', 6) + T(560, 250, 'Arachnoid (middle)', { s: 22, c: C.plumD, a: 'start' }) + line('M556 244 L446 236', C.plumD, 2) },
      { label: 'Subarachnoid space', c: C.blueD, detail: 'Between the arachnoid and pia. Holds cerebrospinal fluid; a spinal tap draws from here, below the end of the cord.', svg: ring(300, 230, 128, 128, '#cfe0e8', 24) + Array.from({ length: 12 }, (_, i) => { const a = i / 12 * 6.28; return line(`M${f(300 + 116 * Math.cos(a))} ${f(230 + 116 * Math.sin(a))} L${f(300 + 140 * Math.cos(a))} ${f(230 + 140 * Math.sin(a))}`, '#b49ac0', 2); }).join('') + T(560, 320, 'Subarachnoid space (CSF)', { s: 22, c: C.blueD, a: 'start' }) + line('M556 314 L420 290', C.blueD, 2) },
      { label: 'Pia mater', c: C.rose, detail: 'The delicate inner layer that clings to the cord itself.', svg: ring(300, 230, 112, 92, '#d98aa8', 5) + T(560, 390, 'Pia mater (clings)', { s: 22, c: C.rose, a: 'start' }) + line('M556 384 L400 300', C.rose, 2) }
    ].map((it, i) => i === 5 ? it : it), { art2: true, hint: 'From the outside in: epidural, dura, subdural, arachnoid, subarachnoid, pia.', top: cord(300, 230, .88) }),

  'ap10-12': fig('Spinal cord, roots and spinal nerve', '0 0 860 440',
    cord(430, 220, 1.3) + T(430, 30, 'Dorsal (back)', { s: 20, c: C.muted }) + T(430, 430, 'Ventral (front)', { s: 20, c: C.muted }),
    [
      { label: 'Gray matter', c: C.plumD, detail: 'The butterfly-shaped core of cell bodies, with dorsal (back) and ventral (front) horns.', svg: gray(430, 220, 1.3).replace('fill:#cdb7c8', 'fill:#b49ac0') + T(430, 150, 'Gray matter', { s: 20, c: C.plumD }) },
      { label: 'White matter', c: C.goldD, detail: 'Around the gray matter: myelinated tracts carrying signals up to the brain and down from it.', svg: ring(430, 220, 161, 125, C.goldD, 5) + T(640, 380, 'White matter', { s: 20, c: C.goldD }) },
      { label: 'Dorsal root (sensory)', c: C.blueD, detail: 'Sensory only. Joins the dorsal gray horn. Its swelling is the dorsal root ganglion.', svg: line('M380 120 C330 90 270 100 210 170 M480 120 C530 90 590 100 650 170', '#6f91a2', 9) + ell(250, 120, 22, 14, '#a3bcc8') + ell(610, 120, 22, 14, '#a3bcc8') + T(160, 100, 'Dorsal root', { s: 22, c: C.blueD }) },
      { label: 'Ventral root (motor)', c: C.rose, detail: 'Motor only. Comes from the ventral gray horn.', svg: line('M370 300 C320 320 260 300 210 250 M490 300 C540 320 600 300 650 250', '#c86d56', 9) + T(160, 340, 'Ventral root', { s: 22, c: C.rose }) },
      { label: 'Spinal nerve (mixed)', c: C.deep, detail: 'The two roots join, so every spinal nerve is mixed: sensory and motor. There are 31 pairs.', svg: line('M210 210 L60 210 M650 210 L800 210', '#7d9378', 14) + T(110, 250, 'Spinal nerve', { s: 22, c: C.deep }) }
    ])
};
