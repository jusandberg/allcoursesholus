// More pictures for Nutritional Counselling, lessons 1 to 10
const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f, smooth, box, person, body } = require('./lib.js');
const L = (x, y, s, c, a, sz) => T(x, y, s, { s: sz || 22, c, a: a || 'start' });
const bar = (x, y, w, h, c, lab, val, tc) => rect(x, y - h, w, h, 10, c) + T(x + w / 2, y + 26, lab, { s: 17, c: tc || C.ink }) + T(x + w / 2, y - h - 10, val, { s: 18, c: tc || C.ink });

module.exports = {
  'l1-b4': fig('Water-soluble vs fat-soluble vitamins', '0 0 860 380',
    '',
    [
      { label: 'Water-soluble: B and C', c: C.blueD, detail: 'The B-complex vitamins and vitamin C dissolve in water. Apart from B12, stores are small and run out within weeks to months.', svg: rect(60, 80, 330, 220, 30, '#e3edf1') + ['B1', 'B2', 'B3', 'B6', 'B12', 'folate', 'C'].map((v, i) => circ(110 + (i % 4) * 75, 140 + Math.floor(i / 4) * 80, 28, '#a3bcc8') + T(110 + (i % 4) * 75, 147 + Math.floor(i / 4) * 80, v, { s: 16, c: '#fff', halo: false })).join('') + L(225, 340, 'Water-soluble: small stores', C.blueD, 'middle') },
      { label: 'Fat-soluble: D, E, K, A', c: C.goldD, detail: 'Vitamins A, D, E and K (think DEKA) dissolve in fat and are stored in fat tissue, so a deficiency takes longer to show.', svg: rect(470, 80, 330, 220, 30, '#f8eed2') + ['D', 'E', 'K', 'A'].map((v, i) => ell(540 + i * 70, 180, 28, 34, '#e6c98a') + T(540 + i * 70, 188, v, { s: 22, c: '#5f4a1a', halo: false })).join('') + L(635, 340, 'Fat-soluble: stored (DEKA)', C.goldD, 'middle') },
      { label: 'Antioxidants', c: C.deep, detail: 'Vitamins C and E and beta-carotene act as antioxidants, helping prevent or repair oxidation damage to cells.', svg: L(430, 40, 'Antioxidants: C, E, beta-carotene', C.deep, 'middle') },
      { label: 'Too much from pills', c: C.rose, detail: 'Large supplement doses, especially of A and D, can be toxic. Overdoses from food alone are very rare.', svg: L(635, 270, 'High doses of A, D: toxic', C.rose, 'middle', 17) }
    ]),

  'l1-b6': fig('Nutrient density', '0 0 820 380',
    line('M60 300 L760 300', C.muted, 2),
    [
      { label: 'Nutrient-dense', c: C.deep, detail: 'Plenty of nutrients for relatively few Calories: nonfat milk and yogurt, lean meat, dried beans, vegetables and fruit.', svg: bar(100, 300, 90, 70, '#e6c98a', 'Calories', '', C.goldD) + bar(200, 300, 90, 200, '#a3b795', 'Nutrients', '', C.deep) + L(195, 360, 'Nonfat milk, beans, vegetables', C.deep, 'middle', 18) },
      { label: 'Empty Calories', c: C.rose, detail: 'Calories with few nutrients, like soft drinks and hard candy.', svg: bar(500, 300, 90, 160, '#e6c98a', 'Calories', '', C.goldD) + bar(600, 300, 90, 16, '#a3b795', 'Nutrients', '', C.deep) + L(595, 360, 'Soft drinks, hard candy', C.rose, 'middle', 18) },
      { label: 'Primary vs secondary malnutrition', c: C.plumD, detail: 'Primary malnutrition comes from the diet itself (like not enough money for food). Secondary comes from a disease, surgery or medication affecting how nutrients are used.', svg: L(410, 40, 'Primary: the diet · Secondary: illness or medication', C.plumD, 'middle', 18) }
    ]),

  'l1-b7': fig('Reading a Nutrition Facts panel', '0 0 760 520',
    rect(160, 20, 300, 480, 8, '#ffffff') + rect(160, 20, 300, 480, 8, 'none').replace('style="fill:none"', 'fill="none" stroke="#243341" stroke-width="3"') + T(176, 56, 'Nutrition Facts', { s: 26, c: C.ink, a: 'start', w: 800 }),
    [
      { label: 'Serving size', c: C.blueD, detail: 'Everything on the panel is per this serving size.', svg: T(176, 90, 'Serving size 1 cup', { s: 18, c: C.ink, a: 'start' }) + line('M170 104 L450 104', C.ink, 6) + L(480, 90, 'Start here', C.blueD) },
      { label: 'Nutrients listed', c: C.goldD, detail: 'Fat, saturated fat, trans fat, cholesterol, sodium, carbohydrate, fibre, sugars and protein.', svg: ['Fat', 'Saturated', 'Trans', 'Cholesterol', 'Sodium', 'Carbohydrate', 'Fibre', 'Sugars', 'Protein'].map((n, i) => T(176, 140 + i * 30, n, { s: 17, c: C.ink, a: 'start' }) + line(`M170 ${150 + i * 30} L450 ${150 + i * 30}`, '#dfe4de', 1.5)).join('') + L(480, 240, 'Nutrients', C.goldD) },
      { label: '% Daily Value', c: C.rose, detail: 'The % DV shows how much of the reference amount one serving gives.', svg: ['12%', '15%', '', '5%', '20%', '8%', '18%', '', ''].map((v, i) => T(444, 140 + i * 30, v, { s: 17, c: C.rose, a: 'end' })).join('') + L(480, 180, '% DV column', C.rose) },
      { label: 'Allergens', c: C.plumD, detail: 'Labels also flag common allergens.', svg: rect(170, 430, 280, 50, 6, '#ece2ef') + T(310, 462, 'Contains: milk, soy', { s: 17, c: C.plumD }) + L(480, 460, 'Allergens', C.plumD) },
      { label: 'Supplement Facts', c: C.deep, detail: 'Supplements have a Supplement Facts panel. They don’t have to be proven safe and effective first, so they can’t claim to treat, cure or prevent a disease.', svg: L(20, 500, 'Supplements: no disease claims', C.deep, 'start', 16) }
    ], { hint: 'Almost every food with more than one ingredient needs this panel.' }),

  'l2-b3': fig('Body fat and fertility', '0 0 820 360',
    line('M80 300 L760 300 M80 300 L80 60', C.muted, 2) + T(760, 330, 'Body fat →', { s: 16, c: C.muted, a: 'end' }) + T(90, 56, 'Fertility', { s: 16, c: C.muted, a: 'start' }) + line(smooth([[100, 270], [220, 160], [400, 90], [580, 160], [740, 270]]), C.deep, 5),
    [
      { label: 'Too little', c: C.blueD, detail: 'Losing more than about 10–15% of usual weight lowers estrogen, LH and FSH; periods and ovulation can stop (functional hypothalamic amenorrhea). Levels usually recover near 95% of previous weight.', svg: rect(90, 70, 180, 230, 14, '#a3bcc8', 'opacity:.3') + L(180, 340, 'Too little', C.blueD, 'middle') },
      { label: 'Healthy range', c: C.deep, detail: 'Fat cells make estrogen, testosterone and leptin, which affect egg development, ovulation and sperm.', svg: circ(400, 90, 12, '#7d9378') + L(400, 340, 'In range', C.deep, 'middle') },
      { label: 'Too much', c: C.rose, detail: 'Too much body fat can also lower fertility in women and men. Losing fat improves hormone levels, inflammation and conception rates.', svg: rect(560, 70, 190, 230, 14, '#e6a99c', 'opacity:.3') + L(655, 340, 'Too much', C.rose, 'middle') }
    ]),

  'l2-b4': fig('Folic acid before pregnancy', '0 0 820 340',
    '',
    [
      { label: '400 mcg a day', c: C.deep, detail: 'All women who could become pregnant are advised to get 400 mcg of folic acid a day from fortified foods or a supplement.', svg: circ(150, 160, 90, '#e4ecdf') + T(150, 160, '400', { s: 44, c: C.deep, halo: false }) + T(150, 194, 'mcg / day', { s: 18, c: C.muted, halo: false }) },
      { label: 'One bowl of fortified cereal', c: C.goldD, detail: 'One serving of a cereal fortified with 400 mcg covers it. Gluten-free grains may not be fortified, so check the label.', svg: sh('M330 140 L510 140 C510 230 330 230 330 140 Z', '#f0e2c0') + Array.from({ length: 8 }, (_, i) => ell(350 + i * 20, 136 - (i % 2) * 6, 10, 6, '#e6c98a')).join('') + L(420, 270, 'Fortified cereal', C.goldD, 'middle') },
      { label: 'Why: neural tube', c: C.rose, detail: 'Good folate status around conception lowers the risk of neural tube defects such as spina bifida.', svg: line('M640 80 C620 140 660 200 640 260', '#c86d56', 8) + L(640, 300, 'Neural tube', C.rose, 'middle') },
      { label: 'Iron stores too', c: C.blueD, detail: 'Low iron stores going into pregnancy are linked to poorer outcomes and are hard to build once pregnancy starts.', svg: L(760, 120, 'Build iron', C.blueD, 'end') + L(760, 146, 'stores first', C.blueD, 'end') }
    ]),

  'l3-b1': fig('Critical periods: the neural tube', '0 0 880 300',
    line('M60 200 L820 200', C.muted, 3) + [0, 4, 8, 12, 20, 30, 40].map(w => T(60 + w * 19, 232, String(w), { s: 16, c: C.muted })).join('') + T(820, 260, 'Weeks after conception', { s: 16, c: C.muted, a: 'end' }),
    [
      { label: 'Weeks 3 and 4', c: C.rose, detail: 'The neural tube, which becomes the brain and spinal cord, forms in weeks 3 and 4, often before a woman knows she is pregnant.', svg: rect(60 + 3 * 19, 120, 38, 80, 8, '#e6a99c') + L(60 + 3.5 * 19 + 14, 100, 'Neural tube', C.rose, 'start') },
      { label: 'Critical periods', c: C.goldD, detail: 'Each organ has a critical period of fast growth. A shortage at that exact time can cause lasting harm that can’t be fixed later.', svg: [[5, 10, '#e6c98a'], [8, 16, '#c4b0cc'], [12, 30, '#a3bcc8']].map(([a, b, c]) => rect(60 + a * 19, 150, (b - a) * 19, 30, 8, c, 'opacity:.8')).join('') + L(400, 140, 'Other organs’ fast-growth windows', C.goldD) },
      { label: 'Folate early', c: C.deep, detail: 'That is why folate matters so much early, even before pregnancy is known.', svg: arrow(120, 80, 120, 116, C.deep, { w: 4 }) + L(140, 70, 'Folate before you know', C.deep) },
      { label: 'The newborn period', c: C.blueD, detail: 'Two-thirds of deaths of babies born alive happen in the first month. Low birthweight and preterm birth are major reasons.', svg: L(820, 60, 'After birth: the newborn period', C.blueD, 'end') }
    ]),

  'l3-b5': fig('Fish in pregnancy: low vs high mercury', '0 0 840 360',
    '',
    [
      { label: 'Choose: low mercury', c: C.deep, detail: '2–3 servings a week of low-mercury fish such as shrimp, canned light tuna, salmon, pollock and catfish, for DHA.', svg: rect(40, 50, 360, 250, 24, '#e9f0e6') + ['Shrimp', 'Light tuna', 'Salmon', 'Pollock', 'Catfish'].map((n, i) => sh(`M${80 + (i % 2) * 160} ${110 + Math.floor(i / 2) * 60} C${110 + (i % 2) * 160} ${90 + Math.floor(i / 2) * 60} ${150 + (i % 2) * 160} ${90 + Math.floor(i / 2) * 60} ${170 + (i % 2) * 160} ${110 + Math.floor(i / 2) * 60} C${150 + (i % 2) * 160} ${130 + Math.floor(i / 2) * 60} ${110 + (i % 2) * 160} ${130 + Math.floor(i / 2) * 60} ${80 + (i % 2) * 160} ${110 + Math.floor(i / 2) * 60} Z`, '#a3bcc8') + T(125 + (i % 2) * 160, 146 + Math.floor(i / 2) * 60, n, { s: 15, c: C.deep })).join('') + L(220, 340, '2–3 times a week', C.deep, 'middle') },
      { label: 'Avoid: high mercury', c: C.rose, detail: 'Avoid swordfish, king mackerel, tilefish and shark.', svg: rect(440, 50, 360, 250, 24, '#f6e6e2') + ['Swordfish', 'King mackerel', 'Tilefish', 'Shark'].map((n, i) => T(620, 110 + i * 46, n, { s: 22, c: '#8a3f33' })).join('') + line('M470 70 L770 280', C.rose, 4) + L(620, 340, 'Avoid', C.rose, 'middle') },
      { label: 'DHA for brain and eyes', c: C.blueD, detail: 'DHA, an omega-3 fat, supports the baby’s brain and eyes. Algae-based DHA is an option for vegetarians.', svg: L(420, 30, 'DHA: baby’s brain and eyes', C.blueD, 'middle', 18) }
    ]),

  'l3-b6': fig('Food safety in pregnancy', '0 0 820 340',
    '',
    ['Soft cheeses (unless pasteurized)', 'Deli meats unless steaming hot', 'Raw oysters, raw seafood', 'Unpasteurized milk'].map((n, i) => ({ label: n.split(' (')[0].split(' unless')[0], c: [C.goldD, C.rose, C.blueD, C.plumD][i], detail: 'Avoid: ' + n + '. Pregnant women are more vulnerable to foodborne illness, especially listeria, which can cross the placenta.',
      svg: box(210 + (i % 2) * 400, 100 + Math.floor(i / 2) * 140, 360, 100, ['#f5ecd6', '#f4ddd6', '#e3edf1', '#ece2ef'][i], n, [C.goldD, '#8a3f33', C.blueD, C.plumD][i], 20) })),
    { hint: 'Listeria can cross the placenta.' }),

  'l4-b3': fig('A good latch', '0 0 820 360',
    '',
    [
      { label: 'Good latch', c: C.deep, detail: 'The baby takes in a large part of the areola, nose close to the breast and breathing freely. You hear swallowing.', svg: sh('M60 300 C60 140 180 80 300 120 L300 300 Z', '#f7e8df') + ell(300, 200, 40, 50, '#c9a08a') + circ(360, 200, 60, '#f4e3d6') + sh('M300 180 C320 160 340 170 340 200 C340 230 320 240 300 220 Z', '#e6a99c') + L(200, 340, 'Wide mouth, much of the areola', C.deep, 'middle', 18) },
      { label: 'Poor latch', c: C.rose, detail: 'Smacking, clicking or slurping sounds suggest a poor latch, which raises the risk of sore nipples.', svg: sh('M480 300 C480 140 600 80 720 120 L720 300 Z', '#f7e8df') + ell(720, 200, 40, 50, '#c9a08a') + circ(790, 200, 60, '#f4e3d6') + sh('M736 194 C746 188 756 192 756 200 C756 208 746 212 736 206 Z', '#e6a99c') + L(640, 340, 'Only the nipple: sore', C.rose, 'middle', 18) },
      { label: 'Finish one breast first', c: C.goldD, detail: 'Short feeds on both breasts can mean lots of low-fat foremilk and not enough hindmilk: gas, colic, loose stools, slow gain. Let the baby finish one breast first.', svg: L(410, 40, 'Finish one side first (hindmilk)', C.goldD, 'middle', 18) }
    ]),

  'l4-b6': fig('Medications and alcohol while nursing', '0 0 880 320',
    line('M60 200 L820 200', C.muted, 3),
    [
      { label: 'Medication: right after a feed', c: C.blueD, detail: 'The safest time to take a needed medication is usually right after nursing, at the lowest dose that works.', svg: circ(140, 200, 18, '#a3b795') + L(140, 250, 'Feed', C.deep, 'middle', 18) + rect(210, 180, 50, 40, 12, '#a3bcc8') + L(236, 160, 'Pill', C.blueD, 'middle', 18) + circ(440, 200, 18, '#a3b795') + L(440, 250, 'Next feed', C.deep, 'middle', 18) },
      { label: 'Alcohol: pump before', c: C.rose, detail: 'Alcohol passes into milk and babies sleep less after it. Pumping after drinking doesn’t speed clearance; pump before going out and use that milk.', svg: rect(560, 170, 50, 60, 10, '#f6efdc') + L(586, 150, 'Pump first', C.goldD, 'middle', 18) + rect(650, 140, 160, 60, 10, '#f4ddd6') + T(730, 176, 'Alcohol clears', { s: 16, c: '#8a3f33', halo: false }) + L(730, 250, 'then nurse', C.rose, 'middle', 18) },
      { label: 'Herbs matter', c: C.goldD, detail: 'Large doses of St. John’s wort may lower prolactin and reduce milk supply.', svg: L(440, 60, 'St. John’s wort may lower supply', C.goldD, 'middle', 18) }
    ]),

  'l5-b2': fig('A baby’s energy and iron', '0 0 820 380',
    line('M80 300 L380 300', C.muted, 2),
    [
      { label: 'Calories per kg', c: C.goldD, detail: 'About 108 Calories per kg in the first six months, and 98 from 6 to 12 months.', svg: bar(110, 300, 90, 216, '#e6c98a', '0–6 mo', '108', '#7a5f22') + bar(250, 300, 90, 196, '#ebd08c', '6–12 mo', '98', '#7a5f22') + L(230, 360, 'Cal per kg per day', C.goldD, 'middle', 18) },
      { label: 'Iron stores run low', c: C.rose, detail: 'Iron stores from birth last about 4 to 6 months. Exclusively breastfed babies get an iron supplement from 4 months until they eat iron-rich foods.', svg: line(smooth([[460, 90], [560, 120], [640, 220], [700, 280]]), '#c86d56', 6) + line('M460 300 L780 300', C.muted, 2) + [0, 2, 4, 6].map(m => T(460 + m * 50, 326, m + ' mo', { s: 15, c: C.muted })).join('') + rect(660, 80, 120, 220, 10, '#e6a99c', 'opacity:.25') + L(620, 70, 'Stores run out', C.rose, 'middle', 18) },
      { label: 'Same energy in milk', c: C.blueD, detail: 'Breast milk and standard formula both give about 20 Calories per ounce. Meat is a good early food for iron and zinc.', svg: L(620, 370, 'Milk or formula: ~20 Cal/oz', C.blueD, 'middle', 18) }
    ]),

  'l5-b7': fig('Corrected age for preterm babies', '0 0 860 300',
    line('M60 160 L800 160', C.muted, 3) + [0, 2, 4, 6, 8, 10].map(m => T(60 + m * 70, 196, m + ' mo', { s: 16, c: C.muted })).join(''),
    [
      { label: 'Age since birth: 9 months', c: C.blueD, detail: 'The baby is 9 months old by the calendar.', svg: rect(60, 120, 9 * 70, 30, 15, '#a3bcc8') + L(60 + 9 * 70 + 10, 142, '9 mo', C.blueD) },
      { label: 'Born 8 weeks early', c: C.rose, detail: 'Born at 32 weeks: 8 weeks (about 2 months) early.', svg: rect(60, 220, 2 * 70, 30, 15, '#e6a99c') + L(60 + 2 * 70 + 10, 242, '− 2 months early', C.rose) },
      { label: 'Corrected age: 7 months', c: C.deep, detail: 'Corrected age = age since birth minus the time born early: 9 − 2 = 7 months. Judge development on this.', svg: rect(60, 60, 7 * 70, 30, 15, '#a3b795') + L(60 + 7 * 70 + 10, 82, 'Corrected: 7 mo', C.deep) },
      { label: 'Feeding and needs', c: C.goldD, detail: 'Preterm babies often can’t suck, swallow and breathe in rhythm until 32–34 weeks (they may need gavage feeding) and need about 105–130 Calories per kg.', svg: L(430, 290, 'Needs ~105–130 Cal/kg', C.goldD, 'middle', 18) }
    ]),

  'l6-b1': fig('Growth slows after the first year', '0 0 780 360',
    line('M80 300 L700 300', C.muted, 2),
    [
      { label: 'Toddlers', c: C.goldD, detail: 'Toddlers gain about 8 oz and 1 cm a month.', svg: bar(140, 300, 140, 120, '#e6c98a', 'Toddler', '~8 oz, 1 cm a month', '#7a5f22') },
      { label: 'Preschoolers', c: C.blueD, detail: 'Preschoolers gain about 4.4 lb (2 kg) and 7 cm a year.', svg: bar(400, 300, 140, 90, '#a3bcc8', 'Preschooler', '~2 kg, 7 cm a year', C.blueD) },
      { label: 'Appetite drops too', c: C.rose, detail: 'Appetite drops along with growth. A smaller appetite is a normal part of growing up at this age.', svg: L(390, 50, 'Slower growth → smaller appetite (normal)', C.rose, 'middle', 18) },
      { label: 'BMI-for-age', c: C.deep, detail: 'Growth charts and BMI-for-age help show whether a child is growing well, compared with percentiles rather than adult cut-offs.', svg: L(390, 350, 'Use BMI-for-age percentiles', C.deep, 'middle', 18) }
    ]),

  'l7-b4': fig('Teeth and sticky foods', '0 0 820 340',
    '',
    [
      { label: 'Most likely to cause cavities', c: C.rose, detail: 'Sticky, sugary foods like raisins and other dried fruit cling to teeth.', svg: rect(40, 60, 350, 200, 24, '#f6e6e2') + Array.from({ length: 8 }, (_, i) => ell(90 + (i % 4) * 70, 130 + Math.floor(i / 4) * 60, 22, 14, '#8a4a5a')).join('') + L(215, 300, 'Raisins, dried fruit: cling', C.rose, 'middle') },
      { label: 'Much less likely', c: C.deep, detail: 'Cheese, plain yogurt and peanut butter are much less likely to cause cavities.', svg: rect(430, 60, 350, 200, 24, '#e9f0e6') + sh('M470 200 L560 120 L560 200 Z', '#f2d27a') + ell(650, 160, 50, 40, '#f8f4ea') + ell(740, 170, 30, 30, '#c9a06a') + L(605, 300, 'Cheese, yogurt, peanut butter', C.deep, 'middle') },
      { label: 'School drinks', c: C.blueD, detail: 'The American Academy of Pediatrics wants sweetened drinks out of schools, replaced with real juice, water and low-fat milk. Sports drinks aren’t on the list.', svg: L(410, 30, 'Schools: water, real juice, low-fat milk', C.blueD, 'middle', 18) }
    ]),

  'l8-b5': fig('Fluids for teen athletes', '0 0 820 360',
    '',
    [
      { label: '16 oz per pound lost', c: C.blueD, detail: 'Drink about 16 oz of fluid for each pound lost during activity.', svg: rect(80, 100, 120, 70, 10, '#d9d2c6') + T(140, 144, '1 lb', { s: 26, c: C.ink, halo: false }) + arrow(220, 135, 290, 135, C.light, { w: 5 }) + rect(310, 60, 90, 160, 20, '#cfe0e8') + T(355, 150, '16 oz', { s: 22, c: C.blueD, halo: false }) + L(240, 280, 'Replace what you lose', C.blueD, 'middle') },
      { label: 'Sports drinks: 6–8%', c: C.goldD, detail: 'During long events, drinks with no more than 6–8% carbohydrate, or juice diluted with water, hydrate better. Stronger drinks can cause cramping.', svg: rect(520, 60, 90, 160, 20, '#f5ecd6') + rect(520, 160, 90, 60, 0, '#e6c98a') + T(565, 150, '6–8%', { s: 20, c: '#7a5f22', halo: false }) + L(640, 280, 'Long events', C.goldD, 'middle') },
      { label: 'Carbs fill glycogen', c: C.deep, detail: 'Carbohydrates are the best way to build muscle glycogen. Teens need energy for metabolism, activity and growth.', svg: L(410, 340, 'Carbohydrate builds muscle glycogen', C.deep, 'middle', 18) }
    ]),

  'l9-b1': fig('Energy needs in adulthood', '0 0 820 380',
    line('M80 300 L760 300 M80 300 L80 60', C.muted, 2) + [20, 40, 60, 80].map((a, i) => T(150 + i * 180, 326, a + 's', { s: 16, c: C.muted })).join(''),
    [
      { label: 'Slow decline', c: C.rose, detail: 'Metabolic rate drops from early adulthood, by about 2.0% per decade in women and 2.9% in men, mostly from less activity and muscle.', svg: line('M100 100 L740 200', C.rose, 5) + L(740, 190, 'Inactive', C.rose, 'end') },
      { label: 'Staying active', c: C.deep, detail: 'Staying active slows the decline.', svg: line('M100 100 L740 140', C.deep, 5, 'stroke-dasharray="10 8"') + L(740, 120, 'Active', C.deep, 'end') },
      { label: 'Estimating REE', c: C.blueD, detail: 'Women: REE = (10 × kg) + (6.25 × cm) − (5 × age) − 161. Multiply by an activity factor (e.g. 1.4 for light activity).', svg: L(90, 40, 'REE (women) = 10×kg + 6.25×cm − 5×age − 161', C.blueD, 'start', 17) },
      { label: '500 fewer a day', c: C.goldD, detail: 'To lose about 1 lb a week, eat about 500 fewer Calories a day.', svg: L(420, 360, '−500 Cal a day ≈ 1 lb a week', C.goldD, 'middle', 18) }
    ]),

  'l9-b2': fig('Fat on a 2,000-Calorie day', '0 0 820 300',
    rect(60, 120, 700, 60, 30, '#eceae4'),
    [
      { label: '20–35% from fat', c: C.goldD, detail: 'The adult range for fat is 20–35% of Calories: 400–700 Calories on 2,000.', svg: rect(60 + 700 * .2, 120, 700 * .15, 60, 0, '#e6c98a') + T(60 + 700 * .275, 158, '400–700 Cal', { s: 16, c: '#5f4a1a', halo: false }) + L(60 + 700 * .275, 100, '20–35%', C.goldD, 'middle') },
      { label: 'Checking a food', c: C.blueD, detail: 'Calories from fat ÷ total Calories × 100 = % of Calories from fat.', svg: L(410, 240, 'fat Calories ÷ total × 100', C.blueD, 'middle') },
      { label: 'Saturated fat under 20 g', c: C.rose, detail: 'Keep saturated fat under the Daily Value of 20 g on 2,000 Calories.', svg: L(60, 50, 'Saturated fat < 20 g', C.rose) },
      { label: 'A standard drink', c: C.plumD, detail: 'A standard drink has about 13–15 g of alcohol (about 0.5 oz ethanol). Sugary drinks add a lot of Calories.', svg: L(760, 50, 'Standard drink ≈ 14 g alcohol', C.plumD, 'end') }
    ]),

  'l10-b2': fig('Energy down, nutrient needs steady', '0 0 820 360',
    line('M80 300 L760 300', C.muted, 2),
    [
      { label: 'Energy needs fall', c: C.goldD, detail: 'Lower activity and slower metabolism cut energy needs by about 70–100 Calories a day each decade.', svg: bar(120, 300, 100, 200, '#e6c98a', 'Age 50', 'Calories', '#7a5f22') + bar(260, 300, 100, 170, '#e6c98a', 'Age 70', '', '#7a5f22') + L(240, 350, '−70 to 100 a decade', C.goldD, 'middle', 18) },
      { label: 'Nutrient needs stay or rise', c: C.deep, detail: 'Vitamin and mineral needs stay the same or rise, and are hard to meet on fewer than 1,600 Calories a day.', svg: bar(480, 300, 100, 180, '#a3b795', 'Age 50', 'Nutrients', C.deep) + bar(620, 300, 100, 190, '#a3b795', 'Age 70', '', C.deep) + L(600, 350, 'Same or more', C.deep, 'middle', 18) },
      { label: 'B12 absorption', c: C.blueD, detail: 'Up to 30% have atrophic gastritis: less stomach acid makes it hard to free B12 from food. Supplements for older adults usually have more B12.', svg: L(420, 40, 'Watch B12: less stomach acid', C.blueD, 'middle', 18) }
    ]),

  'l10-b5': fig('Unplanned weight loss', '0 0 820 340',
    '',
    [
      { label: 'Percent of usual weight', c: C.rose, detail: 'Compare current weight with usual weight: current ÷ usual × 100. Unplanned weight loss is a red flag.', svg: box(410, 80, 520, 70, '#f4ddd6', 'current ÷ usual × 100', '#8a3f33', 26) + L(410, 150, 'e.g. 54 kg ÷ 60 kg × 100 = 90%', C.muted, 'middle', 18) },
      { label: 'Protein 1.0–1.5 g/kg', c: C.deep, detail: 'Protein needs for older adults are about 1.0–1.5 g per kg of body weight a day.', svg: box(180, 240, 260, 70, '#e4ecdf', 'Protein 1.0–1.5 g/kg', C.deep, 20) },
      { label: 'Small, frequent meals', c: C.goldD, detail: 'Offer small, frequent meals and snacks with more Calories and protein, a supplement if needed, and gentle strength exercise.', svg: box(410, 240, 180, 70, '#f5ecd6', 'Small, often', '#7a5f22', 20) },
      { label: 'Strength exercise', c: C.blueD, detail: 'Gentle strength exercise helps rebuild muscle.', svg: box(640, 240, 220, 70, '#e3edf1', 'Gentle strength', C.blueD, 20) }
    ])
};
