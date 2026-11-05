(() => {
  'use strict';

  if (typeof render !== 'function' || typeof app === 'undefined') return;

  const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);

  const number = (values, key) => Number(values[key]);
  const format = (value, digits = 1) => Number(value).toLocaleString('en-CA', {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  });
  const unitTitle = id => {
    try {
      return units[id] ? `Unit ${id} · ${units[id].title}` : `Unit ${id}`;
    } catch {
      return `Unit ${id}`;
    }
  };
  const range = (low, high, unit, digits = 1) => `${format(low, digits)}–${format(high, digits)} ${unit}`;
  const error = message => ({ error: message });

  const calculators = [
    {
      id: 'macro-energy',
      mark: '4·4·9',
      title: 'Macronutrient energy & percentages',
      description: 'Turn carbohydrate, protein, fat and alcohol grams into kilocalories and each source’s share of total energy.',
      units: [1, 2, 7],
      fields: [
        { id: 'carbohydrate', label: 'Carbohydrate', type: 'number', value: 250, min: 0, step: 1, help: 'grams' },
        { id: 'protein', label: 'Protein', type: 'number', value: 75, min: 0, step: 1, help: 'grams' },
        { id: 'fat', label: 'Fat', type: 'number', value: 70, min: 0, step: 1, help: 'grams' },
        { id: 'alcohol', label: 'Alcohol', type: 'number', value: 0, min: 0, step: 1, help: 'grams; optional for the arithmetic exercise' }
      ],
      calculate(values) {
        const grams = [number(values, 'carbohydrate'), number(values, 'protein'), number(values, 'fat'), number(values, 'alcohol')];
        if (grams.some(value => !Number.isFinite(value) || value < 0)) return error('Enter zero or a positive number for every energy source.');
        const factors = [4, 4, 9, 7];
        const names = ['Carbohydrate', 'Protein', 'Fat', 'Alcohol'];
        const kcal = grams.map((value, index) => value * factors[index]);
        const total = kcal.reduce((sum, value) => sum + value, 0);
        if (!total) return error('Enter at least one amount greater than zero.');
        return {
          headline: `${format(total, 0)} kcal total`,
          rows: names.map((name, index) => [name, `${format(kcal[index], 0)} kcal · ${format(kcal[index] / total * 100, 1)}%`]),
          formula: 'energy = grams × kcal per gram; percentage = source kcal ÷ total kcal × 100',
          work: names.map((name, index) => `${name}: ${format(grams[index], 1)} g × ${factors[index]} kcal/g = ${format(kcal[index], 1)} kcal`)
        };
      },
      caveat: 'These are standard teaching factors. Fibre, sugar alcohols, organic acids, food composition and label rounding can change measured metabolizable energy. Alcohol is included for arithmetic, not as a health recommendation.'
    },
    {
      id: 'adult-amdr',
      mark: '%→g',
      title: 'Adult AMDR ranges',
      description: 'Convert adult carbohydrate, fat and protein percentage ranges into both kilocalories and grams.',
      units: [1, 2, 6, 9],
      fields: [
        { id: 'energy', label: 'Total daily energy', type: 'number', value: 2000, min: 1, step: 50, help: 'kcal/day', wide: true }
      ],
      calculate(values) {
        const energy = number(values, 'energy');
        if (!Number.isFinite(energy) || energy <= 0) return error('Enter total daily energy greater than zero.');
        const bands = [
          ['Carbohydrate', 0.45, 0.65, 4],
          ['Fat', 0.20, 0.35, 9],
          ['Protein', 0.10, 0.35, 4]
        ];
        return {
          headline: `Ranges for ${format(energy, 0)} kcal`,
          rows: bands.map(([name, low, high, factor]) => [name, `${range(energy * low / factor, energy * high / factor, 'g', 1)} · ${range(energy * low, energy * high, 'kcal', 0)}`]),
          formula: 'grams = total kcal × AMDR percentage ÷ kcal per gram',
          work: bands.map(([name, low, high, factor]) => `${name}: ${format(energy, 0)} × ${format(low * 100, 0)}–${format(high * 100, 0)}% ÷ ${factor} = ${range(energy * low / factor, energy * high / factor, 'g', 1)}`)
        };
      },
      caveat: 'Adult AMDRs are broad population ranges: carbohydrate 45–65%, fat 20–35%, protein 10–35%. They are not a complete individualized meal plan or a substitute for clinical targets.'
    },
    {
      id: 'course-eer',
      mark: 'EER',
      title: 'Coursework adult EER',
      description: 'Practise the older adult Estimated Energy Requirement equations and their equation-specific PA coefficients.',
      units: [2, 8],
      fields: [
        { id: 'equation', label: 'Equation category', type: 'select', value: 'women', options: [['women', 'Women'], ['men', 'Men']], help: 'Select the category used by the historical equation.' },
        { id: 'activity', label: 'Whole-day activity', type: 'select', value: 'sedentary', options: [['sedentary', 'Sedentary'], ['low', 'Low active'], ['active', 'Active'], ['very', 'Very active']], help: 'This PA belongs only to this EER equation.' },
        { id: 'age', label: 'Age', type: 'number', value: 30, min: 19, max: 120, step: 1, help: 'years' },
        { id: 'weight', label: 'Weight', type: 'number', value: 65, min: 1, step: 0.1, help: 'kilograms' },
        { id: 'height', label: 'Height', type: 'number', value: 1.65, min: 0.5, max: 2.5, step: 0.01, help: 'metres' }
      ],
      calculate(values) {
        const category = values.equation;
        const age = number(values, 'age');
        const weight = number(values, 'weight');
        const height = number(values, 'height');
        if (![age, weight, height].every(value => Number.isFinite(value) && value > 0)) return error('Enter a valid positive age, weight and height.');
        const coefficients = {
          women: { sedentary: 1, low: 1.12, active: 1.27, very: 1.45 },
          men: { sedentary: 1, low: 1.11, active: 1.25, very: 1.48 }
        };
        const pa = coefficients[category]?.[values.activity];
        if (!pa) return error('Choose an equation category and activity level.');
        const ageTerm = category === 'women' ? 6.91 * age : 9.53 * age;
        const weightTerm = category === 'women' ? 9.36 * weight : 15.91 * weight;
        const heightTerm = category === 'women' ? 726 * height : 539.6 * height;
        const constant = category === 'women' ? 354 : 662;
        const eer = constant - ageTerm + pa * (weightTerm + heightTerm);
        const equation = category === 'women'
          ? '354 − (6.91 × age) + PA × [(9.36 × kg) + (726 × m)]'
          : '662 − (9.53 × age) + PA × [(15.91 × kg) + (539.6 × m)]';
        return {
          headline: `${format(eer, 0)} kcal/day`,
          rows: [['PA coefficient', format(pa, 2)], ['Age term', format(ageTerm, 1)], ['Body-size bracket', `${format(weightTerm + heightTerm, 1)} kcal`]],
          formula: equation,
          work: [
            `Age term: ${category === 'women' ? '6.91' : '9.53'} × ${format(age, 0)} = ${format(ageTerm, 2)}`,
            `Weight term + height term = ${format(weightTerm, 2)} + ${format(heightTerm, 2)} = ${format(weightTerm + heightTerm, 2)}`,
            `${constant} − ${format(ageTerm, 2)} + ${format(pa, 2)} × ${format(weightTerm + heightTerm, 2)} = ${format(eer, 2)} kcal/day`
          ]
        };
      },
      caveat: 'This reproduces the older equation used in the coursework. DRI energy equations were updated in 2023. Any EER is a starting estimate: observe trends, function and clinical context rather than treating it as a measured requirement.'
    },
    {
      id: 'bmi-waist-hip',
      mark: 'BMI',
      title: 'Adult BMI & waist-to-hip ratio',
      description: 'Calculate two adult screening measures while keeping their limits visible.',
      units: [2, 8],
      fields: [
        { id: 'system', label: 'Measurement system', type: 'select', value: 'metric', options: [['metric', 'Metric (kg and cm)'], ['imperial', 'Imperial (lb and in)']], help: 'Use the same system for all four measurements.', wide: true },
        { id: 'weight', label: 'Weight', type: 'number', value: 75, min: 1, step: 0.1, help: 'kg in metric; lb in imperial' },
        { id: 'height', label: 'Height', type: 'number', value: 175, min: 1, step: 0.1, help: 'cm in metric; inches in imperial' },
        { id: 'waist', label: 'Waist circumference', type: 'number', value: 82, min: 1, step: 0.1, help: 'cm in metric; inches in imperial' },
        { id: 'hip', label: 'Hip circumference', type: 'number', value: 100, min: 1, step: 0.1, help: 'same unit as waist' }
      ],
      calculate(values) {
        const weight = number(values, 'weight');
        const height = number(values, 'height');
        const waist = number(values, 'waist');
        const hip = number(values, 'hip');
        if (![weight, height, waist, hip].every(value => Number.isFinite(value) && value > 0)) return error('Enter positive weight, height, waist and hip measurements.');
        const metric = values.system === 'metric';
        const kg = metric ? weight : weight / 2.2046226218;
        const metres = metric ? height / 100 : height * 0.0254;
        const bmi = kg / (metres * metres);
        const whr = waist / hip;
        const category = bmi < 18.5 ? 'underweight range' : bmi < 25 ? 'healthy-weight range' : bmi < 30 ? 'overweight range' : 'obesity range';
        return {
          headline: `BMI ${format(bmi, 1)}`,
          rows: [['Standard adult category', category], ['Waist-to-hip ratio', format(whr, 3)], ['Converted weight', `${format(kg, 1)} kg`], ['Converted height', `${format(metres, 3)} m`]],
          formula: 'BMI = kilograms ÷ metres²; waist-to-hip ratio = waist circumference ÷ hip circumference',
          work: [
            `${format(kg, 2)} kg ÷ (${format(metres, 3)} m × ${format(metres, 3)} m) = ${format(bmi, 2)}`,
            `${format(waist, 1)} ÷ ${format(hip, 1)} = ${format(whr, 3)}`
          ]
        };
      },
      caveat: 'BMI and waist measures are screening tools, not diagnoses. BMI does not directly measure fat, muscle or fat distribution; waist interpretation depends on measurement method, population, sex-related physiology and clinical context.'
    },
    {
      id: 'unit-converter',
      mark: '↔',
      title: 'Course unit conversions',
      description: 'Convert the body-size, kitchen and hydration units that recur across the course.',
      units: [2, 5, 8, 9, 12, 14],
      fields: [
        { id: 'conversion', label: 'Conversion', type: 'select', value: 'lb-kg', options: [
          ['lb-kg', 'Pounds → kilograms'], ['kg-lb', 'Kilograms → pounds'],
          ['in-cm', 'Inches → centimetres'], ['cm-in', 'Centimetres → inches'],
          ['us-cup-ml', 'U.S. cups → millilitres'], ['metric-cup-ml', 'Metric cups → millilitres'],
          ['ml-us-cup', 'Millilitres → U.S. cups'], ['tsp-ml', 'Teaspoons → millilitres'],
          ['tbsp-ml', 'Tablespoons → millilitres'], ['floz-ml', 'U.S. fluid ounces → millilitres']
        ], help: 'Choose the unit pair used by the exercise.', wide: true },
        { id: 'amount', label: 'Amount to convert', type: 'number', value: 150, min: 0, step: 0.01, help: 'Enter a value in the starting unit.', wide: true }
      ],
      calculate(values) {
        const amount = number(values, 'amount');
        if (!Number.isFinite(amount) || amount < 0) return error('Enter zero or a positive amount to convert.');
        const conversions = {
          'lb-kg': ['lb', 'kg', 0.45359237],
          'kg-lb': ['kg', 'lb', 2.2046226218],
          'in-cm': ['in', 'cm', 2.54],
          'cm-in': ['cm', 'in', 1 / 2.54],
          'us-cup-ml': ['U.S. cups', 'mL', 240],
          'metric-cup-ml': ['metric cups', 'mL', 250],
          'ml-us-cup': ['mL', 'U.S. cups', 1 / 240],
          'tsp-ml': ['tsp', 'mL', 5],
          'tbsp-ml': ['tbsp', 'mL', 15],
          'floz-ml': ['U.S. fl oz', 'mL', 29.5735]
        };
        const selected = conversions[values.conversion];
        if (!selected) return error('Choose a conversion.');
        const [from, to, factor] = selected;
        const converted = amount * factor;
        return {
          headline: `${format(converted, 3)} ${to}`,
          rows: [['Starting amount', `${format(amount, 3)} ${from}`], ['Conversion factor', `${format(factor, 6)} ${to}/${from}`]],
          formula: 'converted amount = starting amount × conversion factor',
          work: [`${format(amount, 3)} ${from} × ${format(factor, 6)} ${to}/${from} = ${format(converted, 3)} ${to}`]
        };
      },
      caveat: 'The coursework may round 1 kg to 2.2 lb. Kitchen standards vary: this tool distinguishes a 240 mL U.S. cup from a 250 mL metric cup. Use the convention printed in the source question or label.'
    },
    {
      id: 'label-scaling',
      mark: '%DV',
      title: 'Label serving, %DV & sugar',
      description: 'Scale a Nutrition Facts line from the label serving to the amount actually eaten, then estimate sugar teaspoons.',
      units: [2],
      fields: [
        { id: 'serving', label: 'Label serving size', type: 'number', value: 0.5, min: 0.01, step: 0.01, help: 'cups, grams or another unit' },
        { id: 'portion', label: 'Amount eaten', type: 'number', value: 1, min: 0, step: 0.01, help: 'use the same unit as serving size' },
        { id: 'nutrient', label: 'Nutrient per serving', type: 'number', value: 3, min: 0, step: 0.1, help: 'grams (for the nutrient being practised)' },
        { id: 'dailyValue', label: 'Printed %DV per serving', type: 'number', value: 12, min: 0, step: 0.1, help: 'percent' },
        { id: 'sugar', label: 'Total sugar per serving', type: 'number', value: 19, min: 0, step: 0.1, help: 'grams' }
      ],
      calculate(values) {
        const serving = number(values, 'serving');
        const portion = number(values, 'portion');
        const nutrient = number(values, 'nutrient');
        const dailyValue = number(values, 'dailyValue');
        const sugar = number(values, 'sugar');
        if (!Number.isFinite(serving) || serving <= 0 || [portion, nutrient, dailyValue, sugar].some(value => !Number.isFinite(value) || value < 0)) {
          return error('Serving size must be greater than zero; other amounts must be zero or positive.');
        }
        const multiplier = portion / serving;
        const scaledNutrient = nutrient * multiplier;
        const scaledDV = dailyValue * multiplier;
        const scaledSugar = sugar * multiplier;
        const teaspoons = scaledSugar / 4;
        return {
          headline: `${format(multiplier, 2)} label servings`,
          rows: [['Scaled nutrient', `${format(scaledNutrient, 1)} g`], ['Scaled Daily Value', `${format(scaledDV, 1)}% DV`], ['Scaled total sugar', `${format(scaledSugar, 1)} g`], ['Sugar equivalent', `≈ ${format(teaspoons, 1)} tsp`]],
          formula: 'servings = portion ÷ label serving; scaled amount = per-serving amount × servings; sugar tsp ≈ grams ÷ 4',
          work: [
            `${format(portion, 2)} ÷ ${format(serving, 2)} = ${format(multiplier, 2)} servings`,
            `${format(nutrient, 1)} g × ${format(multiplier, 2)} = ${format(scaledNutrient, 1)} g`,
            `${format(dailyValue, 1)}% × ${format(multiplier, 2)} = ${format(scaledDV, 1)}% DV`,
            `${format(scaledSugar, 1)} g ÷ 4 g/tsp ≈ ${format(teaspoons, 1)} tsp`
          ]
        };
      },
      caveat: '%DV is a standardized label reference, not necessarily an individual requirement. Total sugar includes naturally occurring and added sugars; the teaspoon conversion does not tell you how much was added.'
    },
    {
      id: 'food-density',
      mark: '÷kcal',
      title: 'Nutrient & energy density',
      description: 'Keep the denominators straight: nutrient amount per calorie, and kilocalories per gram of food.',
      units: [2],
      fields: [
        { id: 'nutrient', label: 'Nutrient amount', type: 'number', value: 60, min: 0, step: 0.1, help: 'enter the amount in the unit selected' },
        { id: 'nutrientUnit', label: 'Nutrient unit', type: 'select', value: 'mg', options: [['mg', 'milligrams (mg)'], ['mcg', 'micrograms (mcg)'], ['g', 'grams (g)']], help: 'The calculation preserves this unit.' },
        { id: 'kcal', label: 'Food energy', type: 'number', value: 60, min: 0.01, step: 1, help: 'kilocalories' },
        { id: 'foodWeight', label: 'Food weight', type: 'number', value: 120, min: 0.01, step: 1, help: 'grams' }
      ],
      calculate(values) {
        const nutrient = number(values, 'nutrient');
        const kcal = number(values, 'kcal');
        const foodWeight = number(values, 'foodWeight');
        if (!Number.isFinite(nutrient) || nutrient < 0 || !Number.isFinite(kcal) || kcal <= 0 || !Number.isFinite(foodWeight) || foodWeight <= 0) {
          return error('Nutrient amount may be zero; food energy and food weight must be greater than zero.');
        }
        const unit = ['mg', 'mcg', 'g'].includes(values.nutrientUnit) ? values.nutrientUnit : 'mg';
        const perKcal = nutrient / kcal;
        const per100Kcal = perKcal * 100;
        const energyDensity = kcal / foodWeight;
        return {
          headline: `${format(per100Kcal, 2)} ${unit} per 100 kcal`,
          rows: [['Nutrient density', `${format(perKcal, 3)} ${unit}/kcal`], ['Energy density', `${format(energyDensity, 2)} kcal/g`]],
          formula: 'nutrient density = nutrient amount ÷ kcal; energy density = kcal ÷ food weight in grams',
          work: [
            `${format(nutrient, 2)} ${unit} ÷ ${format(kcal, 1)} kcal = ${format(perKcal, 3)} ${unit}/kcal`,
            `${format(kcal, 1)} kcal ÷ ${format(foodWeight, 1)} g = ${format(energyDensity, 3)} kcal/g`
          ]
        };
      },
      caveat: 'Nutrient density is nutrient-specific; one food can be dense in one nutrient and not another. Energy-dense does not mean nutrient-poor—nuts are a useful counterexample.'
    },
    {
      id: 'glycemic-fibre',
      mark: 'GL',
      title: 'Glycemic load & fibre rule',
      description: 'Calculate a portion’s glycemic load and the course fibre estimate of 14 g per 1,000 kcal.',
      units: [4],
      fields: [
        { id: 'gi', label: 'Glycemic index', type: 'number', value: 60, min: 0, max: 100, step: 1, help: 'GI value from 0 to 100' },
        { id: 'availableCarb', label: 'Available carbohydrate', type: 'number', value: 20, min: 0, step: 0.1, help: 'grams in the portion' },
        { id: 'energy', label: 'Daily energy', type: 'number', value: 2000, min: 1, step: 50, help: 'kcal/day for the fibre exercise', wide: true }
      ],
      calculate(values) {
        const gi = number(values, 'gi');
        const availableCarb = number(values, 'availableCarb');
        const energy = number(values, 'energy');
        if (!Number.isFinite(gi) || gi < 0 || gi > 100 || !Number.isFinite(availableCarb) || availableCarb < 0 || !Number.isFinite(energy) || energy <= 0) {
          return error('Use a GI from 0–100, zero or more available-carbohydrate grams, and daily energy greater than zero.');
        }
        const gl = gi * availableCarb / 100;
        const fibre = energy * 14 / 1000;
        const glBand = gl <= 10 ? 'low teaching range' : gl < 20 ? 'medium teaching range' : 'high teaching range';
        return {
          headline: `Glycemic load ${format(gl, 1)}`,
          rows: [['GL teaching band', glBand], ['Course fibre estimate', `${format(fibre, 1)} g/day`]],
          formula: 'GL = GI × available carbohydrate grams ÷ 100; fibre = kcal × 14 g ÷ 1,000 kcal',
          work: [
            `${format(gi, 0)} × ${format(availableCarb, 1)} g ÷ 100 = ${format(gl, 2)}`,
            `${format(energy, 0)} kcal × 14 g ÷ 1,000 kcal = ${format(fibre, 1)} g`
          ]
        };
      },
      caveat: 'GI and GL do not rank overall food quality. Ripeness, processing, preparation, meal composition and individual physiology affect response. The fibre rule is a coursework estimate, not a complete clinical prescription.'
    },
    {
      id: 'protein-rda',
      mark: '0.8',
      title: 'Adult protein RDA practice',
      description: 'Use the introductory adult RDA of 0.8 g/kg and compare it with an entered intake.',
      units: [5, 9, 14],
      fields: [
        { id: 'system', label: 'Weight unit', type: 'select', value: 'kg', options: [['kg', 'Kilograms'], ['lb', 'Pounds']], help: 'Pounds are converted to kilograms first.' },
        { id: 'weight', label: 'Body weight', type: 'number', value: 70, min: 1, step: 0.1, help: 'in the selected unit' },
        { id: 'intake', label: 'Protein intake to compare', type: 'number', value: 60, min: 0, step: 1, help: 'grams/day; optional comparison', wide: true }
      ],
      calculate(values) {
        const weight = number(values, 'weight');
        const intake = number(values, 'intake');
        if (!Number.isFinite(weight) || weight <= 0 || !Number.isFinite(intake) || intake < 0) return error('Enter a positive weight and a protein intake of zero or more.');
        const kg = values.system === 'lb' ? weight / 2.2046226218 : weight;
        const rda = kg * 0.8;
        const difference = intake - rda;
        return {
          headline: `${format(rda, 1)} g protein/day`,
          rows: [['Weight used', `${format(kg, 1)} kg`], ['Entered intake', `${format(intake, 1)} g/day`], ['Arithmetic difference', `${difference >= 0 ? '+' : '−'}${format(Math.abs(difference), 1)} g/day`]],
          formula: 'introductory healthy-adult RDA = body weight in kg × 0.8 g/kg',
          work: [
            values.system === 'lb' ? `${format(weight, 1)} lb ÷ 2.2046 = ${format(kg, 2)} kg` : `Weight is already ${format(kg, 2)} kg`,
            `${format(kg, 2)} kg × 0.8 g/kg = ${format(rda, 2)} g/day`
          ]
        };
      },
      caveat: '0.8 g/kg is the introductory RDA for many healthy adults. Pregnancy, lactation, growth, aging, training, illness, injury, energy restriction and clinical conditions can change appropriate targets.'
    },
    {
      id: 'fat-range',
      mark: '20–35',
      title: 'Fat AMDR & saturated-fat ceiling',
      description: 'Convert the adult fat AMDR and a saturated-fat percentage ceiling from energy into grams.',
      units: [6],
      fields: [
        { id: 'energy', label: 'Total daily energy', type: 'number', value: 2400, min: 1, step: 50, help: 'kcal/day', wide: true },
        { id: 'fatLow', label: 'Fat range — low end', type: 'number', value: 20, min: 0, max: 100, step: 1, help: 'percent of energy' },
        { id: 'fatHigh', label: 'Fat range — high end', type: 'number', value: 35, min: 0, max: 100, step: 1, help: 'percent of energy' },
        { id: 'satMax', label: 'Saturated-fat ceiling', type: 'number', value: 10, min: 0, max: 100, step: 0.1, help: 'percent of energy' }
      ],
      calculate(values) {
        const energy = number(values, 'energy');
        const fatLow = number(values, 'fatLow');
        const fatHigh = number(values, 'fatHigh');
        const satMax = number(values, 'satMax');
        if (!Number.isFinite(energy) || energy <= 0 || [fatLow, fatHigh, satMax].some(value => !Number.isFinite(value) || value < 0 || value > 100) || fatLow > fatHigh) {
          return error('Enter energy greater than zero and valid percentages; the low fat value cannot exceed the high value.');
        }
        const fatKcalLow = energy * fatLow / 100;
        const fatKcalHigh = energy * fatHigh / 100;
        const satKcal = energy * satMax / 100;
        return {
          headline: `${range(fatKcalLow / 9, fatKcalHigh / 9, 'g fat/day', 1)}`,
          rows: [['Total-fat energy', range(fatKcalLow, fatKcalHigh, 'kcal', 0)], ['Saturated-fat ceiling', `< ${format(satKcal / 9, 1)} g/day`], ['Ceiling energy', `< ${format(satKcal, 0)} kcal/day`]],
          formula: 'fat grams = total kcal × percentage ÷ 100 ÷ 9 kcal/g',
          work: [
            `${format(energy, 0)} × ${format(fatLow, 1)}–${format(fatHigh, 1)}% = ${range(fatKcalLow, fatKcalHigh, 'kcal', 0)}`,
            `${range(fatKcalLow, fatKcalHigh, 'kcal', 0)} ÷ 9 = ${range(fatKcalLow / 9, fatKcalHigh / 9, 'g', 1)}`,
            `${format(energy, 0)} × ${format(satMax, 1)}% ÷ 9 = ${format(satKcal / 9, 1)} g at the ceiling`
          ]
        };
      },
      caveat: '“Less than 10%” means below the calculated ceiling, not exactly at it. Individual therapeutic targets may be lower. Food pattern and the nutrient replacing saturated fat both matter.'
    },
    {
      id: 'energy-balance',
      mark: '3,500',
      title: 'Energy-balance course shortcuts',
      description: 'Work the 3,500-kcal-per-pound and roughly 100-kcal-per-mile shortcuts while seeing why they are not prediction laws.',
      units: [8],
      fields: [
        { id: 'intake', label: 'Average daily intake', type: 'number', value: 2200, min: 0, step: 10, help: 'kcal/day' },
        { id: 'expenditure', label: 'Average daily expenditure', type: 'number', value: 2400, min: 0, step: 10, help: 'kcal/day' },
        { id: 'miles', label: 'Additional walking', type: 'number', value: 1, min: 0, step: 0.1, help: 'miles/day; course shortcut uses ≈100 kcal/mile' },
        { id: 'days', label: 'Time period', type: 'number', value: 30, min: 1, step: 1, help: 'days' },
        { id: 'weightLost', label: 'Weight already lost', type: 'number', value: 30, min: 0, step: 0.5, help: 'lb; for the course’s 12 kcal/day per lb maintenance shortcut', wide: true }
      ],
      calculate(values) {
        const intake = number(values, 'intake');
        const expenditure = number(values, 'expenditure');
        const miles = number(values, 'miles');
        const days = number(values, 'days');
        const weightLost = number(values, 'weightLost');
        if ([intake, expenditure, miles, weightLost].some(value => !Number.isFinite(value) || value < 0) || !Number.isFinite(days) || days <= 0) {
          return error('Daily values must be zero or positive, and the time period must be greater than zero.');
        }
        const walking = miles * 100;
        const dailyBalance = intake - expenditure - walking;
        const periodBalance = dailyBalance * days;
        const pounds = periodBalance / 3500;
        const maintenanceChange = weightLost * 12;
        const direction = periodBalance > 0 ? 'surplus' : periodBalance < 0 ? 'deficit' : 'balance';
        return {
          headline: `${format(Math.abs(periodBalance), 0)} kcal ${direction}`,
          rows: [['Adjusted daily balance', `${dailyBalance >= 0 ? '+' : '−'}${format(Math.abs(dailyBalance), 0)} kcal/day`], ['Walking shortcut', `${format(walking, 0)} kcal/day`], ['Course weight equivalent', `${pounds >= 0 ? '+' : '−'}${format(Math.abs(pounds), 2)} lb`], ['Course maintenance shortcut', `${format(maintenanceChange, 0)} fewer kcal/day after ${format(weightLost, 1)} lb lost`]],
          formula: 'period balance = [intake − expenditure − (miles × 100)] × days; course pounds ≈ kcal ÷ 3,500; maintenance shortcut = pounds lost × 12 kcal/day',
          work: [
            `${format(miles, 1)} miles × 100 kcal/mile = ${format(walking, 0)} kcal/day`,
            `(${format(intake, 0)} − ${format(expenditure, 0)} − ${format(walking, 0)}) × ${format(days, 0)} = ${format(periodBalance, 0)} kcal`,
            `${format(periodBalance, 0)} ÷ 3,500 = ${format(pounds, 2)} lb by the static course rule`,
            `${format(weightLost, 1)} lb × 12 kcal/day = ${format(maintenanceChange, 0)} fewer kcal/day by the course maintenance shortcut`
          ]
        };
      },
      caveat: 'These are quiz-arithmetic shortcuts, not forecasts. Weight change is dynamic: resting expenditure, movement, appetite, water, glycogen and tissue composition change over time. A mile’s energy cost also varies with body size, speed and terrain.'
    },
    {
      id: 'activity-rest',
      mark: '15–30',
      title: 'Activity & resting expenditure',
      description: 'Recreate the course percentage range for activity and its 1–1.5 kcal/min resting estimate.',
      units: [8, 9],
      fields: [
        { id: 'dailyEnergy', label: 'Total daily expenditure', type: 'number', value: 2700, min: 1, step: 50, help: 'kcal/day' },
        { id: 'minutes', label: 'Resting time', type: 'number', value: 1440, min: 1, step: 1, help: 'minutes; 1,440 is one day' },
        { id: 'activityLow', label: 'Activity — low end', type: 'number', value: 15, min: 0, max: 100, step: 1, help: 'percent of daily expenditure' },
        { id: 'activityHigh', label: 'Activity — high end', type: 'number', value: 30, min: 0, max: 100, step: 1, help: 'percent of daily expenditure' },
        { id: 'restLow', label: 'Rest rate — low end', type: 'number', value: 1, min: 0, step: 0.1, help: 'kcal/min' },
        { id: 'restHigh', label: 'Rest rate — high end', type: 'number', value: 1.5, min: 0, step: 0.1, help: 'kcal/min' }
      ],
      calculate(values) {
        const dailyEnergy = number(values, 'dailyEnergy');
        const minutes = number(values, 'minutes');
        const activityLow = number(values, 'activityLow');
        const activityHigh = number(values, 'activityHigh');
        const restLow = number(values, 'restLow');
        const restHigh = number(values, 'restHigh');
        if (!Number.isFinite(dailyEnergy) || dailyEnergy <= 0 || !Number.isFinite(minutes) || minutes <= 0 || [activityLow, activityHigh].some(value => !Number.isFinite(value) || value < 0 || value > 100) || [restLow, restHigh].some(value => !Number.isFinite(value) || value < 0) || activityLow > activityHigh || restLow > restHigh) {
          return error('Enter positive energy/time values and ordered low-to-high ranges. Activity percentages must be between 0 and 100.');
        }
        const activityKcalLow = dailyEnergy * activityLow / 100;
        const activityKcalHigh = dailyEnergy * activityHigh / 100;
        const restKcalLow = minutes * restLow;
        const restKcalHigh = minutes * restHigh;
        return {
          headline: `${range(activityKcalLow, activityKcalHigh, 'activity kcal', 0)}`,
          rows: [['Activity share', `${format(activityLow, 1)}–${format(activityHigh, 1)}%`], ['Resting estimate', range(restKcalLow, restKcalHigh, 'kcal', 0)], ['Rest period', `${format(minutes, 0)} minutes`]],
          formula: 'activity kcal = total daily kcal × activity percentage; resting kcal = minutes × kcal/min',
          work: [
            `${format(dailyEnergy, 0)} × ${format(activityLow, 1)}–${format(activityHigh, 1)}% = ${range(activityKcalLow, activityKcalHigh, 'kcal', 0)}`,
            `${format(minutes, 0)} min × ${format(restLow, 1)}–${format(restHigh, 1)} kcal/min = ${range(restKcalLow, restKcalHigh, 'kcal', 0)}`
          ]
        };
      },
      caveat: 'Both ranges are textbook estimates. Real expenditure varies widely with body size, lean mass, movement, age, physiology and measurement conditions; activity energy can fall far outside 15–30%.'
    },
    {
      id: 'sweat-hydration',
      mark: 'L/h',
      title: 'Sweat rate, % loss & rehydration',
      description: 'Use pre/post body mass, drinks, urine and duration to estimate exercise sweat rate and the course rehydration range.',
      units: [9, 12],
      fields: [
        { id: 'system', label: 'Body-mass unit', type: 'select', value: 'kg', options: [['kg', 'Kilograms'], ['lb', 'Pounds']], help: 'Use the same unit before and after.' },
        { id: 'duration', label: 'Exercise duration', type: 'number', value: 1.5, min: 0.01, step: 0.1, help: 'hours' },
        { id: 'pre', label: 'Pre-exercise body mass', type: 'number', value: 70, min: 1, step: 0.1, help: 'in the selected unit' },
        { id: 'post', label: 'Post-exercise body mass', type: 'number', value: 68.8, min: 1, step: 0.1, help: 'in the selected unit' },
        { id: 'drink', label: 'Fluid consumed', type: 'number', value: 0.75, min: 0, step: 0.05, help: 'litres during exercise' },
        { id: 'urine', label: 'Urine produced', type: 'number', value: 0, min: 0, step: 0.05, help: 'litres during exercise' }
      ],
      calculate(values) {
        const preInput = number(values, 'pre');
        const postInput = number(values, 'post');
        const drink = number(values, 'drink');
        const urine = number(values, 'urine');
        const duration = number(values, 'duration');
        if (![preInput, postInput, duration].every(value => Number.isFinite(value) && value > 0) || [drink, urine].some(value => !Number.isFinite(value) || value < 0)) {
          return error('Enter positive before/after body mass and duration; fluid and urine may be zero or positive.');
        }
        const conversion = values.system === 'lb' ? 1 / 2.2046226218 : 1;
        const preKg = preInput * conversion;
        const postKg = postInput * conversion;
        const bodyLossKg = preKg - postKg;
        const sweatLoss = bodyLossKg + drink - urine;
        const sweatRate = sweatLoss / duration;
        const percentLoss = bodyLossKg / preKg * 100;
        const poundsLost = Math.max(0, bodyLossKg * 2.2046226218);
        const cupsLow = poundsLost * 2;
        const cupsHigh = poundsLost * 3;
        return {
          headline: `${format(sweatRate, 2)} L/hour`,
          rows: [['Estimated sweat loss', `${format(sweatLoss, 2)} L`], ['Body-mass change', `${format(percentLoss, 2)}%`], ['Course rehydration range', poundsLost ? `${range(cupsLow, cupsHigh, 'cups', 1)} (${range(cupsLow * 0.24, cupsHigh * 0.24, 'L', 2)})` : 'No replacement range from body-mass loss']],
          formula: 'sweat rate = (body-mass loss in kg + drink L − urine L) ÷ hours; % loss = mass loss ÷ starting mass × 100',
          work: [
            `${format(preKg, 2)} kg − ${format(postKg, 2)} kg = ${format(bodyLossKg, 2)} kg body-mass change`,
            `(${format(bodyLossKg, 2)} + ${format(drink, 2)} − ${format(urine, 2)}) ÷ ${format(duration, 2)} h = ${format(sweatRate, 2)} L/h`,
            `${format(bodyLossKg, 2)} ÷ ${format(preKg, 2)} × 100 = ${format(percentLoss, 2)}%`,
            `${format(poundsLost, 2)} lb × 2–3 cups/lb = ${range(cupsLow, cupsHigh, 'cups', 1)}`
          ]
        };
      },
      caveat: 'This is an educational field estimate: use comparable dry clothing and similar scale conditions. Body-mass change is not always pure water. Rehydrate progressively with sodium as appropriate, avoid drinking beyond losses, and treat confusion or fainting in heat as an emergency.'
    },
    {
      id: 'pregnancy-lactation',
      mark: '+kcal',
      title: 'Pregnancy & lactation course math',
      description: 'Apply the course’s average energy additions and practise the 175 g carbohydrate and 71 g protein pregnancy reference amounts.',
      units: [14],
      fields: [
        { id: 'stage', label: 'Life stage', type: 'select', value: 'trimester2', options: [['trimester1', 'Pregnancy · first trimester'], ['trimester2', 'Pregnancy · second trimester'], ['trimester3', 'Pregnancy · third trimester'], ['lactation', 'Lactation']], help: 'Uses the average additions taught in Unit 14.', wide: true },
        { id: 'baseline', label: 'Prepregnancy energy baseline', type: 'number', value: 2400, min: 1, step: 50, help: 'kcal/day' },
        { id: 'carbohydrate', label: 'Current carbohydrate intake', type: 'number', value: 150, min: 0, step: 1, help: 'g/day; pregnancy exercise' },
        { id: 'protein', label: 'Current protein intake', type: 'number', value: 60, min: 0, step: 1, help: 'g/day; pregnancy exercise' }
      ],
      calculate(values) {
        const baseline = number(values, 'baseline');
        const carbohydrate = number(values, 'carbohydrate');
        const protein = number(values, 'protein');
        if (!Number.isFinite(baseline) || baseline <= 0 || [carbohydrate, protein].some(value => !Number.isFinite(value) || value < 0)) {
          return error('Enter a positive baseline and zero or positive carbohydrate and protein amounts.');
        }
        const additions = {
          trimester1: [0, 0, 'No routine average addition in this course exercise'],
          trimester2: [340, 340, 'Second trimester'],
          trimester3: [452, 452, 'Third trimester'],
          lactation: [330, 400, 'Lactation']
        };
        const selected = additions[values.stage] || additions.trimester2;
        const [low, high, label] = selected;
        const totalLow = baseline + low;
        const totalHigh = baseline + high;
        const pregnancy = values.stage !== 'lactation';
        const carbGap = 175 - carbohydrate;
        const proteinGap = 71 - protein;
        const energyText = low === high ? `${format(totalLow, 0)} kcal/day` : range(totalLow, totalHigh, 'kcal/day', 0);
        const rows = [['Stage addition', low === high ? `+${format(low, 0)} kcal/day` : `+${format(low, 0)}–${format(high, 0)} kcal/day`]];
        if (pregnancy) {
          rows.push(['To 175 g carbohydrate', carbGap >= 0 ? `add ${format(carbGap, 1)} g/day` : `${format(Math.abs(carbGap), 1)} g/day above reference`]);
          rows.push(['To 71 g protein', proteinGap >= 0 ? `add ${format(proteinGap, 1)} g/day` : `${format(Math.abs(proteinGap), 1)} g/day above reference`]);
        }
        const work = [`${format(baseline, 0)} + ${low === high ? format(low, 0) : `${format(low, 0)}–${format(high, 0)}`} = ${energyText}`];
        if (pregnancy) {
          work.push(`175 − ${format(carbohydrate, 1)} = ${format(carbGap, 1)} g carbohydrate difference`);
          work.push(`71 − ${format(protein, 1)} = ${format(proteinGap, 1)} g protein difference`);
        }
        return {
          headline: energyText,
          rows,
          formula: pregnancy ? 'stage total = baseline + average stage addition; nutrient difference = reference − current intake' : 'lactation range = prepregnancy baseline + 330–400 kcal/day',
          work: [`${label}: ${work[0]}`, ...work.slice(1)]
        };
      },
      caveat: 'These are population averages used for course practice, not automatic prescriptions. Actual needs vary with body size, activity, fetal or infant growth, multiple gestation, milk production, health conditions and postpartum weight trend; prenatal or clinical care takes priority.'
    }
  ];

  const toolValues = Object.fromEntries(calculators.map(tool => [tool.id, Object.fromEntries(tool.fields.map(field => [field.id, String(field.value)]))]));
  let selectedTool = null;
  let toolFilter = 'unit';
  let previousView = null;
  let renderedUnit = null;

  function fieldHTML(tool, field) {
    const id = `study-tool-${tool.id}-${field.id}`;
    const value = toolValues[tool.id][field.id];
    const wide = field.wide ? ' tool-field-wide' : '';
    const control = field.type === 'select'
      ? `<select id="${escapeHTML(id)}" name="${escapeHTML(field.id)}">${field.options.map(([optionValue, label]) => `<option value="${escapeHTML(optionValue)}"${String(optionValue) === String(value) ? ' selected' : ''}>${escapeHTML(label)}</option>`).join('')}</select>`
      : `<input id="${escapeHTML(id)}" name="${escapeHTML(field.id)}" type="number" value="${escapeHTML(value)}"${field.min !== undefined ? ` min="${escapeHTML(field.min)}"` : ''}${field.max !== undefined ? ` max="${escapeHTML(field.max)}"` : ''}${field.step !== undefined ? ` step="${escapeHTML(field.step)}"` : ' step="any"'} inputmode="decimal">`;
    return `<label class="tool-field${wide}" for="${escapeHTML(id)}"><span class="tool-label-text">${escapeHTML(field.label)}</span><span class="tool-input-wrap">${control}</span>${field.help ? `<small class="tool-help">${escapeHTML(field.help)}</small>` : ''}</label>`;
  }

  function resultHTML(tool, result) {
    if (result.error) return `<div class="tool-error" role="alert">${escapeHTML(result.error)}</div>`;
    return `<div class="tool-result-kicker">Worked result</div>
      <div class="tool-result-headline">${escapeHTML(result.headline)}</div>
      ${result.rows?.length ? `<div class="tool-result-grid">${result.rows.map(([label, value]) => `<div class="tool-result-stat"><span>${escapeHTML(label)}</span><strong>${escapeHTML(value)}</strong></div>`).join('')}</div>` : ''}
      ${result.formula ? `<div class="tool-formula"><b>Formula</b><br><code>${escapeHTML(result.formula)}</code></div>` : ''}
      ${result.work?.length ? `<details class="tool-work" open><summary>See the calculation</summary><ol>${result.work.map(step => `<li>${escapeHTML(step)}</li>`).join('')}</ol></details>` : ''}
      <p class="tool-caveat">${escapeHTML(tool.caveat)}</p>`;
  }

  function calculateAndDisplay(tool) {
    const resultBox = app.querySelector('#tool-result');
    if (!resultBox) return;
    let result;
    try {
      result = tool.calculate(toolValues[tool.id]);
    } catch {
      result = error('This calculation could not be completed. Check the values and try again.');
    }
    resultBox.innerHTML = resultHTML(tool, result);
  }

  function attachWorkspace(tool) {
    const form = app.querySelector('#study-tool-form');
    if (!form) return;
    form.addEventListener('submit', event => event.preventDefault());
    form.addEventListener('input', event => {
      if (!event.target.name) return;
      toolValues[tool.id][event.target.name] = event.target.value;
      calculateAndDisplay(tool);
    });
    form.addEventListener('change', event => {
      if (!event.target.name) return;
      toolValues[tool.id][event.target.name] = event.target.value;
      calculateAndDisplay(tool);
    });
    app.querySelector('#tool-reset')?.addEventListener('click', () => {
      toolValues[tool.id] = Object.fromEntries(tool.fields.map(field => [field.id, String(field.value)]));
      renderStudyTools();
    });
    calculateAndDisplay(tool);
  }

  function visibleCalculators() {
    return toolFilter === 'all' ? calculators : calculators.filter(tool => tool.units.includes(Number(unitId)));
  }

  function renderStudyTools() {
    const visible = visibleCalculators();
    if (!visible.length) toolFilter = 'all';
    const list = visibleCalculators();
    if (!selectedTool || !list.some(tool => tool.id === selectedTool)) selectedTool = list[0]?.id || calculators[0].id;
    const tool = calculators.find(item => item.id === selectedTool) || calculators[0];
    const currentTitle = unitTitle(Number(unitId));
    app.innerHTML = `<section class="study-tools" aria-labelledby="tools-title">
      <div class="tools-hero">
        <div><div class="eyebrow">Practice the course calculations</div><h2 id="tools-title">See the formula. Work the numbers. Keep the context.</h2><p>Every calculator below is tied to a lesson in this course. Results show the setup and arithmetic so you can practise the method—not just collect an answer.</p></div>
        <div class="tools-count" aria-label="${calculators.length} calculators in the library"><strong>${calculators.length}</strong><span>course calculators</span></div>
      </div>
      <div class="tools-controls">
        <div class="tools-filter" aria-label="Filter calculators">
          <button type="button" data-tool-filter="unit" aria-pressed="${toolFilter === 'unit'}">For Unit ${escapeHTML(unitId)}</button>
          <button type="button" data-tool-filter="all" aria-pressed="${toolFilter === 'all'}">All calculators</button>
        </div>
        <p class="tools-context">${toolFilter === 'unit' ? `${escapeHTML(list.length)} tool${list.length === 1 ? '' : 's'} connected to ${escapeHTML(currentTitle)}` : `Browsing all ${calculators.length} course tools`}</p>
      </div>
      <div class="tools-shell">
        <aside class="tool-catalog" aria-label="Calculator list">
          ${list.map(item => `<button type="button" class="tool-card" data-tool-id="${escapeHTML(item.id)}" aria-current="${item.id === tool.id}"><span class="tool-card-mark" aria-hidden="true">${escapeHTML(item.mark)}</span><span class="tool-card-copy"><strong>${escapeHTML(item.title)}</strong><small>${item.units.map(id => `Unit ${id}`).join(' · ')}</small></span></button>`).join('')}
        </aside>
        <article class="tool-workspace" aria-labelledby="active-tool-title">
          <header class="tool-workspace-head"><div class="eyebrow">Guided calculation</div><h3 id="active-tool-title">${escapeHTML(tool.title)}</h3><p>${escapeHTML(tool.description)}</p><div class="tool-unit-chips">${tool.units.map(id => `<span class="tool-unit-chip">${escapeHTML(unitTitle(id))}</span>`).join('')}</div></header>
          <form class="tool-form" id="study-tool-form" novalidate><div class="tool-field-grid">${tool.fields.map(field => fieldHTML(tool, field)).join('')}</div><div class="tool-form-actions"><button type="button" class="tool-reset" id="tool-reset">Reset example</button></div></form>
          <section class="tool-result" id="tool-result" aria-live="polite" aria-atomic="true"></section>
        </article>
      </div>
      <p class="tools-footnote">Educational practice only. These tools reproduce introductory course methods and clearly flag estimates or historical equations; they do not diagnose, prescribe or replace individualized care.</p>
    </section>`;

    app.querySelectorAll('[data-tool-filter]').forEach(button => {
      button.addEventListener('click', () => {
        toolFilter = button.dataset.toolFilter;
        const nextList = visibleCalculators();
        if (!nextList.some(item => item.id === selectedTool)) selectedTool = nextList[0]?.id || calculators[0].id;
        renderStudyTools();
      });
    });
    app.querySelectorAll('[data-tool-id]').forEach(button => {
      button.addEventListener('click', () => {
        selectedTool = button.dataset.toolId;
        renderStudyTools();
        app.querySelector('#active-tool-title')?.focus?.({ preventScroll: true });
      });
    });
    attachWorkspace(tool);
  }

  const toolsBaseRender = render;
  render = function renderWithStudyTools() {
    const enteringTools = view === 'calc' && previousView !== 'calc';
    const changedUnit = Number(unitId) !== renderedUnit;
    toolsBaseRender();
    if (view === 'calc') {
      if (enteringTools || changedUnit) {
        toolFilter = 'unit';
        selectedTool = null;
      }
      renderedUnit = Number(unitId);
      renderStudyTools();
    }
    previousView = view;
  };

  window.NUTRITION_CALCULATOR_COUNT = calculators.length;
  window.dispatchEvent(new CustomEvent('nutrition-calculators-ready'));
})();
