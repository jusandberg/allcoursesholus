const {P,C}=require('../lens.js');
const AA=['#c86d56','#6f91a2','#d3a84b','#71836d'];
const b=(x,y,k,w=14,o)=>P(x,y,w,w,Object.assign({bg:AA[k%4]},o||{}));
const row=(x,y,n,s,dx=9)=>Array.from({length:n},(_,k)=>b(x+k*dx,y+(k%2?3:-3),k+s));
const GUT=[[262,374],[284,390],[270,404],[236,404],[214,414],[228,428],[252,428]];
module.exports={
  id:'sf-5',after:7,
  title:'Protein, the amino acid pool and muscle',
  token:'#c86d56',
  stops:[
    {short:'Stomach',place:'Stomach',view:'gut',organs:['stomach','esophagus'],label:[334,318,'start'],form:'chain',
     title:'Acid unfolds protein and activates pepsin.',
     body:'Stomach acid denatures protein and activates pepsin, which starts cutting it.',
     lensCaption:'Protein chains unfolding',scene:'swirl',path:[[250,140],[251,230],[257,265],[272,292],[290,314]],lens:[...row(14,36,5,0,11),...row(30,64,5,2,11)]},
    {short:'Small intestine',place:'Small intestine',view:'gut',organs:['intestine','pancreas'],label:[322,420,'start'],form:'single',
     title:'Proteases and peptidases finish the job.',
     body:'Pancreatic proteases and intestinal peptidases produce amino acids and small peptides, which are absorbed.',
     lensCaption:'Amino acids crossing the gut wall',scene:'villi',path:[[290,314],[262,338],[246,366],...GUT],
     lens:[[18,22],[38,18],[58,24],[80,20],[28,40],[50,42],[72,40],[44,60]].map(([x,y],k)=>b(x,y,k,15))},
    {short:'Amino acid pool',place:'Blood and liver',view:'gut',organs:['liver','vessels'],label:[174,278,'end'],form:'single',
     title:'Into the amino acid pool.',
     body:'The amino acid pool supplies tissue building, enzymes, hormones, transport proteins and immune molecules.',
     lensCaption:'A pool of amino acids in circulation',scene:'blood',path:[[252,428],[238,380],[234,320],[228,292]],
     lens:[[14,44],[28,54],[42,44],[56,54],[70,44],[84,54],[34,66],[62,66]].map(([x,y],k)=>b(x,y,k,15))},
    {short:'No storage',place:'Liver and kidneys',view:'torso',organs:['liver','kidneys'],label:[334,346,'start'],form:'single',
     title:'There’s no protein store.',
     body:'The body has no dedicated protein-storage depot. Excess amino acids are deaminated, and their carbon skeletons are oxidized or stored.',
     lensCaption:'Nitrogen (grey) removed from extra amino acids',scene:'blood',path:[[228,292],[200,330],[190,352]],
     lens:[b(20,46,0),b(40,54,1),b(60,46,2,14,{o:.5}),P(78,54,10,10,{bg:'#9a9aa0'}),P(88,44,10,10,{bg:'#9a9aa0'})]},
    {short:'Muscle',place:'Muscle',view:'body',organs:['tissues'],label:[92,300,'end'],form:'single',
     title:'Muscle protein turns over all the time.',
     body:'Muscle proteins are continually built and broken down. Exercise stimulates turnover. Positive nitrogen balance, as in growth or well-supported hypertrophy, means building and retention exceed loss.',
     analogy:'Adaptation depends on both the training stimulus and recovery nutrition.',
     lensCaption:'A muscle fibre building new protein',scene:'muscle',path:[[190,352],[150,320],[126,340]],
     lens:[b(18,36,0),b(16,62,1),...row(40,50,6,2,9)]}
  ],
  sources:[{label:'Your course: Sports & Fitness Nutrition, Lesson 5: Proteins (Nutrition for Sport and Exercise, 4th ed.)'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 24: Metabolism and Nutrition',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified pathway. One muscle stands for all the tissues drawing on the amino acid pool.'
};
