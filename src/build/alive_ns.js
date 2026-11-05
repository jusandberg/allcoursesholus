// Rebuilds the Nutrition: Studies and Applications course (data/ns.js) from Juliana's real course page (alive-academy.html)
// and her official lesson tests (officialQuizNPool). Lesson 10 comes from build/ns10.json (checked answers, not an official key).
const {chromium}=require('playwright');const fs=require('fs');
const OUT='/tmp/claude-0/hub/dist/courses/player/data/ns.js';
(async()=>{
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});const p=await b.newPage();
await p.goto('file:///tmp/claude-0/hub/dist/courses/alive-academy.html');await p.waitForTimeout(1500);
const data=await p.evaluate(()=>{
  const T=e=>(e?e.textContent:'').replace(/\s+/g,' ').trim();
  const out={};
  units.forEach(u=>{
    const id=u.id;const steps=[];
    const secs=[...document.querySelectorAll('section[id^="u'+id+'-sec-"]')];
    secs.forEach((sec,si)=>{
      const eb=T(sec.querySelector('.eyebrow'));const h=T(sec.querySelector('h2'));
      if(/ASSESS|TEST|FLASH|QUIZ/i.test(eb)||/test yourself|flashcard/i.test(h)||sec.querySelector('.tab-row'))return;
      const c=sec.cloneNode(true);
      const sid='ns'+id+'-'+si;
      // visual from flip cards / flow stages / step items
      let visual=null;
      const pick=(sel,kind)=>{const els=[...c.querySelectorAll(sel)];if(els.length<2||visual)return;
        const items=els.map(el=>{const d=el.querySelector('.detail,p,small');const det=T(d);const lab=T(el.querySelector('h4,h3,b,strong,.word,.num+*'))||T(el).replace(det,'').trim();return {label:lab.slice(0,80),detail:det||''};}).filter(i=>i.label);
        if(items.length>=2&&items.some(i=>i.detail)){visual={kind,title:h,items:items.slice(0,10)};els.forEach(e=>e.remove());}};
      pick('.flip-card','tiles');pick('.flow-stage','flow');pick('.step-item','flow');pick('.evid-card','tiles');
      // toggles -> explore
      let explore=null;
      c.querySelectorAll('.toggle-group,.toggle-wrap').forEach(g=>{const btns=[...g.querySelectorAll('.toggle-btn')],cons=[...g.querySelectorAll('.toggle-content,.toggle-view')];
        if(btns.length&&cons.length){explore=explore||{type:'explore',prompt:'Open each one to compare.',panels:[]};btns.forEach((bt,j)=>{if(cons[j])explore.panels.push({label:T(bt),text:T(cons[j])});});}
        g.remove();});
      // quick checks -> choice
      const checks=[...c.querySelectorAll('.mini-check')].map(m=>{const divs=[...m.children].filter(x=>!x.classList.contains('options')&&!x.classList.contains('mini-feedback'));
        const prompt=T(divs[1]||divs[0]);const opts=[...m.querySelectorAll('.mini-opt')].map(o=>({label:T(o),correct:o.dataset.correct==='true',feedback:''}));
        m.remove();return opts.length?{type:'choice',prompt,options:opts}:null;}).filter(Boolean);
      c.querySelectorAll('.eyebrow,h2,.mark-btn,button,script,style,.anim,svg,canvas,input,select,.link-row').forEach(e=>e.remove());
      c.querySelectorAll('*').forEach(e=>{[...e.attributes].forEach(a=>{if(a.name!=='class'&&a.name!=='colspan'&&a.name!=='rowspan')e.removeAttribute(a.name);});});
      // unwrap layout divs into plain blocks
      let html=c.innerHTML.replace(/<div class="(mineral-note|big-idea|mantra)[^"]*">/g,'<p class="note"><b>Key idea:</b> ').replace(/<\/?(div|span)[^>]*>/g,m=>m.startsWith('</div')?'</p>':m.startsWith('<div')?'<p>':'');
      html=html.replace(/<p>\s*<\/p>/g,'').replace(/<p>\s*<p>/g,'<p>').replace(/<\/p>\s*<\/p>/g,'</p>').replace(/<p>(\s*<(h3|h4|ul|ol|table)[\s\S]*?<\/\2>\s*)<\/p>/g,'$1').replace(/\s+/g,' ').trim();
      const txt=html.replace(/<[^>]+>/g,'').trim();
      steps.push({id:sid,chapter:h,title:h,html:txt.length>20?html:'',visual});
      if(!txt||txt.length<=20){if(!visual){steps[steps.length-1].html='<p>'+h+'</p>';}}
      if(explore&&explore.panels.length)steps.push({id:sid+'-x',title:'Explore: '+h,teach:[],act:explore});
      checks.forEach((a,j)=>steps.push({id:sid+'-q'+j,title:'Quick check',teach:[],act:a}));
    });
    let fl=[];try{fl=eval('flash'+id+'Data')}catch(e){}
    const flashcards=(fl||[]).map(c=>Array.isArray(c)?{front:c[0],back:c[1]}:{front:c.front||c.q||c.term||'',back:c.back||c.a||c.def||''}).filter(c=>c.front&&c.back);
    let pool=[];try{pool=eval('officialQuiz'+id+'Pool')}catch(e){}
    const quiz=pool.map(q=>({q:q.q,o:q.opts,a:q.correct,e:q.explain||''}));
    out[id]={title:u.title,steps,flashcards,quiz};
  });return out;});
await b.close();
const tidy=h=>h.replace(/<p>((?:(?!<\/p>).)*?)<\/p>/g,(m,inner)=>/\b(click|toggle|tap|hover|drag)\b/i.test(inner.replace(/<[^>]+>/g,''))&&inner.replace(/<[^>]+>/g,'').length<160?'':m).replace(/\s*(Memory hook|Tap|Click)[^.<]*:\s*(<\/p>)?$/i,'$2');
Object.values(data).forEach(U=>U.steps.forEach(s=>{if(s.html)s.html=tidy(s.html).replace(/\s*(Click|Tap) (each|on|the)[^.:<]*[.:]/g,'');}));
const nice=t=>t.replace(/^Unit \d+ · /,'').replace(/ [+&] /g,' and ').replace('Carbs','Carbohydrates');
const lessons=[];
for(let n=1;n<=13;n++){
  if(data[n]){const U=data[n];lessons.push({n,title:nice(U.title),kicker:'Lesson '+n+' of your course, with your official Lesson '+n+' Test.',steps:U.steps,flashcards:U.flashcards,quiz:U.quiz,perStepChapter:false});}
  else if(n===10){const L10=JSON.parse(fs.readFileSync('/tmp/claude-0/hub/build/ns10.json','utf8'));lessons.push({n,title:L10.title,kicker:L10.kicker,steps:[{id:'ns10-0',chapter:'Lesson 10',title:L10.title,html:L10.html}],flashcards:[],quiz:L10.quiz});}
}
const course={id:'ns',num:2,name:'Nutrition: Studies and Applications',area:'Nutrition science',lessons};
fs.writeFileSync(OUT,'window.HOLUS_DATA=window.HOLUS_DATA||{};window.HOLUS_DATA["ns"]='+JSON.stringify(course).replace(/<\/script/gi,'<\\/script')+';\n');
lessons.forEach(l=>console.log(l.n,l.title,'steps',l.steps.length,'acts',l.steps.filter(s=>s.act).length,'vis',l.steps.filter(s=>s.visual).length,'cards',l.flashcards.length,'quiz',l.quiz.length));
})();
