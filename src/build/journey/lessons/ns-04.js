const {P,C,rbc,o2,bit}=require('../lens.js');
const FE='#9a4a3a';
const fe=(x,y,w=12,o)=>P(x,y,w,w,Object.assign({r:'3px',bg:FE,border:'2px solid #fff'},o||{}));
const GUT=[[262,374],[284,390],[270,404],[236,404]];
module.exports={
  id:'ns-4',after:7,
  title:'Follow iron from food to oxygen delivery',
  token:'#9a4a3a',
  stops:[
    {short:'Food',place:'Mouth',view:'head',organs:['mouth'],label:[284,124,'start'],form:'single',
     title:'Iron starts out bound up in food.',
     body:'Minerals aren’t simply eaten and absorbed 100%. First, food has to be digested so the mineral is released.',
     lensCaption:'Iron (red squares) held in food',scene:'none',path:[[250,122]],
     lens:[bit(32,36,40,'#5f7a3a'),bit(68,62,36,'#9a5d50'),fe(32,36),fe(68,62),fe(40,44,9),fe(62,54,9)]},
    {short:'Released',place:'Stomach',view:'gut',organs:['stomach','esophagus'],label:[334,318,'start'],form:'single',
     title:'Digestion releases the iron.',
     body:'As food is broken down in the stomach, the iron is released from it.',
     lensCaption:'Iron freed from the food',scene:'swirl',path:[[250,140],[251,230],[257,265],[272,292],[290,314]],
     lens:[bit(40,46,26,'#5f7a3a'),fe(24,26),fe(52,22),fe(76,34),fe(28,66),fe(62,70)]},
    {short:'Absorbed',place:'Small intestine',view:'gut',organs:['intestine'],label:[322,400,'start'],form:'single',
     title:'Only some is absorbed.',
     body:'Absorption depends on food form, nutrient status, gut function, other minerals and dose. Vitamin C improves absorption of non-heme iron. Coffee, calcium, antacids and low copper can reduce it.',
     lensCaption:'Vitamin C (orange) helping iron across',scene:'villi',path:[[262,338],...GUT],
     lens:[fe(20,24),fe(44,20),fe(68,26),P(30,40,12,12,{bg:'#e8a04a'}),P(58,40,12,12,{bg:'#e8a04a'}),fe(84,22,12,{o:.4})]},
    {short:'Haemoglobin',place:'Red blood cells',view:'chest',organs:['heart','vessels','marrow'],label:[296,226,'start'],form:'single',
     title:'Iron goes into haemoglobin.',
     body:'From the blood, iron is used or stored. A key use is haemoglobin, which carries oxygen in red blood cells.',
     lensCaption:'Red blood cells, each carrying iron',scene:'blood',path:[[236,404],[240,330],[262,226]],
     lens:[rbc(20,44),rbc(44,56),rbc(68,44),rbc(88,56),fe(20,44,8),fe(44,56,8),fe(68,44,8)]},
    {short:'Tissues',place:'Muscles and tissues',view:'body',organs:['tissues'],label:[92,300,'end'],form:'single',
     title:'Oxygen is delivered to the tissues.',
     body:'Red blood cells deliver oxygen to tissues. Too little iron and too much can both cause problems: the goal is adequacy.',
     analogy:'Iron deficiency isn’t the only cause of anaemia.',
     lensCaption:'Oxygen (blue) passing into a muscle cell',scene:'muscle',path:[[262,226],[180,244],[140,290],[126,340]],
     lens:[rbc(22,40),o2(46,46),o2(60,56),o2(74,44)]}
  ],
  sources:[{label:'Your course: Nutrition: Studies and Applications, Unit 4: Minerals'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 18: Blood',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified pathway. Iron storage and recycling are not shown.'
};
