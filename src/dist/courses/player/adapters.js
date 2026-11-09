/* Loads a course's prepared lesson data (player/data/<id>.js) and hands the player one lesson at a time. */
(function(){
'use strict';
const ORDER=['nh','ns','sf','sh','nc','ap','vn'];
const HOME={nh:'../natural-health-fundamentals/',ns:'../nutrition-studies/index.html',sf:'../sports-fitness-nutrition.html',sh:'../staying-healthy-nutrition.html',nc:'../nutrition-counseling-education/',ap:'../anatomy-physiology/',vn:'../vegetarian-nutrition/'};
const base=(document.currentScript&&document.currentScript.src)?document.currentScript.src.replace(/[^/]*$/,''):'';
const load=id=>new Promise(ok=>{if(window.HOLUS_DATA&&window.HOLUS_DATA[id])return ok();const s=document.createElement('script');s.src=base+'data/'+id+'.js';s.onload=ok;s.onerror=ok;document.head.appendChild(s);});
const COURSES={};
ORDER.forEach(id=>{COURSES[id]={
  async get(n){await load(id);const C=(window.HOLUS_DATA||{})[id];if(!C)return null;
    const i=C.lessons.findIndex(l=>l.n===n);if(i<0)return null;const L=C.lessons[i];if(L.comingSoon)return null;
    const nx=C.lessons[i+1];
    return Object.assign({courseName:C.name,courseHome:HOME[id],total:C.lessons.length,nextTitle:nx&&!nx.comingSoon?nx.title:null,nextN:nx&&nx.n,flashcards:[],quiz:[]},L);},
  async getAll(mode,exam){await load(id);const C=(window.HOLUS_DATA||{})[id];if(!C)return null;
    if(exam){const E=(C.exams||[])[exam-1];if(!E)return null;return {courseName:C.name,courseHome:HOME[id],title:C.name,examTitle:E.title,examKicker:E.kicker,total:C.lessons.length,steps:[],flashcards:[],quiz:E.quiz.slice(),allQuizCount:E.quiz.length};}
    const cards=[],qs=[];C.lessons.forEach(l=>{(l.flashcards||[]).forEach(c=>cards.push(c));(l.quiz||[]).forEach(q=>qs.push(Object.assign({},q,{q:q.q})));});
    let quiz=qs;if(mode==='quiz'&&qs.length>20){const idx=qs.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]];}quiz=idx.slice(0,20).map(i=>qs[i]);}
    return {courseName:C.name,courseHome:HOME[id],title:C.name,total:C.lessons.length,steps:[],flashcards:cards,quiz,allQuizCount:qs.length};}
};});
window.HOLUS_COURSES=COURSES;window.HOLUS_ORDER=ORDER;window.HOLUS_LOAD=load;
})();
