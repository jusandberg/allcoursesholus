const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f, body } = require('./lib.js');
const L = (x, y, s, c, a) => T(x, y, s, { s: 22, c, a: a || 'start' });
const NODE = 'M150 100 C260 40 520 50 600 130 C660 190 640 300 560 330 C520 344 470 330 440 290 C420 262 400 262 380 290 C340 340 220 350 160 300 C90 250 80 140 150 100 Z';
const Y = (x, y, k, rot, c) => `<g transform="translate(${x} ${y}) rotate(${rot || 0}) scale(${k || 1})">${line('M0 40 L0 0 L-30 -36 M0 0 L30 -36', c || '#5f7ba3', 7)}</g>`;

module.exports = {
  'ap15-2': fig('From plasma to lymph', '0 0 880 420',
    rect(0, 0, 880, 420, 0, '#fbf3ea') + [[200, 160], [420, 120], [640, 180], [320, 300], [560, 320]].map(([x, y]) => circ(x, y, 46, '#f0d6cc') + circ(x, y, 14, '#c9a7c0')).join(''),
    [
      { label: 'Blood capillary', c: C.red, detail: 'Blood pressure pushes some plasma out of the capillary into the spaces between cells.', svg: line('M0 40 C200 30 600 40 880 50', '#d9776a', 34) + [180, 380, 580].map(x => arrow(x, 64, x + 20, 110, C.red, { w: 4 })).join('') + L(20, 26, 'Blood capillary', '#9a3f33') },
      { label: 'Interstitial fluid', c: C.goldD, detail: 'Fluid between the cells. Most of it goes back into the capillaries; the rest must drain away or swelling (edema) develops.', svg: [[120, 230], [300, 200], [520, 220], [720, 260], [440, 380], [160, 380]].map(([x, y]) => circ(x, y, 8, '#d3a84b')).join('') + L(660, 120, 'Interstitial fluid', C.goldD) },
      { label: 'Lymphatic capillary', c: C.deep, detail: 'A dead-end tube that takes up the extra fluid. Once inside, the fluid is called lymph.', svg: line('M120 410 C300 380 520 390 860 360', '#a3b795', 40) + [260, 480, 700].map(x => arrow(x, 330, x + 10, 368, C.deep, { w: 4 })).join('') + L(560, 410, 'Lymphatic capillary', C.deep) },
      { label: 'Lacteals and chyle', c: C.blueD, detail: 'In the small intestine, lymphatic vessels called lacteals absorb fats. The milky lymph there is chyle.', svg: L(20, 250, 'In the gut: lacteals', C.blueD) + L(20, 276, 'carry milky chyle', C.blueD) }
    ]),

  'ap15-4': fig('Inside a lymph node', '40 20 680 380',
    sh(NODE, '#c9dae2') + line('M300 70 L320 180 M450 60 L430 170 M560 110 L480 200 M140 160 L260 210', '#9db7c3', 6),
    [
      { label: 'Afferent vessels', c: C.blueD, detail: 'Several lymphatic vessels bring lymph into the node at different points.', svg: [[120, 70, 170, 120], [300, 0, 310, 60], [520, 10, 500, 70], [690, 100, 620, 140]].map(([a, b, c, d]) => arrow(a, b, c, d, '#6f91a2', { w: 8 })).join('') + L(560, 40, 'In: afferent', C.blueD) },
      { label: 'Efferent vessel at the hilum', c: C.deep, detail: 'Lymph leaves through efferent vessels at the hilum, the dent on one side.', svg: arrow(410, 290, 410, 395, '#7d9378', { w: 10 }) + L(430, 380, 'Out: efferent (hilum)', C.deep) },
      { label: 'Capsule and trabeculae', c: C.goldD, detail: 'A fibrous capsule wraps the node and sends trabeculae inward, making compartments.', svg: outline(NODE, '#c7b07a', 8) + line('M300 70 L320 180 M450 60 L430 170 M560 110 L480 200 M140 160 L260 210', '#c7b07a', 6) + L(90, 340, 'Capsule', C.goldD) },
      { label: 'Nodules with germinal centres', c: C.plumD, detail: 'Lymph nodules whose germinal centres make lymphocytes.', svg: [[220, 130], [380, 110], [520, 150], [200, 260], [560, 260]].map(([x, y]) => circ(x, y, 34, '#b49ac0') + circ(x, y, 14, '#d9c2d6')).join('') + L(600, 220, 'Nodules', C.plumD) },
      { label: 'Sinuses and macrophages', c: C.rose, detail: 'Channels lined with macrophages that eat microbes by phagocytosis. Swollen nodes usually mean an infection.', svg: [[300, 230], [440, 230], [350, 160]].map(([x, y]) => sh(`M${x - 18} ${y} C${x - 18} ${y - 22} ${x + 18} ${y - 22} ${x + 22} ${y - 4} C${x + 30} ${y + 14} ${x - 10} ${y + 22} ${x - 18} ${y} Z`, '#d98f80')).join('') + L(260, 370, 'Macrophages', C.rose) }
    ]),

  'ap15-7': fig('Lymphatic organs', '30 30 440 540',
    body(),
    [
      { label: 'Tonsils', c: C.rose, detail: 'Lymphatic tissue at the back of the throat that traps germs entering by mouth and nose.', svg: ell(240, 132, 6, 8, '#d98f80') + ell(260, 132, 6, 8, '#d98f80') + L(320, 130, 'Tonsils', C.rose) },
      { label: 'Lymph nodes', c: C.blueD, detail: 'Clustered in the neck, armpits and groin. They filter lymph.', svg: [[232, 168], [268, 168], [168, 236], [332, 236], [204, 480], [296, 480], [222, 176], [278, 176]].map(([x, y]) => circ(x, y, 7, '#6f91a2')).join('') + L(350, 250, 'Nodes: neck,', C.blueD) + L(350, 276, 'armpits, groin', C.blueD) },
      { label: 'Thymus', c: C.plumD, detail: 'A two-lobed mass in the mediastinum. T cells mature here. Largest at puberty, then it shrinks.', svg: sh('M236 200 C232 230 242 250 250 250 C258 250 268 230 264 200 C258 192 242 192 236 200 Z', '#b49ac0') + L(350, 210, 'Thymus', C.plumD) },
      { label: 'Spleen', c: '#9a5d50', detail: 'Upper left abdomen; the largest mass of lymphatic tissue. Filters blood, removes worn-out red cells and platelets, makes lymphocytes and stores blood.', svg: sh('M300 296 C324 280 342 300 336 330 C330 350 310 352 304 336 C298 322 290 306 300 296 Z', '#a8665a') + L(350, 320, 'Spleen', '#9a5d50') },
      { label: 'Peyer’s patches', c: C.goldD, detail: 'In the wall of the small intestine, with macrophages that destroy bacteria.', svg: line('M214 390 C240 370 270 400 290 384 C306 372 300 410 270 414 C240 418 220 410 214 390 Z', '#e3a68c', 12) + [[230, 392], [260, 396], [284, 392]].map(([x, y]) => circ(x, y, 5, '#a68a4c')).join('') + L(320, 410, 'Peyer’s patches', C.goldD) },
      { label: 'Appendix', c: C.deep, detail: 'Helps B cells mature and makes IgA.', svg: line('M204 440 C196 452 198 464 206 470', '#8fa48a', 9) + L(60, 470, 'Appendix', C.deep) }
    ], { hint: 'The spleen is on the body’s left, which is your right.' }),

  'ap15-9': fig('An antibody', '0 40 720 420',
    rect(470, 60, 220, 300, 30, '#f7eee6') + T(580, 100, 'Five classes', { s: 22, c: C.muted }) + ['IgG', 'IgA', 'IgM', 'IgD', 'IgE'].map((s, i) => T(580, 150 + i * 44, s, { s: 26, c: C.ink })).join(''),
    [
      { label: 'Y shape: heavy and light chains', c: C.blueD, detail: 'Antibodies (immunoglobulins) are Y-shaped proteins made of two heavy and two light chains.', svg: Y(230, 260, 3.4, 0, '#6f91a2') + line('M178 230 L112 152 M282 230 L348 152', '#c3d4dc', 14) + L(40, 440, 'Heavy chains (blue), light chains (pale)', C.blueD) },
      { label: 'Antigen-binding sites', c: C.rose, detail: 'At the tips of the arms. Each fits one antigen, a foreign protein on a bacterium, virus or spore.', svg: sh('M96 120 L124 100 L140 130 L112 148 Z', '#c86d56') + sh('M320 130 L336 100 L364 120 L348 148 Z', '#c86d56') + L(120, 80, 'Antigens bind here', C.rose) },
      { label: 'Clumping', c: C.goldD, detail: 'Binding makes invaders clump together so phagocytes can eat them.', svg: L(250, 330, 'Links antigens', C.goldD, 'start') + L(250, 356, 'into clumps', C.goldD, 'start') },
      { label: 'IgG, IgA, IgM, IgD, IgE', c: C.ink, detail: 'IgG in plasma and tissue fluid (viruses, bacteria, toxins); IgA in tears, saliva and breast milk; IgM in plasma (bacteria, food antigens); IgD on B cells; IgE in allergic reactions.', svg: rect(470, 60, 220, 300, 30, 'none').replace('style="fill:none"', `fill="none" stroke="${C.ink}" stroke-width="4"`) }
    ])
};
