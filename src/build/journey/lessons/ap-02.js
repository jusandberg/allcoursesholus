const {P,C}=require('../lens.js');
const dot=(x,y,o)=>P(x,y,12,12,Object.assign({bg:C.gold},o||{}));
const drop=(x,y,o)=>P(x,y,12,12,Object.assign({r:'50% 50% 50% 0',bg:'#9fbccb'},o||{}));
const rbc=(x,w,h)=>P(x,50,w,h,{bg:'#d9786a',border:'4px solid #c8524a'});
module.exports={
  id:'ap-2',after:15,stage:'membrane',kind:'Across a membrane',
  title:'How things cross the cell membrane',
  token:'#d3a84b',
  stops:[
    {short:'Diffusion',place:'Outside the cell',view:'left',organs:['outside','solutes'],label:[170,24,'start'],form:'single',
     title:'Diffusion: from high to low.',
     body:'Diffusion is the movement of molecules from an area of high concentration to an area of low concentration. Random collisions, called Brownian movement, spread them out. The higher the temperature, the faster they move.',
     analogy:'Open a perfume bottle and the scent spreads through the room.',
     lensCaption:'Molecules spreading from crowded to empty',scene:'none',path:[[60,60],[110,100],[150,150]],
     lens:[dot(16,30),dot(26,42),dot(18,56),dot(30,64),dot(24,20),dot(52,46),dot(70,60),dot(86,40)]},
    {short:'Through',place:'Across the membrane',view:'left',organs:['bilayer','solutes','inside'],label:[250,330,'start'],form:'single',
     title:'Some molecules slip straight through.',
     body:'In the lungs, oxygen diffuses from the air (high) into the blood (low), and carbon dioxide diffuses from the blood (high) into the lungs (low).',
     lensCaption:'A small molecule passing the phospholipid layer',scene:'membrane',path:[[150,150],[120,240],[100,370]],
     lens:[dot(30,18),dot(50,24),dot(40,50),dot(60,80,{o:.6})]},
    {short:'Selective',place:'The membrane',view:'whole',organs:['bilayer','channel','pump'],label:[260,240,'start'],form:'single',
     title:'The membrane is selectively permeable.',
     body:'The plasma membrane lets only some materials through. They cross in three ways: diffusion, osmosis and active transport.',
     lensCaption:'A channel protein in the bilayer',scene:'membrane',path:[[100,370],[205,330],[205,250]],
     lens:[P(38,50,14,46,{r:'7px',bg:'#a3bcc8'}),P(62,50,14,46,{r:'7px',bg:'#a3bcc8'}),dot(50,30)]},
    {short:'Osmosis',place:'Water crossing',view:'right',organs:['water','bilayer'],label:[600,24,'start'],form:'single',
     title:'Osmosis: water only.',
     body:'Osmosis is a special kind of diffusion: water only, crossing a selectively permeable membrane from where water is more concentrated (fewer solutes) to where it’s less concentrated (more solutes).',
     lensCaption:'Water (blue) moving toward the side with more solutes',scene:'membrane',path:[[205,250],[640,100],[640,240],[620,370]],
     lens:[drop(30,18),drop(50,24),drop(70,16),drop(44,52),drop(56,80),dot(30,84),dot(70,84),dot(50,88)]},
    {short:'Tonicity',place:'Red blood cells',view:'right',organs:['water'],label:[600,24,'start'],form:'single',
     title:'Isotonic, hypotonic, hypertonic.',
     body:'In an isotonic solution (normal saline), a red blood cell keeps its shape. In a hypotonic solution (pure water), water rushes in and it swells and bursts. In a hypertonic solution (5% salt), water leaves and it shrivels (crenates).',
     analogy:'Proteins in blood can’t leave the capillaries, so their osmotic pressure pulls most escaped fluid back in.',
     lensCaption:'Hypertonic, isotonic, hypotonic',scene:'none',path:[[620,370],[640,240]],
     lens:[rbc(18,24,20),rbc(50,34,28),rbc(82,44,40)]},
    {short:'Active transport',place:'Pump protein',view:'pump',organs:['pump','cargo'],label:[500,170,'start'],form:'atp',
     title:'Active transport uses ATP.',
     body:'Sugars, amino acids, larger proteins and fats often have to move against a concentration gradient, from low to high. This is active transport, and it needs energy as ATP. It’s the main way most cells get the materials they need.',
     lensCaption:'A pump using ATP (gold) to move cargo uphill',scene:'membrane',path:[[640,240],[440,140],[440,250],[520,420]],
     lens:[P(50,50,30,70,{r:'14px',bg:'#7d9fb0'}),P(50,16,14,14,{r:'4px',bg:'#c86d56'}),P(30,84,14,14,{r:'4px',bg:'#c86d56'}),P(50,86,14,14,{r:'4px',bg:'#c86d56'}),P(70,84,14,14,{r:'4px',bg:'#c86d56'}),P(76,40,22,13,{r:'4px',bg:C.gold,border:'2px solid #fff'})]}
  ],
  sources:[{label:'Your course: Anatomy & Physiology, Lesson 2 (Rizzo, Fundamentals of Anatomy and Physiology, Chapter 2)'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 3.1: The Cell Membrane',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified close-up of one patch of membrane.'
};
