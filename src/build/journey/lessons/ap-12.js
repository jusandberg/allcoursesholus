const {P,C,rbc,src}=require('../lens.js');
const hor=(x,y,c=C.plum,w=14)=>P(x,y,w,w,{r:'30%',bg:c});
const rec=(x,y)=>P(x,y,22,12,{r:'12px 12px 0 0',bg:'#71836d'});
module.exports={
  id:'ap-12',after:3,
  title:'Follow a hormone signal through the endocrine system',
  token:'#b07aa0',hideCore:true,
  stops:[
    {short:'Hypothalamus',place:'Hypothalamus',view:'head',organs:['brain','pituitary'],label:[262,70,'start'],
     title:'The hypothalamus gives the first order.',
     body:'Neurons in the hypothalamus make releasing hormones, such as thyrotropin-releasing hormone (TRH). They travel through a portal vein down the infundibulum to the anterior pituitary.',
     lensCaption:'Releasing hormone heading to the pituitary',scene:'none',path:[[250,70]],
     lens:[P(50,40,120,80,{r:'46% 54% 50% 50%',bg:'#e3b9b0'}),P(50,80,8,40,{r:'4px',bg:'#c99ab8'}),hor(48,58),hor(54,70)]},
    {short:'Pituitary',place:'Anterior pituitary',view:'head',organs:['pituitary'],label:[262,86,'start'],
     title:'The pituitary releases TSH into the blood.',
     body:'The pea-sized anterior pituitary answers with thyroid-stimulating hormone (TSH). Endocrine glands are ductless: hormones go straight into the bloodstream.',
     lensCaption:'TSH entering a capillary',scene:'blood',path:[[250,84]],
     lens:[hor(20,46),hor(36,56),hor(54,44),hor(70,58),rbc(30,34,26),rbc(78,40,26),rbc(60,66,26)]},
    {short:'Thyroid',place:'Thyroid',view:'neck',organs:['thyroid','vessels'],label:[270,166,'start'],
     title:'The thyroid makes T3 and T4.',
     body:'TSH reaches its target organ. The thyroid uses iodine to make thyroxine (T4) and triiodothyronine (T3), which regulate metabolism.',
     lensCaption:'TSH binding to thyroid cell receptors',scene:'none',path:[[250,150],[250,166]],
     lens:[P(50,64,170,60,{r:'30px',bg:'#e9c3cf'}),rec(26,46),rec(50,46),rec(74,46),hor(26,32),hor(50,32),hor(74,22),P(40,74,10,10,{bg:'#d3a84b'}),P(60,74,10,10,{bg:'#d3a84b'})]},
    {short:'Feedback',place:'Back to the brain',view:'head',organs:['thyroid','pituitary','brain'],label:[262,78,'start'],
     title:'Negative feedback turns it down.',
     body:'As thyroid hormone rises, it inhibits TSH from the pituitary and TRH from the hypothalamus. Secretion drops, keeping levels in a narrow range.',
     analogy:'Like a thermostat switching the heat off once the room is warm.',
     lensCaption:'Thyroid hormone signalling “enough”',scene:'none',path:[[250,140],[250,84]],
     lens:[hor(30,40,'#d3a84b'),hor(50,30,'#d3a84b'),hor(70,40,'#d3a84b'),P(50,66,60,8,{r:'4px',bg:C.coral})]},
    {short:'Adrenals',place:'Adrenal glands',view:'torso',organs:['adrenals','kidneys'],label:[330,320,'start'],
     title:'The adrenals handle stress and salt.',
     body:'On top of the kidneys, the adrenal medulla releases epinephrine for fight or flight. The cortex makes aldosterone (sodium and potassium) and cortisol (raises blood glucose).',
     lensCaption:'Epinephrine released into the blood',scene:'blood',path:[[250,200],[256,300],[314,322]],
     lens:[hor(20,40,'#e0a83a'),hor(36,56,'#e0a83a'),hor(52,42,'#e0a83a'),hor(68,58,'#e0a83a'),hor(84,44,'#e0a83a'),rbc(30,70,24),rbc(70,30,24)]},
    {short:'Pancreas',place:'Pancreas',view:'torso',organs:['pancreas','liver'],label:[318,364,'start'],
     title:'Insulin and glucagon balance blood glucose.',
     body:'In the islets of Langerhans, beta cells release insulin after a meal, moving glucose into cells and lowering blood glucose. Alpha cells release glucagon when glucose falls, so the liver releases glucose.',
     lensCaption:'Insulin helping glucose into a cell',scene:'none',path:[[300,330],[272,358]],
     lens:[P(50,74,170,60,{r:'30px',bg:'#efe1c3'}),rec(30,56),rec(70,56),hor(30,40,'#dcb25a'),hor(70,40,'#dcb25a'),P(44,34,12,12,{bg:'#d8c35a'}),P(56,24,12,12,{bg:'#d8c35a'}),P(50,80,12,12,{bg:'#d8c35a'})]}
  ],
  sources:src(12,'The Endocrine System','Chapter 17: The Endocrine System'),
  scope:'A simplified picture of one feedback loop and a few other glands. Hormones really spread through the whole bloodstream; the route shows where they act.'
};
