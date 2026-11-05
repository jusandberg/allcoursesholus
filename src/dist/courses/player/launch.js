/* Adds a "Play lesson" button to a course page, opening the current lesson in the cinematic player. */
(function(){
  var s=document.currentScript,cid=s&&s.dataset.course;if(!cid)return;
  var css=document.createElement('style');
  css.textContent='.hp-launch{position:fixed;left:50%;bottom:calc(18px + env(safe-area-inset-bottom));transform:translateX(-50%);z-index:60;display:inline-flex;align-items:center;gap:10px;padding:14px 22px 14px 14px;border-radius:999px;background:#243341;color:#fff;font:800 15px/1 Manrope,Inter,sans-serif;text-decoration:none;box-shadow:0 16px 36px rgba(22,33,43,.32);transition:transform .25s cubic-bezier(.2,.7,.2,1)}.hp-launch:hover{transform:translateX(-50%) translateY(-3px)}.hp-launch:focus-visible{outline:3px solid #C7D2C4;outline-offset:3px}.hp-launch i{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:#C7D2C4;color:#243341;font-style:normal;font-size:12px}.hp-launch,.hp-launch span{color:#fff!important}.hp-launch small{color:#C7D2C4!important;display:block;font:600 11px/1 Inter,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#C7D2C4;margin-bottom:4px}@media(max-width:600px){.hp-launch{padding:12px 18px 12px 12px;font-size:14px}}';
  document.head.appendChild(css);
  var a=document.createElement('a');a.className='hp-launch';
  function paint(){var sel=document.getElementById('lesson-select');var m=String(sel&&sel.value||'1').match(/(\d+)/);if(!m){a.style.display='none';return;}a.style.display='';var n=+m[1];
    a.href='../player/player.html?course='+cid+'&lesson='+n;a.innerHTML='<i aria-hidden="true">▶</i><span><small>Interactive lesson</small>Play lesson '+n+'</span>';}
  document.addEventListener('change',function(e){if(e.target&&e.target.id==='lesson-select')paint();});
  paint();setTimeout(paint,600);
  document.body.appendChild(a);
})();
