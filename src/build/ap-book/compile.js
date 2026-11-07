// node compile.js N  -> builds lN.json from src/lN.js + her saved test questions
const fs=require('fs'),path=require('path');
const n=+process.argv[2];const S=require(path.join(__dirname,'src','l'+n+'.js'));
global.window={};eval(fs.readFileSync(path.join(__dirname,'../../dist/courses/anatomy-physiology/course-data.js'),'utf8'));
const L=window.AP_COURSE.lessons.find(l=>l.number===n||l.id==='lesson-'+n);
const C='Checked answer, not from an official key. ';const SRC=' Source: Fundamentals of Anatomy and Physiology (Rizzo), Chapter '+n+'.';
const quiz=[];const miss=[];
for(const q of L.questions){const A=S.answers[q.number];if(!A){miss.push(q.number);continue}
 const [a,e]=A;const idx=typeof a==='number'?a:q.options.indexOf(a);if(idx<0)throw 'bad answer '+n+'#'+q.number+' '+a;
 quiz.push({q:q.prompt,o:q.options,a:idx,e:C+e+(/Source:/.test(e)?'':SRC)});}
const step=(s,i)=>{if(!s.act)throw 'no act '+s.title;return {id:'ap'+n+'-'+(i+1),...s}};
const out={lesson:n,book:'Fundamentals of Anatomy and Physiology, 4th ed. (Rizzo)',kicker:S.kicker,steps:S.steps.map(step),flashcards:S.flashcards,quiz};
fs.writeFileSync(path.join(__dirname,'l'+n+'.json'),JSON.stringify(out,null,1));
console.log('l'+n,'steps',out.steps.length,'cards',out.flashcards.length,'quiz',quiz.length+'/'+L.questions.length,miss.length?'omitted '+miss:'');
