/* Navigation only. Existing course storage is never modified. */
(function(){'use strict';const link=document.createElement('a');link.className='holus-buddy-launcher';link.textContent='✦ Study sidekick';link.setAttribute('aria-label','Open study sidekick for this lesson');function target(){const c=location.pathname.split('/')[2];const select=document.getElementById('lesson-select');let id=select?.value||'lesson-1';if(/^\d+$/.test(id))id='lesson-'+id;link.href='/study-buddy.html'+(c?'?course='+encodeURIComponent(c)+'&lesson='+encodeURIComponent(id):'');}target();link.addEventListener('click',target);link.addEventListener('focus',target);document.body.append(link);
const mobile=matchMedia('(max-width:800px)');
function placeLauncher(){
  const header=document.querySelector('.course-studio-header')||document.querySelector('body.course-nutrition>header');
  if(mobile.matches&&header){header.append(link);link.classList.add('in-mobile-header')}
  else{document.body.append(link);link.classList.remove('in-mobile-header')}
}
placeLauncher();mobile.addEventListener('change',placeLauncher);
const style=document.createElement('style');style.textContent='.holus-buddy-launcher{position:fixed;right:22px;bottom:22px;z-index:80;display:inline-flex;align-items:center;min-height:46px;padding:11px 20px;border:1px solid #dfe4de;border-radius:999px;background:#243341!important;color:#fff!important;text-decoration:none!important;font:600 13px/1.4 Inter,Arial,sans-serif;box-shadow:0 6px 24px #24334126}.holus-buddy-launcher:focus-visible{outline:3px solid #c19532;outline-offset:4px}@media(max-width:800px){.holus-buddy-launcher{position:relative;right:auto;bottom:auto;display:table;margin:16px 16px 24px auto;box-shadow:none}.holus-buddy-launcher.in-mobile-header{position:absolute;top:6px;right:16px;bottom:auto;margin:0;min-height:40px;padding:8px 12px;font-size:11px}}';document.head.append(style);})();
