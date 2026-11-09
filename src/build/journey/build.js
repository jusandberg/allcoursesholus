// Builds dist/courses/player/journey.js (engine + body map) and journeys.js (lesson data) for the player.
const fs=require('fs'),path=require('path');
const D=path.join(__dirname,'../../dist/courses/player/');
const parts=JSON.parse(fs.readFileSync(path.join(__dirname,'body_parts.json'),'utf8'));
const X=require('./extras.js');
const route='<path class="bj-route" d="" style="fill:none;stroke:#71836d;stroke-width:2;stroke-dasharray:2 7;stroke-linecap:round;opacity:.45"></path>';
let svg=parts.sil+X.BACK+parts.org1+route+parts.org2+X.FRONT+parts.tok;
const anim=['beat','breathe','churn','flow','pulse','ripple'];
anim.forEach(a=>{svg=svg.split('animation:'+a+' ').join('animation:bj'+a+' ');});
svg=require('./style.js').restyle(svg);
let css=fs.readFileSync(path.join(__dirname,'journey.css'),'utf8');
anim.forEach(a=>{css=css.split('@keyframes '+a+'{').join('@keyframes bj'+a+'{');});
let js=fs.readFileSync(path.join(__dirname,'engine.src.js'),'utf8').replace("'__SVG__'",JSON.stringify(svg));
fs.writeFileSync(D+'journey.js',js);fs.writeFileSync(D+'journey.css',css);
// lesson data
const dir=path.join(__dirname,'lessons');const out={};
fs.readdirSync(dir).filter(f=>/\.js$/.test(f)).sort().forEach(f=>{delete require.cache[path.join(dir,f)];const J=require(path.join(dir,f));out[J.id]=J;
  J.stops.forEach((s,k)=>{if(!s.organs||!s.title||!s.body||!s.place||!s.short)throw new Error(f+' stop '+k+' incomplete');(s.organs).forEach(o=>{if(!svg.includes('data-o="'+o+'"'))throw new Error(f+': unknown organ '+o);});if((s.lens||[]).length>10)throw new Error(f+' stop '+k+' has more than 10 particles');});});
fs.writeFileSync(D+'data/journeys.js','window.HOLUS_JOURNEYS='+JSON.stringify(out)+';');
console.log('journeys',Object.keys(out).join(' '),'svg',svg.length);
