// More pictures for Anatomy & Physiology, lessons 3 to 6
const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f, smooth, box } = require('./lib.js');
const L = (x, y, s, c, a, sz) => T(x, y, s, { s: sz || 22, c, a: a || 'start' });
const ribo = (x, y, r) => circ(x, y, r || 6, '#4b5d49');

// skin block bits (as in Lesson 6)
const EPI = 'M0 60 L700 60 L700 130 L0 130 Z';

module.exports = {
  'ap3-5': fig('Inside the nucleus', '0 0 760 440',
    circ(330, 220, 190, '#f6e3da'),
    [
      { label: 'Nuclear envelope', c: C.plumD, detail: 'A double membrane. The outer layer connects to the endoplasmic reticulum.', svg: ring(330, 220, 160, 160, '#9c8aa2', 8) + ring(330, 220, 148, 148, '#c4b0cc', 6) + L(520, 60, 'Double envelope', C.plumD) },
      { label: 'Nuclear pores', c: C.blueD, detail: 'Openings that let materials such as messenger RNA leave for the cytoplasm.', svg: Array.from({ length: 8 }, (_, i) => { const a = i / 8 * 2 * Math.PI; return circ(330 + 154 * Math.cos(a), 220 + 154 * Math.sin(a), 11, '#fff') + ring(330 + 154 * Math.cos(a), 220 + 154 * Math.sin(a), 11, 11, '#3b5562', 3); }).join('') + arrow(484, 220, 560, 220, C.blueD, { w: 4 }) + L(570, 228, 'mRNA out', C.blueD) },
      { label: 'Chromatin', c: '#7a6681', detail: 'Dark threads of genetic material (DNA and protein). Before division it thickens into visible chromosomes: 46 in body cells, 23 in eggs and sperm.', svg: line('M230 160 C260 140 280 200 310 170 C340 140 350 220 380 200 M240 270 C270 250 300 310 330 280 C360 250 390 300 420 270 M250 210 C280 230 300 190 330 230', '#9c8aa2', 4) + L(160, 420, 'Chromatin (DNA)', '#7a6681') },
      { label: 'Nucleolus', c: C.rose, detail: 'A round body with no membrane, mostly DNA, RNA and protein. It makes ribosomes.', svg: circ(370, 230, 38, '#9a5d50') + shine(358, 216, 10) + L(420, 420, 'Nucleolus: makes ribosomes', C.rose) }
    ]),

  'ap3-8': fig('From ER to Golgi to the outside', '0 0 880 360',
    rect(0, 0, 880, 360, 0, '#fbf3ee') + line('M820 0 L820 360', '#c7b07a', 10),
    [
      { label: 'Rough ER', c: C.deep, detail: 'Channels studded with ribosomes, where proteins are made, especially ones the cell will secrete.', svg: [0, 1, 2].map(i => line(`M60 ${110 + i * 50} C120 ${90 + i * 50} 180 ${130 + i * 50} 240 ${110 + i * 50}`, '#c7a9c2', 14)).join('') + Array.from({ length: 15 }, (_, i) => ribo(70 + (i % 5) * 40, 96 + Math.floor(i / 5) * 50)).join('') + L(150, 300, 'Rough ER', C.deep, 'middle') },
      { label: 'Smooth ER', c: C.plumD, detail: 'No ribosomes. Found only in some cells: makes sex hormones in the gonads and helps move fats in the lacteals.', svg: line('M70 40 C110 20 150 60 190 40 C220 26 250 50 270 40', '#b49ac0', 12) + L(170, 26, 'Smooth ER', C.plumD, 'middle', 18) },
      { label: 'Transport vesicle', c: C.goldD, detail: 'Small sacs carry what the ER made over to the Golgi.', svg: circ(320, 160, 16, '#ebd08c') + arrow(270, 160, 300, 160, C.goldD, { w: 4 }) + arrow(340, 160, 410, 160, C.goldD, { w: 4 }) },
      { label: 'Golgi apparatus', c: '#a68a4c', detail: 'A stack of flat sacs, like pancakes, where secretions are collected, concentrated and packaged. Lysosomes can form here.', svg: [0, 1, 2, 3].map(i => line(`M${450 + i * 26} 80 C${500 + i * 26} 120 ${500 + i * 26} 200 ${450 + i * 26} 240`, '#dcb25a', 14)).join('') + L(520, 300, 'Golgi: the warehouse', '#8a6f35', 'middle') },
      { label: 'Secretion', c: C.rose, detail: 'Packaged material travels in vesicles to the cell membrane and is released.', svg: circ(690, 130, 18, '#e6a99c') + circ(760, 190, 18, '#e6a99c') + arrow(600, 150, 670, 136, C.rose, { w: 4 }) + arrow(712, 140, 744, 178, C.rose, { w: 4 }) + [[840, 170], [856, 200]].map(([x, y]) => circ(x, y, 6, '#c86d56')).join('') + L(750, 300, 'Out of the cell', C.rose, 'middle') }
    ], { hint: 'Follow a protein from where it’s made to where it leaves.' }),

  'ap3-9': fig('Making a protein', '0 0 880 400',
    circ(170, 200, 150, '#ece2ef') + T(170, 70, 'Nucleus', { s: 20, c: C.plumD }) + rect(330, 0, 550, 400, 0, '#fbf3ee'),
    [
      { label: 'Gene on DNA', c: C.plumD, detail: 'The code for a protein is a gene on DNA in the nucleus.', svg: line('M70 150 L270 150 M70 180 L270 180', '#7a6681', 6) + Array.from({ length: 10 }, (_, i) => line(`M${80 + i * 20} 150 L${80 + i * 20} 180`, ['#c86d56', '#6f91a2', '#d3a84b', '#8fa48a'][i % 4], 4)).join('') + L(170, 130, 'DNA', C.plumD, 'middle', 18) },
      { label: 'Transcription', c: C.rose, detail: 'RNA polymerase helps messenger RNA (mRNA) copy the code. The mRNA leaves through a nuclear pore.', svg: line('M100 240 C150 230 200 250 250 240', '#c86d56', 7) + arrow(250, 240, 380, 220, C.rose, { w: 4 }) + L(110, 280, '1 Transcription', C.rose) },
      { label: 'Ribosome', c: C.deep, detail: 'Made of ribosomal RNA and protein, with no membrane. This is where the protein is built.', svg: ell(560, 200, 70, 40, '#a3b795') + ell(560, 240, 90, 36, '#8fa48a') + line('M440 254 L700 254', '#c86d56', 7) + L(560, 320, 'Ribosome', C.deep, 'middle') },
      { label: 'tRNA and codons', c: C.blueD, detail: 'Transfer RNA brings amino acids. Its three-base anticodon matches a three-base codon on the mRNA.', svg: [520, 600].map(x => line(`M${x} 160 L${x} 110 M${x - 14} 110 L${x + 14} 110`, '#6f91a2', 6) + circ(x, 92, 13, '#d3a84b')).join('') + L(660, 80, '2 Translation', C.blueD) },
      { label: 'Polypeptide chain', c: C.goldD, detail: 'The ribosome links the amino acids into a polypeptide chain, which folds into a protein.', svg: Array.from({ length: 6 }, (_, i) => circ(620 + i * 30, 60 - i * 4, 12, ['#c86d56', '#6f91a2', '#d3a84b', '#8fa48a'][i % 4])).join('') + L(800, 120, 'Protein chain', C.goldD) }
    ], { hint: 'Transcription in the nucleus, translation at the ribosome.' }),

  'ap3-11': fig('Plant cell vs animal cell', '0 0 880 380',
    '',
    [
      { label: 'Animal cell', c: C.rose, detail: 'A flexible membrane, no cell wall and no plastids.', svg: ell(210, 190, 170, 140, '#f6e3da') + circ(210, 180, 44, '#ddc7da') + L(210, 360, 'Animal cell', C.rose, 'middle') },
      { label: 'Cell wall', c: C.goldD, detail: 'Plant cells have a rigid wall of cellulose, made by the Golgi. We can’t digest it; in our diet it’s fibre.', svg: rect(470, 50, 360, 280, 18, '#d9e6c4') + rect(484, 64, 332, 252, 12, '#f4f7ec') + circ(650, 190, 40, '#ddc7da') + L(650, 360, 'Plant cell: wall of cellulose', C.goldD, 'middle') },
      { label: 'Chloroplasts', c: C.deep, detail: 'Plastids with green chlorophyll, where photosynthesis turns light energy into glucose. Stacks of thylakoids form grana.', svg: [[540, 110], [740, 130], [560, 260], [760, 270]].map(([x, y]) => ell(x, y, 36, 20, '#8fae74') + [-14, 0, 14].map(d => rect(x + d - 5, y - 9, 10, 18, 3, '#5f8a4c')).join('')).join('') + L(860, 90, 'Chloroplasts', C.deep, 'end') },
      { label: 'Other plastids', c: '#a68a4c', detail: 'Chromoplasts hold yellow and orange pigments; leucoplasts have no pigment and store food, like starch in potatoes.', svg: circ(650, 110, 14, '#e6b34a') + circ(690, 280, 14, '#f4efe1') + ring(690, 280, 14, 14, '#c9b27c', 2) }
    ]),

  'ap4-6': fig('With or without oxygen', '0 0 880 400',
    box(120, 200, 170, 60, '#e6c98a', 'Glucose', '#5f4a1a', 24) + arrow(210, 200, 300, 200, C.light, { w: 5 }) + box(380, 200, 150, 60, '#ebd08c', 'Pyruvic acid', '#5f4a1a', 20) + L(250, 186, 'glycolysis', C.muted, 'middle', 16) + L(250, 236, '2 ATP', C.goldD, 'middle', 16),
    [
      { label: 'With oxygen', c: C.deep, detail: 'Pyruvic acid goes on to the Krebs cycle and electron transport in the mitochondria, which make most of the ATP.', svg: arrow(460, 180, 600, 80, C.deep, { w: 5 }) + box(720, 70, 220, 56, '#e4ecdf', 'Mitochondria: lots of ATP', C.deep, 18) },
      { label: 'In muscle: lactic acid', c: C.rose, detail: 'When exercise outpaces oxygen, pyruvic acid becomes lactic acid, which causes short-term muscle fatigue. With oxygen back, it is turned back into pyruvic acid.', svg: arrow(460, 210, 600, 210, C.rose, { w: 5 }) + box(720, 210, 220, 56, '#f4ddd6', 'Lactic acid (fatigue)', '#8a3f33', 18) },
      { label: 'In yeast: fermentation', c: C.goldD, detail: 'Pyruvic acid becomes CO₂ and ethyl alcohol. The CO₂ makes bread rise; the alcohol is used in beer and wine.', svg: arrow(460, 230, 600, 330, C.goldD, { w: 5 }) + box(720, 340, 220, 56, '#f5ecd6', 'Alcohol + CO₂', '#7a5f22', 18) },
      { label: 'Only 2 ATP', c: C.muted, detail: 'Without oxygen, each glucose gives only 2 ATP, from glycolysis.', svg: L(120, 300, 'No oxygen: only 2 ATP', C.ink, 'middle') }
    ]),

  'ap4-10': fig('The cell cycle', '0 0 760 440',
    '',
    (() => { const P = [['G1', 'growth', 0, .34, '#a3b795', C.deep, 'The main growth phase.'], ['S', 'DNA copied', .34, .58, '#a3bcc8', C.blueD, 'Synthesis: DNA duplicates, so each chromosome becomes two sister chromatids joined at the centromere.'], ['G2', 'getting ready', .58, .8, '#e6c98a', C.goldD, 'Centrioles start to separate, mitochondria replicate and tubulin is made.'], ['Mitosis', 'nucleus divides', .8, .93, '#e6a99c', C.rose, 'The nucleus divides into two identical nuclei.'], ['Cytokinesis', 'cell splits', .93, 1, '#c4b0cc', C.plumD, 'The cytoplasm divides to finish making two cells.']];
      const W = (a0, a1, c) => { const p = a => [300 + 170 * Math.cos(a * 2 * Math.PI - Math.PI / 2), 220 + 170 * Math.sin(a * 2 * Math.PI - Math.PI / 2)]; const [x0, y0] = p(a0), [x1, y1] = p(a1); return sh(`M300 220 L${f(x0)} ${f(y0)} A170 170 0 ${a1 - a0 > .5 ? 1 : 0} 1 ${f(x1)} ${f(y1)} Z`, c, 'stroke:#fff;stroke-width:4'); };
      return P.map(([n, s, a0, a1, c, tc, d], i) => { const m = (a0 + a1) / 2 * 2 * Math.PI - Math.PI / 2; return { label: n, c: tc, detail: d, svg: W(a0, a1, c) + L(300 + 120 * Math.cos(m), 220 + 120 * Math.sin(m) + 8, i > 2 ? '' : n, tc, 'middle', 24) + L(520, 80 + i * 60, n, tc) + L(520, 104 + i * 60, s, C.muted, 'start', 17) }; }); })().concat([{ label: 'Interphase', c: C.ink, detail: 'G1, S and G2 together are interphase, the longest stage. The cell isn’t dividing, but it is very busy.', svg: circ(300, 220, 60, '#fff') + T(300, 228, 'Interphase', { s: 18, c: C.ink, halo: false }) }]),
    { hint: 'Interphase (G1, S, G2) takes most of the time.' }),

  'ap4-12': fig('Cytokinesis', '0 0 820 320',
    '',
    [
      { label: 'Animal cell: cleavage furrow', c: C.rose, detail: 'A ring of actin filaments pinches the membrane inward until the cell splits.', svg: sh('M60 160 C60 60 200 60 210 120 C220 60 360 60 360 160 C360 260 220 260 210 200 C200 260 60 260 60 160 Z', '#f6e3da') + circ(130, 160, 30, '#ddc7da') + circ(290, 160, 30, '#ddc7da') + arrow(210, 50, 210, 110, C.rose, { w: 4 }) + arrow(210, 270, 210, 210, C.rose, { w: 4 }) + L(210, 300, 'Animal: pinches in', C.rose, 'middle') },
      { label: 'Plant cell: cell plate', c: C.deep, detail: 'Plant cells build a cell plate across the middle, which becomes a new cell wall.', svg: rect(460, 60, 300, 200, 14, '#d9e6c4') + rect(472, 72, 276, 176, 10, '#f4f7ec') + rect(604, 72, 12, 176, 4, '#8fa48a') + circ(540, 160, 30, '#ddc7da') + circ(680, 160, 30, '#ddc7da') + L(610, 300, 'Plant: builds a plate', C.deep, 'middle') }
    ]),

  'ap5-6': fig('Exocrine and endocrine glands', '0 0 860 380',
    rect(0, 40, 860, 40, 0, '#efc0b0') + T(430, 30, 'Surface (skin or lining)', { s: 18, c: C.muted }),
    [
      { label: 'Simple exocrine', c: C.goldD, detail: 'One unbranched duct carries secretions to a surface: sweat glands, sebaceous glands, most digestive glands.', svg: line('M150 80 L150 220', '#e3b8a8', 14) + circ(150, 250, 40, '#ebd08c') + arrow(150, 200, 150, 60, C.goldD, { w: 4 }) + L(150, 340, 'Simple: one duct', C.goldD, 'middle') },
      { label: 'Compound exocrine', c: C.rose, detail: 'Branching ducts: mammary glands, large salivary glands.', svg: line('M400 80 L400 170 M400 170 L340 230 M400 170 L460 230 M400 170 L400 240', '#e3b8a8', 12) + [[340, 250], [460, 250], [400, 260]].map(([x, y]) => circ(x, y, 26, '#e6a99c')).join('') + L(400, 340, 'Compound: branching', C.rose, 'middle') },
      { label: 'Endocrine', c: C.plumD, detail: 'No ducts: hormones go straight into the blood, as in the thyroid and pituitary.', svg: circ(640, 220, 50, '#c4b0cc') + line('M560 300 C620 280 680 300 760 280', '#c8524a', 10) + [[620, 270], [660, 262]].map(([x, y]) => circ(x, y, 7, '#7a6681')).join('') + L(660, 340, 'Endocrine: into blood', C.plumD, 'middle') },
      { label: 'Goblet cell', c: C.blueD, detail: 'A single-celled gland in a lining that secretes mucus.', svg: ell(790, 130, 22, 36, '#d7e6ec') + circ(790, 80, 6, '#a3bcc8') + L(790, 200, 'Goblet', C.blueD, 'middle', 18) }
    ], { hint: 'All glands are made of epithelial tissue.' }),

  'ap5-8': fig('Loose connective tissue', '0 0 880 320',
    '',
    [
      { label: 'Areolar', c: C.goldD, detail: 'The most widespread: surrounds organs, muscles, vessels and nerves. Fibroblasts make fibres, histiocytes eat debris, mast cells make heparin and histamine.', svg: rect(30, 40, 260, 220, 20, '#f8f2e4') + line('M50 80 C120 120 180 60 270 110 M50 170 C120 140 200 220 270 180 M60 230 C140 200 200 250 270 220', '#e0c584', 4) + line('M60 120 C120 110 160 170 250 140', '#c4a3cf', 2.5) + [[110, 110], [200, 170], [150, 220]].map(([x, y]) => ell(x, y, 12, 6, '#a68a4c')).join('') + circ(220, 90, 12, '#c86d56') + L(160, 300, 'Areolar', C.goldD, 'middle') },
      { label: 'Adipose', c: '#c9a65a', detail: 'Packed with fat cells that look like soap bubbles. Cushions organs like the kidneys and insulates the body.', svg: rect(310, 40, 260, 220, 20, '#fbf3e0') + Array.from({ length: 12 }, (_, i) => circ(350 + (i % 4) * 60, 80 + Math.floor(i / 4) * 66, 30, '#f7e3b0') + ring(350 + (i % 4) * 60, 80 + Math.floor(i / 4) * 66, 30, 30, '#e0c584', 2)).join('') + L(440, 300, 'Adipose', '#8a6f35', 'middle') },
      { label: 'Reticular', c: C.blueD, detail: 'A fine network of fibres forming the framework of the liver, bone marrow, spleen and lymph nodes.', svg: rect(590, 40, 260, 220, 20, '#eef3f5') + line('M610 80 L700 120 L780 70 L830 130 M620 180 L700 120 L740 210 L830 180 M640 240 L740 210 M700 120 L720 60', '#8aa3b0', 3) + L(720, 300, 'Reticular', C.blueD, 'middle') }
    ]),

  'ap5-9': fig('Dense connective tissue', '0 0 860 320',
    '',
    [
      { label: 'Dense regular', c: C.goldD, detail: 'Fibres in one direction. Tendons (muscle to bone, mostly collagen), ligaments (bone to bone, collagen and elastin), aponeuroses (wide flat tendons).', svg: rect(40, 50, 360, 200, 20, '#f8f2e4') + Array.from({ length: 8 }, (_, i) => line(`M60 ${74 + i * 22} C150 ${70 + i * 22} 250 ${78 + i * 22} 380 ${74 + i * 22}`, '#e0c584', 7)).join('') + [[120, 96], [260, 162], [200, 206]].map(([x, y]) => ell(x, y, 14, 4, '#a68a4c')).join('') + L(220, 290, 'Regular: tendons, ligaments', C.goldD, 'middle') },
      { label: 'Dense irregular', c: C.rose, detail: 'Fibres in many directions: the dermis, muscle sheaths, joint capsules, the outer coat of arteries and fascia.', svg: rect(460, 50, 360, 200, 20, '#f8ebe8') + line('M480 80 C560 160 620 60 800 120 M490 220 C560 100 660 220 800 90 M520 60 C600 220 700 140 790 230 M480 150 C600 140 640 240 800 180', '#d9a092', 7) + L(640, 290, 'Irregular: dermis, capsules', C.rose, 'middle') }
    ]),

  'ap5-10': fig('Three kinds of cartilage', '0 0 880 320',
    '',
    [
      { label: 'Hyaline', c: C.blueD, detail: 'No visible fibres ("clear"). On joint surfaces, costal cartilages, tracheal rings and the nasal septum. The fetal skeleton starts as hyaline cartilage.', svg: rect(30, 40, 260, 220, 20, '#e7f0f3') + [[90, 100], [200, 90], [130, 190], [230, 200]].map(([x, y]) => ell(x, y, 26, 18, '#fff') + circ(x, y, 9, '#8aa3b0')).join('') + L(160, 300, 'Hyaline: clear', C.blueD, 'middle') },
      { label: 'Fibrocartilage', c: C.goldD, detail: 'Mostly tough collagen, very resistant to stretching: intervertebral disks and the pubic symphysis.', svg: rect(310, 40, 260, 220, 20, '#f8f2e4') + Array.from({ length: 7 }, (_, i) => line(`M330 ${64 + i * 30} L550 ${64 + i * 30}`, '#e0c584', 6)).join('') + [[380, 110], [480, 170], [420, 230]].map(([x, y]) => ell(x, y, 22, 12, '#fff') + circ(x, y, 7, '#a68a4c')).join('') + L(440, 300, 'Fibro: tough', C.goldD, 'middle') },
      { label: 'Elastic', c: C.plumD, detail: 'Mostly elastin, so it stretches and springs back: the external ear, auditory tubes and epiglottis.', svg: rect(590, 40, 260, 220, 20, '#f3eef5') + line('M610 80 C650 120 690 60 730 100 C770 140 810 80 840 110 M610 160 C650 200 690 140 730 180 C770 220 810 160 840 190 M620 230 C660 210 700 250 760 220', '#b49ac0', 3) + [[660, 120], [780, 150], [700, 210]].map(([x, y]) => ell(x, y, 22, 14, '#fff') + circ(x, y, 7, '#7a6681')).join('') + L(720, 300, 'Elastic: springy', C.plumD, 'middle') },
      { label: 'Chondrocytes', c: C.ink, detail: 'Cartilage cells, sitting in cavities called lacunae within a firm matrix.', svg: ring(90, 100, 30, 22, C.ink, 3) + L(160, 30, 'Chondrocyte in a lacuna', C.ink, 'middle', 18) }
    ]),

  'ap6-5': fig('Where skin colour comes from', '0 0 760 360',
    sh(EPI, '#efc9b8') + rect(0, 130, 700, 160, 0, '#f3d9cb') + line('M60 230 C160 210 260 250 360 226 C460 200 560 240 700 220', '#e88a80', 7),
    [
      { label: 'Melanocytes', c: '#6b5345', detail: 'Cells in the stratum germinativum that make melanin. Everyone has about the same number; genes control how much melanin they make.', svg: [[120, 124], [320, 124], [520, 124]].map(([x, y]) => circ(x, y, 14, '#8a6a52') + line(`M${x} ${y} L${x - 26} ${y - 30} M${x} ${y} L${x + 24} ${y - 34} M${x} ${y} L${x + 4} ${y - 44}`, '#8a6a52', 4)).join('') + L(560, 30, 'Melanocytes', '#6b5345') },
      { label: 'Melanin', c: '#8a6a52', detail: 'The pigment that gives skin colour and protects against UV rays. Sunlight stimulates more of it: a suntan.', svg: Array.from({ length: 18 }, (_, i) => circ(40 + i * 36, 80 + (i % 3) * 12, 5, '#8a6a52')).join('') + arrow(700, 0, 640, 56, C.goldD, { w: 4 }) + L(740, 340, 'UV blocked by melanin', '#8a6a52', 'end') },
      { label: 'Blood vessels', c: C.red, detail: 'The pink tint of light skin comes from blood vessels in the dermis; blushing is those vessels widening.', svg: line('M60 230 C160 210 260 250 360 226 C460 200 560 240 700 220', '#c8524a', 9) + L(40, 330, 'Pink tint, blushing', C.red) }
    ]),

  'ap6-7': fig('A hair, root to tip', '0 0 820 440',
    rect(0, 120, 420, 320, 0, '#f3d9cb') + rect(0, 100, 420, 30, 0, '#efc0b0') + sh('M180 130 L240 130 L250 360 C262 392 236 420 210 420 C184 420 158 392 170 360 Z', '#e7c3b2'),
    [
      { label: 'Shaft', c: '#5c4a3e', detail: 'The visible part above the skin.', svg: line('M212 0 L212 130', '#5c4a3e', 14) + L(240, 50, 'Shaft', '#5c4a3e') },
      { label: 'Root and follicle', c: C.rose, detail: 'The root sits in the hair follicle, a tube of epidermis.', svg: line('M212 130 L212 370', '#5c4a3e', 12) + outline('M180 130 L240 130 L250 360 C262 392 236 420 210 420 C184 420 158 392 170 360 Z', C.rose, 4) + L(270, 240, 'Root in follicle', C.rose) },
      { label: 'Bulb', c: C.red, detail: 'Growth starts in the hair bulb at the base, nourished by blood vessels.', svg: ell(212, 390, 28, 22, '#a07a62') + line('M160 430 C190 404 236 404 264 430', '#c8524a', 5) + L(270, 400, 'Bulb (growth)', C.red) },
      { label: 'Arrector pili', c: C.deep, detail: 'A small smooth muscle on the follicle. When it contracts (cold or fear), the hair stands up: goose flesh.', svg: line('M246 300 L340 130', '#8fa48a', 10) + L(330, 190, 'Arrector pili', C.deep) },
      { label: 'Three layers', c: C.goldD, detail: 'Cuticle (overlapping scales outside), cortex (main part, holds pigment) and medulla (centre, often with air spaces). Grey hair lacks pigment in the cortex.', svg: circ(640, 220, 130, '#f2e0c8') + circ(640, 220, 100, '#7a5a48') + circ(640, 220, 40, '#c9b19c') + L(640, 380, 'Cross-section', C.muted, 'middle', 18) + L(640, 80, 'cuticle', C.goldD, 'middle', 18) + L(640, 160, 'cortex', '#fff', 'middle', 18) + L(640, 226, 'medulla', '#5c4a3e', 'middle', 16) }
    ]),

  'ap6-8': fig('Parts of a nail', '0 0 760 360',
    sh('M120 330 L120 120 C120 40 300 40 300 120 L300 330 Z', '#f0d0bc') + line('M80 120 L60 340 M340 120 L360 340', '#e7c3b2', 6),
    [
      { label: 'Nail body', c: C.rose, detail: 'The visible part, made of very hard keratin.', svg: sh('M140 250 L140 110 C140 60 280 60 280 110 L280 250 Z', '#f7e1d8') + L(340, 120, 'Nail body', C.rose) },
      { label: 'Lunula', c: C.blueD, detail: 'The white crescent at the base of the nail.', svg: sh('M160 250 C160 210 260 210 260 250 Z', '#fbf5f2') + L(340, 236, 'Lunula', C.blueD) },
      { label: 'Cuticle (eponychium)', c: C.goldD, detail: 'Stratum corneum extending over the base of the nail.', svg: line('M136 256 C170 266 250 266 284 256', '#c9a65a', 7) + L(340, 270, 'Cuticle', C.goldD) },
      { label: 'Nail root', c: C.plumD, detail: 'The part attached to the nail bed, under the skin. Nails grow from here, about 1 mm a week.', svg: rect(150, 262, 120, 50, 10, '#c4b0cc', 'opacity:.8') + L(340, 310, 'Root (under skin)', C.plumD) },
      { label: 'Growth', c: C.deep, detail: 'A lost fingernail regrows in about 3½ to 5½ months; a toenail in 6 to 8 months.', svg: arrow(210, 300, 210, 80, C.deep, { w: 5 }) + L(560, 200, 'Fingernail: 3½–5½ months', C.deep, 'middle', 18) + L(560, 230, 'Toenail: 6–8 months', C.deep, 'middle', 18) }
    ]),

  'ap6-10': fig('Two kinds of sweat gland', '0 0 820 400',
    rect(0, 60, 820, 40, 0, '#efc0b0') + rect(0, 100, 820, 280, 0, '#f3d9cb'),
    [
      { label: 'Eccrine', c: C.blueD, detail: 'The most common type, opening at a pore on the skin. They cool the body. Most numerous on palms and soles.', svg: line('M200 60 C196 140 210 220 200 280', '#8fb0c0', 6) + Array.from({ length: 5 }, (_, i) => ring(190 + (i % 2) * 18, 290 + i * 9, 20, 11, '#6f91a2', 6)).join('') + arrow(200, 56, 200, 10, C.blueD, { w: 4 }) + L(240, 30, 'Eccrine: cools you', C.blueD) },
      { label: 'Apocrine', c: C.plumD, detail: 'Only in the armpits, groin and around the anus. They open into hair follicles, become active at puberty and don’t control temperature.', svg: line('M560 0 L566 180', '#5c4a3e', 8) + sh('M540 100 L590 100 L596 220 C600 240 530 240 534 220 Z', '#e7c3b2') + line('M590 200 C640 200 650 240 620 270', '#b49ac0', 6) + Array.from({ length: 5 }, (_, i) => ring(630 + (i % 2) * 22, 280 + i * 11, 26, 14, '#9c8aa2', 7)).join('') + L(600, 380, 'Apocrine: into hair follicles', C.plumD, 'middle') },
      { label: 'What sweat holds', c: C.goldD, detail: 'The same minerals as blood but much more dilute, mostly sodium chloride, plus urea, uric acid, ammonia and lactic acid. Bacteria cause the smell.', svg: [[100, 30], [130, 20], [150, 36]].map(([x, y]) => circ(x, y, 7, '#a3c3d0')).join('') + L(40, 380, 'Mostly salt and water', C.goldD) }
    ])
};
