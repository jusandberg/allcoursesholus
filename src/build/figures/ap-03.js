const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f } = require('./lib.js');
const L = (x, y, s, c, a) => T(x, y, s, { s: 26, c: c || C.ink, a });

const mito = (x, y, rot, k) => { k = k || 1; const rx = 54 * k, ry = 28 * k;
  let cr = ''; for (let i = -3; i <= 3; i++) cr += `M${f(x + i * 13 * k)} ${f(y - ry + 6)} L${f(x + i * 13 * k)} ${f(y + (i % 2 ? 4 : -4) * k)}`;
  return `<g transform="rotate(${rot || 0} ${x} ${y})">${ell(x, y, rx, ry, '#e09c88')}${ell(x, y, rx - 7, ry - 7, '#f2c3b2')}${line(cr, '#d48a76', 4 * k)}${shine(x - rx * .5, y - ry * .55, 8 * k, 4 * k)}</g>`; };
const ribo = (x, y) => circ(x, y, 5, '#4b5d49');

// the whole cell (Lesson 3, moment 1)
const cell = ell(400, 280, 372, 256, '#f6e3da') ;
const nuc = circ(400, 268, 98, '#ddc7da') + shine(372, 228, 22, 12);
const rer = [0, 1, 2].map(i => { const r = 122 + i * 20; return line(`M${f(400 + r * Math.cos(2.3))} ${f(268 + r * Math.sin(2.3))} A${r} ${r} 0 0 1 ${f(400 + r * Math.cos(3.6))} ${f(268 + r * Math.sin(3.6))}`, '#c7a9c2', 9); }).join('')
  + Array.from({ length: 21 }, (_, i) => { const r = 122 + (i % 3) * 20 + 9, a = 2.3 + (Math.floor(i / 3) + .5) * (1.3 / 7); return ribo(400 + r * Math.cos(a), 268 + r * Math.sin(a)); }).join('');
const ser = line('M200 436 C230 410 260 460 290 434 C318 410 342 450 360 436', '#c7a9c2', 9) + line('M196 470 C226 446 260 492 292 470', '#c7a9c2', 9);
const golgi = [0, 1, 2, 3].map(i => line(`M${560 + i * 16} ${200 + i * 4} C${600 + i * 16} ${236} ${600 + i * 16} ${300} ${560 + i * 16} ${336 - i * 4}`, '#dcb25a', 11)).join('') + circ(650, 214, 10, '#ebd08c') + circ(660, 330, 9, '#ebd08c');
const lyso = circ(620, 430, 24, '#b49ac0') + circ(612, 424, 4, '#7a6681') + circ(628, 436, 4, '#7a6681') + circ(560, 470, 17, '#b49ac0');
const centr = `<g transform="rotate(20 500 410)">${rect(478, 400, 40, 18, 6, '#8aa3b0')}</g><g transform="rotate(110 516 424)">${rect(496, 416, 40, 18, 6, '#8aa3b0')}</g>`;

// membrane piece (moment 3)
const lipid = (x, y, up) => circ(x, y, 11, '#c7b07a') + line(`M${x - 4} ${y + (up ? 10 : -10)} L${x - 4} ${y + (up ? 74 : -74)} M${x + 4} ${y + (up ? 10 : -10)} L${x + 4} ${y + (up ? 74 : -74)}`, '#d9cfa8', 3);
const bilayer = (gaps) => { let s = ''; for (let x = 40; x <= 760; x += 24) { if (gaps.some(([a, b]) => x > a && x < b)) continue; s += lipid(x, 160, true) + lipid(x, 330, false); } return s; };
const GAPS = [[110, 200], [280, 380], [460, 540], [610, 700]];

module.exports = {
  'ap3-1': fig('Parts of a cell', '0 0 800 560',
    cell,
    [
      { label: 'Cell membrane', c: '#c7b07a', detail: 'The double layer of phospholipids around the cell. It controls what enters and leaves.',
        svg: ring(400, 280, 372, 256, '#c7b07a', 9) + L(130, 60, 'Cell membrane', '#8a6f35') },
      { label: 'Cytoplasm', c: '#d6a89e', detail: 'The protoplasm outside the nucleus: a watery mix where the organelles sit.',
        svg: L(180, 300, 'Cytoplasm', '#a0645a') },
      { label: 'Nucleus', c: C.plumD, detail: 'The control centre, wrapped in a double nuclear membrane with pores. It holds the chromatin (DNA).',
        svg: nuc + ring(400, 268, 98, 98, '#9c8aa2', 6) + L(400, 196, 'Nucleus', C.plumD) },
      { label: 'Nucleolus', c: '#7a6681', detail: 'A round body inside the nucleus with no membrane. It makes ribosomes.',
        svg: circ(420, 286, 30, '#7a6681') + shine(410, 276, 8) + L(420, 346, 'Nucleolus', '#5e4e66') },
      { label: 'Rough ER and ribosomes', c: C.deep, detail: 'Channels studded with ribosomes, where proteins are made, especially ones the cell will secrete.',
        svg: rer + L(150, 170, 'Rough ER', C.deep) },
      { label: 'Smooth ER', c: '#9c8aa2', detail: 'Channels with no ribosomes. Makes sex hormones in the gonads and helps move fats in the lacteals.',
        svg: ser + L(250, 520, 'Smooth ER', C.plumD) },
      { label: 'Golgi apparatus', c: C.goldD, detail: 'A stack of flat sacs, like pancakes. It collects and packages what the cell will secrete, and can form lysosomes.',
        svg: golgi + L(640, 170, 'Golgi', C.goldD) },
      { label: 'Mitochondria', c: C.rose, detail: 'The powerhouses: aerobic respiration on the cristae turns food energy into ATP.',
        svg: mito(220, 360, 20) + mito(560, 120, -15, .9) + L(560, 70, 'Mitochondria', C.rose) },
      { label: 'Lysosomes', c: '#7a6681', detail: 'Small sacs of digestive enzymes that break down worn-out parts and things the cell takes in.',
        svg: lyso + L(690, 480, 'Lysosomes', C.plumD) },
      { label: 'Centrioles', c: C.blueD, detail: 'A pair of cylinders at right angles near the nucleus. They form the spindle fibres during cell division.',
        svg: centr + L(520, 384, 'Centrioles', C.blueD) }
    ], { tap: true, hint: 'Tap a part to find it in the cell.' }),

  'ap3-3': fig('The fluid mosaic membrane', '0 0 800 520',
    rect(20, 40, 760, 62, 0, '#eaf1f3') + rect(20, 386, 760, 70, 0, '#f6ece6') + T(30, 80, 'Outside the cell', { s: 22, c: C.blueD, a: 'start' }) + T(30, 430, 'Inside (cytoplasm)', { s: 22, c: C.rose, a: 'start' })
      + bilayer(GAPS) + T(790, 150, 'Heads', { s: 20, c: C.goldD, a: 'end' }) + T(790, 254, 'Tails', { s: 20, c: C.muted, a: 'end' }),
    [
      { label: 'Channel', c: C.blueD, detail: 'A protein with a pore that lets small dissolved ions through.',
        svg: rect(116, 140, 34, 210, 16, '#8aa3b0') + rect(160, 140, 34, 210, 16, '#8aa3b0') + arrow(155, 110, 155, 380, C.blueD, { w: 4 }) + T(155, 490, 'Channel', { s: 24, c: C.blueD }) },
      { label: 'Pump', c: C.rose, detail: 'Moves materials against their gradient using ATP (active transport), like the sodium-potassium pump.',
        svg: sh('M290 150 C290 128 370 128 370 150 L376 336 C376 360 284 360 284 336 Z', '#b4877b') + circ(330, 380, 16, '#d3a84b') + T(330, 387, 'ATP', { s: 13, c: '#fff', halo: false }) + arrow(330, 330, 330, 92, '#fff', { w: 5 }) + T(330, 490, 'Pump', { s: 24, c: C.rose }) },
      { label: 'Receptor', c: C.deep, detail: 'A binding site where a hormone attaches and passes on its message.',
        svg: sh('M470 340 L470 160 C470 120 456 112 456 96 L476 96 C476 120 500 120 500 96 L520 96 C520 112 506 120 506 160 L506 340 Z', '#8fa48a') + circ(488, 70, 16, '#ad6459') + T(488, 490, 'Receptor', { s: 24, c: C.deep }) },
      { label: 'Identity marker', c: C.plumD, detail: 'Proteins (often with sugar chains) that tell the body this cell is "self".',
        svg: rect(624, 150, 70, 190, 30, '#b49ac0') + line('M640 150 L630 120 L640 96 M660 150 L664 110 L654 86 M680 150 L692 118', '#9c8aa2', 6) + T(660, 490, 'Marker', { s: 24, c: C.plumD }) },
      { label: 'Phospholipids', c: C.goldD, detail: 'Two layers. Each has a water-loving (hydrophilic) head facing out and water-fearing (hydrophobic) tails facing in.',
        svg: ring(232, 160, 20, 20, C.goldD, 5) + ring(232, 330, 20, 20, C.goldD, 5) + line('M226 172 L226 210 M238 172 L238 210', C.ink, 4) }
    ], { hint: 'Proteins sit in the lipid layer like tiles in a fluid mosaic.' }),

  'ap3-6': fig('Inside a mitochondrion', '0 0 760 420',
    ell(380, 210, 340, 170, '#e09c88') + ell(380, 210, 316, 148, '#f6d3c6'),
    [
      { label: 'Outer membrane', c: C.rose, detail: 'A smooth outer membrane wraps the whole organelle.',
        svg: ring(380, 210, 340, 170, C.rose, 7) + T(120, 30, 'Outer membrane', { s: 24, c: C.rose }) },
      { label: 'Inner membrane and cristae', c: '#b95d48', detail: 'The inner membrane folds into cristae, giving a large surface for the reactions that make ATP. Busy cells like muscle have more cristae.',
        svg: Array.from({ length: 8 }, (_, i) => { const x = 135 + i * 70, e = 148 * Math.sqrt(1 - ((x - 380) / 316) ** 2), top = i % 2 === 0; return line(`M${f(x)} ${f(top ? 210 - e : 210 + e)} L${f(x)} ${top ? 236 : 184}`, '#c86d56', 16); }).join('') + T(380, 405, 'Cristae (folds of the inner membrane)', { s: 24, c: '#b95d48' }) },
      { label: 'Matrix', c: C.goldD, detail: 'The fluid inside the inner membrane, where the Krebs cycle runs.',
        svg: [[150, 160], [270, 270], [400, 150], [520, 270], [620, 160]].map(([x, y]) => circ(x, y, 6, '#d3a84b')).join('') + T(640, 30, 'Matrix', { s: 24, c: C.goldD }) },
      { label: 'Mitochondrial DNA', c: C.plumD, detail: 'Mitochondria have their own small loop of DNA, inherited from the mother through the egg.',
        svg: ring(460, 210, 26, 18, '#7a6681', 5) + T(460, 175, 'DNA', { s: 22, c: C.plumD }) },
      { label: 'ATP made here', c: C.deep, detail: 'Glucose + oxygen → ATP + carbon dioxide + water. Most ATP is made on the cristae.',
        svg: [[250, 120], [330, 300], [560, 120]].map(([x, y]) => rect(x - 20, y - 11, 40, 22, 8, '#d3a84b') + T(x, y + 6, 'ATP', { s: 14, c: '#fff', halo: false })).join('') }
    ], { hint: 'Two membranes: a smooth outer one and a folded inner one.' }),

  'ap3-10': fig('Cilia, flagella and the 9 + 2 pattern', '0 0 860 440',
    rect(30, 250, 330, 120, 30, '#f2d6cc') + rect(420, 250, 160, 120, 60, '#f2d6cc'),
    [
      { label: 'Cilia', c: C.deep, detail: 'Short, in rows. In the airway they beat together to sweep mucus and trapped dust up to the throat.',
        svg: Array.from({ length: 10 }, (_, i) => line(`M${60 + i * 30} 250 C${60 + i * 30} 220 ${74 + i * 30} 200 ${70 + i * 30} 170`, '#8fa48a', 7)).join('') + arrow(70, 130, 330, 130, C.deep, { w: 4 }) + T(195, 110, 'Cilia sweep', { s: 24, c: C.deep }) + T(195, 410, 'Airway cell', { s: 22, c: C.muted }) },
      { label: 'Flagellum', c: C.blueD, detail: 'Long, only one to a few. The sperm cell swims with one.',
        svg: line('M500 250 C500 200 470 180 500 140 C530 100 480 80 510 40', '#6f91a2', 8) + T(640, 120, 'Flagellum', { s: 24, c: C.blueD }) + T(500, 410, 'Sperm cell', { s: 22, c: C.muted }) },
      { label: '9 + 2 pattern', c: C.goldD, detail: 'Inside, both have nine double fibrils in a ring around two central ones, growing from a basal body built like a centriole.',
        svg: circ(740, 300, 92, '#f4efe1') + Array.from({ length: 9 }, (_, i) => { const a = i / 9 * 2 * Math.PI; const x = 740 + 64 * Math.cos(a), y = 300 + 64 * Math.sin(a); return circ(x - 8 * Math.sin(a), y + 8 * Math.cos(a), 10, '#c7b07a') + circ(x + 8 * Math.sin(a), y - 8 * Math.cos(a), 10, '#c7b07a'); }).join('') + circ(728, 300, 11, '#a68a4c') + circ(752, 300, 11, '#a68a4c') + T(740, 180, 'Cross section', { s: 22, c: C.goldD }) + T(740, 420, '9 + 2', { s: 28, c: C.goldD }) }
    ])
};
