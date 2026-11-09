const {P,C}=require('../lens.js');
const AA=['#c86d56','#6f91a2','#d3a84b','#71836d'];
const b=(x,y,k,w=14)=>P(x,y,w,w,{bg:AA[k%4]});
const row=(x,y,n,s,dx=9)=>Array.from({length:n},(_,k)=>b(x+k*dx,y+(k%2?3:-3),k+s));
const GUT=[[262,374],[284,390],[270,404],[236,404],[214,414],[228,428],[252,428]];
module.exports={
  id:'ns-2',after:6,
  title:'Follow protein from plate to liver',
  token:'#c86d56',
  stops:[
    {short:'Mouth',place:'Mouth',view:'head',organs:['mouth'],label:[284,124,'start'],form:'folded',
     title:'Chewing is mostly mechanical.',
     body:'In the mouth, protein is mostly broken down mechanically, into smaller pieces of food.',
     lensCaption:'Folded protein chains in food',scene:'none',path:[[250,122]],
     lens:[...row(20,36,5,0),...row(40,66,5,1)]},
    {short:'Stomach',place:'Stomach',view:'gut',organs:['stomach','esophagus'],label:[334,318,'start'],form:'chain',
     title:'Acid and pepsin start cutting.',
     body:'Hydrochloric acid and pepsin attack the peptide bonds, breaking protein into long-chain polypeptides.',
     lensCaption:'Long polypeptide chains',scene:'swirl',path:[[250,140],[251,230],[257,265],[272,292],[290,314]],
     lens:[...row(14,36,5,0,11),...row(30,64,5,2,11)]},
    {short:'Trypsin',place:'Pancreas',view:'gut',organs:['pancreas','intestine'],label:[322,364,'start'],form:'short',
     title:'Trypsin cuts them shorter.',
     body:'In the small intestine, trypsin from the pancreas keeps breaking the longer chains into shorter peptides.',
     lensCaption:'Shorter peptides',scene:'none',path:[[262,338],[242,342],[232,356],[246,366]],
     lens:[...row(18,28,3,0),...row(60,26,3,2),...row(28,58,3,1),...row(64,62,1,3)].slice(0,10)},
    {short:'Peptidases',place:'Small intestine',view:'gut',organs:['intestine'],label:[322,420,'start'],form:'single',
     title:'Peptidases free single amino acids.',
     body:'Peptidases turn polypeptides into tripeptides and dipeptides, then single amino acids, which cross the intestinal wall into the blood.',
     lensCaption:'Single amino acids crossing the gut wall',scene:'villi',path:[[246,366],...GUT],
     lens:[[18,22],[38,18],[58,24],[80,20],[28,40],[50,42],[72,40],[20,60],[44,58],[66,62]].map(([x,y],k)=>b(x,y,k,15))},
    {short:'Liver',place:'Portal vein to liver',view:'gut',organs:['liver'],label:[174,278,'end'],form:'single',
     title:'The portal vein carries them to the liver.',
     body:'Absorbed amino acids travel through the portal vein to the liver first.',
     analogy:'Stomach → pepsin → trypsin → peptidases → amino acids → portal vein → liver.',
     lensCaption:'Amino acids arriving at the liver',scene:'blood',path:[[252,428],[238,380],[234,320],[228,292]],
     lens:[[14,44],[28,54],[42,44],[56,54],[70,44],[84,54]].map(([x,y],k)=>b(x,y,k,15))}
  ],
  sources:[{label:'Your course: Nutrition: Studies and Applications, Unit 2: Protein and Fats'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 23: The Digestive System',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified pathway for a typical healthy adult.'
};
