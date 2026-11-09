const {P,C}=require('../lens.js');
const gl=(x,y,o)=>P(x,y,22,22,Object.assign({r:'30%',bg:C.blue},o||{}));
const half=(x,y,o)=>P(x,y,16,16,Object.assign({r:'30%',bg:'#9fbccb'},o||{}));
const atp=(x,y,o)=>P(x,y,22,13,Object.assign({r:'4px',bg:C.gold,border:'2px solid #fff'},o||{}));
const nadh=(x,y,o)=>P(x,y,14,14,Object.assign({bg:'#2f6f8f'},o||{}));
const co2=(x,y)=>P(x,y,13,13,{bg:'#a9b0b4'});
const o2=(x,y)=>P(x,y,13,13,{bg:'#9fbccb',border:'2px solid #fff'});
module.exports={
  id:'ap-4',after:6,stage:'cell',kind:'Inside a cell',
  title:'Cellular respiration: from glucose to ATP',
  token:'#6f91a2',
  stops:[
    {short:'Glucose',place:'Cell membrane',view:'door',organs:['vessel','door','membrane'],label:[128,250,'start'],form:'hex',
     title:'Glucose arrives at the cell.',
     body:'Cellular respiration is the oxygen-requiring (aerobic) way cells make ATP. It isn’t the same as breathing. Overall: glucose + 6 O₂ → 6 CO₂ + 6 H₂O + ATP.',
     analogy:'Glucose is the most common fuel broken down this way.',
     lensCaption:'Glucose (blue) crossing the cell membrane',scene:'membrane',path:[[40,300],[118,300],[170,318]],
     lens:[gl(26,20),gl(52,26),gl(76,18),gl(40,78,{o:.6})]},
    {short:'Glycolysis',place:'Cytoplasm',view:'cell',organs:['cytoplasm'],label:[300,400,'start'],form:'pieces',
     title:'Glycolysis splits glucose in two.',
     body:'In the cytoplasm, 2 ATP are spent adding phosphates (phosphorylation). The six-carbon sugar splits into two PGAL, then PGA, then two pyruvic acid, making 4 ATP. Net gain: 2 ATP, plus 2 NADH₂.',
     analogy:'Glycolysis doesn’t need oxygen, so it’s the first step either way.',
     lensCaption:'Glucose split into two pyruvic acids, a little ATP made',scene:'none',path:[[230,330],[300,360]],
     lens:[half(30,40),half(48,40),atp(26,70),atp(50,70),atp(74,70,{o:.5}),nadh(72,36),nadh(84,48)]},
    {short:'Transition',place:'Into the mitochondria',view:'mito',organs:['mito'],label:[400,420,'start'],form:'pieces',
     title:'Pyruvic acid enters the mitochondria.',
     body:'With oxygen present, each pyruvic acid enters a mitochondrion. In a transition step it loses a carbon as CO₂ and becomes acetyl-CoA.',
     lensCaption:'Pyruvic acid becoming acetyl-CoA, CO₂ (grey) given off',scene:'mito',path:[[300,360],[380,340],[430,330]],
     lens:[half(26,48),P(56,48,14,14,{r:'30%',bg:'#71836d'}),co2(78,30)]},
    {short:'Krebs cycle',place:'Krebs citric acid cycle',view:'mito',organs:['mito','krebs'],label:[500,400,'start'],form:'pieces',
     title:'The Krebs citric acid cycle.',
     body:'Acetyl-CoA joins oxaloacetic acid to make citric acid, which is broken down step by step back to oxaloacetic acid. Per pyruvic acid: 3 CO₂, 4 NADH₂, 1 FADH₂ and 1 ATP (as GTP).',
     analogy:'Each glucose makes two pyruvic acids, so double everything.',
     lensCaption:'The cycle releasing CO₂ and loading NAD and FAD',scene:'mito',path:[[430,330],[455,330],[470,300],[500,285]],
     lens:[P(50,50,96,96,{bg:'transparent',border:'5px dashed #71836d'}),co2(20,24),co2(80,24),co2(50,90),nadh(28,64),nadh(72,64),nadh(50,30),P(84,50,14,14,{bg:'#6f91a2'}),atp(16,46)]},
    {short:'Electron transport',place:'Cristae',view:'mito',organs:['mito','chain'],label:[560,225,'start'],form:'electron',
     title:'Electrons pass down the transport chain.',
     body:'Most ATP is made on the mitochondrial cristae. NAD and FAD hand on their electrons, which pass from carrier to carrier (NAD, FAD, quinone, cytochromes), giving up energy used to make ATP.',
     analogy:'Oxygen is the final electron acceptor and forms water. That’s why this step needs oxygen.',
     lensCaption:'Electrons passed along the carriers to oxygen',scene:'mito',path:[[560,262],[600,258],[640,258],[680,262]],
     lens:[nadh(14,50),nadh(32,44),nadh(50,50),nadh(68,44),o2(84,50),P(92,66,12,12,{bg:'#9fbccb'})]},
    {short:'ATP total',place:'ATP made',view:'mito',organs:['mito','synthase'],label:[672,430,'start'],form:'atp',
     title:'The ATP total.',
     body:'Each NADH₂ yields 3 ATP and each FADH₂ yields 2. The textbook totals 38 ATP per glucose (or 36 ATP plus 2 GTP), capturing about 60% of glucose’s energy.',
     lensCaption:'ATP made on the cristae',scene:'mito',path:[[690,300],[650,372]],
     lens:[atp(20,30),atp(46,30),atp(72,30),atp(20,56),atp(46,56),atp(72,56),atp(33,80),atp(59,80)]},
    {short:'Without oxygen',place:'Muscle cell',view:'cell',organs:['cytoplasm','muscle'],label:[470,560,'start'],form:'pieces',
     title:'Without oxygen: lactic acid.',
     body:'When exercise outpaces the oxygen supply, NADH₂ passes its hydrogens to pyruvic acid, forming lactic acid. Only 2 ATP per glucose. Lactic acid causes short-term muscle fatigue and is turned back into pyruvic acid when oxygen returns.',
     analogy:'In yeast the same start leads to fermentation: CO₂ and ethyl alcohol.',
     lensCaption:'Pyruvic acid becoming lactic acid (coral)',scene:'muscle',path:[[650,372],[600,440],[470,500]],
     lens:[half(26,44),half(42,44),P(64,44,16,16,{r:'30%',bg:'#e09c88'}),P(80,52,16,16,{r:'30%',bg:'#e09c88'}),atp(36,74),atp(60,74)]}
  ],
  sources:[{label:'Your course: Anatomy & Physiology, Lesson 4 (Rizzo, Fundamentals of Anatomy and Physiology, Chapter 4)'},{label:'OpenStax Biology 2e, Chapter 7: Cellular Respiration',url:'https://openstax.org/books/biology-2e/pages/7-introduction'}],
  scope:'A simplified picture of one cell. Your textbook’s ATP count (38) is a theoretical maximum; newer sources often give a lower figure.'
};
