const {P,C}=require('../lens.js');
const w=(x,y,o)=>P(x,y,11,11,Object.assign({r:'50% 50% 50% 0',bg:'#9fbccb'},o||{}));
const gl=(x,y,o)=>P(x,y,11,11,Object.assign({bg:C.blue},o||{}));
const ion=(x,y,o)=>P(x,y,9,9,Object.assign({r:'2px',bg:C.gold},o||{}));
const urea=(x,y,o)=>P(x,y,10,10,Object.assign({bg:'#a9b0b4'},o||{}));
const prot=(x,y)=>P(x,y,20,20,{r:'6px',bg:'#c86d56'});
module.exports={
  id:'ap-18.2',after:6,stage:'nephron',kind:'Inside a nephron',
  title:'Making urine in one nephron',
  token:'#9fbccb',
  stops:[
    {short:'Nephron',place:'Renal corpuscle',view:'corpuscle',organs:['glomerulus','capsule','vessels'],label:[214,80,'start'],form:'single',
     title:'The nephron is the kidney’s working unit.',
     body:'Each nephron starts with Bowman’s glomerular capsule, a double-walled cup around a capillary knot called the glomerulus. Together they form the renal corpuscle.',
     analogy:'Each kidney has millions of these microscopic tubules.',
     lensCaption:'Blood entering the glomerulus',scene:'blood',path:[[0,120],[132,134],[156,140]],
     lens:[P(50,50,60,60,{bg:'#d9786a'}),P(50,50,100,100,{bg:'transparent',border:'8px solid #e8d6c4'})]},
    {short:'Filtration',place:'Glomerulus',view:'corpuscle',organs:['glomerulus','capsule'],label:[214,80,'start'],form:'single',
     title:'Glomerular filtration.',
     body:'Blood pressure forces water and small dissolved substances (ions, glucose, urea, uric acid) out of the glomerulus into the capsule. Large proteins stay in the blood.',
     analogy:'The kidneys filter about 45 gallons of plasma a day.',
     lensCaption:'Small things pushed out; proteins (coral) stay behind',scene:'none',path:[[156,140],[196,112]],
     lens:[prot(30,40),prot(38,62),w(66,30),w(76,46),gl(70,62),ion(84,58),urea(62,78),w(84,30)]},
    {short:'Reabsorption',place:'Proximal convoluted tubule',view:'pct',organs:['pct','vessels'],label:[290,80,'start'],form:'single',
     title:'Tubular reabsorption.',
     body:'Useful substances move back into the blood, mostly in the proximal convoluted tubule. Glucose, amino acids and many ions are actively transported, and water follows by osmosis.',
     lensCaption:'Glucose, ions and water returning to the blood',scene:'villi',path:[[196,112],[226,96],[250,140],[280,120],[330,142],[370,140]],
     lens:[gl(22,24),gl(40,20),ion(56,26),w(70,22),w(84,28),urea(40,60,{o:.6})]},
    {short:'Loop of Henle',place:'Loop of Henle',view:'loop',organs:['loop'],label:[450,320,'start'],form:'single',
     title:'Down and up the loop of Henle.',
     body:'The tubule runs down the descending limb, around the U-shaped loop of Henle and back up the ascending limb.',
     lensCaption:'Filtrate moving through the loop',scene:'none',path:[[370,140],[380,500],[406,528],[432,500],[440,150]],
     lens:[w(30,30),w(40,50),ion(60,40),urea(70,60)]},
    {short:'Secretion',place:'Distal convoluted tubule',view:'dct',organs:['dct','vessels'],label:[520,80,'start'],form:'single',
     title:'Tubular secretion.',
     body:'Some substances move from the blood into the tubule: penicillin, creatinine, histamine, hydrogen ions (to control pH) and potassium.',
     lensCaption:'Hydrogen ions and potassium added to the filtrate',scene:'none',path:[[440,150],[486,160],[510,134],[576,128],[612,112]],
     lens:[P(26,36,10,10,{bg:'#e6a8b8'}),P(40,30,10,10,{bg:'#e6a8b8'}),P(58,40,12,12,{bg:'#9c8aa2'}),urea(70,56),w(80,40)]},
    {short:'Collecting duct',place:'Collecting duct',view:'duct',organs:['duct'],label:[650,300,'start'],form:'single',
     title:'Water is fine-tuned, and urine is left.',
     body:'About 95% of the water is reabsorbed, controlled by hormones such as vasopressin (ADH) and aldosterone. What’s left is urine, which flows through papillary ducts into the renal pelvis.',
     lensCaption:'Urine: water, urea and leftover ions',scene:'none',path:[[612,112],[622,200],[630,580]],
     lens:[w(30,40),urea(46,52),ion(60,40),urea(70,60),w(80,44,{o:.5})]}
  ],
  sources:[{label:'Your course: Anatomy & Physiology, Lesson 18 (Rizzo, Fundamentals of Anatomy and Physiology, Chapter 18)'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 25: The Urinary System',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified picture of one nephron. Your course places most reabsorption in the proximal tubule but doesn’t pin every process to one spot, so the stops are approximate.'
};
