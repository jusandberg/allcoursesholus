const {P,C}=require('../lens.js');
const tox=(x,y,o)=>P(x,y,13,13,Object.assign({r:'4px',bg:'#a9b0b4'},o||{}));
const safe=(x,y)=>P(x,y,13,13,{bg:'#9fbccb'});
const drop=(x,y,o)=>P(x,y,12,12,Object.assign({r:'50% 50% 50% 0',bg:'#9fbccb'},o||{}));
module.exports={
  id:'ns-13',after:1,
  title:'How the body detoxifies: the liver leads',
  token:'#a9b0b4',
  stops:[
    {short:'Liver',place:'Liver',view:'gut',organs:['liver'],label:[174,278,'end'],form:'single',
     title:'The liver is the most important detox organ.',
     body:'The liver transforms many toxic substances into harmless agents.',
     lensCaption:'A substance (grey) made harmless (blue)',scene:'blood',path:[[250,240],[228,292]],
     lens:[tox(24,46),tox(38,56),safe(62,46),safe(76,56)]},
    {short:'Kidneys',place:'Urinary system',view:'torso',organs:['kidneys','bladder'],label:[334,346,'start'],form:'single',
     title:'The urinary system carries waste out.',
     body:'The urinary system is one of the pathways that work alongside the liver.',
     lensCaption:'Waste leaving in urine',scene:'blood',path:[[228,292],[190,352],[218,440],[250,512]],
     lens:[drop(24,46),safe(40,56),drop(56,46),safe(72,56)]},
    {short:'Skin',place:'Skin',view:'body',organs:['skin'],label:[124,176,'start'],form:'single',
     title:'Skin is another pathway.',
     body:'Skin and its structures (sweat glands, sebaceous glands) and tears form another detox pathway.',
     analogy:'Sweating removes toxins; it doesn’t add to the load.',
     lensCaption:'Sweat leaving the skin',scene:'skin',path:[[250,512],[150,330],[112,220]],
     lens:[drop(30,24),drop(50,18,{o:.6}),drop(70,26,{o:.35})]},
    {short:'Lymph + lungs',place:'Lymph and lungs',view:'torso',organs:['lymph','lungs'],label:[226,330,'end'],form:'single',
     title:'The lymphatic and respiratory systems help too.',
     body:'The lymphatic and respiratory systems also work alongside the liver, skin and urinary system.',
     lensCaption:'Lymph flowing back toward the blood',scene:'vessel',path:[[112,220],[237,330],[240,260]],
     lens:[P(20,50,26,26,{bg:'#ead9a6',border:'4px solid #6f91a2'}),P(50,46,26,26,{bg:'#ead9a6',border:'4px solid #6f91a2'})]},
    {short:'Water',place:'Whole body',view:'body',organs:['kidneys','skin','colon'],label:[330,440,'start'],form:'single',
     title:'Water is the most important detoxifier.',
     body:'If asked for the single most important detoxifier (not organ), the answer is water: it underlies nearly every elimination pathway, from urine to sweat to bowel movements.',
     lensCaption:'Water carrying waste out',scene:'none',path:[[240,260],[300,420]],
     lens:[drop(20,30),drop(40,40),drop(60,30),drop(80,40),tox(50,64,{o:.6})]},
    {short:'Bottlenecks',place:'Digestion, liver, kidneys',view:'body',organs:['stomach','intestine','liver','kidneys'],label:[334,346,'start'],form:'single',
     title:'Toxicity builds up at bottlenecks.',
     body:'Poor digestion, reduced liver function and poor kidney elimination let toxins build up. Toxicity tends to rise when a pathway is impaired, not when the body is actively using one.',
     lensCaption:'Waste backing up behind a slow pathway',scene:'none',path:[[300,420],[228,292],[190,352]],
     lens:[tox(24,40),tox(38,48),tox(52,40),tox(66,48),tox(80,40)]}
  ],
  sources:[{label:'Your course: Nutrition: Studies and Applications, Unit 13: Detoxification and Cleansing'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 23.6: The Liver',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified tour following your course’s framing.'
};
