// Nutritional Counselling, lessons 6 to 10 (life-stage nutrition, part 2)
const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f, body, smooth, box, person } = require('./lib.js');
const L = (x, y, s, c, a, sz) => T(x, y, s, { s: sz || 22, c, a: a || 'start' });

// BMI-for-age curve with rebound around age 6
const AX = a => 100 + a * 34, AY = v => 380 - (v - 14) * 30;
const BMI = [[1, 17.6], [2, 16.6], [3, 16], [4, 15.6], [5, 15.4], [6, 15.4], [7, 15.6], [8, 16], [10, 16.8], [12, 17.8], [15, 19.6], [18, 21]];
const EARLY = [[1, 17.6], [2, 16.6], [3, 16.1], [4, 16.1], [5, 16.6], [6, 17.2], [7, 17.9], [8, 18.6], [10, 20], [12, 21.4], [15, 23.2], [18, 24.6]];

// nested influence rings
const RINGS = [['Macrosystem', 220, '#e3edf1', C.blueD], ['Environment', 160, '#f5ecd6', C.goldD], ['Personal', 100, '#f4ddd6', C.rose]];

// percentile bands for teens
const PB = [['Under 5th', 0, 5, '#cfd9e6', C.blueD], ['Healthy weight: 5th to under 85th', 5, 85, '#dbe5d8', C.deep], ['Overweight: 85th to under 95th', 85, 95, '#f2e2b6', C.goldD], ['Obese: 95th and up', 95, 100, '#f2c9c2', C.rose]];
const PX = p => p <= 5 ? 60 + p * 20 : p <= 85 ? 160 + (p - 5) * 4.25 : p <= 95 ? 500 + (p - 85) * 12 : 620 + (p - 95) * 20;

// chromosome with telomere caps
const chromo = (x, len, cap) => rect(x - 18, 200 - len / 2, 36, len, 18, '#b49ac0') + rect(x - 18, 200 - len / 2, 36, cap, 18, '#d3a84b') + rect(x - 18, 200 + len / 2 - cap, 36, cap, 18, '#d3a84b');

module.exports = {
  'l6-b2': fig('Sharing the job of feeding', '0 0 820 400',
    line('M410 40 L410 330', '#dfe4de', 3),
    [
      { label: 'Parent: what', c: C.deep, detail: 'Parents decide what food is offered.', svg: person(120, 300, .9, '#a3b795') + box(270, 90, 170, 50, '#e4ecdf', 'What', C.deep, 24) },
      { label: 'Parent: when and where', c: C.deep, detail: 'Parents decide when and where food is offered: regular times, few distractions like TV.', svg: box(270, 160, 170, 50, '#e4ecdf', 'When', C.deep, 24) + box(270, 230, 170, 50, '#e4ecdf', 'Where', C.deep, 24) },
      { label: 'Child: how much', c: C.goldD, detail: 'Children decide how much to eat, and get to practise feeding themselves.', svg: person(690, 300, .6, '#e6c98a') + box(540, 160, 190, 60, '#f5ecd6', 'How much', '#8a6f35', 26) },
      { label: '1 tablespoon per year', c: C.rose, detail: 'A handy toddler portion guide: 1 tablespoon of each food per year of age. A 3-year-old: about 3 tablespoons.', svg: [0, 1, 2].map(i => ell(520 + i * 50, 300, 20, 10, '#e6a99c')).join('') + L(500, 360, '3 years = 3 tbsp', C.rose) },
      { label: 'Pressure backfires', c: C.plumD, detail: 'Keep offering new foods calmly; many tries may be needed. Pressure, bribes, restricting treats and using food as a reward all backfire.', svg: L(60, 380, 'Offer calmly, many times; no pressure or bribes', C.plumD) }
    ], { hint: 'Parents choose what, when and where. Children choose how much.' }),

  'l6-b3': fig('Simple guides for young children', '0 0 820 340',
    '',
    [
      { label: 'Fibre: age + 5', c: C.deep, detail: 'A simple fibre guide is the child’s age plus 5 g a day: 10 g for a 5-year-old. Age plus 15 g or more may be too much bulk.', svg: [1, 2, 3, 4, 5].map((a, i) => rect(60 + i * 60, 260 - (a + 5) * 14, 40, (a + 5) * 14, 8, '#a3b795') + T(80 + i * 60, 290, String(a), { s: 18, c: C.muted }) + T(80 + i * 60, 250 - (a + 5) * 14, (a + 5) + 'g', { s: 16, c: C.deep })).join('') + L(60, 330, 'Age → grams of fibre', C.deep) },
      { label: 'Fat: 30–40% at 1–3', c: C.goldD, detail: 'Fat matters for growth: 30–40% of Calories for ages 1–3, and 25–35% for ages 4–18.', svg: rect(430, 80, 60, 180, 10, '#f5ecd6') + rect(430, 260 - 180 * .4, 60, 180 * .1, 0, '#e6c98a') + T(460, 60, '1–3: 30–40%', { s: 18, c: C.goldD }) + rect(520, 80, 60, 180, 10, '#f5ecd6') + rect(520, 260 - 180 * .35, 60, 180 * .1, 0, '#e6c98a') + T(550, 300, '4–18: 25–35%', { s: 18, c: C.goldD }) },
      { label: 'Iron: 7 then 10 mg', c: C.rose, detail: 'The iron RDA is 7 mg a day at ages 1–3 and 10 mg at 4–8. Iron, vitamin D and calcium are often low.', svg: box(700, 110, 170, 54, '#f4ddd6', '1–3: 7 mg', '#8a3f33', 22) + box(700, 180, 170, 54, '#f4ddd6', '4–8: 10 mg', '#8a3f33', 22) },
      { label: 'Milk: under 24 oz', c: C.blueD, detail: 'More than 24 oz of milk a day can crowd out iron-rich foods. Too much juice can cause diarrhea.', svg: rect(670, 250, 60, 70, 12, '#eef3f5') + L(740, 296, '≤ 24 oz', C.blueD) }
    ]),

  'l7-b1': fig('BMI rebound', '40 20 760 430',
    line('M100 380 L740 380 M100 380 L100 40', C.muted, 3) + T(740, 436, 'Age (years) →', { s: 18, c: C.muted, a: 'end' }) + T(110, 40, 'BMI', { s: 18, c: C.muted, a: 'start' }) + [2, 4, 6, 8, 10, 12, 15, 18].map(a => T(AX(a), 404, String(a), { s: 16, c: C.muted })).join(''),
    [
      { label: 'Body fat drops', c: C.blueD, detail: 'Body fat drops through the preschool years.', svg: line(smooth(BMI.slice(0, 6).map(([a, v]) => [AX(a), AY(v)])), C.blueD, 6) + L(AX(1), AY(18.4), 'Drops', C.blueD) },
      { label: 'Rebound around 6', c: C.deep, detail: 'It reaches its lowest point, then rises again, usually around age 6. This normal rise is the BMI (adiposity) rebound.', svg: line(smooth(BMI.map(([a, v]) => [AX(a), AY(v)])), C.deep, 5) + circ(AX(5.5), AY(15.35), 10, '#d3a84b') + L(AX(5.5), AY(14.4), 'Rebound ~6', C.deep, 'middle') },
      { label: 'Early rebound', c: C.rose, detail: 'A rebound before age five is linked to a higher risk of overweight and obesity later.', svg: line(smooth(EARLY.map(([a, v]) => [AX(a), AY(v)])), C.rose, 5, 'stroke-dasharray="10 8"') + circ(AX(3.5), AY(16), 10, '#c86d56') + L(AX(10), AY(21.4), 'Early rebound', C.rose) }
    ], { hint: 'You can see this on BMI-for-age charts.' }),

  'l7-b2': fig('Parents’ feeding style', '0 0 820 340',
    '',
    [
      { label: 'Controlling backfires', c: C.rose, detail: 'Restricting food or pressuring children to eat makes them less able to regulate how much they eat, and more likely to become overweight.', svg: rect(30, 40, 360, 260, 24, '#f6e6e2') + person(130, 260, .8, '#d9a092') + person(270, 260, .5, '#e6c98a') + arrow(170, 140, 230, 170, C.rose, { w: 5 }) + L(210, 80, '“Finish your plate”', C.rose, 'middle') + L(210, 330, 'Pressure and restriction', C.rose, 'middle') },
      { label: 'Responsive works better', c: C.deep, detail: 'Offer healthy food at regular times, eat together as a family, and let children decide how much.', svg: rect(430, 40, 360, 260, 24, '#e9f0e6') + person(520, 260, .8, '#a3b795') + person(640, 260, .5, '#e6c98a') + person(730, 260, .7, '#a3bcc8') + ell(630, 270, 150, 18, '#d9c9b0') + L(610, 330, 'Eat together; child decides how much', C.deep, 'middle') },
      { label: 'Move more, less screen', c: C.blueD, detail: 'More activity and less screen time also help prevent overweight.', svg: L(610, 80, 'More activity, less screen time', C.blueD, 'middle') }
    ]),

  'l8-b1': fig('Three levels that shape teen eating', '40 0 760 460',
    RINGS.map(([, r, c]) => circ(260, 230, r, c)).join('') + person(260, 280, .55, '#d9a092'),
    [
      { label: 'Personal', c: C.rose, detail: 'Family and friends, food likes, role models, confidence and body changes.', svg: ring(260, 230, 100, 100, C.rose, 5) + L(530, 120, 'Personal', C.rose) + L(530, 146, 'family, friends, likes,', C.muted, 'start', 18) + L(530, 168, 'role models, confidence', C.muted, 'start', 18) },
      { label: 'Environment', c: C.goldD, detail: 'Home, school, fast-food places and stores.', svg: ring(260, 230, 160, 160, C.goldD, 5) + L(530, 240, 'Environment', C.goldD) + L(530, 266, 'home, school, fast food, stores', C.muted, 'start', 18) },
      { label: 'Macrosystem', c: C.blueD, detail: 'How food is produced and sold, plus media and advertising.', svg: ring(260, 230, 220, 220, C.blueD, 5) + L(530, 350, 'Macrosystem', C.blueD) + L(530, 376, 'food industry, media, ads', C.muted, 'start', 18) },
      { label: 'Snacks and drinks', c: C.plumD, detail: 'Snacks are about a quarter of teens’ daily energy. Soft drinks are the top source of energy and added sugar in teen diets.', svg: L(500, 430, 'Snacks ≈ ¼ of daily energy', C.plumD) }
    ], { hint: 'Good programs work on all three levels.' }),

  'l8-b4': fig('BMI-for-age percentiles for teens', '30 0 760 260',
    line(`M${PX(0)} 170 L${PX(100)} 170`, C.muted, 2) + [0, 5, 85, 95, 100].map(p => T(PX(p), 200, p === 0 ? '0' : p + 'th', { s: 16, c: C.muted })).join(''),
    PB.map(([n, a, b, c, tc], i) => ({ label: n.split(':')[0], c: tc, detail: n + (i === 2 ? '. Older guides call this “at risk for overweight”.' : '.') + (i === 3 ? ' Up to 90% of overweight teens stay overweight as adults, so early support matters.' : ''),
      svg: rect(PX(a), 100, PX(b) - PX(a), 60, 0, c) + T((PX(a) + PX(b)) / 2, i === 0 ? 250 : 80, n.split(':')[0], { s: 18, c: tc }) })).map((it, i) => { if (i === 3) it.svg = it.svg.replace(/y="80"/, 'y="250"'); return it; }),
    { hint: 'For teens, BMI is compared with others of the same age and sex.' }),

  'l9-b3': fig('Where fat is stored', '0 0 840 400',
    '',
    [
      { label: 'Visceral (belly) fat', c: C.rose, detail: 'Fat stored deep in the belly, around the organs. Linked to more health risks. After menopause, fat shifts toward the belly.', svg: ell(220, 200, 170, 140, '#fbf3e6') + ell(220, 200, 150, 122, '#f3d9cb') + [[170, 170], [260, 160], [200, 240], [280, 230], [150, 230]].map(([x, y]) => circ(x, y, 26, '#ebd08c')).join('') + ell(215, 200, 34, 26, '#d48a76') + L(220, 370, 'Visceral: deep, around organs', C.rose, 'middle') },
      { label: 'Subcutaneous fat', c: C.goldD, detail: 'Fat under the skin, and on the hips and thighs. Not linked to the same risks.', svg: ell(620, 200, 170, 140, '#f5e1a8') + ell(620, 200, 136, 108, '#f3d9cb') + ell(615, 200, 34, 26, '#d48a76') + L(620, 370, 'Subcutaneous: under the skin', C.goldD, 'middle') },
      { label: 'After menopause', c: C.plumD, detail: 'The drop in estrogen speeds up bone loss, shifts fat toward the belly and raises heart disease risk. Calcium, vitamin D, weight-bearing activity and heart-healthy eating matter more.', svg: L(420, 40, 'Less estrogen: bone loss, belly fat, heart risk', C.plumD, 'middle') }
    ], { hint: 'Cross-sections of the abdomen.' }),

  'l10-b1': fig('Telomeres shorten with each division', '0 60 820 300',
    arrow(160, 200, 230, 200, C.light, { w: 4 }) + arrow(340, 200, 410, 200, C.light, { w: 4 }) + arrow(520, 200, 590, 200, C.light, { w: 4 }),
    [
      { label: 'Telomeres', c: C.goldD, detail: 'Caps on the ends of chromosomes, a bit like the plastic tips on shoelaces.', svg: chromo(100, 220, 44) + L(100, 330, 'Long caps', C.goldD, 'middle') },
      { label: 'Shorter each division', c: C.plumD, detail: 'They get shorter every time a cell divides.', svg: chromo(285, 200, 28) + chromo(465, 186, 16) + L(375, 330, 'Shorter each time', C.plumD, 'middle') },
      { label: 'Hayflick limit', c: C.rose, detail: 'Human cells divide only about 40–60 times, then can no longer divide. This is one programmed aging theory.', svg: chromo(650, 176, 4) + line('M700 120 L760 280 M760 120 L700 280', C.rose, 5) + L(650, 330, '40–60 divisions', C.rose, 'middle') },
      { label: 'Damage theories', c: C.blueD, detail: 'Other theories blame damage that builds up: free radicals harming cells, and proteins cross-linking when glucose is high.', svg: L(30, 100, 'Also: free radicals, cross-linking', C.blueD) }
    ]),

  'l10-b3': fig('Signs of dehydration in older adults', '0 0 820 420',
    circ(260, 210, 140, '#f6ece2') + line('M200 186 q14 -10 28 0 M292 186 q14 -10 28 0', '#8a958c', 4),
    [
      { label: 'Confusion', c: C.plumD, detail: 'Confusion can be a sign of dehydration.', svg: Array.from({ length: 3 }, (_, i) => circ(200 + i * 50, 60, 10, '#b49ac0')).join('') + L(540, 70, 'Confusion', C.plumD) + line('M530 64 L310 70', C.plumD, 2) },
      { label: 'Sunken eyes', c: C.blueD, detail: 'Sunken eyes.', svg: ell(214, 194, 26, 16, '#c9b9c4', 'opacity:.6') + ell(306, 194, 26, 16, '#c9b9c4', 'opacity:.6') + L(540, 170, 'Sunken eyes', C.blueD) + line('M530 164 L336 192', C.blueD, 2) },
      { label: 'Dry, furrowed tongue', c: C.rose, detail: 'A dry or furrowed tongue.', svg: sh('M226 262 C230 300 290 300 294 262 Z', '#d98f80') + line('M260 268 L260 290', '#b9675a', 3) + L(540, 280, 'Dry, furrowed tongue', C.rose) + line('M530 274 L300 276', C.rose, 2) },
      { label: 'Slurred speech, weak limbs', c: C.goldD, detail: 'Slurred speech and weakness in the arms or legs.', svg: L(540, 370, 'Slurred speech,', C.goldD) + L(540, 398, 'weak arms or legs', C.goldD) },
      { label: 'Six or more glasses', c: C.deep, detail: 'Total body water drops and thirst is less reliable with age. Six or more glasses of fluid a day helps.', svg: Array.from({ length: 6 }, (_, i) => rect(40 + i * 40, 380, 28, 34, 6, '#cfe0e8')).join('') }
    ], { hint: 'Thirst becomes less reliable with age.' })
};
