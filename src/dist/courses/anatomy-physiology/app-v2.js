(function(){
  'use strict';

  const DATA=window.AP_COURSE;
  const LEARNING=window.AP_LEARNING||{};
  const STORAGE_KEY='holusAnatomyPhysiologyV1';
  const app=document.getElementById('app');
  const select=document.getElementById('lesson-select');
  const status=document.getElementById('unit-status');
  const nav=[...document.querySelectorAll('[data-view]')];
  const defaults={
    selectedLesson:1,
    view:'overview',
    positions:{},
    answers:{},
    flags:{},
    review:false,
    learning:{},
    flashcards:{},
    practice:{}
  };
  let state=loadState();

  function loadState(){
    try{
      const parsed=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}');
      return {
        ...defaults,
        ...parsed,
        positions:parsed.positions||{},
        answers:parsed.answers||{},
        flags:parsed.flags||{},
        learning:parsed.learning||{},
        flashcards:parsed.flashcards||{},
        practice:parsed.practice||{}
      };
    }catch(_){return {...defaults}}
  }
  function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
  function scrollToView(selector='#app'){
    requestAnimationFrame(()=>{
      const target=document.querySelector(selector)||app;
      const top=Math.max(0,target.getBoundingClientRect().top+window.scrollY-154);
      window.scrollTo({top,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
    });
  }
  function esc(value){return String(value??'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]))}
  function currentLesson(){return DATA.lessons.find(x=>x.number===Number(state.selectedLesson))||DATA.lessons[0]}
  function lessonKey(){return currentLesson().id}
  function learningFor(id=lessonKey()){return LEARNING[id]||null}
  function learningState(id=lessonKey()){
    state.learning[id]=state.learning[id]||{version:learningFor(id)?.version||1,launched:false,position:0,responses:{},completed:{},confidence:{}};
    state.learning[id].responses=state.learning[id].responses||{};
    state.learning[id].completed=state.learning[id].completed||{};
    state.learning[id].confidence=state.learning[id].confidence||{};
    return state.learning[id];
  }
  function flashcardState(id=lessonKey()){
    state.flashcards[id]=state.flashcards[id]||{position:0,flipped:false,mastered:{}};
    state.flashcards[id].mastered=state.flashcards[id].mastered||{};
    return state.flashcards[id];
  }
  function practiceState(id=lessonKey()){
    state.practice[id]=state.practice[id]||{position:0,revealed:false,completed:{}};
    state.practice[id].completed=state.practice[id].completed||{};
    return state.practice[id];
  }
  function chapterLabel(content,lesson=currentLesson()){
    const value=content?.chapter;
    if(value===undefined||value===null||value==='')return `Chapter ${lesson.number}`;
    return /^chapter\b/i.test(String(value))?String(value):`Chapter ${value}`;
  }
  function momentsFor(content){return (content?.modules||[]).flatMap((module,moduleIndex)=>(module.moments||[]).map(moment=>({...moment,module,moduleIndex})))}
  function answers(){return state.answers[lessonKey()]||{}}
  function flags(){return state.flags[lessonKey()]||{}}
  function position(){return Math.min(Math.max(Number(state.positions[lessonKey()]||0),0),currentLesson().questions.length-1)}
  function answeredCount(lesson=currentLesson()){return Object.keys(state.answers[lesson.id]||{}).length}
  function totalAnswered(){return DATA.lessons.reduce((sum,lesson)=>sum+answeredCount(lesson),0)}
  function totalQuestions(){return DATA.lessons.reduce((sum,lesson)=>sum+lesson.questionCount,0)}
  function readyCount(){return DATA.lessons.filter(lesson=>Boolean(LEARNING[lesson.id])).length}
  function hashFor(view){return view==='learn'?`#lesson-${state.selectedLesson}`:`#${view}`}
  function setView(view,push=true){state.view=view;state.review=false;save();if(push)history.replaceState(null,'',hashFor(view));render();scrollToView()}
  function selectLesson(number,view=state.view){state.selectedLesson=Number(number);state.view=view;state.review=false;save();history.replaceState(null,'',hashFor(view));render();scrollToView()}
  function syncFromHash(){
    const hash=location.hash.replace('#','');
    const lessonMatch=hash.match(/^lesson-(\d+)$/);
    if(lessonMatch){state.selectedLesson=Math.min(19,Math.max(1,Number(lessonMatch[1])));state.view='learn'}
    else if(['overview','flashcards','practice','quiz'].includes(hash))state.view=hash;
    else state.view='overview';
  }

  function setupChrome(){
    select.innerHTML=DATA.lessons.map(lesson=>`<option value="${lesson.number}">Lesson ${lesson.number} · ${esc(lesson.title)}</option>`).join('');
    select.value=String(state.selectedLesson);
    select.addEventListener('change',()=>selectLesson(select.value,state.view==='overview'?'learn':state.view));
    nav.forEach(button=>button.addEventListener('click',()=>setView(button.dataset.view)));
    addEventListener('hashchange',()=>{syncFromHash();render()});
  }

  function footer(){return `<p class="footer-note">Textbook-grounded, source-aware study companion for Juliana. Teaching is transformed into original study explanations; source quizzes remain separate and unscored without a verified key.</p>`}
  function sourceBoundary(){return `<aside class="source-boundary"><strong>Two trusted layers</strong><p>The teaching is an original study companion grounded in the supplied fourth-edition textbook. The 505 course-test questions remain preserved as a separate answer-and-save bank. Because the supplied tests contain no official key, the source quiz does not invent a score. No final-exam file was included.</p></aside>`}
  function pendingStatus(lesson){return LEARNING[lesson.id]?'Interactive lesson + quiz ready':'Quiz ready · teaching content pending'}

  function renderOverview(){
    const built=readyCount();
    const blocks=DATA.blocks.map(block=>{
      const lessons=block.lessonIds.map(id=>DATA.lessons.find(x=>x.number===id)).map(lesson=>`<button class="lesson-card ${LEARNING[lesson.id]?'ready':''}" type="button" data-lesson="${lesson.number}"><span class="number">Lesson ${lesson.number}</span><h4>${esc(lesson.title)}</h4><p>${lesson.questionCount} supplied source questions</p><span class="lesson-status">${pendingStatus(lesson)}</span></button>`).join('');
      return `<section><div class="block-head"><span>${esc(block.label)}</span><h3>${esc(block.title)}</h3></div><div class="lesson-grid">${lessons}</div></section>`;
    }).join('');
    app.innerHTML=`<div class="ap-shell"><section class="overview-hero"><div><p class="ap-eyebrow">Course 06 · body systems</p><h1 class="ap-title">Learn the body<br>as one system.</h1><p class="ap-lede">A complete, interactive companion to <em>Fundamentals of Anatomy and Physiology</em>, Fourth Edition. Dense knowledge is broken into focused learning moments, visual models, retrieval practice and application—without hiding the substance behind extra notes.</p><div class="hero-actions"><button class="ap-button" type="button" data-action="continue">Open Lesson ${state.selectedLesson} →</button><button class="ap-button secondary" type="button" data-action="open-quiz">Continue source questions</button></div><div class="overview-stats"><div class="stat"><strong>${built}/19</strong><span>interactive lessons built</span></div><div class="stat"><strong>${totalQuestions()}</strong><span>supplied questions</span></div><div class="stat"><strong>5</strong><span>connected blocks</span></div><div class="stat"><strong>${totalAnswered()}</strong><span>quiz responses saved</span></div></div>${sourceBoundary()}</div><div class="overview-art"><img src="../../assets/course-anatomy-physiology.svg" alt="Abstract anatomical figure showing connected body systems"></div></section><div class="section-head"><div><p class="ap-eyebrow">Your course map</p><h2>One consistent route through the body.</h2></div><p>Every lesson uses the same rhythm: orient, understand, see, connect, retrieve and apply.</p></div><div class="block-list">${blocks}</div>${footer()}</div>`;
  }

  function renderPendingLearn(){
    const lesson=currentLesson();
    const cards=[
      ['01 · Orient','Learning outcomes and map','What you should understand, locate and explain by the end of the lesson.'],
      ['02 · Understand','Substantial teaching','Book-grounded anatomy and physiology explained in learner-sized sections.'],
      ['03 · See it','Labelled anatomy visuals','Structures, positions and relationships made visible—not left as a wall of terms.'],
      ['04 · Connect','System and process maps','Trace how structures work together and how one change affects the wider system.'],
      ['05 · Retrieve','Vocabulary and flashcards','Recall the essential language before moving into applied questions.'],
      ['06 · Apply','Cases, practice and source quiz','Use the knowledge, then answer the supplied lesson-test questions.']
    ].map(([step,title,copy])=>`<article class="route-card pending"><span>${step}</span><h3>${title}</h3><p>${copy}</p><b class="pending-pill">Content slot ready</b></article>`).join('');
    app.innerHTML=`<div class="ap-shell"><section class="lesson-hero"><div><p class="ap-eyebrow">Lesson ${lesson.number} · learning workspace</p><h1 class="ap-title">${esc(lesson.title)}</h1><p class="ap-lede">The study architecture is ready. Verified teaching will be integrated directly into this path as soon as its source chapter is available.</p><div class="lesson-meta"><span class="meta-chip">Chapter ${lesson.number}</span><span class="meta-chip">${lesson.questionCount} source questions ready</span></div><div class="hero-actions"><button class="ap-button" type="button" data-action="open-quiz">Open Lesson ${lesson.number} quiz →</button><button class="ap-button secondary" type="button" data-view-target="overview">Course map</button></div></div><div class="lesson-orbit" aria-hidden="true"><strong>${String(lesson.number).padStart(2,'0')}</strong></div></section><div class="section-head"><div><p class="ap-eyebrow">Consistent lesson anatomy</p><h2>Six purposeful stages.</h2></div><p>The same learning rhythm will be used across all 19 lessons.</p></div><div class="learning-route">${cards}</div>${footer()}</div>`;
  }

  function renderLearn(){
    const content=learningFor();
    if(!content){renderPendingLearn();return}
    const progress=learningState();
    if(!progress.launched){renderLearningLaunch(content,progress);return}
    renderLearningPlayer(content,progress);
  }

  function renderLearningLaunch(content,progress){
    const lesson=currentLesson();
    const completed=Object.keys(progress.completed||{}).length;
    const moments=momentsFor(content);
    let momentNumber=0;
    const modules=(content.modules||[]).map((module,index)=>{
      const momentList=(module.moments||[]).map(moment=>{
        momentNumber+=1;
        return `<li><span>${momentNumber}</span><strong>${esc(moment.title)}</strong></li>`;
      }).join('');
      return `<article class="module-card"><span>Module ${index+1}</span><h3>${esc(module.title)}</h3><p>${esc(module.summary)}</p><b class="module-count">Contains ${module.moments?.length||0} ${module.moments?.length===1?'moment':'moments'}</b><ol class="module-moment-list">${momentList}</ol></article>`;
    }).join('');
    const outcomes=(content.outcomes||[]).map(item=>`<li>${esc(item)}</li>`).join('');
    app.innerHTML=`<div class="ap-shell"><section class="learning-launch"><div><p class="ap-eyebrow">Lesson ${lesson.number} · interactive chapter</p><h1 class="ap-title">${esc(content.title||lesson.title)}</h1><p class="ap-lede">Substantial chapter knowledge, paced into focused moments. Read, map, retrieve and apply each idea before moving on.</p><div class="lesson-meta"><span class="meta-chip">${esc(chapterLabel(content,lesson))}</span><span class="meta-chip">${esc(content.duration||'60–90 minutes')}</span><span class="meta-chip">${content.modules.length} modules · ${moments.length} study moments</span></div><div class="hero-actions"><button class="ap-button" type="button" data-action="learn-start">${completed?'Resume lesson':'Begin lesson'} →</button><button class="ap-button secondary" type="button" data-action="open-quiz">Source quiz</button></div></div><aside class="outcomes-card"><p class="ap-eyebrow">By the end, you can</p><ul>${outcomes}</ul></aside></section><div class="section-head"><div><p class="ap-eyebrow">Your route</p><h2>${content.modules.length} modules organise ${moments.length} study moments.</h2></div><p><strong>Module</strong> = a topic group. <strong>Moment</strong> = one focused study step inside it. You study one moment at a time.</p></div><div class="module-grid">${modules}</div>${footer()}</div>`;
  }

  function renderVisual(visual){
    if(!visual)return '';
    const nodes=(visual.items||[]).map((item,index)=>`<div class="visual-node"><span>${String(index+1).padStart(2,'0')}</span><div><b>${esc(item.label)}</b><small>${esc(item.detail)}</small></div></div>`).join('');
    return `<figure class="concept-visual"><figcaption><span>Visual model</span><strong>${esc(visual.title)}</strong></figcaption><div class="visual-flow ${esc(visual.kind||'map')}">${nodes}</div></figure>`;
  }

  function renderActivity(activity,momentId,response){
    if(!activity)return '';
    const options=(activity.options||[]).map((option,index)=>{
      const selected=Number(response)===index;
      return `<button type="button" class="activity-option ${selected?'selected':''}" data-activity-choice="${index}"><span>${String.fromCharCode(65+index)}</span>${esc(option.text)}</button>`;
    }).join('');
    let feedback='';
    if(response!==undefined){
      const chosen=activity.options?.[Number(response)];
      feedback=`<div class="activity-feedback ${chosen?.correct?'correct':'retry'}" role="status"><strong>${chosen?.correct?'Strong connection':'Revisit the mechanism'}</strong><p>${esc(chosen?.feedback||'Use the explanation above, then try again.')}</p></div>`;
    }
    return `<section class="activity-card"><p class="ap-eyebrow">Check your understanding</p><h3>${esc(activity.prompt)}</h3><div class="activity-options">${options}</div>${feedback}</section>`;
  }

  function renderLearningPlayer(content,progress){
    const lesson=currentLesson();
    const moments=momentsFor(content);
    const index=Math.min(Math.max(Number(progress.position||0),0),moments.length);
    if(index>=moments.length){renderLearningComplete(content,progress);return}
    const current=moments[index];
    const completedCount=Object.keys(progress.completed||{}).length;
    const pct=Math.round(completedCount/moments.length*100);
    const moduleRail=(content.modules||[]).map((module,moduleIndex)=>{
      const start=moments.findIndex(item=>item.moduleIndex===moduleIndex);
      const active=current.moduleIndex===moduleIndex;
      return `<button type="button" data-learn-jump="${start}" class="${active?'active':''}" ${active?'aria-current="step"':''}><span>${moduleIndex+1}</span>${esc(module.title)}</button>`;
    }).join('');
    const paragraphs=(current.teaching||[]).map(text=>`<p>${esc(text)}</p>`).join('');
    const points=(current.keyPoints||[]).map(point=>`<li>${esc(point)}</li>`).join('');
    const confidence=progress.confidence?.[current.id];
    const response=progress.responses?.[current.id];
    app.innerHTML=`<div class="ap-shell learning-shell"><div class="learning-topline"><button class="text-button" type="button" data-action="learn-map">← Lesson map</button><span>Moment ${index+1} of ${moments.length}</span></div><div class="moment-progress" role="progressbar" aria-label="Lesson completion" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><span style="width:${pct}%"></span></div><nav class="module-rail" aria-label="Lesson modules">${moduleRail}</nav><article class="moment-shell"><header class="moment-header"><div><p class="ap-eyebrow">Module ${current.moduleIndex+1} · ${esc(current.module.title)}</p><h1>${esc(current.title)}</h1></div><span class="minutes">Focused study</span></header><aside class="high-yield"><span>High-yield idea</span><strong>${esc(current.highYield)}</strong></aside><div class="moment-knowledge"><section class="knowledge-block"><h2>Understand it</h2>${paragraphs}${points?`<ul class="key-points">${points}</ul>`:''}</section>${renderVisual(current.visual)}<div class="moment-callouts">${current.mnemonic?`<aside class="mnemonic-card"><span>Memory cue</span><h3>${esc(current.mnemonic.title)}</h3><b>${esc(current.mnemonic.cue)}</b><p>${esc(current.mnemonic.explanation)}</p></aside>`:''}${current.goodToKnow?`<aside class="learning-callout good"><span>Good to know</span><p>${esc(current.goodToKnow)}</p></aside>`:''}${current.practiceConnection?`<aside class="learning-callout practice-link"><span>In practice</span><p>${esc(current.practiceConnection)}</p></aside>`:''}</div>${renderActivity(current.activity,current.id,response)}<section class="confidence-card"><p>How confidently could you explain this idea without looking?</p><div class="confidence-row"><button type="button" data-confidence="review" class="${confidence==='review'?'active':''}">Need another pass</button><button type="button" data-confidence="building" class="${confidence==='building'?'active':''}">Getting there</button><button type="button" data-confidence="confident" class="${confidence==='confident'?'active':''}">I can explain it</button></div></section></div></article><div class="learning-pager"><button class="ap-button secondary" type="button" data-action="learn-prev" ${index===0?'disabled':''}>← Previous</button><button class="ap-button" type="button" data-action="learn-next">${index===moments.length-1?'Complete lesson':'Continue'} →</button></div>${footer()}</div>`;
  }

  function renderLearningComplete(content,progress){
    const lesson=currentLesson();
    const prompts=(content.caseStudy?.prompts||[]).map(item=>`<li>${esc(item)}</li>`).join('');
    const recap=(content.recap||[]).map(item=>`<li>${esc(item)}</li>`).join('');
    app.innerHTML=`<div class="ap-shell"><section class="completion-hero"><p class="ap-eyebrow">Lesson ${lesson.number} · synthesis</p><h1 class="ap-title">Connect the whole lesson.</h1><p class="ap-lede">You have moved through every learning moment. Use the case and recap to consolidate the chapter before the source-question practice.</p><div class="hero-actions"><button class="ap-button" type="button" data-action="open-quiz">Open source quiz →</button><button class="ap-button secondary" type="button" data-action="learn-restart">Review from the beginning</button></div></section><div class="synthesis-grid"><article class="case-card"><p class="ap-eyebrow">Case study</p><h2>${esc(content.caseStudy?.title||'Apply the chapter')}</h2><p>${esc(content.caseStudy?.scenario)}</p><ol>${prompts}</ol><aside><strong>Takeaway</strong><p>${esc(content.caseStudy?.takeaway)}</p></aside></article><article class="recap-card"><p class="ap-eyebrow">Most important concepts</p><h2>Keep these connected.</h2><ul>${recap}</ul></article></div>${footer()}</div>`;
  }

  function renderPlaceholder(kind){
    const lesson=currentLesson();
    const configs={
      flashcards:{eyebrow:'Recall workspace',title:'Flashcards will reinforce the chapter—not replace it.',lede:'This deck will be generated from verified Lesson '+lesson.number+' content.'},
      practice:{eyebrow:'Application workspace',title:'Practice will move beyond recognition.',lede:'Lesson '+lesson.number+' will use retrieval, teach-back and short application prompts.'}
    };
    const c=configs[kind];
    app.innerHTML=`<div class="ap-shell"><section class="placeholder-hero"><p class="ap-eyebrow">Lesson ${lesson.number} · ${c.eyebrow}</p><h1 class="ap-title">${c.title}</h1><p class="ap-lede">${c.lede}</p><div class="hero-actions"><button class="ap-button" type="button" data-action="open-quiz">Use the supplied quiz now →</button><button class="ap-button secondary" type="button" data-view-target="learn">View lesson structure</button></div></section>${footer()}</div>`;
  }

  function renderFlashcards(){
    const content=learningFor();
    if(!content?.flashcards?.length){renderPlaceholder('flashcards');return}
    const lesson=currentLesson();
    const deck=content.flashcards;
    const cardState=flashcardState();
    cardState.position=Math.min(Math.max(Number(cardState.position||0),0),deck.length-1);
    const card=deck[cardState.position];
    const mastered=Object.keys(cardState.mastered||{}).filter(key=>cardState.mastered[key]).length;
    app.innerHTML=`<div class="ap-shell recall-shell"><div class="runner-heading"><div><p class="ap-eyebrow">Lesson ${lesson.number} · active recall</p><h1>Flashcards</h1><p>Say the answer before you reveal it. Mark only cards you can explain, not merely recognize.</p></div><div class="runner-stat"><strong>${mastered}/${deck.length}</strong><span>marked confident</span></div></div><div class="runner-progress" role="progressbar" aria-label="Flashcards reviewed" aria-valuemin="0" aria-valuemax="${deck.length}" aria-valuenow="${cardState.position+1}"><span style="width:${Math.round((cardState.position+1)/deck.length*100)}%"></span></div><button type="button" class="flashcard-card ${cardState.flipped?'flipped':''}" data-action="card-flip" aria-pressed="${cardState.flipped}"><span>${cardState.flipped?'Answer':'Prompt'} · ${esc(card.tag||'chapter concept')}</span><strong>${esc(cardState.flipped?card.back:card.front)}</strong><small>Tap to ${cardState.flipped?'return to the prompt':'reveal the answer'}</small></button><div class="runner-controls"><button class="ap-button secondary" type="button" data-action="card-prev" ${cardState.position===0?'disabled':''}>← Previous</button><button class="master-button ${cardState.mastered[cardState.position]?'active':''}" type="button" data-action="card-master">${cardState.mastered[cardState.position]?'Marked confident':'Mark confident'}</button><button class="ap-button" type="button" data-action="card-next" ${cardState.position===deck.length-1?'disabled':''}>Next →</button></div><p class="runner-index">Card ${cardState.position+1} of ${deck.length}</p>${footer()}</div>`;
  }

  function renderPractice(){
    const content=learningFor();
    if(!content?.practice?.length){renderPlaceholder('practice');return}
    const lesson=currentLesson();
    const items=content.practice;
    const pState=practiceState();
    pState.position=Math.min(Math.max(Number(pState.position||0),0),items.length-1);
    const item=items[pState.position];
    const completed=Object.keys(pState.completed||{}).filter(key=>pState.completed[key]).length;
    app.innerHTML=`<div class="ap-shell practice-shell"><div class="runner-heading"><div><p class="ap-eyebrow">Lesson ${lesson.number} · retrieval practice</p><h1>Explain before you reveal.</h1><p>These original prompts prepare you to reason through the source quiz rather than memorize its option pattern.</p></div><div class="runner-stat"><strong>${completed}/${items.length}</strong><span>completed</span></div></div><div class="practice-card"><span>${esc(item.tag||'retrieval')} · Prompt ${pState.position+1}</span><h2>${esc(item.prompt)}</h2>${pState.revealed?`<div class="practice-answer"><strong>Model answer</strong><p>${esc(item.answer)}</p><b>Why it matters</b><p>${esc(item.rationale)}</p></div>`:`<button class="ap-button" type="button" data-action="practice-reveal">Reveal model answer</button>`}</div><div class="runner-controls"><button class="ap-button secondary" type="button" data-action="practice-prev" ${pState.position===0?'disabled':''}>← Previous</button><button class="ap-button" type="button" data-action="practice-next">${pState.position===items.length-1?'Finish practice':'Next prompt'} →</button></div><p class="runner-index">Prompt ${pState.position+1} of ${items.length}</p>${footer()}</div>`;
  }

  function renderQuiz(){
    const lesson=currentLesson();
    if(state.review){renderReview();return}
    const index=position(),question=lesson.questions[index],saved=answers(),marked=flags(),chosen=saved[question.number];
    const options=question.options.map((option,i)=>`<label class="quiz-option ${Number(chosen)===i?'selected':''}"><input type="radio" name="ap-answer" value="${i}" ${Number(chosen)===i?'checked':''}><span><b>${String.fromCharCode(65+i)}.</b>${esc(option)}</span></label>`).join('');
    const map=lesson.questions.map((item,i)=>`<button type="button" data-question="${i}" class="${i===index?'current ':''}${saved[item.number]!==undefined?'answered ':''}${marked[item.number]?'flagged':''}" aria-label="Question ${item.number}${saved[item.number]!==undefined?', answered':''}${marked[item.number]?', marked for review':''}">${item.number}</button>`).join('');
    const pct=Math.round(answeredCount(lesson)/lesson.questionCount*100);
    app.innerHTML=`<div class="ap-shell quiz-shell"><div class="quiz-heading"><div><p class="ap-eyebrow">Lesson ${lesson.number} · source-question practice</p><h1 class="${lesson.title.length>54?'long-title':''}">${esc(lesson.title)}</h1></div><div><strong>${answeredCount(lesson)} / ${lesson.questionCount}</strong><span>responses saved</span></div></div><div class="quiz-alert"><strong>Answer-and-save mode:</strong> the supplied printer version did not include a verified answer key. Your selections are saved, but no score or “correct” feedback is invented.</div><div class="quiz-progress" role="progressbar" aria-label="Quiz completion" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><span style="width:${pct}%"></span></div><div class="quiz-layout"><article class="question-card"><span class="question-kicker">Question ${question.number} of ${lesson.questionCount}</span><h2>${esc(question.prompt)}</h2><div class="option-list">${options}</div><div class="quiz-controls"><button class="ap-button secondary" type="button" data-action="quiz-prev" ${index===0?'disabled':''}>← Previous</button><div class="middle"><button class="flag-button ${marked[question.number]?'active':''}" type="button" data-action="toggle-flag">${marked[question.number]?'Marked for review':'Mark for review'}</button><button class="ap-button" type="button" data-action="quiz-next">${index===lesson.questionCount-1?'Review responses':'Next →'}</button></div></div></article><aside class="quiz-side"><h3>Question map</h3><p>Filled questions have a saved response. A coral underline means revisit later.</p><div class="question-map">${map}</div><button class="ap-button secondary review-button" type="button" data-action="review" style="width:100%;margin-top:18px">Review responses</button></aside></div>${footer()}</div>`;
  }

  function renderReview(){
    const lesson=currentLesson(),saved=answers(),marked=flags();
    const rows=lesson.questions.map(question=>{const choice=saved[question.number];return `<div class="response-row"><b>${question.number}</b><span>${choice===undefined?'<span class="unanswered">Not answered</span>':esc(question.options[choice])}${marked[question.number]?' · <em>marked for review</em>':''}</span></div>`}).join('');
    const unanswered=lesson.questionCount-answeredCount(lesson),flagged=Object.values(marked).filter(Boolean).length;
    app.innerHTML=`<div class="ap-shell quiz-shell"><article class="review-card"><p class="ap-eyebrow">Lesson ${lesson.number} · response review</p><h1 class="ap-title">Your saved responses</h1><p class="ap-lede">This is a completion review, not a score. A verified answer key has not been supplied.</p><div class="review-summary"><div class="review-stat"><strong>${answeredCount(lesson)}</strong><span>answered</span></div><div class="review-stat"><strong>${unanswered}</strong><span>unanswered</span></div><div class="review-stat"><strong>${flagged}</strong><span>marked to revisit</span></div></div><div class="hero-actions"><button class="ap-button" type="button" data-action="return-quiz">Return to questions</button>${unanswered?'<button class="ap-button secondary" type="button" data-action="first-unanswered">First unanswered</button>':''}<button class="ap-button secondary" type="button" data-action="clear-responses">Clear this lesson</button></div><div class="response-list">${rows}</div></article>${footer()}</div>`;
  }

  function render(){
    select.value=String(state.selectedLesson);
    const lesson=currentLesson();
    status.textContent=`Lesson ${lesson.number} · ${pendingStatus(lesson).toLowerCase()}`;
    nav.forEach(button=>{
      const active=button.dataset.view===state.view;
      button.classList.toggle('active',active);
      button.setAttribute('aria-pressed',String(active));
    });
    if(state.view==='overview')renderOverview();
    else if(state.view==='learn')renderLearn();
    else if(state.view==='flashcards')renderFlashcards();
    else if(state.view==='practice')renderPractice();
    else renderQuiz();
    document.title=`${state.view==='overview'?'Anatomy & Physiology':`Lesson ${lesson.number} · ${lesson.title}`} · hōlus.`;
  }

  app.addEventListener('change',event=>{
    if(event.target.name!=='ap-answer')return;
    const lesson=currentLesson(),question=lesson.questions[position()];
    state.answers[lesson.id]={...(state.answers[lesson.id]||{}),[question.number]:Number(event.target.value)};
    save();renderQuiz();
  });

  app.addEventListener('click',event=>{
    const target=event.target.closest('button');if(!target)return;
    if(target.dataset.lesson){selectLesson(target.dataset.lesson,'learn');return}
    if(target.dataset.viewTarget){setView(target.dataset.viewTarget);return}
    if(target.dataset.question!==undefined){state.positions[lessonKey()]=Number(target.dataset.question);state.review=false;save();renderQuiz();scrollToView('.quiz-heading');return}
    if(target.dataset.learnJump!==undefined){const progress=learningState();progress.position=Number(target.dataset.learnJump);progress.launched=true;save();renderLearn();scrollToView('.learning-topline');return}
    if(target.dataset.activityChoice!==undefined){
      const content=learningFor(),progress=learningState(),moments=momentsFor(content),current=moments[Math.min(progress.position,moments.length-1)];
      progress.responses[current.id]=Number(target.dataset.activityChoice);save();renderLearn();return;
    }
    if(target.dataset.confidence){
      const content=learningFor(),progress=learningState(),moments=momentsFor(content),current=moments[Math.min(progress.position,moments.length-1)];
      progress.confidence[current.id]=target.dataset.confidence;save();renderLearn();return;
    }
    const action=target.dataset.action;if(!action)return;
    const lesson=currentLesson(),idx=position(),question=lesson.questions[idx];
    if(action==='continue')setView('learn');
    else if(action==='open-quiz')setView('quiz');
    else if(action==='learn-start'){const progress=learningState();progress.launched=true;save();renderLearn();scrollToView('.learning-topline')}
    else if(action==='learn-map'){const progress=learningState();progress.launched=false;save();renderLearn();scrollToView('.learning-launch')}
    else if(action==='learn-prev'){const progress=learningState();progress.position=Math.max(0,progress.position-1);save();renderLearn();scrollToView('.learning-topline')}
    else if(action==='learn-next'){const content=learningFor(),progress=learningState(),moments=momentsFor(content),current=moments[Math.min(progress.position,moments.length-1)];if(current)progress.completed[current.id]=true;progress.position=Math.min(moments.length,progress.position+1);save();renderLearn();scrollToView(progress.position>=moments.length?'.completion-hero':'.learning-topline')}
    else if(action==='learn-restart'){const progress=learningState();progress.launched=true;progress.position=0;save();renderLearn();scrollToView('.learning-topline')}
    else if(action==='card-flip'){const cardState=flashcardState();cardState.flipped=!cardState.flipped;save();renderFlashcards()}
    else if(action==='card-prev'){const cardState=flashcardState();cardState.position=Math.max(0,cardState.position-1);cardState.flipped=false;save();renderFlashcards();scrollToView('.runner-heading')}
    else if(action==='card-next'){const cardState=flashcardState(),deck=learningFor().flashcards;cardState.position=Math.min(deck.length-1,cardState.position+1);cardState.flipped=false;save();renderFlashcards();scrollToView('.runner-heading')}
    else if(action==='card-master'){const cardState=flashcardState();cardState.mastered[cardState.position]=!cardState.mastered[cardState.position];save();renderFlashcards()}
    else if(action==='practice-reveal'){const pState=practiceState();pState.revealed=true;pState.completed[pState.position]=true;save();renderPractice()}
    else if(action==='practice-prev'){const pState=practiceState();pState.position=Math.max(0,pState.position-1);pState.revealed=false;save();renderPractice();scrollToView('.runner-heading')}
    else if(action==='practice-next'){const pState=practiceState(),items=learningFor().practice;pState.completed[pState.position]=true;if(pState.position===items.length-1){setView('quiz');return}pState.position+=1;pState.revealed=false;save();renderPractice();scrollToView('.runner-heading')}
    else if(action==='quiz-prev'){state.positions[lesson.id]=Math.max(0,idx-1);save();renderQuiz();scrollToView('.quiz-heading')}
    else if(action==='quiz-next'){if(idx===lesson.questionCount-1){state.review=true}else state.positions[lesson.id]=idx+1;save();renderQuiz();scrollToView('.quiz-heading')}
    else if(action==='toggle-flag'){state.flags[lesson.id]={...(state.flags[lesson.id]||{}),[question.number]:!flags()[question.number]};save();renderQuiz()}
    else if(action==='review'){state.review=true;save();renderQuiz()}
    else if(action==='return-quiz'){state.review=false;save();renderQuiz()}
    else if(action==='first-unanswered'){const first=lesson.questions.findIndex(item=>answers()[item.number]===undefined);state.positions[lesson.id]=Math.max(0,first);state.review=false;save();renderQuiz()}
    else if(action==='clear-responses'&&window.confirm(`Clear every saved response and review flag for Lesson ${lesson.number}?`)){state.answers[lesson.id]={};state.flags[lesson.id]={};state.positions[lesson.id]=0;state.review=false;save();renderQuiz()}
  });

  syncFromHash();setupChrome();render();
})();
