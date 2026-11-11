(function(){
'use strict';
const $=(s,r=document)=>r.querySelector(s);
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let ctl=null;
const FIG=s=>s&&s.id&&(window.HOLUS_FIGS||{})[s.id];
async function start(cid,num,opts){
opts=opts||{};
if(ctl){ctl.abort();clearTimeout(ctl._auto);}
const ac=new AbortController();ctl=ac;const sig={signal:ac.signal};
const app=$('#hp'),stage=$('#stage'),bar=$('#bar'),xpEl=$('#xp'),live=$('#live'),close=$('#close');
let next=$('#next'),back=$('#back');
next.replaceWith(next=next.cloneNode(true));back.replaceWith(back=back.cloneNode(true));
let menuBtn=$('#hp-menu');if(!menuBtn){menuBtn=document.createElement('button');menuBtn.id='hp-menu';menuBtn.type='button';menuBtn.className='hp-menu';menuBtn.setAttribute('aria-label','Show all moments in this lesson');menuBtn.innerHTML='<span aria-hidden="true">☰</span><b>Moments</b>';$('.hp-top').insertBefore(menuBtn,$('#xp'));}
menuBtn.replaceWith(menuBtn=menuBtn.cloneNode(true));
let sheet=$('#hp-sheet');if(!sheet){sheet=document.createElement('div');sheet.id='hp-sheet';sheet.className='sheet';sheet.hidden=true;sheet.setAttribute('role','dialog');sheet.setAttribute('aria-modal','true');sheet.setAttribute('aria-label','Lesson moments');$('#hp').appendChild(sheet);}
sheet.hidden=true;
next.style.display='';back.style.display='';next.disabled=false;back.disabled=true;next.textContent='Begin';
stage.innerHTML='';bar.style.width='0%';
const params={has:k=>k==='scene'&&opts.scene!=null,get:()=>opts.scene};
const C=(window.HOLUS_COURSES||{})[cid];
let L=null;
const mode=opts.mode||null;
try{L=C&&(num===0?await C.getAll(mode,opts.exam):await C.get(num));}catch(e){console.error(e);}
if(L&&mode){L=Object.assign({},L,{title:L.examTitle||(mode==='cards'?'Flashcards':'Test practice')+(num?': '+L.title:''),steps:[],caseStudy:null,mode,flashcards:mode==='cards'?L.flashcards:[],quiz:mode==='quiz'?L.quiz:[],nextTitle:null,kicker:L.examKicker||(mode==='cards'?'Flip each card, then mark whether you knew it. Cards you miss come back until you know them.':'Questions from your course tests, one at a time, with the answer explained.')});if(!(L.flashcards.length||L.quiz.length))L=null;}
if(!L){stage.innerHTML='<section class="scene on dark"><div class="inner"><h1 class="h2">This lesson isn’t available yet.</h1><p class="lede" style="opacity:1;animation:none">Go back to your course and pick another lesson.</p></div></section>';next.style.display='none';back.style.display='none';return;}
close.href=opts.closeHref||L.courseHome;
const steps=L.steps;
const store='holus-player-'+cid+'-'+num+(mode?'-'+mode:'')+(opts.exam?'-exam'+opts.exam:'');
let st={i:0,xp:0,res:{},cards:{}};
try{const s=JSON.parse(localStorage.getItem(store)||'null');if(s)st=Object.assign(st,s);}catch(e){}
if(num===0&&mode==='quiz'&&!opts.exam)st.quiz=null;
/* scenes */
const scenes=[{t:'intro'}];
const JRS=!mode&&window.HolusJourney?Object.values(window.HOLUS_JOURNEYS||{}).filter(j=>j.id===cid+'-'+num||String(j.id).indexOf(cid+'-'+num+'.')===0):[];const JR=JRS[0]||null;
steps.forEach((s,k)=>{
  if(s.chapter||L.perStepChapter)scenes.push({t:'chapter',s,k});
  if((s.teach&&s.teach.length)||s.html)scenes.push({t:'teach',s,k});
  if(FIG(s)||s.visual||s.mnemonic||(s.keyPoints&&s.keyPoints.length)||(s.blocksHtml&&s.blocksHtml.length))scenes.push({t:'see',s,k});
  if(s.act)scenes.push({t:'act',s,k});
  JRS.forEach(J=>{if(k===Math.min(J.after||0,steps.length-1))scenes.push({t:'journey',J});});
});
if(L.caseStudy)scenes.push({t:'case'});
if(L.flashcards&&L.flashcards.length)scenes.push({t:'cards'});
if(L.quiz&&L.quiz.length)scenes.push({t:'quiz'});
scenes.push({t:'finish'});
const darkTypes=['intro','chapter','finish','case'];
function save(){try{localStorage.setItem(store,JSON.stringify(st));
  const all=JSON.parse(localStorage.getItem('holus-player-index')||'{}');
  all[cid+'-'+num]={course:L.courseName,courseId:cid,lesson:num,title:L.title,at:Date.now(),pct:Math.round(st.i/(scenes.length-1)*100),xp:st.xp};
  localStorage.setItem('holus-player-index',JSON.stringify(all));}catch(e){}}
function paintXP(){xpEl.innerHTML='<b>+'+st.xp+'</b> XP';}
function addXP(n){if(!n)return;st.xp+=n;paintXP();xpEl.classList.remove('pop');void xpEl.offsetWidth;xpEl.classList.add('pop');save();}
paintXP();
let cur=-1,el=null,auto=null;
function go(i){
  if(ac.signal.aborted)return;
  clearTimeout(auto);
  i=Math.max(0,Math.min(scenes.length-1,i));
  const sc=scenes[i];const dark=darkTypes.includes(sc.t);
  app.classList.toggle('dark-mode',dark);app.classList.toggle('light-mode',!dark);
  const n=document.createElement('section');n.className='scene'+(dark?' dark':'');
  n.innerHTML=render(sc);stage.appendChild(n);
  const old=el;el=n;cur=i;st.i=i;st.max=Math.max(st.max||0,i);save();
  requestAnimationFrame(()=>requestAnimationFrame(()=>{n.classList.add('on');if(old){old.classList.remove('on');old.classList.add('off');setTimeout(()=>old.remove(),650);}}));
  bar.style.width=Math.round(i/(scenes.length-1)*100)+'%';paintMarks();
  bar.parentNode.setAttribute('aria-valuenow',Math.round(i/(scenes.length-1)*100));
  back.disabled=i===0;
  wire(sc,n);
  const h=n.querySelector('h1,h2');if(h){h.setAttribute('tabindex','-1');setTimeout(()=>h.focus({preventScroll:true}),90);}
}
function figure(f){
  const N=f.items.length;
  return `<figure class="vis v-fig${f.tap?' fg-tap':''}" data-n="${N}"><figcaption><span>${esc(f.title||'')}</span><em class="vcount" aria-live="polite">Tap to explore · 0/${N}</em></figcaption><div class="fg-art"><svg viewBox="${f.vb}" role="img" aria-label="${esc(f.alt||f.title||'')}">${f.svg}</svg></div><div class="fg-chips">${f.items.map((it,j)=>`<button class="vn" data-j="${j}" style="--d:${j*80}ms">${it.c?`<i style="background:${it.c}"></i>`:''}${esc(it.label)}</button>`).join('')}</div><div class="vd" aria-live="polite"><p class="vd-h">${esc(f.hint||'Tap a label, or tap the picture.')}</p></div><template>${f.items.map(it=>`<div><b>${esc(it.label)}</b><p>${esc(it.detail)}</p></div>`).join('')}</template></figure>`;
}
const stepK=(k,lab)=>`<div class="step-k"><i>${k+1}</i>${lab}</div>`;
const fam=k=>{k=k||'';if(/cycle/.test(k))return 'cycle';if(/flow|sequence|process|timeline|pathway|chain|route|path|daymap|bridge|vertical|ladder|equation/.test(k))return 'flow';if(/hub|map|concept|radial|network|connection|system|framework|toolkit|contribution|triad|venn/.test(k))return 'hub';if(/layer|stack|depth|nested|hierarch|rings|scale/.test(k))return 'layers';return 'tiles';};
function visual(v){
  if(!v||!v.items||!v.items.length)return '';
  const its=v.items.map(it=>({l:it.label||it.title||'',d:it.detail||it.text||''}));
  let f=fam(v.kind);if((f==='cycle'||f==='hub')&&(its.length<3||its.length>8))f='flow';
  const cap=`<figcaption><span>${esc(v.title||'')}</span><em class="vcount" aria-live="polite">Tap to explore · 0/${its.length}</em></figcaption>`;
  if(f==='flow'){
    return `<figure class="vis v-flow" data-n="${its.length}">${cap}<ol class="vf">${its.map((it,j)=>`<li style="--d:${j*120}ms"><button class="vn" data-j="${j}" aria-expanded="false"><i>${j+1}</i><b>${esc(it.l)}</b></button><p>${esc(it.d)}</p></li>`).join('')}</ol></figure>`;
  }
  if(f==='cycle'||f==='hub'){
    const N=its.length,R=39;
    const pos=its.map((_,j)=>{const a=(j/N)*2*Math.PI;return [50+R*Math.sin(a),50-R*Math.cos(a)];});
    const lines=f==='hub'?pos.map(([x,y])=>`<line x1="50" y1="50" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`).join(''):`<circle cx="50" cy="50" r="${R}" fill="none"/>`+pos.map(([x,y],j)=>{const a=((j+.5)/N)*2*Math.PI;const ax=50+R*Math.sin(a),ay=50-R*Math.cos(a);const deg=a*180/Math.PI+90;return `<path d="M-1.6,-1.6 L1.2,0 L-1.6,1.6" transform="translate(${ax.toFixed(1)} ${ay.toFixed(1)}) rotate(${deg.toFixed(0)})" class="arr"/>`;}).join('');
    return `<figure class="vis v-${f}" data-n="${N}">${cap}<div class="vr"><svg viewBox="0 0 100 100" aria-hidden="true">${lines}</svg><div class="vc"><span>${f==='cycle'?'↻':''}</span><b>${esc(f==='hub'?(v.title||''):'')}</b></div>${its.map((it,j)=>`<button class="vn" data-j="${j}" style="left:${pos[j][0].toFixed(1)}%;top:${pos[j][1].toFixed(1)}%;--d:${j*110}ms">${esc(it.l)}</button>`).join('')}</div><div class="vd" aria-live="polite"><p class="vd-h">Tap any point on the diagram.</p></div><template>${its.map(it=>`<div><b>${esc(it.l)}</b><p>${esc(it.d)}</p></div>`).join('')}</template></figure>`;
  }
  if(f==='layers'){
    return `<figure class="vis v-layers" data-n="${its.length}">${cap}<div class="vl">${its.map((it,j)=>`<button class="vn" data-j="${j}" aria-expanded="false" style="--w:${100-j*(28/Math.max(1,its.length-1))}%;--d:${j*110}ms;--o:${1-j*(.55/Math.max(1,its.length-1))}"><b>${esc(it.l)}</b><span>${esc(it.d)}</span></button>`).join('')}</div></figure>`;
  }
  return `<figure class="vis v-tiles" data-n="${its.length}">${cap}<div class="vt">${its.map((it,j)=>`<button class="vn" data-j="${j}" aria-pressed="false" style="--d:${j*100}ms"><span class="vt-in"><span class="vt-f"><b>${esc(it.l)}</b><small>Tap to flip</small></span><span class="vt-b">${esc(it.d)}</span></span></button>`).join('')}</div></figure>`;
}
function chunks(html){const t=document.createElement('template');t.innerHTML=html;const out=[];let buf=[];
  const flush=()=>{if(buf.length){out.push('<div class="reveal">'+buf.join('')+'</div>');buf=[];}};
  [...t.content.childNodes].forEach(nd=>{if(nd.nodeType===3){if(nd.textContent.trim())buf.push('<p>'+esc(nd.textContent)+'</p>');return;}if(nd.nodeType!==1)return;
    const h=nd.outerHTML;if(/^H[1-6]$/.test(nd.tagName)){flush();buf.push(h);}else{buf.push(h);flush();}});flush();return out.join('');}
function render(sc){
  const s=sc.s;
  if(sc.t==='journey')return `<div class="inner bj-inner"><div class="card bj-card"><div class="step-k"><i>◎</i>${esc(sc.J.kind||'Body tour')}</div><h2 class="h2">${esc(sc.J.title)}</h2><p class="bj-intro">Follow along stop by stop, or press Play. Tap any lit ${sc.J.stage?'part':'organ'} to jump to it.</p><div class="bj-host"></div></div></div>`;
  if(sc.t==='intro'){
    const t=L.title.split(' ');const mid=Math.ceil(t.length/2);
    const checks=steps.filter(x=>x.act&&x.act.type!=='explore').length;
    const mins=L.duration||('About '+Math.max(10,Math.round(steps.length*2.5))+' min');
    return `<div class="orbs"><div class="orb"></div><div class="orb two"></div></div><div class="inner"><p class="eyebrow">${esc(L.courseName)}${num?` · Lesson ${num} of ${L.total}`:' · Whole course'}</p>
    <h1 class="title"><span>${esc(t.slice(0,mid).join(' '))}</span>${t.length>1?`<span>${esc(t.slice(mid).join(' '))}</span>`:''}</h1>
    <p class="lede">${esc(L.kicker||'')}</p>
    <div class="meta">${L.mode?`<span>${L.mode==='cards'?L.flashcards.length+' flashcards':L.quiz.length+' questions'}</span>`:`<span>${steps.length} moments</span>`}${L.mode?'':`<span>${esc(mins)}</span><span>${checks} checks</span>${L.flashcards.length?`<span>${L.flashcards.length} flashcards</span>`:''}`}</div>
    ${st.completed?`<p class="resume done">✓ Completed. Every screen is open, so you can move through freely.</p>`:''}${st.i>0&&!st.completed?`<p class="resume">You were ${Math.round(st.i/(scenes.length-1)*100)}% through. <button class="link" data-resume="${st.i}">Pick up where you left off →</button></p>`:''}</div>`;
  }
  if(sc.t==='chapter'){
    const title=s.chapter||s.title;
    const chapN=steps.slice(0,sc.k+1).filter(x=>x.chapter||L.perStepChapter).length;
    return `<div class="orbs"><div class="orb"></div></div><div class="inner"><p class="chap-n">${String(chapN).padStart(2,'0')}</p><p class="eyebrow">${L.perStepChapter?`Moment ${sc.k+1} of ${steps.length}`:'Part '+chapN}</p><h2 class="h2 big">${esc(title)}</h2>${s.chapterSummary?`<p class="lede" style="animation-delay:.2s">${esc(s.chapterSummary)}</p>`:''}</div>`;
  }
  if(sc.t==='teach'){
    const ps=s.html?chunks(s.html):(s.teach||[]).map(p=>`<p class="reveal">${esc(p)}</p>`).join('');
    return `<div class="inner"><div class="card">${stepK(sc.k,'Learn')}<h2 class="h2">${esc(s.title)}</h2>${s.highYield?`<p class="hy reveal"><span>Key idea</span>${esc(s.highYield)}</p>`:''}<div class="teach${s.html?' rich':''}">${ps}</div></div></div>`;
  }
  if(sc.t==='see'){
    const kp=(s.keyPoints||[]).map((p,j)=>`<li style="--d:${j*120}ms">${esc(p)}</li>`).join('');
    const mn=s.mnemonic?`<button class="mn" aria-expanded="false"><span>Remember it</span><b>${esc(s.mnemonic.cue||s.mnemonic.title)}</b><p>${esc(s.mnemonic.explanation||'')}</p><small>Tap to see why it works</small></button>`:'';
    return `<div class="inner"><div class="card">${stepK(sc.k,'See it')}<h2 class="h2">${esc(s.title)}</h2>${FIG(s)?figure(FIG(s))+(FIG(s).keep?visual(s.visual):''):visual(s.visual)}${kp?`<ul class="kp">${kp}</ul>`:''}${mn}${s.goodToKnow?`<p class="gtk"><b>Good to know</b> ${esc(s.goodToKnow)}</p>`:''}${(s.blocksHtml||[]).length?`<div class="rich blocks">${s.blocksHtml.join('')}</div>`:''}</div></div>`;
  }
  if(sc.t==='quiz'){
    return `<div class="inner"><div class="card"><div class="step-k"><i>✓</i>${L.examTitle?esc(L.examTitle):'Lesson test practice'}</div><h2 class="h2">Test yourself.</h2><p class="hint">${L.examTitle?L.quiz.length+' new questions from your lesson content, one at a time. Your place is saved.':L.quiz.length+' questions from your course test, one at a time.'} <button class="qz-skip" type="button">Skip for now</button></p><div class="qz"></div></div></div>`;
  }
  if(sc.t==='act'){
    const a=s.act;let body='';
    if(a.type==='choice')body=`<div class="opts" role="group" aria-label="Answer options">${a.options.map((o,j)=>`<button class="opt" data-j="${j}"><span class="l">${'ABCDEFG'[j]}</span><span>${esc(o.label)}</span></button>`).join('')}</div><div class="fb" role="status"></div>`;
    else if(a.type==='sort'){const chips=`<div class="chips">${a.items.map((it,j)=>`<button class="chip" data-j="${j}">${esc(it.label)}</button>`).join('')}</div>`,cats=`<div class="cats${a.variant==='match'?' match':''}">${a.categories.map((c,j)=>`<button class="cat" data-c="${j}"><h4>${esc(c)}</h4><span class="sr">Place selected card here</span></button>`).join('')}</div>`;
      body=a.variant==='match'?`<p class="hint">Drag each term onto its description. You can also tap a term, then tap a box.</p>${chips}${cats}<div class="fb" role="status"></div>`:`<p class="hint">Drag each card up into the right box. You can also tap a card, then tap a box.</p>${cats}<div class="fb" role="status"></div>${chips}`;}
    else if(a.type==='explore')body=`<p class="hint">Open each one.</p><div class="panels">${a.panels.map((p,j)=>`<button class="panel-btn" aria-expanded="false" data-j="${j}"><h4>${esc(p.label)}</h4><p>${esc(p.text)}</p></button>`).join('')}</div>`;
    else if(a.type==='number')body=`<form class="num"><label class="sr" for="n-in">Your answer</label><input id="n-in" inputmode="decimal" autocomplete="off" placeholder="0"><span>${esc(a.unit||'')}</span><button class="hp-btn primary" type="submit">Check</button></form><div class="fb" role="status"></div>`;
    else if(a.type==='order'){const n0=a.items.length;let sh=a.items.map((_,j)=>j).sort((x,y)=>((x*5+2)%n0)-((y*5+2)%n0));if(sh.every((v,j)=>v===j))sh.reverse();
      body=`<ol class="ord">${sh.map(j=>`<li class="oi" data-j="${j}"><span class="grip" aria-hidden="true">⋮⋮</span><b>${esc(a.items[j].label)}</b><span class="ob"><button class="mv" data-d="-1" aria-label="Move ${esc(a.items[j].label)} up">↑</button><button class="mv" data-d="1" aria-label="Move ${esc(a.items[j].label)} down">↓</button></span></li>`).join('')}</ol><button class="hp-btn primary chk" type="button">Check order</button><div class="fb" role="status"></div>`;}
    const lab={order:'Put in order',choice:'Check yourself',sort:a.variant==='match'?'Match it':'Sort',explore:'Explore',number:'Calculate'}[a.type]||'Try it';
    return `<div class="inner"><div class="card">${stepK(sc.k,lab)}<p class="prompt">${esc(a.prompt)}</p>${body}</div></div>`;
  }
  if(sc.t==='case'){
    const c=L.caseStudy;
    return `<div class="orbs"><div class="orb"></div></div><div class="inner"><p class="eyebrow">Case study</p><h2 class="h2 big">${esc(c.title||'Put it together')}</h2><p class="lede" style="animation-delay:.15s">${esc(c.scenario||'')}</p>
    <div class="panels dark-panels">${(c.prompts||[]).map((p,j)=>`<div class="cp" style="--d:${300+j*140}ms"><b>${j+1}</b><span>${esc(p)}</span></div>`).join('')}</div>
    ${c.model||c.answer||c.debrief?`<button class="panel-btn reveal-model" aria-expanded="false"><h4>See a model answer</h4><p>${esc(c.model||c.answer||c.debrief)}</p></button>`:'<p class="hint light">Think each one through, or say your answer out loud, before moving on.</p>'}</div>`;
  }
  if(sc.t==='cards'){
    return `<div class="inner"><div class="card">${'<div class="step-k"><i>★</i>Flashcards</div>'}<h2 class="h2">Lock it in.</h2><p class="hint">Tap the card to flip it. Mark how well you knew it.</p>
    <div class="deck"><button class="fc" aria-live="polite"><span class="fc-in"><span class="fc-f"></span><span class="fc-b"></span></span></button></div>
    <div class="fc-row"><span class="fc-n"></span><div><button class="hp-btn ghost fc-again" type="button">Again</button> <button class="hp-btn primary fc-got" type="button">Got it</button></div></div></div></div>`;
  }
  if(sc.t==='finish'){
    const graded=steps.filter(x=>x.act&&x.act.type!=='explore');
    const right=graded.filter(x=>st.res[x.id]&&st.res[x.id].ok).length;
    const known0=Object.values(st.cards).filter(v=>v==='got').length;const pct=graded.length?Math.round(right/graded.length*100):L.mode==='quiz'&&st.quiz&&st.quiz.done?Math.round(st.quiz.score/L.quiz.length*100):L.mode==='cards'&&L.flashcards.length?Math.round(known0/L.flashcards.length*100):100;
    const miss=graded.filter(x=>!(st.res[x.id]&&st.res[x.id].ok));
    const R=2*Math.PI*70;
    const known=Object.values(st.cards).filter(v=>v==='got').length;
    return `<div class="orbs"><div class="orb"></div><div class="orb two"></div></div><div class="inner"><p class="eyebrow">${L.mode?(L.mode==='cards'?'Flashcards':'Test practice')+' complete':'Lesson '+num+' complete'}</p>
    <svg class="ring" viewBox="0 0 170 170" role="img" aria-label="${pct}% right first try"><circle class="bg" cx="85" cy="85" r="70"/><circle class="fg" cx="85" cy="85" r="70" stroke-dasharray="${R}" stroke-dashoffset="${R}" data-to="${R*(1-pct/100)}"/><text x="85" y="98">${pct}%</text></svg>
    <h2 class="h2 big">${pct>=80?'Beautifully done.':pct>=50?'Good progress.':'A solid first pass.'}</h2>
    <div class="stats"><div><b>${st.xp}</b><span>XP earned</span></div><div><b>${right}/${graded.length}</b><span>right first try</span></div>${st.quiz&&st.quiz.done?`<div><b>${st.quiz.score}/${L.quiz.length}</b><span>test practice</span></div>`:''}${L.flashcards.length?`<div><b>${known}/${L.flashcards.length}</b><span>cards known</span></div>`:''}</div>
    ${L.nextTitle?`<a class="upnext" href="${nextHref()}"><span class="un-k">Up next · Lesson ${L.nextN||num+1}</span><b>${esc(L.nextTitle)}</b><span class="un-go">Start →</span></a>`:(!L.mode?`<p class="eyebrow">Course complete</p>`:'')}
    ${miss.length?`<p class="eyebrow">Worth another look</p><div class="review">${miss.map(m=>`<a href="#" data-go="${scenes.findIndex(x=>(x.t==='teach'||x.t==='act')&&x.s.id===m.id)}">↺ ${esc(m.title)}</a>`).join('')}</div>`:''}
    <div class="end-row"><a class="hp-btn ghost" href="${homeHref()}">Back to course</a><button class="hp-btn ghost" type="button" data-restart>↺ Restart lesson</button></div></div>`;
  }
}
function restart(to){st={i:0,xp:0,res:{},cards:{},quiz:null,completed:!!st.completed};save();paintXP();go(typeof to==='number'?to:0);}
function nextHref(){const n2=L.nextN||num+1;return window.HOLUS_ROUTED?'#'+cid+'-'+n2:'?course='+cid+'&lesson='+n2;}
function homeHref(){return window.HOLUS_ROUTED?'#'+cid:L.courseHome;}
function goHref(h){if(h.charAt(0)==='#'){try{history.pushState(null,'',h);}catch(e){}if(window.holusRoute)window.holusRoute(h);else location.hash=h;}else location.href=h;}
function wire(sc,n){
  const s=sc.s;
  if(sc.t==='journey'){try{window.HolusJourney.mount(n.querySelector('.bj-host'),sc.J);}catch(e){console.error(e);}}
  next.textContent=sc.t==='intro'?(st.completed?'Review lesson':st.i>0?'Start over':'Begin'):sc.t==='finish'?(L.nextTitle?'Next lesson →':'Back to course'):'Continue';
  next.disabled=false;
  if(sc.t==='intro'){const r=n.querySelector('[data-resume]');if(r)r.addEventListener('click',()=>go(+r.dataset.resume));}
  if(sc.t==='chapter'){auto=setTimeout(()=>go(cur+1),2200);ac._auto=auto;}
  if(sc.t==='teach'){const rs=[...n.querySelectorAll('.reveal')];const first=rs[0]&&rs[0].classList.contains('hy')?2:1;rs.slice(0,first).forEach((p,j)=>setTimeout(()=>p.classList.add('in'),200+j*380));
    n._pending=rs.slice(first);const lab=()=>{next.textContent=n._pending.length?'Next idea':'Continue';};
    n._more=()=>{const p=n._pending.shift();if(!p)return false;p.classList.add('in');p.classList.add('now');setTimeout(()=>p.classList.remove('now'),1200);p.scrollIntoView({behavior:'smooth',block:'nearest'});lab();return true;};
    lab();n.querySelector('.card').addEventListener('click',e=>{if(!e.target.closest('a,button'))n._more();});
    if(n._pending.length){const h=document.createElement('p');h.className='tap-more';h.textContent='Tap anywhere on the card, or press Next idea, to keep reading.';n.querySelector('.card').appendChild(h);}}
  if(sc.t==='see'){n.querySelectorAll('.v-fig').forEach(f=>{const sel=j=>{f.classList.add('sel');f.querySelectorAll('.fg-p').forEach(g=>g.classList.toggle('on',(' '+g.dataset.p+' ').includes(' '+j+' ')));};f.querySelectorAll('.vn').forEach(b=>b.addEventListener('click',()=>sel(b.dataset.j)));f.querySelectorAll('.fg-p').forEach(g=>{g.addEventListener('click',()=>{const b=f.querySelector('.vn[data-j="'+g.dataset.p.split(' ')[0]+'"]');if(b)b.click();});});});const fig=n.querySelector('.vis');const mnb=n.querySelector('.mn');if(mnb)mnb.addEventListener('click',()=>{mnb.setAttribute('aria-expanded',String(mnb.getAttribute('aria-expanded')!=='true'));});
    if(fig){const N=+fig.dataset.n,seen=new Set(),cnt=fig.querySelector('.vcount'),tpl=fig.querySelector('template'),vd=fig.querySelector('.vd');
      const mark=j=>{if(!seen.has(j)){seen.add(j);addXP(2);}cnt.textContent=seen.size===N?'All explored ✓':'Tap to explore · '+seen.size+'/'+N;fig.classList.toggle('done',seen.size===N);fig.style.setProperty('--prog',(seen.size/N*100)+'%');};
      fig.querySelectorAll('.vn').forEach(b=>b.addEventListener('click',()=>{const j=+b.dataset.j;
        if(fig.classList.contains('v-tiles')){b.setAttribute('aria-pressed',String(b.getAttribute('aria-pressed')!=='true'));}
        else if(vd){fig.querySelectorAll('.vn').forEach(x=>x.classList.remove('on'));b.classList.add('on');vd.innerHTML=tpl.content.children[j].outerHTML;vd.firstElementChild.classList.add('vd-in');}
        else{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));}
        mark(j);}));
      if(fig.classList.contains('v-flow')){const f0=fig.querySelector('.vn');setTimeout(()=>{f0.click();},700);}}}
  if(sc.t==='case'){const b=n.querySelector('.reveal-model');if(b)b.addEventListener('click',()=>b.setAttribute('aria-expanded',String(b.getAttribute('aria-expanded')!=='true')));}
  if(sc.t==='finish'&&!st.completed){st.completed=true;save();}
  if(sc.t==='finish'){
    const fg=n.querySelector('.fg');setTimeout(()=>{fg.style.strokeDashoffset=fg.dataset.to},400);confetti();
    n.querySelectorAll('[data-go]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();go(+a.dataset.go)}));
    const rs=n.querySelector('[data-restart]');if(rs)rs.addEventListener('click',restart);
  }
  if(sc.t==='cards'){
    const deck=L.flashcards;let order=deck.map((_,j)=>j).filter(j=>st.cards[j]!=='got');if(!order.length)order=deck.map((_,j)=>j);
    const fc=n.querySelector('.fc'),f=n.querySelector('.fc-f'),b=n.querySelector('.fc-b'),cnt=n.querySelector('.fc-n');
    const show=()=>{if(!order.length){f.textContent='All cards known. Nice.';b.textContent='';cnt.textContent='';fc.classList.remove('flip');return;}const c=deck[order[0]];f.textContent=c.front;b.textContent=c.back;fc.classList.remove('flip');cnt.textContent=order.length+' to go';};
    fc.addEventListener('click',()=>fc.classList.toggle('flip'));
    n.querySelector('.fc-got').addEventListener('click',()=>{if(!order.length)return;const j=order.shift();if(st.cards[j]!=='got')addXP(3);st.cards[j]='got';save();show();});
    n.querySelector('.fc-again').addEventListener('click',()=>{if(!order.length)return;const j=order.shift();st.cards[j]='again';order.push(j);save();show();});
    show();
  }
  if(sc.t==='quiz'){const box=n.querySelector('.qz');const Q=L.quiz;st.quiz=st.quiz&&!st.quiz.done?st.quiz:{i:0,score:0,done:false};
    const paint=()=>{const q=Q[st.quiz.i];if(!q||st.quiz.done){st.quiz.done=true;save();
        box.innerHTML=`<div class="qz-end"><b>${st.quiz.score} / ${Q.length}</b><span>${st.quiz.score/Q.length>=.8?'Test-ready.':st.quiz.score/Q.length>=.6?'Nearly there. Review the ones you missed.':'Worth another round after reviewing the lesson.'}</span><button class="hp-btn ghost qz-again" type="button">Try the test again</button></div>`;
        box.querySelector('.qz-again').addEventListener('click',()=>{st.quiz={i:0,score:0,done:false};save();paint();});next.disabled=false;next.textContent='Continue';return;}
      box.innerHTML=`<p class="qz-n">Question ${st.quiz.i+1} of ${Q.length} · ${st.quiz.score} right</p><div class="qz-bar"><i style="width:${st.quiz.i/Q.length*100}%"></i></div>${q.q.split(/\n\s*\n/).slice(0,-1).map(t=>`<p class="qz-ctx">${esc(t)}</p>`).join('')}<p class="prompt">${esc(q.q.split(/\n\s*\n/).pop())}</p><div class="opts">${q.o.map((o,j)=>`<button class="opt" data-j="${j}"><span class="l">${'ABCDEFGH'[j]}</span><span>${esc(o)}</span></button>`).join('')}</div><div class="fb" role="status"></div>`;
      box.querySelectorAll('.opt').forEach(b=>b.addEventListener('click',()=>{const j=+b.dataset.j,ok=j===q.a;box.querySelectorAll('.opt').forEach(x=>x.disabled=true);
        b.classList.add(ok?'good':'bad');if(!ok)box.querySelector('.opt[data-j="'+q.a+'"]').classList.add('good');if(ok){st.quiz.score++;addXP(10);}
        const fb=box.querySelector('.fb');fb.className='fb show '+(ok?'good':'bad');fb.innerHTML='<b>'+(ok?'Correct.':'The answer is '+'ABCDEFGH'[q.a]+'.')+'</b> '+esc(q.e||'')+'<div><button class="hp-btn primary qz-next" type="button">'+(st.quiz.i+1<Q.length?'Next question':'See my score')+'</button></div>';
        st.quiz.i++;save();fb.querySelector('.qz-next').addEventListener('click',paint);}));};
    (next.disabled=false);next.textContent=st.quiz.done||st.completed?'Continue':'Skip';paint();n.querySelector('.qz-skip').addEventListener('click',()=>go(cur+1));}
  if(sc.t!=='act')return;
  const a=s.act,prev=st.res[s.id],fb=n.querySelector('.fb');
  const show=(ok,html)=>{fb.className='fb show '+(ok?'good':'bad');fb.innerHTML=html;live.textContent=fb.textContent;};
  const lock=v=>{next.disabled=false;next.textContent=(v||st.completed)?'Continue':'Skip';};
  lock(!!(prev&&prev.done));
  if(a.type==='choice')n.querySelectorAll('.opt').forEach(b=>b.addEventListener('click',()=>{
    const o=a.options[+b.dataset.j];
    if(o.correct){n.querySelectorAll('.opt').forEach(x=>x.disabled=true);b.classList.add('good');
      const first=!st.res[s.id];st.res[s.id]={ok:first,done:true};if(first)addXP(20);save();
      show(true,(/^correct/i.test(o.feedback)?'':'<b>'+(first?'Yes.':'That’s it.')+'</b> ')+esc(o.feedback));lock(true);}
    else{b.classList.add('bad');b.disabled=true;if(!st.res[s.id])st.res[s.id]={ok:false,done:false};save();show(false,'<b>Not quite.</b> '+esc(o.feedback));}
  }));
  if(a.type==='sort'){let sel=null,placed=0,wrong=0,dragged=false;const chips=[...n.querySelectorAll('.chip')],cats=[...n.querySelectorAll('.cat')];
    const clear=()=>{sel=null;cats.forEach(x=>x.classList.remove('ready','over'));chips.forEach(x=>x.classList.remove('sel'));};
    const drop=(chip,cat)=>{const it=a.items[+chip.dataset.j];const ok=it.category===+cat.dataset.c;
      if(ok){const sp=document.createElement('span');sp.className='placed';sp.textContent=it.label;cat.appendChild(sp);cat.classList.add('hit');setTimeout(()=>cat.classList.remove('hit'),500);addXP(chip.classList.contains('bad')?0:5);chip.remove();placed++;show(true,'<b>Right.</b> '+esc(it.feedback||''));}
      else{wrong++;chip.classList.remove('bad');void chip.offsetWidth;chip.classList.add('bad');show(false,'<b>Look again.</b> '+esc(it.feedback||''));}
      clear();
      if(placed===a.items.length){st.res[s.id]={ok:wrong===0,done:true};save();lock(true);show(true,'<b>All sorted.</b> '+(wrong?'The feedback explains the tricky ones.':'Every card first try.'));}};
    chips.forEach(c=>{
      c.addEventListener('click',()=>{if(dragged){dragged=false;return;}chips.forEach(x=>x.classList.remove('sel'));sel=c;c.classList.add('sel');cats.forEach(x=>x.classList.add('ready'));});
      c.addEventListener('keydown',e=>{if(e.key==='Escape')clear();});
      c.addEventListener('pointerdown',e=>{if(e.button!==0)return;const sx=e.clientX,sy=e.clientY,r=c.getBoundingClientRect();let ghost=null,over=null;
        const move=ev=>{const dx=ev.clientX-sx,dy=ev.clientY-sy;
          if(!ghost){if(Math.hypot(dx,dy)<6)return;ghost=c.cloneNode(true);ghost.className='chip ghost';ghost.style.width=r.width+'px';document.body.appendChild(ghost);c.classList.add('dragging');cats.forEach(x=>x.classList.add('ready'));}
          ghost.style.transform='translate('+(r.left+dx)+'px,'+(r.top+dy)+'px) rotate('+Math.max(-6,Math.min(6,dx/30))+'deg)';if(ev.clientY>innerHeight-150)n.scrollTop+=14;else if(ev.clientY<130)n.scrollTop-=14;
          ghost.style.visibility='hidden';const t=document.elementFromPoint(ev.clientX,ev.clientY);ghost.style.visibility='';
          const cat=t&&t.closest&&t.closest('.cat');if(cat!==over){if(over)over.classList.remove('over');over=cat&&n.contains(cat)?cat:null;if(over)over.classList.add('over');}
          ev.preventDefault();};
        const up=()=>{document.removeEventListener('pointermove',move);document.removeEventListener('pointerup',up);document.removeEventListener('pointercancel',up);
          if(ghost){dragged=true;ghost.remove();c.classList.remove('dragging');if(over)drop(c,over);else clear();setTimeout(()=>dragged=false,50);}};
        document.addEventListener('pointermove',move,{passive:false});document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up);});
    });
    cats.forEach(cat=>cat.addEventListener('click',()=>{if(sel)drop(sel,cat);}));}
  if(a.type==='order'){const list=n.querySelector('.ord');let tries=0;
    const lis=()=>[...list.children];
    list.addEventListener('click',e=>{const b=e.target.closest('.mv');if(!b)return;const li=b.closest('.oi');const d=+b.dataset.d;if(d<0&&li.previousElementSibling)list.insertBefore(li,li.previousElementSibling);if(d>0&&li.nextElementSibling)list.insertBefore(li.nextElementSibling,li);li.classList.remove('good','bad');b.focus();});
    list.addEventListener('pointerdown',e=>{const li=e.target.closest('.oi');if(!li||e.target.closest('.mv')||e.button!==0)return;e.preventDefault();li.setPointerCapture&&li.setPointerCapture(e.pointerId);
      const sy=e.clientY;const r=li.getBoundingClientRect();li.classList.add('lift');lis().forEach(x=>x.classList.remove('good','bad'));
      const move=ev=>{if(ev.clientY>innerHeight-150)n.scrollTop+=10;else if(ev.clientY<130)n.scrollTop-=10;li.style.transform='translateY('+(ev.clientY-sy)+'px)';const mid=ev.clientY;
        const sib=lis().filter(x=>x!==li);let before=null;for(const x of sib){const b=x.getBoundingClientRect();if(mid<b.top+b.height/2){before=x;break;}}
        const cur=li.getBoundingClientRect();
        if(before!==li.nextElementSibling||(!before&&li.nextElementSibling)){const top0=li.getBoundingClientRect().top;list.insertBefore(li,before);const top1=li.getBoundingClientRect().top;
          const off=(parseFloat((li.style.transform.match(/-?[\d.]+/)||[0])[0])||0)-(top1-top0);li.style.transform='translateY('+off+'px)';}
        ev.preventDefault();};
      const up=()=>{document.removeEventListener('pointermove',move);document.removeEventListener('pointerup',up);document.removeEventListener('pointercancel',up);li.classList.remove('lift');li.style.transform='';};
      document.addEventListener('pointermove',move,{passive:false});document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up);});
    n.querySelector('.chk').addEventListener('click',()=>{tries++;const order=lis().map(x=>+x.dataset.j);let right=0;
      lis().forEach((x,i)=>{const ok=+x.dataset.j===i;x.classList.toggle('good',ok);x.classList.toggle('bad',!ok);if(ok)right++;});
      if(right===order.length){lis().forEach((x,i)=>{const d=document.createElement('small');d.textContent=a.items[i].detail;x.appendChild(d);x.querySelector('.ob').remove();});
        n.querySelector('.chk').remove();const first=tries===1;st.res[s.id]={ok:first,done:true};if(first)addXP(20);else addXP(5);save();lock(true);show(true,'<b>'+(first?'Perfect order.':'Got it.')+'</b> Here is what happens at each step.');}
      else{if(!st.res[s.id])st.res[s.id]={ok:false,done:false};save();if(tries>=3){a.items.forEach((_,i)=>list.appendChild(list.querySelector('.oi[data-j="'+i+'"]')));lis().forEach((x,i)=>{x.classList.remove('bad');x.classList.add('good');const d=document.createElement('small');d.textContent=a.items[i].detail;x.appendChild(d);x.querySelector('.ob').remove();});n.querySelector('.chk').remove();st.res[s.id]={ok:false,done:true};save();lock(true);show(false,'<b>Here is the right order.</b> Read each step, then try the next one.');}
        else show(false,'<b>'+right+' of '+order.length+' in the right place.</b> The green ones are set. Move the others and check again.');}});}
  if(a.type==='explore'){const seen=new Set();lock(!!(prev&&prev.done));n.querySelectorAll('.panel-btn').forEach(b=>b.addEventListener('click',()=>{b.setAttribute('aria-expanded',String(b.getAttribute('aria-expanded')!=='true'));if(!seen.has(b.dataset.j)){seen.add(b.dataset.j);addXP(5);}if(seen.size===a.panels.length){st.res[s.id]={ok:true,done:true};save();lock(true);}}));}
  if(a.type==='number'){let tries=0;n.querySelector('form').addEventListener('submit',e=>{e.preventDefault();const v=parseFloat(String(n.querySelector('input').value).replace(',','.'));const ok=Math.abs(v-a.answer)<=(a.tolerance||0)+1e-9;
    if(ok){const first=!st.res[s.id];st.res[s.id]={ok:first,done:true};if(first)addXP(25);save();show(true,'<b>Correct: '+a.answer+' '+esc(a.unit||'')+'.</b> '+esc(a.explanation||''));lock(true);}
    else{tries++;if(!st.res[s.id])st.res[s.id]={ok:false,done:false};save();show(false,'<b>Not yet.</b> '+(tries>1?esc(a.explanation||''):'Check each step and try again.'));if(tries>1)lock(true);}});}
}
function confetti(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const c=document.createElement('div');c.className='confetti';const cols=['#C7D2C4','#71836D','#ffffff','#C3D3D0','#4B5D49'];for(let i=0;i<70;i++){const p=document.createElement('i');p.style.left=Math.random()*100+'%';p.style.background=cols[i%cols.length];p.style.animationDelay=Math.random()*.8+'s';c.appendChild(p);}document.body.appendChild(c);setTimeout(()=>c.remove(),3800);}
next.addEventListener('click',()=>{const sc=scenes[cur];if(sc.t==='teach'&&el&&el._more&&el._more())return;if(sc.t==='finish'){goHref(L.nextTitle?nextHref():homeHref());}else if(sc.t==='intro'&&st.i>0&&cur===0&&next.textContent==='Start over'){restart(1);}else go(cur+1);},sig);
back.addEventListener('click',()=>{let i=cur-1;if(scenes[i]&&scenes[i].t==='chapter')i--;go(i);},sig);
document.addEventListener('keydown',e=>{if(e.target.matches('input'))return;if(e.key==='ArrowRight'&&!next.disabled)next.click();if(e.key==='ArrowLeft'&&!back.disabled)back.click();},sig);
let sx=null,sy=null;stage.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true,signal:ac.signal});stage.addEventListener('touchend',e=>{if(sx==null)return;const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>80&&Math.abs(dx)>2.2*Math.abs(dy)&&!e.target.closest('.fc,.chip,.cat,.oi,.vr,.tbl,table,.vt')){if(dx<0&&!next.disabled)next.click();if(dx>0&&!back.disabled)back.click();}sx=null},{passive:true,signal:ac.signal});
document.title=L.title+' · hōlus. study';
const entries=[];scenes.forEach((sc,i)=>{
  if(sc.t==='intro'||sc.t==='finish')return;
  if(sc.s){const prev=entries[entries.length-1];if(prev&&prev.k===sc.k&&prev.kind==='step')return;entries.push({kind:'step',k:sc.k,i,s:sc.s});}
  else entries.push({kind:sc.t,i,J:sc.J});});
function openSheet(){
  let html='<div class="sheet-in"><div class="sheet-h"><div><p class="eyebrow">'+esc(L.courseName)+' · Lesson '+num+'</p><h2>'+esc(L.title)+'</h2></div><button class="sheet-x" type="button" aria-label="Close">×</button></div><ol class="mo">';
  let lastChap=null;
  entries.forEach(e=>{
    if(e.kind==='step'){const s=e.s;const chap=s.chapter&&!L.perStepChapter?s.chapter:null;if(chap&&chap!==lastChap){lastChap=chap;html+='<li class="mo-part">'+esc(chap)+'</li>';}
      const ids=steps.filter((x,k)=>k===e.k).map(x=>x.id);const actDone=s.act?(st.res[s.id]&&st.res[s.id].done):null;
      const nextE=entries[entries.indexOf(e)+1];const endI=nextE?nextE.i-1:scenes.length-2;
      const here=cur>=e.i&&cur<=endI;const seen=(st.max||0)>=e.i;
      const kind=s.act?({choice:'Check',sort:s.act.variant==='match'?'Match':'Sort',order:'Order',explore:'Explore',number:'Calculate'}[s.act.type]||'Activity'):(s.visual?'Diagram':'Read');
      html+='<li><button class="mo-i'+(here?' here':'')+(actDone||(!s.act&&seen)?' done':seen?' seen':'')+'" data-go="'+e.i+'"><i>'+(actDone||(!s.act&&seen&&!here)?'✓':e.k+1)+'</i><span><b>'+esc(s.title)+'</b><small>'+kind+(here?' · You are here':'')+'</small></span></button></li>';}
    else{if(e.kind==='journey'){const here=cur===e.i,done=(st.max||0)>e.i;html+='<li><button class="mo-i'+(here?' here':'')+(done?' done':'')+'" data-go="'+e.i+'"><i>'+(done&&!here?'✓':'◎')+'</i><span><b>'+esc(e.J.kind||'Body tour')+'</b><small>'+esc(e.J.title)+(here?' · You are here':'')+'</small></span></button></li>';return;}
      const lab={case:'Case study',cards:'Flashcards',quiz:L.examTitle||'Lesson test practice'}[e.kind]||e.kind;const here=cur===e.i;const done=e.kind==='quiz'?st.quiz&&st.quiz.done:(st.max||0)>e.i;
      html+='<li class="mo-part">Review</li>'.repeat(lastChap!=='__rev'?1:0);lastChap='__rev';
      html+='<li><button class="mo-i'+(here?' here':'')+(done?' done':'')+'" data-go="'+e.i+'"><i>'+(done?'✓':'★')+'</i><span><b>'+lab+'</b><small>'+(e.kind==='cards'?L.flashcards.length+' cards':e.kind==='quiz'?L.quiz.length+' questions':'Apply it')+(here?' · You are here':'')+'</small></span></button></li>';}
  });
  html+='</ol></div>';sheet.innerHTML=html;sheet.hidden=false;
  requestAnimationFrame(()=>sheet.classList.add('open'));
  const h=sheet.querySelector('.here');if(h)h.scrollIntoView({block:'center'});
  sheet.querySelector('.sheet-x').focus();
}
function closeSheet(){sheet.classList.remove('open');setTimeout(()=>{sheet.hidden=true;},250);menuBtn.focus();}
menuBtn.addEventListener('click',openSheet,sig);
sheet.addEventListener('click',e=>{if(e.target===sheet||e.target.closest('.sheet-x')){closeSheet();return;}const b=e.target.closest('[data-go]');if(b){sheet.classList.remove('open');sheet.hidden=true;go(+b.dataset.go);}},sig);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!sheet.hidden)closeSheet();},sig);
const track=bar.parentNode;track.querySelectorAll('.mk').forEach(x=>x.remove());track.classList.add('marks');
const markList=entries.map(e=>({i:e.i,label:e.kind==='step'?e.s.title:({case:'Case study',cards:'Flashcards',quiz:'Test practice',journey:(e.J&&e.J.kind)||'Body tour'}[e.kind]||e.kind),part:e.kind==='step'&&e.s.chapter&&!L.perStepChapter}));
markList.forEach((m,j)=>{const b=document.createElement('button');b.type='button';b.className='mk'+(m.part?' part':'');b.style.left=(m.i/(scenes.length-1)*100)+'%';b.setAttribute('aria-label','Go to '+m.label);b.title=m.label;b.dataset.go=m.i;b.addEventListener('click',e=>{e.stopPropagation();go(m.i);},sig);track.appendChild(b);});
function paintMarks(){track.querySelectorAll('.mk').forEach(b=>{const i=+b.dataset.go;b.classList.toggle('past',i<=cur);b.classList.toggle('now',i<=cur&&(()=>{const nx=[...track.querySelectorAll('.mk')].map(x=>+x.dataset.go).filter(x=>x>i)[0];return nx==null||cur<nx;})());});}
track.addEventListener('click',e=>{if(e.target.closest('.mk'))return;const r=track.getBoundingClientRect();const f=(e.clientX-r.left)/r.width;let best=markList[0];markList.forEach(m=>{if(Math.abs(m.i/(scenes.length-1)-f)<Math.abs(best.i/(scenes.length-1)-f))best=m;});if(best)go(best.i);},sig);
paintMarks();
window.__holusPlayer={go,scenes:()=>scenes.length};
go(params.has('scene')?+params.get('scene'):0);
}
window.HOLUS_START=start;
if(!window.HOLUS_ROUTED){const q=new URLSearchParams(location.search);start((q.get('course')||'nc').toLowerCase(),q.get('lesson')==='all'?0:Math.max(1,parseInt(q.get('lesson')||'1',10)),{scene:q.has('scene')?+q.get('scene'):null,mode:q.get('mode')});}
})();
