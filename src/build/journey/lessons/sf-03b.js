const {P,C}=require('../lens.js');
const atp=(x,y,o)=>P(x,y,22,13,Object.assign({r:'4px',bg:C.gold,border:'2px solid #fff'},o||{}));
const crp=(x,y,o)=>P(x,y,15,15,Object.assign({r:'3px',bg:'#b07aa0'},o||{}));
const gl=(x,y,o)=>P(x,y,13,13,Object.assign({bg:C.blue},o||{}));
const nadh=(x,y)=>P(x,y,14,14,{bg:'#2f6f8f'});
const lac=(x,y,o)=>P(x,y,14,14,Object.assign({r:'30%',bg:'#e09c88'},o||{}));
module.exports={
  id:'sf-3.2',after:12,stage:'cell',kind:'Inside a muscle cell',
  title:'The three energy systems inside one muscle cell',
  token:'#d3a84b',
  stops:[
    {short:'Phosphagen',place:'Muscle fibres',view:'cell',organs:['muscle','cytoplasm'],label:[470,560,'start'],form:'atp',
     title:'Phosphagen: stored ATP and creatine phosphate.',
     body:'Muscle fibres use stored ATP and creatine phosphate (CrP) for very rapid energy over a few seconds. In sprinters, CrP fell by about 70% while ATP fell by about 30%.',
     analogy:'CrP is spent so that ATP doesn’t have to fall further.',
     lensCaption:'ATP (gold) topped up by creatine phosphate (purple)',scene:'muscle',path:[[470,511]],
     lens:[atp(24,34),atp(48,44),atp(72,34,{o:.5}),crp(30,66),crp(52,72,{o:.35}),crp(74,66,{o:.35})]},
    {short:'Glycolysis',place:'Cytosol',view:'cell',organs:['cytoplasm'],label:[300,400,'start'],form:'pieces',
     title:'Anaerobic glycolysis in the cytosol.',
     body:'Blood glucose or muscle glycogen is broken into pyruvate in the cytosol, rapidly forming ATP. Glycogen gives a small advantage because it enters after the first phosphorylation step.',
     analogy:'A hard one-minute effort relies strongly on glycolysis.',
     lensCaption:'Glycogen (blue) broken down for quick ATP',scene:'none',path:[[400,520],[300,380]],
     lens:[gl(22,30),gl(32,30),gl(27,40),gl(17,40),gl(37,40),atp(64,40),atp(78,56),nadh(56,72)]},
    {short:'Lactate',place:'Out to the blood',view:'door',organs:['cytoplasm','vessel'],label:[128,250,'start'],form:'single',
     title:'Lactate keeps glycolysis going.',
     body:'When oxidation can’t keep pace, lactate production regenerates NAD+ so glycolysis can continue. Lactate can be transported, oxidized by other tissues, or turned back into glucose in the liver.',
     analogy:'Fatigue in intense exercise reflects several changes, not lactate alone.',
     lensCaption:'Lactate (coral) leaving the cell',scene:'membrane',path:[[300,380],[170,318],[118,300],[40,300]],
     lens:[lac(30,78),lac(50,70),lac(70,26),lac(40,22,{o:.6})]},
    {short:'Krebs cycle',place:'Mitochondria',view:'mito',organs:['mito','krebs'],label:[500,400,'start'],form:'pieces',
     title:'Oxidative metabolism starts in the mitochondria.',
     body:'Pyruvate becomes acetyl-CoA and enters the Krebs cycle. Fatty acids form acetyl-CoA by beta-oxidation. The Krebs cycle passes high-energy electrons to NADH and FADH2.',
     lensCaption:'The Krebs cycle loading electron carriers',scene:'mito',path:[[40,300],[118,300],[300,340],[455,330],[470,300],[500,285]],
     lens:[P(50,50,96,96,{bg:'transparent',border:'5px dashed #71836d'}),nadh(28,64),nadh(72,64),nadh(50,30),P(84,50,14,14,{bg:'#6f91a2'})]},
    {short:'Oxygen',place:'Electron transport chain',view:'mito',organs:['mito','chain','vessel'],label:[560,225,'start'],form:'electron',
     title:'Oxygen is the final electron acceptor.',
     body:'The electron transport chain uses those electrons and oxygen to drive ATP synthesis. Sustained oxidative ATP production depends on enough oxygen being delivered.',
     lensCaption:'Electrons passed along to oxygen',scene:'mito',path:[[560,262],[600,258],[640,258],[680,262]],
     lens:[nadh(14,50),nadh(32,44),nadh(50,50),nadh(68,44),P(84,50,14,14,{bg:'#9fbccb',border:'2px solid #fff'})]},
    {short:'Lots of ATP',place:'ATP made',view:'mito',organs:['mito','synthase'],label:[672,430,'start'],form:'atp',
     title:'Much more ATP, but slower.',
     body:'Oxidative metabolism produces much more ATP than the other systems, but at a slower rate. It uses carbohydrate, fat and sometimes amino acids.',
     analogy:'A long steady session relies mainly on oxidative metabolism.',
     lensCaption:'ATP made in the mitochondria',scene:'mito',path:[[690,300],[650,372]],
     lens:[atp(20,30),atp(46,30),atp(72,30),atp(20,56),atp(46,56),atp(72,56),atp(33,80),atp(59,80)]},
    {short:'Training',place:'Muscle fibres',view:'cell',organs:['muscle','mito'],label:[470,560,'start'],form:'atp',
     title:'Training changes the cell.',
     body:'Endurance training increases mitochondria, oxidative enzymes, capillaries and the ability to use fat. Sprint and strength training improve phosphagen capacity, glycolytic enzymes, buffering and neuromuscular output.',
     analogy:'All three systems work from the start of exercise; only their share changes.',
     lensCaption:'ATP powering the muscle fibres',scene:'muscle',path:[[650,372],[520,505]],
     lens:[atp(24,40),atp(44,40),atp(64,40),crp(34,64),crp(56,64),gl(80,58)]}
  ],
  sources:[{label:'Your course: Sports & Fitness Nutrition, Lesson 3: Energy Systems and Exercise (Nutrition for Sport and Exercise, 4th ed.)'},{label:'OpenStax Biology 2e, Chapter 7: Cellular Respiration',url:'https://openstax.org/books/biology-2e/pages/7-introduction'}],
  scope:'A simplified picture of one muscle cell.'
};
