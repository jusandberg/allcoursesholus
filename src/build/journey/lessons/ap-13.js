const {P,C,rbc,o2,co2,src}=require('../lens.js');
const wbc=(x,y,w=34)=>P(x,y,w,w,{bg:'#f4f0f8',border:'3px solid #b07aa0'});
const plt=(x,y)=>P(x,y,12,8,{r:'40%',bg:'#e0b46a'});
module.exports={
  id:'ap-13',after:1,
  title:'The life of a red blood cell',
  token:'#c8524a',hideCore:true,
  stops:[
    {short:'Marrow',place:'Red bone marrow',view:'pelvis',organs:['marrow','skeleton'],label:[288,476,'start'],form:'single',
     title:'Blood cells are made in red marrow.',
     body:'Making blood cells is hematopoiesis. All of them come from stem cells called hematocytoblasts. Red cells lose their nuclei as they mature, so they can’t divide.',
     lensCaption:'New cells forming from stem cells',scene:'osteon',path:[[226,490]],
     lens:[P(30,40,40,40,{bg:'#f4f0f8',border:'3px solid #c99ab8'}),rbc(62,30,30),rbc(70,62,30),wbc(36,72,30),plt(84,40),plt(52,84)]},
    {short:'Plasma',place:'In the blood',view:'torso',organs:['vessels','heart'],label:[262,300,'start'],
     title:'It joins the plasma and formed elements.',
     body:'Plasma is about 55% of blood; formed elements about 45%. Red cells make up about 95% of the blood cells, with 700 times more red cells than white.',
     lensCaption:'Red cells, a white cell and platelets in plasma',scene:'blood',path:[[244,470],[244,380],[246,240]],
     lens:[rbc(20,38),rbc(40,56),rbc(62,40),rbc(82,58),rbc(30,74),rbc(70,74),wbc(52,26,26),plt(14,60),plt(88,36)]},
    {short:'Lungs',place:'Lungs',view:'chest',organs:['lungs','heart'],label:[318,246,'start'],
     title:'Hemoglobin picks up oxygen.',
     body:'Hemoglobin fills about a third of the cell. Its heme part has four iron atoms that bind oxygen in the lungs, turning the blood bright red.',
     analogy:'Like a bus with four seats for oxygen.',
     lensCaption:'Oxygen loading onto hemoglobin',scene:'alveoli',path:[[262,230],[292,250]],
     lens:[rbc(50,56,70),o2(36,52),o2(46,46),o2(56,46),o2(66,52),o2(22,24,12),o2(78,22,12)]},
    {short:'Tissues',place:'Body tissues',view:'legs',organs:['vessels','tissues'],label:[226,660,'start'],
     title:'It delivers oxygen and collects carbon dioxide.',
     body:'Blood carries oxygen to the cells and carbon dioxide back to the lungs. Globin, the protein part of hemoglobin, carries carbon dioxide. Without oxygen, blood is darker red.',
     lensCaption:'Oxygen out, carbon dioxide in',scene:'blood',path:[[270,226],[262,244],[256,470],[206,640],[194,660]],
     lens:[rbc(50,50,70),co2(40,50),co2(60,50),o2(20,22,12),o2(80,24,12),o2(26,82,12)]},
    {short:'Defence',place:'White blood cells',view:'legs',organs:['vessels','tissues'],label:[226,700,'start'],
     title:'White blood cells guard against infection.',
     body:'Leukocytes leave the blood by ameboid movement and eat microbes by phagocytosis. Neutrophils are the most numerous; lymphocytes are next.',
     lensCaption:'A white cell engulfing bacteria',scene:'none',path:[[200,700]],
     lens:[wbc(46,50,80),P(74,36,14,8,{r:'999px',bg:'#8fa48a'}),P(80,58,14,8,{r:'999px',bg:'#8fa48a'}),P(54,48,12,7,{r:'999px',bg:'#8fa48a'})]},
    {short:'Clotting',place:'A cut',view:'arm',organs:['skin','vessels'],label:[126,330,'start'],
     title:'Platelets and fibrin seal a cut.',
     body:'Platelets clump at the cut. With calcium, prothrombin becomes thrombin, and thrombin turns fibrinogen into fibrin threads that trap cells: the clot. Vitamin K is needed for many clotting factors.',
     lensCaption:'Fibrin threads trapping red cells',scene:'none',path:[[244,380],[246,240],[150,250],[112,330]],
     lens:[P(50,30,180,3,{r:'2px',bg:'#e0b46a'}),P(50,50,190,3,{r:'2px',bg:'#e0b46a'}),P(50,70,180,3,{r:'2px',bg:'#e0b46a'}),rbc(30,40),rbc(62,58),rbc(44,72),plt(70,32),plt(24,62),plt(82,72)]}
  ],
  sources:src(13,'The Blood','Chapter 18: The Cardiovascular System: Blood'),
  scope:'A simplified picture. One red cell can’t do everything shown; the white cell and clotting stops show other parts of the blood at work.'
};
