const COURSE_STAGES=[
  {id:'lesson-1',number:1,title:'Nutrition Basics',status:'loaded'},
  {id:'lesson-2',number:2,title:'Preconception Nutrition',status:'supplementary'},
  {id:'lesson-3',number:3,title:'Nutrition During Pregnancy',status:'test-loaded'},
  {id:'lesson-4',number:4,title:'Nutrition During Lactation',status:'test-loaded'},
  {id:'lesson-5',number:5,title:'Infant Nutrition',status:'test-loaded'},
  {id:'lesson-6',number:6,title:'Toddler & Preschooler Nutrition',status:'test-loaded'},
  {id:'lesson-7',number:7,title:'Child & Preadolescent Nutrition',status:'test-loaded'},
  {id:'lesson-8',number:8,title:'Adolescent Nutrition',status:'test-loaded'},
  {id:'lesson-9',number:9,title:'Adult Nutrition',status:'test-loaded'},
  {id:'lesson-10',number:10,title:'Nutrition and Older Adults',status:'test-loaded'},
  {id:'lesson-11',number:11,title:'The Counselling Relationship',status:'test-loaded'},
  {id:'lesson-12',number:12,title:'Behaviour Change Models & Theories',status:'test-loaded'},
  {id:'lesson-13',number:13,title:'Communication Skills',status:'test-loaded'},
  {id:'lesson-14',number:14,title:'The Counselling Interview',status:'test-loaded'},
  {id:'lesson-15',number:15,title:'Developing a Nutritional Care Plan',status:'test-loaded'},
  {id:'lesson-16',number:16,title:'Facilitating Self Management',status:'test-loaded'},
  {id:'lesson-17',number:17,title:'Professional Development',status:'test-loaded'},
  {id:'final-exam',number:null,title:'Nutritional Counselling Final Exam',type:'final',status:'pending'}
];

for(const stage of COURSE_STAGES){if(stage.number>1&&STUDY_GUIDES[stage.id])stage.status='supplementary';}

const LESSON1_INSTRUCTIONS={
  required:'Read Chapter 1 of Nutrition Through the Life Cycle E-Book and complete Lesson Test 1.',
  optional:'Videos, animations and study materials can be used to support your learning but are not for marks.',
  tip:'We’ve included a printer version of the lesson test. The printer version is the same as the lesson test and can be used as a study tool. We recommend reading the questions before you read the chapter and making notes. Then you can enter your answers online and reference the printer version of your lesson test to help you prepare for the final exam.'
};

const LESSON1_TOPICS=[
  ['Required reading','E-Book Chapter 1: Nutrition Basics'],
  ['Optional support','Videos and Animations'],
  ['Optional support','Study Materials'],
  ['Study tool','Lesson Test 1 (Printer Version)'],
  ['Required assessment','Lesson Test 1']
];

const BOOK_CHAPTERS=[
  'Preparing to Meet Your Clients',
  'Frameworks for Understanding and Attaining Behavior Change',
  'Communication Essentials',
  'Meeting Your Client: The Counseling Interview',
  'Developing A Nutrition Care Plan: Putting It All Together',
  'Promoting Change to Facilitate Self-Management',
  'Making Behavior Change Last',
  'Physical Activity',
  'Communication with Diverse Population Groups',
  'Group Facilitation and Counseling',
  'Keys to Successful Nutrition Education Interventions',
  'Educational Strategies, Technology, and Evaluation',
  'Professionalism and Final Issues',
  'Guided Counseling Experience'
];

const FLASHCARDS=[
  ['EAR','Estimated Average Requirement: an intake estimated to meet the requirement of 50% of healthy people in a defined group.'],
  ['RDA','Recommended Dietary Allowance: an intake sufficient for nearly all (97–98%) healthy people in a defined group.'],
  ['AI','Adequate Intake: used when evidence is not sufficient to establish an EAR and therefore an RDA.'],
  ['UL','Tolerable Upper Intake Level: the highest average daily intake likely to pose no risk for almost all healthy people.'],
  ['4–4–9','Carbohydrate provides 4 kcal/g, protein 4 kcal/g and fat 9 kcal/g.'],
  ['Sucrose','A disaccharide made of glucose plus fructose.'],
  ['AMDR','Acceptable Macronutrient Distribution Range: a percentage-of-energy range associated with nutrient adequacy and lower chronic-disease risk.'],
  ['Nutrient density','A high amount of useful nutrients relative to the food’s energy contribution. It is not the same as “low calorie.”'],
  ['ABCD assessment','Anthropometric, Biochemical, Clinical/physical and Dietary information. Use the pattern as a memory aid, not as four isolated boxes.'],
  ['Primary malnutrition','Malnutrition driven chiefly by inadequate intake or food availability. Secondary malnutrition arises from disease, absorption, metabolism or losses.'],
  ['Phytochemicals','Bioactive compounds made by plants. They are not classified as essential nutrients, but many influence health-related processes.'],
  ['Antioxidant','A substance that can slow or limit oxidative reactions. More is not automatically better, especially in supplement form.'],
  ['Water-soluble vitamins','The B-complex vitamins and vitamin C. Storage and excretion patterns vary by vitamin.'],
  ['Fat-soluble vitamins','Vitamins A, D, E and K. They depend on fat digestion and can be stored in body tissues.'],
  ['Structure/function claim','Describes support for normal body structure or function, such as calcium helping build strong bones.'],
  ['Disease claim','Claims to diagnose, treat, cure, mitigate or prevent a disease. U.S. supplements cannot make such a claim unless regulated as an approved drug or otherwise authorized.'],
  ['Daily Value','A label reference amount used to place one serving’s nutrient content in the context of a daily diet; it is not an individualized prescription.'],
  ['Nutrition Facts context','The source test uses a legacy U.S. label. Current U.S. and Canadian labels have different mandatory elements and must be interpreted under their own rules.']
];

const PRACTICE=[
  ['A nutrient has an EAR but a client asks whether the EAR should be their personal daily target. What would you explain?','The EAR is designed primarily for groups and corresponds to a 50% probability of meeting an individual requirement. When an RDA exists, it is the more appropriate intake goal for most healthy individuals.'],
  ['A meal contains 65 g carbohydrate, 24 g protein and 18 g fat. Estimate its energy.','Carbohydrate: 65 × 4 = 260 kcal. Protein: 24 × 4 = 96 kcal. Fat: 18 × 9 = 162 kcal. Total ≈ 518 kcal.'],
  ['A food provides 72 kcal from fat in a 240-kcal serving. What percentage of its energy is from fat?','72 ÷ 240 × 100 = 30%. This falls within the adult fat AMDR of 20–35%, but one food or meal does not establish a person’s whole dietary pattern.'],
  ['Why is “% Daily Value” useful but insufficient for individualized counselling?','It quickly shows whether a serving contributes relatively little or a lot of a nutrient, but it is based on general reference values, not the client’s age, physiology, medical condition, intake pattern or goals.'],
  ['Name the four parts of the ABCD assessment pattern and give one example of each.','Anthropometric: weight history; Biochemical: relevant laboratory values; Clinical/physical: symptoms or nutrition-focused findings; Dietary: food, beverage and supplement intake.'],
  ['A client chooses only low-calorie foods but has a poorly varied diet. Why is “low calorie” not enough?','Nutrient density concerns the nutrients delivered relative to energy. A low-energy food can still contribute little protein, fibre, vitamins or minerals, while some energy-dense foods can be highly nutritious.'],
  ['Which vitamins are water soluble, and what caution belongs with the shortcut?','The B-complex vitamins and vitamin C. “Water soluble” does not mean harmless at any dose, and storage/excretion differs among them—vitamin B12 is a notable example with substantial body stores.'],
  ['Turn “Calcium prevents fractures” into a more responsible learning statement.','Calcium contributes to normal bone structure, but fracture risk is multifactorial. Avoid turning a nutrient’s role into a guaranteed disease-prevention claim.'],
  ['Why should a Canadian practitioner not treat a U.S. supplement-claim question as Canadian regulatory guidance?','The regulatory systems differ. U.S. dietary supplements and Canadian natural health products are governed by different rules, authorizations and labels. Use the test to learn the concept, then verify the jurisdiction.'],
  ['A client’s limited income prevents consistent food access. What assessment issue does this raise?','It may contribute to primary malnutrition through inadequate access or intake. Explore food security respectfully and connect the client with appropriate supports instead of reducing the issue to “willpower.”'],
  ['How would you explain sodium in a highly processed meal without labelling one meal as a diagnosis?','Identify major sodium sources, compare serving amounts and frequency, and place the meal in the client’s overall pattern. Blood pressure assessment and treatment remain within the appropriate clinical scope.'],
  ['What is the safest interpretation of “antioxidant-rich”?','It usually points toward a varied pattern of plant foods containing vitamins, carotenoids and polyphenols. It does not prove that isolated high-dose antioxidant supplements improve outcomes.']
];

const SOURCE_QUESTIONS=[
  {q:'The Estimated Average Requirement (EAR) means:',o:['an intake level that meets the nutrient needs of 98% of healthy people.','an intake value that meets the nutrient needs of half the healthy individuals in a group.','the upper limits of a nutrient compatible with health.','the nutrient intake standard for healthy people.','that this is a “tentative” RDA.'],a:1,e:'The EAR is estimated to meet the requirement of 50% of healthy people in a defined life-stage and sex group.'},
  {q:'What two monosaccharides are found in sucrose (table sugar)?',o:['Glucose and lactose','Glucose and glucose','Glucose and maltose','Glucose and fructose'],a:3,e:'Sucrose is the disaccharide formed from glucose and fructose.'},
  {q:'Which of the following statements about food labels is FALSE?',o:['They note the presence of common food allergens.','They appear on almost all multiple-ingredient foods.','They list the content of fat, saturated fat, trans fat, and cholesterol.','They contain information about the amount recommended for ingestion each day.','They list the % Daily Value (%DV) for each relevant nutrient.'],a:3,e:'The source-era study key is D. A label reports nutrient amounts per serving and uses Daily Values as general reference amounts; it does not provide an individualized daily recommendation.',nuance:'The wording is broad and the label rules have changed. Read this as a source-era U.S. label question, not as a complete statement of current Canadian or U.S. requirements.'},
  {q:'Producers of bread, cornmeal, crackers, flour tortillas, white rice, and other products made with refined grains MUST use flours enriched with which of the following?',o:['Thiamin','Niacin','Iron','Riboflavin','All of the above'],a:4,e:'The intended answer is All of the above. U.S. enriched-grain standards include thiamin, riboflavin, niacin and iron; folic acid is also relevant but is not one of these options.'},
  {q:'What mandatory nutrient is missing from the food label?',o:['Unsaturated fats','Simple sugars','Vitamin C','Vitamin K'],a:2,e:'For the legacy U.S. Nutrition Facts format shown in the source, vitamin C is the intended answer.',nuance:'Current U.S. labels require vitamin D, calcium, iron and potassium; vitamins A and C are no longer mandatory. The source label and key belong to an older label format.'},
  {q:'Does this product fall within the Acceptable Macronutrient Distribution Range for fat?',o:['Yes','No'],a:0,e:'Yes. The label shows 45 of 170 kcal from fat: 45 ÷ 170 × 100 ≈ 26.5%, within the adult fat AMDR of 20–35% of energy.',nuance:'The calculation describes this serving. It does not by itself assess an individual’s usual dietary pattern.'},
  {q:'After class, you go to Jamba Juice and get an “Orange-a-Peel” smoothie that contains the following nutrients: 9 g of protein, 102 g carbohydrate, and 1 g of fat. How many total Calories does this provide?',o:['299','399','448','453','546'],a:3,e:'Protein: 9 × 4 = 36 kcal. Carbohydrate: 102 × 4 = 408 kcal. Fat: 1 × 9 = 9 kcal. Total = 453 kcal.'},
  {q:'A woman ate 1/2 of a pita bread sandwich filled with tuna salad. The entire sandwich contained 20 grams carbohydrate, 8 grams protein, and 5 grams fat. Approximately how many calories did she obtain?',o:['80','130','150','160'],a:0,e:'The whole sandwich provides about 157 kcal: (20 × 4) + (8 × 4) + (5 × 9). Half provides about 78.5 kcal, rounded to 80.'},
  {q:'If the woman in question #8 drank a glass of regular, fortified milk, what is the most important essential nutrient that she added to her diet?',o:['Calcium','Cholesterol','Fluoride','Glucose','Vitamin C'],a:0,e:'Calcium is the intended answer. Fortified milk also contributes other nutrients, so “most important” reflects the source question’s teaching emphasis.'},
  {q:'What nutrient would someone susceptible to high blood pressure be consuming too much of with a meal consisting of a salami sandwich, chicken noodle soup, and whole milk?',o:['Sugar','Caffeine','Sodium','Water','Calcium'],a:2,e:'Sodium is the intended answer; processed meats and canned or prepared soups can be major sodium sources.'},
  {q:'Phytochemicals are chemical substances found in _____ that protect human body processes and may benefit health.',o:['animals','the human body','plants','both plants and animals','None of the above'],a:2,e:'Phytochemicals are bioactive compounds produced by plants. They are not classed as essential nutrients.'},
  {q:'Which of the following vitamins acts as an antioxidant in the body?',o:['Vitamin C','Vitamin E','Beta-carotene','All of the above','a and b only'],a:3,e:'The intended answer is All of the above: vitamin C, vitamin E and beta-carotene can participate in antioxidant defence.',nuance:'Beta-carotene is a carotenoid and provitamin A compound, not itself a vitamin. The question uses “vitamins” loosely.'},
  {q:'Which of the following is NOT one of the roles that water plays in the body?',o:['Energy transformation','Energy metabolism regulation','Excretion of wastes','Temperature regulation','Medium in which most chemical reactions take place'],a:1,e:'Energy metabolism regulation is the intended exception. Water participates in hydrolysis and other chemical transformations, while also serving as a reaction medium, supporting waste removal and temperature regulation.',nuance:'The source wording is imprecise: water is essential to metabolism, but “regulation” is not the role named by this source-era key.'},
  {q:'Nutrient-dense foods can be defined as:',o:['foods that are both good sources of nutrients and low in Calories.','foods that contain low amounts of nutrients and are high in Calories.','foods that are both good sources of nutrients and high in Calories.','foods that contain low amounts of nutrients and are low in Calories.','all animal-derived foods.'],a:0,e:'A is the intended source answer: foods providing substantial nutrients relative to energy.',nuance:'Modern use is relational rather than simply “low calorie.” Nuts, seeds and oily fish can be energy dense and still nutrient rich.'},
  {q:'Which of the following would NOT be considered one of the four components of nutrition assessment?',o:['Anthropometric','Biochemical','Clinical/physical','Initial evaluation','Dietary'],a:3,e:'Initial evaluation is not one of the ABCD components. The memory pattern is Anthropometric, Biochemical, Clinical/physical and Dietary.'},
  {q:'How many Calories from carbohydrates is Jill consuming daily?',o:['750','1000','1750','2250'],a:1,e:'Jill consumes 250 g carbohydrate × 4 kcal/g = 1,000 kcal from carbohydrate.'},
  {q:'The percentage of energy that comes from Jill’s intake of carbohydrate is:',o:['12%.','25%.','48%.','57%.','65%.'],a:2,e:'Her estimated total is 2,100 kcal: 1,000 from carbohydrate, 900 from fat and 200 from protein. Carbohydrate contributes 1,000 ÷ 2,100 × 100 ≈ 48%.'},
  {q:'The percentage of energy that comes from Jill’s intake of fat is:',o:['13%.','30%.','43%.','56%.'],a:2,e:'Fat contributes 100 g × 9 kcal/g = 900 kcal. 900 ÷ 2,100 × 100 ≈ 43%.'},
  {q:'Good food sources of antioxidants would include which of the following foods?',o:['Bananas, raisins, figs','Oranges, sweet potatoes, bell peppers','Spinach, blueberries, cranberries','All of the above','b and c only'],a:4,e:'The expected legacy key is “b and c only”: oranges, sweet potatoes, bell peppers, spinach, blueberries and cranberries are the emphasized antioxidant-rich choices.',nuance:'Scientifically, raisins and figs also contain antioxidant phytochemicals, so “All of the above” is defensible. Keep the source-era key separate from the broader nutrition evidence.'},
  {q:'Which of the following would NOT be an example of an approved dietary supplement claim?',o:['Calcium builds strong bones','Calcium prevents bone fracture','Vitamin E, an antioxidant, helps maintain cell membranes','XYZ helps promote urinary tract health','XYZ gives you energy and focus throughout your busy day'],a:1,e:'“Calcium prevents bone fracture” is a disease-prevention claim, not a simple structure/function claim.',nuance:'The source uses U.S. claim categories. FDA does not pre-approve ordinary structure/function claims; manufacturers must substantiate them, notify FDA and use the required disclaimer. Canadian natural health products follow a different authorization system.'},
  {q:'The water-soluble vitamins include:',o:['A, D, E, and K.','A and C.','B-complex and C.','B-complex and K.','All vitamins are water soluble.'],a:2,e:'The B-complex vitamins and vitamin C are water soluble.'},
  {q:'A diet low in fat-soluble vitamins will result in a more rapid onset of deficiency symptoms than one low in water-soluble vitamins.',o:['True','False'],a:1,e:'False as a general teaching rule. Fat-soluble vitamins are stored in body tissues, while many water-soluble vitamins have more limited stores.',nuance:'There are important exceptions. Vitamin B12 can be stored for years, and deficiency timing depends on baseline stores, absorption, needs and losses.'},
  {q:'Typically, we absorb a greater percentage of minerals than vitamins.',o:['True','False'],a:1,e:'False is the intended answer. Mineral absorption is often more variable and can be limited by food matrix, inhibitors, enhancers and nutrient status.'},
  {q:'Not having enough money to buy food to eat is an example of a potential cause of primary malnutrition.',o:['True','False'],a:0,e:'True. Inadequate access can directly reduce intake and contribute to primary malnutrition.'},
  {q:'What food serving below does NOT provide significant amounts of iron?',o:['Round steak, 3 oz','Pork and beans, 1/2 cup','Peaches, 1/2 cup','Iron-fortified breakfast cereal, 1 cup'],a:2,e:'Peaches are the intended answer. Meat, legumes and iron-fortified cereal are more meaningful iron sources.'}
];

const LABEL_HTML=`<div class="nutrition-label" aria-label="Legacy Nutrition Facts label used for questions 5 and 6">
  <h3>Nutrition Facts</h3><div class="serving">Serving Size 1/4 cup (40g)</div>
  <div class="cal"><span>Calories 170</span><span>Calories from Fat 45</span></div>
  <div class="dv">% Daily Value*</div>
  <div class="row"><b>Total Fat 5g</b><b>5%</b></div><div class="row indent"><span>• Saturated Fat 0.5g</span><b>3%</b></div><div class="row indent"><span>• <i>Trans</i> Fat 0g</span><span></span></div>
  <div class="row"><span>Cholesterol 0mg</span><b>0%</b></div><div class="row"><span>Sodium 10mg</span><b>0%</b></div><div class="row"><span>Potassium 310mg</span><b>9%</b></div>
  <div class="row"><b>Total Carbohydrate 31g</b><b>10%</b></div><div class="row indent"><span>• Dietary Fiber 2g</span><span></span></div><div class="row indent"><span>• Sugars 29g</span><span></span></div><div class="row"><span>Protein 1g</span><b>2%</b></div>
  <div class="vitamins"><span>Vitamin A 0%</span><span>Iron 6%</span><span>Calcium 2%</span></div>
</div>`;

const JILL_PASSAGE='Jill is a very active teenager who has been maintaining her current weight of 125 pounds. Her average daily macronutrient intake consists of 250 g carbohydrate, 100 g total fat, 30 g saturated fat, and 50 g protein.';
const STORAGE_KEY='holusCounselingLesson1V1';
const defaultState={
  answers:{},
  current:0,
  selectedStage:'lesson-1',
  lessonSteps:{'lesson-1':0,'lesson-2':0},
  notesByLesson:{'lesson-1':'','lesson-2':''},
  cardPositions:{'lesson-1':0,'lesson-2':0},
  cardRevealed:false,
  practicePositions:{'lesson-1':0,'lesson-2':0},
  practiceRevealed:false,
  sourceAnswersByLesson:{},
  sourceCurrentByLesson:{}
};
let state=loadState();
if(!COURSE_STAGES.some(stage=>stage.id===state.selectedStage))state.selectedStage='lesson-1';
let activeView='overview';
const app=document.getElementById('app');
const lessonSelect=document.getElementById('lesson-select');
const courseStatus=document.getElementById('course-status');

function loadState(){
  try{
    const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}');
    const legacyNotes={'lesson-1':saved.notes||'','lesson-2':saved.lesson2Notes||''};
    return {
      ...defaultState,
      ...saved,
      answers:saved.answers||{},
      lessonSteps:{...defaultState.lessonSteps,...(saved.lessonSteps||{}),'lesson-1':Number(saved.lessonSteps?.['lesson-1']??saved.lessonStep??0)},
      notesByLesson:{...defaultState.notesByLesson,...legacyNotes,...(saved.notesByLesson||{})},
      cardPositions:{...defaultState.cardPositions,...(saved.cardPositions||{}),'lesson-1':Number(saved.cardPositions?.['lesson-1']??saved.cardIndex??0)},
      practicePositions:{...defaultState.practicePositions,...(saved.practicePositions||{}),'lesson-1':Number(saved.practicePositions?.['lesson-1']??saved.practiceIndex??0)},
      sourceAnswersByLesson:saved.sourceAnswersByLesson||{},
      sourceCurrentByLesson:saved.sourceCurrentByLesson||{}
    };
  }catch{return {...defaultState,lessonSteps:{...defaultState.lessonSteps},notesByLesson:{...defaultState.notesByLesson},cardPositions:{...defaultState.cardPositions},practicePositions:{...defaultState.practicePositions},sourceAnswersByLesson:{},sourceCurrentByLesson:{}}}
}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function esc(value){return String(value).replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]))}
function footer(){return `<footer class="course-footer"><p>Independent, source-aware study companion for Juliana.</p><p>Book content is added only from verified public structure or material you provide.</p></footer>`}
function currentStage(){return COURSE_STAGES.find(stage=>stage.id===state.selectedStage)||COURSE_STAGES[0]}
function stageLabel(stage){return stage.type==='final'?'Final exam':`Lesson ${stage.number}`}
function sourceTestFor(id){return (window.NC_SOURCE_TESTS||{})[id]||null}
function suppliedSourceQuestionTotal(){return SOURCE_QUESTIONS.length+Object.values(window.NC_SOURCE_TESTS||{}).reduce((sum,test)=>sum+(test.questions?.length||0),0)}
function stageMapStatus(stage){
  if(window.NC_LEARNING_BLUEPRINTS?.[stage.id]?.integratedSteps)return 'Comprehensive teaching + practice + source test';
  if(journeyData(stage.id))return 'Guided path + practice + source test';
  if(STUDY_GUIDES[stage.id]&&sourceTestFor(stage.id))return 'Supplementary guide + supplied source test';
  if(sourceTestFor(stage.id))return 'Supplied source test · guide pending';
  if(stage.type==='final')return 'Final assessment · source materials pending';
  return 'Title confirmed · source materials pending';
}
function studySteps(id){
  const guide=STUDY_GUIDES[id];
  if(!guide)return [];
  return [...guide.sections.map(section=>({id:section.id,label:section.title})),{id:`${id}-notes`,label:'Study notes',notes:true}];
}
function compactStepLabel(label){return String(label).replace(/^\d+\.\s*/, '').replace('Nutritional Counselling study guide','Start here')}
function guideStepIndex(id){
  const steps=studySteps(id);
  if(!steps.length)return 0;
  return Math.max(0,Math.min(steps.length-1,Number(state.lessonSteps?.[id])||0));
}
function syncCourseStatus(){
  if(!courseStatus)return;
  const stage=currentStage();
  const test=sourceTestFor(stage.id);
  const guide=STUDY_GUIDES[stage.id];
  courseStatus.classList.toggle('pending',!guide&&!test&&stage.status!=='loaded');
  courseStatus.lastChild.textContent=stage.id==='lesson-1'
    ?'Lesson 1 guide + supplied source test ready'
    :guide&&test
      ?`${stageLabel(stage)} supplementary guide + supplied source test ready`
      :guide
        ?`${stageLabel(stage)} supplementary guide ready · source test pending`
        :test
          ?`${stageLabel(stage)} source test ready · lesson guide pending`
          :`${stageLabel(stage)} mapped · source materials pending`;
}

function renderOverview(){
  return `<section class="view overview-view">
    <div class="course-dashboard">
      <div class="dashboard-copy"><p class="eyebrow">Course 05 · 17 lessons + final exam</p><h1>Nutrition Counseling &amp; Education</h1><p class="lede">Learn the substantial knowledge in focused chunks, retrieve it, then use it in a calculation, comparison or counselling decision. Lessons 1–6 now integrate their comprehensive teaching directly into the learning path.</p><div class="hero-actions"><button class="primary" type="button" data-stage="${STUDY_GUIDES[state.selectedStage]?state.selectedStage:'lesson-1'}">Continue ${STUDY_GUIDES[state.selectedStage]?stageLabel(currentStage()):'Lesson 1'} →</button><button class="secondary" type="button" data-stage-tool="test">Open Test 1</button></div></div>
      <div class="dashboard-side"><div class="dashboard-art"><img src="../../assets/course-nutrition-counseling.svg" alt=""></div><div class="overview-kpis" aria-label="Course summary"><article><strong>17</strong><span>lessons</span></article><article><strong>${Object.keys(STUDY_GUIDES).length}</strong><span>guides ready</span></article><article><strong>${suppliedSourceQuestionTotal()}</strong><span>source questions</span></article></div></div>
    </div>
    <section class="dashboard-panel" aria-labelledby="course-map-title"><div class="section-head compact"><div><p class="eyebrow">Official course sequence</p><h2 id="course-map-title">Choose a lesson.</h2></div><p>The teaching belongs inside the lesson—not in a separate notes detour. Each path moves through focused knowledge, retrieval, application, reflection and its supplied source test. Official answer keys remain separate.</p></div><div class="course-map compact-map">${COURSE_STAGES.map(stage=>`<button type="button" class="module-card ${stage.status} ${stage.type||''}" data-stage="${stage.id}"><b>${stage.type==='final'?'EXAM':String(stage.number).padStart(2,'0')}</b><span><strong>${stage.title}</strong><small>${stageMapStatus(stage)}</small></span><i aria-hidden="true">→</i></button>`).join('')}</div></section>
    <div class="overview-details">
      <details><summary><span>Official course sources</span><small>What is loaded, assigned and still pending</small></summary><div class="details-body"><div class="source-boundary"><article class="source-card loaded"><p class="eyebrow">Course curriculum · mapped</p><h3>Nutritional Counselling course</h3><p>All 17 official lesson titles and the final exam form the primary course sequence. Every lesson now has a study guide and its supplied printer-version source test; no official answer keys were included.</p><dl><dt>Lessons</dt><dd>17 confirmed titles</dd><dt>Source tests</dt><dd>17 printer versions loaded</dd><dt>Study guides</dt><dd>17 ready</dd></dl></article><article class="source-card roadmap"><p class="eyebrow">Lesson 1 assignment · loaded</p><h3>Nutrition Through the Life Cycle</h3><p>The official instruction assigns E-Book Chapter 1: <b>Nutrition Basics</b>, followed by Lesson Test 1. The 25-question printer version is loaded as a separate study tool.</p><dl><dt>Required</dt><dd>Chapter 1 + Lesson Test 1</dd><dt>Optional</dt><dd>Videos, animations, study materials</dd><dt>Official key</dt><dd>Not supplied</dd></dl></article><article class="source-card supplementary"><p class="eyebrow">Lessons 2–17 · supplementary</p><h3>Life stages and counselling practice</h3><p>Independently sourced study guides, flashcards and original practice prompts cover each lesson topic, with every supplied printer-version test kept as a separate source set. Official assigned readings and answer keys were not included, so the guides remain clearly labelled as supplementary.</p><dl><dt>Guides</dt><dd>Ready · supplementary</dd><dt>Source tests</dt><dd>Ready · unscored</dd><dt>Official readings / keys</dt><dd>Pending</dd></dl></article><article class="source-card reference"><div class="reference-card-layout"><img class="book-cover" src="../../assets/nutrition-counseling-education-4e.png" alt="Nutrition Counseling and Education Skill Development, fourth edition, by Kathleen D. Bauer and Doreen Liou"><div><p class="eyebrow">Reference textbook · confirmed by Juliana</p><h3>Nutrition Counseling and Education Skill Development, 4e</h3><p><b>Kathleen D. Bauer and Doreen Liou.</b> The 14 verified chapter titles are retained as a separate reference index. Lesson 1’s current LMS instruction assigns a different e-book, so the hub keeps the two sources visibly distinct.</p><dl><dt>Role</dt><dd>Course reference textbook</dd><dt>Edition</dt><dd>Fourth edition</dd><dt>Chapter text</dt><dd>Not supplied yet</dd></dl></div></div></article></div></div></details>
      <details><summary><span>The study rhythm</span><small>The same six-part structure in every lesson</small></summary><div class="details-body"><div class="rhythm-grid">${[['01','Teachable moment','Substantial explanations that teach the knowledge—not thin summaries.'],['02','Memory supports','Flashcards, mnemonics and the concepts you must retrieve quickly.'],['03','Good to know','Nuance, outdated source language and current-practice context.'],['04','Nutritionist lens','How the material changes an assessment or client conversation.'],['05','Case application','A client situation that makes you choose, calculate or explain.'],['06','Practice + quiz','Original practice for each lesson, then every supplied source test.']].map(x=>`<article class="rhythm-card"><span>${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></div></details>
      <details><summary><span>Reference textbook index</span><small>Fourteen verified chapter titles—not the course sequence</small></summary><div class="details-body reference-body"><p>Bauer and Liou’s fourth edition contains 14 chapters. These chapters do not correspond one-to-one with the 17 course lessons, and the current Lesson 1 assigns <i>Nutrition Through the Life Cycle</i>.</p><div class="book-map">${BOOK_CHAPTERS.map((title,i)=>`<article class="chapter"><b>${String(i+1).padStart(2,'0')}</b><div><strong>${title}</strong><small>Verified public title · source content pending</small></div></article>`).join('')}</div><div class="source-links"><a href="https://www.cengage.ca/c/nutrition-counseling-and-education-skill-development-44-4th-edition-4e-bauer-liou/9780357367667/?filterBy=Higher-Education" target="_blank" rel="noopener">Cengage book record ↗</a><a href="https://books.google.com/books/about/Nutrition_Counseling_and_Education_Skill.html?id=DozKDwAAQBAJ" target="_blank" rel="noopener">Google Books record ↗</a></div></div></details>
    </div>
    ${footer()}
  </section>`;
}


function lessonContinuation(number){
  const previous=number>1?`<button class="secondary" type="button" data-stage="lesson-${number-1}">← Lesson ${number-1}</button>`:'';
  const next=number<17&&STUDY_GUIDES[`lesson-${number+1}`]?`<button class="primary" type="button" data-stage="lesson-${number+1}">Continue to Lesson ${number+1} →</button>`:'';
  return previous+next;
}

function renderStudyGuide(id){
  if(journeyData(id)&&state.learningMode!=='reference')return renderJourney(id);
  return renderReferenceGuide(id);
}
function renderReferenceGuide(id){
  const guide=STUDY_GUIDES[id];
  const stage=COURSE_STAGES.find(item=>item.id===id);
  const steps=studySteps(id);
  const index=guideStepIndex(id);
  const number=stage.number;
  const sourceType=stage.status==='supplementary'?'Supplementary study guide':'Lesson study guide';
  return `<section class="view lesson-view">
    <div class="lesson-hero"><button type="button" class="secondary" data-return-interactive>← Interactive learning path</button><p class="eyebrow">Lesson ${String(number).padStart(2,'0')} · ${sourceType}</p><h1>${guide.title}</h1><p class="lede">${guide.subtitle}</p><details class="source-note"><summary>Source boundary</summary><p>${guide.source}</p></details></div>
    <nav class="lesson-stepper" aria-label="Lesson ${number} sections">${steps.map((step,stepIndex)=>`<button type="button" data-lesson-step="${stepIndex}" class="${stepIndex===index?'active':''}" ${stepIndex===index?'aria-current="step"':''}><span>${stepIndex+1}</span>${compactStepLabel(step.label)}</button>`).join('')}</nav>
    <p class="step-status" data-step-status aria-live="polite">Step ${index+1} of ${steps.length} · ${compactStepLabel(steps[index].label)}</p>
    <div class="lesson-layout"><article class="lesson-copy study-prose" tabindex="-1" data-guide-id="${id}">
      ${guide.sections.map((section,sectionIndex)=>`<section class="lesson-section" id="${section.id}" data-guide-step="${section.id}"><p class="eyebrow">Study section ${sectionIndex+1} of ${guide.sections.length}</p><h2>${section.title}</h2>${section.html}</section>`).join('')}
      <section class="lesson-section" id="${id}-notes" data-guide-step="${id}-notes"><p class="eyebrow">Reflect and retrieve</p><h2>Your Lesson ${number} notes</h2><div class="notes-box"><p>Capture what you want to explain in your own words. Notes save only in this browser on this device.</p><textarea id="lesson-notes" data-notes-stage="${id}" aria-label="Your Lesson ${number} study notes" placeholder="What do I want to remember or revisit?">${esc(state.notesByLesson?.[id]||'')}</textarea><div class="notes-status" id="notes-status" aria-live="polite"></div></div><div class="hero-actions"><button class="secondary" type="button" data-go="overview">Course map</button>${lessonContinuation(number)}</div></section>
    </article></div>
    <footer class="lesson-pager" aria-label="Lesson section controls"><button class="secondary" type="button" data-lesson-prev ${index===0?'disabled':''}>← Previous</button><span data-step-counter>${index+1} / ${steps.length}</span><button class="primary" type="button" data-lesson-next ${index===steps.length-1?'disabled':''}>Next →</button></footer>
    ${footer()}
  </section>`;
}
function renderLesson(){return renderStudyGuide('lesson-1')}

function renderStage(){
  const stage=currentStage();
  if(STUDY_GUIDES[stage.id])return renderStudyGuide(stage.id);
  const sourceTest=sourceTestFor(stage.id);
  if(sourceTest)return `<section class="view planned-view"><div class="planned-hero"><p class="eyebrow">${stageLabel(stage)} · source test ready</p><h1>${stage.title}</h1><p class="lede">The original printer-version lesson test is loaded and mapped to this lesson. Its assigned reading and a complete lesson guide have not been supplied, so the hub preserves the questions without inventing chapter content or an official key.</p><span class="pending-pill ready-pill">${sourceTest.questions.length} source questions loaded</span></div><div class="pending-panel source-test-panel"><div><p class="eyebrow">Start with the supplied material</p><h2>Read the questions before the chapter.</h2><p>Work through the complete source set in the branded question runner, or open the original PDF to annotate and print. Your choices save on this device, but they are not scored because the archive did not include an answer key.</p><div class="hero-actions"><button class="primary" type="button" data-go="test">Open Lesson Test ${stage.number} →</button><a class="secondary" href="${esc(sourceTest.sourceFile)}" target="_blank" rel="noopener">Open original PDF ↗</a></div></div><div class="source-test-count" aria-label="Lesson Test ${stage.number} source summary"><strong>${sourceTest.questions.length}</strong><span>source questions</span><small>Exact order · no invented key</small></div></div><div class="pending-panel rhythm"><div><p class="eyebrow">What remains separate</p><h2>The test is source material—not the whole lesson.</h2><p>When the assigned reading, videos or study materials arrive, they can be added to the same step-by-step learning rhythm without replacing these questions.</p></div><div class="intake-grid">${['Official lesson instructions','Assigned reading or chapter','Videos and course resources','Study materials','Answer evidence or submitted results','Full Hōlus lesson guide'].map((item,i)=>`<div><b>${String(i+1).padStart(2,'0')}</b><span>${item}</span></div>`).join('')}</div></div><div class="hero-actions"><button class="secondary" type="button" data-go="overview">Return to course map</button></div>${footer()}</section>`;
  return `<section class="view planned-view"><div class="planned-hero"><p class="eyebrow">${stageLabel(stage)} · course map</p><h1>${stage.title}</h1><p class="lede">This official course title is mapped. Its source materials have not been loaded yet, so Hōlus is keeping the module structured without inventing objectives, explanations, questions or chapter mappings.</p><span class="pending-pill">Source materials not loaded yet</span></div><div class="pending-panel"><div><p class="eyebrow">Materials to add</p><h2>The intake slots are ready.</h2><p>When you provide this module, it will be organised into the same reliable study experience as Lesson 1.</p></div><div class="intake-grid">${['Official lesson instructions','Assigned reading or chapter','Videos and course resources','Study materials','Printer-version lesson test','Quiz or answer evidence'].map((item,i)=>`<div><b>${String(i+1).padStart(2,'0')}</b><span>${item}</span></div>`).join('')}</div></div><div class="pending-panel rhythm"><div><p class="eyebrow">Future Hōlus lesson rhythm</p><h2>Consistent by design.</h2></div><div class="intake-grid">${['Teachable moment','Most important concepts','Mnemonic and flashcards','Good to know','Nutritionist lens and case','Practice plus source test'].map((item,i)=>`<div><b>${String(i+1).padStart(2,'0')}</b><span>${item}</span></div>`).join('')}</div></div><div class="hero-actions"><button class="primary" type="button" data-go="overview">Return to course map</button><button class="secondary" type="button" data-stage="lesson-1">Open ready Lesson 1</button></div>${footer()}</section>`;
}

function renderPendingTool(tool){
  const stage=currentStage();
  const toolView=tool==='Flashcards'?'cards':tool==='Practice'?'practice':'test';
  const test=sourceTestFor(stage.id);
  if(test)return `<section class="view planned-view"><div class="planned-hero"><p class="eyebrow">${stageLabel(stage)} · ${tool}</p><h1>${stage.title}</h1><p class="lede">The supplied source test is ready even though this lesson tool is not.</p><span class="pending-pill ready-pill">Source test ready · supplementary tool unavailable</span></div><div class="hero-actions"><button class="primary" type="button" data-view-selected>Return to lesson</button><button class="secondary" type="button" data-go="test">Use supplied source test</button></div>${footer()}</section>`;
  return `<section class="view planned-view"><div class="planned-hero"><p class="eyebrow">${stageLabel(stage)} · ${tool}</p><h1>${stage.title}</h1><p class="lede">${tool==='Lesson test'?'The official assessment for this lesson has not been supplied. Use the separately labelled Practice tab to review study material; it is not the course test.':'Source materials for this tool are not available yet.'}</p><span class="pending-pill">${tool==='Lesson test'?'Official assessment unavailable':'Source materials unavailable'}</span></div><div class="hero-actions"><button class="primary" type="button" data-view-selected>Return to lesson</button><button class="secondary" type="button" data-stage-tool="${toolView}">Use Lesson 1 ${tool.toLowerCase()}</button></div>${footer()}</section>`;
}

function activeFlashcards(){
  if(currentStage().id==='lesson-1')return {items:FLASHCARDS,eyebrow:'Lesson 1 · Retrieval practice',title:'Flashcards',description:'Say the answer before you flip. A familiar-looking definition is not the same as recall.',countLabel:'core cards'};
  if(currentStage().id==='lesson-2'&&typeof LESSON2_TOOLS!=='undefined')return {items:LESSON2_TOOLS.flashcards,eyebrow:'Lesson 2 · Supplementary retrieval practice',title:'Preconception recall',description:'Based on the linked health guidance, not an official course answer key.',countLabel:'study cards'};
  const stage=currentStage(),data=typeof EXPANDED_LESSON_TOOLS!=='undefined'?EXPANDED_LESSON_TOOLS[stage.id]:null;
  if(data)return {items:data.flashcards,eyebrow:`${stageLabel(stage)} · Supplementary retrieval practice`,title:stage.title,description:'Original study cards based on the linked sources, not an official course answer key.',countLabel:'study cards'};
  return null;
}
function activePractice(){
  if(currentStage().id==='lesson-1')return {items:PRACTICE,eyebrow:'Lesson 1 · Original hōlus questions',title:'Practise explaining.',description:'Twelve formative prompts built from the lesson. Reveal the response only after you have reasoned it through.'};
  if(currentStage().id==='lesson-2'&&typeof LESSON2_TOOLS!=='undefined')return {items:LESSON2_TOOLS.practice,eyebrow:'Lesson 2 · Supplementary practice',title:'Apply the ideas.',description:'Learning prompts based on the sourced guide. The supplied Lesson Test 2 remains separate in the Test view.'};
  const stage=currentStage(),data=typeof EXPANDED_LESSON_TOOLS!=='undefined'?EXPANDED_LESSON_TOOLS[stage.id]:null;
  if(data)return {items:data.practice,eyebrow:`${stageLabel(stage)} · Supplementary practice`,title:'Apply the ideas.',description:'Original learning prompts, not official test questions or personalized care.'};
  return null;
}
function renderCards(){
  const deck=activeFlashcards();
  if(!deck)return renderPendingTool('Flashcards');
  const id=currentStage().id;
  const index=Math.max(0,Math.min(deck.items.length-1,Number(state.cardPositions?.[id])||0));
  state.cardPositions[id]=index;
  const card=deck.items[index];
  return `<section class="view"><div class="tool-hero"><div><p class="eyebrow">${deck.eyebrow}</p><h1>${deck.title}</h1><p>${deck.description}</p></div><div class="count-card"><strong>${deck.items.length}</strong><span>${deck.countLabel}</span></div></div><div class="study-runner"><p class="step-status">Card ${index+1} of ${deck.items.length}</p><button type="button" class="session-flashcard ${state.cardRevealed?'flipped':''}" data-card-flip aria-pressed="${state.cardRevealed?'true':'false'}"><span>${state.cardRevealed?'Study answer':'Retrieval prompt'}</span><strong>${esc(state.cardRevealed?card[1]:card[0])}</strong><small>${state.cardRevealed?'Tap to see the prompt':'Say the answer, then tap to reveal'}</small></button><footer class="lesson-pager"><button class="secondary" type="button" data-card-nav="prev" ${index===0?'disabled':''}>← Previous</button><button class="small-button" type="button" data-card-shuffle>Shuffle</button><button class="primary" type="button" data-card-nav="next" ${index===deck.items.length-1?'disabled':''}>Next →</button></footer></div>${footer()}</section>`;
}

function renderPractice(){
  const practice=activePractice();
  if(!practice)return renderPendingTool('Practice');
  const id=currentStage().id;
  const index=Math.max(0,Math.min(practice.items.length-1,Number(state.practicePositions?.[id])||0));
  state.practicePositions[id]=index;
  const [question,answer]=practice.items[index];
  return `<section class="view"><div class="tool-hero"><div><p class="eyebrow">${practice.eyebrow}</p><h1>${practice.title}</h1><p>${practice.description}</p></div><div class="count-card"><strong>${practice.items.length}</strong><span>practice prompts</span></div></div><article class="practice-runner"><div class="question-meta"><b>Practice prompt ${index+1}</b><span>${index+1} of ${practice.items.length}</span></div><h2>${esc(question)}</h2>${state.practiceRevealed?`<div class="practice-answer visible" tabindex="-1"><strong>Study response</strong><p>${esc(answer)}</p></div>`:`<button class="primary reveal-answer" type="button" data-practice-reveal>Reveal study response</button>`}<footer class="lesson-pager"><button class="secondary" type="button" data-practice-nav="prev" ${index===0?'disabled':''}>← Previous</button><span>${index+1} / ${practice.items.length}</span><button class="primary" type="button" data-practice-nav="next" ${index===practice.items.length-1?'disabled':''}>Next →</button></footer></article>${footer()}</section>`;
}

function testStats(){
  const values=Object.entries(state.answers||{});let correct=0;
  values.forEach(([n,a])=>{if(SOURCE_QUESTIONS[Number(n)]?.a===a)correct++});
  return {attempted:values.length,correct,missed:values.length-correct};
}
function sourceContext(index){
  if(index===4||index===5)return `<div class="passage"><strong>Use the following nutrition label to answer questions 5 and 6.</strong><div class="label-wrap">${LABEL_HTML}<div><p>This is the legacy label reproduced from the supplied PDF. Answer the source question in that historical context, then read the current-practice nuance in the feedback.</p></div></div></div>`;
  if(index>=15&&index<=17)return `<div class="passage"><strong>Use the following information to answer questions 16 through 18.</strong><p>${JILL_PASSAGE}</p></div>`;
  return '';
}
function renderQuestion(index){
  const item=SOURCE_QUESTIONS[index];const chosen=state.answers[index];const answered=Number.isInteger(chosen);const correct=answered&&chosen===item.a;
  return `<article class="question-card"><div class="question-meta"><b>Source question ${index+1}</b><span>${index+1} of ${SOURCE_QUESTIONS.length}</span></div>${sourceContext(index)}<h2>${item.q}</h2><div class="options" role="group" aria-label="Answer choices for source question ${index+1}">${item.o.map((option,i)=>{const classes=['answer-option'];if(answered&&i===item.a)classes.push('answer-key');if(answered&&i===chosen)classes.push('selected',correct?'correct':'wrong');return `<button type="button" class="${classes.join(' ')}" data-answer="${i}" ${answered?'disabled':''}><b>${String.fromCharCode(65+i)}.</b><span>${option}</span></button>`}).join('')}</div>${answered?`<div class="feedback ${correct?'':'wrong'}"><strong>${correct?'Correct · derived study key':'Review · derived study key'}</strong><p>${item.e}</p>${item.nuance?`<p class="nuance"><b>Important nuance:</b> ${item.nuance}</p>`:''}</div>`:'<p class="test-footer">Choose an answer to reveal the Hōlus explanation and any source-era caveat.</p>'}<div class="test-actions"><button type="button" data-test-nav="prev" ${index===0?'disabled':''}>← Previous</button><span>${index+1} / ${SOURCE_QUESTIONS.length}</span><button type="button" data-test-nav="next" ${index===SOURCE_QUESTIONS.length-1?'disabled':''}>Next →</button></div></article>`;
}
function sourceAnswersFor(id){
  if(!state.sourceAnswersByLesson[id])state.sourceAnswersByLesson[id]={};
  return state.sourceAnswersByLesson[id];
}
function renderSourceQuestion(test,id,index){
  const item=test.questions[index];
  const answers=sourceAnswersFor(id);
  const chosen=answers[index];
  const answered=Number.isInteger(chosen);
  const printedNumber=item.n||index+1;
  const printedNote=printedNumber===index+1?'':` · PDF labels this “Question ${printedNumber}”`;
  return `<article class="question-card"><div class="question-meta"><b>Source question ${index+1}${printedNote}</b><span>${index+1} of ${test.questions.length}</span></div><h2>${esc(item.q)}</h2><div class="options" role="group" aria-label="Answer choices for source question ${index+1}">${item.o.map((option,i)=>`<button type="button" class="answer-option ${chosen===i?'selected unscored':''}" data-source-answer="${i}" aria-pressed="${chosen===i?'true':'false'}"><b>${String.fromCharCode(65+i)}.</b><span>${esc(option)}</span></button>`).join('')}</div>${answered?'<div class="feedback unscored"><strong>Your choice is saved—not scored.</strong><p>The printer PDF did not include an official answer key. Keep your response for review, then compare it with submitted LMS evidence if you add that later.</p></div>':'<p class="test-footer">Choose a response to save your thinking. No answer is marked because no official key was supplied.</p>'}<div class="test-actions"><button type="button" data-source-test-nav="prev" ${index===0?'disabled':''}>← Previous</button><span>${index+1} / ${test.questions.length}</span><button type="button" data-source-test-nav="next" ${index===test.questions.length-1?'disabled':''}>Next →</button></div></article>`;
}
function renderSourceTest(stage,test){
  const id=stage.id;
  const answers=sourceAnswersFor(id);
  const current=Math.max(0,Math.min(test.questions.length-1,Number(state.sourceCurrentByLesson[id])||0));
  state.sourceCurrentByLesson[id]=current;
  const attempted=Object.values(answers).filter(Number.isInteger).length;
  return `<section class="view"><div class="tool-hero"><div><p class="eyebrow">Exact submitted source · Lesson Test ${stage.number}</p><h1>Lesson test</h1><p>All ${test.questions.length} questions and answer choices are preserved in their original order from the printer-version PDF you supplied.</p><div class="source-test-actions"><a class="secondary" href="${esc(test.sourceFile)}" target="_blank" rel="noopener">Open original PDF ↗</a></div></div><div class="count-card"><strong>${test.questions.length}</strong><span>source questions</span></div></div><div class="test-intro"><div class="test-note source-loaded"><h3>Practice without a fabricated key.</h3><p>The archive contains the questions, not an official answer key or submitted result. You can save your choices and move through the full set; the hub will not label an answer correct until reliable answer evidence is supplied.</p></div><div class="score-panel"><div><strong>${test.questions.length}</strong><span>total</span></div><div><strong>${attempted}</strong><span>answered</span></div><div><strong>${test.questions.length-attempted}</strong><span>remaining</span></div><button class="small-button" type="button" data-reset-source-test style="grid-column:1/-1">Reset saved choices</button></div></div><nav class="question-map" aria-label="Lesson Test ${stage.number} question map">${test.questions.map((q,i)=>{const answered=Number.isInteger(answers[i]);const cls=[i===current?'current':'',answered?'attempted':''].filter(Boolean).join(' ');return `<button type="button" class="${cls}" data-source-question="${i}" aria-label="Question ${i+1}${answered?', response saved':''}">${i+1}</button>`}).join('')}</nav><div id="question-slot">${renderSourceQuestion(test,id,current)}</div><p class="test-footer">Source: “${esc(test.label)}” from your uploaded Nutritional Counselling course ZIP. The original PDF remains available above; no official key was included.</p>${footer()}</section>`;
}
function renderTest(){
  const stage=currentStage();
  const sourceTest=sourceTestFor(stage.id);
  if(sourceTest)return renderSourceTest(stage,sourceTest);
  if(stage.id!=='lesson-1')return renderPendingTool('Lesson test');
  const stats=testStats();const current=Math.max(0,Math.min(SOURCE_QUESTIONS.length-1,state.current||0));state.current=current;
  return `<section class="view"><div class="tool-hero"><div><p class="eyebrow">Exact submitted source · Lesson Test 1</p><h1>Lesson test</h1><p>All 25 questions and answer choices are preserved from the PDF you supplied.</p></div><div class="count-card"><strong>25</strong><span>source questions</span></div></div><div class="test-intro"><div class="test-note"><h3>Know what is—and is not—official.</h3><p>The supplied PDF contains no answer key or submitted results. The marked answers here are a <b>Hōlus-derived study key</b>. Source-era or ambiguous questions include a current-practice note instead of hiding the problem.</p></div><div class="score-panel"><div><strong>${stats.attempted}</strong><span>attempted</span></div><div><strong>${stats.correct}</strong><span>correct</span></div><div><strong>${stats.missed}</strong><span>review</span></div><button class="small-button" type="button" data-reset-test style="grid-column:1/-1">Reset test progress</button></div></div><nav class="question-map" aria-label="Lesson Test 1 question map">${SOURCE_QUESTIONS.map((q,i)=>{const a=state.answers[i];const cls=[i===current?'current':'',Number.isInteger(a)?(a===q.a?'correct':'wrong'):''].filter(Boolean).join(' ');return `<button type="button" class="${cls}" data-question="${i}" aria-label="Question ${i+1}${Number.isInteger(a)?a===q.a?', correct':', review':''}">${i+1}</button>`}).join('')}</nav><div id="question-slot">${renderQuestion(current)}</div><p class="test-footer">Source: “NC7 Lesson Test 1” from your uploaded Nutritional Counselling course ZIP. Question wording is preserved; explanations and marked answers are Hōlus study aids.</p>${footer()}</section>`;
}

const renderers={overview:renderOverview,lesson:renderStage,module:renderStage,cards:renderCards,practice:renderPractice,test:renderTest};
function chooseStage(id){
  if(!COURSE_STAGES.some(stage=>stage.id===id))return;
  state.selectedStage=id;
  state.learningMode='interactive';
  state.cardRevealed=false;
  state.practiceRevealed=false;
  saveState();
  lessonSelect.value=id;
  setView('lesson');
}
function syncLessonPager({focus=false}={}){
  const id=currentStage().id;
  if(activeView!=='lesson'||!STUDY_GUIDES[id]||app.querySelector('.journey-view'))return;
  const steps=studySteps(id);
  const index=guideStepIndex(id);
  const sections=[...app.querySelectorAll('.lesson-copy > .lesson-section')];
  sections.forEach((section,sectionIndex)=>{const selected=sectionIndex===index;section.hidden=!selected;section.classList.toggle('active',selected)});
  app.querySelectorAll('[data-lesson-step]').forEach((button,buttonIndex)=>{const selected=buttonIndex===index;button.classList.toggle('active',selected);if(selected)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current')});
  const status=app.querySelector('[data-step-status]');if(status)status.textContent=`Step ${index+1} of ${steps.length} · ${compactStepLabel(steps[index].label)}`;
  const counter=app.querySelector('[data-step-counter]');if(counter)counter.textContent=`${index+1} / ${steps.length}`;
  const previous=app.querySelector('[data-lesson-prev]');const next=app.querySelector('[data-lesson-next]');if(previous)previous.disabled=index===0;if(next)next.disabled=index===steps.length-1;
  app.querySelector('[data-lesson-step].active')?.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  if(focus)app.querySelector('.lesson-copy')?.focus({preventScroll:true});
}
function setLessonStep(nextIndex){
  const id=currentStage().id;
  const steps=studySteps(id);
  if(!steps.length)return;
  state.lessonSteps[id]=Math.max(0,Math.min(steps.length-1,nextIndex));
  saveState();
  syncLessonPager({focus:true});
  history.replaceState(null,'',`#${id}/${steps[state.lessonSteps[id]].id}`);
  app.querySelector('.lesson-stepper')?.scrollIntoView({behavior:'smooth',block:'start'});
}
function routeFromHash(){
  const raw=location.hash.slice(1);
  const [stageId,sectionId]=raw.split('/');
  if(STUDY_GUIDES[stageId]&&sectionId==='learn'){state.learningMode='interactive';state.selectedStage=stageId;lessonSelect.value=stageId;saveState();return 'lesson'}
  if(STUDY_GUIDES[stageId]&&sectionId){
    state.learningMode='reference';
    const steps=studySteps(stageId);const index=steps.findIndex(step=>step.id===sectionId);
    state.selectedStage=stageId;state.lessonSteps[stageId]=index>=0?index:0;lessonSelect.value=stageId;saveState();return 'lesson';
  }
  const legacyGuideId=Object.keys(STUDY_GUIDES).find(id=>studySteps(id).some(step=>step.id===raw));
  if(legacyGuideId){state.learningMode='reference';const steps=studySteps(legacyGuideId);state.selectedStage=legacyGuideId;state.lessonSteps[legacyGuideId]=steps.findIndex(step=>step.id===raw);lessonSelect.value=legacyGuideId;saveState();return 'lesson'}
  if(COURSE_STAGES.some(stage=>stage.id===raw)){state.learningMode='interactive';state.selectedStage=raw;lessonSelect.value=raw;saveState();return 'lesson'}
  if(raw==='lesson'||raw==='module')return 'lesson';
  return renderers[raw]?raw:'overview';
}
function currentViewHash(){
  if(activeView!=='lesson')return `#${activeView}`;
  const id=currentStage().id;const steps=studySteps(id);
  if(journeyData(id)&&state.learningMode!=='reference')return `#${id}/learn`;
  return steps.length?`#${id}/${steps[guideStepIndex(id)].id}`:`#${id}`;
}
function setView(view,{updateHash=true}={}){
  activeView=view==='module'?'lesson':renderers[view]?view:'overview';
  app.innerHTML=renderers[activeView]();
  document.querySelectorAll('[data-view]').forEach(button=>button.classList.toggle('active',button.dataset.view===activeView));
  lessonSelect.value=state.selectedStage;
  syncCourseStatus();
  if(updateHash)history.replaceState(null,'',currentViewHash());
  bindView();
  app.focus({preventScroll:true});
  window.scrollTo({top:0,behavior:'smooth'});
}
function rerenderActive(focusSelector){
  app.innerHTML=renderers[activeView]();
  bindView();
  const focusTarget=app.querySelector(focusSelector);
  if(focusTarget){if(!focusTarget.matches('a,button,input,select,textarea,[tabindex]'))focusTarget.setAttribute('tabindex','-1');focusTarget.focus({preventScroll:true})}
}
function bindView(){
  bindJourney();
  app.querySelector('[data-return-interactive]')?.addEventListener('click',()=>{state.learningMode='interactive';saveState();setView('lesson')});
  app.querySelectorAll('[data-go]').forEach(button=>button.addEventListener('click',()=>setView(button.dataset.go)));
  app.querySelectorAll('[data-stage]').forEach(button=>button.addEventListener('click',()=>chooseStage(button.dataset.stage)));
  app.querySelectorAll('[data-stage-tool]').forEach(button=>button.addEventListener('click',()=>{state.selectedStage='lesson-1';state.cardRevealed=false;state.practiceRevealed=false;saveState();lessonSelect.value='lesson-1';setView(button.dataset.stageTool)}));
  app.querySelectorAll('[data-view-selected]').forEach(button=>button.addEventListener('click',()=>setView('lesson')));
  app.querySelectorAll('[data-lesson-step]').forEach(button=>button.addEventListener('click',()=>setLessonStep(Number(button.dataset.lessonStep))));
  app.querySelector('[data-lesson-prev]')?.addEventListener('click',()=>setLessonStep(guideStepIndex(currentStage().id)-1));
  app.querySelector('[data-lesson-next]')?.addEventListener('click',()=>setLessonStep(guideStepIndex(currentStage().id)+1));
  app.querySelector('[data-card-flip]')?.addEventListener('click',()=>{state.cardRevealed=!state.cardRevealed;saveState();rerenderActive('[data-card-flip]')});
  app.querySelectorAll('[data-card-nav]').forEach(button=>button.addEventListener('click',()=>{const deck=activeFlashcards();const id=currentStage().id;const delta=button.dataset.cardNav==='next'?1:-1;state.cardPositions[id]=Math.max(0,Math.min(deck.items.length-1,(state.cardPositions[id]||0)+delta));state.cardRevealed=false;saveState();rerenderActive('[data-card-flip]')}));
  app.querySelector('[data-card-shuffle]')?.addEventListener('click',()=>{const deck=activeFlashcards();const id=currentStage().id;if(!deck||deck.items.length<2)return;let next=state.cardPositions[id]||0;while(next===(state.cardPositions[id]||0))next=Math.floor(Math.random()*deck.items.length);state.cardPositions[id]=next;state.cardRevealed=false;saveState();rerenderActive('[data-card-flip]')});
  app.querySelector('[data-practice-reveal]')?.addEventListener('click',()=>{state.practiceRevealed=true;saveState();rerenderActive('.practice-answer')});
  app.querySelectorAll('[data-practice-nav]').forEach(button=>button.addEventListener('click',()=>{const practice=activePractice();const id=currentStage().id;const delta=button.dataset.practiceNav==='next'?1:-1;state.practicePositions[id]=Math.max(0,Math.min(practice.items.length-1,(state.practicePositions[id]||0)+delta));state.practiceRevealed=false;saveState();rerenderActive('.practice-runner')}));
  const notes=document.getElementById('lesson-notes');
  if(notes){let timer;notes.addEventListener('input',()=>{state.notesByLesson[notes.dataset.notesStage]=notes.value;saveState();const status=document.getElementById('notes-status');status.textContent='Saved in this browser';clearTimeout(timer);timer=setTimeout(()=>status.textContent='',1600)})}
  app.querySelectorAll('[data-question]').forEach(button=>button.addEventListener('click',()=>{state.current=Number(button.dataset.question);saveState();rerenderActive('.question-card')}));
  app.querySelectorAll('[data-answer]').forEach(button=>button.addEventListener('click',()=>{const index=state.current||0;if(Number.isInteger(state.answers[index]))return;state.answers[index]=Number(button.dataset.answer);saveState();rerenderActive('.question-card')}));
  app.querySelectorAll('[data-test-nav]').forEach(button=>button.addEventListener('click',()=>{const delta=button.dataset.testNav==='next'?1:-1;state.current=Math.max(0,Math.min(SOURCE_QUESTIONS.length-1,(state.current||0)+delta));saveState();rerenderActive('.question-card')}));
  const reset=app.querySelector('[data-reset-test]');if(reset)reset.addEventListener('click',()=>{if(confirm('Reset your Lesson Test 1 answers on this device?')){state.answers={};state.current=0;saveState();rerenderActive('.question-card')}});
  app.querySelectorAll('[data-source-question]').forEach(button=>button.addEventListener('click',()=>{const id=currentStage().id;state.sourceCurrentByLesson[id]=Number(button.dataset.sourceQuestion);saveState();rerenderActive('.question-card')}));
  app.querySelectorAll('[data-source-answer]').forEach(button=>button.addEventListener('click',()=>{const id=currentStage().id;const index=Number(state.sourceCurrentByLesson[id])||0;sourceAnswersFor(id)[index]=Number(button.dataset.sourceAnswer);saveState();rerenderActive('.question-card')}));
  app.querySelectorAll('[data-source-test-nav]').forEach(button=>button.addEventListener('click',()=>{const id=currentStage().id;const test=sourceTestFor(id);if(!test)return;const delta=button.dataset.sourceTestNav==='next'?1:-1;state.sourceCurrentByLesson[id]=Math.max(0,Math.min(test.questions.length-1,(Number(state.sourceCurrentByLesson[id])||0)+delta));saveState();rerenderActive('.question-card')}));
  const resetSource=app.querySelector('[data-reset-source-test]');if(resetSource)resetSource.addEventListener('click',()=>{const stage=currentStage();if(confirm(`Reset your saved Lesson Test ${stage.number} choices on this device?`)){state.sourceAnswersByLesson[stage.id]={};state.sourceCurrentByLesson[stage.id]=0;saveState();rerenderActive('.question-card')}});
  syncLessonPager();
}

document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{if(button.dataset.view==='lesson'){state.learningMode='interactive';saveState()}setView(button.dataset.view)}));
lessonSelect.value=state.selectedStage;
lessonSelect.addEventListener('change',()=>chooseStage(lessonSelect.value));
window.addEventListener('hashchange',()=>setView(routeFromHash(),{updateHash:false}));
setView(routeFromHash(),{updateHash:false});
