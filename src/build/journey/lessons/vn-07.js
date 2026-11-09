const {P,C,rbc,o2,bit}=require('../lens.js');
const FE='#9a4a3a';
const fe=(x,y,w=11,o)=>P(x,y,w,w,Object.assign({r:'3px',bg:FE,border:'2px solid #fff'},o||{}));
const vc=(x,y)=>P(x,y,12,12,{bg:'#e8a04a'});
const pp=(x,y)=>P(x,y,12,12,{bg:'#7a5a3a'});
module.exports={
  id:'vn-7',after:1,
  title:'Iron from plate to tissue',
  token:'#9a4a3a',
  foods:[
    {id:'lentils',name:'Lentils',food:'lentils',bite:'a bowl of lentils',note:'Plant foods provide nonheme iron.',colors:['#c86d56','#9a5d50']},
    {id:'pepper',name:'Lentils + red pepper',food:'lentils with red pepper',bite:'lentils with red pepper',note:'Peppers, citrus, kiwi, strawberries, tomatoes and broccoli are practical vitamin C partners.',colors:['#c86d56','#d9443a']},
    {id:'tea',name:'Tofu + tea',food:'tofu with tea',bite:'tofu with a cup of tea',note:'Tofu brings nonheme iron; the tea is drunk with the meal.',colors:['#efe6cf','#b0703a']}
  ],
  stops:[
    {short:'The meal',place:'Mouth',view:'head',organs:['mouth'],label:[284,124,'start'],form:'single',
     title:'You eat {bite}.',
     body:'Plant foods provide nonheme iron. Flesh foods provide nonheme plus heme iron. They’re the same element but take different absorption paths.',
     analogy:'{note}',
     lensCaption:'Iron (red squares) in the food',scene:'none',path:[[250,122]],
     lens:[bit(32,36,40,'food1'),bit(68,62,36,'food2'),fe(32,36),fe(68,62),fe(40,44,9)]},
    {short:'Absorption',place:'Small intestine',view:'gut',organs:['intestine','stomach'],label:[322,400,'start'],form:'single',
     title:'The rest of the meal changes absorption.',
     body:'Phytate in grains and legumes and polyphenols in tea or coffee can reduce nonheme iron absorption in the same meal.',
     variants:{
       pepper:{title:'Vitamin C helps more iron through.',body:'Vitamin C enhances nonheme iron absorption by keeping it soluble and countering some inhibitors.'},
       tea:{title:'Tea holds some iron back.',body:'Polyphenols in tea can reduce nonheme iron absorption in the same meal. Timing tea away from an iron-focused meal can help when risk is high.'}
     },
     lensCaption:'Iron crossing the gut wall',scene:'villi',path:[[250,140],[251,230],[290,314],[262,374],[284,390],[270,404]],
     lens:[fe(20,24),fe(44,20),fe(68,26,11,{o:.5}),vc(30,42),pp(62,44),fe(84,22,11,{o:.4})]},
    {short:'Haemoglobin',place:'Blood',view:'chest',organs:['heart','vessels','marrow'],label:[296,226,'start'],form:'single',
     title:'Iron builds haemoglobin.',
     body:'Iron is essential for haemoglobin, which carries oxygen in red blood cells.',
     lensCaption:'Red blood cells carrying iron',scene:'blood',path:[[270,404],[240,330],[262,226]],
     lens:[rbc(20,44),rbc(44,56),rbc(68,44),rbc(88,56),fe(20,44,8),fe(44,56,8),fe(68,44,8)]},
    {short:'Tissue',place:'Muscle',view:'body',organs:['tissues'],label:[92,300,'end'],form:'single',
     title:'Myoglobin, enzymes and energy.',
     body:'In tissues, iron is part of myoglobin, electron transport and many enzymes.',
     analogy:'Menstrual loss, pregnancy, growth, blood donation and endurance training can raise needs.',
     lensCaption:'Oxygen reaching a muscle fibre',scene:'muscle',path:[[262,226],[180,244],[140,290],[126,340]],
     lens:[rbc(22,40),o2(46,46),o2(60,56),P(76,46,16,16,{bg:'#8a3a34'})]}
  ],
  sources:[{label:'Your course: Vegetarian Nutrition, Lesson 7: Minerals'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 18: Blood',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified pathway. Iron storage and recycling are not shown.'
};
