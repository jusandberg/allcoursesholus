const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f, body } = require('./lib.js');
const L = (x, y, s, c, a) => T(x, y, s, { s: 22, c, a: a || 'start' });

// kidney, frontal section; hilum on the viewer's left
const KID = 'M300 60 C430 60 500 160 500 270 C500 400 420 480 300 480 C220 480 170 430 180 380 C186 340 230 330 230 270 C230 210 186 200 180 160 C172 100 220 60 300 60 Z';
const CEN = [300, 270];
const ANG = [-118, -75, -35, 0, 35, 75, 118];
const pyr = a => { const r = a * Math.PI / 180, ux = Math.cos(r), uy = Math.sin(r), px = -uy, py = ux; const bx = CEN[0] + 168 * ux, by = CEN[1] + 168 * uy * .95, tx = CEN[0] + 70 * ux, ty = CEN[1] + 70 * uy;
  return { d: `M${f(bx + 34 * px)} ${f(by + 34 * py)} L${f(bx - 34 * px)} ${f(by - 34 * py)} L${f(tx)} ${f(ty)} Z`, tip: [tx, ty] }; };
const PY = ANG.map(pyr);
const pyramids = PY.map(p => sh(p.d, '#a8655a')).join('') + PY.map(p => line(`M${f(p.tip[0])} ${f(p.tip[1])} L${f((p.tip[0] - CEN[0]) * 2.1 + CEN[0])} ${f((p.tip[1] - CEN[1]) * 2.1 + CEN[1])}`, '#9a5650', 2)).join('');
const calyces = PY.map(p => circ(p.tip[0] - (p.tip[0] - CEN[0]) * .12, p.tip[1] - (p.tip[1] - CEN[1]) * .12, 16, '#ead39a')).join('');
const PELVIS = 'M300 190 C270 200 250 240 236 270 C250 300 270 340 300 350 C320 330 300 300 296 270 C300 240 320 210 300 190 Z';
const pelvis = sh(PELVIS, '#ead39a') + line('M240 270 C180 270 150 300 140 340 L120 560', '#ead39a', 26);

// nephron, schematic: cortex above y 260, medulla below
const NEPH = {
  glom: circ(140, 150, 30, '#c8524a') + line('M118 140 C130 120 150 160 160 140 M120 160 C134 176 146 140 162 160', '#e88a80', 4),
  caps: ring(140, 150, 46, 46, '#a3bcc8', 12),
  pct: line('M186 150 C210 110 240 190 260 140 C280 100 300 180 320 140 C334 116 350 150 350 190', '#d3a84b', 14),
  loop: line('M350 190 L350 470 C350 520 420 520 420 470 L420 200', '#8fa48a', 14),
  dct: line('M420 200 C430 150 460 190 480 150 C500 110 520 180 540 140 C556 110 580 120 600 120', '#b49ac0', 14),
  duct: line('M600 120 L640 120 L640 540', '#6f91a2', 18),
  aff: line('M40 120 L104 136', '#c8524a', 10), eff: line('M104 168 L40 190', '#c8524a', 8)
};
const nephBase = rect(0, 0, 760, 260, 0, '#f6e6df') + rect(0, 260, 760, 300, 0, '#efd2c6') + L(744, 40, 'Cortex', C.muted, 'end') + L(744, 300, 'Medulla', C.muted, 'end');

module.exports = {
  'ap18-4': fig('Inside the kidney', '100 40 440 540',
    sh(KID, '#c98d7e') + pyramids + calyces + pelvis + line('M180 250 L100 240', '#c8524a', 14) + line('M182 296 L100 300', '#5f7ba3', 14),
    [
      { label: 'Renal cortex', c: C.rose, detail: 'The outer layer of the kidney.', svg: outline(KID, '#9a3f33', 6) + L(460, 80, 'Cortex', '#9a3f33') },
      { label: 'Renal pyramids (medulla)', c: '#7a3f35', detail: 'The inner medulla holds 8 to 18 striped, triangular renal pyramids.', svg: PY.map(p => sh(p.d, '#8a4a40')).join('') + L(470, 260, 'Pyramids', '#7a3f35') },
      { label: 'Renal papillae', c: C.plumD, detail: 'The tips of the pyramids, pointing toward the centre. Urine drains from them.', svg: PY.map(p => circ(p.tip[0], p.tip[1], 7, '#7a6681')).join('') + L(330, 280, 'Papillae', C.plumD) },
      { label: 'Renal columns', c: C.goldD, detail: 'Cortex tissue that dips down between the pyramids.', svg: [-96, -55, -17, 17, 55, 96].map(a => { const r = a * Math.PI / 180; return line(`M${f(CEN[0] + 90 * Math.cos(r))} ${f(CEN[1] + 90 * Math.sin(r))} L${f(CEN[0] + 170 * Math.cos(r))} ${f(CEN[1] + 160 * Math.sin(r))}`, '#e6b9a8', 10); }).join('') + L(420, 470, 'Renal columns', C.goldD) },
      { label: 'Calyces', c: '#a68a4c', detail: 'Minor calyces collect urine from the papillae and join into two or three major calyces.', svg: PY.map(p => ring(p.tip[0] - (p.tip[0] - CEN[0]) * .12, p.tip[1] - (p.tip[1] - CEN[1]) * .12, 18, 18, '#a68a4c', 4)).join('') + L(330, 120, 'Calyces', '#8a6f35') },
      { label: 'Renal pelvis', c: C.goldD, detail: 'The funnel the calyces drain into. It narrows into the ureter.', svg: outline(PELVIS, '#a68a4c', 5) + L(150, 200, 'Pelvis', '#8a6f35', 'end') },
      { label: 'Ureter', c: '#8a6f35', detail: 'Carries urine from the renal pelvis down to the bladder.', svg: line('M240 270 C180 270 150 300 140 340 L120 560', '#c9a65a', 26) + L(150, 520, 'Ureter', '#8a6f35') },
      { label: 'Hilum and vessels', c: C.red, detail: 'The notch where the ureter, renal artery and vein, nerves and lymph vessels enter and leave.', svg: line('M180 250 L100 240', '#b04a3c', 16) + line('M182 296 L100 300', '#3b5562', 16) + L(110, 220, 'Hilum', C.red) }
    ], { tap: true, hint: 'Urine path: papilla → minor calyx → major calyx → renal pelvis → ureter.' }),

  'ap18-5': fig('The nephron', '0 0 760 560',
    nephBase + Object.values(NEPH).join(''),
    [
      { label: 'Glomerulus', c: C.red, detail: 'A knot of capillaries. Fed by the afferent arteriole and drained by the efferent arteriole.', svg: NEPH.glom + NEPH.aff + NEPH.eff + L(40, 240, 'Glomerulus', C.red) },
      { label: 'Bowman’s capsule', c: C.blueD, detail: 'A double-walled cup around the glomerulus. Together they form the renal corpuscle, where filtration happens.', svg: ring(140, 150, 46, 46, '#5f8798', 12) + L(16, 40, 'Bowman’s capsule', C.blueD) },
      { label: 'Proximal convoluted tubule', c: C.goldD, detail: 'The first, twisting part of the tubule, in the cortex. Most reabsorption happens here.', svg: NEPH.pct.replace('#d3a84b', '#b8892c') + L(220, 80, 'Proximal tubule', '#8a6f35') },
      { label: 'Loop of Henle', c: C.deep, detail: 'The descending limb dips into the medulla, makes a U-turn, and the ascending limb climbs back.', svg: NEPH.loop.replace('#8fa48a', '#6c875e') + L(440, 470, 'Loop of Henle', C.deep) },
      { label: 'Distal convoluted tubule', c: C.plumD, detail: 'The second twisting part, back in the cortex.', svg: NEPH.dct.replace('#b49ac0', '#8a6f99') + L(430, 80, 'Distal tubule', C.plumD) },
      { label: 'Collecting duct', c: C.blueD, detail: 'Collects urine from many nephrons and leads to papillary ducts that empty into the renal pelvis.', svg: NEPH.duct.replace('#6f91a2', '#3b5562') + L(625, 400, 'Collecting', C.blueD, 'end') + L(625, 426, 'duct', C.blueD, 'end') }
    ]),

  'ap18-7': fig('Making urine: three processes', '0 0 760 560',
    nephBase + Object.values(NEPH).join('') + line('M280 230 C320 250 380 240 420 230', '#c8524a', 8) + L(240, 250, 'capillary', C.muted),
    [
      { label: 'Glomerular filtration', c: C.red, detail: 'Blood pressure forces water and small dissolved substances (ions, glucose, urea, uric acid) out of the glomerulus. Large proteins stay in the blood.', svg: [[0, 1], [1, 0], [0, -1], [-1, 0]].map(([a, b]) => arrow(140 + a * 14, 150 + b * 14, 140 + a * 40, 150 + b * 40, C.red, { w: 4 })).join('') + L(30, 240, '1 Filtration', C.red) },
      { label: 'Tubular reabsorption', c: C.deep, detail: 'Useful substances go back into the blood, mostly from the proximal tubule. About 95% of the water is reabsorbed, controlled by ADH and aldosterone.', svg: [230, 290, 330].map(x => arrow(x, 160, x + 10, 222, C.deep, { w: 4 })).join('') + L(150, 330, '2 Reabsorption:', C.deep) + L(150, 356, 'back to blood', C.deep) },
      { label: 'Tubular secretion', c: C.plumD, detail: 'Substances move from the blood into the tubule: penicillin, creatinine, histamine, hydrogen ions (for pH) and potassium.', svg: [470, 520].map(x => arrow(x - 40, 226, x, 160, C.plumD, { w: 4 })).join('') + L(440, 60, '3 Secretion: blood to tubule', C.plumD) },
      { label: 'Urine', c: C.goldD, detail: 'What is left after all three steps flows down the collecting duct as urine.', svg: arrow(640, 380, 640, 540, C.goldD, { w: 6 }) + L(660, 520, 'Urine', C.goldD) }
    ], { hint: 'All three happen in the nephron. What’s left is urine.' }),

  'ap18-9': fig('Ureters, bladder and urethra', '100 260 300 340',
    body() + sh('M196 316 C166 312 162 360 176 380 C188 396 218 392 220 360 C222 336 214 318 196 316 Z', '#c98d7e') + sh('M304 316 C334 312 338 360 324 380 C312 396 282 392 280 360 C278 336 286 318 304 316 Z', '#c98d7e'),
    [
      { label: 'Ureters', c: C.goldD, detail: 'About 25 to 30 cm long. They carry urine from each renal pelvis to the bladder, mainly by peristalsis.', svg: line('M214 360 C226 410 230 450 236 494 M286 360 C274 410 270 450 264 494', '#c9a65a', 7) + L(130, 430, 'Ureter', '#8a6f35') },
      { label: 'Bladder and detrusor', c: C.rose, detail: 'A hollow organ of smooth muscle (the detrusor) behind the pubic bone. Holds about 500 mL on average.', svg: ell(250, 512, 40, 32, '#e3a68c') + shine(236, 498, 10, 6) + L(300, 520, 'Bladder', C.rose) },
      { label: 'Trigone', c: C.plumD, detail: 'The triangle between the two ureter openings and the urethra opening, where infections tend to start.', svg: sh('M236 498 L264 498 L250 530 Z', '#b49ac0') + L(300, 560, 'Trigone', C.plumD) },
      { label: 'Urethra', c: C.blueD, detail: 'From the bladder floor to the outside: about 3.8 cm in females, about 20 cm in males (where it also carries semen).', svg: line('M250 542 L250 586', '#6f91a2', 7) + L(270, 596, 'Urethra', C.blueD) }
    ], { hint: 'Urination starts at about 200 to 400 mL, when stretch receptors signal the spinal cord.' })
};
