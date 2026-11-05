(function(){
  'use strict';

  const DATA=window.AP_COURSE;
  const STORAGE_KEY='holusAnatomyPhysiologyV1';
  const app=document.getElementById('app');
  const select=document.getElementById('lesson-select');
  const status=document.getElementById('unit-status');
  const nav=[...document.querySelectorAll('[data-view]')];
  const defaults={selectedLesson:1,view:'overview',positions:{},answers:{},flags:{},review:false};
  let state=loadState();

  function loadState(){
    try{return {...defaults,...JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')}}catch(_){return {...defaults}}
  }
  function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
  function esc(value){return String(value??'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]))}
  function currentLesson(){return DATA.lessons.find(x=>x.number===Number(state.selectedLesson))||DATA.lessons[0]}
  function lessonKey(){return currentLesson().id}
  function answers(){return state.answers[lessonKey()]||{}}
  function flags(){return state.flags[lessonKey()]||{}}
  function position(){return Math.min(Math.max(Number(state.positions[lessonKey()]||0),0),currentLesson().questions.length-1)}
  function answeredCount(lesson=currentLesson()){return Object.keys(state.answers[lesson.id]||{}).length}
  function totalAnswered(){return DATA.lessons.reduce((sum,lesson)=>sum+answeredCount(lesson),0)}
  function totalQuestions(){return DATA.lessons.reduce((sum,lesson)=>sum+lesson.questionCount,0)}
  function hashFor(view){return view==='learn'?`#lesson-${state.selectedLesson}`:`#${view}`}
  function setView(view,push=true){state.view=view;state.review=false;save();if(push)history.replaceState(null,'',hashFor(view));render()}
  function selectLesson(number,view=state.view){state.selectedLesson=Number(number);state.view=view;state.review=false;save();history.replaceState(null,'',hashFor(view));render()}
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

  function footer(){return `<p class="footer-note">Independent, source-aware study companion for Juliana. Teaching content will be added only from material you provide or verified sources.</p>`}
  function sourceBoundary(){return `<aside class="source-boundary"><strong>Source boundary</strong><p>The 505 supplied questions are preserved as answer-and-save practice. No official answer key or final-exam file was included, so this course does not guess a score. Verified teaching, flashcards, explanations and grading can be added when the book content or answer key becomes available.</p></aside>`}

  function renderOverview(){
    const blocks=DATA.blocks.map(block=>{
      const lessons=block.lessonIds.map(id=>DATA.lessons.find(x=>x.number===id)).map(lesson=>`<button class="lesson-card" type="button" data-lesson="${lesson.number}"><span class="number">Lesson ${lesson.number}</span><h4>${esc(lesson.title)}</h4><p>${lesson.questionCount} supplied source questions</p><span class="lesson-status">Quiz ready · teaching content pending</span></button>`).join('');
      return `<section><div class="block-head"><span>${esc(block.label)}</span><h3>${esc(block.title)}</h3></div><div class="lesson-grid">${lessons}</div></section>`;
    }).join('');
    app.innerHTML=`<div class="ap-shell"><section class="overview-hero"><div><p class="ap-eyebrow">Course 06 · body systems</p><h1 class="ap-title">Study the body<br>as one system.</h1><p class="ap-lede">A calm, connected home for all 19 lessons in <em>Fundamentals of Anatomy and Physiology</em>, Fourth Edition. The structure and source quizzes are ready now; the substantial teaching will be integrated here when you have access to the book.</p><div class="hero-actions"><button class="ap-button" type="button" data-action="continue">Open Lesson ${state.selectedLesson} →</button><button class="ap-button secondary" type="button" data-action="open-quiz">Continue source questions</button></div><div class="overview-stats"><div class="stat"><strong>19</strong><span>lesson workspaces</span></div><div class="stat"><strong>${totalQuestions()}</strong><span>supplied questions</span></div><div class="stat"><strong>5</strong><span>connected blocks</span></div><div class="stat"><strong>${totalAnswered()}</strong><span>responses saved</span></div></div>${sourceBoundary()}</div><div class="overview-art"><img src="../../assets/course-anatomy-physiology.svg" alt="Abstract anatomical figure showing connected body systems"></div></section><div class="section-head"><div><p class="ap-eyebrow">Your course map</p><h2>One consistent route through the body.</h2></div><p>Choose a lesson now. Every workspace already has the same learning architecture and its supplied quiz.</p></div><div class="block-list">${blocks}</div>${footer()}</div>`;
  }

  function renderLearn(){
    const lesson=currentLesson();
    const cards=[
      ['01 · Orient','Learning outcomes and map','What you should understand, locate and explain by the end of the lesson.'],
      ['02 · Understand','Substantial teaching','Book-grounded anatomy and physiology explained in learner-sized sections.'],
      ['03 · See it','Labelled anatomy visuals','Structures, positions and relationships made visible—not left as a wall of terms.'],
      ['04 · Connect','System and process maps','Trace how structures work together and how one change affects the wider system.'],
      ['05 · Retrieve','Vocabulary and flashcards','Recall the essential language before moving into applied questions.'],
      ['06 · Apply','Cases, practice and source quiz','Use the knowledge, then answer the supplied lesson-test questions.']
    ].map(([step,title,copy])=>`<article class="route-card pending"><span>${step}</span><h3>${title}</h3><p>${copy}</p><b class="pending-pill">Content slot ready</b></article>`).join('');
    app.innerHTML=`<div class="ap-shell"><section class="lesson-hero"><div><p class="ap-eyebrow">Lesson ${lesson.number} · learning workspace</p><h1 class="ap-title">${esc(lesson.title)}</h1><p class="ap-lede">This lesson has a complete learning structure without placeholder teaching masquerading as book content. When the chapter arrives, its substantial knowledge will live directly in this path—not behind “extended notes.”</p><div class="lesson-meta"><span class="meta-chip">Chapter ${lesson.number}</span><span class="meta-chip">${lesson.questionCount} source questions ready</span><span class="meta-chip">Progress saves locally</span></div><div class="hero-actions"><button class="ap-button" type="button" data-action="open-quiz">Open Lesson ${lesson.number} quiz →</button><button class="ap-button secondary" type="button" data-view-target="overview">Course map</button></div></div><div class="lesson-orbit" aria-hidden="true"><strong>${String(lesson.number).padStart(2,'0')}</strong></div></section><div class="workspace-intro"><article class="workspace-note"><h3>What is ready now</h3><p>The exact lesson title, chapter position, study route and all supplied test questions are in place.</p></article><article class="workspace-note"><h3>What is intentionally pending</h3><p>Teaching, explanations, visuals, flashcards and answer feedback will be built from the book content when supplied.</p></article></div><div class="section-head"><div><p class="ap-eyebrow">Consistent lesson anatomy</p><h2>Six purposeful stages.</h2></div><p>The same learning rhythm will be used across all 19 lessons.</p></div><div class="learning-route">${cards}</div>${footer()}</div>`;
  }

  function renderPlaceholder(kind){
    const lesson=currentLesson();
    const configs={
      flashcards:{eyebrow:'Recall workspace',title:'Flashcards will reinforce the chapter—not replace it.',lede:'This deck will be generated from verified Lesson '+lesson.number+' content so every definition, structure and process matches the assigned book.',cards:[['01','Structures and locations','Name the structure, locate it and distinguish it from nearby anatomy.'],['02','Functions','Connect each structure to what it does and why that function matters.'],['03','Processes','Recall sequences, feedback loops and cause-and-effect relationships.'],['04','Clinical language','Practise the vocabulary needed to explain the system accurately.']]},
      practice:{eyebrow:'Application workspace',title:'Practice will move beyond recognition.',lede:'Lesson '+lesson.number+' will use labelled diagrams, sequencing, teach-back and short cases once its verified teaching content is available.',cards:[['A','Label it','Identify structures from clean, accessible diagrams.'],['B','Trace it','Follow a molecule, signal, fluid or force through the system.'],['C','Explain it','Describe the mechanism aloud before revealing the model.'],['D','Apply it','Reason through a short nutrition or health-relevant case.']]}
    };
    const c=configs[kind];
    app.innerHTML=`<div class="ap-shell"><section class="placeholder-hero"><p class="ap-eyebrow">Lesson ${lesson.number} · ${c.eyebrow}</p><h1 class="ap-title">${c.title}</h1><p class="ap-lede">${c.lede}</p><div class="hero-actions"><button class="ap-button" type="button" data-action="open-quiz">Use the supplied quiz now →</button><button class="ap-button secondary" type="button" data-view-target="learn">View lesson structure</button></div></section><div class="placeholder-grid">${c.cards.map(([icon,title,copy])=>`<article class="placeholder-card"><span class="icon">${icon}</span><h2>${title}</h2><p>${copy}</p><b class="pending-pill">Awaiting verified content</b></article>`).join('')}</div>${footer()}</div>`;
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
    app.innerHTML=`<div class="ap-shell quiz-shell"><article class="review-card"><p class="ap-eyebrow">Lesson ${lesson.number} · response review</p><h1 class="ap-title">Your saved responses</h1><p class="ap-lede">This is a completion review, not a score. When a verified key is available, the same questions can gain correct-answer feedback and explanations.</p><div class="review-summary"><div class="review-stat"><strong>${answeredCount(lesson)}</strong><span>answered</span></div><div class="review-stat"><strong>${unanswered}</strong><span>unanswered</span></div><div class="review-stat"><strong>${flagged}</strong><span>marked to revisit</span></div></div><div class="hero-actions"><button class="ap-button" type="button" data-action="return-quiz">Return to questions</button>${unanswered?'<button class="ap-button secondary" type="button" data-action="first-unanswered">First unanswered</button>':''}<button class="ap-button secondary" type="button" data-action="clear-responses">Clear this lesson</button></div><div class="response-list">${rows}</div></article>${footer()}</div>`;
  }

  function render(){
    select.value=String(state.selectedLesson);
    const lesson=currentLesson();
    status.textContent=`Lesson ${lesson.number} · quiz ready · teaching content pending`;
    nav.forEach(button=>{
      const active=button.dataset.view===state.view;
      button.classList.toggle('active',active);
      button.setAttribute('aria-pressed',String(active));
    });
    if(state.view==='overview')renderOverview();
    else if(state.view==='learn')renderLearn();
    else if(state.view==='flashcards'||state.view==='practice')renderPlaceholder(state.view);
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
    if(target.dataset.question!==undefined){state.positions[lessonKey()]=Number(target.dataset.question);state.review=false;save();renderQuiz();return}
    const action=target.dataset.action;if(!action)return;
    const lesson=currentLesson(),idx=position(),question=lesson.questions[idx];
    if(action==='continue')setView('learn');
    else if(action==='open-quiz')setView('quiz');
    else if(action==='quiz-prev'){state.positions[lesson.id]=Math.max(0,idx-1);save();renderQuiz()}
    else if(action==='quiz-next'){if(idx===lesson.questionCount-1){state.review=true}else state.positions[lesson.id]=idx+1;save();renderQuiz()}
    else if(action==='toggle-flag'){state.flags[lesson.id]={...(state.flags[lesson.id]||{}),[question.number]:!flags()[question.number]};save();renderQuiz()}
    else if(action==='review'){state.review=true;save();renderQuiz()}
    else if(action==='return-quiz'){state.review=false;save();renderQuiz()}
    else if(action==='first-unanswered'){const first=lesson.questions.findIndex(item=>answers()[item.number]===undefined);state.positions[lesson.id]=Math.max(0,first);state.review=false;save();renderQuiz()}
    else if(action==='clear-responses'&&window.confirm(`Clear every saved response and review flag for Lesson ${lesson.number}?`)){state.answers[lesson.id]={};state.flags[lesson.id]={};state.positions[lesson.id]=0;state.review=false;save();renderQuiz()}
  });

  syncFromHash();setupChrome();render();
})();
