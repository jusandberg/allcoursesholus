const { C, P, sh, circ, ell, rect, line, dash, shine, T, arrow, dot, body, side, fig } = require('./lib.js');
const lab = (x, y, s, c, a, sz) => T(x, y, s, { c, a, s: sz || 30 });

// colours for each pair of terms
const K = { sup: C.blueD, ant: C.rose, ceph: C.plumD, med: C.deep, prox: C.goldD };

module.exports = {
  'ap1-2': fig('Anatomic position', '0 0 640 1000',
    body({ ears: true }),
    [
      { label: 'Standing, facing forward', c: K.sup, detail: 'Upright, head level, eyes looking straight ahead.',
        svg: ell(250, 94, 74, 74, 'none', '') .replace('style="fill:none"', 'fill="none" stroke="' + K.sup + '" stroke-width="5" stroke-dasharray="10 9"') + lab(250, 16, 'Facing forward', K.sup, 'middle', 28) },
      { label: 'Arms at the sides', c: K.ant, detail: 'Arms hang straight down beside the body.',
        svg: line('M128 232 C112 330 100 430 98 528', K.ant, 6) + line('M372 232 C388 330 400 430 402 528', K.ant, 6) + lab(470, 380, 'Arms at', K.ant, 'start', 26) + lab(470, 410, 'the sides', K.ant, 'start', 26) },
      { label: 'Palms facing forward', c: K.prox, detail: 'Palms face forward, so the thumbs point out to the sides, away from the body.',
        svg: ell(98, 566, 34, 46, 'none').replace('style="fill:none"', 'fill="none" stroke="' + K.prox + '" stroke-width="5"') + ell(402, 566, 34, 46, 'none').replace('style="fill:none"', 'fill="none" stroke="' + K.prox + '" stroke-width="5"') + lab(470, 560, 'Palms', K.prox, 'start', 26) + lab(470, 590, 'forward', K.prox, 'start', 26) },
      { label: 'Feet facing forward', c: K.med, detail: 'Feet are flat, slightly apart, with the toes pointing forward.',
        svg: ell(200, 956, 50, 26, 'none').replace('style="fill:none"', 'fill="none" stroke="' + K.med + '" stroke-width="5"') + ell(300, 956, 50, 26, 'none').replace('style="fill:none"', 'fill="none" stroke="' + K.med + '" stroke-width="5"') + lab(470, 950, 'Feet', K.med, 'start', 26) + lab(470, 980, 'forward', K.med, 'start', 26) }
    ], { hint: 'Every direction is described as if the body stands like this, even when lying down.' }),

  'ap1-3': fig('Pairs of opposites', '-200 0 1090 1010',
    body() + side({ dx: 0 }) + dash('M250 30 L250 990', '#c9cfc6', 3)
      + T(250, 1004, 'Front view', { s: 28, c: C.muted }) + T(645, 1004, 'Side view', { s: 28, c: C.muted }),
    [
      { label: 'Superior / inferior', c: K.sup, detail: 'Superior is above; inferior is below. The head is superior to the neck. The foot is inferior to the ankle.',
        svg: arrow(-110, 60, -110, 930, K.sup, { both: true, w: 6 }) + lab(-110, 40, 'Superior', K.sup) + lab(-110, 972, 'Inferior', K.sup) },
      { label: 'Anterior / posterior', c: K.ant, detail: 'Anterior (ventral) is toward the front; posterior (dorsal) is toward the back. The esophagus is posterior to the trachea.',
        svg: arrow(540, 330, 760, 330, K.ant, { both: true, w: 6 }) + lab(530, 300, 'Posterior', K.ant, 'middle', 32) + lab(530, 372, '(dorsal)', K.ant, 'middle', 26) + lab(770, 300, 'Anterior', K.ant, 'middle', 32) + lab(770, 372, '(ventral)', K.ant, 'middle', 26) },
      { label: 'Cephalad / caudal', c: K.ceph, detail: 'Cephalad (cranial) means toward the head. Caudal means toward the tail, at the lower end of the trunk.',
        svg: arrow(830, 70, 830, 560, K.ceph, { both: true, w: 6 }) + lab(830, 46, 'Cephalad', K.ceph) + lab(830, 600, 'Caudal', K.ceph) },
      { label: 'Medial / lateral', c: K.med, detail: 'Medial is toward the midline (the dashed line); lateral is toward the side.',
        svg: arrow(258, 450, 400, 450, K.med, { both: true, w: 6 }) + lab(262, 432, 'Medial', K.med, 'start', 32) + lab(410, 494, 'Lateral', K.med, 'end', 32) + T(250, 22, 'Midline', { s: 28, c: K.med }) },
      { label: 'Proximal / distal', c: K.prox, detail: 'Proximal is near the point of attachment (the shoulder for the arm); distal is farther away. The elbow is proximal to the wrist.',
        svg: arrow(96, 220, 56, 590, K.prox, { both: true, w: 6 }) + lab(70, 206, 'Proximal', K.prox, 'end', 32) + lab(40, 628, 'Distal', K.prox, 'end', 32) }
    ], { hint: 'Tap a pair to see its arrow on the body.' }),

  'ap1-4': fig('Medial, lateral, proximal, distal', '40 0 560 640',
    body({ ears: true, nose: true }) + dash('M250 30 L250 640', '#c9cfc6', 3)
      // forearm bones in the figure's left arm (right side of the picture): ulna toward the body, radius on the thumb side
      + line('M372 372 L394 524', '#d9cdb0', 9) + line('M392 366 L410 522', '#d9cdb0', 9)
      + dot(354, 206, C.muted, 7) + dot(384, 366, C.muted, 7) + dot(402, 528, C.muted, 7),
    [
      { label: 'Medial: the nose', c: K.med, detail: 'The nose sits on the midline of the face, so it is medial.',
        svg: circ(250, 104, 16, 'none').replace('style="fill:none"', 'fill="none" stroke="' + K.med + '" stroke-width="5"') + lab(250, 22, 'Medial', K.med, 'middle', 28) },
      { label: 'Lateral: the ears', c: K.ant, detail: 'The ears are toward the sides of the head, so they are lateral.',
        svg: arrow(236, 70, 176, 70, K.ant, { w: 5 }) + arrow(264, 70, 324, 70, K.ant, { w: 5 }) + lab(172, 130, 'Lateral', K.ant, 'end', 26) + lab(328, 130, 'Lateral', K.ant, 'start', 26) },
      { label: 'Radius and ulna', c: K.prox, detail: 'In anatomic position the radius (thumb side) is lateral to the ulna. The ulna is on the medial side of the forearm.',
        svg: line('M372 372 L394 524', K.sup, 9) + line('M392 366 L410 522', K.prox, 9) + lab(424, 448, 'Radius', K.prox, 'start', 24) + lab(424, 476, '(lateral)', K.prox, 'start', 20) + lab(356, 470, 'Ulna', K.sup, 'end', 24) + lab(356, 496, '(medial)', K.sup, 'end', 20) },
      { label: 'Proximal: the elbow', c: K.ceph, detail: 'The elbow is proximal to the wrist: it is closer to the shoulder, where the arm attaches to the trunk.',
        svg: arrow(396, 380, 364, 222, K.ceph, { w: 5 }) + lab(424, 300, 'Proximal', K.ceph, 'start', 26) + lab(424, 372, 'Elbow', C.muted, 'start', 22) + lab(340, 196, 'Shoulder', C.muted, 'end', 22) },
      { label: 'Distal: the wrist', c: K.sup, detail: 'The wrist is distal to the elbow, and the fingers are distal to the wrist: they are farther from the attachment.',
        svg: arrow(392, 382, 410, 590, K.sup, { w: 5 }) + lab(450, 596, 'Distal', K.sup, 'start', 26) + lab(424, 534, 'Wrist', C.muted, 'start', 22) }
    ], { hint: 'Tap a label to see it on the body.' }),

  'ap1-5': fig('Body planes', '0 0 900 1010',
    body() + side({ dx: -40 }) + T(250, 1004, 'Front view', { s: 28, c: C.muted }) + T(600, 1004, 'Side view', { s: 28, c: C.muted }),
    [
      { label: 'Midsagittal (median)', c: K.sup, detail: 'Runs down the middle, dividing the body into equal left and right halves.',
        svg: sh('M238 10 L262 34 L262 1000 L238 976 Z', K.sup, 'opacity:.35') + line('M250 20 L250 990', K.sup, 5) + lab(250, 22, 'Midsagittal', K.sup, 'middle', 32) },
      { label: 'Sagittal', c: C.blue, detail: 'Any plane parallel to the midsagittal plane. It divides the body into unequal left and right parts.',
        svg: sh('M318 10 L342 34 L342 1000 L318 976 Z', C.blue, 'opacity:.4') + line('M330 20 L330 990', C.blueD, 4) + lab(400, 60, 'Sagittal', C.blueD, 'middle', 32) },
      { label: 'Frontal (coronal)', c: K.ant, detail: 'Divides the body into anterior (front) and posterior (back) parts, at right angles to the sagittal plane.',
        svg: sh('M588 10 L612 34 L612 1000 L588 976 Z', K.ant, 'opacity:.35') + line('M600 20 L600 990', K.ant, 5) + lab(700, 380, 'Front', K.ant, 'start', 30) + lab(500, 380, 'Back', K.ant, 'end', 30) + lab(600, 22, 'Frontal', K.ant, 'middle', 32) },
      { label: 'Transverse (horizontal)', c: K.prox, detail: 'Divides the body into superior (upper) and inferior (lower) parts. A CT slice between the chest and abdomen is transverse.',
        svg: sh('M40 290 L760 290 L790 316 L70 316 Z', K.prox, 'opacity:.35') + line('M50 303 L780 303', K.prox, 5) + lab(820, 290, 'Upper', K.prox, 'start', 30) + lab(820, 340, 'Lower', K.prox, 'start', 30) + lab(820, 230, 'Transverse', K.prox, 'start', 30) }
    ], { hint: 'Tap a plane to see where it cuts.' }),

  'ap1-6': fig('Dorsal and ventral cavities', '440 0 420 600',
    side({ arm: false })
      + ell(634, 92, 40, 34, '#e3b9b0') + rect(600, 150, 13, 410, 6, '#c9a7c0')
      + sh('M628 210 C660 206 682 230 684 270 L684 296 C664 284 646 284 628 296 Z', '#e7a9a0')
      + sh('M628 314 C646 302 668 302 688 314 C692 380 690 460 676 548 C660 556 640 556 628 548 Z', '#ebc39b')
      + line('M626 304 C646 288 668 288 688 306', '#8fa48a', 7),
    [
      { label: 'Dorsal cavity', c: C.plumD, detail: 'Along the back: the cranial cavity (brain) and the spinal cavity (spinal cord). It holds the organs that coordinate the body.',
        svg: ell(634, 92, 46, 40, 'none').replace('style="fill:none"', 'fill="none" stroke="' + C.plumD + '" stroke-width="5"') + rect(594, 146, 25, 418, 12, 'none').replace('style="fill:none"', 'fill="none" stroke="' + C.plumD + '" stroke-width="5"') + lab(586, 300, 'Dorsal', C.plumD, 'end', 28) },
      { label: 'Ventral cavity', c: K.ant, detail: 'Toward the front: the thoracic cavity and the abdominopelvic cavity, split by the diaphragm. Its organs help keep the internal environment steady.',
        svg: sh('M622 204 C662 198 690 226 692 270 C698 380 696 460 680 556 C660 564 640 564 622 556 Z', 'none').replace('style="fill:none"', 'fill="none" stroke="' + K.ant + '" stroke-width="5"') + lab(706, 400, 'Ventral', K.ant, 'start', 28) }
    ], { hint: 'Tap a cavity to outline it.' }),

  'ap1-7': fig('Cavities of the body', '420 0 480 600',
    side({ arm: false }),
    [
      { label: 'Cranial cavity', c: C.plumD, detail: 'Part of the dorsal cavity. Holds the brain.',
        svg: ell(634, 92, 40, 34, '#e3b9b0') + shine(622, 76, 12) + lab(560, 40, 'Cranial', C.plumD, 'middle', 24) },
      { label: 'Spinal cavity', c: C.plum, detail: 'Part of the dorsal cavity. Runs inside the vertebrae and holds the spinal cord.',
        svg: rect(600, 150, 13, 410, 6, '#c9a7c0') + lab(588, 360, 'Spinal', C.plumD, 'end', 24) },
      { label: 'Thoracic cavity', c: C.rose, detail: 'Inside the rib cage: the heart in the pericardial cavity, each lung in a pleural cavity, and the mediastinum between them.',
        svg: sh('M628 210 C660 206 682 230 684 270 L684 296 C664 284 646 284 628 296 Z', '#e7a9a0') + lab(700, 236, 'Thoracic', C.rose, 'start', 24) },
      { label: 'Diaphragm', c: C.deep, detail: 'The dome-shaped muscle that separates the thoracic cavity from the abdominopelvic cavity.',
        svg: line('M626 304 C646 288 668 288 688 306', '#7d9378', 8) + lab(706, 300, 'Diaphragm', C.deep, 'start', 24) },
      { label: 'Abdominopelvic cavity', c: C.goldD, detail: 'Holds the stomach, liver, gallbladder, intestines, kidneys, spleen, pancreas, and in women the ovaries and uterus.',
        svg: sh('M628 314 C646 302 668 302 688 314 C692 380 690 460 676 548 C660 556 640 556 628 548 Z', '#ebc39b') + lab(700, 420, 'Abdomino-', C.goldD, 'start', 24) + lab(700, 450, 'pelvic', C.goldD, 'start', 24) }
    ], { hint: 'Tap a cavity to see where it sits.' }),

  'ap1-8': fig('Levels of organization', '0 0 900 560',
    arrow(185, 150, 255, 150, C.light, { w: 4 }) + arrow(405, 150, 475, 150, C.light, { w: 4 }) + arrow(625, 150, 695, 150, C.light, { w: 4 })
      + line('M770 240 C770 290 300 280 230 320', C.light, 4) + arrow(232, 318, 222, 324, C.light, { w: 4 })
      + arrow(305, 410, 375, 410, C.light, { w: 4 }) + arrow(525, 410, 595, 410, C.light, { w: 4 }),
    [
      { label: 'Atom', c: C.goldD, detail: 'Like carbon, hydrogen and oxygen. Not alive on its own.',
        svg: ell(110, 150, 62, 22, 'none').replace('style="fill:none"', 'fill="none" stroke="#c7b07a" stroke-width="3"') + ell(110, 150, 62, 22, 'none').replace('style="fill:none"', 'fill="none" stroke="#c7b07a" stroke-width="3" transform="rotate(60 110 150)"') + ell(110, 150, 62, 22, 'none').replace('style="fill:none"', 'fill="none" stroke="#c7b07a" stroke-width="3" transform="rotate(-60 110 150)"') + circ(110, 150, 16, '#ad6459') + shine(105, 144, 5) + circ(172, 150, 7, '#3b5562') + circ(80, 96, 7, '#3b5562') + T(110, 230, 'Atom', { s: 26 }) },
      { label: 'Molecule', c: C.rose, detail: 'Atoms joined together, like water, sugars and amino acids. Still not alive.',
        svg: circ(330, 150, 34, '#ad6459') + shine(320, 138, 10) + circ(290, 188, 20, '#a3bcc8') + circ(370, 188, 20, '#a3bcc8') + T(330, 240, 'Molecule', { s: 26 }) },
      { label: 'Cell', c: C.deep, detail: 'The smallest living unit: protoplasm inside a cell membrane, with organelles like mitochondria, ribosomes and lysosomes.',
        svg: circ(550, 150, 62, '#f2d6cc') + circ(560, 146, 22, '#9c8aa2') + shine(552, 138, 7) + ell(520, 180, 14, 7, '#d19a7f') + ell(590, 112, 12, 6, '#d19a7f') + circ(518, 124, 5, '#71836d') + circ(594, 186, 5, '#71836d') + T(550, 240, 'Cell', { s: 26 }) },
      { label: 'Tissue', c: C.sage, detail: 'A group of similar cells working together, like muscle or epithelium.',
        svg: [[740, 120], [790, 120], [715, 160], [765, 160], [815, 160], [740, 200], [790, 200]].map(([x, y]) => circ(x, y, 25, '#d9c2d6') + circ(x, y, 8, '#9c8aa2')).join('') + T(765, 255, 'Tissue', { s: 26 }) },
      { label: 'Organ', c: C.clay, detail: 'Different tissues working together for one job, like the stomach.',
        svg: sh('M200 360 C226 352 240 376 234 398 C228 420 256 434 276 422 C300 408 306 448 284 468 C254 494 196 488 180 456 C168 430 174 368 200 360 Z', '#e09c88') + shine(206, 380, 9, 6) + T(232, 520, 'Organ', { s: 26 }) },
      { label: 'System', c: C.blueD, detail: 'Organs working together, like the digestive system: mouth, esophagus, stomach, intestines.',
        svg: line('M450 340 L450 380', '#d48a76', 8) + sh('M446 378 C470 372 480 392 474 404 C468 416 488 424 496 414 C506 402 508 432 494 440 C472 452 444 444 440 424 C436 404 432 382 446 378 Z', '#e09c88') + line('M428 452 C412 462 418 480 440 478 C470 476 480 490 460 498 C440 506 420 500 418 488', '#e3a68c', 9) + T(452, 540, 'System', { s: 26 }) },
      { label: 'Organism', c: C.ink, detail: 'All the systems together make the whole living body.',
        svg: body({ dx: 610, dy: 330, k: .2 }) + T(660, 540, 'Organism', { s: 26 }) }
    ], { hint: 'Tap each level, from smallest to largest.' })
};
