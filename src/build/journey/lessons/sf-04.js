const {P,C}=require('../lens.js');
const g=(x,y,o)=>P(x,y,14,14,Object.assign({bg:C.blue},o||{}));
const chain=(x,y,n)=>Array.from({length:n},(_,k)=>g(x+k*9,y+(k%2?3:-3)));
const GUT=[[262,374],[284,390],[270,404],[236,404],[214,414],[228,428],[252,428]];
const pack=(cx,cy)=>[[0,0],[10,0],[5,8],[-5,8],[15,8],[0,16],[10,16]].map(([dx,dy])=>g(cx+dx,cy+dy,{w:12,h:12}));
module.exports={
  id:'sf-4',after:7,
  title:'From carbohydrate to muscle glycogen',
  token:'#6f91a2',
  stops:[
    {short:'Mouth',place:'Mouth',view:'head',organs:['mouth','salivary'],label:[284,124,'start'],form:'chain',
     title:'Salivary amylase starts on starch.',
     body:'Carbohydrate digestion begins in the mouth with salivary amylase.',
     lensCaption:'Starch chains',scene:'none',path:[[250,122]],lens:[...chain(16,34,5),...chain(40,64,5)]},
    {short:'Stomach',place:'Stomach',view:'gut',organs:['stomach','esophagus'],label:[334,318,'start'],form:'chain',
     title:'Digestion pauses in the acidic stomach.',
     body:'Stomach acid pauses carbohydrate digestion.',
     lensCaption:'Starch waiting in the stomach',scene:'swirl',path:[[250,140],[251,230],[257,265],[272,292],[290,314]],lens:[...chain(22,36,5),...chain(40,64,4)]},
    {short:'Small intestine',place:'Small intestine',view:'gut',organs:['intestine','pancreas'],label:[322,420,'start'],form:'single',
     title:'Pancreatic amylase and brush-border enzymes.',
     body:'Digestion continues with pancreatic amylase and brush-border enzymes. Glucose and galactose cross the gut wall by sodium-dependent transport; fructose uses a different transporter.',
     lensCaption:'Single sugars crossing the brush border',scene:'villi',path:[[290,314],[262,338],[246,366],...GUT],
     lens:[g(18,22),g(38,18),P(58,24,14,14,{bg:'#d8b86a'}),g(80,20),g(28,40),P(50,42,14,14,{bg:'#e6a8b8'}),g(72,40),P(44,60,10,10,{bg:'#f0f0f0',border:'2px solid #b9cbd4'})]},
    {short:'Liver',place:'Portal blood to liver',view:'gut',organs:['liver'],label:[174,278,'end'],form:'single',
     title:'The liver stores glycogen for blood glucose.',
     body:'Monosaccharides enter portal blood and go to the liver. The liver stores glycogen to help maintain blood glucose. Glucagon supports blood glucose between meals and during exercise.',
     lensCaption:'Glucose packed into liver glycogen',scene:'blood',path:[[252,428],[238,380],[234,320],[228,292]],lens:[g(16,46),g(30,54),...pack(60,36)]},
    {short:'Insulin',place:'Pancreas',view:'gut',organs:['pancreas'],label:[322,364,'start'],form:'single',
     title:'Insulin after eating.',
     body:'After eating, insulin from the pancreas promotes glucose uptake and storage.',
     lensCaption:'Insulin (gold) with glucose in the blood',scene:'blood',path:[[228,292],[250,340],[282,356]],
     lens:[g(16,44),g(32,56),g(48,44),g(64,56),g(80,44),P(24,64,22,9,{r:'999px',bg:C.gold}),P(56,34,22,9,{r:'999px',bg:C.gold})]},
    {short:'Muscle',place:'Skeletal muscle',view:'body',organs:['tissues'],label:[92,300,'end'],form:'single',
     title:'Muscle keeps its glycogen for itself.',
     body:'Skeletal muscle stores glycogen for its own contractions, because muscle can’t release free glucose into the blood. Stores are limited, and depletion contributes to fatigue in long or repeated hard exercise.',
     lensCaption:'Muscle glycogen being used',scene:'muscle',path:[[282,356],[256,280],[180,244],[140,290],[126,340]],lens:[...pack(26,34),P(70,50,20,12,{r:'4px',bg:C.gold,border:'2px solid #fff'}),P(80,66,20,12,{r:'4px',bg:C.gold,border:'2px solid #fff'})]}
  ],
  sources:[{label:'Your course: Sports & Fitness Nutrition, Lesson 4: Carbohydrates (Nutrition for Sport and Exercise, 4th ed.)'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 24: Metabolism and Nutrition',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified pathway for a typical healthy adult.'
};
