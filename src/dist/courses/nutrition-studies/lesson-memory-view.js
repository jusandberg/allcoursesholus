(() => {
  const base = render;
  render = function renderWithLessonMemory() {
    base();
    if (view !== 'learn' || unitId === 6) return;
    const item = window.lessonMemoryCues?.[unitId]?.[li];
    const article = app.querySelector('.article');
    if (!item || !article || article.querySelector('.lesson-memory')) return;
    const cue = document.createElement('aside');
    cue.className = 'lesson-memory';
    cue.setAttribute('aria-label', 'Mnemonic and memory hook');
    const label = document.createElement('div');
    label.className = 'eyebrow';
    label.textContent = 'Mnemonic · memory hook';
    const hook = document.createElement('strong');
    hook.textContent = item.hook;
    const explanation = document.createElement('p');
    explanation.textContent = item.explanation;
    cue.append(label, hook, explanation);
    article.querySelector('h2')?.insertAdjacentElement('afterend', cue);
  };
  if (view === 'learn') render();
})();
