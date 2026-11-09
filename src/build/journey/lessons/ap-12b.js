const {P,C}=require('../lens.js');
const prot=(x,y,o)=>P(x,y,16,16,Object.assign({r:'4px',bg:'#c86d56'},o||{}));
const ster=(x,y,o)=>P(x,y,14,14,Object.assign({r:'50%',bg:'#d3a84b'},o||{}));
module.exports={
  id:'ap-12.2',after:2,stage:'cell',kind:'Inside a cell',pickLabel:'Pick a hormone',
  title:'Two ways a hormone reaches a cell',
  token:'#c86d56',
  foods:[
    {id:'protein',name:'Protein hormone (insulin)',food:'insulin',bite:'insulin',note:'Amino acid and protein hormones include epinephrine, norepinephrine, oxytocin, vasopressin, insulin and growth hormone.',colors:['#c86d56','#e09c88']},
    {id:'steroid',name:'Steroid hormone (cortisol)',food:'cortisol',bite:'cortisol',note:'Steroids are lipids: cortisol, estrogen and testosterone.',colors:['#d3a84b','#ead08a']}
  ],
  stops:[
    {short:'In the blood',place:'Blood',view:'door',organs:['vessel'],label:[40,230,'start'],form:'single',
     title:'{food} travels in the blood.',
     body:'Hormones are carried in the blood to their target cells.',analogy:'{note}',
     lensCaption:'Hormone molecules in the blood',scene:'blood',path:[[40,140],[40,300]],
     lens:[prot(24,40),prot(50,56),ster(70,38),ster(84,60)]},
    {short:'At the cell',place:'Cell membrane',view:'door',organs:['membrane','vessel'],label:[150,200,'start'],form:'single',
     title:'Reaching the cell membrane.',
     body:'What happens next depends on the hormone’s chemical type.',
     variants:{
       protein:{title:'Protein hormones bind on the surface.',body:'Amino acid and protein hormones bind to receptors on the cell membrane. They don’t go inside.'},
       steroid:{title:'Steroids slip through the membrane.',body:'Steroids are lipids, so they diffuse into the cell through the membrane.'}
     },
     lensCaption:'The hormone at the membrane',scene:'membrane',path:[[40,300],[118,300]],
     lens:[P(50,50,16,40,{r:'8px',bg:'#c9a96a'}),prot(50,22),ster(30,70,{o:.6})]},
    {short:'Inside',place:'Inside the cell',view:'cell',organs:['cytoplasm','nucleus'],label:[300,400,'start'],form:'single',
     title:'The message gets inside.',
     body:'Inside the cell, the hormone’s message changes what the cell does.',
     variants:{
       protein:{title:'The receptor passes the message in.',body:'A protein hormone stays bound at the surface receptor, and the cell responds inside.'},
       steroid:{title:'Steroids bind inside the cell.',body:'Once inside, a steroid hormone binds to a receptor within the cell.'}
     },
     lensCaption:'The message reaching the cell’s control centre',scene:'nucleus',path:[[118,300],[200,260],[250,200]],
     lens:[P(50,50,60,60,{bg:'#efe0e6'}),ster(50,50),prot(20,20,{o:.5})]},
    {short:'By mouth?',place:'Digestion',view:'cell',organs:['cytoplasm'],label:[300,400,'start'],form:'single',
     title:'Why some hormones can be swallowed.',
     body:'Steroids can be taken by mouth, like birth control pills. Protein hormones such as insulin must be injected, because digestion breaks them down.',
     lensCaption:'Protein hormones broken apart by digestion',scene:'none',path:[[250,200],[300,360]],
     lens:[prot(24,40,{w:10,h:10}),prot(36,52,{w:10,h:10}),prot(30,64,{w:10,h:10}),ster(70,50)]},
    {short:'Feedback',place:'Back to the gland',view:'door',organs:['vessel'],label:[40,230,'start'],form:'single',
     title:'Negative feedback keeps levels steady.',
     body:'Most hormones are controlled by negative feedback. When a hormone’s level rises, it inhibits the gland that made it; when it falls, the gland secretes again.',
     analogy:'Like a thermostat. High thyroid hormone inhibits TSH from the pituitary and TRH from the hypothalamus.',
     lensCaption:'Rising level switching the gland off',scene:'blood',path:[[300,360],[118,320],[40,300],[40,120]],
     lens:[prot(20,40),prot(34,52),prot(48,40),prot(62,52),prot(76,40,{o:.4})]}
  ],
  sources:[{label:'Your course: Anatomy & Physiology, Lesson 12 (Rizzo, Fundamentals of Anatomy and Physiology, Chapter 12)'},{label:'OpenStax Anatomy and Physiology 2e, Chapter 17.2: Hormones',url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}],
  scope:'A simplified picture. Use the buttons to compare a protein hormone and a steroid hormone.'
};
