const {P,C}=require('../lens.js');
const ca=(x,y,o)=>P(x,y,11,11,Object.assign({bg:'#9fbccb'},o||{}));
const atp=(x,y,o)=>P(x,y,22,13,Object.assign({r:'4px',bg:C.gold,border:'2px solid #fff'},o||{}));
const act=(y,x1,x2)=>P((x1+x2)/2,y,(x2-x1)*1.9,6,{r:'3px',bg:'#e6bfb6'});
const myo=(y,w=96)=>P(50,y,w,12,{r:'6px',bg:'#c9a6c2'});
module.exports={
  id:'ap-9.2',after:5,stage:'sarcomere',kind:'Inside a muscle fibre',
  title:'The sliding filament contraction',
  token:'#9fbccb',
  stops:[
    {short:'Signal',place:'Neuromuscular junction',view:'nerve',organs:['nmj','sarcolemma'],label:[180,30,'start'],form:'spark',
     title:'A nerve signal reaches the muscle.',
     body:'At rest, there’s more potassium inside and more sodium outside, and the inside is negative. At the neuromuscular junction, axon terminals release acetylcholine, sodium rushes in, and the muscle cell fires its own action potential.',
     lensCaption:'Acetylcholine (green) crossing to the muscle',scene:'synapse',path:[[60,-10],[128,46],[150,78]],
     lens:[P(46,40,10,10,{bg:'#71836d'}),P(54,54,10,10,{bg:'#71836d'}),P(48,66,10,10,{bg:'#71836d'})]},
    {short:'T tubules',place:'T tubule',view:'nerve',organs:['ttubule','sarcolemma'],label:[176,240,'start'],form:'spark',
     title:'T tubules carry it deep inside.',
     body:'The action potential travels down the T tubules, which are continuous with the sarcolemma, deep into the fibre.',
     lensCaption:'The signal running down a T tubule',scene:'nerve',path:[[150,78],[150,240],[150,330]],
     lens:[P(50,50,20,120,{r:'8px',bg:'#e8d6c8'}),P(50,30,12,12,{bg:'#b07aa0'})]},
    {short:'Calcium',place:'Sarcoplasmic reticulum',view:'middle',organs:['sr','ttubule'],label:[520,130,'start'],form:'single',
     title:'The sarcoplasmic reticulum releases calcium.',
     body:'The signal makes the sarcoplasmic reticulum, wrapped around each myofibril, release its stored calcium ions around the myofibrils.',
     lensCaption:'Calcium (blue) pouring out of the SR',scene:'none',path:[[150,330],[160,104],[420,104]],
     lens:[P(50,14,150,16,{r:'8px',bg:'#d6e0e6'}),ca(30,34),ca(46,44),ca(60,36),ca(72,50),ca(38,60),ca(56,66)]},
    {short:'Troponin',place:'Actin filaments',view:'zoom',organs:['actin','troponin'],label:[420,135,'start'],form:'single',
     title:'Calcium unlocks the actin.',
     body:'At rest, troponin and tropomyosin keep actin and myosin apart. Calcium binds to troponin and removes that block, activating myosin.',
     lensCaption:'Calcium binding troponin (gold) on actin',scene:'none',path:[[420,104],[410,150]],
     lens:[act(40,0,52),P(26,40,12,12,{bg:'#d3a84b'}),P(48,40,12,12,{bg:'#d3a84b'}),ca(26,30),ca(48,30),myo(66)]},
    {short:'Cross-bridges',place:'Myosin heads',view:'zoom',organs:['myosin','actin'],label:[500,135,'start'],form:'atp',
     title:'Myosin heads pull with ATP.',
     body:'Myosin heads carrying ATP link to actin, forming cross-bridges (actomyosin). Breaking ATP into ADP and phosphate releases the energy that pulls the actin filaments in among the myosin.',
     lensCaption:'Cross-bridges pulling actin inward',scene:'none',path:[[410,150],[440,175],[470,200]],
     lens:[act(30,0,46),act(70,0,46),myo(50,70),P(34,40,10,18,{r:'5px',bg:'#b48aaa'}),P(34,60,10,18,{r:'5px',bg:'#b48aaa'}),atp(70,50)]},
    {short:'Shortening',place:'Sarcomere',view:'middle',organs:['zline','actin','myosin'],label:[500,350,'start'],form:'single',
     title:'Z lines move closer together.',
     body:'The sarcomere, between two Z lines, is where contraction happens. As actin slides in, the Z lines move closer together while the A bands (myosin) stay the same width.',
     analogy:'Dark A bands are thick myosin; light I bands are thin actin.',
     lensCaption:'Z lines drawn inward',scene:'none',path:[[470,200],[220,230],[780,230]],
     lens:[P(16,50,8,90,{r:'4px',bg:'#9a7a6e'}),P(84,50,8,90,{r:'4px',bg:'#9a7a6e'}),act(30,16,48),act(30,52,84),myo(50,60),act(70,16,48),act(70,52,84)]},
    {short:'Relax',place:'Back to rest',view:'whole',organs:['sr','sarcolemma'],label:[520,90,'start'],form:'single',
     title:'Calcium returns and the muscle relaxes.',
     body:'The sodium-potassium pump restores the resting potential, calcium returns to the sarcoplasmic reticulum, and the muscle relaxes. The whole cycle takes about 1/40 of a second.',
     analogy:'Muscles get ATP four ways: aerobic respiration, anaerobic breakdown, phosphocreatine and free fatty acids.',
     lensCaption:'Calcium (blue) pumped back into the SR',scene:'none',path:[[780,230],[600,104]],
     lens:[P(50,14,150,16,{r:'8px',bg:'#d6e0e6'}),ca(36,30),ca(54,24),ca(70,30)]}
  ],
  sources:[{label:'Your course: Anatomy & Physiology, Lesson 9 (Rizzo, Fundamentals of Anatomy and Physiology, Chapter 9)'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 10.3: Muscle Fiber Contraction and Relaxation',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified picture of one sarcomere; the drawing doesn’t shorten, so watch the close-up for the movement.'
};
