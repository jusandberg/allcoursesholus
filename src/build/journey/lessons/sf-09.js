const {P,C,rbc,o2}=require('../lens.js');
const FE='#9a4a3a';
const fe=(x,y,w=11,o)=>P(x,y,w,w,Object.assign({r:'3px',bg:FE,border:'2px solid #fff'},o||{}));
module.exports={
  id:'sf-9',after:8,
  title:'Iron and oxygen transport in an athlete',
  token:'#9a4a3a',
  stops:[
    {short:'Absorbed',place:'Small intestine',view:'gut',organs:['intestine','stomach'],label:[322,400,'start'],form:'single',
     title:'Iron comes in through the gut.',
     body:'Iron from food is absorbed in the intestine. Several factors in a meal affect how much gets through.',
     lensCaption:'Iron crossing the gut wall',scene:'villi',path:[[290,314],[262,374],[284,390],[270,404]],
     lens:[fe(20,24),fe(44,20),fe(68,26),fe(84,22,11,{o:.4})]},
    {short:'Haemoglobin',place:'Red blood cells',view:'chest',organs:['heart','vessels','marrow'],label:[296,226,'start'],form:'single',
     title:'Haemoglobin carries oxygen in the blood.',
     body:'Iron is part of haemoglobin, which carries oxygen in the blood.',
     lensCaption:'Red blood cells, each carrying iron and oxygen',scene:'blood',path:[[270,404],[240,330],[262,226]],
     lens:[rbc(20,44),rbc(44,56),rbc(68,44),rbc(88,56),fe(20,44,8),fe(44,56,8),fe(68,44,8),o2(32,30,10),o2(58,72,10)]},
    {short:'Myoglobin',place:'Muscle',view:'body',organs:['tissues'],label:[92,300,'end'],form:'single',
     title:'Myoglobin holds oxygen in muscle.',
     body:'Iron is also part of myoglobin, which stores and transfers oxygen inside muscle.',
     lensCaption:'Myoglobin (dark red) passing oxygen along in a muscle fibre',scene:'muscle',path:[[262,226],[180,244],[140,290],[126,340]],
     lens:[P(30,50,16,16,{bg:'#8a3a34'}),P(56,46,16,16,{bg:'#8a3a34'}),P(80,54,16,16,{bg:'#8a3a34'}),o2(42,38,10),o2(68,62,10)]},
    {short:'Ferritin',place:'Stores',view:'gut',organs:['liver'],label:[174,278,'end'],form:'single',
     title:'Ferritin reflects the iron store.',
     body:'Ferritin reflects how much iron is stored. Iron-deficiency anaemia lowers haemoglobin and impairs oxygen transport, aerobic capacity and endurance.',
     analogy:'Risk is higher with menstruation, endurance running, low energy intake, unplanned vegetarian diets, gut losses and frequent blood donation.',
     lensCaption:'Iron packed into ferritin',scene:'none',path:[[126,340],[180,280],[228,292]],
     lens:[P(46,50,64,64,{bg:'transparent',border:'4px solid '+C.gold}),...[[40,42],[52,42],[46,52],[34,52],[58,52],[40,62],[52,62]].map(([x,y])=>fe(x,y,10))]}
  ],
  sources:[{label:'Your course: Sports & Fitness Nutrition, Lesson 9: Minerals (Nutrition for Sport and Exercise, 4th ed.)'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 18: Blood',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified picture. Where ferritin is stored is shown at the liver for simplicity.'
};
