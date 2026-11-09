/* Body journey visual for the hōlus. study hub.
   Ported from the Body Explorer in Juliana's "Client lesson builder planning" design, in plain JavaScript.
   Built by build/journey/build.js. Edit engine.src.js and extras.js, not journey.js. */
(function(){
'use strict';
const SVG='__SVG__';
const LINEY=new Set(['vessels','nerves','spine','skeleton','lymphnodes','ureters']);
const CORE=new Set(['mouth','esophagus','stomach','liver','gallbladder','pancreas','intestine','colon','heart','tissues']);
const CAMS={body:[60,30,380,950],gut:[150,190,200,310],torso:[120,170,260,390],head:[170,30,160,200],chest:[140,130,220,260],pelvis:[160,420,180,210],legs:[120,420,260,560],arm:[60,160,240,440],neck:[170,90,160,210]};
const FORMS=['drop','small','bundle','folded','chain','short','single','strand'];
const SCENES=['swirl','villi','vessel','muscle','blood','colon','alveoli','osteon','nerve','skin','follicle'];
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const H={x:50,y:50,w:0,h:0,r:'50%',bg:'#d3a84b',border:'none',o:0};
/* close-up pieces shaded like the website fruit: lighter on top, a small round shine on round pieces */
const mixc=(a,b,t)=>{const h=x=>[1,3,5].map(i=>parseInt(x.slice(i,i+2),16));const A=h(a),B=h(b);return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,'0')).join('');};
function soft(p){const c=p.bg;if(!/^#[0-9a-f]{6}$/i.test(c||''))return c;const g='linear-gradient(180deg,'+mixc(c,'#ffffff',.38)+','+mixc(c,'#3a3226',.12)+')';return (p.w>=14&&(p.r||'50%')==='50%'?'radial-gradient(circle at 34% 30%,rgba(255,255,255,.4) 0 12%,rgba(255,255,255,0) 13%),':'')+g;}
function lensHTML(cls){
  return `<div class="bj-lens ${cls}" aria-hidden="true">
  <div class="bj-sc" data-sc="swirl" style="inset:10%;border-radius:50%;border:3px dashed #e6b1a2;animation:bjspin 10s linear infinite"></div>
  <div class="bj-sc" data-sc="muscle" style="inset:0;background:repeating-linear-gradient(100deg,#e6ede4 0 20px,#d4dfd1 20px 25px)"></div>
  <div class="bj-sc" data-sc="vessel" style="left:-5%;right:-5%;top:28%;height:44%;background:#dde8ed;border-top:3px solid #6f91a2;border-bottom:3px solid #6f91a2"></div>
  <div class="bj-sc" data-sc="blood" style="left:-5%;right:-5%;top:24%;height:52%;background:#f6e1da;border-top:3px solid #c86d56;border-bottom:3px solid #c86d56"></div>
  <div class="bj-sc" data-sc="colon" style="inset:0;background:radial-gradient(circle at 50% 50%,#f3e6d6,#e9d6bf)"></div>
  <div class="bj-sc bj-villi" data-sc="villi"><i style="height:80%"></i><i style="height:95%"></i><i style="height:85%"></i><i style="height:98%"></i><i style="height:82%"></i></div>
  <div class="bj-sc" data-sc="alveoli" style="inset:0;background:radial-gradient(circle at 30% 32%,#f7d9d3 0 17%,transparent 18%),radial-gradient(circle at 66% 28%,#f7d9d3 0 15%,transparent 16%),radial-gradient(circle at 50% 60%,#f7d9d3 0 19%,transparent 20%),radial-gradient(circle at 22% 70%,#f7d9d3 0 14%,transparent 15%),radial-gradient(circle at 78% 66%,#f7d9d3 0 15%,transparent 16%),#fbefe9"></div>
  <div class="bj-sc" data-sc="osteon" style="inset:0;background:repeating-radial-gradient(circle at 50% 50%,#efe6cf 0 9px,#ddcfa9 9px 12px),#efe6cf"></div>
  <div class="bj-sc" data-sc="nerve" style="left:-5%;right:-5%;top:43%;height:14%;background:repeating-linear-gradient(90deg,#e8d3e2 0 34px,#b07aa0 34px 38px);border-radius:8px"></div>
  <div class="bj-sc" data-sc="skin" style="inset:0;background:linear-gradient(#f3d9c6 0 18%,#ebc8b1 18% 26%,#f4e1d0 26% 70%,#f6ecd6 70%)"></div>
  <div class="bj-sc" data-sc="follicle" style="inset:0;background:radial-gradient(circle at 50% 50%,#fbe4ea 0 30%,#f3c9d4 31% 34%,#fbf0f2 35%)"></div>
  ${'<div class="bj-p"><i></i></div>'.repeat(10)}
</div>`;
}
function mount(host,J,opt){
  opt=opt||{};
  const total=J.stops.length;
  host.innerHTML=`<div class="bj" tabindex="0" style="--tok:${esc(J.token||'#d3a84b')}" aria-label="Body tour: ${esc(J.title)}. Use the left and right arrow keys to move between stops.">
  <div class="bj-map">
    <div class="bj-stage">
      <svg viewBox="60 30 380 950" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Body map for ${esc(J.title)}">${SVG}</svg>
      <span class="bj-label"></span>
      ${lensHTML('bj-mini')}
    </div>
    <p class="bj-hint">Tap any organ to jump there</p>
  </div>
  <div class="bj-side">
    <div class="bj-lensrow">${lensHTML('bj-big')}<div class="bj-cap"><p class="bj-k">Up close</p><p class="bj-capt"></p></div></div>
    <div class="bj-text">
      <div class="bj-pillrow"><span class="bj-pill"><i></i><span></span></span><span class="bj-dots">${J.stops.map((s,k)=>`<button type="button" data-go="${k}" aria-label="${esc(s.short)}"></button>`).join('')}</span></div>
      <h3 class="bj-title"></h3>
      <p class="bj-body"></p>
      <p class="bj-an"></p>
    </div>
    <div class="bj-btns">
      <button type="button" class="bj-prev" aria-label="Previous stop">←</button>
      <button type="button" class="bj-next">Next stop →</button>
      <button type="button" class="bj-play">▶ Play the journey</button>
      <button type="button" class="bj-fs">Full screen</button>
    </div>
  </div>
  <nav class="bj-rail" aria-label="Stops"><div style="grid-template-columns:repeat(${total},minmax(78px,1fr))"><span class="bj-line"></span>${J.stops.map((s,k)=>`<button type="button" data-go="${k}"><i></i><span>${esc(s.short)}</span></button>`).join('')}</div></nav>
  <details class="bj-src"><summary>Sources</summary><ul>${(J.sources||[]).map(s=>`<li>${s.url?`<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`:esc(s.label)}</li>`).join('')}</ul><p>${esc(J.scope||'')}</p></details>
</div>`;
  const root=host.querySelector('.bj'),svg=root.querySelector('svg'),stage=root.querySelector('.bj-stage'),lab=root.querySelector('.bj-label'),tok=root.querySelector('.bj-tok');
  const $=s=>root.querySelector(s),$$=s=>[...root.querySelectorAll(s)];
  const route=svg.querySelector('.bj-route');
  const pts=[],cum=[],stopDist=[];let d=0;
  J.stops.forEach(s=>{(s.path||[[250,122]]).forEach(p=>{const l=pts[pts.length-1];if(l)d+=Math.hypot(p[0]-l[0],p[1]-l[1]);pts.push(p);cum.push(d);});stopDist.push(d);});
  route.setAttribute('d','M'+pts.map(p=>p.join(' ')).join(' L'));
  const used=new Set(J.stops.flatMap(s=>s.organs));const dim=J.dim==null?0.5:J.dim;
  let i=0,dist=0,vb=CAMS.body.slice(),raf=0,timer=0,playing=false;
  const reduce=()=>window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  function place(){
    let k=1;while(k<cum.length-1&&cum[k]<dist)k++;
    const a=pts[k-1]||pts[0],b=pts[k]||a,span=(cum[k]-cum[k-1])||1,t=Math.max(0,Math.min(1,(dist-(cum[k-1]||0))/span));
    const z=Math.max(0.5,Math.min(1,vb[2]/380));
    tok.setAttribute('transform',`translate(${a[0]+(b[0]-a[0])*t} ${a[1]+(b[1]-a[1])*t}) scale(${z})`);
    svg.setAttribute('viewBox',vb.join(' '));
    const W=stage.clientWidth,Hh=stage.clientHeight,[vx,vy,vw,vh]=vb,sc=Math.min(W/vw,Hh/vh),ox=(W-vw*sc)/2,oy=(Hh-vh*sc)/2,L=J.stops[i].label||[250,100,'start'];
    let x=ox+(L[0]-vx)*sc,y=oy+(L[1]-vy)*sc;
    const lw=lab.offsetWidth||0;
    if(L[2]==='end')x=Math.max(lw+6,x);else x=Math.min(W-lw-6,x);
    lab.style.left=x+'px';lab.style.top=Math.max(14,Math.min(Hh-14,y))+'px';
  }
  function animateTo(k){
    cancelAnimationFrame(raf);
    const from=dist,to=stopDist[k],v0=vb.slice(),v1=CAMS[J.stops[k].view||'body']||CAMS.body;
    const camMove=v0.some((v,j)=>Math.abs(v-v1[j])>.5);
    const dur=reduce()?0:Math.min(2400,Math.max(camMove?1400:700,Math.abs(to-from)*7));
    const t0=performance.now();
    const step=now=>{const p=dur?Math.min(1,(now-t0)/dur):1,e=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;dist=from+(to-from)*e;vb=v0.map((v,j)=>v+(v1[j]-v)*e);place();if(p<1&&root.isConnected)raf=requestAnimationFrame(step);};
    raf=requestAnimationFrame(step);
  }
  function paint(){
    const s=J.stops[i];
    $$('.bj-o').forEach(g=>{const k=g.dataset.o,on=s.organs.includes(k),op=on?1:used.has(k)?(LINEY.has(k)?Math.min(dim,0.25):dim):CORE.has(k)&&!J.hideCore?0.3:0;
      g.style.opacity=op;g.style.visibility=op>0?'visible':'hidden';g.classList.toggle('on',on);g.style.cursor=used.has(k)?'pointer':'default';});
    const fk=s.form||'single';$$('.bj-f').forEach(g=>g.style.opacity=g.dataset.f===fk?1:0);
    $$('.bj-sc').forEach(e=>e.style.opacity=e.dataset.sc===s.scene?1:0);
    const lens=(s.lens||[]).slice(0,10);while(lens.length<10)lens.push(H);
    $$('.bj-lens').forEach(L=>[...L.querySelectorAll('.bj-p')].forEach((el,k)=>{const p=Object.assign({},H,lens[k]);
      el.style.left=p.x+'%';el.style.top=p.y+'%';el.style.width=p.w+'px';el.style.height=p.h+'px';el.style.opacity=p.o==null?1:p.o;
      const ii=el.firstChild;ii.style.borderRadius=p.r||'50%';ii.style.background=soft(p);ii.style.border=p.border||'none';ii.style.animationDelay=-(k*.37).toFixed(2)+'s';}));
    lab.textContent=s.place;lab.classList.toggle('end',(s.label||[])[2]==='end');
    $('.bj-pill span').textContent=s.place;$('.bj-title').textContent=s.title;$('.bj-body').textContent=s.body;
    const an=$('.bj-an');an.textContent=s.analogy||'';an.hidden=!s.analogy;$('.bj-capt').textContent=s.lensCaption||'';
    $$('.bj-rail button').forEach((b,k)=>{b.classList.toggle('now',k===i);b.classList.toggle('past',k<i);b.setAttribute('aria-current',k===i?'step':'false');});
    $$('.bj-dots button').forEach((b,k)=>{b.classList.toggle('now',k===i);b.classList.toggle('past',k<i);});
    $('.bj-prev').disabled=i===0;$('.bj-next').textContent=i===total-1?'Start over':'Next stop →';
    $('.bj-play').textContent=playing?'❚❚ Pause':'▶ Play the journey';
    const live=opt.live;if(live)live.textContent=s.place+'. '+s.title;
  }
  function go(k){i=((k%total)+total)%total;paint();animateTo(i);}
  function stop(){playing=false;clearInterval(timer);paint();}
  function play(){if(playing)return stop();if(i===total-1)go(0);playing=true;paint();timer=setInterval(()=>{if(!root.isConnected){clearInterval(timer);return;}if(i>=total-1)return stop();go(i+1);},6500);}
  root.addEventListener('click',e=>{
    const g=e.target.closest('[data-go]');if(g){stop();go(+g.dataset.go);return;}
    const o=e.target.closest('.bj-o');if(o){const t=J.stops.findIndex(s=>s.organs.includes(o.dataset.o));if(t>=0){stop();go(t);}return;}
    if(e.target.closest('.bj-prev')){stop();if(i>0)go(i-1);}
    else if(e.target.closest('.bj-next')){stop();go(i===total-1?0:i+1);}
    else if(e.target.closest('.bj-play'))play();
    else if(e.target.closest('.bj-fs')){try{if(document.fullscreenElement)document.exitFullscreen();else if(root.requestFullscreen)root.requestFullscreen().catch(()=>{});}catch(x){}}
  });
  root.addEventListener('keydown',e=>{
    if(e.key==='ArrowRight'){e.preventDefault();e.stopPropagation();stop();go(i===total-1?0:i+1);}
    else if(e.key==='ArrowLeft'){e.preventDefault();e.stopPropagation();stop();if(i>0)go(i-1);}
    else if(e.key===' '&&!e.target.closest('button,summary,a')){e.preventDefault();e.stopPropagation();play();}
  });
  document.addEventListener('fullscreenchange',()=>{const fs=document.fullscreenElement===root;root.classList.toggle('fs',fs);$('.bj-fs').textContent=fs?'Exit full screen':'Full screen';fit();place();});
  function fit(){const w=root.clientWidth;root.classList.toggle('n',w<720&&!root.classList.contains('fs'));place();}
  if(window.ResizeObserver){const ro=new ResizeObserver(()=>{if(!root.isConnected){ro.disconnect();return;}fit();});ro.observe(root);ro.observe(stage);}
  window.addEventListener('resize',fit);
  if(!document.fullscreenEnabled)$('.bj-fs').hidden=true;
  fit();paint();dist=stopDist[0];vb=(CAMS[J.stops[0].view||'body']||CAMS.body).slice();place();
  return {go,get i(){return i}};
}
/* lens particle helpers for lesson data files */
const P=(x,y,w,h,o)=>Object.assign({x,y,w,h:h==null?w:h,r:'50%',bg:'#d3a84b',border:'none',o:1},o||{});
window.HolusJourney={mount,P,CAMS};
})();
