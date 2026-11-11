const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f } = require('./lib.js');

const hex = (x, y, r, c) => sh(Array.from({ length: 6 }, (_, i) => { const a = Math.PI / 6 + i * Math.PI / 3; return (i ? 'L' : 'M') + f(x + r * Math.cos(a)) + ' ' + f(y + r * Math.sin(a)); }).join('') + 'Z', c);
const atp = (x, y) => rect(x - 24, y - 13, 48, 26, 9, '#d3a84b') + T(x, y + 7, 'ATP', { s: 16, c: '#fff', halo: false });

// chromosomes: an X (two sister chromatids) or a single chromatid
const X = (x, y, c, rot) => `<g transform="rotate(${rot || 0} ${x} ${y})">${line(`M${x - 14} ${y - 26} L${x + 14} ${y + 26} M${x + 14} ${y - 26} L${x - 14} ${y + 26}`, c, 10)}${circ(x, y, 6, '#ffffff')}</g>`;
const V = (x, y, c, up) => line(`M${x - 12} ${y + (up ? 22 : -22)} L${x} ${y} L${x + 12} ${y + (up ? 22 : -22)}`, c, 9);
const cellC = (x, y, rx, ry) => ell(x, y, rx, ry, '#f6e3da');
const spindle = (x, y, w, h) => line(Array.from({ length: 5 }, (_, i) => `M${x - w} ${y} Q${x} ${y - h + i * h / 2} ${x + w} ${y}`).join(' '), '#c7d2c4', 2.5);
const pole = (x, y) => rect(x - 9, y - 6, 18, 12, 4, '#8aa3b0');
const CH = ['#ad6459', '#3b5562'];
const phase = (cx, name, body) => body + T(cx, 300, name, { s: 26, c: C.ink });

module.exports = {
  'ap4-2': fig('Where a cell makes ATP', '0 0 860 470',
    ell(430, 235, 410, 215, '#f6e3da') + T(140, 70, 'Cytoplasm', { s: 24, c: '#a0645a' })
      + ell(560, 250, 230, 130, '#e09c88') + ell(560, 250, 212, 112, '#f6d3c6') + T(560, 410, 'Mitochondrion', { s: 24, c: C.rose }),
    [
      { label: 'Glycolysis', c: C.goldD, detail: 'In the cytoplasm, without oxygen. One glucose is split into 2 pyruvic acid, making a little ATP.',
        svg: hex(110, 200, 30, '#d3a84b') + T(110, 160, 'Glucose', { s: 22, c: C.goldD }) + arrow(150, 210, 220, 240, C.goldD, { w: 4 }) + circ(250, 230, 16, '#dcb25a') + circ(270, 262, 16, '#dcb25a') + T(250, 310, '2 pyruvic acid', { s: 22, c: C.goldD }) + atp(170, 300) + arrow(296, 246, 360, 246, C.goldD, { w: 4 }) },
      { label: 'Krebs citric acid cycle', c: C.rose, detail: 'In the mitochondria; needs oxygen. Releases carbon dioxide and loads NAD and FAD with electrons.',
        svg: ring(470, 250, 54, 54, '#c86d56', 7) + arrow(510, 214, 520, 230, '#c86d56', { w: 6 }) + T(470, 258, 'Krebs', { s: 22, c: C.rose }) + arrow(470, 190, 470, 70, C.muted, { w: 4 }) + T(470, 56, 'CO₂ out', { s: 22, c: C.muted }) },
      { label: 'Electron transport', c: C.deep, detail: 'On the cristae; needs oxygen. Makes most of the ATP. Oxygen takes the used electrons and forms water.',
        svg: line('M600 160 L600 340 M650 150 L650 350 M700 166 L700 334', '#c86d56', 12) + [[625, 200], [675, 260], [625, 310]].map(([x, y]) => atp(x, y)).join('') + T(700, 120, 'Most ATP', { s: 22, c: C.deep }) },
      { label: 'Oxygen in, water out', c: C.blueD, detail: 'Overall: glucose + 6 O₂ → 6 CO₂ + 6 H₂O + ATP.',
        svg: arrow(830, 120, 760, 180, C.blueD, { w: 4 }) + T(800, 100, 'O₂ in', { s: 22, c: C.blueD }) + arrow(760, 330, 830, 400, C.blueD, { w: 4 }) + T(800, 440, 'H₂O out', { s: 22, c: C.blueD }) }
    ], { hint: 'Follow glucose from the cytoplasm into the mitochondrion.' }),

  'ap4-9': fig('The DNA double helix', '0 0 820 420',
    (() => { let s = ''; for (let i = 0; i < 16; i++) { const x = 60 + i * 40, y1 = 210 + 118 * Math.sin(i * .5), y2 = 210 - 118 * Math.sin(i * .5); if (i > 13 || i === 0) continue; s += line(`M${x} ${f(y1)} L${x} ${f(y2)}`, ['#c86d56', '#6f91a2', '#d3a84b', '#8fa48a'][i % 4], 9); } return s; })(),
    [
      { label: 'Sugar-phosphate handrails', c: C.ink, detail: 'Each strand’s backbone is sugar and phosphate, twisting like the rails of a spiral staircase.',
        svg: line('M60 ' + Array.from({ length: 27 }, (_, i) => `${i ? 'L' : ''}${f(60 + i * 20)} ${f(210 + 125 * Math.sin(i * .25))}`).join(' ').slice(3), '#3b5562', 8) + line('M60 ' + Array.from({ length: 27 }, (_, i) => `${i ? 'L' : ''}${f(60 + i * 20)} ${f(210 - 125 * Math.sin(i * .25))}`).join(' ').slice(3), '#243341', 8) + T(110, 50, 'Handrails', { s: 24, c: C.ink }) },
      { label: 'A pairs with T', c: '#c86d56', detail: 'Adenine always pairs with thymine, held by two hydrogen bonds.',
        svg: rect(640, 120, 150, 50, 14, '#f4e3dd') + T(715, 154, 'A = T', { s: 28, c: '#b95d48' }) + T(715, 200, '2 bonds', { s: 20, c: C.muted }) },
      { label: 'G pairs with C', c: C.goldD, detail: 'Guanine always pairs with cytosine, held by three hydrogen bonds. A purine always pairs with a pyrimidine.',
        svg: rect(640, 240, 150, 50, 14, '#f5ecd6') + T(715, 274, 'G ≡ C', { s: 28, c: C.goldD }) + T(715, 320, '3 bonds', { s: 20, c: C.muted }) },
      { label: 'Base pairs are the steps', c: C.sage, detail: 'The steps of the staircase are base pairs. A gene is a sequence of base pairs that codes for a protein.',
        svg: ring(270, 210, 40, 130, C.sage, 5) + T(270, 400, 'One step = one base pair', { s: 22, c: C.deep }) },
      { label: 'Replication', c: C.plumD, detail: 'Before division, helicase unzips the hydrogen bonds and DNA polymerase adds new nucleotides to each strand.',
        svg: arrow(600, 360, 540, 300, C.plumD, { w: 4 }) + T(600, 395, 'Helicase unzips', { s: 22, c: C.plumD }) }
    ]),

  'ap4-11': fig('The stages of mitosis', '0 0 920 330',
    '',
    [
      { label: 'Prophase', c: C.rose, detail: 'Chromosomes thicken into two sister chromatids joined at the centromere. Centrioles move to the poles, spindle fibres form, and the nuclear membrane breaks down.',
        svg: phase(115, 'Prophase', cellC(115, 140, 90, 104) + ring(115, 140, 62, 62, '#c7a9c2', 3, 'stroke-dasharray="6 8"') + X(90, 120, CH[0], 20) + X(140, 130, CH[1], -30) + X(110, 170, CH[0], 70) + pole(40, 70) + pole(190, 210)) },
      { label: 'Metaphase', c: C.goldD, detail: 'Chromosomes line up across the middle on the equatorial (metaphase) plate.',
        svg: phase(340, 'Metaphase', cellC(340, 140, 90, 104) + spindle(340, 140, 82, 86) + line('M340 50 L340 230', '#c7b07a', 3, 'stroke-dasharray="5 6"') + X(340, 100, CH[0], 90) + X(340, 140, CH[1], 90) + X(340, 180, CH[0], 90) + pole(256, 140) + pole(424, 140)) },
      { label: 'Anaphase', c: C.blueD, detail: 'The shortest stage. Centromeres divide and sister chromatids are pulled to opposite poles in a V shape.',
        svg: phase(565, 'Anaphase', cellC(565, 140, 104, 92) + spindle(565, 140, 94, 76) + [100, 140, 180].map((y, i) => line(`M${535} ${y - 14} L${515} ${y} L${535} ${y + 14}`, CH[i % 2], 9) + line(`M${595} ${y - 14} L${615} ${y} L${595} ${y + 14}`, CH[i % 2], 9)).join('') + pole(469, 140) + pole(661, 140)) },
      { label: 'Telophase', c: C.deep, detail: 'Chromosomes uncoil, the spindle breaks down, and a new nuclear membrane forms around each set. Cytokinesis then pinches the cell in two.',
        svg: phase(790, 'Telophase', sh('M700 60 C760 40 790 90 790 110 C790 90 820 40 880 60 C910 90 910 200 880 220 C820 240 790 190 790 170 C790 190 760 240 700 220 C670 200 670 90 700 60 Z', '#f6e3da') + circ(740, 140, 34, '#ddc7da') + circ(840, 140, 34, '#ddc7da') + line('M728 130 C740 120 750 150 756 140 M842 128 C830 140 852 150 844 156', CH[0], 4)) }
    ], { hint: 'Tap the stages in order: prophase, metaphase, anaphase, telophase.' }),

  'ap4-13': fig('Meiosis: one cell becomes four', '0 0 860 400',
    arrow(170, 190, 260, 120, C.light, { w: 4 }) + arrow(170, 210, 260, 280, C.light, { w: 4 }) + [110, 290].map(y => arrow(400, y, 520, y - 50, C.light, { w: 4 }) + arrow(400, y, 520, y + 50, C.light, { w: 4 })).join(''),
    [
      { label: 'Diploid parent (2n)', c: C.rose, detail: 'A body cell in the ovary or testis with 46 chromosomes in matching (homologous) pairs. DNA duplicates once.',
        svg: circ(100, 200, 72, '#f6e3da') + X(80, 190, CH[0]) + X(120, 210, CH[1]) + T(100, 310, '2n = 46', { s: 24, c: C.rose }) },
      { label: 'Meiosis I', c: C.goldD, detail: 'Homologous pairs line up (synapsis) and may swap segments (crossing-over). The pairs separate: 46 → 23.',
        svg: circ(330, 110, 58, '#f6e3da') + X(330, 110, CH[0]) + circ(330, 290, 58, '#f6e3da') + X(330, 290, CH[1]) + T(330, 30, 'Meiosis I', { s: 24, c: C.goldD }) },
      { label: 'Meiosis II', c: C.blueD, detail: 'The sister chromatids separate, like mitosis, with no new DNA copying.',
        svg: T(470, 200, 'Meiosis II', { s: 24, c: C.blueD }) },
      { label: 'Four haploid cells (n)', c: C.deep, detail: 'The result is four gametes, each with 23 chromosomes. Fertilization restores 46.',
        svg: [60, 160, 240, 340].map((y, i) => circ(580, y, 34, '#f6e3da') + line(`M580 ${y - 18} L580 ${y + 18}`, CH[i < 2 ? 0 : 1], 9)).join('') + T(720, 210, 'n = 23', { s: 28, c: C.deep }) }
    ], { hint: 'One division of DNA copying, two divisions of the cell.' })
};
