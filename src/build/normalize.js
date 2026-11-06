const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const D=path.join(__dirname,'..','dist','courses')+'/';const OUT=path.join(D,'player','data')+'/';fs.mkdirSync(OUT,{recursive:true});
const pad=n=>String(n).padStart(2,'0');
const opts=o=>(o||[]).map(x=>typeof x==='string'?{label:x}:{label:x.label||x.text||'',correct:!!x.correct,feedback:x.feedback||''});
function fromModules(L){const steps=[];
  (L.modules||[]).forEach(mod=>{(mod.moments||[]).forEach((m,i)=>{const a=m.activity;
    steps.push({id:m.id,chapter:i===0?mod.title:null,chapterSummary:i===0?mod.summary||null:null,title:m.title,highYield:m.highYield,teach:m.teaching||[],keyPoints:m.keyPoints||[],visual:m.visual,mnemonic:m.mnemonic,goodToKnow:m.goodToKnow,
      act:a&&a.options?{type:'choice',prompt:a.prompt,options:opts(a.options)}:null});});
    const isFlow=k=>/flow|sequence|process|timeline|pathway|chain|route|path|daymap|vertical|ladder/.test(k||'')&&!/cycle/.test(k||'');
    const ok=v=>v&&v.items&&v.items.length>=3&&v.items.length<=6&&v.items.every(i=>(i.label||i.title)&&(i.detail||i.text));
    const vs=(mod.moments||[]).map(m=>m.visual).filter(ok);const fv=vs.find(v=>isFlow(v.kind));
    if(fv)steps.push({id:mod.id+'-order',title:'Put it in order: '+(fv.title||mod.title),teach:[],act:{type:'order',prompt:'Drag the steps into the right order, top to bottom.',items:fv.items.map(i=>({label:i.label||i.title,detail:i.detail||i.text}))}});
    const v=vs.find(v=>!isFlow(v.kind)&&v.items.length<=5);
    if(v){const its=v.items.map((it,i)=>({label:it.label||it.title,category:i,feedback:(it.label||it.title)+': '+(it.detail||it.text)}));const ord=its.map((_,i)=>i).sort((a,b)=>((a*7+3)%its.length)-((b*7+3)%its.length));
      steps.push({id:mod.id+'-match',title:'Match it: '+(v.title||mod.title),teach:[],act:{type:'sort',variant:'match',prompt:'Drag each term onto what it describes.',categories:v.items.map(it=>it.detail||it.text),items:ord.map(i=>its[i])}});}
  });return steps;}
function write(id,course){fs.writeFileSync(OUT+id+'.js','window.HOLUS_DATA=window.HOLUS_DATA||{};window.HOLUS_DATA['+JSON.stringify(id)+']='+JSON.stringify(course).replace(/<\/script/gi,'<\\/script')+';\n');console.log(id,course.lessons.length,'lessons',(fs.statSync(OUT+id+'.js').size/1024|0)+'KB');}
// Lessons rebuilt from the Nutrition Counseling textbook live in build/nc-book/lNN.json and replace the older general lessons.
function ncBook(L){const f=path.join(__dirname,'nc-book','l'+L.n+'.json');if(!fs.existsSync(f))return L;const B=JSON.parse(fs.readFileSync(f,'utf8'));
 return {...L,kicker:B.kicker||L.kicker,perStepChapter:true,steps:B.steps.map(s=>({id:s.id,chapter:s.title,title:s.title,teach:s.teach,act:s.act.type==='choice'?{...s.act,options:opts(s.act.options)}:s.act})),flashcards:B.flashcards,quiz:B.quiz};}
(async()=>{
 // NC
 global.window={};eval(fs.readFileSync(D+'nutrition-counseling-education/interactive-content.js','utf8'));
 const J=window.NC_JOURNEYS;
 write('nc',{id:'nc',num:5,name:'Nutritional Counselling',area:'Counselling practice',lessons:Object.keys(J).sort((a,b)=>+a.split('-')[1]-+b.split('-')[1]).map(k=>{const L=J[k];return {n:+k.split('-')[1],title:L.title,kicker:L.kicker,perStepChapter:true,
   steps:L.steps.map(s=>{const act={type:s.type,prompt:s.prompt};if(s.type==='choice')act.options=opts(s.options);if(s.type==='sort'){act.categories=s.categories;act.items=s.items;}if(s.type==='explore')act.panels=s.panels;if(s.type==='number')Object.assign(act,{answer:s.answer,tolerance:s.tolerance,unit:s.unit,explanation:s.explanation});return {id:s.id,chapter:s.title,title:s.title,teach:s.teach||[],act};}),flashcards:[],quiz:[]};}).map(ncBook)});
 for(const [id,dir,G,num,name,area] of [['ap','anatomy-physiology','AP_LEARNING',6,'Anatomy & Physiology','Body systems'],['vn','vegetarian-nutrition','VN_LEARNING',7,'Vegetarian Nutrition','Evidence-informed practice']]){
   global.window={};for(const f of fs.readdirSync(D+dir+'/learning').sort())if(f.startsWith('lesson'))eval(fs.readFileSync(D+dir+'/learning/'+f,'utf8'));
   const g=window[G];
   let QZ={};if(id==='vn'){eval(fs.readFileSync(D+dir+'/course-data.js','utf8'));const note={'course-intended':'This is the answer the course appears to expect.','ambiguous':'This question is worded ambiguously; this is the most defensible answer.','source-error':'The course source has an error here; the evidence-based answer is shown.'};
     (window.VN_COURSE.lessons||[]).forEach(l=>{QZ[l.number]=(l.questions||[]).filter(q=>Number.isInteger(q.answer)).map(q=>({q:q.prompt,o:q.options,a:q.answer,e:[q.rationale,q.correction,note[q.answerStatus]].filter(Boolean).join(' ')}));});}
   write(id,{id,num,name,area,lessons:Object.keys(g).sort((a,b)=>+a.split('-')[1]-+b.split('-')[1]).map(k=>{const L=g[k];const n=+k.split('-')[1];return {n,title:L.title,kicker:(L.outcomes||[])[0]||'',duration:L.duration,steps:fromModules(L),flashcards:(L.flashcards||[]).map(c=>({front:c.front,back:c.back})),quiz:QZ[n]||[],caseStudy:L.caseStudy||null};})});}
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});const p=await b.newPage();
 // NHF
 await p.goto('http://localhost:8790/courses/natural-health-fundamentals/',{waitUntil:'networkidle'});
 const nh=await p.evaluate(()=>JSON.parse(JSON.stringify(NHF_COURSE.lessons)));
 write('nh',{id:'nh',num:1,name:'Natural Health Fundamentals',area:'Holistic health',lessons:nh.map(L=>({n:L.number,title:L.title,kicker:L.lede||'',steps:fromModules(L),flashcards:(L.flashcards||[]).map(c=>({front:c.prompt||c.front,back:c.answer||c.back})),
   quiz:(L.quiz||[]).filter(q=>Number.isInteger(q.answer)).map(q=>({q:q.prompt,o:q.options,a:q.answer,e:q.evidenceNote||''})),caseStudy:L.caseStudy||null}))});
 // Nutrition studies
 await p.goto('http://localhost:8790/courses/nutrition-studies/index.html',{waitUntil:'networkidle'});
 const ns=await p.evaluate(()=>JSON.parse(JSON.stringify(units)));
 const clean=h=>String(h||'').replace(/<img[^>]*>/gi,'').replace(/<script[\s\S]*?<\/script>/gi,'').replace(/ on\w+="[^"]*"/gi,'');
 0&&write('ns',{id:'ns',num:2,name:'Nutrition: Studies and Applications',area:'Nutrition science',lessons:Object.keys(ns).sort((a,b)=>a-b).map(k=>{const U=ns[k];return {n:+k,title:U.title,kicker:U.subtitle||String(U.intro||'').replace(/<[^>]+>/g,''),
   steps:(U.lessons||[]).map((l,i)=>({id:'ns'+k+'-'+i,chapter:l[0],chapterSummary:l[1],title:l[0],html:clean(l[2])})),
   flashcards:(U.cards||[]).map(c=>({front:c[0],back:c[1]})),quiz:(U.questions||[]).filter(q=>q.a!=null&&!q.image&&!q.unscored).map(q=>({q:q.q,o:q.o,a:q.a,e:q.e||''}))};})});
 // Sports
 await p.goto('http://localhost:8790/courses/sports-fitness-nutrition.html',{waitUntil:'networkidle'});
 const sf=await p.evaluate(()=>JSON.parse(JSON.stringify({U:UNITS,D:DATA})));
 const e=s=>String(s==null?'':s);
 const blockHtml=bl=>{switch(bl.t){case 'h':return '<h3>'+e(bl.h)+'</h3>';case 'p':return '<p>'+e(bl.h)+'</p>';case 'call':return '<div class="callout">'+e(bl.h)+'</div>';
   case 'facts':return '<dl class="facts">'+bl.items.map(i=>'<div><dt>'+e(i[0])+'</dt><dd>'+e(i[1])+'</dd></div>').join('')+'</dl>';
   case 'table':return '<div class="tbl"><table><thead><tr>'+bl.head.map(h=>'<th>'+e(h)+'</th>').join('')+'</tr></thead><tbody>'+bl.rows.map(r=>'<tr>'+r.map(c=>'<td>'+e(c)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
   case 'tabs':return bl.items.map(i=>'<div class="tabblk"><b>'+e(i.label)+'</b>'+e(i.h)+'</div>').join('');
   case 'mnem':return '<div class="mn-html"><span>Remember it</span>'+e(bl.h)+'</div>';default:return '';}};
 write('sf',{id:'sf',num:3,name:'Sports & Fitness Nutrition',area:'Performance',lessons:Object.keys(sf.U).sort((a,b)=>a-b).map(k=>{const U=sf.U[k];const deep=sf.D.deep[k]||[];const steps=[];
   U.sections.forEach((s,si)=>{const notes=(s.notes||[]).map(i=>deep[i]).filter(Boolean);
     const vis=s.blocks.find(b=>b.t==='steps'||b.t==='flip');let visual=null;
     if(vis&&vis.t==='steps')visual={title:s.title,kind:'sequence',items:vis.steps.map(x=>({label:x.t,detail:x.b}))};
     if(vis&&vis.t==='flip')visual={title:s.title,kind:'comparison',items:vis.items.map(x=>({label:x[0],detail:x[1]}))};
     const blocksHtml=s.blocks.map(blockHtml).filter(Boolean);
     const mn=s.blocks.find(b=>b.t==='mnem');
     steps.push({id:'sf'+k+'-'+si,chapter:s.title,title:s.title,html:notes.length?notes.map(n=>'<h3>'+e(n[0])+'</h3><p>'+e(n[1])+'</p>').join(''):blocksHtml.join(''),visual,blocksHtml:notes.length?blocksHtml:[]});
     s.blocks.filter(b=>b.t==='sort').forEach((bl,j)=>steps.push({id:'sf'+k+'-'+si+'-s'+j,title:bl.prompt||'Sort it',teach:[],act:{type:'sort',prompt:bl.prompt||'Sort each card.',categories:bl.cats,items:bl.items.map(i=>({label:i[0],category:i[1],feedback:i[2]||''}))}}));
     s.blocks.filter(b=>b.t==='acc'||b.t==='reveal').forEach((bl,j)=>steps.push({id:'sf'+k+'-'+si+'-x'+j,title:'Explore: '+s.title,teach:[],act:{type:'explore',prompt:bl.t==='reveal'?bl.q:'Open each question.',panels:bl.t==='reveal'?[{label:'Show the answer',text:String(bl.a).replace(/<[^>]+>/g,'')}]:bl.items.map(i=>({label:i[0],text:String(i[1]).replace(/<[^>]+>/g,'')}))}}));
     (s.qc||[]).forEach((q,j)=>steps.push({id:'sf'+k+'-'+si+'-q'+j,title:'Quick check',teach:[],act:{type:'choice',prompt:q.q,options:q.o.map((o,oi)=>({label:o,correct:oi===q.a,feedback:q.w||''}))}}));
   });
   if((U.cases||[]).length)steps.push({id:'sf'+k+'-cases',chapter:'Apply it',title:'Case questions',teach:[],act:{type:'explore',prompt:'Think through each case, then open it to compare.',panels:U.cases.map(c=>({label:c[0],text:c[1]}))}});
   return {n:+k,title:U.title,kicker:U.lede||U.blurb||'',steps,flashcards:(U.cards||[]).map(c=>({front:c[0],back:c[1]})),quiz:(sf.D.quiz[k]||[]).filter(q=>q.a!=null).map(q=>({q:q.q,o:q.o,a:q.a,e:q.e||''}))};})});
 // Staying healthy (companion)
 await p.goto('http://localhost:8790/courses/staying-healthy-nutrition.html',{waitUntil:'networkidle'});
 const sh=await p.evaluate(()=>JSON.parse(JSON.stringify(TOPICS)));
 write('sh',{id:'sh',num:4,name:'Staying Healthy with Nutrition',area:'Everyday health',companion:true,lessons:sh.map((t,i)=>({n:i+1,title:t.title,kicker:t.hint,part:t.partLabel,comingSoon:true,steps:[],flashcards:[],quiz:[]}))});
 await b.close();
})();
