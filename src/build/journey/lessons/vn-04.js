const {P,C}=require('../lens.js');
const ros=(x,y,o)=>P(x,y,14,14,Object.assign({r:'30%',bg:'#d9443a'},o||{}));
const cmp=(x,y,bg,o)=>P(x,y,16,16,Object.assign({r:'4px',bg},o||{}));
module.exports={
  id:'vn-4',after:12,stage:'cell',kind:'Inside a liver cell',
  title:'Free radicals and cytochrome P450 in a cell',
  token:'#d9443a',
  stops:[
    {short:'Free radicals',place:'Mitochondria',view:'mito',organs:['mito','chain'],label:[560,225,'start'],form:'spark',
     title:'Free radicals are part of normal biology.',
     body:'Reactive oxygen species form during normal mitochondrial metabolism and immune defence. Radiation, smoking, pollution or intense exercise can increase exposure.',
     lensCaption:'Reactive oxygen species (red) from a mitochondrion',scene:'mito',path:[[640,258],[560,300]],
     lens:[ros(30,30),ros(54,24),ros(72,40)]},
    {short:'Balance',place:'Cell',view:'cell',organs:['cytoplasm'],label:[300,400,'start'],form:'spark',
     title:'Oxidative stress is an imbalance.',
     body:'Cells use antioxidant enzymes and compounds from food to regulate oxidative balance. The body doesn’t need every free radical quenched.',
     analogy:'A food’s lab antioxidant score doesn’t predict a clinical effect.',
     lensCaption:'Antioxidants (green) balancing reactive species',scene:'none',path:[[560,300],[300,380]],
     lens:[ros(30,40),P(42,40,16,16,{bg:'#71836d'}),ros(64,60,{o:.5}),P(76,60,16,16,{bg:'#71836d'})]},
    {short:'P450',place:'Liver cell',view:'cell',organs:['cytoplasm'],label:[300,400,'start'],form:'single',
     title:'Cytochrome P450 transforms compounds.',
     body:'Cytochrome P450 enzymes, prominent in the liver, oxidize many medications, environmental compounds and the body’s own molecules.',
     lensCaption:'A compound (grey) being changed by P450 (purple)',scene:'none',path:[[40,300],[118,300],[300,380],[400,200]],
     lens:[P(40,50,30,30,{r:'40%',bg:'#9c8aa2'}),cmp(66,50,'#a9b0b4')]},
    {short:'Two outcomes',place:'Liver cell',view:'cell',organs:['cytoplasm','vessel'],label:[300,400,'start'],form:'single',
     title:'Detoxify or bioactivate.',
     body:'The change may make a compound easier to conjugate and excrete. It can also activate a procarcinogen or make a reactive metabolite. So it’s biotransformation, not simply a cleanse.',
     analogy:'Food interactions with these enzymes can change medication levels.',
     lensCaption:'One compound made easier to excrete, another made reactive',scene:'none',path:[[400,200],[200,300],[118,300],[40,300]],
     lens:[cmp(30,40,'#9fbccb'),cmp(46,40,'#9fbccb'),ros(70,60)]}
  ],
  sources:[{label:'Your course: Vegetarian Nutrition, Lesson 4: Carbohydrates'},{label:'NCBI Bookshelf: Biochemistry, Cytochrome P450',url:'https://www.ncbi.nlm.nih.gov/books/NBK470447/'}],
  scope:'A simplified picture of one liver cell.'
};
