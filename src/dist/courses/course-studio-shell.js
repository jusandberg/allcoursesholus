(()=>{
  if(document.querySelector('.course-studio-header')||document.body.classList.contains('course-nutrition'))return;

  const kind=document.body.classList.contains('course-natural')?'natural':document.body.classList.contains('course-sports')?'sports':'staying';
  const meta={
    natural:{title:'Natural Health Fundamentals',label:'Course 01 · Holistic health',art:'../assets/course-natural-health.svg',tools:[['overview','Overview'],['learn','Learn'],['cards','Flashcards'],['practice','Practice']]},
    sports:{title:'Sports & Fitness Nutrition',label:'Course 03 · Performance',art:'../assets/course-sports.svg',tools:[['overview','Overview'],['learn','Learn'],['cards','Flashcards'],['practice','Practice']]},
    staying:{title:'Staying Healthy with Nutrition',label:'Course 04 · Reading companion',art:'../assets/course-staying-healthy.svg',unitLabel:'Chapters',tools:[['overview','Overview'],['learn','Chapters'],['notes','Study notes']]}
  }[kind];
  const unitLabel=meta.unitLabel||'Course units';

  const header=document.createElement('header');
  header.className='course-studio-header';
  header.innerHTML=`<a class="studio-brand" href="../index.html" aria-label="Return to Hōlus study home"><span class="studio-wordmark">hōlus.</span><small>study collection</small></a><nav aria-label="Study tools">${meta.tools.map(([key,label])=>`<button type="button" data-studio-go="${key}">${label}</button>`).join('')}</nav>`;

  const bar=document.createElement('div');
  bar.className='course-studio-unitbar';
  bar.innerHTML=`<button class="studio-unit-button" type="button" aria-expanded="false"><span>${unitLabel}</span><b aria-hidden="true">⌄</b></button><div><small>${meta.label}</small><strong data-studio-current>${meta.title}</strong></div>`;

  const scrim=document.createElement('button');
  scrim.className='course-studio-scrim';
  scrim.type='button';
  scrim.setAttribute('aria-label',`Close ${unitLabel.toLowerCase()}`);
  document.body.prepend(scrim);
  document.body.prepend(bar);
  document.body.prepend(header);

  const side=document.querySelector('.sidebar, aside#side');
  const unitButton=bar.querySelector('.studio-unit-button');
  if(side){
    side.classList.add('course-studio-drawer');
    side.setAttribute('aria-label',kind==='staying'?'Course chapters':'Course units and lessons');
    side.setAttribute('aria-hidden','true');
    side.inert=true;
    if(!side.id)side.id='course-unit-drawer';
    unitButton.setAttribute('aria-controls',side.id);
  }else{
    unitButton.hidden=true;
  }

  const makeArt=()=>{const art=document.createElement('div');art.className='studio-course-art';art.setAttribute('aria-hidden','true');art.innerHTML=`<span></span><img src="${meta.art}" alt="">`;return art};
  const addArt=()=>{
    document.querySelectorAll('.hero').forEach(hero=>{if(!hero.querySelector('.studio-course-art'))hero.appendChild(makeArt())});
    if(kind==='staying'){
      const section=document.querySelector('.section.active');
      if(section&&!section.querySelector('.studio-course-art'))section.prepend(makeArt());
    }
  };

  let naturalOverview=null;
  const naturalPanels=kind==='natural'?[...document.querySelectorAll('.unit-panel[data-unit-panel]')]:[];
  const naturalPanel=(uid)=>naturalPanels.find(panel=>panel.dataset.unitPanel===uid);
  const refreshNaturalOverview=()=>{
    if(!naturalOverview)return;
    naturalOverview.querySelectorAll('[data-natural-progress]').forEach(label=>{
      const panel=naturalPanel(label.dataset.naturalProgress);
      const progress=panel?.querySelector('.gauge-label')?.textContent?.trim()||'Open unit →';
      if(label.textContent!==progress)label.textContent=progress;
    });
  };
  function setNaturalOverview(show,{scroll=true}={}){
    if(!naturalOverview)return;
    document.body.classList.toggle('studio-overview-active',show);
    naturalOverview.hidden=!show;
    naturalPanels.forEach(panel=>{panel.hidden=show});
    if(show)refreshNaturalOverview();
    syncContext();
    if(scroll)window.scrollTo({top:0,behavior:'smooth'});
  }
  function openNaturalUnit(uid){
    naturalMode='learn';
    setNaturalOverview(false,{scroll:false});
    const control=[...document.querySelectorAll('.unit-head[data-unit]')].find(head=>head.dataset.unit===uid);
    if(control){
      const wasInert=!!side?.inert;
      if(wasInert)side.inert=false;
      control.click();
      if(wasInert)side.inert=true;
    }
    else if(typeof window.switchUnit==='function')window.switchUnit(uid);
    syncContext();
    requestAnimationFrame(()=>mountNaturalRunner());
  }
  const buildNaturalOverview=()=>{
    const main=document.querySelector('.main-area');
    if(!main||!naturalPanels.length)return null;
    const overview=document.createElement('section');
    overview.className='studio-native-overview';
    overview.setAttribute('aria-labelledby','natural-course-title');

    const intro=document.createElement('div');
    intro.className='studio-overview-intro';
    const copy=document.createElement('div');
    copy.innerHTML='<p class="studio-overview-kicker">Course 01 · Natural Health Fundamentals</p><h1 id="natural-course-title">Build your natural-health foundation.</h1><p class="studio-overview-lede">Water, nutrients, dietary patterns and whole-person health.</p>';
    intro.append(copy,makeArt());

    const heading=document.createElement('div');
    heading.className='studio-overview-heading';
    heading.innerHTML='<div><p class="studio-overview-kicker">Course units</p><h2>Choose where to continue</h2></div><p>Open any unit for its complete study guide.</p>';

    const grid=document.createElement('div');
    grid.className='studio-unit-grid';
    naturalPanels.forEach((panel,index)=>{
      const uid=panel.dataset.unitPanel;
      const kicker=panel.querySelector('.hero .kicker')?.textContent?.trim()||(uid==='final'?'Final assessment':`Unit ${index+1}`);
      const title=panel.querySelector('.hero h1')?.textContent?.trim()||'Course unit';
      const fullLede=panel.querySelector('.hero .lede')?.textContent?.trim()||'Open this unit to continue studying.';
      const lede=fullLede.length>190?`${fullLede.slice(0,187).replace(/\s+\S*$/,'')}…`:fullLede;
      const card=document.createElement('button');
      card.type='button';
      card.className='studio-unit-card';
      card.dataset.naturalUnit=uid;
      card.setAttribute('aria-label',`Open ${kicker}: ${title}`);
      const metaLine=document.createElement('span');
      metaLine.className='studio-unit-meta';
      metaLine.textContent=kicker;
      const cardTitle=document.createElement('strong');
      cardTitle.textContent=title;
      const description=document.createElement('small');
      description.textContent=lede;
      const progress=document.createElement('span');
      progress.className='studio-unit-progress';
      progress.dataset.naturalProgress=uid;
      card.append(metaLine,cardTitle,description,progress);
      card.addEventListener('click',()=>openNaturalUnit(uid));
      grid.appendChild(card);
    });
    overview.append(intro,heading,grid);
    main.insertBefore(overview,naturalPanels[0]);
    return overview;
  };

  const visible=(el)=>!!(el&&el.getClientRects().length);
  const currentTitle=()=>{
    if(kind==='natural'){
      if(document.body.classList.contains('studio-overview-active'))return meta.title;
      const active=document.querySelector('.unit-panel.active');
      return active?.querySelector('.hero h1')?.textContent?.trim()||meta.title;
    }
    if(kind==='sports')return document.querySelector('main .hero h1')?.textContent?.trim()||meta.title;
    return document.querySelector('.section.active h1')?.textContent?.trim()||meta.title;
  };
  const syncContext=()=>{
    addArt();
    refreshNaturalOverview();
    const title=currentTitle();
    const target=bar.querySelector('[data-studio-current]');
    if(target&&target.textContent!==title)target.textContent=title;
  };

  const observerRoot=document.querySelector('main,.main-area')||document.body;
  new MutationObserver(syncContext).observe(observerRoot,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
  if(kind==='natural')naturalOverview=buildNaturalOverview();
  addArt();syncContext();
  if(kind==='natural')setNaturalOverview(true,{scroll:false});

  let opener=null;
  const toggle=(force)=>{
    const open=force??!document.body.classList.contains('studio-drawer-open');
    document.body.classList.toggle('studio-drawer-open',open);
    unitButton.setAttribute('aria-expanded',String(open));
    if(side){side.inert=!open;side.setAttribute('aria-hidden',String(!open))}
    if(open){opener=document.activeElement;setTimeout(()=>side?.querySelector('button,a,[tabindex="0"],.unit-head,.nav-item')?.focus?.(),40)}
    else if(opener?.focus)opener.focus();
  };
  unitButton.addEventListener('click',()=>toggle());
  scrim.addEventListener('click',()=>toggle(false));
  side?.addEventListener('click',e=>{
    if(kind==='natural'&&e.target.closest('.unit-head[data-unit],.lesson-item[data-unit]'))setNaturalOverview(false,{scroll:false});
    if(e.target.closest('button,a,.unit-head,.lesson-item,.nav-item'))setTimeout(()=>toggle(false),120);
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('studio-drawer-open'))toggle(false)});
  window.addEventListener('hashchange',()=>setTimeout(syncContext,30));

  const findVisible=(selector)=>[...document.querySelectorAll(selector)].find(visible);
  const findHeading=(terms,root=document)=>[...root.querySelectorAll('h2,h3,.section-title,.section-label')].find(el=>visible(el)&&terms.some(t=>el.textContent.toLowerCase().includes(t)));
  const scrollToTarget=(target)=>target?.scrollIntoView({behavior:'smooth',block:'start'});

  /*
   * Shared lesson player
   * --------------------
   * The original Natural Health and Sports pages keep their rich course
   * sections in the DOM. This adapter changes presentation only: one section
   * is visible at a time, while every existing calculator, card, question and
   * event listener stays attached to its original element.
   */
  let naturalMode='learn';
  let sportsMode='learn';
  let runnerQueued=false;

  const setShellNav=(key)=>{
    header.querySelectorAll('[data-studio-go]').forEach(button=>{
      const active=button.dataset.studioGo===key;
      button.classList.toggle('active',active);
      if(active)button.setAttribute('aria-current','page');
      else button.removeAttribute('aria-current');
    });
  };
  const sectionName=(section,index)=>{
    const heading=section.querySelector('h2,h3,.section-title,.section-label')?.textContent?.trim();
    const eyebrow=section.querySelector('.eyebrow,.k,.meta')?.textContent?.trim();
    const label=heading||eyebrow||`Study section ${index+1}`;
    return label.length>52?`${label.slice(0,49).replace(/\s+\S*$/,'')}…`:label;
  };
  const sectionMode=(section,courseKind)=>{
    const text=[section.id,section.querySelector('.eyebrow')?.textContent,section.querySelector('h2')?.textContent]
      .filter(Boolean).join(' ').toLowerCase();
    if(/flash\s*card|core recall|\bcards?\b/.test(text))return 'cards';
    if(courseKind==='sports'&&/-(?:test)$|original lesson .* test/.test(text))return 'practice';
    if(courseKind==='natural'&&/(assessment|checkpoint|quiz|test|apply it|client application|case lab|two brains|rapid-fire review|\breview\b)/.test(text))return 'practice';
    return 'learn';
  };
  const runnerStorageKey=(courseKind,unitKey,mode)=>`holus-studio-step:${courseKind}:${unitKey}:${mode}`;
  const savedStep=(courseKind,unitKey,mode,max)=>{
    try{return Math.max(0,Math.min(max,Number(localStorage.getItem(runnerStorageKey(courseKind,unitKey,mode)))||0))}
    catch{return 0}
  };
  const saveStep=(courseKind,unitKey,mode,index)=>{
    try{localStorage.setItem(runnerStorageKey(courseKind,unitKey,mode),String(index))}catch{}
  };
  const mountStepPlayer=({root,sections,courseKind,unitKey,mode,target})=>{
    if(!root||!sections.length)return null;
    const group=sections.filter(section=>sectionMode(section,courseKind)===mode);
    const available=group.length?group:(mode==='learn'?sections:[]);
    if(!available.length)return null;

    root.classList.add('studio-step-enabled');
    let player=root.querySelector(':scope > .studio-step-player');
    const runnerKey=`${courseKind}:${unitKey}:${mode}`;
    if(player?.dataset.runnerKey===runnerKey&&player._studioRunner){
      if(target){
        const targetIndex=player._studioRunner.available.indexOf(target);
        if(targetIndex>=0)player._studioRunner.show(targetIndex,{focus:true});
      }
      return player._studioRunner;
    }
    if(!player||player.dataset.runnerKey!==runnerKey){
      player?.remove();
      player=document.createElement('section');
      player.className='studio-step-player';
      player.dataset.runnerKey=runnerKey;
      player.setAttribute('aria-label','Study section navigation');
      root.insertBefore(player,sections[0]);
    }

    let index=target?available.indexOf(target):-1;
    if(index<0)index=savedStep(courseKind,unitKey,mode,available.length-1);
    const show=(next,{focus=false}={})=>{
      index=Math.max(0,Math.min(available.length-1,next));
      saveStep(courseKind,unitKey,mode,index);
      const active=available[index];
      sections.forEach(section=>{
        const selected=section===active;
        section.hidden=!selected;
        section.setAttribute('aria-hidden',String(!selected));
      });
      player.innerHTML=`
        <div class="studio-step-summary">
          <div><span>${mode==='cards'?'Flashcards':mode==='practice'?'Practice & test':'Learn'}</span><strong>${sectionName(active,index)}</strong></div>
          <b>Step ${index+1} of ${available.length}</b>
        </div>
        <div class="studio-step-rail" aria-label="Choose a study section">
          ${available.map((section,i)=>`<button type="button" data-studio-step="${i}" class="${i===index?'active':''}" ${i===index?'aria-current="step"':''}><span>${i+1}</span>${sectionName(section,i)}</button>`).join('')}
        </div>
        <div class="studio-step-pager">
          <button type="button" data-studio-step-prev ${index===0?'disabled':''}>← Previous</button>
          <span>${index+1} / ${available.length}</span>
          <button type="button" data-studio-step-next ${index===available.length-1?'disabled':''}>Next →</button>
        </div>`;
      player.querySelectorAll('[data-studio-step]').forEach(button=>button.addEventListener('click',()=>show(Number(button.dataset.studioStep),{focus:true})));
      player.querySelector('[data-studio-step-prev]')?.addEventListener('click',()=>show(index-1,{focus:true}));
      player.querySelector('[data-studio-step-next]')?.addEventListener('click',()=>show(index+1,{focus:true}));
      if(focus){
        active.setAttribute('tabindex','-1');
        active.focus({preventScroll:true});
        player.scrollIntoView({behavior:'smooth',block:'start'});
      }
    };
    show(index);
    const controller={player,available,show};
    player._studioRunner=controller;
    return controller;
  };

  const mountNaturalRunner=(target)=>{
    if(kind!=='natural'||document.body.classList.contains('studio-overview-active'))return null;
    const panel=document.querySelector('.unit-panel.active');
    const root=panel?.querySelector(':scope > .wrap');
    const sections=root?[...root.querySelectorAll(':scope > section')].filter(section=>!section.classList.contains('studio-step-player')):[];
    if(!panel||!root||!sections.length)return null;
    document.body.classList.add('studio-step-active');
    setShellNav(naturalMode);
    return mountStepPlayer({root,sections,courseKind:'natural',unitKey:panel.dataset.unitPanel||'unit',mode:naturalMode,target});
  };
  const mountSportsRunner=(target)=>{
    if(kind!=='sports'||!/^#u\d+$/.test(location.hash))return null;
    const main=document.querySelector('main');
    const sections=main?[...main.querySelectorAll(':scope > section.sec')]:[];
    if(!main||!sections.length)return null;
    document.body.classList.add('studio-step-active');
    setShellNav(sportsMode);
    return mountStepPlayer({root:main,sections,courseKind:'sports',unitKey:location.hash.slice(1),mode:sportsMode,target});
  };
  const scheduleRunner=()=>{
    if(runnerQueued)return;
    runnerQueued=true;
    requestAnimationFrame(()=>{
      runnerQueued=false;
      if(kind==='natural'){
        if(document.body.classList.contains('studio-overview-active'))setShellNav('overview');
        else mountNaturalRunner();
      }
      if(kind==='sports'){
        if(/^#u\d+$/.test(location.hash))mountSportsRunner();
        else setShellNav('overview');
      }
    });
  };

  new MutationObserver(scheduleRunner).observe(observerRoot,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
  scheduleRunner();

  if(kind==='natural'&&side){
    side.addEventListener('click',event=>{
      const head=event.target.closest('.unit-head[data-unit]');
      if(head&&!event.target.closest('.lesson-item'))naturalMode='learn';
      const item=event.target.closest('.lesson-item[data-unit][data-idx]');
      if(!item)return;
      const uid=item.dataset.unit;
      const idx=item.dataset.idx;
      setTimeout(()=>{
        const panel=document.querySelector(`.unit-panel[data-unit-panel="${uid}"]`);
        const target=document.getElementById(`u${uid}-sec-${idx}`)||panel?.querySelector('.wrap > section:last-of-type');
        const mode=target?sectionMode(target,'natural'):'learn';
        naturalMode=mode==='cards'?'cards':mode==='practice'?'practice':'learn';
        mountNaturalRunner(target);
      },80);
    },true);
  }

  if(kind==='sports'){
    document.querySelector('main')?.addEventListener('click',event=>{
      const link=event.target.closest('[data-go]');
      if(!link)return;
      const target=document.getElementById(link.dataset.go);
      if(!target?.matches('section.sec'))return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const mode=sectionMode(target,'sports');
      sportsMode=mode==='cards'?'cards':mode==='practice'?'practice':'learn';
      mountSportsRunner(target);
    },true);
  }

  const goNatural=(key)=>{
    if(key==='overview'){
      document.body.classList.remove('studio-step-active');
      setShellNav('overview');
      return setNaturalOverview(true);
    }
    if(document.body.classList.contains('studio-overview-active'))setNaturalOverview(false,{scroll:false});
    naturalMode=key==='cards'?'cards':key==='practice'?'practice':'learn';
    const runner=mountNaturalRunner();
    if(!runner&&naturalMode!=='learn'){
      naturalMode='learn';
      mountNaturalRunner();
    }
    window.scrollTo({top:0,behavior:'smooth'});
  };
  const goSports=(key)=>{
    if(key==='overview'){
      document.body.classList.remove('studio-step-active');
      setShellNav('overview');
      location.hash='home';
      return;
    }
    sportsMode=key==='cards'?'cards':key==='practice'?'practice':'learn';
    const enter=()=>{
      const runner=mountSportsRunner();
      if(!runner&&sportsMode!=='learn'){
        sportsMode='learn';
        mountSportsRunner();
      }
      window.scrollTo({top:0,behavior:'smooth'});
    };
    if(!/^#u\d+$/.test(location.hash)){location.hash='u1';setTimeout(enter,100)}else enter();
  };
  const goStaying=(key)=>{
    if(key==='overview')return document.querySelector('.nav-item[data-id="overview"]')?.click();
    if(key==='learn'){
      document.querySelector('.nav-item[data-id="overview"]')?.click();
      return setTimeout(()=>scrollToTarget(document.querySelector('.chapter-groups,.chapter-grid,.toc-list')),60);
    }
    const notes=()=>scrollToTarget(findHeading(['my study notes','key takeaways','open questions']));
    if(findHeading(['my study notes','key takeaways','open questions']))return notes();
    [...document.querySelectorAll('.nav-item[data-id]')].find(x=>x.dataset.id!=='overview')?.click();
    setTimeout(notes,60);
  };

  header.addEventListener('click',e=>{
    const key=e.target.closest('[data-studio-go]')?.dataset.studioGo;
    if(!key)return;
    if(kind==='natural')goNatural(key);
    else if(kind==='sports')goSports(key);
    else goStaying(key);
  });
})();
