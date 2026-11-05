const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});const p=await b.newPage({viewport:{width:390,height:844}});
const errs=[];p.on('pageerror',e=>errs.push(p.url()+' '+e.message));
const C={nh:9,ns:14,sf:13,nc:17,ap:19,vn:14};let tot=0;
for(const [c,n] of Object.entries(C))for(let l=1;l<=n;l++){
 await p.goto(`http://localhost:8790/courses/player/player.html?course=${c}&lesson=${l}`,{waitUntil:'networkidle'});
 const ok=await p.evaluate(()=>!!window.__holusPlayer);if(!ok){errs.push(c+l+' no player: '+(await p.textContent('body')).slice(0,80));continue;}
 const N=await p.evaluate(()=>window.__holusPlayer.scenes());tot+=N;
 for(let i=0;i<N;i++){await p.evaluate(i=>window.__holusPlayer.go(i),i);}
 await p.waitForTimeout(200);
}
console.log('scenes',tot,'errors',errs.length);console.log(errs.slice(0,10).join('\n'));await b.close()})();
