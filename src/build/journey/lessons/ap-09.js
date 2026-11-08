const {P,C,src}=require('../lens.js');
const myo=(y,w)=>P(50,y,w,12,{r:'6px',bg:'#71836d'});
const act=(x,y)=>P(x,y,70,6,{r:'3px',bg:'#c86d56'});
module.exports={
  id:'ap-9',after:5,
  title:'From a thought to a muscle contraction',
  token:'#b07aa0',hideCore:true,
  stops:[
    {short:'Brain',place:'Brain',view:'head',organs:['brain'],label:[296,52,'start'],
     title:'You decide to lift your arm.',
     body:'Skeletal muscle is voluntary: the command starts in the brain and travels along motor neurons.',
     lensCaption:'A signal leaving the brain',scene:'nerve',path:[[250,60]],
     lens:[P(14,50,18,18,{bg:C.plum}),P(36,50,14,14,{bg:C.plum,o:.6})]},
    {short:'Nerve',place:'Spinal cord and nerve',view:'body',organs:['spine','nerves'],label:[160,262,'start'],
     title:'A motor neuron carries the command.',
     body:'The signal runs down the spinal cord and out along a motor neuron. One motor neuron and all the fibres it supplies form a motor unit, about 150 fibres on average.',
     lensCaption:'The impulse travelling along the axon',scene:'nerve',path:[[250,90],[250,222],[190,236],[146,296]],
     lens:[P(30,50,16,16,{bg:C.plum,o:.4}),P(54,50,16,16,{bg:C.plum,o:.7}),P(78,50,18,18,{bg:C.plum})]},
    {short:'Junction',place:'Neuromuscular junction',view:'arm',organs:['nerves','tissues'],label:[146,320,'start'],
     title:'Acetylcholine fires the muscle cell.',
     body:'At the neuromuscular junction, axon terminals release acetylcholine. Sodium rushes into the muscle cell, the inside turns positive, and the cell fires its own action potential.',
     lensCaption:'Acetylcholine crossing to the muscle',scene:'muscle',path:[[130,320]],
     lens:[P(50,14,90,36,{r:'0 0 40px 40px',bg:'#e8d3e2'}),P(34,38,10,10,{bg:C.plum}),P(50,44,10,10,{bg:C.plum}),P(66,38,10,10,{bg:C.plum}),P(26,70,12,12,{bg:'#e0b46a'}),P(46,76,12,12,{bg:'#e0b46a'}),P(66,70,12,12,{bg:'#e0b46a'}),P(80,80,12,12,{bg:'#e0b46a'})]},
    {short:'Sliding',place:'Inside the fibre',view:'arm',organs:['tissues'],label:[146,350,'start'],
     title:'Actin slides in among myosin.',
     body:'Calcium binds to troponin and uncovers actin. Myosin heads link to actin (cross-bridges) and pull, using energy from ATP. The Z lines move closer and the sarcomere shortens.',
     analogy:'Like a team pulling a rope hand over hand.',
     lensCaption:'Thin actin pulled in among thick myosin',scene:'none',path:[[122,350]],
     lens:[myo(30,110),myo(50,110),myo(70,110),act(22,40),act(78,40),act(22,60),act(78,60),P(8,50,6,90,{r:'3px',bg:'#243341'}),P(92,50,6,90,{r:'3px',bg:'#243341'}),P(50,86,12,12,{bg:'#e0b46a'})]},
    {short:'Energy',place:'Blood supply',view:'arm',organs:['tissues','vessels'],label:[150,380,'start'],
     title:'The muscle needs a steady supply of ATP.',
     body:'ATP comes from aerobic respiration of glucose, from anaerobic breakdown (which builds up lactic acid), from phosphocreatine and from fatty acids. Heat is a by-product.',
     lensCaption:'Glucose and oxygen arriving from the blood',scene:'blood',path:[[134,370]],
     lens:[P(20,40,14,14,{bg:'#d8c35a'}),P(40,56,14,14,{bg:C.blue}),P(60,42,14,14,{bg:'#d8c35a'}),P(80,58,14,14,{bg:C.blue}),P(30,66,12,12,{bg:C.blue}),P(70,30,12,12,{bg:'#d8c35a'})]},
    {short:'Movement',place:'Arm',view:'arm',organs:['tissues','skeleton'],label:[150,300,'start'],
     title:'The muscle shortens and pulls the bone.',
     body:'All the fibres in the motor unit contract fully or not at all (all-or-none). Lifting a weight is isotonic: the muscle shortens while the tension stays the same.',
     lensCaption:'A shortened, thicker muscle',scene:'muscle',path:[[126,300]],
     lens:[P(50,50,120,70,{r:'50px',bg:'#8fa48a'}),P(50,18,190,16,{r:'8px',bg:'#e8dcb8'})]}
  ],
  sources:src(9,'The Muscular System','Chapter 10: Muscle Tissue'),
  scope:'A simplified picture. The nerve route is drawn as one line, and the lens shows the sarcomere and junction as cartoons.'
};
