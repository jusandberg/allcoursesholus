const {P,C,bar}=require('../lens.js');
const G=C.gold,B=C.blue,S=C.sage;
const drop=(x,y,w,o)=>P(x,y,w,w,Object.assign({bg:G},o||{}));
const coated=(x,y,w=26)=>drop(x,y,w,{border:'3px solid '+S});
const mic=(x,y)=>P(x,y,34,34,{bg:'#ead9a6',border:'5px dotted '+B});
const chylo=(x,y,w=38)=>drop(x,y,w,{border:'4px solid '+B});
const GUT=[[262,374],[284,390],[270,404],[236,404],[214,414],[228,428],[252,428]];
module.exports={
  id:'sf-6',after:7,
  title:'Fat from the plate to a working muscle',
  token:'#d3a84b',
  stops:[
    {short:'Mouth + stomach',place:'Mouth and stomach',view:'gut',organs:['mouth','stomach','esophagus'],label:[334,318,'start'],form:'drop',
     title:'A small start from lingual and gastric lipase.',
     body:'Lingual and gastric lipases make only a small contribution. Most fat digestion happens in the small intestine.',
     lensCaption:'Big fat drops',scene:'swirl',path:[[250,122],[251,230],[257,265],[272,292],[290,314]],
     lens:[drop(46,46,74),drop(70,66,36),drop(30,68,28)]},
    {short:'Bile + lipase',place:'Small intestine',view:'gut',organs:['gallbladder','liver','pancreas','intestine'],label:[196,336,'end'],form:'small',
     title:'Bile emulsifies, lipase digests.',
     body:'Bile emulsifies fat into small drops, and pancreatic lipase releases fatty acids and monoglycerides.',
     lensCaption:'Small drops coated in bile',scene:'none',path:[[290,314],[268,336],[248,340],[232,356]],
     lens:[[28,30],[52,22],[74,34],[24,54],[48,50],[72,58],[34,74],[58,78]].map(([x,y])=>coated(x,y))},
    {short:'Micelles',place:'Intestinal cells',view:'gut',organs:['intestine'],label:[322,420,'start'],form:'bundle',
     title:'Micelles, then chylomicrons.',
     body:'Fatty acids and monoglycerides form micelles and enter intestinal cells. There they’re rebuilt into triglycerides and packed into chylomicrons. Shorter-chain fatty acids can reach portal blood more directly.',
     lensCaption:'Micelles at the gut wall, chylomicrons inside',scene:'villi',path:[[232,356],...GUT],
     lens:[mic(24,28),mic(50,22),mic(76,30),chylo(34,74),chylo(66,76)]},
    {short:'Lymph',place:'Lymph to blood',view:'torso',organs:['lymph'],label:[226,330,'end'],form:'bundle',
     title:'Chylomicrons travel through lymph to blood.',
     body:'Chylomicrons carry dietary fat through the lymph and into the blood. Lipoprotein lipase helps tissues take fatty acids from the circulating triglycerides.',
     analogy:'Chylomicrons carry dietary fat; VLDL carries fat packaged by the liver; LDL delivers cholesterol to tissues; HDL helps with reverse cholesterol transport.',
     lensCaption:'Chylomicrons flowing in lymph',scene:'vessel',path:[[264,440],[250,430],[240,400],[238,360],[237,330]],
     lens:[chylo(16,50),chylo(40,46),chylo(62,52),chylo(86,48)]},
    {short:'Adipose',place:'Fat stores',view:'torso',organs:['bellyfat'],label:[354,470,'start'],form:'single',
     title:'Extra energy is stored in adipose tissue.',
     body:'Excess energy is stored efficiently in adipose tissue. Muscle also keeps its own intramuscular triglyceride as a local fuel.',
     lensCaption:'Fat cells storing triglyceride',scene:'none',path:[[237,330],[300,400],[334,470]],
     lens:[P(30,44,70,60,{r:'46% 54% 50% 50%',bg:'#f6e8c4'}),P(68,56,60,52,{r:'50%',bg:'#f6e8c4'}),drop(30,44,30),drop(68,56,26)]},
    {short:'Mobilized',place:'Blood',view:'torso',organs:['bellyfat','vessels'],label:[354,470,'start'],form:'single',
     title:'Lipolysis releases fatty acids.',
     body:'Hormonal signals switch on lipolysis, releasing fatty acids and glycerol from stored triglycerides. The fatty acids travel in the blood bound to albumin.',
     lensCaption:'Fatty acids riding on albumin (blue)',scene:'blood',path:[[334,470],[280,420],[240,360]],
     lens:[P(20,50,28,8,{r:'999px',bg:G}),P(24,62,16,16,{bg:'#a3bcc8'}),P(54,46,28,8,{r:'999px',bg:G}),P(58,58,16,16,{bg:'#a3bcc8'}),P(84,52,10,10,{bg:'#e8d197'})]},
    {short:'Beta-oxidation',place:'Muscle mitochondria',view:'body',organs:['tissues'],label:[92,300,'end'],form:'single',
     title:'Beta-oxidation in the mitochondria.',
     body:'Inside muscle, long-chain fatty acids use the carnitine shuttle to enter mitochondria. Beta-oxidation removes two-carbon units as acetyl-CoA, which feeds the Krebs cycle and electron transport chain. Fat oxidation is aerobic and fairly slow.',
     lensCaption:'A fatty acid cut two carbons at a time',scene:'none',path:[[240,360],[180,300],[140,300],[126,340]],
     lens:[P(50,50,150,90,{r:'45px',bg:'#f4d9c6',border:'4px solid #c98f70'}),P(40,46,44,8,{r:'999px',bg:G}),P(70,50,10,10,{bg:G}),P(80,58,10,10,{bg:G})]}
  ],
  sources:[{label:'Your course: Sports & Fitness Nutrition, Lesson 6: Fats (Nutrition for Sport and Exercise, 4th ed.)'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 24: Metabolism and Nutrition',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified pathway. Most long-chain fats follow the lymph route shown here.'
};
