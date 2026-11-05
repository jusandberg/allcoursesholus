/* Shows "Continue where you left off" on the hub home page, from lessons opened in the player. */
(function(){
  var all={};try{all=JSON.parse(localStorage.getItem('holus-player-index')||'{}');}catch(e){}
  var list=Object.keys(all).map(function(k){return all[k];}).sort(function(a,b){return b.at-a.at;});
  var host=document.getElementById('courses');if(!host)return;
  var css=document.createElement('style');
  css.textContent='.hp-cont{background:radial-gradient(120% 120% at 85% 0%,#2c3f4f,#16212b 65%);color:#fff;padding:clamp(36px,6vw,64px) 0}.hp-cont .eb{font:700 12px/1.2 Manrope,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#C7D2C4;margin:0 0 12px}.hp-cont h2{font:800 clamp(30px,5vw,52px)/1.02 Manrope,sans-serif;letter-spacing:-.04em;margin:0 0 22px}.hp-cont .row{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px}.hp-cont a{display:block;padding:20px;border-radius:22px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);color:#fff;text-decoration:none;transition:transform .25s,background .25s}.hp-cont a:hover{transform:translateY(-3px);background:rgba(255,255,255,.11)}.hp-cont a:focus-visible{outline:3px solid #C7D2C4;outline-offset:3px}.hp-cont a small{display:block;font:600 12px/1.3 Inter,sans-serif;color:#C7D2C4;margin-bottom:8px}.hp-cont a b{display:block;font:800 19px/1.25 Manrope,sans-serif;margin-bottom:14px}.hp-cont .bar{height:5px;border-radius:9px;background:rgba(255,255,255,.14);overflow:hidden}.hp-cont .bar i{display:block;height:100%;background:#C7D2C4}.hp-cont .meta{display:flex;justify-content:space-between;margin-top:10px;font:600 12px/1 Inter,sans-serif;color:rgba(255,255,255,.7)}.hp-cont .start{display:inline-flex;gap:10px;align-items:center;background:#fff;color:#243341;padding:14px 22px;border-radius:99px;font:800 15px/1 Manrope,sans-serif}';
  document.head.appendChild(css);
  var sec=document.createElement('section');sec.className='hp-cont';sec.setAttribute('aria-labelledby','hp-cont-h');
  var esc=function(s){return String(s||'').replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});};
  if(list.length){
    sec.innerHTML='<div class="wrap"><p class="eb">Pick up where you left off</p><h2 id="hp-cont-h">Continue learning.</h2><div class="row">'+list.slice(0,3).map(function(x){return '<a href="courses/player/player.html?course='+x.courseId+'&lesson='+x.lesson+'"><small>'+esc(x.course)+' · Lesson '+x.lesson+'</small><b>'+esc(x.title)+'</b><div class="bar"><i style="width:'+Math.max(4,x.pct||0)+'%"></i></div><div class="meta"><span>'+(x.pct>=100?'Complete':(x.pct||0)+'% through')+'</span><span>+'+(x.xp||0)+' XP</span></div></a>';}).join('')+'</div></div>';
  }else{
    sec.innerHTML='<div class="wrap"><p class="eb">New · Interactive lessons</p><h2 id="hp-cont-h">Learn one moment at a time.</h2><p style="max-width:40rem;color:rgba(255,255,255,.8);margin:0 0 22px">Short scenes, quick checks, flashcards and a score at the end. Available now for Nutrition Counselling, Anatomy &amp; Physiology and Vegetarian Nutrition.</p><a class="start" href="courses/player/player.html?course=nc&lesson=1">▶ Start Lesson 1</a></div>';
  }
  host.parentNode.insertBefore(sec,host);
})();
