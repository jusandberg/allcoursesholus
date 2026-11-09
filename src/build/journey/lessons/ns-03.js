const {P,C}=require('../lens.js');
const v=(x,y,bg,o)=>P(x,y,18,18,Object.assign({r:'30%',bg},o||{}));
module.exports={
  id:'ns-3',after:11,stage:'cell',kind:'Inside a cell',
  title:'The B-vitamin team at work in a cell',
  token:'#9c8aa2',
  stops:[
    {short:'Not fuel',place:'Cell',view:'cell',organs:['cytoplasm','vessel'],label:[300,400,'start'],form:'spark',
     title:'Vitamins are helpers, not fuel.',
     body:'Vitamins are organic micronutrients. They don’t provide energy themselves; the B vitamins help the cell get energy out of food.',
     lensCaption:'Fuel arriving, B vitamins ready to help',scene:'none',path:[[40,300],[118,300],[220,330]],
     lens:[P(30,40,22,22,{r:'30%',bg:C.blue}),v(60,40,'#9c8aa2'),v(76,58,'#b07aa0')]},
    {short:'B1',place:'Carbohydrate breakdown',view:'cell',organs:['cytoplasm'],label:[300,400,'start'],form:'hex',
     title:'B1 (thiamin): carbohydrate metabolism.',
     body:'Thiamin works in carbohydrate metabolism and the nervous system. Sources: whole or enriched grains, pork, legumes, seeds and nuts.',
     lensCaption:'Thiamin helping break down carbohydrate',scene:'none',path:[[220,330],[300,360]],
     lens:[P(30,46,22,22,{r:'30%',bg:C.blue}),P(54,46,14,14,{r:'30%',bg:'#9fbccb'}),P(70,46,14,14,{r:'30%',bg:'#9fbccb'}),v(42,72,'#9c8aa2')]},
    {short:'B5',place:'Coenzyme A',view:'mito',organs:['mito'],label:[400,420,'start'],form:'pieces',
     title:'B5 (pantothenic acid): part of coenzyme A.',
     body:'Pantothenic acid is part of coenzyme A (CoA), which is central to metabolism.',
     analogy:'Its “anti-stress vitamin” nickname doesn’t mean stress equals B5 deficiency.',
     lensCaption:'Coenzyme A built with B5',scene:'mito',path:[[300,360],[380,340],[430,330]],
     lens:[P(40,50,16,16,{r:'30%',bg:'#71836d'}),v(62,50,'#9c8aa2')]},
    {short:'B2 + B3',place:'Krebs cycle',view:'mito',organs:['krebs','chain','mito'],label:[500,400,'start'],form:'electron',
     title:'B2 and B3 carry the electrons.',
     body:'Riboflavin (B2) forms the coenzymes FAD and FMN for oxidation-reduction reactions. Niacin (B3) forms NAD and NADP, and can be made from tryptophan.',
     lensCaption:'FAD (from B2) and NAD (from B3) loading electrons',scene:'mito',path:[[430,330],[500,285],[600,258]],
     lens:[P(50,50,90,90,{bg:'transparent',border:'5px dashed #71836d'}),v(30,64,'#d3a84b'),v(70,64,'#2f6f8f'),v(50,30,'#2f6f8f')]},
    {short:'B6 + B7',place:'Building and converting',view:'er',organs:['rer','ribo'],label:[450,104,'start'],form:'beads',
     title:'B6 and B7: amino acids and fatty acids.',
     body:'B6 works in amino acid and neurotransmitter metabolism. Biotin (B7) helps carboxylase enzymes in fatty acid, amino acid and glucose pathways, and is needed to make fatty acids.',
     analogy:'Water-soluble isn’t the same as harmless: high-dose B6 can cause nerve toxicity.',
     lensCaption:'Amino acids handled with B6',scene:'none',path:[[600,258],[460,200],[400,150]],
     lens:[P(26,40,14,14,{bg:'#c86d56'}),P(40,40,14,14,{bg:'#6f91a2'}),P(54,40,14,14,{bg:'#d3a84b'}),v(70,58,'#9c8aa2'),v(40,70,'#b07aa0')]}
  ],
  sources:[{label:'Your course: Nutrition: Studies and Applications, Unit 3: Vitamins'},{label:'NIH Office of Dietary Supplements: Vitamin and mineral fact sheets',url:'https://ods.od.nih.gov/factsheets/list-VitaminsMinerals/'}],
  scope:'A simplified picture. Each B vitamin works in many reactions; one place is shown for each.'
};
