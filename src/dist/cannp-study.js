(function(){
  'use strict';

  const STORAGE_KEY='holus.cannp.v16.study-player.v1';
  const LIBRARY_STATUS_KEY='holus.cannp.v16.status';
  const PDFS={
    '16-1':'https://cannp.ca/wp-content/uploads/2026/03/new-design-issue-16-1.pdf',
    '16-2':'https://cannp.ca/wp-content/uploads/2026/08/new-design-issue-16-2.pdf',
    '16-3':'https://cannp.ca/wp-content/uploads/2026/09/new-design-issue-16-3.pdf'
  };

  let state=loadState();
  let nodes={};

  function topics(){
    try{return Array.isArray(TOPICS)?TOPICS:[]}
    catch(_){return []}
  }

  function loadJson(key,fallback){
    try{return JSON.parse(localStorage.getItem(key)||'null')||fallback}
    catch(_){return fallback}
  }

  function saveJson(key,value){
    try{localStorage.setItem(key,JSON.stringify(value))}
    catch(_){/* Progress remains usable for the current page session. */}
  }

  function loadState(){
    const saved=loadJson(STORAGE_KEY,{});
    const completed=saved.completed&&typeof saved.completed==='object'?{...saved.completed}:{};
    const libraryStatus=loadJson(LIBRARY_STATUS_KEY,{});
    Object.entries(libraryStatus).forEach(([id,value])=>{if(value&&value.read)completed[id]=true});
    return {
      issue:['all','16-1','16-2','16-3'].includes(saved.issue)?saved.issue:'all',
      activeId:typeof saved.activeId==='string'?saved.activeId:'',
      completed
    };
  }

  function saveState(){saveJson(STORAGE_KEY,state)}

  function esc(value){
    return String(value??'').replace(/[&<>'"]/g,ch=>({
      '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'
    }[ch]));
  }

  function issueIncludes(topic,issue){
    if(issue==='all')return true;
    const source=String(topic.issue||'');
    if(source.includes(issue))return true;
    const range=source.match(/16-(\d+)\s+to\s+16-(\d+)/i);
    if(!range)return false;
    const requested=Number(issue.split('-')[1]);
    return requested>=Number(range[1])&&requested<=Number(range[2]);
  }

  function filteredTopics(){return topics().filter(topic=>issueIncludes(topic,state.issue))}

  function currentContext(){
    const filtered=filteredTopics();
    let index=filtered.findIndex(topic=>topic.id===state.activeId);
    if(index<0){index=0;state.activeId=filtered[0]?.id||'';saveState()}
    return {filtered,index,topic:filtered[index]||null};
  }

  function issuePdf(topic){
    const issue=String(topic?.issue||'');
    return PDFS[issue]?{url:PDFS[issue],external:true,label:`View Issue ${issue} PDF ↗`}:{url:'#cannp-pdfs',external:false,label:'Choose an original PDF ↓'};
  }

  function populateSelect(){
    if(!nodes.select)return;
    const counts={
      '16-1':topics().filter(topic=>issueIncludes(topic,'16-1')).length,
      '16-2':topics().filter(topic=>issueIncludes(topic,'16-2')).length,
      '16-3':topics().filter(topic=>issueIncludes(topic,'16-3')).length
    };
    nodes.select.innerHTML=[
      `<option value="all">All Volume 16 topics · ${topics().length}</option>`,
      `<option value="16-1">Issue 16-1 · ${counts['16-1']} moments</option>`,
      `<option value="16-2">Issue 16-2 · ${counts['16-2']} moments</option>`,
      `<option value="16-3">Issue 16-3 · ${counts['16-3']} moments</option>`
    ].join('');
    nodes.select.value=state.issue;
  }

  function renderProgress(topic,index,filtered){
    const completeCount=topics().filter(item=>state.completed[item.id]).length;
    const percentage=topics().length?Math.round(completeCount/topics().length*100):0;
    if(nodes.progress){
      nodes.progress.setAttribute('role','progressbar');
      nodes.progress.setAttribute('aria-label','CANNP study completion');
      nodes.progress.setAttribute('aria-valuemin','0');
      nodes.progress.setAttribute('aria-valuemax','100');
      nodes.progress.setAttribute('aria-valuenow',String(percentage));
      nodes.progress.innerHTML=`<span style="width:${percentage}%"></span>`;
    }
    const position=document.querySelector('#cannp-study-position');
    if(position)position.textContent=`Moment ${index+1} of ${filtered.length} · ${completeCount} of ${topics().length} complete`;
    if(nodes.mark){
      const complete=Boolean(state.completed[topic.id]);
      nodes.mark.classList.toggle('is-complete',complete);
      nodes.mark.setAttribute('aria-pressed',String(complete));
      nodes.mark.textContent=complete?'✓ Completed':'Mark complete';
    }
  }

  function renderPdf(topic){
    if(!nodes.pdf)return;
    const pdf=issuePdf(topic);
    nodes.pdf.href=pdf.url;
    nodes.pdf.textContent=pdf.label;
    if(pdf.external){nodes.pdf.target='_blank';nodes.pdf.rel='noopener'}
    else{nodes.pdf.removeAttribute('target');nodes.pdf.removeAttribute('rel')}
  }

  function render(){
    if(!nodes.player)return;
    const {filtered,index,topic}=currentContext();
    if(!topic){
      nodes.player.innerHTML='<div class="cannp-study-empty"><strong>No study moments are available.</strong><p>Choose another issue or return to the topic library.</p></div>';
      return;
    }

    const sourceLinks=(topic.links||[]).length
      ?`<div class="cannp-moment-sources">${topic.links.map(([label,url])=>`<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ↗</a>`).join('')}</div>`
      :'<p class="cannp-no-source-link">No additional public link was supplied for this practice note.</p>';
    const remember=(topic.remember||[]).slice(0,3).map((item,itemIndex)=>`<li><span>${String(itemIndex+1).padStart(2,'0')}</span><p>${esc(item)}</p></li>`).join('');

    nodes.player.innerHTML=`
      <article class="cannp-moment" data-topic-id="${esc(topic.id)}">
        <header class="cannp-moment-head">
          <div class="cannp-moment-kicker"><span class="category-tag">${esc(topic.categoryLabel)}</span><span class="evidence-label ${esc(topic.labelClass)}">${esc(topic.label)}</span></div>
          <p class="cannp-moment-position" id="cannp-study-position"></p>
          <h2>${esc(topic.title)}</h2>
          <p class="cannp-moment-deck">${esc(topic.deck)}</p>
          <div class="cannp-moment-source"><span>Original source</span><strong>Issue ${esc(topic.issue)} · ${esc(topic.pages)}</strong></div>
        </header>

        <div class="cannp-moment-grid">
          <div class="cannp-moment-main">
            <section class="cannp-learning-card newsletter">
              <span>01 · What the article says</span>
              <h3>Start with the newsletter’s claim.</h3>
              <p>${esc(topic.newsletter)}</p>
            </section>
            <section class="cannp-learning-card evidence">
              <span>02 · Evidence in context</span>
              <h3>What the wider evidence can support.</h3>
              <p>${esc(topic.evidence)}</p>
            </section>
            <section class="cannp-learning-card limits">
              <span>03 · Boundary check</span>
              <h3>What this does not prove.</h3>
              <p>${esc(topic.limits)}</p>
            </section>
          </div>

          <aside class="cannp-moment-aside">
            <section class="cannp-practice-card">
              <span>In practice</span>
              <h3>Use it without overclaiming.</h3>
              <p>${esc(topic.practice)}</p>
            </section>
            <section class="cannp-client-card">
              <span>Client example</span>
              <p>${esc(topic.example)}</p>
            </section>
          </aside>
        </div>

        <section class="cannp-remember-card">
          <div><span>Retrieval cue</span><h3>Three things to remember.</h3><p>Pause and explain each point in your own words before moving on.</p></div>
          <ol>${remember}</ol>
        </section>

        <section class="cannp-source-card"><div><span>Corroborating sources</span><h3>Open the evidence behind this note.</h3></div>${sourceLinks}</section>
      </article>`;

    if(nodes.back)nodes.back.disabled=index<=0;
    if(nodes.next){nodes.next.disabled=index>=filtered.length-1;nodes.next.textContent=index>=filtered.length-1?'End of issue':'Next moment →'}
    renderProgress(topic,index,filtered);
    renderPdf(topic);
    document.dispatchEvent(new CustomEvent('cannp-study:render',{detail:{topic,index,total:filtered.length,issue:state.issue}}));
  }

  function scrollToPlayer(){
    if(!nodes.player)return;
    const reduce=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    nodes.player.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
  }

  function selectTopic(id,options={}){
    const topic=topics().find(item=>item.id===id);
    if(!topic)return false;
    if(!issueIncludes(topic,state.issue)){
      state.issue='all';
      if(nodes.select)nodes.select.value='all';
    }
    state.activeId=id;saveState();render();
    if(options.scroll!==false)scrollToPlayer();
    return true;
  }

  function selectIssue(issue,options={}){
    if(!['all','16-1','16-2','16-3'].includes(issue))return false;
    state.issue=issue;
    const filtered=filteredTopics();
    state.activeId=filtered[0]?.id||'';
    if(nodes.select)nodes.select.value=issue;
    saveState();render();
    if(options.scroll!==false)scrollToPlayer();
    return true;
  }

  function move(delta){
    const {filtered,index}=currentContext();
    const target=filtered[index+delta];
    if(target)selectTopic(target.id);
  }

  function syncLibraryReadState(id,complete){
    const library=loadJson(LIBRARY_STATUS_KEY,{});
    library[id]||={};library[id].read=complete;
    saveJson(LIBRARY_STATUS_KEY,library);
    try{
      if(typeof statusState==='object'){statusState=library}
      if(typeof renderTopics==='function')renderTopics();
    }catch(_){/* The guided player still records progress independently. */}
  }

  function toggleComplete(){
    const {topic}=currentContext();
    if(!topic)return;
    state.completed[topic.id]=!state.completed[topic.id];
    if(!state.completed[topic.id])delete state.completed[topic.id];
    saveState();syncLibraryReadState(topic.id,Boolean(state.completed[topic.id]));render();
  }

  function bind(){
    nodes={
      player:document.querySelector('#cannp-study-player'),
      progress:document.querySelector('#cannp-study-progress'),
      select:document.querySelector('#cannp-study-select'),
      back:document.querySelector('#cannp-study-back'),
      next:document.querySelector('#cannp-study-next'),
      mark:document.querySelector('#cannp-study-mark'),
      pdf:document.querySelector('#cannp-study-pdf')
    };
    if(!nodes.player)return;
    nodes.player.setAttribute('aria-live','polite');
    nodes.player.setAttribute('aria-atomic','true');
    populateSelect();
    nodes.select?.addEventListener('change',()=>selectIssue(nodes.select.value,{scroll:false}));
    nodes.back?.addEventListener('click',()=>move(-1));
    nodes.next?.addEventListener('click',()=>move(1));
    nodes.mark?.addEventListener('click',toggleComplete);
    document.addEventListener('click',event=>{
      const button=event.target.closest('[data-cannp-study-jump]');
      if(!button)return;
      event.preventDefault();
      const value=button.dataset.cannpStudyJump;
      if(['all','16-1','16-2','16-3'].includes(value))selectIssue(value);
      else selectTopic(value);
    });
    render();
  }

  window.CANNP_STUDY={
    render,
    select:selectTopic,
    selectTopic,
    selectIssue,
    getState:()=>JSON.parse(JSON.stringify(state)),
    getFilteredTopics:()=>filteredTopics().map(topic=>topic.id),
    pdfs:{...PDFS}
  };

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind,{once:true});
  else bind();
})();
