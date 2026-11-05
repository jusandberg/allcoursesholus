(function(){
  'use strict';
  const {M,V,C,N}=window.NHF_BUILD;
  const labels=['Notice','Connect','Distinguish','Apply'];
  function P(id,title,bullets,note,practice){
    const split=Math.ceil(bullets.length/2);
    const cue=title.split(/\s+/).filter(word=>word.length>3).slice(0,5).map(word=>word[0].toUpperCase()).join('');
    return M(id,title,bullets[0],[bullets.slice(0,split).join(' '),bullets.slice(split).join(' ')],bullets.slice(1,4),V(`${title} · connection map`,...bullets.slice(0,4).map((text,i)=>[labels[i],text])),N(cue||'LINK',`Use ${cue||'LINK'} to rebuild the idea, then explain the evidence boundary.`),note,practice||'Translate the source concept into a specific, safe next step; do not turn a broad course claim into a diagnosis or promise.',C(`Which statement best preserves the meaning and boundary of “${title}”?`,[bullets[0],true,'This is the source-faithful high-yield idea.'],['The source proves every related intervention works for every person.',false,'That overstates the evidence.'],['Context, dose, safety and individual fit do not matter.',false,'Those factors are essential.']));
  }
  const module=(id,title,moments)=>[{id,title,label:title,moments}];

  window.NHF_BUILD.lessons.push({number:4,title:'A Healthy Diet',lede:'Build a varied food pattern, compare dietary philosophies and separate useful nutrition principles from label, detox and food-combining claims.',modules:module('diet-patterns','Food patterns, labels and real-world choices',[
    P('nhf4-1','Build the whole-food plate',[
      'A health-supporting pattern is built mainly from varied, minimally altered foods rather than isolated nutrients.',
      'The source foundation includes vegetables, legumes, fruits and berries, whole grains, nuts and seeds, with animal foods optional according to the chosen pattern.',
      'Whole foods deliver fibre, micronutrients, fats, protein and phytochemicals together as a food matrix.',
      'Use adequacy, variety, balance and personal fit to evaluate the plate—not dietary purity.'
    ],'“Whole” and “unprocessed” are not absolutes. Frozen vegetables, canned beans, yogurt and whole-grain bread are processed yet can remain highly nutritious.','Start assessment by identifying what the pattern reliably supplies before listing what it excludes.'),
    P('nhf4-2','Organic, local and sustainable choices',[
      'The lesson connects organic and local food with soil health, biodiversity, reduced synthetic-pesticide use and shorter food-system routes.',
      'Organic is a regulated production standard; “natural” is a much looser label and does not automatically mean nutritious or minimally processed.',
      'Local food can support freshness and regional producers, but distance alone does not determine nutrition or environmental impact.',
      'A practical choice weighs availability, budget, values, food safety and the importance of eating enough produce.'
    ],'The PDFs contain dated and sweeping comparisons. Do not imply conventional produce is toxic or nutritionally worthless; date-label historical policy examples.','Help the client choose an affordable mix of foods rather than letting a certification become a barrier to eating produce.'),
    P('nhf4-3','Grains, legumes, produce, nuts and animal foods',[
      'Cruciferous vegetables, colourful produce and berries contribute fibre and diverse phytochemicals.',
      'Legumes provide complex carbohydrate, fibre and protein; soaking and cooking change texture and tolerance.',
      'Whole grains provide fibre, trace minerals and carbohydrate; identify products by the actual whole-grain ingredient, not colour or marketing.',
      'Nuts and seeds provide unsaturated fats, protein and minerals; portions and allergy safety matter.',
      'If animal foods are used, distinguish food quality and preparation from unsupported claims that one certification guarantees a specific nutrient profile.'
    ],'The source lists unreliable vitamin B12 routes such as spirulina and some plant foods. Reliable vegan B12 comes from labelled fortified foods or supplements.','Map one dependable route for protein, fibre and each vulnerable micronutrient instead of judging the diet label.'),
    P('nhf4-4','Compare diet patterns without ideology',[
      'Vegetarian patterns range from lacto-ovo to vegan; adequacy depends on the foods included, not the label.',
      'The Mediterranean pattern emphasizes vegetables, fruit, legumes, grains, olive oil and fish, with modest dairy and traditionally wine with meals.',
      'Macrobiotic patterns centre whole grains, vegetables, beans or soy, soups, sea vegetables, seasonal foods and a yin–yang philosophy.',
      'Raw-food patterns emphasize uncooked foods and use blending, sprouting, fermenting and dehydrating; the source uses a 118°F ceiling.',
      'Low-carbohydrate, low-fat, acid–alkaline and Paleo patterns should be compared for nutrient routes, restrictions, sustainability and evidence—not ranked by ideology.'
    ],'Macrobiotic, acid–alkaline, raw-enzyme and Paleo rationales include philosophical or outdated claims. Restrictive versions can create energy and nutrient gaps.','Ask “What does this version include every day?” and audit energy, protein, B12, vitamin D, calcium, iodine, iron, zinc and omega-3 routes.'),
    P('nhf4-5','Nutrient synergy versus food-combining theory',[
      'The source describes food-combining rules: fruit alone, protein separated from starch and limited mixing of fats and proteins.',
      'The companion article notes the theory’s history, lack of convincing research and the fact that humans routinely digest naturally mixed foods.',
      'Real nutrient interactions include vitamin C improving non-haem iron absorption, dietary fat supporting carotenoid absorption and vitamin D supporting calcium absorption.',
      'Separate an evidence-supported nutrient interaction from a rule that labels ordinary mixed meals incompatible.'
    ],'Claims that fruit rots in the stomach or that protein and starch cannot be digested together are not supported by normal physiology.','If mixed meals trigger symptoms, investigate the actual foods, quantities, timing and medical possibilities rather than assuming universal incompatibility.'),
    P('nhf4-6','Stress, timing and emotional eating',[
      'Stress and rushed eating can change appetite, gastrointestinal sensations and eating behaviour; slowing down can improve awareness and comfort.',
      'The lesson recommends an overnight eating break and smaller, more frequent meals, but timing should be individualized.',
      'Emotional eating begins with noticing: am I physically hungry, or am I responding to stress, sadness, boredom or loneliness?',
      'Build a wider coping menu—movement, connection, rest, a hobby or a pause—rather than treating food comfort as a moral failure.',
      'The article offers whole-food substitutions and examples such as papaya, brown rice, avocado and salmon; use them as options, not prescriptions.'
    ],'Meal frequency and strict clock cut-offs are not universally superior. Eating for comfort can be normal; focus on distress, loss of control, adequacy and goals.','Use curiosity: identify trigger, hunger state, need and next option, then screen for binge-eating or other concerns that require specialized support.'),
    P('nhf4-7','Decode natural, additives and labels',[
      '“Natural” is not equivalent to organic, minimally processed, safer or healthier.',
      'Read the ingredient list and nutrition information to determine what a product actually contains.',
      'The source surveys preservatives, colours, sweeteners, emulsifiers and fats; each additive needs its own dose, exposure and susceptible-population assessment.',
      'A naturally sourced additive can perform the same technological role as a synthetic one; origin alone does not determine risk.',
      'Processed-meat examples such as cultured celery extract show why claim language and actual chemistry should both be examined.'
    ],'Several additive hazard claims in the PDFs are dated or overgeneralized. Distinguish hazard from risk and use current Canadian rules.','Compare two products by ingredients, nutrient profile, intended use and portion rather than by front-of-package halo words.'),
    P('nhf4-8','GM foods, pesticides, antibiotics and irradiation',[
      'Genetic engineering and traditional cross-breeding are different methods; the lesson’s common Canadian crop examples are corn, canola, soy and sugar beet.',
      'Organic standards prohibit genetically engineered seed or ingredients, while contamination and coexistence raise farm-policy questions.',
      'Pesticide use affects workers, ecosystems and residues; exposure and actual risk must be assessed rather than assumed.',
      'Agricultural antibiotic use connects to antimicrobial-resistance concerns.',
      'Food irradiation reduces selected pathogens and pests and does not make food radioactive.'
    ],'Crop prevalence, labelling rules and policy examples may no longer be current. Evaluate individual traits and foods rather than treating all GM food as one hazard.','When a client is worried, name the exact technology or exposure, verify current regulation and avoid all-or-nothing reassurance or alarm.'),
    P('nhf4-9','Detoxification physiology versus cleanse claims',[
      'The body continually transforms and eliminates compounds through the liver, kidneys, gastrointestinal tract, lungs and other systems.',
      'Hydration, adequate fibre, nourishing food, sleep and ordinary movement support normal physiology.',
      'The source also recommends lemon water, sweating, dry brushing, fasting and set meal timing as cleansing practices.',
      'Ask whether a cleanse claim names a substance, mechanism and measurable outcome—and whether it introduces risk.',
      'Red-flag prolonged fasting, laxative use, severe restriction or claims to treat disease.'
    ],'“Toxins” is used nonspecifically. Fever is an immune response, not toxin elimination; special foods and sauna do not replace hepatic or renal function.','Reframe “detox” goals into concrete outcomes such as regular bowel movements, adequate hydration or reducing alcohol exposure.'),
    P('nhf4-10','Official Lesson 4 test and remediation',[
      'Complete all 23 official questions without notes, then sort misses by concept rather than score alone.',
      'For each answer, state the source’s course answer before reading the rationale.',
      'Where a question reflects dated or disputed teaching, retain the exam answer and add a separate evidence note.',
      'Revisit only the relevant moment, then answer a parallel retrieval question and explain the concept aloud.',
      'Track confidence separately from correctness to identify lucky guesses.'
    ],'The printer PDF has no answer key; the course keys are inferred directly from lesson text and explicitly labelled as such.','Use the Quiz view for exact wording, then return to the relevant learning moment for remediation.')
  ])});

  window.NHF_BUILD.lessons.push({number:5,title:'Supplementation and Functional Foods',lede:'Understand food matrices, phytochemicals, fermentation and supplement evidence without turning mechanisms into cure claims.',modules:module('functional-foods','Food function, compounds and consumer evidence',[
    P('nhf5-1','Functional foods and free radicals',[
      'The lesson defines a functional food as a food offering potential benefits beyond essential nutrients and energy.',
      'Reactive species and free radicals arise during normal metabolism and can increase with exposures, injury, stress and illness.',
      'An antioxidant can donate an electron and help interrupt a damaging chain reaction without becoming dangerously unstable itself.',
      'Oxidative stress describes an imbalance between reactive-species production and protective systems.',
      'Antioxidant activity in a test tube is not the same as a proven disease outcome in a person.'
    ],'Reactive species also have normal signalling roles. Avoid the simple chain “oxidation causes disease, therefore more antioxidant supplement is always better.”','Identify whether a claim is about composition, mechanism, biomarker or a health outcome before communicating it.'),
    P('nhf5-2','Colour chemistry and phytochemical families',[
      'Phytochemicals are plant compounds that contribute colour, flavour, aroma and biological activity; they are not vitamins or minerals.',
      'Examples include allicin in alliums, carotenoids in orange, red and dark-green produce, flavonoids in berries, tea, apples and onions, and indoles or isothiocyanates in crucifers.',
      'Plant sterols and stanols, lignans, isoflavones, saponins and terpenes are additional source categories.',
      'Colour variety is a practical cue for dietary diversity, not a guarantee that a food prevents disease.',
      'Build meals with multiple plant colours across the week rather than chasing a single superfood.'
    ],'Several cancer-prevention statements rely on mechanistic or early research. Describe potential roles without claiming isolated phytochemicals prevent or treat cancer.','Use colour as a menu-planning prompt, then check overall adequacy and accessibility.'),
    P('nhf5-3','Whole foods, fibre and the food matrix',[
      'The source contrasts whole foods with foods stripped by refining, bleaching or peeling; modern practice treats processing as a continuum.',
      'Insoluble fibre supports stool bulk and regularity; soluble and viscous fibres can slow absorption and help lower LDL cholesterol.',
      'Fibre-rich foods include vegetables, fruit, legumes, whole grains, nuts and seeds.',
      'Edible peels often add fibre and phytochemicals; wash produce and adapt to tolerance and safety needs.',
      'A whole-food matrix combines nutrients and compounds in proportions an isolated supplement does not reproduce.'
    ],'The source phrase “fibre absorbs fats and sugars” is too broad. Fibre types differ in viscosity, fermentability and effects.','Increase fibre gradually, match fluid intake and screen for gastrointestinal conditions that need individualized advice.'),
    P('nhf5-4','Fermentation: live cultures versus vinegar pickling',[
      'Lactic-acid fermentation uses microorganisms to transform food; examples include selected yogurt, kefir, sauerkraut and miso products.',
      'Brine fermentation produces acids through microbial activity, while vinegar pickling adds acetic acid directly.',
      'A fermented food is not automatically probiotic: the organism must remain alive in an adequate amount and have evidence for a benefit.',
      'Heat or pasteurization can remove live cultures even though the food remains fermented.',
      'Read the label and storage instructions; identify whether the goal is flavour, preservation, live culture or a studied probiotic.'
    ],'Do not promise that fermented foods prevent infection or cancer. Home fermentation requires validated food-safety methods.','Ask “fermented for what purpose?” before treating every pickle or sourdough as a probiotic.'),
    P('nhf5-5','Functional-food evidence map',[
      'Map food to active component to proposed outcome, then rate the strength of the human evidence.',
      'Examples with stronger specific claims include oat or barley beta-glucan and psyllium for lowering LDL cholesterol.',
      'Tomato lycopene, tea catechins, soy isoflavones and cranberry proanthocyanidins illustrate promising but outcome-specific research.',
      'ORAC measures antioxidant activity in a laboratory system; it does not rank total nutritional value or predict a clinical result.',
      'Prefer a varied food pattern before isolated antioxidant supplementation.'
    ],'The source table sometimes groups mechanisms, observational findings and clinical outcomes together. Keep association, biomarker change and disease prevention separate.','Rewrite one marketing claim using the actual population, exposure and measured outcome.'),
    P('nhf5-6','Supplements, botanicals and nutraceuticals',[
      'Dietary supplements include vitamins, minerals, herbs or extracts, proteins and fatty acids intended to supplement the diet.',
      'The lesson profiles ashwagandha, CoQ10, EFAs, ginkgo, ginseng, glutathione, grapeseed, green foods, melatonin and pine-bark extract.',
      'A nutraceutical is described in the source as a food modified to add a nutrient or remove a component, such as calcium-fortified juice.',
      'Classify each product by what it is: nutrient, hormone, herb, microorganism, fatty acid or modified food.',
      'For every product ask purpose, dose, formulation, duration, interactions, contraindications and monitoring.'
    ],'Many disease-treatment indications are historical or weakly supported. “Used for” does not mean proven effective.','Create one medication-and-supplement list that includes exact brand, dose and reason for use.'),
    P('nhf5-7','Consumer detective: evidence, labels and fairy dust',[
      'Ask whether a claim comes from human trials, animal work or test-tube research and whether findings were replicated and peer reviewed.',
      'Check the exact dose and formulation studied instead of relying on an ingredient name on the front label.',
      'Reject cure-all claims and products promising major weight loss without broader behaviour change.',
      'A kitchen-sink formula may list many ingredients while providing subtherapeutic fairy-dusted amounts.',
      'Supplements complement—not replace—adequate food, diagnosis or necessary treatment.'
    ],'The PDF names an older Health Canada branch. Use current Canadian natural-product authorization and label information.','Compare the studied dose with the label dose and look for an NPN before discussing possible use.'),
    P('nhf5-8','Needs across age, medicines and diet patterns',[
      'Older adults may need attention to calcium, vitamin D, B12 and total intake, but supplementation follows assessment.',
      'Pregnancy planning requires reliable folic acid; iron and other nutrients depend on life stage, intake and laboratory context.',
      'Long-term medicines can affect nutrient status—for example metformin and B12 or acid suppression and selected nutrients.',
      'Vegetarian and vegan patterns need dependable B12 and deliberate routes for iron, zinc, calcium, vitamin D, iodine and omega-3 fats.',
      'Medication use, pregnancy, chronic disease and high-dose products are referral or coordination triggers.'
    ],'Do not prescribe automatically because someone belongs to a group or uses a medicine; several blanket recommendations require individualized review.','Build an assessment pathway: intake, symptoms, medicines, life stage, laboratory data when indicated and the client’s goal.'),
    P('nhf5-9','Practice cases and teach-back',[
      'Classify an item as whole food, fermented food, probiotic, supplement or nutraceutical—and explain why.',
      'Build a one-day colour-diversity plan without using detox or superfood language.',
      'Compare a brine-fermented pickle with a vinegar pickle and identify whether live cultures are expected.',
      'Audit a supplement label for claim strength, dose, ingredients, interactions and referral needs.',
      'Teach the distinction among antioxidant mechanism, biomarker effect and demonstrated clinical outcome.'
    ],'Practice should reward calibrated language such as “may,” “associated with” and “evidence is limited,” not unsupported certainty.','Use teach-back: ask the learner to explain the decision in their own words and correct the explanation rather than the person.'),
    P('nhf5-10','Official Lesson 5 test and remediation',[
      'Complete all 25 official items without notes and tag each response high, medium or low confidence.',
      'Use the source answer for exam preparation, then open the evidence note for disputed claims.',
      'Group errors into free radicals, phytochemicals, fermentation, fibre, supplements and named compounds or herbs.',
      'After review, answer a parallel question and explain the correction in one sentence.',
      'Retest missed and low-confidence items after a delay.'
    ],'No official key was supplied; keys are inferred from lesson text. Several supplement and disease claims remain only as course answers.','Use the Quiz review to distinguish a memory error from a question whose source claim needs modern context.')
  ])});

  window.NHF_BUILD.lessons.push({number:6,title:'Phytotherapy, Homeopathy and Aromatherapy',lede:'Learn the source’s botanical, essential-oil and homeopathic frameworks while keeping identity, dose, evidence and safety clearly separated.',modules:module('botanical-medicine','Botanical modalities and safety',[
    P('nhf6-1','Botanical medicine and safety guardrails',[
      'The lesson uses botanical medicine or phytotherapy as an umbrella introducing herbal medicine, aromatherapy and homeopathy.',
      'A plant can have multiple common names but one botanical name; correct identification includes genus, species and relevant plant part.',
      'Natural does not mean harmless: herbs can cause adverse effects, allergy, toxicity and drug interactions.',
      'Clarify whether the learner is studying historical use, current evidence or safe practice—these are different questions.',
      'Pregnancy, childhood, serious illness, surgery, polypharmacy and persistent symptoms are coordination or referral triggers.'
    ],'The PDF groups modalities with very different evidence bases. Keep herbal pharmacology, aromatherapy and homeopathy distinct.','Before any product discussion, identify the exact botanical, preparation, route, dose, person and intended outcome.'),
    P('nhf6-2','Plant identity, forms and preparation',[
      'Preparation changes exposure: tea, infusion, decoction, tincture, extract, juice, bath, poultice and essential oil are not interchangeable.',
      'Infusions suit many leaves and flowers; decoctions use longer simmering for tougher roots or bark; tinctures use alcohol or glycerin extraction.',
      'Record botanical name, plant part, extraction ratio or standardization, dose, route and duration.',
      'The source proposes whole-plant synergy; treat this as a hypothesis or traditional rationale, not proof that whole herbs are always safer.',
      'Use product-specific instructions and avoid casual internal use of concentrated essential oils.'
    ],'Traditional preparation guidance does not replace quality testing, contamination control, dosing data or clinical evidence.','Translate “I take echinacea” into a precise product description before assessing benefit or risk.'),
    P('nhf6-3','Herb atlas I: digestion, respiration and immunity',[
      'Digestive-source associations include angelica, cinnamon or yellow gentian for appetite, fennel or peppermint for cramping and marsh mallow for soothing mucosa.',
      'Respiratory-source associations include thyme, elder flower, coltsfoot, eucalyptus and echinacea.',
      'Agrimony is linked with mild acute diarrhea; dandelion or artichoke with bile and digestion; black walnut with parasites in the source.',
      'Compare claimed action, preparation and safety rather than memorizing an herb as a cure-all.',
      'Severe pain, dehydration, bleeding, breathing difficulty, persistent fever or prolonged symptoms need medical assessment.'
    ],'Many indications are traditional, broad or unsupported; coltsfoot and some other products can pose toxicity concerns.','Attach a red-flag rule and interaction screen to every herb association you memorize.'),
    P('nhf6-4','Herb atlas II: circulation, sleep, skin, pain and hormones',[
      'Circulation-source associations include cayenne, ginkgo, hawthorn and horse chestnut; each has different evidence and interaction risks.',
      'Sleep or calming associations include hops, lavender, lemon balm, passion flower and valerian.',
      'Skin or injury associations include aloe, calendula, arnica and witch hazel; route matters, and ordinary arnica herb is not used internally.',
      'Pain or inflammation associations include white willow, feverfew, arnica and devil’s claw.',
      'Hormone-related associations include black cohosh, chasteberry and wild yam; screen carefully rather than promising hormone balance.'
    ],'The source overstates dementia prevention, hormone effects and disease treatment. Ginkgo, willow, St John’s wort and many others can interact with medicines.','Build a table with category, source use, evidence strength, contraindications and referral cue—not just name and symptom.'),
    P('nhf6-5','Essential oils: extraction, carriers, dilution and notes',[
      'Essential or volatile oils are concentrated plant extracts, commonly produced by distillation; fragrance oils are not the same product.',
      'Terpenes, terpene alcohols and aromatic compounds contribute scent and laboratory activity.',
      'Top notes evaporate quickly; middle notes are warm and mellow; base notes are deeper and longer lasting.',
      'Carrier oils dilute essential oils for topical use; the source lists sweet almond, grapeseed, soybean and wheat germ.',
      'The source basic kit is camomile, eucalyptus, lavender and tea tree—exam associations, not universal treatments.'
    ],'Concentration and route drive risk. Avoid casual ingestion, use conservative dilution and consider pets, children, pregnancy, asthma and allergy.','Separate scent preference from clinical outcome and document any topical reaction.'),
    P('nhf6-6','Aromatherapy practice and seasonal-allergy safety',[
      'Seasonal allergic rhinitis can involve sneezing, congestion, runny nose, itchy or watery eyes and fatigue; asthma symptoms are a red flag.',
      'The article associates camomile with eye discomfort, frankincense with congestion, and thyme or eucalyptus with respiratory or immune claims.',
      'Aromatherapy delivery includes inhalation, diffusion, bathing, compresses and diluted massage.',
      'Start with symptom severity, asthma history, medicines, pregnancy, skin sensitivity and prior allergy—not with an oil recipe.',
      'Use evidence-based allergy management alongside any optional scent-based comfort practice.'
    ],'Do not reproduce eye-area spray or direct-under-nose oil instructions unqualified. Essential oils can irritate eyes, airways and skin.','For breathing difficulty or asthma symptoms, stop the exposure and direct appropriate medical care.'),
    P('nhf6-7','Botanical oils and balms',[
      'The article profiles coconut, sea-buckthorn, argan, soybean, jojoba, avocado, sesame and olive oils for culinary or topical use.',
      'Match texture and formulation to the intended use rather than assuming one oil suits every skin type.',
      'Cold-pressed, expeller-pressed and refined oils differ in processing and composition; extraction method alone does not prove clinical superiority.',
      'Jojoba is a liquid wax; argan and olive contain unsaturated fats or tocopherols; avocado is a heavier emollient; coconut is more occlusive.',
      'Check allergy history—especially sesame or nut concerns—and patch test a finished product when appropriate.'
    ],'Anti-aging, collagen, wound-healing and antimicrobial claims are preliminary or formulation-specific. Cosmetic use is not infection treatment.','Choose a simple, well-tolerated formulation and stop if irritation develops.'),
    P('nhf6-8','Homeopathy: theory, history, dilution and evidence',[
      'Hahnemann’s homeopathic framework uses the law of similars: a substance associated with symptoms is selected for similar symptoms.',
      'Remedies are serially diluted and shaken; X denotes 1:10 steps and C denotes 1:100 steps.',
      'The source minimum-dose doctrine claims more dilution can mean greater potency.',
      'Classical homeopathy typically chooses one individualized remedy; complex products combine several remedies for a named concern.',
      'Learn the framework as course history and theory, then explicitly compare it with current evidence.'
    ],'Highly diluted homeopathic products have not demonstrated effects beyond placebo for treating conditions. Never delay effective care or stop medicines.','Use “the source teaches” language for doctrine, and use separate evidence language for clinical decisions.'),
    P('nhf6-9','Homeopathic remedy recognition for the exam',[
      'Recognize source pairs: arnica with bruising, overexertion or jet lag; Rhus toxicodendron with itchy rash or chickenpox; Nux vomica with indigestion or hangover; Ipecacuanha with persistent nausea.',
      'Additional pairs include Aconite with early infection or anxiety, Cantharis with burning urinary symptoms, Magnesia phosphorica with cramps and Veratrum album with acute watery diarrhea.',
      'Distinguish a homeopathic product name from an herbal preparation of the same plant; concentration and risk can be entirely different.',
      'Use retrieval to match names to source descriptions, not to self-prescribe.',
      'Attach a red-flag or referral cue to every symptom cluster.'
    ],'These are course associations, not validated recommendations. Chickenpox, dehydration, urinary symptoms, head injury and severe pain can require care.','After recalling a pair, state the safety boundary aloud so exam memory does not become clinical advice.'),
    P('nhf6-10','Whole-person botanical toolkit',[
      'The article organizes source remedies around hair, skin, nails, brain, women’s symptoms, muscles, heart, digestion, eyes, oral health, joints and feet.',
      'Begin each system with foundations: adequate food, sleep, movement, hygiene, stress support and indicated medical or dental care.',
      'Then classify any herb, oil or supplement by intended outcome, evidence, route, dose, safety and monitoring.',
      'The glossary distinguishes teas, infusions, decoctions, tinctures, poultices, essential oils and distillates.',
      'Practise responding to a request with one clarification, one evidence boundary and one safe next step.'
    ],'The article makes many treatment claims and uses vague detox language. Preserve it as course content without turning it into unqualified advice.','Use a repeatable product screen rather than memorizing dozens of isolated remedy promises.'),
    P('nhf6-11','Official Lesson 6 test and remediation',[
      'Complete all 25 official items and tag whether each tests an herb, essential oil, aromatherapy concept or homeopathic remedy.',
      'Answer with the source association before reading the evidence note.',
      'For every homeopathy item, label it course doctrine rather than established mechanism.',
      'Review misses by rebuilding a small name-to-category-to-source-use-to-safety table.',
      'Retest low-confidence items and explain which answers should never become self-treatment advice.'
    ],'No official key was supplied; keys are inferred from the lesson. Question 15 duplicates an option label in the PDF; the option order is preserved.','Use the exact source wording in Quiz, then return to the evidence-aware moment before applying the idea.')
  ])});
})();
