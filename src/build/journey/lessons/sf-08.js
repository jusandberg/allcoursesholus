const {P,C}=require('../lens.js');
const ros=(x,y,o)=>P(x,y,14,14,Object.assign({r:'30%',bg:'#d9443a'},o||{}));
const ax=(x,y,bg)=>P(x,y,16,16,{bg});
module.exports={
  id:'sf-8',after:10,stage:'cell',kind:'Inside a muscle cell',
  title:'Vitamins, energy and antioxidants in a muscle cell',
  token:'#9c8aa2',
  stops:[
    {short:'B vitamins',place:'Mitochondria',view:'mito',organs:['mito','krebs'],label:[500,400,'start'],form:'spark',
     title:'B vitamins help release energy.',
     body:'The B vitamins take part in energy metabolism, red blood cell formation, amino acid metabolism and DNA synthesis. Each has its own role.',
     analogy:'Most water-soluble vitamins aren’t stored much; B12 is an important exception.',
     lensCaption:'B vitamins (purple) working with the Krebs cycle',scene:'mito',path:[[300,360],[455,330],[500,285]],
     lens:[P(50,50,90,90,{bg:'transparent',border:'5px dashed #71836d'}),P(30,64,16,16,{r:'30%',bg:'#9c8aa2'}),P(70,64,16,16,{r:'30%',bg:'#9c8aa2'})]},
    {short:'Exercise',place:'Mitochondria',view:'mito',organs:['mito','chain'],label:[560,225,'start'],form:'spark',
     title:'Exercise makes reactive oxygen species.',
     body:'Exercise increases reactive oxygen species. At high levels they can damage tissue, but they also act as signals for training adaptation.',
     lensCaption:'Reactive oxygen species (red) from a working mitochondrion',scene:'mito',path:[[500,285],[640,258]],
     lens:[ros(30,30),ros(54,24),ros(72,40),ros(40,60,{o:.6})]},
    {short:'Antioxidants',place:'Cell',view:'cell',organs:['cytoplasm','membrane'],label:[300,400,'start'],form:'spark',
     title:'Antioxidant systems keep the balance.',
     body:'Food-based antioxidant systems include vitamins C and E, carotenoids, selenium-dependent enzymes and many phytochemicals.',
     lensCaption:'Antioxidants (green, orange) meeting reactive species',scene:'none',path:[[640,258],[400,460],[200,420]],
     lens:[ros(30,40),ax(42,40,'#71836d'),ros(60,62),ax(72,62,'#e8a04a'),ros(50,24,{o:.4})]},
    {short:'Big doses',place:'Muscle fibres',view:'cell',organs:['muscle'],label:[470,560,'start'],form:'single',
     title:'More isn’t automatically better.',
     body:'Very large antioxidant doses may interfere with some training signals. They don’t replace recovery, sleep and enough energy. With adequate status, extra vitamins don’t create extra energy.',
     analogy:'Fatigue is nonspecific: don’t self-diagnose it as a vitamin deficiency.',
     lensCaption:'Training signals reaching the muscle fibres',scene:'muscle',path:[[200,420],[470,511]],
     lens:[ros(30,40,{o:.6}),P(56,50,22,13,{r:'4px',bg:C.gold,border:'2px solid #fff'})]}
  ],
  sources:[{label:'Your course: Sports & Fitness Nutrition, Lesson 8: Vitamins (Nutrition for Sport and Exercise, 4th ed.)'},{label:'NIH Office of Dietary Supplements: Dietary Supplements for Exercise and Athletic Performance',url:'https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-HealthProfessional/'}],
  scope:'A simplified picture of one muscle cell.'
};
