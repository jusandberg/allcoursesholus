const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f, neuron } = require('./lib.js');
const BM = (x, w, y) => rect(x, y, w, 10, 5, '#c7b07a');
const nucl = (x, y, r) => circ(x, y, r || 9, '#7a6681');
const CELL = '#f2d6cc';

// one panel of cells sitting on a basement membrane
const squam = x => Array.from({ length: 5 }, (_, i) => sh(`M${x + i * 44} 200 C${x + i * 44 + 6} 186 ${x + i * 44 + 38} 186 ${x + i * 44 + 44} 200 Z`, CELL) + ell(x + i * 44 + 22, 195, 10, 4, '#7a6681')).join('');
const cubo = x => Array.from({ length: 5 }, (_, i) => rect(x + i * 44 + 1, 156, 42, 44, 6, CELL) + nucl(x + i * 44 + 22, 178)).join('');
const colu = x => Array.from({ length: 5 }, (_, i) => rect(x + i * 44 + 1, 96, 42, 104, 8, CELL) + ell(x + i * 44 + 22, 172, 9, 13, '#7a6681')).join('');

module.exports = {
  'ap5-3': fig('Epithelial cell shapes', '0 0 840 320',
    BM(30, 220, 200) + BM(310, 220, 200) + BM(590, 220, 200) + T(140, 300, 'basement membrane', { s: 18, c: C.goldD }),
    [
      { label: 'Squamous', c: C.rose, detail: 'Flat cells. They line the mouth, blood and lymph vessels, throat and esophagus, and form the skin. Mainly protect.',
        svg: squam(30) + T(140, 260, 'Squamous: flat', { s: 24, c: C.rose }) },
      { label: 'Cuboidal', c: C.goldD, detail: 'Like small cubes. Found in glands and ducts (sweat, salivary), covering the ovaries and in kidney tubules. Secrete, protect and absorb.',
        svg: cubo(310) + T(420, 260, 'Cuboidal: cube', { s: 24, c: C.goldD }) },
      { label: 'Columnar', c: C.blueD, detail: 'Tall rectangles. They line the stomach, intestinal villi, uterine tubes and upper airway. Many have cilia.',
        svg: colu(590) + Array.from({ length: 15 }, (_, i) => line(`M${596 + i * 14} 96 L${598 + i * 14} 76`, '#8fa48a', 3)).join('') + T(700, 260, 'Columnar: tall', { s: 24, c: C.blueD }) }
    ]),

  'ap5-4': fig('Epithelial arrangements', '0 0 860 330',
    BM(20, 190, 230) + BM(230, 190, 230) + BM(440, 190, 230) + BM(650, 190, 230),
    [
      { label: 'Simple', c: C.sage, detail: 'One layer thick, for easy exchange: capillaries and lung alveoli.',
        svg: Array.from({ length: 4 }, (_, i) => rect(22 + i * 47, 186, 45, 44, 6, CELL) + nucl(44 + i * 47, 208)).join('') + T(115, 290, 'Simple', { s: 24, c: C.deep }) + T(115, 318, 'one layer', { s: 18, c: C.muted }) },
      { label: 'Stratified', c: C.rose, detail: 'Several layers thick, for protection. Stratified squamous lines the mouth and throat and forms the skin surface.',
        svg: Array.from({ length: 4 }, (_, i) => rect(232 + i * 47, 190, 45, 40, 6, CELL) + nucl(254 + i * 47, 210, 8)).join('') + Array.from({ length: 4 }, (_, i) => rect(240 + i * 44, 152, 42, 36, 8, CELL) + ell(261 + i * 44, 170, 9, 6, '#7a6681')).join('') + Array.from({ length: 4 }, (_, i) => sh(`M${236 + i * 46} 150 C${244 + i * 46} 134 ${272 + i * 46} 134 ${280 + i * 46} 150 Z`, CELL)).join('') + T(325, 290, 'Stratified', { s: 24, c: C.rose }) + T(325, 318, 'many layers', { s: 18, c: C.muted }) },
      { label: 'Pseudostratified', c: C.blueD, detail: 'Looks layered because nuclei sit at different heights, but every cell touches the basement membrane. The ciliated kind lines the trachea and bronchi.',
        svg: Array.from({ length: 5 }, (_, i) => sh(`M${444 + i * 37} 230 L${444 + i * 37} ${i % 2 ? 120 : 100} L${478 + i * 37} ${i % 2 ? 100 : 120} L${480 + i * 37} 230 Z`, CELL) + ell(462 + i * 37, i % 2 ? 200 : 150, 8, 12, '#7a6681')).join('') + Array.from({ length: 12 }, (_, i) => line(`M${448 + i * 14} 108 L${450 + i * 14} 88`, '#8fa48a', 3)).join('') + T(535, 290, 'Pseudostratified', { s: 22, c: C.blueD }) + T(535, 318, 'one layer, looks like more', { s: 18, c: C.muted }) },
      { label: 'Transitional', c: C.goldD, detail: 'Several layers of stretchy cells. Flat when stretched (full bladder), saw-toothed when relaxed. Lines the renal pelvis, ureters and bladder.',
        svg: Array.from({ length: 4 }, (_, i) => rect(652 + i * 47, 190, 45, 40, 8, CELL) + nucl(674 + i * 47, 210, 8)).join('') + Array.from({ length: 3 }, (_, i) => circ(684 + i * 60, 160, 32, CELL) + nucl(684 + i * 60, 160, 9)).join('') + Array.from({ length: 3 }, (_, i) => ell(684 + i * 60, 118, 30, 18, CELL)).join('') + T(745, 290, 'Transitional', { s: 24, c: C.goldD }) + T(745, 318, 'stretchy', { s: 18, c: C.muted }) }
    ], { hint: 'The gold line is the basement membrane.' }),

  'ap5-13': fig('Three types of muscle tissue', '0 0 900 330',
    '',
    [
      { label: 'Smooth', c: C.rose, detail: 'Spindle-shaped cells, one nucleus, no stripes. Involuntary. In the walls of hollow organs like the gut and blood vessels.',
        svg: [[150, 80], [110, 130], [190, 130], [150, 180], [110, 230], [190, 230]].map(([x, y]) => sh(`M${x - 80} ${y} C${x - 30} ${y - 22} ${x + 30} ${y - 22} ${x + 80} ${y} C${x + 30} ${y + 22} ${x - 30} ${y + 22} ${x - 80} ${y} Z`, '#e7a9a0') + ell(x, y, 12, 6, '#9a5d50')).join('') + T(150, 300, 'Smooth', { s: 26, c: C.rose }) },
      { label: 'Skeletal', c: C.deep, detail: 'Long cells with many nuclei and light and dark stripes (actin and myosin). Voluntary. Moves the bones.',
        svg: [80, 150, 220].map(y => rect(320, y - 28, 260, 56, 26, '#d98f80') + Array.from({ length: 15 }, (_, i) => line(`M${336 + i * 16} ${y - 24} L${336 + i * 16} ${y + 24}`, '#b9675a', 4)).join('') + [370, 470, 550].map(x => ell(x, y - 18, 12, 5, '#7a3f35')).join('')).join('') + T(450, 300, 'Skeletal', { s: 26, c: C.deep }) },
      { label: 'Cardiac', c: C.blueD, detail: 'Only in the heart. Striped, one nucleus, involuntary. Branching cells joined at intercalated disks, which keep the beat in step.',
        svg: sh('M640 60 L860 60 L860 110 L790 110 L770 150 L860 150 L860 200 L640 200 L640 150 L700 150 L720 110 L640 110 Z', '#d98f80') + Array.from({ length: 13 }, (_, i) => line(`M${652 + i * 16} 64 L${652 + i * 16} 104 M${652 + i * 16} 156 L${652 + i * 16} 196`, '#b9675a', 3)).join('') + line('M750 60 L750 110 M800 150 L800 200', '#3b5562', 7) + ell(690, 85, 12, 6, '#7a3f35') + ell(820, 175, 12, 6, '#7a3f35') + T(750, 248, 'intercalated disks', { s: 18, c: C.blueD }) + T(750, 300, 'Cardiac', { s: 26, c: C.blueD }) }
    ]),

  'ap5-14': (() => { const n = neuron(170, 170, 1); return fig('A neuron', '0 20 820 300',
    n.axon + n.myelin + n.den + n.body + n.nucleus + n.ends,
    [
      { label: 'Dendrites', c: C.plumD, detail: 'Branches that receive the stimulus and carry it to the cell body.', svg: n.den.replace(/#9c8aa2/g, '#7a6681') + T(60, 50, 'Dendrites', { s: 24, c: C.plumD }) },
      { label: 'Cell body', c: '#9c8aa2', detail: 'Contains the nucleus.', svg: ring(170, 170, 50, 50, C.plumD, 5) + T(186, 250, 'Cell body', { s: 24, c: C.plumD, a: 'start' }) },
      { label: 'Axon', c: C.goldD, detail: 'Carries the impulse away from the cell body. Neurons can be very long, so they are also called nerve fibres.', svg: arrow(260, 120, 640, 120, C.goldD, { w: 5 }) + T(450, 100, 'Axon: impulse travels this way', { s: 22, c: C.goldD }) },
      { label: 'Axon endings', c: C.deep, detail: 'Pass the signal on to the next cell.', svg: ring(762, 170, 36, 70, C.deep, 4) + T(762, 290, 'Axon endings', { s: 22, c: C.deep }) }
    ]); })()
};
