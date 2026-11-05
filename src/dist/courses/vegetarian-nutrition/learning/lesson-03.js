(function(){
  window.VN_LEARNING=window.VN_LEARNING||{};
  const M=(id,title,highYield,teaching,keyPoints,visual,mnemonic,goodToKnow,practiceConnection,activity)=>({id,title,highYield,teaching,keyPoints,visual,mnemonic,goodToKnow,practiceConnection,activity});
  const V=(title,kind,items)=>({title,kind,items}); const N=(title,cue,explanation)=>({title,cue,explanation}); const A=(prompt,options)=>({prompt,options}); const O=(text,correct,feedback)=>({text,correct,feedback});
  window.VN_LEARNING['lesson-3']={version:3,practiceVersion:3,title:'Protein and the nutritional value of beans',chapter:'Protein science + beans in practical meals',duration:'130–160 minutes',
    outcomes:['Explain how amino acids support protein synthesis and why nine are indispensable in adult nutrition.','Reject the outdated requirement to combine complementary proteins at every meal.','Assess plant-protein adequacy using total intake, energy, variety, digestibility and life stage.','Describe how processing and preparation alter digestibility and antinutritional factors.','Translate protein science into practical meals without disease claims or unnecessary supplementation.','Compare cooked bean, chickpea, lentil and mature-soybean portions using matched nutrient records.','Explain the fibre, carbohydrate, folate and mineral contribution of pulses and distinguish iron content from absorption.','Choose and prepare dry, canned and soy-based foods according to the person’s needs.'],
    modules:[
      {id:'building',title:'Build protein from amino acids',summary:'Understand the parts, the limiting step and the role of energy.',moments:[
        M('vn3-m1','Twenty amino acids build human proteins','The body uses twenty common amino acids for protein synthesis; nine are indispensable and must be supplied by the diet.',[
          'Proteins are chains of amino acids folded into functional shapes. They serve as enzymes, transporters, antibodies, structural proteins, hormones and contractile tissue. The body can synthesize some amino acids, while nine are considered indispensable for adults because synthesis is insufficient to meet needs.',
          '“Indispensable” does not mean an amino acid exists only in animal foods. Plant proteins contain all twenty amino acids, but the proportions and digestibility differ by food. Requirements concern the absorbed pattern across total intake, not whether one food perfectly mirrors human tissue.'
        ],['Twenty common amino acids participate in protein synthesis.','Nine are indispensable for adults.','Plant foods contain all indispensable amino acids in varying proportions.'],
        V('From food to function','flow',[{label:'Dietary protein',detail:'Food proteins are digested.'},{label:'Amino-acid pool',detail:'Absorbed amino acids mix with recycled amino acids.'},{label:'Protein synthesis',detail:'Cells assemble proteins according to genetic instructions.'}]),
        N('Nine must arrive','INDISPENSABLE = IN THE DIET', 'The body needs dietary delivery even though the amino acid may occur in many foods.'),
        'Needs for some amino acids can become conditionally higher during illness, injury or rapid growth; clinical context matters.',
        'Teach amino acids as a pooled daily supply rather than ranking foods as “complete” versus “useless.”',
        A('Why are nine amino acids called indispensable?',[O('They occur only in beef.',false,'They occur in plant and animal proteins.'),O('The body cannot synthesize enough to meet requirements.',true,'Dietary intake must supply the shortfall.'),O('They are the only amino acids used in muscle.',false,'Many amino acids participate in body proteins.')])
        ),
        M('vn3-m2','Energy protects protein from being used as fuel','Adequate energy intake allows dietary amino acids to be used for synthesis instead of being oxidized to meet energy needs.',[
          'Protein adequacy cannot be separated from energy adequacy. When total energy intake is too low, amino acids are more likely to be oxidized, and the body may break down tissue to support essential functions. This is why severe protein deficiency usually occurs with inadequate food intake, malabsorption or illness rather than from vegetarian identity alone.',
          'Small stomach capacity, poor appetite, very high fibre intake, food insecurity and restrictive eating can reduce energy intake. In these contexts, adding energy-dense foods such as nut or seed butters, tofu, oils, avocado or fortified products can protect both energy and protein adequacy.'
        ],['Energy and protein adequacy are linked.','Low total intake raises protein risk.','Energy-dense foods can help when volume tolerance is limited.'],
        V('Protein-use fork','decision',[{label:'Energy adequate',detail:'Amino acids are available for synthesis and repair.'},{label:'Energy inadequate',detail:'More amino acids are oxidized for energy.'},{label:'Prolonged deficit',detail:'Body tissue may be mobilized.'}]),
        N('Feed the work before the bricks','ENERGY FIRST, PROTEIN BUILDS', 'Adequate fuel helps reserve amino acids for building functions.'),
        'Protein deficiency can coexist with obesity, chronic disease or malabsorption; appearance alone does not establish status.',
        'Check weight trend, appetite, food access and symptoms rather than focusing only on grams of protein.',
        A('Which situation most raises protein-adequacy concern?',[O('A varied, energy-sufficient vegetarian diet.',false,'Variety and sufficient energy generally support adequacy.'),O('A highly restrictive, low-energy pattern with unintended weight loss.',true,'Energy deficit can compromise protein use and total intake.'),O('Eating lentils at lunch without rice at the same meal.',false,'Same-meal complementation is unnecessary.')])
        ),
        M('vn3-m9','Follow protein from plate to amino-acid pool','Digestion releases amino acids and small peptides; absorbed amino acids join a dynamic pool used for synthesis, metabolism and—when necessary—energy.',[
          'Stomach acid unfolds food proteins and pepsin begins cleavage. Pancreatic proteases and enzymes at the intestinal surface continue digestion, after which amino acids and small peptides enter intestinal cells and then the portal circulation. The liver and other tissues draw from this circulating pool; the body also recycles amino acids as proteins are continuously broken down and rebuilt.',
          'Unlike carbohydrate stored as glycogen or fat stored in adipose tissue, there is no dedicated warehouse for excess dietary amino acids. Nitrogen is removed and ultimately excreted mainly as urea, while the carbon skeleton can enter energy metabolism or other pathways. This is why “more protein” is not the same as “more stored muscle”: resistance stimulus, energy, total diet and recovery determine how amino acids are used.'
        ],['Digestion—not food origin—makes amino acids absorbable.','The amino-acid pool includes food-derived and recycled amino acids.','The body has no dedicated protein-storage depot for unlimited excess.'],
        V('Protein journey','flow',[{label:'Digest',detail:'Stomach and intestinal enzymes cleave food protein.'},{label:'Absorb',detail:'Amino acids and small peptides cross the intestine.'},{label:'Pool',detail:'Dietary and recycled amino acids circulate.'},{label:'Use',detail:'Synthesis, signalling, energy metabolism and nitrogen disposal.'}]),
        N('Track the protein path','DIGEST · ABSORB · POOL · USE', 'This sequence explains why daily variety works without same-meal “completion.”'),
        'Protein turnover is continuous; the body does not wait for a perfectly paired meal before using amino acids.',
        'Explain muscle gain as training plus sufficient protein, energy and recovery—not as a direct conversion of a protein shake into muscle.',
        A('Why is unlimited extra protein not stored as a special reserve?',[O('The body has no dedicated amino-acid storage depot; excess nitrogen is removed.',true,'Amino acids are used, transformed or oxidized rather than warehoused as free protein.'),O('Amino acids cannot enter the bloodstream.',false,'They are absorbed and circulate.'),O('Only animal protein can be digested.',false,'Plant and animal proteins are both digested.')])
        )
      ]},
      {id:'adequacy',title:'Replace the complementation myth with a daily pattern',summary:'Use total intake, variety and distribution instead of rigid pairings.',moments:[
        M('vn3-m3','Complementary proteins do not need to meet at one meal','A varied, energy-sufficient diet supplies amino acids across the day; rigid grain-plus-legume pairing at every meal is outdated.',[
          'Grains tend to be relatively lower in lysine, while legumes tend to be relatively lower in methionine, but “lower” is not “absent.” The body maintains an amino-acid pool through digestion of multiple meals and recycling of body proteins. Healthy adults do not need to combine specific foods at each meal to create a usable protein.',
          'Variety remains valuable because it broadens amino-acid supply and contributes iron, zinc, fibre and other nutrients. Pairing foods such as rice and beans can be delicious and culturally meaningful—it is simply not a biochemical deadline imposed on every meal.'
        ],['All plant proteins contain indispensable amino acids.','Relative limiting amino acids vary by food.','Variety across the day is sufficient for most healthy adults.'],
        V('Amino acids across a day','timeline',[{label:'Breakfast',detail:'Oats, soy beverage and seeds.'},{label:'Lunch',detail:'Lentil soup and bread.'},{label:'Dinner',detail:'Tofu, rice and vegetables.'},{label:'Daily pool',detail:'Amino acids from all meals contribute.'}]),
        N('Drop the meal clock','VARIETY ACROSS THE DAY', 'Complementary foods may be separated by hours and still contribute to overall adequacy.'),
        'The old “incomplete protein” label can make nutritious plant foods sound inadequate; “different amino-acid profiles” is more accurate.',
        'Correct the source question explicitly: careful complementation at every meal is not required.',
        A('Which statement reflects current protein guidance?',[O('Beans and rice must be eaten in the same bite.',false,'There is no same-bite or same-meal requirement.'),O('Eat varied protein foods across the day with adequate energy.',true,'This supports amino-acid adequacy without rigid pairing.'),O('Plant foods contain no indispensable amino acids.',false,'They contain all of them in varying proportions.')])
        ),
        M('vn3-m4','Protein targets are context, not a magic number','A gram target is a starting estimate that must be interpreted with body size, life stage, activity, illness and protein quality.',[
          'Adult reference values are often expressed per kilogram of body weight. Pregnancy, lactation, growth, recovery from illness, aging and intensive training may increase requirements or make distribution more important. Kidney or liver disease can change the plan and requires individualized care.',
          'Plant proteins may have somewhat lower digestibility than many animal proteins, but adequate quantity and variety generally cover healthy adult needs. The 2025 adult position describes successful training outcomes in research with higher plant-protein intakes around 1.5 g/kg/day, but that study-level intake should not be imposed on everyone.'
        ],['Use grams per kilogram only with the correct population.','Athletes and older adults need context-specific planning.','A research intake is not a universal prescription.'],
        V('Target modifiers','map',[{label:'Baseline',detail:'Body weight and reference value.'},{label:'Life stage',detail:'Growth, pregnancy, lactation and aging.'},{label:'Activity/recovery',detail:'Training, injury and illness.'},{label:'Clinical context',detail:'Kidney, liver and metabolic conditions.'}]),
        N('A target needs a person','WHO · WHEN · WHY', 'Identify the population, life stage and purpose before applying a number.'),
        'Older adults may benefit from at least about 1.0 g/kg/day plus resistance exercise, but conditions and body composition can modify the plan.',
        'Use food-based distribution and symptom/lab context rather than recommending powders automatically.',
        A('Why should 1.5 g/kg/day not be prescribed to every vegetarian?',[O('Plant protein can never support training.',false,'Research shows it can when intake is adequate.'),O('It reflects specific active-adult research, not every life stage or condition.',true,'Targets must match the person and purpose.'),O('Protein requirements never change.',false,'They vary with life stage, activity and health.')])
        )
      ]},
      {id:'quality',title:'Understand digestibility and food preparation',summary:'Use preparation science without labelling plant foods harmful.',moments:[
        M('vn3-m5','Digestibility is influenced by the food matrix','Plant cell walls, processing and antinutritional compounds can affect digestion, but ordinary preparation makes legumes and grains valuable protein foods.',[
          'Protein quality reflects indispensable-amino-acid content and digestibility. Intact cell structures and compounds such as phytate, trypsin inhibitors and lectins can reduce access to nutrients. This does not make plant foods unsafe; soaking, cooking, fermenting, sprouting, milling and isolating protein can change digestibility.',
          'Raw or undercooked legumes are the more relevant safety concern. Proper heating inactivates many heat-sensitive inhibitors and lectins. The term hemagglutinin usually refers to lectins such as phytohaemagglutinin in legumes, not a reason to avoid correctly prepared beans.'
        ],['Food matrix affects digestibility.','Cooking makes legumes safe and more digestible.','Processing can improve protein access while changing other food properties.'],
        V('Preparation effects','process',[{label:'Soak',detail:'Hydrates and may reduce some soluble compounds.'},{label:'Cook',detail:'Softens structure and inactivates important lectins/inhibitors.'},{label:'Ferment/sprout',detail:'Can reduce phytate and alter digestibility.'},{label:'Digest',detail:'Amino acids become more accessible.'}]),
        N('Legume safety sequence','SOAK · HEAT · EAT', 'Use appropriate cooking—especially for dried kidney beans—rather than fearing all legumes.'),
        'Canned beans are already cooked; rinsing can reduce some sodium and fermentable carbohydrates.',
        'For gastrointestinal discomfort, adjust portion, preparation and progression instead of removing an entire protein category without assessment.',
        A('What is the safest statement about legume lectins?',[O('All cooked beans remain dangerously toxic.',false,'Proper cooking inactivates important lectins.'),O('Raw or undercooked legumes can be hazardous, while proper cooking makes them safe foods.',true,'This captures the relevant preparation distinction.'),O('Lectins exist only in animal foods.',false,'They are plant proteins found notably in legumes and other foods.')])
        ),
        M('vn3-m6','Food-specific amino-acid rankings are poor memorization targets','Exact claims about which bean has the most lysine or threonine can depend on variety, database, preparation and whether values are expressed per gram of food or protein.',[
          'Read the actual source: The Dietitian’s Guide to Vegetarian Diets, third edition (2011), p. 72 Table 3-2 reports amino acids in milligrams per gram of protein, using USDA SR22 (2009). For lysine, the table lists adzuki 75.4, pinto 69.9, lentils 69.8 and fava 63.9. Adzuki is the largest of these four values. This is a historical table comparison, not a claim about every present-day product or cooked serving.',
          'For threonine, the same table lists black beans 42.1, lima beans 43.1 and soybeans 42.1 mg/g protein. Black beans are therefore not the unique highest value, and lima is higher among these examples. This explains why the supplied statement about black beans being highest is false. A table can answer a narrow source question while still needing context.',
          'The denominator matters: milligrams per gram of protein compares amino-acid profile. It does not tell you milligrams in a half-cup of food unless you also know that serving’s protein. Use the cooked-serving data later in this lesson for meal contribution, and do not silently mix the older amino-acid table with a different dataset. Beans, lentils, peas and soy can all contribute useful lysine relative to many grains.'
        ],['Rankings change with the denominator.','Food variety and preparation affect composition.','Use precise data questions only with a named dataset and unit.'],
        V('Why rankings shift','comparison',[{label:'Per 100 g food',detail:'Water content and preparation strongly affect the number.'},{label:'Per gram protein',detail:'Compares amino-acid profile rather than serving.'},{label:'Per usual serving',detail:'Better reflects practical intake but serving sizes vary.'}]),
        N('Never rank without a ruler','UNIT · FORM · DATABASE', 'A food-composition winner is meaningless until the comparison method is named.'),
        'Typographical errors such as “Printo” may mean pinto; preserve the source wording but flag the defect.',
        'Use database questions to teach label and data literacy, not to create false certainty.',
        A('What information is needed to rank beans by lysine?',[O('Only the bean colour.',false,'Colour does not define the comparison.'),O('Food form, unit/denominator and a specified composition database.',true,'These determine what is being compared.'),O('Whether the eater is vegetarian.',false,'The food composition does not change with eater identity.')])
        )
      ]},
      {id:'application',title:'Put plant protein into meals and practice',summary:'Plan varied, sufficient and context-aware protein intake.',moments:[
        M('vn3-m7','Use a portfolio of plant-protein foods','Legumes and soy foods are anchors, while grains, nuts, seeds and vegetables add meaningful protein across the day.',[
          'Beans, lentils, chickpeas, split peas, tofu, tempeh, edamame and textured vegetable protein can provide substantial protein. Nuts, seeds, whole grains and many vegetables add smaller contributions that accumulate. Dairy and eggs contribute when included in the person’s pattern.',
          'A practical meal includes an identifiable protein anchor rather than relying on trace amounts. Examples include lentil curry, tofu stir-fry, chickpea pasta, bean chili, tempeh sandwiches or soy-yogurt bowls with seeds. Fortified products may also support calcium, vitamin D or B12, but the label must be checked.'
        ],['Name a protein anchor at each main meal.','Soy foods are high-quality plant proteins.','Smaller contributions across foods add to the daily total.'],
        V('Protein portfolio','groups',[{label:'Legumes',detail:'Beans, lentils, peas and chickpeas.'},{label:'Soy',detail:'Tofu, tempeh, edamame and TVP.'},{label:'Nuts/seeds',detail:'Energy-dense protein plus unsaturated fat.'},{label:'Grains + others',detail:'Smaller contributions across meals.'}]),
        N('Find the anchor','BEAN · SOY · SEED · OTHER', 'Name the food carrying most of the meal’s protein instead of assuming it is present.'),
        'Plant-protein powders can be convenient but are not required for most people who meet needs with food.',
        'Choose anchors that fit budget, culture, allergies, texture tolerance and cooking access.',
        A('Which meal has the clearest protein anchor?',[O('Lettuce and cucumber with lemon.',false,'This meal has little protein.'),O('Lentil stew with whole-grain bread and vegetables.',true,'Lentils provide a clear protein anchor and the rest adds more.'),O('Tea and an apple.',false,'This is not a protein-rich meal.')])
        ),
        M('vn3-m8','Avoid turning protein into a disease scapegoat','Excess intake, food source and dietary context are different questions; claims that protein alone causes cancer or heart disease overreach the evidence.',[
          'Animal-protein foods can carry saturated fat, heme iron, sodium or processing exposures, while plant-protein foods often bring fibre and unsaturated fats. Observed disease associations may therefore reflect a food package and substitution pattern, not protein as an isolated molecule.',
          'Very high protein intake provides no automatic benefit and may be inappropriate for some conditions, but ordinary adequacy is essential. Use food-specific and pattern-specific evidence, and refer people with kidney disease, liver disease, cancer treatment or unexplained weight loss for individualized care.'
        ],['Separate protein amount from protein-food package.','Avoid claiming protein alone causes a disease.','Clinical conditions change safe targets.'],
        V('Three protein questions','framework',[{label:'How much?',detail:'Adequacy, distribution and total energy.'},{label:'From what?',detail:'Food package, processing and nutrient profile.'},{label:'For whom?',detail:'Life stage, activity and health condition.'}]),
        N('Protein claims need three lenses','AMOUNT · SOURCE · PERSON', 'A single gram number cannot answer every health question.'),
        'Coronary risk from a meat-heavy pattern cannot be reduced to animal protein alone; saturated fat, processing and substitutions matter.',
        'Use neutral, mechanism-based language and coordinate with medical care when disease changes protein needs.',
        A('Which statement is best supported?',[O('All animal protein directly causes cancer.',false,'That is overly broad and causal.'),O('Protein-food sources differ in accompanying nutrients and processing, which can influence health associations.',true,'This separates the protein molecule from the food package.'),O('Protein amount never matters.',false,'Both inadequate and excessive intakes can matter by context.')])
        ),
        M('vn3-m10','Distribute usable protein opportunities across the day','Daily adequacy comes first, but spreading recognizable protein anchors can make intake more reliable for older adults, athletes and people with low appetite.',[
          'A single protein-heavy dinner may meet a day’s arithmetic total, yet breakfast and lunch can still be missed opportunities for satiety, recovery and meal quality. A practical pattern uses a meaningful anchor at two or three meals—such as fortified soy beverage and nut butter, lentils, tofu, tempeh, beans, seitan or an accepted dairy/egg food—then lets grains, vegetables, nuts and seeds add to the total.',
          'Older adults face anabolic resistance, meaning muscle may respond less strongly to the same stimulus. Resistance exercise, adequate total energy and sufficient high-quality protein distributed across meals become especially relevant. Athletes need training-specific total energy and protein, not automatic powders. People with low appetite may need lower-volume, energy-dense forms such as tofu, soy yogurt, nut/seed butter or blended legumes.'
        ],['Daily total remains the foundation.','Distribution creates repeated chances to supply amino acids and build complete meals.','Life stage, appetite, training and disease change the plan.'],
        V('Anchor audit','daymap',[{label:'Morning',detail:'Soy beverage, soy yogurt, nuts/seeds or accepted egg/dairy option.'},{label:'Midday',detail:'Lentils, beans, chickpeas, tofu or tempeh.'},{label:'Evening',detail:'Another substantial anchor plus grains and vegetables.'},{label:'Recovery/context',detail:'Adjust form and amount to appetite, training and clinical needs.'}]),
        N('Make protein visible','TOTAL · DISTRIBUTE · ADAPT', 'Meet the day, spread useful anchors, then adapt to the person.'),
        'Health Canada recommends a variety of protein foods and encourages plant-based protein foods such as legumes, nuts, seeds, tofu and fortified soy beverages.',
        'A protein powder is a convenience tool, not proof of a superior diet; check ingredients, dose, need, cost and third-party testing when relevant.',
        A('Which plan best supports an older vegetarian adult with low appetite?',[O('Save nearly all protein for one enormous evening meal.',false,'That may be difficult to eat and misses repeated meal opportunities.'),O('Use manageable protein anchors across meals plus resistance activity as appropriate.',true,'This supports adequacy, distribution and muscle stimulus.'),O('Remove every energy-dense food.',false,'Low appetite often calls for efficient energy and protein density.')])
        )
      ]},
{
  "id": "beans",
  "title": "Understand the nutritional value of beans",
  "summary": "Move from a food name to cooked portions, nutrient packages, absorption, product choices and practical preparation.",
  "moments": [
    {
      "id": "vn3-m11",
      "title": "Beans are a nutrient package—not just a protein substitute",
      "highYield": "Beans supply protein together with starch, fibre and micronutrients. The amount on the plate matters as much as the food name.",
      "teaching": [
        "Here, beans means foods such as kidney, black, pinto and white beans. Lentils, chickpeas and split peas are related pulses; soybeans are also legumes but have a different protein-and-fat profile. Green beans eaten as vegetables are not interchangeable with a portion of mature dried beans cooked for a protein meal.",
        "A cooked serving contributes amino acids, including useful lysine, but does not supply protein alone. Beans also bring carbohydrate for energy, fibre, folate and minerals. Their relatively lower sulfur-amino-acid content is a reason for dietary variety, not a reason to call them unusable or to require rice at the same meal. A small spoonful used as garnish contributes less than a substantial serving.",
        "Use the cooked-food comparison in the next moment to put amounts beside these words. A food-composition value estimates the selected food and preparation; it is not a prescription for how much everyone must eat. Daily needs, appetite, other foods and the person’s preferences still determine the portion."
      ],
      "keyPoints": [
        "Mature beans, pulses and soy belong to the legume family but are not nutritionally identical.",
        "A serving contributes protein, carbohydrate, fibre and micronutrients together.",
        "Protein quality and protein quantity are separate questions."
      ],
      "visual": {
        "title": "Beans are a nutrient package—not just a protein substitute",
        "kind": "comparison",
        "items": [
          {
            "label": "Identity",
            "detail": "Kidney/black/pinto beans, lentils and chickpeas are useful protein anchors."
          },
          {
            "label": "Quantity",
            "detail": "Assess the portion eaten—not just the presence of beans."
          },
          {
            "label": "Quality",
            "detail": "Lysine-rich legumes complement the overall amino-acid pattern of many grain-based diets."
          }
        ]
      },
      "mnemonic": {
        "title": "Look beyond the protein label",
        "cue": "PROTEIN PLUS",
        "explanation": "A bean portion brings protein together with carbohydrate, fibre and micronutrients."
      },
      "goodToKnow": "“Protein food” does not mean carbohydrate-free. Food groups are planning tools, not chemically exclusive categories.",
      "practiceConnection": "Ask the client to show or describe their usual cooked portion before assuming the meal supplies enough protein.",
      "activity": {
        "prompt": "A lunch contains a spoonful of kidney beans scattered over lettuce. What is the missing assessment?",
        "options": [
          {
            "text": "The quantity of beans and the rest of the day’s food.",
            "correct": true,
            "feedback": "Naming a protein food does not establish an adequate serving or daily intake."
          },
          {
            "text": "Whether rice touched every bean.",
            "correct": false,
            "feedback": "Same-meal pairing is not the deciding factor."
          },
          {
            "text": "Whether beans are animal protein.",
            "correct": false,
            "feedback": "Plant origin does not make their amino acids unusable."
          }
        ]
      }
    },
    {
      "id": "vn3-m12",
      "title": "Read a cooked-serving comparison",
      "highYield": "Compare equal volumes in the same cooked state, then use the actual gram weight for the calculation.",
      "teaching": [
        "The comparison below uses one-half of the cup weight recorded for each food in USDA FoodData Central: black beans 86 g, chickpeas 82 g, lentils 99 g and mature soybeans 86 g. Every entry is cooked, boiled and without salt. These are selected SR Legacy records published in 2019, retrieved on 2 November 2026—not new measurements from 2026, not raw weights, and not canned-bean labels. A USDA cup-based measure is not interchangeable with a 250 mL metric cup without adjustment.",
        "For each half-cup serving, approximate values are: black beans—7.6 g protein, 20.4 g carbohydrate, 7.5 g fibre, 1.8 mg iron and 128 µg folate; chickpeas—7.3 g protein, 22.5 g carbohydrate, 6.2 g fibre, 2.4 mg iron and 141 µg folate; lentils—8.9 g protein, 19.9 g carbohydrate, 7.8 g fibre, 3.3 mg iron and 179 µg folate; mature soybeans—15.7 g protein, 7.2 g carbohydrate, 5.2 g fibre, 4.4 mg iron and 46 µg folate. Numbers are rounded estimates for these particular records; varieties and products vary.",
        "The comparison answers different questions. Lentils provide more protein than chickpeas in these half-cup portions, but chickpeas may suit a preferred recipe better. Mature soybeans stand out for protein and fat: about 7.7 g fat here versus 0.5 g in black beans, 2.1 g in chickpeas and 0.4 g in lentils. The soy entry does not describe edamame, tofu or soy beverage. None of these differences makes a single food mandatory.",
        "Calculation method: nutrient per 100 g × serving weight ÷ 100. For black beans, 8.86 g protein per 100 g × 86 g ÷ 100 = 7.62 g, shown as 7.6 g. Doubling that cooked portion approximately doubles each nutrient; using the same volume of a different food need not. Prefer the unrounded source values for calculations, and round the final estimate sensibly."
      ],
      "keyPoints": [
        "All four records describe cooked, boiled, unsalted food.",
        "Equal volumes have different weights; match the entry to the portion.",
        "Soybeans in this comparison are mature soybeans, not edamame or tofu."
      ],
      "visual": {
        "title": "Read a cooked-serving comparison",
        "kind": "comparison",
        "items": [
          {
            "label": "Black beans · 86 g",
            "detail": "½ recorded cup: protein 7.6 g · fibre 7.5 g · iron 1.8 mg"
          },
          {
            "label": "Chickpeas · 82 g",
            "detail": "½ recorded cup: protein 7.3 g · fibre 6.2 g · iron 2.4 mg"
          },
          {
            "label": "Lentils · 99 g",
            "detail": "½ recorded cup: protein 8.9 g · fibre 7.8 g · iron 3.3 mg"
          },
          {
            "label": "Mature soybeans · 86 g",
            "detail": "½ recorded cup: protein 15.7 g · fibre 5.2 g · iron 4.4 mg"
          }
        ]
      },
      "mnemonic": {
        "title": "Match before calculating",
        "cue": "STATE · WEIGHT · UNIT",
        "explanation": "Match the cooked state and gram weight, then scale the per-100-g value."
      },
      "goodToKnow": "FoodData Central IDs: black beans 173735; chickpeas 173757; lentils 172421; mature soybeans 174271. The evidence links identify the exact records.",
      "practiceConnection": "Use this as a portion-reading exercise, not a fixed serving prescription or a claim that one bean is nutritionally “best”.",
      "activity": {
        "prompt": "A serving contains 172 g of the cooked black beans in this table. Approximately how much protein does it supply?",
        "options": [
          {
            "text": "7.6 g",
            "correct": false,
            "feedback": "That is the 86 g half-cup estimate; this serving is twice as large."
          },
          {
            "text": "15.2 g",
            "correct": true,
            "feedback": "8.86 × 172 ÷ 100 = 15.24 g, or about 15.2 g."
          },
          {
            "text": "30.4 g",
            "correct": false,
            "feedback": "This doubles the one-cup value again."
          }
        ]
      }
    },
    {
      "id": "vn3-m13",
      "title": "Follow the carbohydrate and fibre—not a “carbs are bad” rule",
      "highYield": "Beans contain digestible carbohydrate and dietary fibre; these have different roles in the food package.",
      "teaching": [
        "Much of the carbohydrate in cooked pulses is starch that can provide energy. Fibre includes components that resist digestion in the small intestine; some are fermented by microbes in the large intestine. Fibre and the intact food structure affect how the meal is digested, while fermentable carbohydrates can also produce gas. A carbohydrate number therefore does not describe the whole nutritional value of the food.",
        "Beans can help a meal supply fibre as well as protein, unlike an unaccompanied serving of meat or eggs, which supplies no dietary fibre. That does not make the foods interchangeable gram for gram: their protein concentration, energy and micronutrients differ. Compare portions and the whole meal, not a single nutrient or a universal “best food” ranking.",
        "For someone new to pulses, smaller comfortable portions and gradual increases can be more workable than a sudden large bowl. Drain and rinse canned beans, cook dried beans thoroughly, and adapt preparation and serving size to tolerance. Persistent or severe symptoms deserve assessment rather than assuming that every plant protein must be excluded."
      ],
      "keyPoints": [
        "Starch supplies energy; fibre has different digestive roles.",
        "Fibre-containing protein foods offer a different package from meat or eggs alone.",
        "Portion and preparation can help with tolerance."
      ],
      "visual": {
        "title": "Follow the carbohydrate and fibre—not a “carbs are bad” rule",
        "kind": "comparison",
        "items": [
          {
            "label": "Energy",
            "detail": "Digestible carbohydrate contributes fuel alongside the protein."
          },
          {
            "label": "Fibre",
            "detail": "The portion can contribute meaningfully to daily fibre intake."
          },
          {
            "label": "Tolerance",
            "detail": "Begin with an amount the person can comfortably manage."
          }
        ]
      },
      "mnemonic": {
        "title": "Separate the carbohydrate roles",
        "cue": "FUEL + FIBRE",
        "explanation": "Digestible carbohydrate supplies energy while fibre has different digestive roles."
      },
      "goodToKnow": "A low-fibre prescribed eating plan is a different clinical context; do not apply generic “more fibre” advice indiscriminately.",
      "practiceConnection": "Build a manageable bean portion into a familiar dish rather than making a client tolerate an unnecessarily large serving.",
      "activity": {
        "prompt": "Which interpretation of “beans contain carbohydrate” is most useful?",
        "options": [
          {
            "text": "They cannot count as a protein food.",
            "correct": false,
            "feedback": "Foods contain several nutrients; beans contribute both protein and carbohydrate."
          },
          {
            "text": "Consider their protein, fibre, portion and the full meal together.",
            "correct": true,
            "feedback": "This evaluates the package rather than excluding a useful food category."
          },
          {
            "text": "Gas proves all beans are toxic.",
            "correct": false,
            "feedback": "Fermentation-related gas differs from illness caused by improperly cooked beans."
          }
        ]
      }
    },
    {
      "id": "vn3-m14",
      "title": "Count minerals, then consider absorption",
      "highYield": "Beans contribute nonheme iron and other micronutrients; the amount listed in a food table is not the amount absorbed.",
      "teaching": [
        "Beans and other pulses can contribute folate, iron, magnesium, potassium and zinc. The amounts vary by species, serving and processing. Folate participates in one-carbon metabolism and cell division; minerals contribute to functions such as oxygen transport, enzyme activity and normal muscle and nerve function. Beans are useful contributors, not a guarantee that every nutrient requirement is covered.",
        "Plant iron is nonheme iron. Vitamin C at the meal can help its absorption, while phytate and some polyphenols can reduce it. A practical example is beans with bell pepper, tomato or citrus. Do not translate a table value directly into an absorbed dose or promise that a particular meal will correct iron deficiency; absorption and iron status depend on the wider diet and the individual.",
        "Plain unfortified beans are not a dependable source of vitamin B12. Calcium also needs separate attention: do not assume an ordinary bean serving supplies the same calcium as a calcium-set tofu or fortified product. Use the actual label or a matched database entry. Nutrient planning works by combining complementary foods and reliable fortified sources, not by expecting beans to do everything."
      ],
      "keyPoints": [
        "Pulses contribute folate and several minerals, with food-specific variation.",
        "Listed iron and absorbed iron are not equivalent.",
        "Vitamin B12 and calcium planning still require deliberate choices."
      ],
      "visual": {
        "title": "Count minerals, then consider absorption",
        "kind": "comparison",
        "items": [
          {
            "label": "Supply",
            "detail": "Use the cooked serving’s iron and folate values."
          },
          {
            "label": "Availability",
            "detail": "Pair a pulse meal with a vitamin-C-containing food."
          },
          {
            "label": "Coverage",
            "detail": "Check B12 and calcium separately instead of assuming “beans cover all”."
          }
        ]
      },
      "mnemonic": {
        "title": "Iron needs two questions",
        "cue": "CONTENT ≠ ABSORPTION",
        "explanation": "Ask how much iron is in the food and what affects its availability."
      },
      "goodToKnow": "The source books’ older tables remain historical study context; current food labels and matched composition records are better for a specific present-day product.",
      "practiceConnection": "Explain one helpful meal change without diagnosing deficiency or recommending iron supplements from food history alone.",
      "activity": {
        "prompt": "Which change best supports use of the nonheme iron in a bean salad?",
        "options": [
          {
            "text": "Add a vitamin-C-rich vegetable such as bell pepper.",
            "correct": true,
            "feedback": "Vitamin C can enhance nonheme iron absorption."
          },
          {
            "text": "Assume all listed iron enters the bloodstream.",
            "correct": false,
            "feedback": "Food content is not the same as absorption."
          },
          {
            "text": "Stop planning B12 because the salad contains beans.",
            "correct": false,
            "feedback": "Unfortified beans are not a dependable B12 source."
          }
        ]
      }
    },
    {
      "id": "vn3-m15",
      "title": "Choose the form that fits the meal: whole beans, soy or a prepared product",
      "highYield": "Soy foods and ordinary cooked beans are useful alternatives, but “plant protein” is not a single nutrient profile.",
      "teaching": [
        "Soybeans have a different composition from many other pulses: they provide a relatively protein-rich profile and more fat. Edamame is the immature soybean; mature cooked soybeans, tofu, tempeh and soy beverages are different foods with different water content, processing and serving sizes. Tofu can be convenient when a softer or lower-volume meal is easier to manage. Calcium content depends in part on the coagulant and product, so check the label.",
        "Whole cooked beans retain a fibre-rich food structure. Turning them into hummus or a ready-made burger changes the recipe: tahini or oil adds fat and energy, while salt changes sodium. A plant-based burger may use isolates and starches rather than a substantial amount of whole beans. Neither the word “plant-based” nor “soy” establishes the protein, fibre, calcium or sodium in a serving.",
        "Choose by function. A bean chili can bring fibre, protein and a low-cost staple; tofu can provide a versatile protein anchor; a fortified soy beverage may also help with calcium and B12 if the label confirms them. Meat and eggs bring protein but no fibre, whereas nuts supply protein alongside more energy-dense fat. These are food-package comparisons, not claims that every serving is nutritionally equivalent."
      ],
      "keyPoints": [
        "Distinguish whole soybeans, tofu, tempeh and beverages.",
        "Calcium and fortification are product-specific.",
        "Read prepared-food ingredients, serving size and nutrition together."
      ],
      "visual": {
        "title": "Choose the form that fits the meal: whole beans, soy or a prepared product",
        "kind": "comparison",
        "items": [
          {
            "label": "Whole pulse",
            "detail": "Protein plus substantial carbohydrate and fibre."
          },
          {
            "label": "Soy form",
            "detail": "Protein and fat, with water content and processing changing the serving."
          },
          {
            "label": "Prepared product",
            "detail": "Recipe and fortification determine what the package actually supplies."
          }
        ]
      },
      "mnemonic": {
        "title": "Read the product, not just the plant",
        "cue": "SAME FAMILY ≠ SAME PACKAGE",
        "explanation": "Whole beans, tofu and fortified drinks serve different nutritional roles."
      },
      "goodToKnow": "A soy allergy changes food choice; it does not mean all other legumes must automatically be avoided without individualized advice.",
      "practiceConnection": "Offer two suitable protein anchors that fit cooking access, cost, texture and culture instead of prescribing one “perfect” product.",
      "activity": {
        "prompt": "Two products both say “plant-based”. What should decide which fits a fibre-and-protein meal?",
        "options": [
          {
            "text": "The front-label claim alone.",
            "correct": false,
            "feedback": "It does not specify amounts or ingredient quality."
          },
          {
            "text": "Serving size, protein, fibre, ingredients and sodium on the actual products.",
            "correct": true,
            "feedback": "Compare what the person will eat and the meal’s goals."
          },
          {
            "text": "Whichever has the longest ingredient list.",
            "correct": false,
            "feedback": "Length alone does not establish nutritional suitability."
          }
        ]
      }
    },
    {
      "id": "vn3-m16",
      "title": "Separate dry weight, cooked portions and safe preparation",
      "highYield": "Canned beans are already cooked; dried beans need proper preparation. Compare nutritional values in the state actually eaten.",
      "teaching": [
        "Dried beans absorb water during cooking. That increases their weight and volume, so 100 g dry and 100 g cooked do not describe the same quantity of starting beans. A lower protein concentration per 100 g cooked is not proof that cooking destroyed most of the protein. For a fair comparison, match the cooked state, drained or undrained status and portion before comparing products or entering a meal in a tracker.",
        "Canned beans are convenient, already cooked and ready to use according to the label. No-added-salt varieties can help when sodium is a concern; draining and rinsing ordinary canned beans can remove some sodium, but not a universal fixed amount. A database value for “canned, not drained” is not identical to a drained serving. Homemade beans have a different sodium profile depending on added salt and sauces.",
        "Raw or undercooked dried kidney beans can contain harmful lectin levels. FDA guidance is to soak them for at least five hours, discard that water, and boil in fresh water for at least thirty minutes; then continue cooking until adequately tender as directed. A slow cooker alone is not a reliable substitute for this safety step. Do not apply dried-kidney-bean preparation instructions as though canned beans were still raw.",
        "For everyday planning, choose a workable form first: canned for speed, dried for batch preparation, or a puréed preparation for texture. Then count the actual serving and add vegetables and other foods to complete the meal. Convenience is part of nutritional usefulness when it makes an adequate meal more likely to be eaten."
      ],
      "keyPoints": [
        "Water changes concentration; dry and cooked weights are not interchangeable.",
        "Canned, drained and rinsed forms need matched values.",
        "Dried kidney beans require adequate soaking and boiling—not only low-temperature slow cooking."
      ],
      "visual": {
        "title": "Separate dry weight, cooked portions and safe preparation",
        "kind": "comparison",
        "items": [
          {
            "label": "Dry",
            "detail": "Concentrated before water is absorbed; needs appropriate preparation."
          },
          {
            "label": "Cooked",
            "detail": "Use the serving’s cooked weight or volume."
          },
          {
            "label": "Canned",
            "detail": "Already cooked; check salt, draining instructions and actual serving."
          }
        ]
      },
      "mnemonic": {
        "title": "Know which beans are in your kitchen",
        "cue": "DRY → PREPARE; CANNED → CHECK",
        "explanation": "Dried beans need safe preparation; canned beans are already cooked."
      },
      "goodToKnow": "Safety directions are for preparation, not a reason to avoid correctly cooked beans. Follow reliable instructions for the particular bean and cooking method.",
      "practiceConnection": "For a client with little time, a rinsed canned-bean meal may be more practical than an idealized plan that requires hours of cooking.",
      "activity": {
        "prompt": "A tracker shows much more protein per 100 g dry beans than per 100 g cooked beans. What explains much of the difference?",
        "options": [
          {
            "text": "Water uptake changes the weight denominator.",
            "correct": true,
            "feedback": "Compare like-for-like forms or track the actual cooked portion."
          },
          {
            "text": "Cooking removes all indispensable amino acids.",
            "correct": false,
            "feedback": "The concentration difference is not evidence of complete protein destruction."
          },
          {
            "text": "Canned beans always need another overnight soak.",
            "correct": false,
            "feedback": "They have already been cooked."
          }
        ]
      }
    }
  ]
}
    ],
    sourceContext:'This repair expands Lesson 3 with bean nutrition and applied practice. It integrates the inspected protein and iron passages listed below; it is not a claim that every page of either textbook has been reproduced. Learn teaches; Flashcards are optional short recall; Practice applies the ideas in new situations; the Source quiz preserves the supplied test wording.',
    sourceReferences:[{"title": "The Dietitian’s Guide to Vegetarian Diets, third edition (2011)", "pages": "Book pp. 72, 75–79", "note": "Table 3-2 amino-acid profiles per gram protein; protein complementation, portion contributions and adequate-energy counselling. Table 3-2 uses USDA SR22 (2009), not current serving measurements."}, {"title": "Becoming Vegetarian, revised edition (2003), Melina and Davis", "pages": "Book pp. 72–75 and 101–102", "note": "Legume servings and nutrient packages, distinctions among soy foods, and nonheme iron with vitamin-C foods. Historical figures are not substituted for the explicitly identified USDA serving records."}],
    sources:[
      {title:'USDA FoodData Central — cooked black beans, SR Legacy 173735',url:'https://fdc.nal.usda.gov/food-details/173735/nutrients'},
      {title:'USDA FoodData Central — cooked chickpeas, SR Legacy 173757',url:'https://fdc.nal.usda.gov/food-details/173757/nutrients'},
      {title:'USDA FoodData Central — cooked lentils, SR Legacy 172421',url:'https://fdc.nal.usda.gov/food-details/172421/nutrients'},
      {title:'USDA FoodData Central — cooked mature soybeans, SR Legacy 174271',url:'https://fdc.nal.usda.gov/food-details/174271/nutrients'},
      {title:'NIH Office of Dietary Supplements — Iron',url:'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/'},
      {title:'FDA — Natural toxins in food: kidney-bean preparation',url:'https://www.fda.gov/food/chemical-contaminants-pesticides/natural-toxins-food'},
      {title:'Health Canada — Eat protein foods',url:'https://www.canada.ca/en/health-canada/services/food-guide/explore/healthy-eating-recommendations/eat-variety/eat-proteins.html'},
      {title:'Health Canada — Considerations for vegetarian diets',url:'https://www.canada.ca/en/health-canada/services/food-guide/explore/dietary-guidelines/applying/considerations-vegetarian-diets.html'},
      {title:'Academy of Nutrition and Dietetics — Vegetarian Dietary Patterns for Adults (2025)',url:'https://www.eatrightpro.org/-/media/files/eatrightpro/practice/academy-positions/vegetarian-dietary-patterns-for-adults.pdf'},
      {title:'National Academies — Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids',url:'https://nap.nationalacademies.org/catalog/10490/dietary-reference-intakes-for-energy-carbohydrate-fiber-fat-fatty-acids-cholesterol-protein-and-amino-acids'}
    ],
    caseStudy:{"title": "Make a bean meal workable", "scenario": "Nora wants a quick, affordable vegetarian lunch. She has canned chickpeas, bread, bell pepper and fruit. She believes beans are only protein, worries that bread must be eaten in the same bite, and assumes legumes cover calcium and B12 automatically.", "prompts": ["Build a practical meal and identify the nutrient roles of its foods.", "What would you check about the chickpea portion and label before estimating protein or sodium?", "Which beliefs need correcting, and what nutrients still require separate planning?"], "takeaway": "Use the actual cooked portion and product, enjoy the protein–fibre–micronutrient package, add a vitamin-C food, and plan the whole diet. Same-bite complementation is unnecessary; unfortified beans do not replace calcium/B12 planning."},
    recap:['Nine amino acids are indispensable for adults.','Plant foods contain all indispensable amino acids in varying proportions.','Protein is digested, absorbed into a dynamic amino-acid pool and continuously turned over.','Adequate energy supports protein use.','Same-meal complementation is unnecessary.','Preparation affects digestibility and safety.','Daily total comes first; useful distribution can support older adults, athletes and low-appetite clients.','Protein advice must consider amount, source and person.','Beans bring protein, carbohydrate, fibre, folate and minerals together.','Match dry/cooked/canned state and portion before comparing values.','Food iron content is not absorbed iron; vitamin-C foods can help.','Whole beans, mature soybeans, tofu and fortified drinks are not nutritionally interchangeable.'],
    flashcards:[{front:'Indispensable amino acid',back:'An amino acid the body cannot synthesize in sufficient amounts and must obtain from the diet.',tag:'basics'},{front:'Number of common amino acids used in protein synthesis',back:'Twenty.',tag:'basics'},{front:'Indispensable amino acids in adults',back:'Nine.',tag:'basics'},{front:'Protein journey',back:'Digest, absorb, pool, use.',tag:'digestion'},{front:'Amino-acid pool',back:'A dynamic supply from digested food and recycled body proteins; not a dedicated storage warehouse.',tag:'digestion'},{front:'Protein-sparing role of energy',back:'Adequate energy reduces the need to oxidize amino acids for fuel.',tag:'energy'},{front:'Same-meal complementation',back:'Not required for most healthy adults; varied proteins across the day are sufficient.',tag:'myth'},{front:'Relatively limiting amino acid in many grains',back:'Lysine.',tag:'profiles'},{front:'Relatively limiting amino acid in many legumes',back:'Methionine.',tag:'profiles'},{front:'High-quality plant protein example',back:'Soy foods such as tofu, tempeh or edamame.',tag:'foods'},{front:'Lectin safety principle',back:'Raw/undercooked legumes can be hazardous; proper cooking inactivates important lectins.',tag:'preparation'},{front:'Three ranking details',back:'Unit, food form and database.',tag:'data'},{front:'Protein-claim lenses',back:'Amount, source and person.',tag:'practice'},{front:'Clear meal anchor',back:'A substantial protein food such as lentils, tofu, beans, tempeh or chickpeas.',tag:'planning'},{front:'Protein distribution cue',back:'Meet the daily total, distribute recognizable anchors, then adapt to life stage and appetite.',tag:'planning'}],
    practice:[
  {
    "tag": "portion calculation",
    "prompt": "A bowl contains 129 g cooked black beans from the USDA entry taught here (8.86 g protein per 100 g). Estimate its protein and show the calculation.",
    "answer": "8.86 × 129 ÷ 100 = 11.43 g, or about 11.4 g protein. The bowl is one-and-a-half of the 86 g comparison portions.",
    "rationale": "Use actual cooked weight rather than treating every bowl as the same serving."
  },
  {
    "tag": "meal comparison",
    "prompt": "Using the taught half-cup portions, compare lentils with chickpeas for protein and fibre. Give one reason not to choose solely by the larger number.",
    "answer": "Lentils supply about 8.9 g protein and 7.8 g fibre; chickpeas supply 7.3 g and 6.2 g. Preference, tolerance, availability or the recipe may make chickpeas the more workable choice.",
    "rationale": "A modest nutrient difference does not determine the best food for every person."
  },
  {
    "tag": "denominator detective",
    "prompt": "A screenshot says dry beans contain more protein per 100 g than cooked beans. The caption says cooking destroys most protein. Explain the missing step.",
    "answer": "Cooking adds water and changes the denominator. Compare matched food forms or follow the same starting batch into its cooked weight before claiming nutrient destruction.",
    "rationale": "Concentration per weight is not the same as total nutrients remaining in a batch."
  },
  {
    "tag": "historical source table",
    "prompt": "In the older book’s Table 3-2, threonine is 42.1 mg/g protein for black beans, 43.1 for lima beans and 42.1 for soybeans. Does that support “black beans have the highest threonine”? Can it rank threonine per half-cup?",
    "answer": "No. Lima is higher than black in these listed values, and soy ties black. The units describe amino-acid profile per gram of protein, not a half-cup serving; serving protein would also be needed.",
    "rationale": "Interpret the actual table and denominator rather than memorize an unsupported winner."
  },
  {
    "tag": "absorption-focused meal",
    "prompt": "Ravi enjoys a chickpea salad but wants to make better use of its iron. Suggest one addition, and explain what the food table cannot tell him.",
    "answer": "Add a vitamin-C-rich food such as bell pepper or citrus. Listed iron is the amount in the food, not a personalized absorbed amount or proof that iron status is adequate.",
    "rationale": "A useful food pairing is different from diagnosing or treating deficiency."
  },
  {
    "tag": "label audit",
    "prompt": "A bean-burger package lists protein but very little fibre. A shopper assumes it must have the same fibre as whole beans. What should you investigate?",
    "answer": "Read the ingredients, serving weight and fibre value. It may rely on isolated protein, starch or other ingredients rather than a substantial whole-bean portion. Compare the actual product, not its plant-based name.",
    "rationale": "Processing and recipes change the nutrient package."
  },
  {
    "tag": "convenience decision",
    "prompt": "Maya has ten minutes, no cooked beans and a can of kidney beans. A friend insists on overnight soaking before eating. What is a practical response?",
    "answer": "The canned beans are already cooked; follow the label, drain/rinse as preferred and use in a quick meal. Overnight soaking and the boiling safety step apply to dried kidney beans, not ordinary ready-to-eat canned beans.",
    "rationale": "Distinguishing forms prevents unnecessary barriers to a nutritious meal."
  },
  {
    "tag": "safe preparation",
    "prompt": "A recipe puts raw dried kidney beans directly into a slow cooker on low. Rewrite the preparation step using the safety guidance taught here.",
    "answer": "Soak for at least five hours, discard the soaking water, then boil in fresh water for at least thirty minutes and continue until adequately cooked according to reliable instructions. Do not rely on a slow cooker alone to destroy the lectin.",
    "rationale": "Dried kidney-bean safety requires sufficient heat, not merely time."
  },
  {
    "tag": "tolerance and adequacy",
    "prompt": "A client replaces a familiar meal with a very large bean salad, feels bloated and eats little the rest of the day. Suggest a less restrictive adjustment.",
    "answer": "Try a smaller comfortable bean portion, increase gradually, use well-cooked or rinsed canned beans, and retain adequate energy from the rest of the meal. Another tolerated protein anchor can help; persistent or severe symptoms need assessment.",
    "rationale": "Avoid both forcing an oversized portion and banning every legume."
  },
  {
    "tag": "substitution check",
    "prompt": "A client swaps every calcium-fortified soy drink for plain black beans, reasoning that both are legumes. Which nutrients need a fresh check?",
    "answer": "Check calcium and B12 in particular: plain black beans do not reproduce the drink’s fortification. Review the complete diet and the actual product label; beans remain useful for protein, fibre and other nutrients.",
    "rationale": "Shared botanical family does not establish nutritional equivalence."
  },
  {
    "tag": "whole-day planning",
    "prompt": "A lunch of beans and vegetables is followed by a grain-based dinner. The client wants to skip lunch because rice is unavailable. Explain why eating lunch is the better plan.",
    "answer": "The foods need not be paired at the same meal for most healthy adults. Eating the available lunch supports energy and protein intake; varied foods across the day contribute to the amino-acid supply.",
    "rationale": "Apply the science to prevent a rigid rule from reducing food intake."
  },
  {
    "tag": "integrated client choice",
    "prompt": "Choose between cooked beans, tofu and a protein powder for someone who wants an affordable, familiar dinner—not a supplement. What would you ask before choosing?",
    "answer": "Ask about usual meals, budget, cooking access, portions, preferences, allergies and tolerance. Beans may fit a familiar stew; tofu may suit another dish or texture. Check the full meal’s energy and nutrients. A powder is optional, not the default solution.",
    "rationale": "Good counselling uses the food’s nutritional contribution and the person’s practical circumstances together."
  }
]
  };
})();
