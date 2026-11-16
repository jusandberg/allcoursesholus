// More pictures for Anatomy & Physiology, lessons 7 to 10
const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f, smooth, box, neuron } = require('./lib.js');
const L = (x, y, s, c, a, sz) => T(x, y, s, { s: sz || 22, c, a: a || 'start' });
const BONE = '#efe6cf', BD = '#d8c39a';
const bone = (d, w) => line(d, BD, w || 14);

// rib pair at level i (0 = top): ends at (x, y) near the sternum or floating
const RW = [70, 95, 115, 130, 140, 146, 148, 146, 140, 130, 112, 92];
const rib = (i, kind) => { const w = RW[i] + 40, yb = 130 + i * 24;
  let a, e; // start (near the front) and end (side)
  if (kind === 'true') { a = [16, 128 + i * 24]; e = [w, 170 + i * 24]; }
  else if (kind === 'false') { a = [34 + (i - 7) * 26, 300 + (i - 7) * 18]; e = [w, 180 + i * 24]; }
  else { a = [w * .55, yb + 70]; e = [w, yb + 20]; }
  const side = s => `M${250 + s * a[0]} ${a[1]} C${250 + s * (a[0] + w) / 1.6} ${a[1] - 18} ${250 + s * e[0]} ${e[1] - 50} ${250 + s * e[0]} ${e[1]}`;
  return line(side(-1) + ' ' + side(1), BD, 8) + (kind === 'false' ? line(`M${250 - a[0]} ${a[1]} L240 284 M${250 + a[0]} ${a[1]} L260 284`, '#bcd3dc', 5) : ''); };

// bone cells
const blast = (x, y) => ell(x, y, 26, 18, '#e6a99c') + circ(x, y, 7, '#9a5d50');
const cyte = (x, y) => ell(x, y, 22, 12, '#c9b19c') + line(`M${x - 22} ${y} L${x - 40} ${y - 8} M${x + 22} ${y} L${x + 40} ${y + 6} M${x} ${y - 12} L${x + 4} ${y - 30}`, '#c9b19c', 3);
const clast = (x, y) => ell(x, y, 48, 28, '#c4b0cc') + [-20, 0, 20].map(d => circ(x + d, y, 7, '#7a6681')).join('');

module.exports = {
  'ap7-2': fig('Three kinds of bone cell', '0 0 860 360',
    rect(0, 220, 860, 140, 0, BONE) + T(20, 350, 'Bone matrix', { s: 18, c: C.muted, a: 'start' }),
    [
      { label: 'Osteoblast', c: C.rose, detail: 'Bone-forming cells, from osteoprogenitor cells under the periosteum and in the endosteum. They lay down new matrix.', svg: blast(140, 196) + blast(200, 200) + arrow(170, 214, 170, 250, C.rose, { w: 4 }) + L(170, 150, 'Osteoblast: builds', C.rose, 'middle') },
      { label: 'Osteocyte', c: '#8a6a52', detail: 'When an osteoblast is surrounded by matrix it becomes an osteocyte, a mature bone cell.', svg: cyte(430, 290) + L(430, 200, 'Osteocyte: mature', '#8a6a52', 'middle') },
      { label: 'Osteoclast', c: C.plumD, detail: 'Comes from immune cells and reabsorbs (removes) bone during remodelling, such as after a break.', svg: sh('M640 220 C660 250 740 250 760 220 Z', '#f8f4ea') + clast(700, 200) + L(700, 150, 'Osteoclast: removes', C.plumD, 'middle') },
      { label: 'Stress builds bone', c: C.deep, detail: 'The more stress on a bone, the more bone is laid down: why exercise strengthens bones and bones in a cast weaken.', svg: arrow(430, 40, 430, 110, C.deep, { w: 6 }) + L(450, 70, 'Weight and exercise → more bone', C.deep) }
    ]),

  'ap7-3': fig('Two ways bone forms', '0 0 860 400',
    '',
    [
      { label: 'Intramembranous', c: C.plumD, detail: 'Replaces connective tissue membranes with bone. Only the cranial bones form this way.', svg: ell(200, 190, 150, 130, '#efe6cf') + line('M200 64 L200 316 M70 190 L330 190', '#d8c39a', 4) + L(200, 370, 'Intramembranous: skull', C.plumD, 'middle') },
      { label: 'Fontanelles', c: C.blueD, detail: 'The unfinished membranes between a baby’s skull bones: the soft spots.', svg: sh('M200 110 L230 140 L200 170 L170 140 Z', '#d7e6ec') + L(240, 100, 'Soft spot', C.blueD) },
      { label: 'Endochondral', c: C.goldD, detail: 'All other bones form inside a cartilage model (endo = inside, chondro = cartilage). Cartilage doesn’t turn into bone; it’s where bone develops.', svg: rect(520, 60, 70, 280, 35, '#d7e6ec') + rect(530, 130, 50, 140, 18, BONE) + rect(640, 60, 70, 280, 35, BONE) + ell(675, 200, 16, 90, '#f2d27a') + arrow(600, 200, 630, 200, C.goldD, { w: 4 }) + L(615, 370, 'Endochondral: all others', C.goldD, 'middle') },
      { label: 'Calcium hormones', c: C.rose, detail: 'Calcitonin (thyroid) stores calcium in bone; parathormone (parathyroids) releases it into the blood.', svg: L(430, 30, 'Calcitonin: into bone · Parathormone: out to blood', C.rose, 'middle', 18) }
    ]),

  'ap7-13': fig('The thoracic cage', '0 70 580 400',
    rect(240, 100, 20, 330, 8, '#e3dccd'),
    [
      { label: 'Sternum', c: C.goldD, detail: 'Shaped like a sword: the manubrium (handle), the body or gladiolus (blade) and the xiphoid process (tip).', svg: sh('M226 100 L274 100 L270 140 L230 140 Z', '#e6c98a') + rect(232, 144, 36, 140, 12, '#ebd08c') + sh('M240 288 L260 288 L250 320 Z', '#d3a84b') + L(440, 120, 'Manubrium', '#8a6f35', 'start', 18) + L(440, 220, 'Body', '#8a6f35', 'start', 18) + L(440, 316, 'Xiphoid', '#8a6f35', 'start', 18) + line('M436 114 L276 120 M436 214 L270 214 M436 310 L262 304', '#c9b27c', 1.5) },
      { label: 'True ribs: 1–7', c: C.deep, detail: 'The upper seven pairs attach directly to the sternum through their own costal cartilage.', svg: [0, 1, 2, 3, 4, 5, 6].map(i => rib(i, 'true')).join('').replace(/#d8c39a/g, '#8fa48a') + L(10, 200, 'True 1–7', C.deep, 'start') },
      { label: 'False ribs: 8–10', c: C.rose, detail: 'Pairs 8 to 10 attach indirectly, through the 7th rib’s cartilage.', svg: [7, 8, 9].map(i => rib(i, 'false')).join('').replace(/#d8c39a/g, '#d98f80') + L(10, 340, 'False 8–10', C.rose) },
      { label: 'Floating ribs: 11–12', c: C.blueD, detail: 'Pairs 11 and 12 don’t attach in front at all.', svg: [10, 11].map(i => rib(i, 'float')).join('').replace(/#d8c39a/g, '#8aa3b0') + L(10, 420, 'Floating 11–12', C.blueD) }
    ], { hint: '12 pairs of ribs: 7 true, 3 false, 2 floating.' }),

  'ap7-14': fig('Bones of the arm and hand', '0 0 880 340',
    '',
    [
      { label: 'Clavicle and scapula', c: C.plumD, detail: 'The shoulder (pectoral) girdle. The scapula’s glenoid fossa receives the head of the humerus.', svg: line('M40 60 C80 40 120 70 150 60', '#c4b0cc', 14) + sh('M100 80 L190 70 L170 180 Z', '#d9c9de') + L(40, 30, 'Clavicle, scapula', C.plumD) },
      { label: 'Humerus', c: C.goldD, detail: 'The largest, longest bone of the upper arm.', svg: bone('M190 110 L400 120', 18) + circ(186, 110, 18, BONE) + L(300, 90, 'Humerus', '#8a6f35', 'middle') },
      { label: 'Ulna and radius', c: C.rose, detail: 'The ulna is the longer, medial forearm bone; its olecranon is the elbow. The radius is the shorter, lateral one (thumb side).', svg: bone('M400 110 L620 120', 12) + bone('M410 134 L610 140', 10) + circ(398, 112, 12, '#e6c98a') + L(510, 90, 'Ulna (medial)', C.rose, 'middle', 18) + L(510, 172, 'Radius (lateral)', C.rose, 'middle', 18) + L(398, 200, 'olecranon = elbow', C.muted, 'middle', 16) },
      { label: '8 carpals', c: C.blueD, detail: 'The wrist: 8 carpals in two rows.', svg: Array.from({ length: 8 }, (_, i) => circ(640 + (i % 2) * 22, 100 + Math.floor(i / 2) * 20, 10, '#a3bcc8')).join('') + L(650, 270, '8 carpals', C.blueD, 'middle', 18) },
      { label: '5 metacarpals, 14 phalanges', c: C.deep, detail: 'The palm has 5 metacarpals. Each finger has 3 phalanges; the thumb has 2.', svg: [0, 1, 2, 3, 4].map(i => bone(`M690 ${92 + i * 18} L760 ${88 + i * 20}`, 7) + bone(`M766 ${88 + i * 20} L${i === 0 ? 800 : 850} ${84 + i * 22}`, 6)).join('') + L(780, 270, 'Hand: 5 + 14', C.deep, 'middle', 18) }
    ]),

  'ap7-15': fig('Hip and leg bones', '0 0 520 900',
    '',
    [
      { label: 'Hip bone: ilium, ischium, pubis', c: C.goldD, detail: 'Each hip (coxal) bone is three fused parts: the ilium (largest, with the iliac crest), the ischium (you sit on it) and the pubis. They meet at the pubic symphysis.', svg: sh('M100 60 C160 30 230 60 250 120 L250 200 C220 230 180 240 150 220 C110 190 80 120 100 60 Z', '#e6c98a') + sh('M420 60 C360 30 290 60 270 120 L270 200 C300 230 340 240 370 220 C410 190 440 120 420 60 Z', '#e6c98a') + rect(244, 120, 32, 70, 10, '#d8c39a') + L(20, 40, 'Ilium', '#8a6f35') + L(20, 230, 'Ischium, pubis', '#8a6f35') },
      { label: 'Acetabulum', c: C.rose, detail: 'The socket in the hip bone for the head of the femur.', svg: ring(170, 200, 22, 22, C.rose, 5) + L(20, 280, 'Acetabulum (socket)', C.rose, 'start', 18) },
      { label: 'Femur and patella', c: C.deep, detail: 'The femur is the largest, heaviest bone. The patella (kneecap) is the largest sesamoid bone.', svg: circ(178, 200, 18, BONE) + bone('M182 210 L210 520', 22) + circ(214, 540, 16, '#e6c98a') + L(250, 380, 'Femur', C.deep) + L(250, 546, 'Patella', C.deep) },
      { label: 'Tibia and fibula', c: C.blueD, detail: 'The tibia (shinbone) is the larger lower-leg bone; the fibula is the slender lateral one.', svg: bone('M212 560 L210 800', 18) + bone('M180 570 L184 790', 9) + L(250, 690, 'Tibia', C.blueD) + L(30, 690, 'Fibula', C.blueD) },
      { label: 'Ankle and foot', c: C.plumD, detail: '7 tarsals (the calcaneus, the heel, is largest), 5 metatarsals and 14 phalanges. Arches: two longitudinal, one transverse.', svg: ell(196, 830, 30, 20, '#c4b0cc') + line('M210 820 C260 800 320 820 380 850', '#d9c9de', 14) + L(250, 880, '7 tarsals, 5 metatarsals, 14 phalanges', C.plumD, 'start', 18) }
    ], { hint: 'One side shown for the leg.' }),

  'ap8-2': fig('Fibrous joints (immovable)', '0 0 880 340',
    '',
    [
      { label: 'Suture', c: C.goldD, detail: 'Bones joined by a thin layer of fibrous tissue, as in the skull.', svg: rect(40, 80, 220, 160, 20, BONE) + line('M150 80 L140 110 L160 130 L140 160 L160 190 L140 220 L150 240', '#a68a4c', 5) + L(150, 290, 'Suture: skull', C.goldD, 'middle') },
      { label: 'Syndesmosis', c: C.blueD, detail: 'Bones connected by a ligament between them, like the radius and ulna or tibia and fibula.', svg: rect(330, 70, 40, 200, 18, BONE) + rect(450, 70, 40, 200, 18, BONE) + Array.from({ length: 6 }, (_, i) => line(`M370 ${90 + i * 30} L450 ${100 + i * 30}`, '#8aa3b0', 4)).join('') + L(410, 310, 'Syndesmosis: ligament', C.blueD, 'middle') },
      { label: 'Gomphosis', c: C.rose, detail: 'A cone-shaped peg in a socket: a tooth in its alveolus, held by the periodontal ligament.', svg: rect(580, 140, 260, 140, 0, BONE) + sh('M660 60 C660 20 760 20 760 60 L748 240 C744 260 676 260 672 240 Z', '#fbf8f0') + outline('M666 140 L676 244 C680 268 740 268 744 244 L754 140', '#e6a99c', 4) + L(710, 310, 'Gomphosis: tooth', C.rose, 'middle') }
    ]),

  'ap8-3': fig('Cartilage joints (slightly movable)', '0 0 820 340',
    '',
    [
      { label: 'Symphysis', c: C.goldD, detail: 'Bones joined by a disk of fibrocartilage. The pubic symphysis gives a little during delivery.', svg: rect(60, 100, 140, 120, 20, BONE) + rect(230, 100, 140, 120, 20, BONE) + rect(200, 110, 30, 100, 8, '#e6d9b0') + Array.from({ length: 4 }, (_, i) => line(`M204 ${124 + i * 22} L226 ${124 + i * 22}`, '#c9b27c', 3)).join('') + L(215, 290, 'Symphysis: fibrocartilage', C.goldD, 'middle') },
      { label: 'Synchondrosis', c: C.blueD, detail: 'Two bony surfaces joined by hyaline cartilage, later replaced by bone: like the growth plate of a long bone, or rib-to-sternum cartilage.', svg: rect(480, 60, 120, 90, 40, BONE) + rect(480, 166, 120, 120, 20, BONE) + rect(480, 150, 120, 16, 4, '#bcd3dc') + L(540, 316, 'Synchondrosis: hyaline', C.blueD, 'middle') }
    ]),

  'ap8-6': fig('Special movements', '0 0 880 420',
    '',
    [
      { label: 'Supination / pronation', c: C.goldD, detail: 'Supination turns the palm up (forearm bones parallel). Pronation turns it down (bones crossed).', svg: line('M60 120 L200 120 M60 140 L200 140', BD, 8) + T(130, 100, 'palm up', { s: 18, c: C.goldD }) + line('M60 220 L200 260 M60 260 L200 220', BD, 8) + T(130, 300, 'palm down', { s: 18, c: C.goldD }) + L(130, 360, 'Supination / pronation', C.goldD, 'middle', 20) },
      { label: 'Dorsiflexion / plantar flexion', c: C.rose, detail: 'Dorsiflexion raises the foot at the ankle; plantar flexion pushes it down.', svg: line('M330 80 L330 220 L420 220', '#e6d6c4', 18) + arrow(430, 210, 420, 160, C.rose, { w: 4 }) + arrow(430, 230, 420, 280, C.rose, { w: 4 }) + L(380, 360, 'Dorsi / plantar flexion', C.rose, 'middle', 20) },
      { label: 'Inversion / eversion', c: C.blueD, detail: 'Inversion turns the sole inward; eversion turns it outward.', svg: ell(600, 200, 30, 70, '#e6d6c4') + arrow(570, 150, 530, 130, C.blueD, { w: 4 }) + arrow(630, 150, 670, 130, C.blueD, { w: 4 }) + L(530, 110, 'in', C.blueD, 'middle', 18) + L(670, 110, 'out', C.blueD, 'middle', 18) + L(600, 360, 'Inversion / eversion', C.blueD, 'middle', 20) },
      { label: 'Opposition', c: C.deep, detail: 'Brings the thumb tip to the fingertips. Unique to primates. Reposition returns the digits.', svg: circ(800, 200, 40, '#f0d0bc') + line('M780 170 C770 130 790 110 812 140', '#e6c1ab', 12) + line('M800 170 L800 110 M820 172 L828 116', '#e6c1ab', 10) + L(800, 360, 'Opposition', C.deep, 'middle', 20) },
      { label: 'Protraction, elevation', c: C.plumD, detail: 'Protraction moves a part forward, retraction back (like the jaw). Elevation raises and depression lowers (like shrugging).', svg: L(440, 400, 'Also: protraction / retraction, elevation / depression', C.plumD, 'middle', 18) }
    ]),

  'ap8-9': fig('Bursae: cushions against friction', '0 0 760 420',
    rect(240, 0, 120, 420, 50, BONE) + ell(400, 200, 30, 60, '#e6c98a') + line('M380 0 C420 80 440 140 420 260 C410 320 380 380 360 420', '#c9b27c', 14),
    [
      { label: 'Subcutaneous bursa', c: C.blueD, detail: 'Under the skin over a bony bump, like between the kneecap and the skin.', svg: ell(462, 200, 22, 46, '#cfe0e8') + line('M492 60 C510 140 510 260 492 340', '#efc0b0', 10) + L(520, 210, 'Under the skin', C.blueD) },
      { label: 'Subtendinous bursa', c: C.goldD, detail: 'Where a tendon passes over a bone or another tendon, as in the shoulder.', svg: ell(372, 300, 18, 34, '#f2e2b6') + L(520, 320, 'Under a tendon', C.goldD) },
      { label: 'Subfascial bursa', c: C.rose, detail: 'Between muscles.', svg: ell(170, 200, 18, 40, '#f6dcd4') + ell(120, 200, 40, 90, '#d98f80') + L(40, 340, 'Between muscles', C.rose) },
      { label: 'Synovial lining', c: C.plumD, detail: 'Bursae are closed sacs lined with synovial membrane, found wherever friction could happen.', svg: L(380, 410, 'Closed sacs lined with synovial membrane', C.plumD, 'middle', 18) }
    ]),

  'ap9-4': fig('A motor unit', '0 0 860 380',
    Array.from({ length: 8 }, (_, i) => rect(460, 40 + i * 40, 360, 30, 15, i % 3 === 1 ? '#ecd0c8' : '#d98f80')).join(''),
    [
      { label: 'One motor neuron', c: C.plumD, detail: 'A motor unit is one motor neuron and all the muscle fibres it supplies.', svg: circ(80, 190, 34, '#b49ac0') + line('M114 190 L330 190', '#9c8aa2', 7) + L(80, 260, 'Motor neuron', C.plumD, 'middle') },
      { label: 'Its muscle fibres', c: C.rose, detail: 'All the fibres in one unit contract together.', svg: [0, 2, 3, 5, 6].map(i => line(`M330 190 C380 190 400 ${55 + i * 40} 470 ${55 + i * 40}`, '#9c8aa2', 4) + circ(470, 55 + i * 40, 7, '#d3a84b')).join('') + L(640, 370, 'Fibres it supplies', C.rose, 'middle') },
      { label: 'Fine vs gross movement', c: C.goldD, detail: 'Fine movements (eye muscles) have about 10 fibres per unit; gross movements 200 or more. The average is about 150.', svg: L(40, 50, 'Eye: ~10 fibres · Leg: 200+', C.goldD) },
      { label: 'Four properties', c: C.deep, detail: 'Excitability, conductivity, contractility and elasticity.', svg: L(40, 350, 'Excitable, conductive, contractile, elastic', C.deep, 'start', 18) }
    ]),

  'ap9-7': fig('Four ways muscle gets ATP', '0 0 860 360',
    circ(430, 180, 60, '#d3a84b') + T(430, 190, 'ATP', { s: 30, c: '#fff', halo: false }),
    [
      { label: 'Phosphocreatine', c: C.rose, detail: 'Only in muscle: a fast supply. Phosphocreatine + ADP ↔ creatine + ATP.', svg: box(150, 70, 230, 60, '#f4ddd6', 'Phosphocreatine: fast', '#8a3f33', 20) + arrow(264, 90, 372, 150, C.rose, { w: 4 }) },
      { label: 'Aerobic glucose', c: C.deep, detail: 'Aerobic respiration of glucose gives the most ATP (38, per the textbook).', svg: box(710, 70, 230, 60, '#e4ecdf', 'Glucose + O₂: 38', C.deep, 20) + arrow(596, 90, 488, 150, C.deep, { w: 4 }) },
      { label: 'Anaerobic glucose', c: C.goldD, detail: 'When oxygen runs short, pyruvic acid becomes lactic acid, giving only 2 ATP.', svg: box(150, 290, 230, 60, '#f5ecd6', 'No O₂: 2 + lactic acid', '#7a5f22', 18) + arrow(264, 270, 372, 210, C.goldD, { w: 4 }) },
      { label: 'Fatty acids', c: C.blueD, detail: 'Free fatty acids from the blood.', svg: box(710, 290, 230, 60, '#e3edf1', 'Fatty acids from blood', C.blueD, 20) + arrow(596, 270, 488, 210, C.blueD, { w: 4 }) },
      { label: 'Heat', c: C.muted, detail: 'Heat is a by-product of every contraction.', svg: L(430, 290, '+ heat', C.rose, 'middle') }
    ]),

  'ap9-9': fig('Isotonic vs isometric', '0 0 820 380',
    '',
    [
      { label: 'Isotonic', c: C.rose, detail: 'The muscle shortens and thickens while tension stays the same, as when lifting a weight.', svg: line('M100 300 L200 300 L260 160', '#e6d6c4', 18) + ell(160, 270, 50, 22, '#d98f80') + rect(240, 120, 50, 40, 8, '#8a958c') + arrow(300, 200, 300, 130, C.rose, { w: 4 }) + L(200, 350, 'Isotonic: shortens, lifts', C.rose, 'middle') },
      { label: 'Isometric', c: C.blueD, detail: 'The muscle stays the same length while tension increases, as when pushing against a wall.', svg: rect(700, 60, 40, 280, 8, '#d9d2c6') + line('M520 200 L620 200 L690 200', '#e6d6c4', 18) + ell(580, 180, 56, 20, '#d98f80') + line('M520 260 L690 260', C.blueD, 2, 'stroke-dasharray="6 6"') + L(610, 350, 'Isometric: same length', C.blueD, 'middle') }
    ]),

  'ap9-11': fig('How muscles work together', '0 0 760 420',
    line('M180 60 L180 300 L420 300', '#efe6cf', 22),
    [
      { label: 'Prime mover (agonist)', c: C.rose, detail: 'Does the movement. Bending the elbow: the biceps.', svg: sh('M196 90 C240 120 250 220 214 290 C230 220 220 130 196 90 Z', '#d98f80') + ell(222, 190, 28, 70, '#d98f80') + L(270, 170, 'Biceps: prime mover', C.rose) },
      { label: 'Antagonist', c: C.blueD, detail: 'Does the opposite and must relax: the triceps.', svg: ell(150, 190, 22, 80, '#a3bcc8') + L(20, 120, 'Triceps:', C.blueD) + L(20, 146, 'antagonist', C.blueD) },
      { label: 'Synergist', c: C.goldD, detail: 'Assists the prime mover.', svg: ell(250, 300, 40, 16, '#e6c98a') + L(270, 350, 'Synergist: helps', C.goldD) },
      { label: 'Origin and insertion', c: C.deep, detail: 'The origin is the fixed, usually proximal attachment; the insertion is the movable one where the effect is seen.', svg: circ(196, 84, 9, '#4b5d49') + circ(222, 300, 9, '#4b5d49') + L(214, 50, 'Origin (fixed)', C.deep) + L(250, 410, 'Insertion (moves)', C.deep) }
    ]),

  'ap10-3': fig('Neuroglia: the support cells', '0 0 880 360',
    '',
    [
      { label: 'Astrocytes', c: C.goldD, detail: 'Star-shaped. Support neurons, link them to blood vessels and help form the blood-brain barrier.', svg: circ(110, 150, 22, '#e6c98a') + Array.from({ length: 7 }, (_, i) => { const a = i / 7 * 2 * Math.PI; return line(`M110 150 L${f(110 + 60 * Math.cos(a))} ${f(150 + 60 * Math.sin(a))}`, '#e6c98a', 5); }).join('') + line('M60 250 L170 250', '#c8524a', 10) + L(110, 300, 'Astrocyte', C.goldD, 'middle') },
      { label: 'Oligodendroglia', c: C.plumD, detail: 'Make the myelin sheath in the CNS.', svg: circ(290, 150, 20, '#c4b0cc') + [[-40, -40], [40, -40], [0, 50]].map(([a, b]) => line(`M290 150 L${290 + a} ${150 + b}`, '#c4b0cc', 4) + rect(290 + a - 18, 150 + b - 8, 36, 16, 8, '#ebd08c')).join('') + L(290, 300, 'Oligodendroglia', C.plumD, 'middle') },
      { label: 'Microglia', c: C.rose, detail: 'Engulf microbes and debris.', svg: circ(460, 150, 18, '#d9a092') + line('M460 150 L430 110 M460 150 L500 120 M460 150 L440 196', '#d9a092', 4) + circ(500, 180, 8, '#8a958c') + L(460, 300, 'Microglia', C.rose, 'middle') },
      { label: 'Ependymal cells', c: C.blueD, detail: 'Line the brain’s ventricles and make or move cerebrospinal fluid.', svg: Array.from({ length: 4 }, (_, i) => rect(570 + i * 30, 140, 28, 40, 6, '#a3bcc8') + line(`M${584 + i * 30} 140 L${584 + i * 30} 120`, '#6f91a2', 3)).join('') + rect(570, 182, 118, 30, 6, '#e3edf1') + L(630, 300, 'Ependymal', C.blueD, 'middle') },
      { label: 'Schwann cells', c: C.deep, detail: 'Make the myelin sheath in the PNS.', svg: line('M740 150 L860 150', '#9c8aa2', 6) + [760, 820].map(x => rect(x - 24, 136, 48, 28, 14, '#ebd08c')).join('') + L(800, 300, 'Schwann', C.deep, 'middle') }
    ], { hint: 'Over 60% of brain cells are neuroglia. They support neurons but don’t carry impulses.' }),

  'ap10-5': fig('Neurons by structure', '0 0 880 360',
    '',
    [
      { label: 'Multipolar', c: C.plumD, detail: 'Several dendrites and one axon. Most neurons in the brain and spinal cord, including motor and association neurons.', svg: circ(150, 150, 26, '#b49ac0') + line('M150 150 L100 100 M150 150 L110 190 M150 150 L130 90 M150 150 L180 100 M176 150 L270 150', '#9c8aa2', 6) + L(160, 300, 'Multipolar', C.plumD, 'middle') + L(160, 326, 'brain, spinal cord', C.muted, 'middle', 16) },
      { label: 'Bipolar', c: C.blueD, detail: 'One dendrite and one axon. Only in the retina, inner ear and olfactory area.', svg: line('M330 150 L404 150 M456 150 L540 150', '#9c8aa2', 6) + circ(430, 150, 26, '#a3bcc8') + L(440, 300, 'Bipolar', C.blueD, 'middle') + L(440, 326, 'retina, ear, nose', C.muted, 'middle', 16) },
      { label: 'Unipolar', c: C.goldD, detail: 'One process that splits into an axon-like and a dendrite-like branch. Most sensory neurons.', svg: circ(720, 90, 26, '#e6c98a') + line('M720 116 L720 160 M620 160 L820 160', '#9c8aa2', 6) + L(720, 300, 'Unipolar', C.goldD, 'middle') + L(720, 326, 'sensory', C.muted, 'middle', 16) }
    ]),

  'ap10-10': fig('Gray and white, inside and out', '0 0 860 380',
    '',
    [
      { label: 'White matter', c: C.goldD, detail: 'Myelinated axons; the myelin looks white. Inside the CNS, a bundle of fibres is a tract.', svg: rect(60, 80, 260, 70, 35, '#f4efe1') + Array.from({ length: 5 }, (_, i) => rect(76 + i * 48, 100, 40, 30, 15, '#ebd08c')).join('') + L(190, 190, 'White: myelinated fibres', C.goldD, 'middle', 20) },
      { label: 'Gray matter', c: C.plumD, detail: 'Cell bodies and dendrites plus unmyelinated axons. The brain’s gray surface is the cortex; in the cord the gray areas are horns.', svg: rect(60, 240, 260, 90, 30, '#ddcfe0') + Array.from({ length: 6 }, (_, i) => circ(90 + i * 42, 285, 14, '#9c8aa2')).join('') + L(190, 360, 'Gray: cell bodies', C.plumD, 'middle', 20) },
      { label: 'Outside vs inside the CNS', c: C.deep, detail: 'Outside the CNS: a bundle of fibres is a nerve, a cluster of cell bodies is a ganglion. Inside: tract and nucleus.', svg: box(600, 110, 400, 110, '#f7f4ee', ['Outside CNS: nerve, ganglion', 'Inside CNS: tract, nucleus'], C.deep, 22) },
      { label: 'Ascending and descending', c: C.blueD, detail: 'Ascending tracts carry sensation up; descending tracts carry motor signals down.', svg: arrow(560, 330, 560, 230, C.blueD, { w: 5 }) + arrow(640, 230, 640, 330, C.rose, { w: 5 }) + L(540, 280, 'up: sensory', C.blueD, 'end') + L(660, 300, 'down: motor', C.rose) }
    ])
};
