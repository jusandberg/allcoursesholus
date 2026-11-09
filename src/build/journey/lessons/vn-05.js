const {P,C}=require('../lens.js');
const G=C.gold,B=C.blue,S=C.sage;
const drop=(x,y,w,o)=>P(x,y,w,w,Object.assign({bg:G},o||{}));
const coated=(x,y,w=26)=>drop(x,y,w,{border:'3px solid '+S});
const mic=(x,y)=>P(x,y,34,34,{bg:'#ead9a6',border:'5px dotted '+B});
const chylo=(x,y,w=38)=>drop(x,y,w,{border:'4px solid '+B});
const GUT=[[262,374],[284,390],[270,404],[236,404],[214,414],[228,428],[252,428]];
module.exports={
  id:'vn-5',after:3,
  title:'Moving fat through a water-based body',
  token:'#d3a84b',
  stops:[
    {short:'Big drops',place:'Stomach',view:'gut',organs:['stomach','esophagus'],label:[334,318,'start'],form:'drop',
     title:'Fat doesn’t mix with water.',
     body:'Large fat droplets don’t mix readily with intestinal fluid.',
     lensCaption:'Big fat drops in watery fluid',scene:'swirl',path:[[250,122],[251,230],[257,265],[272,292],[290,314]],
     lens:[drop(46,46,74),drop(70,66,36),drop(30,68,28)]},
    {short:'Bile',place:'Liver + gallbladder',view:'gut',organs:['gallbladder','liver'],label:[196,336,'end'],form:'small',
     title:'Bile salts emulsify the drops.',
     body:'Bile salts break large droplets into smaller ones, giving pancreatic lipase much more surface to work on.',
     analogy:'Bile emulsifies; lipase digests.',
     lensCaption:'Small drops coated in bile salts',scene:'none',path:[[290,314],[268,336],[248,340]],
     lens:[[28,30],[52,22],[74,34],[24,54],[48,50],[72,58],[34,74],[58,78]].map(([x,y])=>coated(x,y))},
    {short:'Lipase',place:'Pancreas',view:'gut',organs:['pancreas'],label:[322,364,'start'],form:'small',
     title:'Pancreatic lipase digests the fat.',
     body:'Pancreatic lipase breaks the fat down. The products join micelles.',
     lensCaption:'Lipase (coral) cutting the drops',scene:'none',path:[[248,340],[232,356],[246,366]],
     lens:[coated(28,32,22),coated(60,24,22),coated(40,58,22),P(42,32,16,10,{r:'6px',bg:C.coral}),P(72,38,16,10,{r:'6px',bg:C.coral}),P(28,62,16,10,{r:'6px',bg:C.coral})]},
    {short:'Micelles',place:'Intestinal cells',view:'gut',organs:['intestine'],label:[322,420,'start'],form:'bundle',
     title:'Micelles deliver, chylomicrons pack.',
     body:'Micelles carry digestion products to the intestinal cells. Inside, many long-chain fatty acids are rebuilt into triglycerides and packed with cholesterol, phospholipids and proteins into chylomicrons.',
     lensCaption:'Micelles at the wall, chylomicrons inside',scene:'villi',path:[[246,366],...GUT],
     lens:[mic(24,28),mic(50,22),mic(76,30),chylo(34,74),chylo(66,76)]},
    {short:'Lymph',place:'Lymph to blood',view:'torso',organs:['lymph'],label:[226,330,'end'],form:'bundle',
     title:'Chylomicrons take the lymph route.',
     body:'Chylomicrons enter lymph before reaching the blood. This route also carries the fat-soluble vitamins A, D, E and K.',
     lensCaption:'Chylomicrons in lymph',scene:'vessel',path:[[264,440],[250,430],[240,400],[238,360],[237,330]],
     lens:[chylo(16,50),chylo(40,46),chylo(62,52),chylo(86,48)]},
    {short:'Tissues',place:'Muscles and tissues',view:'body',organs:['tissues','heart','liver'],label:[92,300,'end'],form:'single',
     title:'Tissues take up the fatty acids.',
     body:'In the blood, lipoprotein lipase helps tissues take up fatty acids. The remnants return to the liver.',
     analogy:'Dietary fat does much more than simply become body fat.',
     lensCaption:'A muscle cell taking in fatty acids',scene:'muscle',path:[[237,280],[252,216],[230,232],[180,244],[140,290],[126,340]],
     lens:[chylo(24,40,40),drop(50,48,16),drop(60,34,16),drop(64,60,16)]}
  ],
  sources:[{label:'Your course: Vegetarian Nutrition, Lesson 5: Fats'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 23: The Digestive System',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified pathway for long-chain fats in a typical healthy adult.'
};
