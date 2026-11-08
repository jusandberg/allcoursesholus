const {P,C,rbc,src}=require('../lens.js');
const w=(x,y,s=12)=>P(x,y,s,s,{bg:'#9fc0cf'});
const u=(x,y)=>P(x,y,10,10,{bg:'#d8b86a'});
const g=(x,y)=>P(x,y,10,10,{bg:'#d8c35a',border:'2px solid #fff'});
module.exports={
  id:'ap-18',after:1,
  title:'From blood to urine',
  token:'#d8b86a',hideCore:true,
  stops:[
    {short:'Renal artery',place:'Renal artery',view:'torso',organs:['vessels','kidneys'],label:[276,352,'start'],
     title:'A quarter of the heart’s output goes to the kidneys.',
     body:'The renal arteries carry about 1,200 mL of blood to the kidneys every minute. Afferent arterioles bring it to each glomerulus.',
     lensCaption:'Blood carrying wastes and water',scene:'blood',path:[[262,300],[258,352],[206,352]],
     lens:[rbc(20,44),rbc(44,58),rbc(70,44),w(30,72),w(60,30),u(84,62),u(50,32),g(16,66)]},
    {short:'Filtration',place:'Glomerulus',view:'torso',organs:['kidneys'],label:[170,350,'end'],
     title:'Glomerular filtration pushes fluid out.',
     body:'In the renal corpuscle (Bowman’s capsule plus the glomerulus), blood pressure forces water and small solutes like glucose, urea and ions out of the blood. Large proteins stay in.',
     analogy:'Like a coffee filter: water and small bits pass, big ones stay behind.',
     lensCaption:'Small things pass; cells and proteins stay',scene:'none',path:[[188,350]],
     lens:[P(50,50,200,200,{bg:'transparent',border:'6px solid #b5786a'}),rbc(40,44,26),rbc(58,56,26),P(50,34,18,18,{r:'30%',bg:'#71836d'}),w(20,80),u(32,86),g(70,84),w(84,72)]},
    {short:'Reabsorption',place:'Renal tubule',view:'torso',organs:['kidneys'],label:[170,360,'end'],
     title:'Tubular reabsorption takes back what’s useful.',
     body:'Mostly in the proximal convoluted tubule, glucose, amino acids and ions are pumped back into the blood. About 95% of the water follows, controlled by ADH and aldosterone.',
     lensCaption:'Water and glucose returning to the blood',scene:'vessel',path:[[184,356]],
     lens:[w(20,20),w(40,14),g(60,18),w(80,22),u(30,56),u(56,50),u(74,58),w(46,84)]},
    {short:'Secretion',place:'Renal tubule',view:'torso',organs:['kidneys'],label:[170,368,'end'],
     title:'Tubular secretion adds a few more.',
     body:'Some substances move from the blood into the tubule, such as hydrogen ions (to adjust pH), potassium, creatinine and drugs like penicillin. What’s left is urine.',
     lensCaption:'Extra wastes added to the urine',scene:'vessel',path:[[186,362]],
     lens:[u(24,50),u(44,56),u(64,48),P(36,18,10,10,{bg:C.coral}),P(62,22,10,10,{bg:C.coral}),P(80,52,10,10,{bg:C.coral})]},
    {short:'Ureter',place:'Ureter',view:'torso',organs:['ureters'],label:[226,440,'start'],
     title:'Urine drains down the ureters.',
     body:'Collecting ducts empty into the renal pelvis. Each 25 to 30 cm ureter carries urine to the bladder, mainly by peristalsis.',
     lensCaption:'Muscle waves moving urine along',scene:'muscle',path:[[190,372],[206,420],[226,470],[242,504]],
     lens:[u(30,50),u(46,46),u(62,54)]},
    {short:'Bladder',place:'Urinary bladder',view:'pelvis',organs:['bladder'],label:[272,516,'start'],
     title:'The bladder stores it.',
     body:'The bladder sits behind the pubic symphysis. Its wall is three layers of smooth muscle, the detrusor. Average capacity is about 500 mL; at 200 to 400 mL, stretch receptors signal the spinal cord.',
     lensCaption:'The bladder filling',scene:'none',path:[[250,516]],
     lens:[P(50,54,180,150,{r:'50% 50% 46% 46%',bg:'#f3e3b4',border:'8px solid #d8b86a'}),u(36,60),u(56,66),u(66,50),u(44,44)]},
    {short:'Urethra',place:'Urethra',view:'pelvis',organs:['urethra'],label:[262,560,'start'],
     title:'Micturition empties the bladder.',
     body:'The detrusor contracts and the external sphincter relaxes. Urine leaves through the urethra: about 3.8 cm long in females and 20 cm in males.',
     lensCaption:'Urine leaving the body',scene:'none',path:[[250,540],[250,568]],
     lens:[P(50,50,40,200,{r:'20px',bg:'#f3e3b4'}),u(50,30),u(50,52),u(50,74)]}
  ],
  sources:src(18,'The Urinary System','Chapter 25: The Urinary System'),
  scope:'A simplified picture. One nephron stands in for the millions in each kidney, and the lens views are cartoons rather than real structures.'
};
