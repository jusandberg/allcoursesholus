const {P,C,o2,co2,bar}=require('../lens.js');
const atp=(x,y,o)=>P(x,y,20,12,Object.assign({r:'4px',bg:C.gold,border:'2px solid #fff'},o||{}));
const crp=(x,y,o)=>P(x,y,14,14,Object.assign({r:'3px',bg:'#b07aa0'},o||{}));
const gl=(x,y,o)=>P(x,y,13,13,Object.assign({bg:C.blue},o||{}));
const M=[[126,340]];
module.exports={
  id:'sf-3',after:22,
  title:'Where a working muscle gets its energy',
  token:'#d3a84b',
  stops:[
    {short:'Phosphagen',place:'Working muscle',view:'arm',organs:['tissues'],label:[146,320,'start'],form:'single',
     title:'The first seconds: ATP and creatine phosphate.',
     body:'The phosphagen system uses stored ATP and creatine phosphate (CrP) for very rapid energy over a few seconds. In sprinters, CrP fell by about 70% while ATP fell by about 30%: CrP is spent so ATP doesn’t have to fall further.',
     analogy:'A maximal jump relies heavily on phosphagen energy.',
     lensCaption:'ATP (gold) topped up by creatine phosphate (purple)',scene:'muscle',path:M,
     lens:[atp(24,34),atp(48,44),atp(72,34,{o:.5}),crp(30,64),crp(52,70,{o:.4}),crp(74,64,{o:.4})]},
    {short:'Glycolysis',place:'Muscle cytosol',view:'arm',organs:['tissues'],label:[146,320,'start'],form:'single',
     title:'Anaerobic glycolysis: fast ATP from glucose.',
     body:'In the cytosol, blood glucose or muscle glycogen is broken into pyruvate, rapidly forming ATP. When oxidation can’t keep pace, lactate production regenerates NAD+ so glycolysis can continue.',
     analogy:'A hard one-minute effort relies strongly on glycolysis.',
     lensCaption:'Glycogen (blue) split for quick ATP',scene:'muscle',path:[[126,340],[130,352],[126,340]],
     lens:[gl(22,30),gl(32,30),gl(27,40),gl(17,40),gl(37,40),atp(64,40),atp(78,56),P(56,70,12,12,{bg:'#e09c88'})]},
    {short:'Lactate',place:'Liver',view:'gut',organs:['liver','vessels'],label:[174,278,'end'],form:'single',
     title:'Lactate isn’t just waste.',
     body:'Lactate can be transported, oxidized by other tissues, or converted back to glucose in the liver. Fatigue in intense exercise reflects several changes, not lactate alone.',
     lensCaption:'Lactate (coral) turned back into glucose (blue)',scene:'blood',path:[[126,340],[180,250],[228,292]],
     lens:[P(18,46,13,13,{bg:'#e09c88'}),P(34,56,13,13,{bg:'#e09c88'}),P(50,46,13,13,{bg:'#e09c88',o:.6}),gl(68,54),gl(84,46)]},
    {short:'Oxygen',place:'Lungs and heart',view:'chest',organs:['lungs','heart'],label:[330,250,'start'],form:'single',
     title:'Oxygen delivery sets the pace.',
     body:'At the start of exercise, oxygen use takes time to meet demand, an oxygen deficit covered by the anaerobic systems. VO2max reflects maximal oxygen uptake and depends on delivery, utilization, genetics and training.',
     lensCaption:'Oxygen (blue) in, carbon dioxide (grey) out',scene:'alveoli',path:[[228,292],[226,240],[262,226]],
     lens:[o2(28,34),o2(42,52),o2(66,30),co2(60,66),co2(78,52)]},
    {short:'Mitochondria',place:'Muscle mitochondria',view:'arm',organs:['tissues','vessels'],label:[146,320,'start'],form:'single',
     title:'Oxidative metabolism: slower, but much more ATP.',
     body:'Pyruvate becomes acetyl-CoA, and fatty acids form acetyl-CoA by beta-oxidation. The Krebs cycle passes electrons to NADH and FADH2, and the electron transport chain uses them with oxygen to make ATP. Oxygen is the final electron acceptor.',
     analogy:'A long steady session relies mainly on oxidative metabolism.',
     lensCaption:'A mitochondrion making ATP',scene:'none',path:[[262,226],[180,244],[140,290],[126,340]],
     lens:[P(50,50,150,90,{r:'45px',bg:'#f4d9c6',border:'4px solid #c98f70'}),o2(28,50,11),atp(50,46),atp(66,56),atp(80,44)]},
    {short:'EPOC',place:'Whole body',view:'body',organs:['lungs','heart','tissues','liver'],label:[330,250,'start'],form:'single',
     title:'After exercise: EPOC.',
     body:'Oxygen use stays raised after exercise while ATP and phosphagen stores recover, lactate is processed, temperature and hormones settle, and circulation and breathing stay up.',
     analogy:'Endurance training adds mitochondria, enzymes and capillaries, and helps spare glycogen.',
     lensCaption:'Stores being refilled',scene:'muscle',path:[[126,340],[200,250],[250,230]],
     lens:[atp(24,40),atp(44,40),atp(64,40),crp(34,64),crp(56,64),o2(80,58)]}
  ],
  sources:[{label:'Your course: Sports & Fitness Nutrition, Lesson 3: Energy Systems and Exercise (Nutrition for Sport and Exercise, 4th ed.)'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 10: Muscle Tissue',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified picture. All three systems work from the start of exercise; only their share changes.'
};
