// More pictures for Anatomy & Physiology, lessons 15 to 19
const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f, smooth, box, body, side } = require('./lib.js');
const L = (x, y, s, c, a, sz) => T(x, y, s, { s: sz || 22, c, a: a || 'start' });
const VB = '-60 30 620 950';
const lab = (x, y, s, c, a) => T(x, y, s, { s: 26, c, a: a || 'start' });

// colon route for the large intestine
const COLON = 'M200 470 L196 360 C196 340 210 330 230 330 L300 330 C318 330 326 344 326 360 L326 440 C326 470 300 486 280 476 C266 470 262 490 258 506';

module.exports = {
  'ap15-5': fig('Where lymph returns to the blood', VB,
    body(),
    [
      { label: 'Right lymphatic duct', c: C.blueD, detail: 'Drains the upper right side (right arm, right side of the head and chest) into the right subclavian vein.', svg: sh('M226 40 L180 40 L120 200 L100 320 L150 330 L200 260 L250 250 L250 40 Z', '#a3bcc8', 'opacity:.5') + circ(222, 200, 9, '#3b5562') + lab(-40, 120, 'Right duct', C.blueD) },
      { label: 'Thoracic (left) duct', c: C.deep, detail: 'The main collecting duct. It drains everything else and empties into the left subclavian vein.', svg: sh('M250 40 L330 40 L390 220 L410 540 L300 980 L180 980 L120 560 L150 330 L200 260 L250 250 Z', '#a3b795', 'opacity:.35') + line('M250 470 L254 300 C256 240 262 210 278 200', '#4b5d49', 6) + circ(278, 200, 9, '#4b5d49') + lab(420, 360, 'Thoracic duct', C.deep) },
      { label: 'Six trunks', c: C.goldD, detail: 'Lymph vessels unite into six trunks: lumbar, intestinal, bronchomediastinal, intercostal, subclavian and jugular.', svg: [[232, 160], [268, 160], [200, 210], [300, 210], [250, 280], [250, 440]].map(([x, y]) => circ(x, y, 7, '#c9a65a')).join('') + lab(420, 500, '6 trunks feed in', C.goldD) },
      { label: 'Into the subclavian veins', c: C.red, detail: 'Both ducts empty into the subclavian veins, returning lymph to the blood.', svg: line('M150 200 L222 200 M278 200 L350 200', '#5f7ba3', 8) + lab(380, 190, 'Subclavian veins', C.red) }
    ], { hint: 'The shaded areas show what each duct drains.' }),

  'ap15-8': fig('B cells and T cells', '0 0 860 380',
    '',
    [
      { label: 'B cells', c: C.blueD, detail: 'Make antibodies: humoral immunity, which works against bacteria and viruses circulating in body fluids.', svg: circ(150, 160, 50, '#cfdde4') + circ(150, 160, 30, '#6f91a2') + [[220, 110], [240, 160], [220, 210]].map(([x, y]) => line(`M${x} ${y + 12} L${x} ${y} L${x - 8} ${y - 10} M${x} ${y} L${x + 8} ${y - 10}`, '#3b5562', 4)).join('') + L(160, 270, 'B cell: antibodies', C.blueD, 'middle') + L(160, 296, 'humoral immunity', C.muted, 'middle', 17) },
      { label: 'Plasma cells', c: '#5f8798', detail: 'B cells that enter tissue become plasma cells, which make huge amounts of one antibody.', svg: arrow(260, 160, 300, 160, C.light, { w: 4 }) + ell(350, 160, 46, 36, '#a3bcc8') + Array.from({ length: 5 }, (_, i) => line(`M${400 + i * 8} ${130 + i * 14} l10 -8 M${400 + i * 8} ${130 + i * 14} l10 8`, '#3b5562', 3)).join('') + L(360, 270, 'Plasma cell', '#5f8798', 'middle') },
      { label: 'T cells', c: C.rose, detail: 'From the thymus. Give cellular immunity: they attack fungi, parasites, viruses inside cells, cancer cells and transplanted tissue directly.', svg: circ(640, 160, 50, '#f4ddd6') + circ(640, 160, 30, '#c86d56') + circ(740, 170, 40, '#e3d3c0') + line('M690 160 L708 164', C.rose, 6) + L(660, 270, 'T cell: attacks cells', C.rose, 'middle') + L(660, 296, 'cellular immunity', C.muted, 'middle', 17) }
    ]),

  'ap15-10': fig('Four kinds of immunity', '0 0 820 400',
    T(300, 40, 'Natural', { s: 24, c: C.ink }) + T(600, 40, 'Artificial', { s: 24, c: C.ink }) + T(120, 140, 'Active', { s: 24, c: C.deep, a: 'end' }) + T(120, 300, 'Passive', { s: 24, c: C.blueD, a: 'end' }) + T(120, 166, 'your own antibodies', { s: 14, c: C.muted, a: 'end' }) + T(120, 326, 'someone else’s', { s: 14, c: C.muted, a: 'end' }),
    [
      { label: 'Natural active', c: C.deep, detail: 'You get the infection and your own B cells make antibodies and memory.', svg: box(300, 150, 260, 110, '#e4ecdf', ['Getting the infection'], C.deep, 20) },
      { label: 'Artificial active', c: C.deep, detail: 'A vaccine with killed or weakened pathogens builds memory without the full illness.', svg: box(600, 150, 260, 110, '#e4ecdf', ['A vaccine'], C.deep, 20) },
      { label: 'Natural passive', c: C.blueD, detail: 'Antibodies cross the placenta to the fetus and last months.', svg: box(300, 310, 260, 110, '#e3edf1', ['Mother to baby', 'via placenta'], C.blueD, 20) },
      { label: 'Artificial passive', c: C.blueD, detail: 'Gamma globulin, immune serum or antivenom: immediate, but lasts only 2 to 3 weeks.', svg: box(600, 310, 260, 110, '#e3edf1', ['Gamma globulin,', 'antivenom'], C.blueD, 20) }
    ], { hint: 'Active lasts because you make your own antibodies and memory.' }),

  'ap16-2': fig('The alimentary canal and its helpers', VB,
    body(),
    [
      { label: 'The tube: mouth to anus', c: C.rose, detail: 'About 30 feet long: mouth, oropharynx, esophagus, stomach, small intestine and large intestine. Food passes through all of these.', svg: line('M250 112 L250 280', '#e3a68c', 9) + sh('M250 280 C290 270 320 290 312 320 C304 344 270 340 254 330 Z', '#e09c88') + line('M230 380 C280 370 300 400 260 410 C220 420 210 440 260 450 C300 460 300 476 250 486', '#e3a68c', 12) + line(COLON, '#d9a08a', 10) + lab(420, 300, 'Food passes', C.rose) + lab(420, 330, 'through', C.rose) },
      { label: 'Teeth, tongue, salivary glands', c: C.goldD, detail: 'Accessory structures in the mouth that help break food down.', svg: ell(218, 124, 10, 8, '#e6c98a') + ell(282, 124, 10, 8, '#e6c98a') + ell(250, 118, 14, 6, '#d98f80') + lab(330, 110, 'Mouth helpers', C.goldD) },
      { label: 'Liver and gallbladder', c: '#9a5d50', detail: 'Make and store bile, which helps digest fat. Food doesn’t pass through them.', svg: sh('M182 300 C190 276 240 276 248 296 C240 318 196 330 182 300 Z', '#9a5d50') + ell(220, 320, 9, 12, '#7f9a6f') + lab(-50, 290, 'Liver,', '#9a5d50') + lab(-50, 320, 'gallbladder', '#9a5d50') },
      { label: 'Pancreas', c: C.goldD, detail: 'Sends digestive juice into the small intestine.', svg: sh('M226 346 C250 334 290 336 312 346 C298 360 258 360 226 358 Z', '#dcb25a') + lab(420, 380, 'Pancreas', C.goldD) }
    ], { hint: 'Accessory organs help digestion without food passing through them.' }),

  'ap16-5': fig('The salivary glands', '520 20 300 230',
    side({ arm: false }).replace(/<path d="M612 548[\s\S]*?<\/path>/, '').replace(/<path d="M614 932[\s\S]*?<\/path>/, ''),
    [
      { label: 'Parotid', c: C.rose, detail: 'The largest, in front of the ear. Mumps is a viral infection that especially affects the parotids.', svg: ell(626, 128, 18, 26, '#e6a99c') + L(604, 70, 'Parotid', C.rose, 'end', 14) },
      { label: 'Submandibular', c: C.goldD, detail: 'Under the lower jaw.', svg: ell(660, 148, 16, 10, '#e6c98a') + L(690, 180, 'Submandibular', C.goldD, 'start', 14) },
      { label: 'Sublingual', c: C.plumD, detail: 'Under the tongue.', svg: ell(682, 132, 10, 6, '#c4b0cc') + L(704, 132, 'Sublingual', C.plumD, 'start', 14) },
      { label: 'What saliva holds', c: C.blueD, detail: '99.5% water, plus amylase (starts breaking down starch), chloride (activates amylase), buffers, mucin (lubricates) and lysozyme (kills bacteria).', svg: L(530, 238, 'Water, amylase, mucin, lysozyme', C.blueD, 'start', 13) }
    ]),

  'ap16-10': fig('The liver and gallbladder', '0 0 820 420',
    sh('M80 120 C140 60 520 50 620 110 C680 150 640 220 560 250 C460 290 300 300 200 270 C100 240 40 180 80 120 Z', '#a8665a') + line('M380 70 C370 150 360 220 350 285', '#8a4a40', 3) + T(220, 170, 'Right lobe', { s: 22, c: '#fff', halo: false }) + T(500, 150, 'Left lobe', { s: 20, c: '#fff', halo: false }),
    [
      { label: 'Gallbladder', c: C.deep, detail: 'A pear-shaped sac under the liver that stores and concentrates bile. Gallstones form when cholesterol settles out of the bile.', svg: sh('M290 260 C300 240 340 240 344 270 C346 310 320 330 300 320 C286 312 284 280 290 260 Z', '#8fa970') + shine(306, 270, 6, 4) + L(150, 340, 'Gallbladder', C.deep) },
      { label: 'Common bile duct', c: C.goldD, detail: 'Carries bile into the duodenum, where bile salts emulsify fats.', svg: line('M330 250 L360 300 L370 380 M400 250 L380 300', '#c9a65a', 7) + line('M300 380 C360 400 440 400 520 380', '#e3a68c', 22) + L(540, 390, 'Duodenum', C.goldD) },
      { label: 'What the liver does', c: '#9a5d50', detail: 'Makes clotting proteins and heparin; Kupffer cells eat bacteria and worn-out blood cells; detoxifies and turns ammonia into urea; stores glycogen, iron, copper and vitamins A, D, E and K; makes bile salts.', svg: L(640, 40, 'About 4 lb, 6 main jobs', '#9a5d50', 'end') }
    ]),

  'ap16-12': fig('Parts of the large intestine', '80 300 380 260',
    line(COLON, '#d9a08a', 22) + Array.from({ length: 10 }, (_, i) => circ(200 + i * 13, 330, 3, '#c98a74')).join(''),
    [
      { label: 'Cecum and appendix', c: C.deep, detail: 'A pouch at the start, with the appendix attached.', svg: ell(198, 478, 18, 14, '#e3a68c') + line('M196 490 C190 504 196 516 204 518', '#8fa48a', 6) + L(176, 520, 'Cecum', C.deep, 'end', 15) },
      { label: 'Ascending colon', c: C.goldD, detail: 'Runs up the right side of the abdomen.', svg: line('M200 470 L196 360', '#c9a65a', 26) + L(176, 410, 'Ascending', C.goldD, 'end', 15) },
      { label: 'Transverse colon', c: C.rose, detail: 'Crosses the abdomen. The colon is made of pouches called haustrae.', svg: line('M200 340 L320 340', '#c86d56', 26) + L(260, 318, 'Transverse', C.rose, 'middle', 15) },
      { label: 'Descending and sigmoid', c: C.blueD, detail: 'Runs down the left side, then curves as the S-shaped sigmoid colon.', svg: line('M326 360 L326 440 C326 470 300 486 280 476', '#6f91a2', 26) + L(346, 420, 'Descending,', C.blueD, 'start', 15) + L(346, 440, 'sigmoid', C.blueD, 'start', 15) },
      { label: 'Rectum and anal canal', c: C.plumD, detail: 'Mass peristalsis drives contents into the rectum and triggers the defecation reflex. The anal canal has internal and external sphincters.', svg: line('M280 476 C266 470 262 490 258 506', '#9c8aa2', 22) + L(270, 540, 'Rectum, anus', C.plumD, 'middle', 15) }
    ], { hint: 'About 5 feet long. It absorbs water and forms feces; gut bacteria make vitamin K, biotin and B5.' }),

  'ap17-2': fig('The upper airway', '430 0 390 330',
    side({ arm: false }),
    [
      { label: 'Nose and conchae', c: C.rose, detail: 'Air enters the nostrils; coarse hairs filter it. Three shelves (conchae) swirl the air past a lining that warms, moistens and filters it. Smell receptors sit at the top.', svg: [0, 1, 2].map(i => line(`M${662 + i * 4} ${82 + i * 12} C${676} ${78 + i * 12} ${688} ${84 + i * 12} ${694} ${90 + i * 12}`, '#d98f80', 5)).join('') + L(720, 70, 'Nose', C.rose) },
      { label: 'Pharynx', c: C.goldD, detail: 'The throat, shared by air and food.', svg: line('M640 100 C632 120 630 140 632 160', '#e6c98a', 12) + L(560, 120, 'Pharynx', C.goldD, 'end') },
      { label: 'Larynx', c: C.plumD, detail: 'The voice box, connecting the pharynx with the trachea. The epiglottis covers it when you swallow.', svg: rect(640, 160, 22, 30, 8, '#c4b0cc') + L(720, 178, 'Larynx', C.plumD) },
      { label: 'Trachea', c: C.blueD, detail: 'The windpipe, held open by cartilage rings, leading down to the bronchi.', svg: rect(642, 190, 18, 120, 8, '#cfdde4') + Array.from({ length: 6 }, (_, i) => line(`M642 ${200 + i * 18} L660 ${200 + i * 18}`, '#8aa3b0', 3)).join('') + L(720, 260, 'Trachea', C.blueD) },
      { label: 'Esophagus behind', c: C.muted, detail: 'The esophagus runs behind the trachea, carrying food.', svg: rect(616, 170, 18, 140, 8, '#efd6cc') + L(560, 260, 'Esophagus', C.muted, 'end') }
    ], { hint: 'Side view, face to the right.' }),

  'ap17-4': fig('Cartilages of the larynx', '0 0 720 460',
    rect(300, 330, 120, 130, 10, '#cfdde4') + Array.from({ length: 4 }, (_, i) => line(`M300 ${350 + i * 28} L420 ${350 + i * 28}`, '#8aa3b0', 4)).join(''),
    [
      { label: 'Epiglottis', c: C.deep, detail: 'A leaf-shaped flap that covers the glottis when you swallow.', svg: sh('M330 60 C330 20 390 20 390 60 L370 140 L350 140 Z', '#a3b795') + L(430, 60, 'Epiglottis', C.deep) },
      { label: 'Thyroid cartilage', c: C.goldD, detail: 'The largest: the Adam’s apple.', svg: sh('M260 140 L460 140 L430 250 L360 280 L290 250 Z', '#e6c98a') + L(480, 200, 'Thyroid cartilage', C.goldD) },
      { label: 'Cricoid cartilage', c: C.rose, detail: 'A ring that joins the larynx to the trachea.', svg: rect(296, 286, 128, 40, 14, '#e6a99c') + L(440, 314, 'Cricoid ring', C.rose) },
      { label: 'Paired cartilages', c: C.plumD, detail: 'Arytenoids (move the vocal cords), corniculates (cone-shaped) and cuneiforms (rod-shaped). Nine cartilages in all.', svg: L(40, 452, 'Paired: arytenoid, corniculate, cuneiform', C.plumD, 'start', 18) },
      { label: 'Trachea below', c: C.blueD, detail: 'The trachea continues below the cricoid.', svg: L(290, 390, 'Trachea', C.blueD, 'end') }
    ]),

  'ap17-10': fig('Breathing in and out', '0 0 860 420',
    '',
    [
      { label: 'Inhaling', c: C.blueD, detail: 'The diaphragm contracts and moves down, and the external intercostals lift the ribs. The chest gets bigger, pressure drops and air rushes in.', svg: sh('M120 120 C80 140 60 260 80 330 L340 330 C360 260 340 140 300 120 Z', '#f6eee6') + ell(170, 230, 50, 80, '#f1c9c2') + ell(250, 230, 50, 80, '#f1c9c2') + line('M80 340 C150 360 270 360 340 340', '#7d9378', 8) + arrow(210, 300, 210, 360, C.blueD, { w: 4 }) + arrow(210, 30, 210, 100, C.blueD, { w: 6 }) + L(210, 400, 'In: diaphragm down', C.blueD, 'middle') },
      { label: 'Exhaling', c: C.rose, detail: 'The muscles relax, the chest gets smaller, pressure rises and air flows out. Mostly passive; forced breathing out uses the internal intercostals.', svg: sh('M560 140 C530 150 520 240 530 300 L770 300 C780 240 770 150 740 140 Z', '#f6eee6') + ell(610, 220, 42, 62, '#f1c9c2') + ell(690, 220, 42, 62, '#f1c9c2') + line('M530 300 C600 250 700 250 770 300', '#7d9378', 8) + arrow(650, 100, 650, 30, C.rose, { w: 6 }) + L(650, 400, 'Out: diaphragm up', C.rose, 'middle') },
      { label: 'Three processes', c: C.deep, detail: 'Ventilation (breathing) moves air; external respiration swaps gases between lungs and blood; internal respiration swaps gases between blood and cells.', svg: L(430, 210, 'Ventilation → external →', C.deep, 'middle', 16) + L(430, 232, 'internal respiration', C.deep, 'middle', 16) }
    ]),

  'ap17-11': fig('Partial pressures drive gas exchange', '0 0 860 400',
    ell(200, 200, 140, 120, '#f4dcd6') + T(200, 110, 'Alveolus', { s: 20, c: C.rose }) + rect(400, 80, 420, 240, 120, '#f6e6e6') + T(610, 70, 'Lung capillary', { s: 20, c: C.red }),
    [
      { label: 'Oxygen: 104 → 40', c: C.blueD, detail: 'Oxygen moves from alveolar air (104 mm Hg) into capillary blood (40 mm Hg): high to low.', svg: T(200, 180, 'O₂ 104', { s: 28, c: C.blueD }) + T(610, 180, 'O₂ 40', { s: 28, c: C.blueD }) + arrow(300, 170, 520, 170, C.blueD, { w: 6 }) },
      { label: 'Carbon dioxide: 45 → 40', c: C.muted, detail: 'Carbon dioxide moves from blood (45 mm Hg) into alveolar air (40 mm Hg).', svg: T(200, 250, 'CO₂ 40', { s: 28, c: C.ink }) + T(610, 250, 'CO₂ 45', { s: 28, c: C.ink }) + arrow(520, 240, 300, 240, C.ink, { w: 6 }) },
      { label: 'Air is 21% oxygen', c: C.goldD, detail: 'Air is 78% nitrogen, 21% oxygen and 0.04% CO₂, so the partial pressure of oxygen in air is about 160 mm Hg.', svg: L(430, 380, 'Air: 78% N₂ · 21% O₂ (≈160 mm Hg) · 0.04% CO₂', C.goldD, 'middle', 18) },
      { label: 'In the tissues: reversed', c: C.deep, detail: 'In the body’s tissues the reverse happens: oxygen leaves the blood and carbon dioxide enters it.', svg: L(430, 30, 'Gases move from high to low pressure', C.deep, 'middle', 18) }
    ], { hint: 'Numbers are partial pressures in mm Hg.' }),

  'ap18-3': fig('Three layers around the kidney', '0 0 760 440',
    '',
    [
      { label: 'Renal fascia', c: C.blueD, detail: 'The outer layer: thin fibrous tissue anchoring the kidney to the abdominal wall.', svg: ell(300, 220, 220, 190, '#e3edf1') + ring(300, 220, 220, 190, '#8aa3b0', 4) + L(540, 60, 'Renal fascia', C.blueD) },
      { label: 'Adipose capsule', c: C.goldD, detail: 'A cushion of fat that protects the kidney and holds it in place.', svg: ell(300, 220, 190, 160, '#f7e3b0') + L(560, 160, 'Adipose capsule', C.goldD) },
      { label: 'Renal capsule', c: C.plumD, detail: 'The innermost smooth fibrous membrane, which guards against infection and injury.', svg: sh('M300 100 C400 100 450 160 450 220 C450 300 400 340 300 340 C240 340 210 300 216 270 C220 250 250 240 250 220 C250 200 220 190 216 170 C210 130 240 100 300 100 Z', '#c98d7e') + outline('M300 100 C400 100 450 160 450 220 C450 300 400 340 300 340 C240 340 210 300 216 270 C220 250 250 240 250 220 C250 200 220 190 216 170 C210 130 240 100 300 100 Z', '#7a6681', 5) + L(560, 260, 'Renal capsule', C.plumD) },
      { label: 'Hilum', c: C.rose, detail: 'The notch where the ureter, blood vessels, nerves and lymph vessels enter and leave.', svg: line('M220 200 L130 190 M222 240 L130 250', '#c8524a', 10) + line('M226 260 L180 420', '#c9a65a', 10) + L(40, 160, 'Hilum', C.rose) }
    ], { hint: 'The kidneys sit behind the peritoneum; the right one a little lower, below the liver.' }),

  'ap18-6': fig('Blood flow through the kidney', '0 0 880 360',
    '',
    [['Renal artery', '#c8524a', 'Carries about a quarter of the heart’s output to the kidneys: about 1,200 mL a minute.'], ['Interlobar', '#c8524a', 'Run between the pyramids, in the renal columns.'], ['Arcuate', '#c8524a', 'Arch along the border of cortex and medulla.'], ['Interlobular', '#c8524a', 'Branch up into the cortex.'], ['Afferent arteriole', '#b04a3c', 'Brings blood to the glomerulus in Bowman’s capsule.'], ['Glomerulus', '#9a3f33', 'The capillary knot where filtering happens.'], ['Efferent arteriole', '#7d8fb8', 'Carries blood away to the peritubular capillaries around the tubules, then the veins return the same way.']].map(([n, c, d], i) => ({ label: n, c: i > 5 ? C.blueD : C.red, detail: d,
      svg: box(90 + (i % 4) * 230, i < 4 ? 90 : 250, 190, 60, i === 5 ? '#f3c3bb' : i === 6 ? '#e3edf1' : '#f6dcd6', n, i === 6 ? C.blueD : '#8a3f33', 18) + (i !== 3 && i !== 6 ? arrow(186 + (i % 4) * 230, i < 4 ? 90 : 250, 224 + (i % 4) * 230, i < 4 ? 90 : 250, c, { w: 4 }) : i === 3 ? arrow(780, 120, 160, 220, c, { w: 3 }) : '') })),
    { hint: 'Tap in order. The blood is filtered about 60 times a day.' }),

  'ap19-2': fig('Inside a testis', '0 0 760 420',
    ell(300, 220, 180, 150, '#f6e3da') + ring(300, 220, 180, 150, '#e6c98a', 8),
    [
      { label: 'Tunica albuginea', c: C.goldD, detail: 'The tough covering of the testis, which sends partitions inward to make lobules.', svg: ring(300, 220, 180, 150, '#c9a65a', 10) + line('M300 70 L300 370 M150 160 L450 280 M150 280 L450 160', '#e6c98a', 4) + L(500, 60, 'Tunica albuginea', C.goldD) },
      { label: 'Seminiferous tubules', c: C.rose, detail: 'One to three coiled tubules in each lobule, where sperm are made.', svg: [[220, 160], [380, 160], [220, 290], [380, 290]].map(([x, y]) => line(`M${x - 40} ${y} C${x - 30} ${y - 30} ${x - 10} ${y + 30} ${x} ${y} C${x + 10} ${y - 30} ${x + 30} ${y + 30} ${x + 40} ${y}`, '#c86d56', 5)).join('') + L(300, 40, 'Seminiferous tubules', C.rose, 'middle') },
      { label: 'Epididymis', c: C.plumD, detail: 'The comma-shaped coil on the back of the testis where sperm mature.', svg: sh('M470 100 C540 90 560 180 520 260 C500 300 490 340 460 360 C490 310 490 200 470 100 Z', '#c4b0cc') + L(560, 320, 'Epididymis', C.plumD) },
      { label: 'Cooler than the body', c: C.blueD, detail: 'Sperm need about 3 F° below body temperature, so the scrotum sits outside. The cremaster muscle pulls the testes up in the cold.', svg: L(300, 410, 'Kept about 3 F° cooler', C.blueD, 'middle') }
    ]),

  'ap19-6': fig('The accessory glands', '0 0 760 440',
    ell(300, 100, 90, 70, '#e3a68c') + T(300, 106, 'Bladder', { s: 18, c: '#fff', halo: false }) + line('M300 170 L300 420', '#e6b7c2', 12),
    [
      { label: 'Seminal vesicles', c: C.goldD, detail: 'Behind the bladder. Alkaline fluid rich in fructose; about 60% of semen.', svg: ell(200, 170, 40, 22, '#e6c98a') + ell(400, 170, 40, 22, '#e6c98a') + L(460, 160, 'Seminal vesicles: 60%', C.goldD) },
      { label: 'Prostate', c: C.rose, detail: 'One chestnut-sized gland around the top of the urethra below the bladder. Alkaline fluid that helps activate sperm.', svg: circ(300, 220, 40, '#d98f80') + line('M300 180 L300 260', '#e6b7c2', 12) + L(360, 230, 'Prostate', C.rose) },
      { label: 'Bulbourethral glands', c: C.plumD, detail: 'Pea-sized, below the prostate. Mucus that lubricates and clears acidic urine.', svg: circ(270, 290, 12, '#c4b0cc') + circ(330, 290, 12, '#c4b0cc') + L(360, 296, 'Bulbourethral (Cowper’s)', C.plumD) },
      { label: 'Semen', c: C.blueD, detail: 'Sperm plus these secretions, pH 7.2 to 7.6, 2.5 to 6 mL per ejaculation.', svg: L(40, 420, 'Semen: pH 7.2–7.6', C.blueD) }
    ]),

  'ap19-12': fig('Inside a mammary gland', '0 0 760 420',
    sh('M60 400 C60 160 200 40 380 40 C560 40 700 160 700 400 Z', '#f7e8df'),
    [
      { label: 'Lobes and alveoli', c: C.rose, detail: 'Each gland has 15 to 20 lobes. Milk-secreting alveoli sit in clusters.', svg: [[200, 180], [290, 120], [420, 110], [530, 170], [560, 290], [180, 300]].map(([x, y]) => [[0, 0], [16, -10], [16, 10], [30, 0], [8, 16]].map(([a, b]) => circ(x + a, y + b, 10, '#f2c6bc')).join('')).join('') + L(60, 60, '15–20 lobes', C.rose) },
      { label: 'Ducts and sinuses', c: C.goldD, detail: 'Alveoli drain through ducts and lactiferous sinuses to the nipple.', svg: line('M380 380 L220 190 M380 380 L300 130 M380 380 L430 120 M380 380 L540 180 M380 380 L570 290 M380 380 L200 300', '#e0b8a6', 6) + [[300, 270], [460, 270]].map(([x, y]) => ell(x, y, 12, 7, '#e0b8a6')).join('') + L(560, 380, 'Ducts', C.goldD) },
      { label: 'Nipple and areola', c: '#8a6a52', detail: 'The areola is the circle of pigmented skin around the nipple.', svg: ell(380, 390, 50, 16, '#c9a08a') + ell(380, 390, 16, 8, '#a07a62') + L(380, 360, 'Areola, nipple', '#8a6a52', 'middle', 18) },
      { label: 'Modified sweat glands', c: C.blueD, detail: 'Mammary glands are modified sweat glands, present in both sexes but normally working only in females. Making and releasing milk is lactation.', svg: L(700, 60, 'Modified sweat glands', C.blueD, 'end') }
    ]),

  'ap19-13': fig('From fertilization to implantation', '0 0 880 420',
    line(smooth([[60, 330], [200, 280], [340, 200], [480, 150], [620, 160], [760, 240]]), '#e6b7c2', 26) + ell(40, 340, 30, 20, '#eab3c7'),
    [
      { label: 'Ovulation', c: C.plumD, detail: 'The egg leaves the ovary. It must be fertilized within 12 to 24 hours.', svg: circ(110, 320, 14, '#f6e3da') + ring(110, 320, 14, 14, '#7a6681', 3) + L(40, 400, 'Egg released', C.plumD) },
      { label: 'Fertilization', c: C.blueD, detail: 'Usually in the uterine tube. Sperm can live up to 72 hours.', svg: circ(260, 250, 16, '#f6e3da') + line('M236 238 l-30 -14 M240 260 l-30 6', '#8aa3b0', 3) + L(260, 210, 'Zygote', C.blueD, 'middle') },
      { label: 'Cell divisions', c: C.goldD, detail: 'The zygote divides as it travels toward the uterus, becoming a blastocyst.', svg: [[400, 180], [412, 170], [412, 190], [424, 180]].map(([x, y]) => circ(x, y, 9, '#f2d6cc')).join('') + circ(560, 150, 22, '#f2d6cc') + ring(560, 150, 22, 22, '#d9b29c', 3) + L(500, 110, 'Blastocyst', C.goldD, 'middle') },
      { label: 'Implantation by day 7', c: C.rose, detail: 'The blastocyst implants in the uterine lining by about day 7. The placenta forms; by week 9 the embryo is a fetus.', svg: sh('M700 220 L860 220 L860 400 L700 400 Z', '#f4d4cf') + circ(760, 250, 20, '#f2d6cc') + L(780, 300, 'Implants', C.rose, 'middle') },
      { label: 'Birth: three stages', c: C.deep, detail: 'Parturition is driven by oxytocin and prostaglandins. Labour has three stages: dilation (longest), expulsion and placental.', svg: L(440, 400, 'Birth: dilation → expulsion → placenta', C.deep, 'middle', 18) }
    ])
};
