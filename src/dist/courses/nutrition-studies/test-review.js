(function () {
  'use strict';

  if (!window.NUTRITION_TEST_REVIEW || typeof render !== 'function' || typeof app === 'undefined') return;

  const REVIEW_KEY = 'nutrition-test-review-v1';
  const reviewData = window.NUTRITION_TEST_REVIEW;
  const reviewBaseRender = render;
  const unit11Order = [1, 3, 4, 6, 7, 8, 13, 15, 18, 21, 25, 28, 30, 2, 5, 9, 10, 11, 12, 14, 16, 17, 19, 20, 22, 23, 24, 26, 27, 29];
  const comprehensiveSourceSets = [
    { label: 'Set 1', units: [1, 2, 3, 4], theme: 'Foundations, assessment, digestion and carbohydrates' },
    { label: 'Set 2', units: [5, 6, 7], theme: 'Protein, lipids and metabolism' },
    { label: 'Set 3', units: [8, 9, 10], theme: 'Energy balance, activity and water-soluble vitamins' },
    { label: 'Set 4', units: [11, 12, 13, 14], theme: 'Fat-soluble vitamins, minerals and the life cycle' }
  ];
  const emptyProgress = () => ({ index: 0, round: 0, set: 0, answers: {}, revealed: {} });

  let reviewState = {
    scope: 'unit11',
    scopes: { unit11: emptyProgress(), comprehensive: emptyProgress() }
  };

  try {
    const saved = JSON.parse(localStorage.getItem(REVIEW_KEY) || 'null');
    if (saved && typeof saved === 'object' && !Array.isArray(saved)) reviewState = { ...reviewState, ...saved };
  } catch {}

  if (!['unit11', 'comprehensive'].includes(reviewState.scope)) reviewState.scope = 'unit11';
  if (!reviewState.scopes || typeof reviewState.scopes !== 'object' || Array.isArray(reviewState.scopes)) reviewState.scopes = {};
  for (const scope of ['unit11', 'comprehensive']) {
    const progress = reviewState.scopes[scope];
    reviewState.scopes[scope] = progress && typeof progress === 'object' && !Array.isArray(progress)
      ? { ...emptyProgress(), ...progress }
      : emptyProgress();
    if (!reviewState.scopes[scope].answers || typeof reviewState.scopes[scope].answers !== 'object' || Array.isArray(reviewState.scopes[scope].answers)) reviewState.scopes[scope].answers = {};
    if (!reviewState.scopes[scope].revealed || typeof reviewState.scopes[scope].revealed !== 'object' || Array.isArray(reviewState.scopes[scope].revealed)) reviewState.scopes[scope].revealed = {};
    reviewState.scopes[scope].index = Math.min(scope === 'comprehensive' ? 119 : 11, Math.max(0, Number.parseInt(reviewState.scopes[scope].index, 10) || 0));
    reviewState.scopes[scope].round = Math.min(10000, Math.max(0, Number.parseInt(reviewState.scopes[scope].round, 10) || 0));
    reviewState.scopes[scope].set = Math.min(3, Math.max(0, Number.parseInt(reviewState.scopes[scope].set, 10) || 0));
  }

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  }

  function saveReview() {
    try { localStorage.setItem(REVIEW_KEY, JSON.stringify(reviewState)); } catch {}
  }

  function progress() {
    return reviewState.scopes[reviewState.scope];
  }

  function unit11Misses() {
    const results = courseState?.units?.[11]?.results || {};
    return units[11].questions.filter(question => !question.unscored && results[question.n] === false);
  }

  function normalizeSourceQuestion(question, sourceUnit = 11) {
    const options = Array.isArray(question.o) ? [...question.o] : [];
    const answer = Number.isInteger(question.a) && question.a >= 0 && question.a < options.length ? question.a : null;
    const isTrueFalse = options.length === 2 && options.every(option => /^(true|false)$/i.test(String(option).trim()));
    return {
      id: `u${sourceUnit}-${question.n}`,
      unit: sourceUnit,
      sourceNumber: question.n,
      type: isTrueFalse ? 'tf' : 'mc',
      prompt: question.q,
      options,
      answer,
      answerText: answer === null ? 'No single valid keyed option—use the rationale.' : options[answer],
      rationale: question.e,
      unscored: Boolean(question.unscored)
    };
  }

  function buildUnit11Deck() {
    const source = units[11].questions.filter(question => !question.unscored);
    const byNumber = new Map(source.map(question => [question.n, question]));
    const misses = unit11Misses();
    const missedNumbers = new Set(misses.map(question => question.n));
    const remaining = unit11Order.filter(number => byNumber.has(number) && !missedNumbers.has(number));
    const shift = (progress().round * 12) % Math.max(1, remaining.length);
    const rotated = remaining.slice(shift).concat(remaining.slice(0, shift));
    return [...misses, ...rotated.map(number => byNumber.get(number))]
      .filter((question, index, all) => all.findIndex(candidate => candidate.n === question.n) === index)
      .slice(0, 12)
      .map(question => normalizeSourceQuestion(question, 11));
  }

  function buildComprehensiveDeck() {
    const sourceSet = comprehensiveSourceSets[progress().set] || comprehensiveSourceSets[0];
    return sourceSet.units.flatMap(unitNumber => units[unitNumber].questions.map(question => normalizeSourceQuestion(question, unitNumber)));
  }

  function sourceSetCount(sourceSet) {
    return sourceSet.units.reduce((total, unitNumber) => total + units[unitNumber].questions.length, 0);
  }

  function allSourceQuestionCount() {
    return comprehensiveSourceSets.reduce((total, sourceSet) => total + sourceSetCount(sourceSet), 0);
  }

  function deck() {
    return reviewState.scope === 'unit11' ? buildUnit11Deck() : buildComprehensiveDeck();
  }

  function activeCopy() {
    return reviewData[reviewState.scope];
  }

  function answered(question, answer) {
    if (question.type === 'short') return typeof answer === 'string' && answer.trim().length > 0;
    return Number.isInteger(answer);
  }

  function answerLabel(question) {
    if (question.type === 'short') return question.answerText;
    if (!Number.isInteger(question.answer)) return question.answerText || 'No single keyed answer';
    return `${question.options.length > 2 ? `${String.fromCharCode(65 + question.answer)}. ` : ''}${question.options[question.answer]}`;
  }

  function typeLabel(type) {
    return type === 'mc' ? 'Multiple choice' : type === 'tf' ? 'True / false' : 'Short answer';
  }

  function renderConcepts(copy) {
    return copy.concepts.map(item => `<article class="review-concept"><h3>${esc(item.title)}</h3><p>${esc(item.body)}</p></article>`).join('');
  }

  function renderPairs(items, className) {
    return items.map(([title, detail]) => `<article class="${className}"><strong>${esc(title)}</strong>${className === 'review-trap' ? `<p>${esc(detail)}</p>` : `<span>${esc(detail)}</span>`}</article>`).join('');
  }

  function renderQuestion(question, questions) {
    const scopeProgress = progress();
    const selected = scopeProgress.answers[question.id];
    const revealed = Boolean(scopeProgress.revealed[question.id]);
    const hasAnswer = answered(question, selected);
    const isCorrect = question.type !== 'short' && hasAnswer && Number.isInteger(question.answer) && selected === question.answer;
    const position = Math.min(scopeProgress.index, questions.length - 1);
    const answeredCount = questions.filter(item => answered(item, scopeProgress.answers[item.id])).length;
    const sourceChip = question.sourceNumber ? `<span class="review-chip">Unit ${question.unit} · source question ${question.sourceNumber}</span>` : `<span class="review-chip">Unit ${question.unit}</span>`;
    const sourceSet = reviewState.scope === 'comprehensive' ? comprehensiveSourceSets[scopeProgress.set] : null;
    const sprintTitle = sourceSet ? `${sourceSet.label} · Units ${sourceSet.units[0]}–${sourceSet.units[sourceSet.units.length - 1]}` : 'Retrieve before you reveal.';
    const setPicker = sourceSet ? `<div class="review-set-picker" role="group" aria-label="Choose one of four complete review sets">${comprehensiveSourceSets.map((item, index) => `<button type="button" data-review-set="${index}" aria-pressed="${scopeProgress.set === index}"><strong>${esc(item.label)}</strong><span>Units ${item.units[0]}–${item.units[item.units.length - 1]} · ${sourceSetCount(item)} questions</span></button>`).join('')}</div>` : '';
    const input = question.type === 'short'
      ? `<label class="review-short-label" for="review-short-answer">Your closed-book answer</label><textarea class="review-short-answer" id="review-short-answer" maxlength="1600" placeholder="Write the idea in your own words before revealing the guide answer.">${esc(typeof selected === 'string' ? selected : '')}</textarea>`
      : `<div class="review-choices" role="group" aria-label="Answer choices">${question.options.map((option, index) => `<button type="button" class="review-choice ${selected === index ? 'is-selected' : ''}" data-review-answer="${index}" aria-pressed="${selected === index}"><span>${question.options.length > 2 ? `${String.fromCharCode(65 + index)}.` : index === 0 ? 'T' : 'F'}</span>${esc(option)}</button>`).join('')}</div>`;
    const feedback = revealed ? `<div class="review-feedback ${question.unscored || question.type === 'short' || !hasAnswer ? '' : isCorrect ? 'is-correct' : 'is-missed'}" id="review-feedback" tabindex="-1" aria-live="polite"><h4>${question.unscored ? 'Source caveat—compare the intended answer' : question.type === 'short' ? 'Compare with the guide answer' : !hasAnswer ? 'Guide answer' : isCorrect ? 'Correct—now explain why' : 'Use the correction, then retrieve it again'}</h4><p><strong>Answer:</strong> ${esc(answerLabel(question))}</p><p><strong>Why:</strong> ${esc(question.rationale)}</p>${question.type !== 'short' && hasAnswer ? `<p><strong>Your choice:</strong> ${esc(question.options[selected])}</p>` : ''}</div>` : '';

    return `<section class="review-sprint" id="review-sprint" aria-labelledby="review-question-title">
      <div class="review-sprint-top"><div><div class="eyebrow">${sourceSet ? 'Four complete review sets' : 'Question sprint'}</div><h2>${esc(sprintTitle)}</h2></div><span class="review-counter">${answeredCount} of ${questions.length} answered</span></div>
      ${setPicker}
      <div class="review-progress" aria-hidden="true"><i style="width:${((position + 1) / questions.length) * 100}%"></i></div>
      <div class="review-question-meta">${sourceChip}<span class="review-chip">${esc(typeLabel(question.type))}</span>${question.unscored ? '<span class="review-chip review-chip-caution">Source caveat · review only</span>' : ''}</div>
      <h3 id="review-question-title" tabindex="-1">${esc(question.prompt)}</h3>
      ${input}
      <div class="review-answer-actions"><button type="button" id="review-reveal">${revealed ? 'Hide answer and rationale' : 'Reveal answer and rationale'}</button><button type="button" id="review-new-set">${sourceSet ? 'Next review set' : 'Another 12 questions'}</button><button type="button" id="review-reset">Reset ${sourceSet ? sourceSet.label : 'this sprint'}</button></div>
      ${feedback}
      <div class="review-nav"><button type="button" id="review-prev" ${position === 0 ? 'disabled' : ''}>← Previous</button><span>Question ${position + 1} of ${questions.length}</span><button type="button" class="primary" id="review-next" ${position === questions.length - 1 ? 'disabled' : ''}>Next question →</button></div>
      <details class="review-answer-key"><summary>Open the separate answer key for ${sourceSet ? sourceSet.label : 'this 12-question set'}</summary><ol class="review-key-list">${questions.map((item, index) => `<li><strong>${index + 1}. ${esc(answerLabel(item))}</strong><p>${esc(item.rationale)}</p></li>`).join('')}</ol></details>
      <p class="review-source-note">${reviewState.scope === 'unit11' ? `This sprint references the existing exact 30-question Unit 11 source set. ${unit11Misses().length ? `${unit11Misses().length} saved miss${unit11Misses().length === 1 ? ' is' : 'es are'} prioritized.` : 'No saved Unit 11 misses were found, so a stable cross-topic set is shown.'} Review answers never change your source-question results.` : `Four sets cover all ${allSourceQuestionCount()} exact source questions across Units 1–14. ${sourceSet.label} contains ${questions.length} questions from Units ${sourceSet.units[0]}–${sourceSet.units[sourceSet.units.length - 1]}. Items marked “source caveat” are preserved for review but have an ambiguous, flawed or outdated course premise. Review answers never change your source-question results.`}</p>
    </section>`;
  }

  function renderReview() {
    document.body.classList.add('review-mode');
    document.querySelectorAll('[data-view]').forEach(button => button.classList.remove('active'));
    const copy = activeCopy();
    const questions = deck();
    const scopeProgress = progress();
    scopeProgress.index = Math.min(scopeProgress.index, questions.length - 1);
    const question = questions[scopeProgress.index];
    const tonightPlan = reviewState.scope === 'unit11'
      ? [['15 min · map', 'Read the eight high-yield connections once. Say each pathway aloud without notes.'], ['30 min · retrieve', 'Use the memory cues, then correct every common trap in your own words.'], ['35 min · sprint', 'Complete 12 questions, review each rationale and finish with saved misses.']]
      : [['Choose one set', 'Work through one complete set at a time. Your place and answers save in this browser.'], ['Retrieve, then reveal', 'Answer before opening the rationale. Mark source-caveat items as concepts to understand, not facts to memorize blindly.'], ['Finish all four', `Sets contain ${comprehensiveSourceSets.map(sourceSetCount).join(', ')} questions and together cover every source question in Units 1–14.`]];
    const questionPanel = renderQuestion(question, questions);

    app.innerHTML = `<div class="test-review">
      <section class="review-hero"><div><div class="eyebrow">Tomorrow’s test review</div><h1 id="review-title" tabindex="-1">${esc(copy.title)}</h1><p>${esc(copy.subtitle)} Dense knowledge, broken into a plan you can finish tonight.</p></div><div class="review-hero-mark" aria-hidden="true">${reviewState.scope === 'unit11' ? '12Q' : '4×'}</div></section>
      <div class="review-toolbar"><div class="review-scope" role="group" aria-label="Choose review scope"><button type="button" data-review-scope="unit11" aria-pressed="${reviewState.scope === 'unit11'}">Unit 11 focus</button><button type="button" data-review-scope="comprehensive" aria-pressed="${reviewState.scope === 'comprehensive'}">All questions · 4 sets</button></div><div class="review-toolbar-actions"><button type="button" id="review-overview">← Course overview</button><button type="button" id="review-book" class="primary">${reviewState.scope === 'unit11' ? 'All 30 Unit 11 questions →' : `Book questions for Unit ${esc(unitId)} →`}</button></div></div>
      <section class="review-section" aria-labelledby="review-plan-title"><div class="review-section-head"><div><div class="eyebrow">A realistic sequence</div><h2 id="review-plan-title">Your plan for tonight.</h2></div><p>Stop passive rereading. Map the ideas, retrieve them, then practise under answer-hidden conditions.</p></div><div class="review-plan">${tonightPlan.map(([title, detail]) => `<article><h3>${esc(title)}</h3><p>${esc(detail)}</p></article>`).join('')}</div></section>
      ${reviewState.scope === 'comprehensive' ? questionPanel : ''}
      <section class="review-section" aria-labelledby="review-concepts-title"><div class="review-section-head"><div><div class="eyebrow">High-yield map</div><h2 id="review-concepts-title">Know these connections.</h2></div><p>Explain each card aloud. If you cannot connect the terms, open the related lesson instead of memorizing an isolated phrase.</p></div><div class="review-concepts">${renderConcepts(copy)}</div></section>
      <section class="review-section" aria-labelledby="review-cues-title"><div class="review-section-head"><div><div class="eyebrow">Memory cues</div><h2 id="review-cues-title">Compact hooks, complete meaning.</h2></div><p>The cue starts recall; the explanation is what earns understanding.</p></div><div class="review-memory-grid">${renderPairs(copy.cues, 'review-memory-card')}</div></section>
      <section class="review-section" aria-labelledby="review-traps-title"><div class="review-section-head"><div><div class="eyebrow">Common traps</div><h2 id="review-traps-title">Correct the tempting shortcut.</h2></div><p>These are the distinctions most likely to turn an almost-right answer into the wrong one.</p></div><div class="review-traps">${renderPairs(copy.traps, 'review-trap')}</div></section>
      ${reviewState.scope === 'unit11' ? questionPanel : ''}
    </div>`;

    bindReview(questions);
  }

  function focusQuestion() {
    document.getElementById('review-question-title')?.focus({ preventScroll: true });
  }

  function bindReview(questions) {
    document.querySelectorAll('[data-review-scope]').forEach(button => {
      button.onclick = () => {
        reviewState.scope = button.dataset.reviewScope;
        saveReview();
        render();
        document.getElementById('review-title')?.focus({ preventScroll: true });
      };
    });
    document.querySelectorAll('[data-review-set]').forEach(button => {
      button.onclick = () => {
        progress().set = Math.min(3, Math.max(0, Number(button.dataset.reviewSet) || 0));
        progress().index = 0;
        saveReview();
        render();
        document.getElementById('review-sprint')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        focusQuestion();
      };
    });
    document.getElementById('review-overview').onclick = () => go('home');
    document.getElementById('review-book').onclick = () => {
      if (reviewState.scope === 'unit11' && Number(unitId) !== 11) selectUnit(11);
      go('quiz');
    };
    document.querySelectorAll('[data-review-answer]').forEach(button => {
      button.onclick = () => {
        const question = questions[progress().index];
        progress().answers[question.id] = Number(button.dataset.reviewAnswer);
        saveReview();
        render();
        document.querySelector(`[data-review-answer="${button.dataset.reviewAnswer}"]`)?.focus({ preventScroll: true });
      };
    });
    const shortAnswer = document.getElementById('review-short-answer');
    if (shortAnswer) shortAnswer.oninput = event => {
      const question = questions[progress().index];
      progress().answers[question.id] = event.target.value.slice(0, 1600);
      saveReview();
    };
    document.getElementById('review-reveal').onclick = () => {
      const question = questions[progress().index];
      progress().revealed[question.id] = !progress().revealed[question.id];
      saveReview();
      render();
      (document.getElementById('review-feedback') || document.getElementById('review-reveal'))?.focus({ preventScroll: true });
    };
    document.getElementById('review-prev').onclick = () => {
      progress().index = Math.max(0, progress().index - 1);
      saveReview();
      render();
      focusQuestion();
    };
    document.getElementById('review-next').onclick = () => {
      progress().index = Math.min(questions.length - 1, progress().index + 1);
      saveReview();
      render();
      focusQuestion();
    };
    document.getElementById('review-new-set').onclick = () => {
      if (reviewState.scope === 'comprehensive') progress().set = (progress().set + 1) % comprehensiveSourceSets.length;
      else progress().round += 1;
      progress().index = 0;
      saveReview();
      render();
      document.getElementById('review-sprint')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      focusQuestion();
    };
    document.getElementById('review-reset').onclick = () => {
      const resetLabel = reviewState.scope === 'comprehensive' ? comprehensiveSourceSets[progress().set].label : 'this review sprint';
      if (!window.confirm(`Reset ${resetLabel}? Your source-question answers and course progress will stay unchanged.`)) return;
      for (const question of questions) {
        delete progress().answers[question.id];
        delete progress().revealed[question.id];
      }
      progress().index = 0;
      saveReview();
      render();
      focusQuestion();
    };
  }

  function openReview(scope) {
    reviewState.scope = scope;
    saveReview();
    view = 'review';
    render();
    window.scrollTo(0, 0);
    document.getElementById('review-title')?.focus({ preventScroll: true });
  }

  function addReviewCallout() {
    const hero = app.querySelector('.hero');
    if (!hero || app.querySelector('.test-review-callout')) return;
    const callout = document.createElement('section');
    callout.className = 'test-review-callout';
    callout.setAttribute('aria-labelledby', 'test-review-callout-title');
    callout.innerHTML = `<div><div class="eyebrow">Test tomorrow</div><h2 id="test-review-callout-title">Turn the course into a plan for tonight.</h2><p class="muted">Use the focused Unit 11 sprint or open four complete sets covering every source question across Units 1–14. Exact Unit 12 course answers—including the supplied Question 5 key—are included.</p></div><div class="review-callout-actions"><button type="button" class="primary" data-open-review="comprehensive">Review all questions · 4 sets →</button><button type="button" class="secondary-dark" data-open-review="unit11">Focused Unit 11 sprint</button></div>`;
    hero.insertAdjacentElement('afterend', callout);
    callout.querySelectorAll('[data-open-review]').forEach(button => button.onclick = () => openReview(button.dataset.openReview));
  }

  render = function renderWithTestReview() {
    if (view === 'review') {
      renderReview();
      return;
    }
    document.body.classList.remove('review-mode');
    reviewBaseRender();
    if (view === 'home') addReviewCallout();
  };

  render();
}());
