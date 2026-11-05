(() => {
  if (window.__nutritionBookQuestionsInstalled) return;
  window.__nutritionBookQuestionsInstalled = true;

  const bookBaseRender = render;
  let bookMode = 'all';
  let bookUnit = unitId;
  let lastView = view;
  let bookSummary = false;
  const sessionPicks = new Map();

  const modeLabels = {
    quick: 'Quick 10',
    all: 'All questions',
    missed: 'Missed',
    discussion: 'Discussion'
  };

  function keyFor(question) {
    return `${unitId}:${question.n}`;
  }

  function questionsForMode(mode = bookMode) {
    if (mode === 'quick') return questions.filter(question => !question.unscored).slice(0, 10);
    if (mode === 'missed') return questions.filter(question => !question.unscored && state.results[question.n] === false);
    if (mode === 'discussion') return questions.filter(question => question.unscored);
    return [...questions];
  }

  function modeDescription(mode, items) {
    if (mode === 'quick') return `The first ${items.length} scored questions, kept in a stable order so the set never changes unexpectedly.`;
    if (mode === 'missed') return `${items.length} scored question${items.length === 1 ? '' : 's'} to revisit from your saved attempts.`;
    if (mode === 'discussion') return `${items.length} source item${items.length === 1 ? '' : 's'} kept for learning but excluded from scoring.`;
    return `The complete ${questions.length}-question source set, including scored and discussion-only items.`;
  }

  function modeButton(mode, label, count) {
    const selected = bookMode === mode;
    const suffix = count === undefined ? '' : ` <span>${count}</span>`;
    return `<button type="button" class="book-mode${selected ? ' is-active' : ''}" data-book-mode="${mode}" aria-pressed="${selected}">${label}${suffix}</button>`;
  }

  function questionStatus(question) {
    if (question.unscored) return 'discussion';
    if (state.results[question.n] === true) return 'correct';
    if (state.results[question.n] === false) return 'missed';
    return 'not attempted';
  }

  function navigatorMarkup(currentQuestion) {
    const open = window.matchMedia('(min-width: 681px)').matches ? ' open' : '';
    return `<details class="book-number-panel"${open}>
      <summary class="book-number-heading">
        <span><span class="eyebrow">Question map</span><strong>Jump to any source question</strong></span>
        <span class="book-map-toggle" aria-hidden="true">Show map</span>
      </summary>
      <nav aria-label="All ${questions.length} book questions">
        <div class="book-number-legend" aria-label="Question status legend"><span class="is-correct">Correct</span><span class="is-missed">Missed</span><span class="is-discussion">Discussion</span></div>
        <div class="book-number-grid">${questions.map(question => {
        const status = questionStatus(question);
        const current = currentQuestion && question.n === currentQuestion.n;
        return `<button type="button" class="book-number is-${status.replace(' ', '-')}${current ? ' is-current' : ''}" data-book-question="${question.n}" aria-label="Book question ${question.n}, ${status}"${current ? ' aria-current="true"' : ''}>${question.n}</button>`;
        }).join('')}</div>
      </nav>
    </details>`;
  }

  function resultSummaryMarkup(items) {
    const scored = items.filter(question => !question.unscored);
    const attempted = scored.filter(question => Object.prototype.hasOwnProperty.call(state.results, question.n));
    const correct = attempted.filter(question => state.results[question.n] === true);
    const missed = attempted.length - correct.length;
    return `<section class="book-session-summary" aria-labelledby="book-summary-title">
      <div class="eyebrow">${esc(modeLabels[bookMode])} complete</div>
      <h2 id="book-summary-title">Keep building the connections.</h2>
      <div class="book-summary-grid">
        <div><strong>${correct.length}</strong><span>correct</span></div>
        <div><strong>${missed}</strong><span>to revisit</span></div>
        <div><strong>${Math.max(0, scored.length - attempted.length)}</strong><span>not attempted</span></div>
      </div>
      <p>Discussion-only questions remain part of the source set but do not affect these totals.</p>
      <div class="book-card-actions"><button type="button" id="book-summary-return">Return to first question</button><button type="button" class="primary" id="book-summary-missed">Review missed →</button></div>
    </section>`;
  }

  function questionMarkup(question, items) {
    const picked = sessionPicks.get(keyFor(question));
    const answered = Number.isInteger(picked);
    const sourceType = question.unscored ? 'Discussion only · not scored' : 'Scored source question';
    const why = answered ? explain(question.e) : null;
    return `<article class="book-question-card" aria-labelledby="book-question-title">
      <header class="book-question-meta">
        <div><span class="eyebrow">Book question ${question.n}</span><span>${sourceType}</span></div>
        <span class="book-position">${qi + 1} of ${items.length} in ${esc(modeLabels[bookMode])}</span>
      </header>
      <h2 id="book-question-title" tabindex="-1">${esc(question.q)}</h2>
      ${question.image ? `<figure class="book-source-figure"><img class="sourceimg" src="${esc(question.image)}" alt="Source figure for book question ${question.n}"></figure>` : ''}
      <div class="book-choices" role="group" aria-label="Answer choices for book question ${question.n}">
        ${question.o.map((option, index) => {
          const isRight = answered && question.a !== null && index === question.a;
          const isWrong = answered && !question.unscored && index === picked && picked !== question.a;
          const selected = answered && index === picked;
          const prefix = question.o.length === 2 ? '' : `${String.fromCharCode(65 + index)}. `;
          return `<button type="button" class="book-choice${isRight ? ' right' : ''}${isWrong ? ' wrong' : ''}${selected ? ' selected' : ''}" data-book-choice="${index}"${answered ? ' disabled' : ''}${selected ? ' aria-pressed="true"' : ' aria-pressed="false"'}><span>${prefix}</span>${esc(option)}</button>`;
        }).join('')}
      </div>
      <div id="book-feedback" class="book-feedback" aria-live="polite">${answered ? `<div class="example"><b>${question.unscored ? 'Hub study takeaway' : picked === question.a ? 'Correct · study explanation' : 'Study explanation'}</b><p>${esc(why.why)}</p>${why.nuance ? `<details><summary>Important nuance</summary><p>${esc(why.nuance)}</p></details>` : ''}</div>` : '<p class="muted">Choose an answer to reveal the hōlus. study explanation.</p>'}</div>
      <footer class="book-card-actions">
        <button type="button" id="book-prev"${qi === 0 ? ' disabled' : ''}>← Previous</button>
        <span>${qi + 1} / ${items.length}</span>
        <button type="button" class="primary" id="book-next">${qi === items.length - 1 ? 'Finish session' : 'Next →'}</button>
      </footer>
    </article>`;
  }

  function emptyModeMarkup(items) {
    const isMissed = bookMode === 'missed';
    return `<section class="book-empty" aria-live="polite">
      <div class="book-empty-mark" aria-hidden="true">${isMissed ? '✓' : '○'}</div>
      <div><div class="eyebrow">${isMissed ? 'Nothing waiting' : 'No questions in this mode'}</div>
      <h2>${isMissed ? 'No missed questions are saved yet.' : 'There are no discussion-only questions in this unit.'}</h2>
      <p>${isMissed ? 'Answer questions in All questions or Quick 10. Any scored question you miss will appear here automatically.' : 'The complete source set is still available in All questions.'}</p>
      <button type="button" class="primary" id="book-empty-all">Open all ${questions.length} questions →</button></div>
    </section>${navigatorMarkup(null)}`;
  }

  function renderBookQuestions() {
    const items = questionsForMode();
    deck = items;
    if (qi >= items.length) qi = Math.max(0, items.length - 1);
    const currentQuestion = items[qi];
    const scoredCount = questions.filter(question => !question.unscored).length;
    const discussionCount = questions.length - scoredCount;
    const note = units[unitId].quizNote || (discussionCount
      ? `${discussionCount} discussion-only source item${discussionCount === 1 ? ' is' : 's are'} included and excluded from scoring.`
      : `All ${scoredCount} source questions in this unit are scored.`);

    app.innerHTML = `<div class="book-questions">
      <section class="book-hero" aria-labelledby="book-page-title">
        <div>
          <div class="eyebrow">Unit ${unitId} · Original practice set</div>
          <h1 id="book-page-title">Book questions</h1>
          <p>All ${questions.length} questions from this unit’s source practice set are here. Source wording and answer choices are preserved; clearly labelled hōlus. study explanations support learning.</p>
        </div>
        <dl class="book-totals"><div><dt>Total</dt><dd>${questions.length}</dd></div><div><dt>Scored</dt><dd>${scoredCount}</dd></div><div><dt>Discussion</dt><dd>${discussionCount}</dd></div></dl>
      </section>

      <section class="book-mode-shell" aria-labelledby="book-mode-title">
        <div class="book-mode-copy"><span class="eyebrow">Choose a study mode</span><p id="book-mode-title">${modeDescription(bookMode, items)}</p></div>
        <div class="book-mode-bar" role="toolbar" aria-label="Book-question study modes">
          ${modeButton('quick', 'Quick 10', Math.min(10, scoredCount))}
          ${modeButton('all', `All ${questions.length}`)}
          ${modeButton('missed', 'Missed', questionsForMode('missed').length)}
          ${modeButton('discussion', 'Discussion', discussionCount)}
          <button type="button" class="book-reset" id="book-reset">Reset progress</button>
        </div>
      </section>

      ${items.length === 0 ? emptyModeMarkup(items) : `${navigatorMarkup(currentQuestion)}${bookSummary ? resultSummaryMarkup(items) : questionMarkup(currentQuestion, items)}`}
      <p class="book-source-note"><strong>Source note:</strong> ${esc(note)} Answers stay hidden until you choose an option.</p>
    </div>`;

    bindBookEvents(items);
  }

  function bindBookEvents(items) {
    app.querySelectorAll('[data-book-mode]').forEach(button => {
      button.addEventListener('click', () => {
        bookMode = button.dataset.bookMode;
        bookSummary = false;
        qi = 0;
        render();
      });
    });

    app.querySelectorAll('[data-book-question]').forEach(button => {
      button.addEventListener('click', () => {
        const number = Number(button.dataset.bookQuestion);
        bookMode = 'all';
        bookSummary = false;
        qi = questions.findIndex(question => question.n === number);
        render();
        document.querySelector('#book-question-title')?.focus({preventScroll: true});
        app.querySelector('.book-question-card')?.scrollIntoView({behavior: 'smooth', block: 'start'});
      });
    });

    app.querySelectorAll('[data-book-choice]').forEach(button => {
      button.addEventListener('click', () => {
        const question = items[qi];
        const pick = Number(button.dataset.bookChoice);
        sessionPicks.set(keyFor(question), pick);
        if (!question.unscored) {
          state.results[question.n] = pick === question.a;
          save();
        }
        render();
        app.querySelector('#book-feedback')?.scrollIntoView({behavior: 'smooth', block: 'nearest'});
      });
    });

    app.querySelector('#book-prev')?.addEventListener('click', () => {
      if (qi > 0) qi -= 1;
      bookSummary = false;
      render();
      window.scrollTo({top: app.offsetTop, behavior: 'smooth'});
    });

    app.querySelector('#book-next')?.addEventListener('click', () => {
      if (qi < items.length - 1) qi += 1;
      else bookSummary = true;
      render();
      window.scrollTo({top: app.offsetTop, behavior: 'smooth'});
    });

    app.querySelector('#book-summary-return')?.addEventListener('click', () => {
      qi = 0;
      bookSummary = false;
      render();
    });

    app.querySelector('#book-summary-missed')?.addEventListener('click', () => {
      bookMode = 'missed';
      qi = 0;
      bookSummary = false;
      render();
    });

    app.querySelector('#book-empty-all')?.addEventListener('click', () => {
      bookMode = 'all';
      qi = 0;
      bookSummary = false;
      render();
    });

    app.querySelector('#book-reset')?.addEventListener('click', () => {
      if (!window.confirm(`Reset saved answers for all ${questions.length} questions in Unit ${unitId}?`)) return;
      state.results = {};
      [...sessionPicks.keys()].filter(key => key.startsWith(`${unitId}:`)).forEach(key => sessionPicks.delete(key));
      save();
      bookMode = 'all';
      bookSummary = false;
      qi = 0;
      render();
    });
  }

  function calculatorCount() {
    const catalogs = [window.NUTRITION_CALCULATORS, window.nutritionCalculators, window.nutritionCalculatorCatalog];
    const catalog = catalogs.find(item => Array.isArray(item));
    const explicit = Number(window.NUTRITION_CALCULATOR_COUNT || document.documentElement.dataset.calculatorCount);
    if (Number.isFinite(explicit) && explicit > 0) return explicit;
    if (catalog && catalog.length) return catalog.length;
    return 1;
  }

  function addOverviewShortcuts() {
    if (app.querySelector('.book-overview-tools')) return;
    const count = calculatorCount();
    const section = document.createElement('section');
    section.className = 'book-overview-tools';
    section.setAttribute('aria-labelledby', 'study-tools-title');
    section.innerHTML = `<div class="book-overview-heading"><div><div class="eyebrow">Study tools</div><h2 id="study-tools-title">Practise and calculate in one place.</h2></div><p>Nothing is hidden: open the complete source-question set or work through the course formulas.</p></div>
      <div class="book-overview-grid">
        <article><span class="book-tool-number">${questions.length}</span><div><h3>Book questions</h3><p>Every source item for Unit ${unitId}, including discussion-only questions.</p><button type="button" class="primary" data-open-book>Open all ${questions.length} →</button></div></article>
        <article><span class="book-tool-number" data-book-calc-count>${count}</span><div><h3>Calculator${count === 1 ? '' : 's'}</h3><p>Course formulas gathered into a practical calculation workspace.</p><button type="button" data-open-calculators>Open calculator${count === 1 ? '' : 's'} →</button></div></article>
      </div>`;
    const anchor = app.querySelector('.fat-roadmap') || app.querySelector('.welcome-note') || app.querySelector('.hero');
    anchor?.insertAdjacentElement('afterend', section);
    section.querySelector('[data-open-book]')?.addEventListener('click', () => go('quiz'));
    section.querySelector('[data-open-calculators]')?.addEventListener('click', () => go('calc'));
  }

  function labelNavigation() {
    const bookButton = document.querySelector('[data-view="quiz"]');
    const calculatorButton = document.querySelector('[data-view="calc"]');
    if (bookButton) bookButton.textContent = 'Book questions';
    if (calculatorButton) calculatorButton.textContent = 'Calculators';
  }

  render = function renderWithBookQuestions() {
    if (bookUnit !== unitId) {
      bookUnit = unitId;
      bookMode = 'all';
      bookSummary = false;
      qi = 0;
    }
    if (view === 'quiz' && lastView !== 'quiz') {
      bookMode = 'all';
      bookSummary = false;
      qi = 0;
    }

    if (view === 'quiz') {
      const requestedDeck = questionsForMode();
      deck = requestedDeck.length ? requestedDeck : [...questions];
      if (qi >= deck.length) qi = 0;
    }

    bookBaseRender();
    labelNavigation();
    if (view === 'quiz') renderBookQuestions();
    if (view === 'home') addOverviewShortcuts();
    lastView = view;
  };

  window.addEventListener('nutrition-calculators-ready', () => {
    if (view === 'home') render();
  });

  render();
})();
