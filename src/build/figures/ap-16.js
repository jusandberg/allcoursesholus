const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f } = require('./lib.js');
const L = (x, y, s, c, a) => T(x, y, s, { s: 22, c, a: a || 'start' });

// tooth with two roots, set in gum and bone
const ENAMEL = 'M220 90 C216 40 300 44 320 66 C340 44 424 40 420 90 C426 150 420 200 410 236 L230 236 C220 200 214 150 220 90 Z';
const DENTIN = 'M240 104 C240 76 300 82 320 96 C340 82 400 76 400 104 C404 160 402 200 396 240 C390 330 382 420 364 500 C354 522 336 514 336 492 L330 300 L310 300 L304 492 C304 514 286 522 276 500 C258 420 250 330 244 240 C238 200 236 160 240 104 Z';
const PULP = 'M282 130 C290 118 350 118 358 130 L352 240 L346 480 L338 480 L330 270 L310 270 L302 480 L294 480 L288 240 Z';

// stomach, front view: the body's left (fundus side) is on the viewer's right
const ST = 'M300 120 C320 60 440 40 470 110 C510 200 500 330 430 400 C360 460 250 450 200 404 L140 392 L140 350 C200 360 280 360 330 300 C360 260 352 180 340 136 Z';
const clipS = `<clipPath id="stomclip"><path d="${ST}"></path></clipPath>`;
const region = (d, c) => `<g clip-path="url(#stomclip)">${sh(d, c)}</g>`;
const RG = { cardia: 'M280 90 L380 90 L380 190 L280 190 Z', fundus: 'M380 0 L560 0 L560 170 L380 170 Z', body: 'M240 170 L560 170 L560 480 L240 480 Z M330 190 L380 190 L380 170 L330 170 Z', pylorus: 'M100 300 L240 300 L240 480 L100 480 Z' };

// gut wall cross-section
const TUN = [['Serosa', 196, '#efe6cf'], ['Muscularis', 178, '#d98f80'], ['Submucosa', 124, '#f3dcc9'], ['Mucosa', 96, '#e8a6a0']];
const mucosaFold = (() => { let d = ''; for (let i = 0; i <= 120; i++) { const a = i / 120 * 2 * Math.PI, r = 68 + 10 * Math.sin(a * 12); d += (i ? 'L' : 'M') + f(400 + r * Math.cos(a)) + ' ' + f(230 + r * Math.sin(a)); } return d + 'Z'; })();

// villi
const villus = (x, w, h, base) => sh(`M${x - w} ${base} L${x - w} ${base - h + w} C${x - w} ${base - h - w * .4} ${x + w} ${base - h - w * .4} ${x + w} ${base - h + w} L${x + w} ${base} Z`, '#efc0b0');

module.exports = {
  'ap16-3': fig('The four tunics of the gut wall', '170 20 600 420',
    TUN.map(([, r, c]) => circ(400, 230, r, c)).join('') + ring(400, 230, 150, 150, '#c9786a', 3) + sh(mucosaFold, '#f6efe6'),
    [
      { label: 'Mucosa (innermost)', c: C.rose, detail: 'A mucous membrane: epithelium, the lamina propria and the muscularis mucosa. It protects, secretes and absorbs.', svg: ring(400, 230, 82, 82, '#b9675a', 14) + L(560, 70, 'Mucosa', C.rose) + line('M556 64 L460 180', C.rose, 2) },
      { label: 'Submucosa', c: '#a68a4c', detail: 'Loose connective tissue that binds the mucosa to the muscle layer.', svg: ring(400, 230, 110, 110, '#e0bc8a', 20) + L(600, 140, 'Submucosa', '#8a6f35') + line('M596 134 L500 190', '#8a6f35', 2) },
      { label: 'Muscularis', c: '#9a3f33', detail: 'Inner circular and outer longitudinal smooth muscle that churn and push food along.', svg: ring(400, 230, 136, 136, '#b9675a', 22) + ring(400, 230, 166, 166, '#a85a4e', 16) + L(620, 260, 'Muscularis', '#9a3f33') + L(620, 286, 'circular + longitudinal', C.muted) + line('M616 252 L556 240', '#9a3f33', 2) },
      { label: 'Serosa (outermost)', c: C.goldD, detail: 'The visceral peritoneum. An extension of it forms the mesentery.', svg: ring(400, 230, 190, 190, C.goldD, 10) + L(600, 400, 'Serosa', C.goldD) + line('M596 392 L540 360', C.goldD, 2) },
      { label: 'Lumen', c: C.muted, detail: 'The open centre where food passes.', svg: T(400, 238, 'Lumen', { s: 22, c: C.muted }) }
    ], { hint: 'From the inside out: mucosa, submucosa, muscularis, serosa.' }),

  'ap16-6': fig('Inside a tooth', '120 20 460 540',
    rect(120, 300, 460, 260, 0, '#efe6cf') + sh('M120 236 C180 220 210 250 230 260 L410 260 C430 250 460 220 580 236 L580 320 L120 320 Z', '#e9a9a8')
      + sh(ENAMEL, '#fbf8f0') + sh(DENTIN, '#f0e2c0') + sh(PULP, '#e7a9a0') + shine(260, 80, 16, 8),
    [
      { label: 'Crown and enamel', c: C.blueD, detail: 'The crown sits above the gum. Its enamel is the hardest substance in the body.', svg: outline(ENAMEL, C.blueD, 5) + L(440, 80, 'Enamel', C.blueD) },
      { label: 'Dentin', c: C.goldD, detail: 'The layer under the enamel that makes up most of the tooth, around the pulp.', svg: outline(DENTIN, C.goldD, 5) + L(440, 330, 'Dentin', '#8a6f35') },
      { label: 'Pulp and root canal', c: C.rose, detail: 'The pulp cavity holds vessels and nerves; root canals lead down to the apical foramen, where they enter.', svg: outline(PULP, '#b9475a', 4) + L(440, 180, 'Pulp', C.rose) },
      { label: 'Neck and gum', c: '#b35d6c', detail: 'The neck is where the crown meets the root, at the gum line.', svg: line('M220 250 L420 250', '#b35d6c', 5, 'stroke-dasharray="8 6"') + L(440, 256, 'Neck (gum line)', '#b35d6c') },
      { label: 'Root and cementum', c: '#8a6f35', detail: 'One to three roots hold the tooth in the jaw. Cementum covers the root and attaches it to the periodontal ligament.', svg: line('M246 300 C252 380 262 440 278 500 M394 300 C388 380 378 440 364 500', '#a68a4c', 6) + L(440, 440, 'Root, cementum', '#8a6f35') },
      { label: 'Apical foramen', c: C.red, detail: 'The opening at the tip of each root where vessels and nerves enter.', svg: circ(298, 486, 9, '#c8524a') + circ(342, 486, 9, '#c8524a') + L(440, 510, 'Apical foramen', C.red) }
    ], { hint: 'Adults have 32 permanent teeth; children have 20.' }),

  'ap16-8': fig('Parts of the stomach', '40 0 560 480',
    clipS + line('M320 0 L320 126', '#e3a68c', 34) + line('M150 372 L60 372 L50 460', '#e3a68c', 34) + sh(ST, '#efbfae'),
    [
      { label: 'Cardia', c: C.goldD, detail: 'Around the gastroesophageal sphincter, where food enters.', svg: region(RG.cardia, '#e6c98a') + ring(320, 124, 20, 8, '#8a6f35', 4) + L(130, 110, 'Cardia', '#8a6f35') + line('M210 104 L296 128', '#8a6f35', 2) },
      { label: 'Fundus', c: C.plumD, detail: 'The rounded top, bulging up beside where the esophagus enters.', svg: region(RG.fundus, '#c4b0cc') + L(500, 50, 'Fundus', C.plumD) },
      { label: 'Body', c: C.rose, detail: 'The large middle part.', svg: region(RG.body, '#e09c88') + L(380, 300, 'Body', '#8a3f33', 'middle') },
      { label: 'Pylorus', c: C.blueD, detail: 'The narrow lower part. The pyloric sphincter opens into the duodenum.', svg: region(RG.pylorus, '#a9c0cb') + ring(144, 372, 8, 22, '#3b5562', 5) + L(150, 460, 'Pylorus', C.blueD, 'middle') },
      { label: 'Rugae', c: '#9a5d50', detail: 'Folds in the lining of an empty stomach that smooth out as it fills.', svg: line('M260 400 C300 380 340 420 380 390 C410 370 430 380 450 340 M300 330 C340 340 370 300 410 300 C440 300 460 260 470 220 M380 200 C400 180 430 200 440 150', '#c9786a', 5) + L(440, 470, 'Rugae (folds)', '#9a5d50') }
    ], { hint: 'Food enters at the top, from the esophagus, and leaves through the pylorus.' }),

  'ap16-11': fig('Villi of the small intestine', '0 0 780 480',
    rect(0, 400, 780, 80, 0, '#f3dcc9') + villus(140, 46, 300, 410) + villus(620, 46, 280, 410) + villus(380, 70, 360, 410),
    [
      { label: 'Villi', c: C.rose, detail: '4 to 5 million finger-like villi, on top of folds (plicae), give a huge surface. About 80% of nutrient absorption happens in the small intestine.', svg: outline('M310 410 L310 120 C310 22 450 22 450 120 L450 410', C.rose, 5) + L(470, 90, 'Villus', C.rose) },
      { label: 'Microvilli', c: C.goldD, detail: 'Tiny projections on each lining cell that add even more surface.', svg: Array.from({ length: 28 }, (_, i) => { const a = Math.PI + i / 27 * Math.PI, x = 380 + 74 * Math.cos(a), y = 120 + 74 * Math.sin(a); return line(`M${f(x)} ${f(y)} L${f(x + 14 * Math.cos(a))} ${f(y + 14 * Math.sin(a))}`, '#c7b07a', 3); }).join('') + L(470, 40, 'Microvilli', C.goldD) },
      { label: 'Capillaries', c: C.red, detail: 'Pick up sugars and amino acids and carry them to the blood.', svg: line('M330 400 L330 140 C330 90 430 90 430 140 L430 400', '#c8524a', 6) + line('M340 200 C360 190 400 220 420 200 M340 260 C360 250 400 280 420 260 M340 320 C360 310 400 340 420 320', '#d97a70', 3) + L(470, 320, 'Capillaries:', C.red) + L(470, 346, 'sugars, amino acids', C.muted) },
      { label: 'Lacteal', c: C.deep, detail: 'A small lymphatic vessel in the centre of each villus that picks up fats.', svg: line('M380 400 L380 150', '#c7d58f', 16) + L(150, 470, 'Lacteal: fats', C.deep) },
      { label: 'Goblet cells', c: C.blueD, detail: 'Secrete alkaline mucus to protect the lining and help neutralize acidic chyme.', svg: [[120, 220], [160, 300], [610, 220], [640, 320]].map(([x, y]) => ell(x, y, 12, 18, '#d7e6ec')).join('') + L(30, 80, 'Goblet cells', C.blueD) }
    ])
};
