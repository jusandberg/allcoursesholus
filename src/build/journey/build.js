// Builds dist/courses/player/journey.js (engine + body map) and journeys.js (lesson data) for the player.
const fs=require('fs'),path=require('path');
const D=path.join(__dirname,'../../dist/courses/player/');
const parts=JSON.parse(fs.readFileSync(path.join(__dirname,'body_parts.json'),'utf8'));
const X=require('./extras.js');
const route='<path class="bj-route" d="" style="fill:none;stroke:#71836d;stroke-width:2;stroke-dasharray:2 7;stroke-linecap:round;opacity:.45"></path>';
const TOKX=['<g class="bj-f" data-f="hex"><path d="M0 -11 L9.5 -5.5 L9.5 5.5 L0 11 L-9.5 5.5 L-9.5 -5.5 Z" style="fill:var(--tok);stroke:#fff;stroke-width:2"></path></g>',
 '<g class="bj-f" data-f="pieces"><path d="M-12 -5 L-5 -9 L2 -5 L2 2 L-5 6 L-12 2 Z" style="fill:var(--tok);stroke:#fff;stroke-width:1.5"></path><path d="M3 0 L10 -4 L17 0 L17 7 L10 11 L3 7 Z" style="fill:var(--tok);stroke:#fff;stroke-width:1.5"></path></g>',
 '<g class="bj-f" data-f="atp"><rect x="-13" y="-7" width="20" height="14" rx="4" style="fill:#d3a84b;stroke:#fff;stroke-width:2"></rect><circle cx="10" cy="0" r="3" style="fill:#c86d56"></circle><circle cx="15" cy="0" r="3" style="fill:#c86d56"></circle><circle cx="20" cy="0" r="3" style="fill:#c86d56"></circle></g>',
 '<g class="bj-f" data-f="electron"><circle r="7" style="fill:#2f6f8f;stroke:#fff;stroke-width:2"></circle><path d="M-3 0 h6" style="stroke:#fff;stroke-width:2"></path></g>',
 '<g class="bj-f" data-f="mrna"><path d="M-16 0 q4 -7 8 0 t8 0 t8 0 t8 0" style="fill:none;stroke:#fff;stroke-width:7;stroke-linecap:round"></path><path d="M-16 0 q4 -7 8 0 t8 0 t8 0 t8 0" style="fill:none;stroke:var(--tok);stroke-width:4;stroke-linecap:round"></path></g>',
 '<g class="bj-f" data-f="beads"><circle cx="-12" cy="0" r="4.5" style="fill:#c86d56;stroke:#fff;stroke-width:1.5"></circle><circle cx="-4" cy="-3" r="4.5" style="fill:#6f91a2;stroke:#fff;stroke-width:1.5"></circle><circle cx="4" cy="0" r="4.5" style="fill:#d3a84b;stroke:#fff;stroke-width:1.5"></circle><circle cx="12" cy="-3" r="4.5" style="fill:#71836d;stroke:#fff;stroke-width:1.5"></circle></g>',
 '<g class="bj-f" data-f="vesicle"><circle r="10" style="fill:#e3d0ea;stroke:#fff;stroke-width:2"></circle><circle cx="-3" cy="-2" r="2.5" style="fill:var(--tok)"></circle><circle cx="3" cy="2" r="2.5" style="fill:var(--tok)"></circle></g>',
 '<g class="bj-f" data-f="spark"><path d="M0 -12 L3 -3 L12 0 L3 3 L0 12 L-3 3 L-12 0 L-3 -3 Z" style="fill:var(--tok);stroke:#fff;stroke-width:1.5"></path></g>'].join('');
const tok=parts.tok.replace(/<\/g>\s*$/,TOKX+'</g>');
let svg=parts.sil+X.BACK+parts.org1+route+parts.org2+X.FRONT+tok;
const anim=['beat','breathe','churn','flow','pulse','ripple'];
anim.forEach(a=>{svg=svg.split('animation:'+a+' ').join('animation:bj'+a+' ');});
svg=require('./style.js').restyle(svg);
// stages for process tours (inside a cell, a neuron...): each brings its own drawing, cameras and token size
const STAGES={};const SD=path.join(__dirname,'stages');
fs.readdirSync(SD).filter(f=>/\.js$/.test(f)).forEach(f=>{const k=f.replace(/\.js$/,'');const st=require(path.join(SD,f));
  STAGES[k]={svg:require('./style.js').restyle(st.svg+route+tok,{prefix:'st'+k,shines:st.shines||{}}),cams:st.cams,home:st.home,tok:st.tok||1,dim:st.dim==null?0.45:st.dim};});
let css=fs.readFileSync(path.join(__dirname,'journey.css'),'utf8');
anim.forEach(a=>{css=css.split('@keyframes '+a+'{').join('@keyframes bj'+a+'{');});
let js=fs.readFileSync(path.join(__dirname,'engine.src.js'),'utf8').replace("'__SVG__'",JSON.stringify(svg)).replace("'__STAGES__'",JSON.stringify(STAGES));
fs.writeFileSync(D+'journey.js',js);fs.writeFileSync(D+'journey.css',css);
// lesson data
const dir=path.join(__dirname,'lessons');const out={};
fs.readdirSync(dir).filter(f=>/\.js$/.test(f)).sort().forEach(f=>{delete require.cache[path.join(dir,f)];const J=require(path.join(dir,f));out[J.id]=J;
  J.stops.forEach((s,k)=>{if(!s.organs||!s.title||!s.body||!s.place||!s.short)throw new Error(f+' stop '+k+' incomplete');const SV=J.stage?(STAGES[J.stage]||{}).svg:svg;if(J.stage&&!SV)throw new Error(f+': unknown stage '+J.stage);(s.organs).forEach(o=>{if(!SV.includes('data-o="'+o+'"'))throw new Error(f+': unknown part '+o);});if(J.stage&&s.view&&!STAGES[J.stage].cams[s.view])throw new Error(f+': unknown view '+s.view);if((s.lens||[]).length>10)throw new Error(f+' stop '+k+' has more than 10 particles');});});
fs.writeFileSync(D+'data/journeys.js','window.HOLUS_JOURNEYS='+JSON.stringify(out)+';');
console.log('journeys',Object.keys(out).join(' '),'svg',svg.length);
