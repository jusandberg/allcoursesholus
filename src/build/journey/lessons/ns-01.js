const {P,C,bit}=require('../lens.js');
const G=C.blue,F='#d0a76a';
const g=(x,y,o)=>P(x,y,14,14,Object.assign({bg:G},o||{}));
const chain=(x,y,n)=>Array.from({length:n},(_,k)=>g(x+k*9,y+(k%2?3:-3)));
const GUT=[[262,374],[284,390],[270,404],[236,404],[214,414],[228,428],[252,428]];
module.exports={
  id:'ns-1',after:14,
  title:'From carbohydrate to cell energy',
  token:'#6f91a2',
  stops:[
    {short:'Mouth',place:'Mouth',view:'head',organs:['mouth','salivary'],label:[284,124,'start'],form:'chain',
     title:'Salivary amylase starts on starch.',
     body:'Digestion uses enzymes. In the mouth, salivary amylase starts breaking starch into smaller pieces.',
     lensCaption:'Long starch chains',scene:'none',path:[[250,122]],
     lens:[...chain(16,34,5),...chain(40,64,5)]},
    {short:'Stomach',place:'Stomach',view:'gut',organs:['stomach','esophagus'],label:[334,318,'start'],form:'chain',
     title:'The stomach isn’t the main site.',
     body:'Carbohydrate passes through the stomach, but this isn’t where most carbohydrate digestion happens.',
     lensCaption:'Starch chains moving through',scene:'swirl',path:[[250,140],[251,230],[257,265],[272,292],[290,314]],
     lens:[...chain(22,36,5),...chain(40,64,4)]},
    {short:'Small intestine',place:'Small intestine',view:'gut',organs:['intestine','pancreas'],label:[322,420,'start'],form:'short',
     title:'Enzymes finish the job.',
     body:'Pancreatic and intestinal enzymes break complex carbohydrates down to disaccharides, then monosaccharides. Each sugar has its own enzyme: lactose and lactase, sucrose and sucrase, maltose and maltase.',
     analogy:'Sucrose + sucrase → glucose + fructose.',
     lensCaption:'Disaccharides split into single sugars',scene:'villi',path:[[290,314],[262,338],[246,366],...GUT],
     lens:[g(18,30),g(28,30),g(46,24),P(56,24,14,14,{bg:'#d8b86a'}),g(74,32),g(84,32),g(26,56),g(52,58),g(78,60)]},
    {short:'Absorbed',place:'Into the blood',view:'gut',organs:['intestine'],label:[322,450,'start'],form:'single',
     title:'Monosaccharides are absorbed.',
     body:'Monosaccharides are the true end products. They’re absorbed through the intestinal wall into the blood and travel on for processing.',
     lensCaption:'Single sugars crossing the gut wall',scene:'villi',path:[[252,428],[270,440]],
     lens:[[18,22],[38,18],[58,24],[80,20],[28,40],[50,42],[72,40],[44,60]].map(([x,y])=>g(x,y))},
    {short:'Liver',place:'Liver',view:'gut',organs:['liver'],label:[174,278,'end'],form:'single',
     title:'The liver regulates blood glucose.',
     body:'The liver is a huge metabolic processing centre. It handles fructose and galactose and helps regulate how much glucose is available in the blood for cells.',
     lensCaption:'Fructose and galactose (gold) handled in the liver',scene:'blood',path:[[270,440],[240,400],[234,330],[228,292]],
     lens:[g(18,46),g(34,54),P(50,46,14,14,{bg:'#d8b86a'}),g(66,54),P(82,46,14,14,{bg:'#e6a8b8'})]},
    {short:'Insulin',place:'Pancreas',view:'gut',organs:['pancreas'],label:[322,364,'start'],form:'single',
     title:'The pancreas sends out insulin.',
     body:'As sugars enter the blood, the pancreas secretes insulin. Insulin helps move glucose from the blood into cells.',
     analogy:'Cell = house, membrane = door, glucose = package, insulin = key.',
     lensCaption:'Insulin (gold bars) joining glucose in the blood',scene:'blood',path:[[228,292],[250,340],[282,356]],
     lens:[g(16,44),g(32,56),g(48,44),g(64,56),g(80,44),P(24,64,22,9,{r:'999px',bg:C.gold}),P(56,34,22,9,{r:'999px',bg:C.gold}),P(72,66,22,9,{r:'999px',bg:C.gold})]},
    {short:'Cells',place:'Muscle cells',view:'body',organs:['tissues','liver'],label:[92,300,'end'],form:'single',
     title:'Energy now, or stored for later.',
     body:'Glucose is the main sugar cells use for energy. Glucose not needed right away is stored as glycogen, mainly in the liver and muscle. Lipogenesis makes and stores fat; lipolysis breaks it down.',
     lensCaption:'Glucose entering a muscle cell, some packed as glycogen',scene:'muscle',path:[[282,356],[256,280],[180,244],[140,290],[126,340]],
     lens:[g(16,40),g(24,62),...[[62,42],[72,42],[67,51],[57,51],[77,51],[62,60],[72,60]].map(([x,y])=>g(x,y,{w:12,h:12}))]}
  ],
  sources:[{label:'Your course: Nutrition: Studies and Applications, Unit 1: Water and Carbohydrates'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 23: The Digestive System',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified pathway for a typical healthy adult.'
};
