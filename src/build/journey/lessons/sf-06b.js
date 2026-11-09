const {P,C}=require('../lens.js');
const fa=(x,y,w=40,o)=>P(x,y,w,8,Object.assign({r:'999px',bg:C.gold},o||{}));
const alb=(x,y)=>P(x,y,18,18,{bg:'#a3bcc8'});
const two=(x,y,o)=>P(x,y,12,12,Object.assign({bg:C.gold},o||{}));
const nadh=(x,y)=>P(x,y,13,13,{bg:'#2f6f8f'});
module.exports={
  id:'sf-6.2',after:7,stage:'cell',kind:'Inside a muscle cell',
  title:'Beta-oxidation: burning a fatty acid',
  token:'#d3a84b',
  stops:[
    {short:'Albumin',place:'Blood',view:'door',organs:['vessel'],label:[40,230,'start'],form:'strand',
     title:'Fatty acids arrive on albumin.',
     body:'Hormonal signals switch on lipolysis in fat stores, releasing fatty acids and glycerol. The fatty acids travel in the blood bound to albumin.',
     lensCaption:'Fatty acids (gold) riding on albumin (blue)',scene:'blood',path:[[40,140],[40,300]],
     lens:[fa(30,40),alb(30,54),fa(66,58),alb(66,72)]},
    {short:'Into muscle',place:'Muscle cell',view:'door',organs:['membrane','cytoplasm'],label:[150,200,'start'],form:'strand',
     title:'Into the muscle and activated.',
     body:'Fatty acids enter the muscle cell and are activated.',
     lensCaption:'A fatty acid crossing into the muscle cell',scene:'membrane',path:[[40,300],[118,300],[220,330]],
     lens:[fa(50,24),fa(50,76,40,{o:.6})]},
    {short:'Carnitine shuttle',place:'Mitochondrial membrane',view:'mito',organs:['mito'],label:[400,420,'start'],form:'strand',
     title:'The carnitine shuttle.',
     body:'Long-chain fatty acids use the carnitine shuttle to cross the inner mitochondrial membrane.',
     lensCaption:'Carnitine (green) carrying a fatty acid across',scene:'mito',path:[[220,330],[380,340],[430,330]],
     lens:[fa(40,50),P(64,50,16,16,{bg:'#71836d'})]},
    {short:'Beta-oxidation',place:'Mitochondria',view:'mito',organs:['mito'],label:[470,420,'start'],form:'pieces',
     title:'Cut two carbons at a time.',
     body:'Beta-oxidation removes two-carbon units from the fatty acid as acetyl-CoA.',
     lensCaption:'Two-carbon pieces snipped off the chain',scene:'mito',path:[[430,330],[455,330]],
     lens:[fa(36,46,50),two(70,40),two(80,52),two(70,64)]},
    {short:'Krebs + ETC',place:'Krebs cycle and electron transport',view:'mito',organs:['krebs','chain','mito'],label:[560,225,'start'],form:'electron',
     title:'Into the Krebs cycle and electron transport.',
     body:'Acetyl-CoA enters the Krebs cycle and electron transport chain to make ATP. Fat oxidation is aerobic and relatively slow.',
     lensCaption:'Electron carriers loaded from the fatty acid',scene:'mito',path:[[455,330],[500,285],[600,258],[680,262]],
     lens:[P(50,50,90,90,{bg:'transparent',border:'5px dashed #71836d'}),nadh(28,64),nadh(72,64),nadh(50,30)]}
  ],
  sources:[{label:'Your course: Sports & Fitness Nutrition, Lesson 6: Fats (Nutrition for Sport and Exercise, 4th ed.)'},{label:'OpenStax Biology 2e, Chapter 7: Cellular Respiration',url:'https://openstax.org/books/biology-2e/pages/7-introduction'}],
  scope:'A simplified picture of one muscle cell.'
};
