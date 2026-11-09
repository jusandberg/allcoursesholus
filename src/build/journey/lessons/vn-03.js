const {P,C,bit}=require('../lens.js');
const AA=['#c86d56','#6f91a2','#d3a84b','#71836d'];
const b=(x,y,k,w=14,o)=>P(x,y,w,w,Object.assign({bg:AA[k%4]},o||{}));
const row=(x,y,n,s,dx=9)=>Array.from({length:n},(_,k)=>b(x+k*dx,y+(k%2?3:-3),k+s));
const GUT=[[262,374],[284,390],[270,404],[236,404],[214,414],[228,428],[252,428]];
module.exports={
  id:'vn-3',after:2,
  title:'Plant protein, from plate to amino acid pool',
  token:'#c86d56',
  foods:[
    {name:'Lentils',food:'lentils',bite:'a bowl of lentils',note:'Digestion, not food origin, is what makes amino acids absorbable.',colors:['#c86d56','#9a5d50']},
    {name:'Tofu',food:'tofu',bite:'a piece of tofu',note:'Digestion, not food origin, is what makes amino acids absorbable.',colors:['#efe6cf','#d8cba8']},
    {name:'Beans',food:'beans',bite:'a bowl of beans',note:'Digestion, not food origin, is what makes amino acids absorbable.',colors:['#9a5d50','#c9a07a']}
  ],
  stops:[
    {short:'The meal',place:'Mouth',view:'head',organs:['mouth'],label:[284,124,'start'],form:'folded',
     title:'You eat {bite}.',
     body:'Proteins in food are long folded chains of amino acids.',analogy:'{note}',
     lensCaption:'Folded protein chains in the food',scene:'none',path:[[250,122]],
     lens:[bit(26,74,28,'food1'),bit(80,24,24,'food2'),...row(22,36,5,0),...row(40,64,3,1)]},
    {short:'Stomach',place:'Stomach',view:'gut',organs:['stomach','esophagus'],label:[334,318,'start'],form:'chain',
     title:'Acid unfolds, pepsin starts cutting.',
     body:'Stomach acid unfolds food proteins and pepsin begins to cleave them.',
     lensCaption:'Chains straightening out',scene:'swirl',path:[[250,140],[251,230],[257,265],[272,292],[290,314]],
     lens:[...row(14,36,5,0,11),...row(30,64,5,2,11)]},
    {short:'Small intestine',place:'Small intestine',view:'gut',organs:['intestine','pancreas'],label:[322,420,'start'],form:'single',
     title:'Proteases and surface enzymes finish digestion.',
     body:'Pancreatic proteases and enzymes at the intestinal surface continue digestion. Amino acids and small peptides enter the intestinal cells.',
     lensCaption:'Amino acids crossing into intestinal cells',scene:'villi',path:[[290,314],[262,338],[246,366],...GUT],
     lens:[[18,22],[38,18],[58,24],[80,20],[28,40],[50,42],[72,40],[44,60]].map(([x,y],k)=>b(x,y,k,15))},
    {short:'Pool',place:'Portal circulation and liver',view:'gut',organs:['liver','vessels'],label:[174,278,'end'],form:'single',
     title:'Into the circulating amino acid pool.',
     body:'Amino acids enter the portal circulation. The liver and other tissues draw from this pool, which also includes amino acids recycled as body proteins are broken down and rebuilt.',
     lensCaption:'Food-derived and recycled amino acids',scene:'blood',path:[[252,428],[238,380],[234,320],[228,292]],
     lens:[[14,44],[28,54],[42,44],[56,54],[70,44],[84,54]].map(([x,y],k)=>b(x,y,k,15)).concat([b(34,68,1,13,{o:.6}),b(62,68,3,13,{o:.6})])},
    {short:'No warehouse',place:'Liver and kidneys',view:'torso',organs:['liver','kidneys','bladder'],label:[334,346,'start'],form:'single',
     title:'Extra amino acids aren’t stored.',
     body:'There’s no dedicated warehouse for extra amino acids. Nitrogen is removed and excreted mainly as urea, and the carbon skeleton can be used for energy or other pathways.',
     analogy:'More protein isn’t the same as more muscle: training, energy, total diet and recovery decide how it’s used.',
     lensCaption:'Nitrogen (grey) leaving as urea',scene:'blood',path:[[228,292],[200,330],[190,352],[218,440],[250,512]],
     lens:[b(20,46,0),b(40,54,1),b(60,46,2,14,{o:.5}),P(78,54,10,10,{bg:'#9a9aa0'}),P(88,44,10,10,{bg:'#9a9aa0'})]}
  ],
  sources:[{label:'Your course: Vegetarian Nutrition, Lesson 3: Protein and the nutritional value of beans'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 24: Metabolism and Nutrition',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified pathway for a typical healthy adult.'
};
