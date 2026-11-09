const {P,C}=require('../lens.js');
const strand=(x,y,w=60,bg='#71836d')=>P(x,y,w,11,{r:'999px',bg});
const bug=(x,y,bg)=>P(x,y,18,11,{r:'999px',bg,border:'2px solid #fff'});
const scfa=(x,y,bg)=>P(x,y,10,10,{bg});
const GUT=[[262,374],[284,390],[270,404],[236,404],[214,414],[228,428],[252,428],[286,440],[282,456],[240,456]];
module.exports={
  id:'ns-6',after:17,
  title:'Fibre → microbes → butyrate → colonocyte fuel',
  token:'#71836d',
  stops:[
    {short:'Fibre',place:'Small intestine',view:'gut',organs:['stomach','intestine'],label:[322,420,'start'],form:'strand',
     title:'Fibre resists our digestive enzymes.',
     body:'Fibre that resists human digestive enzymes reaches the colon largely intact.',
     lensCaption:'Fibre strands passing through untouched',scene:'villi',path:[[250,140],[290,314],...GUT],
     lens:[strand(30,30),strand(64,54,70,'#8fa48a'),strand(36,76)]},
    {short:'Fermentation',place:'Large intestine',view:'gut',organs:['colon'],label:[330,440,'start'],form:'strand',
     title:'Colon bacteria ferment it.',
     body:'Colon bacteria ferment the fibre, getting energy for themselves in the process.',
     lensCaption:'Bacteria feeding on fibre',scene:'colon',path:[[240,456],[282,470],[314,440],[314,400],[300,384]],
     lens:[strand(30,30,66),strand(64,54,70,'#8fa48a'),bug(18,44,'#6f91a2'),bug(52,36,'#c86d56'),bug(80,34,'#6f91a2'),bug(28,62,'#c86d56'),bug(52,68,'#6f91a2')]},
    {short:'SCFAs',place:'Large intestine',view:'gut',organs:['colon'],label:[330,440,'start'],form:'single',
     title:'Short-chain fatty acids are made.',
     body:'Fermentation by-products include the short-chain fatty acids acetate, propionate and butyrate.',
     lensCaption:'Acetate, propionate and butyrate (gold)',scene:'colon',path:[[300,384],[250,382]],
     lens:[bug(22,24,'#6f91a2'),bug(50,20,'#c86d56'),scfa(30,44,'#9fbccb'),scfa(46,50,'#e6a8b8'),scfa(62,44,C.gold),scfa(40,64,C.gold),scfa(70,62,C.gold)]},
    {short:'Butyrate',place:'Colon lining',view:'gut',organs:['colon'],label:[330,470,'start'],form:'single',
     title:'Butyrate feeds the colon lining.',
     body:'Butyrate is the preferred fuel of the cells lining the colon (colonocytes). Small-intestine cells rely more on glutamine.',
     lensCaption:'Butyrate (gold) fuelling colonocytes',scene:'villi',path:[[250,382],[210,384],[188,420],[190,470]],
     lens:[scfa(28,24,C.gold),scfa(48,20,C.gold),scfa(68,26,C.gold),scfa(40,40,C.gold),scfa(60,42,C.gold)]},
    {short:'Gut lining',place:'Colon lining',view:'gut',organs:['colon'],label:[322,494,'start'],form:'single',
     title:'A well-fed lining stays healthy.',
     body:'Enough colonocyte fuel supports the gut lining’s structure and function over time.',
     analogy:'Different fibre types feed different bacteria, which make different short-chain fatty acids. That’s why fibre variety matters, not just quantity.',
     lensCaption:'Gut lining cells, well fuelled',scene:'villi',path:[[190,470],[206,488],[292,494]],
     lens:[scfa(30,30,C.gold),scfa(70,30,C.gold)]}
  ],
  sources:[{label:'Your course: Nutrition: Studies and Applications, Unit 6: Foods and Phytonutrients'},{label:'Harvard T.H. Chan School of Public Health: Fiber',url:'https://nutritionsource.hsph.harvard.edu/carbohydrates/fiber/'}],
  scope:'A simplified picture for a typical healthy gut.'
};
