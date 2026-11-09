const {P,C}=require('../lens.js');
const drop=(x,y,w=13,o)=>P(x,y,w,w,Object.assign({r:'50% 50% 50% 0',bg:'#9fbccb'},o||{}));
const na=(x,y)=>P(x,y,10,10,{r:'2px',bg:C.gold});
const k=(x,y)=>P(x,y,10,10,{r:'2px',bg:'#9c8aa2'});
module.exports={
  id:'sf-7',after:4,
  title:'Water in, heat out: hydration during exercise',
  token:'#6f91a2',
  stops:[
    {short:'Intake',place:'Mouth',view:'head',organs:['mouth'],label:[284,124,'start'],form:'single',
     title:'Water comes in from drinks, food and metabolism.',
     body:'Water makes up a large and variable part of body mass. It comes from beverages, food and metabolic water.',
     lensCaption:'Water on its way in',scene:'none',path:[[250,122]],
     lens:[[22,30],[46,22],[72,30],[30,54],[56,50],[80,58],[44,78]].map(([x,y])=>drop(x,y))},
    {short:'Compartments',place:'Blood and cells',view:'torso',organs:['vessels','tissues','heart'],label:[92,300,'end'],form:'single',
     title:'Inside and outside the cells.',
     body:'Intracellular fluid is inside cells; extracellular fluid includes plasma and interstitial fluid. Potassium is the main cation inside cells and sodium the main one outside.',
     lensCaption:'Sodium (gold) outside, potassium (purple) inside',scene:'muscle',path:[[250,140],[262,226],[180,244],[140,290],[126,340]],
     lens:[P(66,50,80,80,{r:'50%',bg:'#e6ede4',border:'3px solid #b2c2ad'}),k(60,44),k(72,56),k(66,40),na(16,30),na(24,70),na(36,50),drop(30,30),drop(18,54)]},
    {short:'Heat',place:'Working muscles',view:'body',organs:['tissues'],label:[92,300,'end'],form:'single',
     title:'Exercise produces heat.',
     body:'Working muscles produce heat that has to leave the body.',
     lensCaption:'Muscle at work, warming up',scene:'muscle',path:[[126,340]],
     lens:[P(50,50,130,60,{r:'40px',bg:'#8fa48a'}),P(30,30,12,12,{bg:'#e8a04a'}),P(56,24,12,12,{bg:'#e8a04a'}),P(78,32,12,12,{bg:'#e8a04a'})]},
    {short:'Sweat',place:'Skin',view:'body',organs:['skin','vessels'],label:[124,176,'start'],form:'single',
     title:'Evaporation does the cooling.',
     body:'Skin blood flow and sweat evaporation move heat to the environment. Evaporation, not sweat dripping off, provides the cooling. High humidity reduces evaporation even when sweating is heavy.',
     lensCaption:'Sweat evaporating from the skin',scene:'skin',path:[[126,340],[118,262],[112,220]],
     lens:[drop(30,24),drop(50,18,11,{o:.6}),drop(70,26,10,{o:.35}),na(40,40),drop(60,40)]},
    {short:'Dehydration',place:'Heart and blood',view:'chest',organs:['heart','vessels'],label:[296,226,'start'],form:'single',
     title:'A fluid deficit strains the heart.',
     body:'Dehydration reduces plasma volume, increases cardiovascular strain, impairs heat loss and raises perceived effort, especially in endurance activity in the heat.',
     analogy:'Severe heat illness needs urgent medical action.',
     lensCaption:'Less plasma around the red blood cells',scene:'blood',path:[[112,220],[180,226],[262,226]],
     lens:[P(20,46,30,18,{bg:'#c8524a',border:'3px solid #e88a80'}),P(44,56,30,18,{bg:'#c8524a',border:'3px solid #e88a80'}),P(68,46,30,18,{bg:'#c8524a',border:'3px solid #e88a80'}),drop(86,58,11,{o:.5})]},
    {short:'Kidneys',place:'Kidneys',view:'torso',organs:['kidneys','bladder','pituitary','adrenals'],label:[334,346,'start'],form:'single',
     title:'Thirst, hormones and the kidneys keep the balance.',
     body:'Osmolality and blood volume influence thirst and hormones such as antidiuretic hormone and aldosterone. The kidneys adjust water and sodium excretion. Water also leaves through sweat, breathing and feces.',
     analogy:'A single urine sample or thirst rating can’t describe every part of hydration.',
     lensCaption:'Kidneys deciding how much water and sodium to keep',scene:'blood',path:[[262,226],[200,320],[190,352],[218,440],[250,512]],
     lens:[drop(18,44),drop(34,56),drop(50,44),na(66,56),na(80,44),drop(84,64,11,{o:.5})]}
  ],
  sources:[{label:'Your course: Sports & Fitness Nutrition, Lesson 7: Water and Electrolytes (Nutrition for Sport and Exercise, 4th ed.)'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 26: Fluid, Electrolyte, and Acid-Base Balance',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified picture of a healthy adult exercising. Fluid needs vary a lot from person to person.'
};
