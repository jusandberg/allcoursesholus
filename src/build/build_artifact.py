import re,os
SRC=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ROOT=os.path.dirname(SRC)
P=os.path.join(SRC,'dist','courses','player')+'/'
css=open(P+'player.css').read();js=open(P+'player.js').read();ad=open(P+'adapters.js').read()
data=''.join('<script>'+open(P+'data/'+i+'.js').read()+'</script>\n' for i in ['nh','ns','sf','sh','nc','ap','vn'])

js=js.replace('href="?course=${cid}&lesson=${L.nextN||num+1}"','href="#${cid}-${L.nextN||num+1}"')
js=js.replace('<a class="hp-btn ghost" href="${esc(L.courseHome)}">Back to course</a>','<a class="hp-btn ghost" href="#${cid}">All lessons in this course</a>')
assert 'function nextHref' in js
pcss='''.pk{position:fixed;inset:0;overflow-y:auto;background:radial-gradient(120% 90% at 80% 0%,#2c3f4f 0%,#16212b 60%);color:#fff;padding-block:max(28px,env(safe-area-inset-top)) 48px;padding-left:max(18px,env(safe-area-inset-left));padding-right:max(18px,env(safe-area-inset-right))}
.pk-in{width:min(1080px,100%);margin:0 auto;padding-top:5vh}
.pk .eyebrow{color:var(--light)}
.pk-h{font:800 clamp(38px,7vw,76px)/1 Manrope,sans-serif;letter-spacing:-.045em;margin:0 0 14px;text-wrap:balance}
.pk-l{max-width:40rem;color:rgba(255,255,255,.78);font-size:18px;margin:0 0 28px}
.pk-back{display:inline-flex;align-items:center;gap:8px;margin:0 0 18px;color:#fff;text-decoration:none;font:700 14px/1 Manrope,sans-serif;padding:10px 14px;border-radius:99px;background:rgba(255,255,255,.1)}
.pk-back:focus-visible,.pk-g a:focus-visible{outline:3px solid var(--light);outline-offset:3px}
.pk-g{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:14px}
.pk-g a{position:relative;display:flex;flex-direction:column;gap:4px;padding:22px;border-radius:22px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);color:#fff;text-decoration:none;transition:transform .25s var(--ease),background .25s;min-width:0}
.pk-g a:hover{transform:translateY(-3px);background:rgba(255,255,255,.12)}
.pk-g a.off{opacity:.5;pointer-events:none}
.pk-g small{color:var(--light);font:700 12px/1.3 Manrope,sans-serif;letter-spacing:.08em;text-transform:uppercase}
.pk-g b{font:800 20px/1.25 Manrope,sans-serif;margin:2px 0 4px}
.pk-g span{font-size:14px;color:rgba(255,255,255,.72)}
.pk-g .num{position:absolute;right:18px;top:14px;font:800 34px/1 Manrope,sans-serif;letter-spacing:-.04em;color:rgba(255,255,255,.12)}
.pk-c a{min-height:170px;justify-content:flex-end}
.pk-p{display:block;height:4px;border-radius:9px;background:rgba(255,255,255,.14);overflow:hidden;margin:10px 0 6px}
.pk-p i{display:block;height:100%;background:var(--light)}
.pk-part{grid-column:1/-1;margin:10px 0 0;font:700 12px/1.3 Manrope,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.55)}
.pk a{-webkit-tap-highlight-color:transparent}
@media (max-width:600px){.pk-in{padding-top:1vh}.pk-l{font-size:16px;margin-bottom:20px}.pk-c a{min-height:0;padding:18px 18px 16px}.pk-g{gap:10px}.pk-g a{padding:16px 18px}.pk-g b{font-size:18px}.pk-g .num{font-size:26px;top:12px}}
.pk-card{display:flex;flex-direction:column;border-radius:22px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);overflow:hidden;min-width:0}
.pk-card.off{opacity:.5}.pk-card.off a{pointer-events:none}
.pk-l2 .pk-card .pk-main{background:none;border:0;border-radius:0;flex:1}
.pk-l2 .pk-card .pk-main:hover{transform:none;background:rgba(255,255,255,.05)}
.pk-acts{display:flex;gap:8px;flex-wrap:wrap;padding:0 16px 16px}
.pk-g .pk-acts a{display:inline-flex;flex-direction:row;align-items:center;gap:6px;padding:9px 12px;border-radius:99px;background:rgba(199,210,196,.16);border:1px solid rgba(199,210,196,.3);font:700 13px/1 Manrope,sans-serif;color:#fff}
.pk-g .pk-acts a:hover{transform:none;background:rgba(199,210,196,.28)}
.pk-acts em{font-style:normal;color:var(--light)}
.pk-course-acts{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin:0 0 22px}
.pk-course-acts a{display:block;padding:18px 20px;border-radius:20px;background:#fff;color:var(--ink);text-decoration:none}
.pk-course-acts a:focus-visible,.pk-acts a:focus-visible{outline:3px solid var(--light);outline-offset:3px}
.pk-course-acts b{display:block;font:800 18px/1.2 Manrope,sans-serif}
.pk-course-acts span{font-size:13.5px;color:var(--muted)}
.pk-n{margin-top:26px;font-size:14px;color:rgba(255,255,255,.55);max-width:44rem}
'''
picker='''<section id="picker" class="pk" hidden><div class="pk-in" id="pk-in"></div></section>
<script>
function holusRoute(forced){
  var D=window.HOLUS_DATA||{},O=window.HOLUS_ORDER||[],root=document.getElementById('pk-in'),pk=document.getElementById('picker'),hp=document.getElementById('hp');
  var esc=function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
  var prog={};try{prog=JSON.parse(localStorage.getItem('holus-player-index')||'{}')}catch(e){}
  var h=(typeof forced==='string'?forced:(location.hash||'')).replace(/^#/,'');
  var m=h.match(/^([a-z]{2})-(\\d+)(?:-(cards|quiz))?$/)||h.match(/^([a-z]{2})-()(cards|quiz)$/);
  if(m){pk.hidden=true;hp.hidden=false;window.HOLUS_START(m[1],m[2]?+m[2]:0,{closeHref:'#'+m[1],mode:m[3]||null});return;}
  hp.hidden=true;pk.hidden=false;pk.scrollTop=0;
  if(D[h]){var C=D[h];var done=0;var last='';
    var allCards=0,allQ=0;C.lessons.forEach(function(L){allCards+=(L.flashcards||[]).length;allQ+=(L.quiz||[]).length;});
    var items=C.lessons.map(function(L){var p=prog[h+'-'+L.n];if(L.part&&L.part!==last){last=L.part;var part='<p class="pk-part">'+esc(L.part)+'</p>';}else part='';
      var fc=(L.flashcards||[]).length,qz=(L.quiz||[]).length;
      var acts=(fc||qz)?'<div class="pk-acts">'+(fc?'<a href="#'+h+'-'+L.n+'-cards">Flashcards <em>'+fc+'</em></a>':'')+(qz?'<a href="#'+h+'-'+L.n+'-quiz">Test practice <em>'+qz+'</em></a>':'')+'</div>':'';
      return part+'<div class="pk-card'+(L.comingSoon?' off':'')+'"><a class="pk-main" href="#'+h+'-'+L.n+'"'+(L.comingSoon?' aria-disabled="true" tabindex="-1"':'')+'><small>Lesson '+L.n+(L.steps&&L.steps.length?' · '+L.steps.length+' moments':'')+'</small><b>'+esc(L.title)+'</b>'+
      (L.comingSoon?'<span>Coming soon</span>':p?'<span class="pk-p"><i style="width:'+Math.max(4,p.pct||0)+'%"></i></span><span>'+(p.pct>=100?'Complete':(p.pct||0)+'% done')+'</span>':'<span>Not started</span>')+'</a>'+acts+'</div>';}).join('');
    var courseActs=(allCards||allQ)?'<div class="pk-course-acts">'+(allCards?'<a href="#'+h+'-cards"><b>All flashcards</b><span>'+allCards+' cards from every lesson</span></a>':'')+(allQ?'<a href="#'+h+'-quiz"><b>Mixed test practice</b><span>'+Math.min(20,allQ)+' random questions from '+allQ+'</span></a>':'')+'</div>':'';
    root.innerHTML='<a class="pk-back" href="#">← All courses</a><p class="eyebrow">Course '+String(C.num).padStart(2,'0')+' · '+esc(C.area)+'</p><h1 class="pk-h">'+esc(C.name)+'</h1><p class="pk-l">'+(C.companion?'This is your reading companion for the book. Its chapters are listed below. Lessons will be built once the chapter material is added.':C.lessons.length+' lessons. Open a lesson, or jump straight to its flashcards or test practice.')+'</p>'+courseActs+'<div class="pk-g pk-l2">'+items+'</div>';
    document.title=C.name+' · hōlus. study';return;}
  var tiles=O.map(function(id){var C=D[id];if(!C)return '';var n=C.lessons.length,started=C.lessons.filter(function(L){return prog[id+'-'+L.n]}).length;
    return '<a href="#'+id+'"><span class="num">'+String(C.num).padStart(2,'0')+'</span><small>'+esc(C.area)+'</small><b>'+esc(C.name)+'</b><span>'+(C.companion?n+' chapters · reading companion':n+' lessons'+(started?' · '+started+' started':''))+'</span></a>';}).join('');
  root.innerHTML='<p class="eyebrow">hōlus. study</p><h1 class="pk-h">Your courses.</h1><p class="pk-l">Seven courses, one place. Pick a course to see all of its lessons. Your progress is saved in this browser.</p><div class="pk-g pk-c">'+tiles+'</div><p class="pk-n">Each lesson mixes short reading, interactive diagrams, drag-and-drop, quick checks, flashcards and, where your course has one, practice from the lesson test.</p>';document.title='hōlus. study';
}
window.addEventListener('hashchange',function(){holusRoute();});
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey)return;var href=a.getAttribute('href');e.preventDefault();try{history.pushState(null,'',href==='#'?location.pathname+location.search:href);}catch(err){}holusRoute(href);});
window.addEventListener('popstate',function(){holusRoute();});
window.addEventListener('DOMContentLoaded',function(){holusRoute();});
</script>'''
html=f'''<title>hōlus. Study</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>[hidden]{{display:none!important}}
{css}
{pcss}
html,body{{background:#16212b}}
</style>
{picker}
<div class="hp dark-mode" id="hp">
  <header class="hp-top">
    <a class="hp-close" id="close" href="#" aria-label="Close lesson and return to the lesson list">×</a>
    <div class="hp-bar" role="progressbar" aria-label="Lesson progress"><i id="bar"></i></div>
    <div class="hp-xp" id="xp" aria-label="Experience points"></div>
  </header>
  <main class="hp-stage" id="stage"></main>
  <nav class="hp-dock" aria-label="Lesson navigation"><div class="row"><button class="hp-btn ghost" id="back" type="button">Back</button><button class="hp-btn primary" id="next" type="button">Begin</button></div></nav>
  <p class="sr" id="live" aria-live="polite"></p>
</div>
{data}<script>{ad}</script>
<script>window.HOLUS_ROUTED=true;</script>
<script>{js}</script>
'''
full='<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'+html.replace('</style>','</style>\n</head>\n<body>',1)+'\n</body>\n</html>\n'
open(os.path.join(ROOT,'index.html'),'w').write(full)
print(len(html))
