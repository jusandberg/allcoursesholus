const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});const p=await b.newPage({viewport:{width:390,height:844}});
const errs=[];p.on('pageerror',e=>errs.push(p.url()+' '+e.message));
// Lesson counts come from the course data, so the test stays in step with the courses.
const fs=require('fs'),path=require('path');global.window={};
for(const c of ['nh','ns','sf','sh','nc','ap','vn'])eval(fs.readFileSync(path.join(__dirname,'dist/courses/player/data/'+c+'.js'),'utf8'));
const C={};for(const [c,d] of Object.entries(window.HOLUS_DATA))C[c]=d.lessons.filter(l=>!l.comingSoon).map(l=>l.n);
console.log('lessons per course',JSON.stringify(C));let tot=0;
for(const [c,ns] of Object.entries(C))for(const l of ns){
 await p.goto(`http://localhost:8790/courses/player/player.html?course=${c}&lesson=${l}`,{waitUntil:'networkidle'});
 const ok=await p.evaluate(()=>!!window.__holusPlayer);if(!ok){errs.push(c+l+' no player: '+(await p.textContent('body')).slice(0,80));continue;}
 const N=await p.evaluate(()=>window.__holusPlayer.scenes());tot+=N;
 for(let i=0;i<N;i++){await p.evaluate(i=>window.__holusPlayer.go(i),i);}
 await p.waitForTimeout(200);
}
console.log('scenes',tot,'errors',errs.length);console.log(errs.slice(0,10).join('\n'));await b.close()})();
