const {P,C}=require('../lens.js');
const plt=(x,y,o)=>P(x,y,16,10,Object.assign({bg:'#d8b86a'},o||{}));
const rbc=(x,y,o)=>P(x,y,24,20,Object.assign({bg:'#d9786a',border:'4px solid #c8524a'},o||{}));
const ca=(x,y)=>P(x,y,10,10,{bg:'#9fbccb'});
const fib=(x,y,w,rot)=>P(x,y,w,4,{r:'2px',bg:'#e8d197'});
module.exports={
  id:'ap-13.2',after:8,stage:'vessel',kind:'Inside a blood vessel',
  title:'How blood clots',
  token:'#d8b86a',
  stops:[
    {short:'Damage',place:'Damaged vessel',view:'whole',organs:['wall','tissue','plasma'],label:[600,24,'start'],form:'single',
     title:'A vessel is damaged.',
     body:'Small damaged vessels constrict. In larger ones, clotting (coagulation) takes over in three stages.',
     lensCaption:'A rough cut in the vessel wall',scene:'blood',path:[[100,200],[300,200],[440,120]],
     lens:[P(30,30,70,18,{r:'6px',bg:'#e3a99a'}),P(76,30,50,18,{r:'6px',bg:'#e3a99a'}),rbc(30,64),rbc(70,70)]},
    {short:'Platelets',place:'Platelets clump',view:'cut',organs:['platelets','wall'],label:[540,60,'start'],form:'single',
     title:'Stage 1: platelets clump at the cut.',
     body:'Platelets (thrombocytes) are tiny cell fragments made from megakaryocytes in red marrow. They clump at the rough cut surface and start the chain of reactions.',
     analogy:'Platelets live about a week.',
     lensCaption:'Platelets sticking at the cut',scene:'blood',path:[[440,120],[452,104]],
     lens:[plt(30,30),plt(44,26),plt(58,30),plt(38,40),plt(52,42),plt(66,38),rbc(40,72)]},
    {short:'Activator',place:'Damaged tissue',view:'cut',organs:['tissue','platelets'],label:[580,10,'start'],form:'spark',
     title:'Thromboplastin leads to prothrombin activator.',
     body:'Damaged tissue releases thromboplastin, which leads to prothrombin activator. Calcium is needed.',
     lensCaption:'Thromboplastin (pink) and calcium (blue)',scene:'none',path:[[452,104],[450,20],[452,90]],
     lens:[P(30,40,14,14,{bg:'#e6a8b8'}),P(46,32,14,14,{bg:'#e6a8b8'}),ca(60,56),ca(72,44),plt(40,70),plt(62,74)]},
    {short:'Thrombin',place:'Plasma',view:'cut',organs:['plasma','platelets'],label:[580,130,'start'],form:'single',
     title:'Stage 2: prothrombin becomes thrombin.',
     body:'Prothrombin activator, with calcium ions, converts prothrombin (made by the liver) into thrombin.',
     lensCaption:'Prothrombin (grey) turned into thrombin (coral)',scene:'blood',path:[[452,90],[470,140]],
     lens:[P(24,46,16,16,{bg:'#b9b2a8'}),P(40,56,16,16,{bg:'#b9b2a8'}),P(64,46,16,16,{bg:'#c86d56'}),P(80,56,16,16,{bg:'#c86d56'}),ca(52,30)]},
    {short:'Fibrin',place:'The clot',view:'cut',organs:['fibrin','trapped','platelets'],label:[540,170,'start'],form:'single',
     title:'Stage 3: fibrin threads trap cells.',
     body:'Thrombin converts soluble fibrinogen into insoluble fibrin threads, which trap blood cells and platelets. This is the clot.',
     lensCaption:'Fibrin threads (yellow) trapping red cells',scene:'blood',path:[[470,140],[440,100],[490,96]],
     lens:[rbc(36,44),rbc(64,60),plt(50,30),P(50,40,120,4,{r:'2px',bg:'#e8d197'}),P(50,58,120,4,{r:'2px',bg:'#e8d197'}),P(40,50,4,90,{r:'2px',bg:'#e8d197'}),P(66,50,4,90,{r:'2px',bg:'#e8d197'})]},
    {short:'Retraction',place:'After repair',view:'whole',organs:['fibrin','wall','trapped'],label:[600,24,'start'],form:'single',
     title:'The clot tightens, then dissolves.',
     body:'Clot retraction (syneresis) tightens the clot, leaving serum behind. After repair, fibrinolysis dissolves the clot.',
     analogy:'Vitamin K is needed for many clotting factors.',
     lensCaption:'A tightened clot',scene:'blood',path:[[490,96],[600,200],[800,200]],
     lens:[rbc(40,48),rbc(58,56),P(50,52,60,4,{r:'2px',bg:'#e8d197'}),P(50,44,4,50,{r:'2px',bg:'#e8d197'})]}
  ],
  sources:[{label:'Your course: Anatomy & Physiology, Lesson 13 (Rizzo, Fundamentals of Anatomy and Physiology, Chapter 13)'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 18.5: Hemostasis',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified picture of the three stages your course teaches.'
};
