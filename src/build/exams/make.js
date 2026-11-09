// Builds build/exams/vn.json from vn-src.js. normalize.js attaches it to the vn course as `exams`.
const fs=require('fs'),path=require('path');
const {exam1,exam2}=require('./vn-src.js');
const titles=['Vegetarian Diets for Health','Protein','Carbohydrates','Fats','Vitamins','Minerals','Designing a Vegetarian Diet','Pregnancy & Lactation','Infancy','Children','Adolescents','Older People','Practical Applications'];
global.window={};require('../../dist/courses/player/data/vn.js');const L=window.HOLUS_DATA.vn.lessons;
const conv=a=>a.map(q=>({q:q.q,o:q.o,a:q.a,e:'Checked answer, not from an official key. '+q.e+' (Lesson '+q.l+': '+L[q.l-1].title+')'}));
// keep lesson order mixed so it feels like a real exam: interleave by a fixed shuffle
const mix=(a,seed)=>{const r=a.slice();let x=seed;for(let i=r.length-1;i>0;i--){x=(x*9301+49297)%233280;const j=Math.floor(x/233280*(i+1));[r[i],r[j]]=[r[j],r[i]];}return r;};
const kick='50 new questions written from your lesson content. None of them are on your lesson tests. Answers are checked, not from an official key.';
const out=[{title:'Practice exam 1',kicker:kick,quiz:conv(mix(exam1,7))},{title:'Practice exam 2',kicker:kick,quiz:conv(mix(exam2,11))}];
fs.writeFileSync(path.join(__dirname,'vn.json'),JSON.stringify(out));
console.log(out.map(e=>e.title+' '+e.quiz.length).join(', '));
