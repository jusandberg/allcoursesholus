// Small helpers for lens particles (x, y in percent of the lens; w, h in px of a 250px lens).
const P=(x,y,w,h,o)=>Object.assign({x,y,w,h:h==null?w:h,r:'50%',bg:'#d3a84b',border:'none',o:1},o||{});
const C={gold:'#d3a84b',coral:'#c86d56',sage:'#71836d',blue:'#6f91a2',red:'#c8524a',pink:'#e7a9a0',plum:'#b07aa0',cream:'#f4efe1',bone:'#cfc4a6',brown:'#9a5d50',white:'#ffffff'};
const rbc=(x,y,w=30)=>P(x,y,w,w*0.62,{bg:C.red,border:'3px solid #e88a80'});
const o2=(x,y,w=14)=>P(x,y,w,w,{bg:C.blue});
const co2=(x,y,w=14)=>P(x,y,w,w,{bg:'#9a9aa0'});
const cell=(x,y,w,bg,o)=>P(x,y,w,w,Object.assign({bg,border:'3px solid rgba(255,255,255,.8)'},o||{}));
const bit=(x,y,w,c)=>P(x,y,w,w*0.8,{r:'42% 58% 50% 46%',bg:c});
const bar=(x,y,w,h,c)=>P(x,y,w,h,{r:'6px',bg:c});
module.exports={P,C,rbc,o2,co2,cell,bit,bar};
const src=(ch,title,os)=>[{label:'Your textbook: Fundamentals of Anatomy and Physiology (Rizzo), Chapter '+ch+(title?': '+title:'')},{label:'OpenStax Anatomy and Physiology 2e, '+os,url:'https://openstax.org/details/books/anatomy-and-physiology-2e'}];
module.exports.src=src;
