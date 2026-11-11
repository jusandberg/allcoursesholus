// Nutritional Counselling, lessons 1 to 5 (life-stage nutrition, part 1)
const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f, body, smooth, box, person } = require('./lib.js');
const L = (x, y, s, c, a, sz) => T(x, y, s, { s: sz || 22, c, a: a || 'start' });

// DRI bell curve: x = intake, y = share of people
const BX0 = 80, BX1 = 760, BY = 360, mu = 360, sd = 80;
const g = x => BY - 250 * Math.exp(-((x - mu) ** 2) / (2 * sd * sd));
const bell = smooth(Array.from({ length: 35 }, (_, i) => { const x = BX0 + i * 20; return [x, g(x)]; }));
const vline = (x, c, top) => line(`M${x} ${BY} L${x} ${top}`, c, 4);

// menstrual cycle hormone curves, 28 days
const DX = d => 70 + (d - 1) * 25;
const curve = (pts, c, w) => line(smooth(pts.map(([d, v]) => [DX(d), 330 - v * 2.4])), c, w || 5);

// placenta
const fence = Array.from({ length: 9 }, (_, i) => rect(416, 50 + i * 40, 18, 30, 6, '#d7b9b0')).join('');

// IOM weight gain bars (lb)
const GAIN = [['Underweight', 'BMI under 18.5', 28, 40, C.blueD], ['Normal weight', '18.5–24.9', 25, 35, C.deep], ['Overweight', '25–29.9', 15, 25, C.goldD], ['Obese', '30 or more', 11, 20, C.rose]];
const GX = lb => 300 + lb * 11;

// breast: alveoli and branching ducts toward the nipple (on the right)
const alv = (x, y) => [[0, 0], [16, -10], [16, 10], [30, 0], [8, 16], [8, -16]].map(([a, b]) => circ(x + a, y + b, 11, '#f2c6bc')).join('');
const DUCTS = 'M700 240 C600 240 520 230 440 200 C380 180 320 140 250 120 M440 200 C380 210 320 230 250 240 M440 200 C390 240 330 300 260 340 M560 238 C500 280 430 330 380 380';

// growth chart percentiles
const GC = (p, c) => line(smooth(Array.from({ length: 13 }, (_, i) => [100 + i * 50, 380 - (40 + i * 22 - i * i * .9) - p])), c, 4);

module.exports = {
  'l1-b2': fig('Nutrient intake standards', '40 20 780 400',
    line(`M${BX0} ${BY} L${BX1} ${BY}`, C.muted, 3) + T(BX1, BY + 34, 'Intake →', { s: 18, c: C.muted, a: 'end' }) + T(BX0, 60, 'Number of people', { s: 18, c: C.muted, a: 'start' }) + sh(bell + ` L${BX1} ${BY} L${BX0} ${BY} Z`, '#dbe5d8') + line(bell, C.sage, 4),
    [
      { label: 'EAR', c: C.blueD, detail: 'Estimated Average Requirement: meets the needs of half the healthy people in a group. Used to judge whether a group’s intake is adequate.', svg: vline(mu, C.blueD, 100) + sh(bell.split(' C').slice(0, 15).join(' C') + ` L${mu} ${BY} L${BX0} ${BY} Z`, '#a3bcc8', 'opacity:.6') + L(mu - 8, 92, 'EAR: half', C.blueD, 'end') },
      { label: 'RDA', c: C.deep, detail: 'Recommended Dietary Allowance: set higher, to cover nearly all healthy people (about 97–98%).', svg: vline(mu + 2 * sd, C.deep, 150) + L(mu + 2 * sd + 8, 160, 'RDA: 97–98%', C.deep) },
      { label: 'AI', c: C.goldD, detail: 'Adequate Intake: used when there isn’t enough evidence to set an RDA.', svg: line(`M${mu + 2 * sd - 30} 120 L${mu + 2 * sd + 30} 120`, C.goldD, 4, 'stroke-dasharray="6 6"') + L(mu + 2 * sd - 40, 126, 'AI: when no RDA', C.goldD, 'end') },
      { label: 'UL', c: C.rose, detail: 'Tolerable Upper Intake Level: the highest daily intake unlikely to cause harm. A safety limit, not a target.', svg: rect(mu + 4.2 * sd - 4, 90, BX1 - (mu + 4.2 * sd) + 4, BY - 90, 0, '#e7a9a0', 'opacity:.45') + vline(mu + 4.2 * sd, C.rose, 90) + L(mu + 4.2 * sd - 8, 84, 'UL: safety limit', C.rose, 'end') },
      { label: '% Daily Value', c: C.plumD, detail: 'Labels use a separate set of reference amounts, Daily Values. The % DV shows how much of that amount one serving gives.', svg: L(BX0 + 10, 400, 'Labels use Daily Values (% DV), a separate set', C.plumD) }
    ], { hint: 'The curve shows how needs vary from person to person.' }),

  'l1-b3': fig('Calories per gram', '0 0 820 380',
    '',
    [
      { label: 'Carbohydrate: 4', c: C.goldD, detail: 'Carbohydrate gives 4 Calories per gram. Adults: 45–65% of Calories.', svg: rect(60, 230, 150, 100, 18, '#ebd08c') + Array.from({ length: 4 }, (_, i) => circ(90 + i * 30, 200, 12, '#d3a84b')).join('') + T(135, 290, '4 Cal/g', { s: 28, c: '#5f4a1a', halo: false }) + L(135, 362, 'Carbohydrate', C.goldD, 'middle') + L(135, 120, '45–65%', C.muted, 'middle') },
      { label: 'Protein: 4', c: C.rose, detail: 'Protein gives 4 Calories per gram. Adults: 10–35% of Calories.', svg: rect(250, 230, 150, 100, 18, '#e6a99c') + Array.from({ length: 4 }, (_, i) => circ(280 + i * 30, 200, 12, '#c86d56')).join('') + T(325, 290, '4 Cal/g', { s: 28, c: '#6a2a20', halo: false }) + L(325, 362, 'Protein', C.rose, 'middle') + L(325, 120, '10–35%', C.muted, 'middle') },
      { label: 'Fat: 9', c: C.plumD, detail: 'Fat gives 9 Calories per gram, more than twice as much. Adults: 20–35% of Calories.', svg: rect(440, 230, 150, 100, 18, '#d5c4da') + Array.from({ length: 9 }, (_, i) => circ(462 + (i % 5) * 26, i < 5 ? 200 : 170, 11, '#9c8aa2')).join('') + T(515, 290, '9 Cal/g', { s: 28, c: '#3e2f46', halo: false }) + L(515, 362, 'Fat', C.plumD, 'middle') + L(515, 120, '20–35%', C.muted, 'middle') },
      { label: 'Alcohol 7, fibre 2', c: C.muted, detail: 'Alcohol gives 7 Calories per gram and fibre about 2.', svg: rect(630, 250, 70, 80, 16, '#e6e2da') + T(665, 300, '7', { s: 26, c: C.ink, halo: false }) + rect(715, 270, 70, 60, 16, '#dfe8d9') + T(750, 308, '2', { s: 26, c: C.ink, halo: false }) + L(665, 362, 'Alcohol', C.muted, 'middle') + L(750, 362, 'Fibre', C.muted, 'middle') },
      { label: 'Working it out', c: C.ink, detail: 'Calories = grams × factor, added up. Share of Calories from a nutrient = its Calories ÷ total × 100.', svg: L(60, 50, 'grams × Cal/g = Calories', C.ink, 'start', 26) + L(60, 84, 'its Calories ÷ total × 100 = % of Calories', C.muted, 'start', 20) }
    ], { hint: 'Dots show Calories in one gram. Percentages are the adult ranges (AMDR).' }),

  'l1-b8': fig('Four parts of nutrition assessment', '0 0 840 300',
    '',
    [
      { label: 'Clinical', c: C.rose, detail: 'Physical signs: skin, hair, eyes, mouth and overall health history.', svg: circ(110, 120, 70, '#f4ddd6') + person(110, 170, .5, '#e7a9a0') + L(110, 240, 'Clinical', C.rose, 'middle', 24) + L(110, 268, 'physical signs', C.muted, 'middle', 18) },
      { label: 'Dietary', c: C.goldD, detail: 'What the person eats: recalls, records and food frequency questionnaires.', svg: circ(320, 120, 70, '#f5ecd6') + circ(320, 120, 40, '#fff') + circ(306, 110, 10, '#8fa48a') + circ(330, 128, 12, '#d3a84b') + ell(334, 104, 10, 6, '#c86d56') + L(320, 240, 'Dietary', C.goldD, 'middle', 24) + L(320, 268, 'what they eat', C.muted, 'middle', 18) },
      { label: 'Anthropometric', c: C.blueD, detail: 'Body measurements: weight, height, BMI, waist and growth.', svg: circ(530, 120, 70, '#e3edf1') + rect(500, 90, 60, 70, 10, '#a3bcc8') + line('M505 100 L555 100', '#fff', 3) + line('M530 120 L546 106', '#3b5562', 4) + L(530, 240, 'Anthropometric', C.blueD, 'middle', 24) + L(530, 268, 'body measurements', C.muted, 'middle', 18) },
      { label: 'Biochemical', c: C.plumD, detail: 'Lab tests of blood or urine, such as iron or glucose levels.', svg: circ(740, 120, 70, '#ece2ef') + rect(728, 70, 24, 90, 10, '#fff') + rect(728, 116, 24, 44, 10, '#c8524a') + L(740, 240, 'Biochemical', C.plumD, 'middle', 24) + L(740, 268, 'lab tests', C.muted, 'middle', 18) },
      { label: 'All four together', c: C.deep, detail: 'You need all four. One measure, like normal weight or good iron levels, doesn’t prove someone is well nourished.', svg: line('M180 120 L250 120 M390 120 L460 120 M600 120 L670 120', C.deep, 4, 'stroke-dasharray="4 8"') }
    ], { hint: 'One measure alone can’t show that someone is well nourished.' }),

  'l2-b2': fig('Hormones across the cycle', '20 0 800 420',
    rect(DX(1), 40, DX(15) - DX(1), 300, 0, '#f6efe6') + rect(DX(15), 40, DX(29) - DX(15), 300, 0, '#eef2ed') + line(`M${DX(1)} 330 L${DX(29)} 330`, C.muted, 3)
      + [1, 7, 14, 21, 28].map(d => T(DX(d), 360, String(d), { s: 18, c: C.muted })).join('') + T(40, 360, 'Day', { s: 18, c: C.muted, a: 'start' }),
    [
      { label: 'Follicular phase', c: C.goldD, detail: 'The first half of the cycle, starting on the first day of bleeding. FSH helps eggs mature in the ovary.', svg: L((DX(1) + DX(14)) / 2, 400, 'Follicular phase', C.goldD, 'middle') },
      { label: 'FSH', c: C.blueD, detail: 'Follicle-stimulating hormone from the pituitary. It helps eggs mature and peaks just before ovulation.', svg: curve([[1, 30], [5, 40], [10, 30], [13, 60], [14, 75], [15, 40], [20, 20], [28, 30]], '#5f8798') + L(DX(5), 220, 'FSH', C.blueD) },
      { label: 'LH surge', c: C.rose, detail: 'Luteinizing hormone surges just before ovulation and releases the egg.', svg: curve([[1, 25], [10, 30], [12, 50], [14, 115], [15, 45], [20, 25], [28, 22]], '#c86d56') + L(DX(14) + 10, 54, 'LH surge', C.rose) },
      { label: 'Ovulation, day 14', c: C.plumD, detail: 'Usually on day 14, when FSH and LH peak.', svg: line(`M${DX(14)} 40 L${DX(14)} 330`, '#7a6681', 3, 'stroke-dasharray="6 6"') + circ(DX(14), 330, 10, '#eab3c7') },
      { label: 'Luteal phase', c: C.deep, detail: 'The last 14 days. If there is no pregnancy, the uterus makes prostaglandins, which make it contract and shed its lining (and cause cramps).', svg: L((DX(15) + DX(28)) / 2, 400, 'Luteal phase (14 days)', C.deep, 'middle') }
    ], { hint: 'The first day of bleeding is day 1.' }),

  'l2-b6': fig('Metabolic syndrome: any three of five', '20 20 560 560',
    body({}).replace(/<path d="M160 515[\s\S]*?<\/path> <path d="M340 515[\s\S]*?<\/path>/, '') .replace(/^/, '<g transform="translate(60 0) scale(.9)">') + '</g>',
    [
      { label: 'Waist', c: C.goldD, detail: 'Over 40 inches in men or 35 inches in women.', svg: ell(285, 400, 120, 20, 'none').replace('style="fill:none"', `fill="none" stroke="${C.goldD}" stroke-width="6"`) + L(420, 410, 'Waist', C.goldD) + L(420, 436, 'M >40 in, W >35 in', C.muted, 'start', 18) },
      { label: 'Triglycerides', c: C.rose, detail: '150 mg/dL or more.', svg: box(110, 120, 170, 60, '#f4ddd6', 'TG ≥150', '#8a3f33') + line('M196 120 L240 260', C.rose, 2) },
      { label: 'HDL cholesterol', c: C.blueD, detail: 'Under 40 mg/dL in men or 50 mg/dL in women.', svg: box(110, 220, 170, 60, '#e3edf1', 'HDL <40 / 50', C.blueD) + line('M196 220 L240 280', C.blueD, 2) },
      { label: 'Blood pressure', c: C.plumD, detail: '130/85 or more.', svg: box(470, 140, 170, 60, '#ece2ef', 'BP ≥130/85', C.plumD) + line('M384 140 L310 240', C.plumD, 2) },
      { label: 'Fasting glucose', c: C.deep, detail: '100 mg/dL or more.', svg: box(470, 240, 170, 60, '#e4ecdf', 'Glucose ≥100', C.deep) + line('M384 240 L320 290', C.deep, 2) }
    ], { hint: 'A cluster of risk factors, not one disease: three of these five.' }),

  'l3-b3': fig('The placenta: more fence than filter', '0 20 860 420',
    rect(0, 30, 420, 400, 0, '#f6e3da') + rect(436, 30, 424, 400, 0, '#eef2ed') + fence + T(200, 60, 'Mother’s blood', { s: 22, c: C.rose }) + T(650, 60, 'Baby’s blood', { s: 22, c: C.deep }),
    [
      { label: 'Nutrients and oxygen in', c: C.deep, detail: 'The placenta handles the exchange of nutrients and gases between mother and baby.', svg: arrow(300, 130, 560, 130, C.deep, { w: 6 }) + L(300, 116, 'nutrients, oxygen', C.deep) },
      { label: 'Waste out', c: C.blueD, detail: 'It removes the baby’s waste.', svg: arrow(560, 200, 300, 200, C.blueD, { w: 6 }) + L(560, 236, 'waste, CO₂', C.blueD) },
      { label: 'Harmful things get through', c: C.rose, detail: 'Alcohol, some drugs, excess vitamins and bacteria such as listeria can pass through. The placenta is a partial barrier at best.', svg: arrow(300, 290, 560, 290, C.rose, { w: 6 }) + L(300, 276, 'alcohol, drugs, listeria', C.rose) },
      { label: 'Insulin doesn’t cross', c: C.goldD, detail: 'Maternal insulin doesn’t cross, so the baby makes its own. High maternal glucose leads the baby to make extra insulin.', svg: arrow(300, 370, 400, 370, C.goldD, { w: 6 }) + line('M400 350 L420 390 M420 350 L400 390', C.goldD, 5) + L(80, 376, 'insulin: stops', C.goldD) + L(470, 376, 'glucose crosses', C.muted) },
      { label: 'Hormones and enzymes', c: C.plumD, detail: 'The placenta also makes hormones and enzymes that drive many of the mother’s body changes.', svg: L(470, 410, 'Makes hormones and enzymes', C.plumD) }
    ]),

  'l3-b4': fig('Recommended weight gain (one baby)', '0 0 800 360',
    line(`M${GX(0)} 300 L${GX(42)} 300`, C.muted, 2) + [0, 10, 20, 30, 40].map(v => T(GX(v), 330, v + ' lb', { s: 16, c: C.muted })).join(''),
    GAIN.map(([n, b, lo, hi, c], i) => ({ label: n, c, detail: `Pre-pregnancy ${b}: gain ${lo}–${hi} lb.`,
      svg: L(30, 60 + i * 62, n, c) + L(30, 82 + i * 62, b, C.muted, 'start', 16) + rect(GX(lo), 44 + i * 62, GX(hi) - GX(lo), 30, 15, c, 'opacity:.85') + T((GX(lo) + GX(hi)) / 2, 66 + i * 62, `${lo}–${hi}`, { s: 18, c: '#fff', halo: false }) })),
    { hint: 'The higher the starting BMI, the lower the recommended gain. Twins need more.' }),

  'l4-b1': fig('How the breast makes milk', '180 60 600 400',
    line(DUCTS, '#e3b6a6', 10) + alv(230, 120) + alv(230, 240) + alv(240, 340) + alv(360, 380) + ell(724, 240, 30, 36, '#dc9c8c'),
    [
      { label: 'Alveoli', c: C.rose, detail: 'The working units: clusters of milk-secreting cells around a small duct.', svg: [[230, 120], [230, 240], [240, 340], [360, 380]].map(([x, y]) => ring(x + 15, y, 40, 34, C.rose, 4)).join('') + L(200, 80, 'Alveoli', C.rose) },
      { label: 'Ducts', c: C.goldD, detail: 'The ducts branch like a tree toward the nipple.', svg: line(DUCTS, '#c9a65a', 10) + L(520, 190, 'Ducts', C.goldD) },
      { label: 'Oxytocin: the letdown', c: C.plumD, detail: 'Muscle-like cells around the alveoli contract under oxytocin and push milk out.', svg: [[230, 120], [230, 240]].map(([x, y]) => ring(x + 15, y, 50, 44, '#9c8aa2', 3, 'stroke-dasharray="4 6"')).join('') + arrow(300, 240, 400, 220, C.plumD, { w: 4 }) + L(320, 290, 'Oxytocin squeezes', C.plumD) },
      { label: 'Supply and demand', c: C.deep, detail: 'The more fully the breast is emptied, the more milk it makes. Breast size depends mostly on fat and doesn’t decide supply.', svg: L(440, 430, 'Emptied more = more milk', C.deep) }
    ]),

  'l4-b2': fig('Foremilk and hindmilk', '0 0 760 380',
    '',
    [
      { label: 'Foremilk', c: C.blueD, detail: 'Milk at the start of a feed is lower in fat.', svg: rect(120, 80, 140, 220, 30, '#eef3f5') + rect(120, 230, 140, 70, 30, '#f6efdc') + T(190, 340, 'Start: foremilk', { s: 22, c: C.blueD }) + T(190, 200, 'lower fat', { s: 18, c: C.muted }) },
      { label: 'Hindmilk', c: C.goldD, detail: 'Milk at the end of a feed is higher in fat. Letting the baby finish one breast first gets them the hindmilk.', svg: rect(320, 80, 140, 220, 30, '#f6efdc') + rect(320, 180, 140, 120, 30, '#efd9a0') + T(390, 340, 'End: hindmilk', { s: 22, c: C.goldD }) + T(390, 140, 'higher fat', { s: 18, c: C.muted }) },
      { label: 'What’s in it', c: C.deep, detail: 'Mostly water (no extra water needed). Lactose is the main carbohydrate; fat gives about half the energy; whey is the main protein; antibodies help protect the baby.', svg: L(520, 120, 'Water', C.blueD) + L(520, 160, 'Lactose', C.goldD) + L(520, 200, 'Fat: ~half the energy', C.rose) + L(520, 240, 'Whey protein', C.deep) + L(520, 280, 'Antibodies', C.plumD) },
      { label: 'Low in vitamin K', c: C.rose, detail: 'Breast milk is low in vitamin K, so all newborns get a vitamin K shot at birth.', svg: L(520, 330, 'Low in vitamin K', C.rose) }
    ]),

  'l5-b1': fig('How babies gain control', '40 20 420 970',
    body(),
    [
      { label: 'Head downward', c: C.blueD, detail: 'Babies gain control from the head down: they hold up their head before they sit.', svg: arrow(70, 70, 70, 900, C.blueD, { w: 6 }) + L(60, 60, 'Head first', C.blueD, 'start', 28) },
      { label: 'Centre outward', c: C.goldD, detail: 'And from the centre of the body out to the hands and fingers: arms before fingers.', svg: arrow(250, 330, 390, 520, C.goldD, { w: 6 }) + arrow(250, 330, 110, 520, C.goldD, { w: 6 }) + L(250, 300, 'Centre out', C.goldD, 'middle') },
      { label: 'Rooting reflex', c: C.rose, detail: 'Stroke a newborn’s cheek and they turn toward it and open their mouth.', svg: ring(278, 108, 18, 14, C.rose, 4) + L(330, 100, 'Rooting', C.rose) },
      { label: 'Readiness guides feeding', c: C.deep, detail: 'Sitting with support, moving the head toward a spoon, then picking up finger foods. Readiness, not just age, guides new textures.', svg: circ(400, 560, 12, '#d3a84b') + L(390, 610, 'Fingers last', C.deep, 'end') }
    ]),

  'l5-b4': fig('Reading a growth chart', '40 20 740 420',
    line('M100 380 L700 380 M100 380 L100 40', C.muted, 3) + T(700, 410, 'Age →', { s: 18, c: C.muted, a: 'end' }) + T(110, 40, 'Weight', { s: 18, c: C.muted, a: 'start' }) + GC(0, '#d9d2c6') + GC(40, '#c7d2c4') + GC(80, '#d9d2c6'),
    [
      { label: 'Below 10th: SGA', c: C.rose, detail: 'At birth, below the 10th percentile is small for gestational age (SGA).', svg: GC(0, C.rose) + L(705, 212, '10th', C.rose) + L(110, 360, 'SGA below', C.rose) },
      { label: '10th to 90th: AGA', c: C.deep, detail: 'Between the 10th and 90th percentiles is appropriate for gestational age (AGA).', svg: GC(40, C.deep) + L(705, 172, '50th', C.deep) + L(110, 316, 'AGA', C.deep) },
      { label: 'Above 90th: LGA', c: C.blueD, detail: 'Above the 90th percentile is large for gestational age (LGA).', svg: GC(80, C.blueD) + L(705, 132, '90th', C.blueD) + L(110, 276, 'LGA above', C.blueD) },
      { label: 'Follow the pattern', c: C.goldD, detail: 'One measurement is a snapshot. What matters most is whether the baby keeps following their own curve over time.', svg: [0, 2, 4, 6, 8, 10].map(i => circ(100 + i * 50, 380 - (40 + i * 22 - i * i * .9) - 50, 8, '#d3a84b')).join('') }
    ], { hint: 'Compared with babies of the same age and sex.' })
};
