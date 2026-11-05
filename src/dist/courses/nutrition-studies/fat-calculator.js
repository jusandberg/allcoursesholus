(() => {
  // Course formulas: Unit 1 Calories/labels; Unit 6 intake ranges. No stored inputs.
  function calculate(mode, amount, total) {
    if (amount === '' || total === '') return {error: 'Enter both values.'};
    amount = Number(amount); total = Number(total);
    if (!Number.isFinite(amount) || !Number.isFinite(total) || amount < 0 || total <= 0)
      return {error: 'Use a non-negative amount and total energy greater than zero.'};
    if (mode === 'percent') {
      if (amount > 100) return {error: 'Energy percentage must be between 0 and 100.'};
      const kcal = total * (amount / 100);
      if (!Number.isFinite(kcal)) return {error: 'These values are too large.'};
      return {kcal, grams: kcal / 9, percent: amount};
    }
    const kcal = mode === 'grams' ? amount * 9 : amount;
    if (!Number.isFinite(kcal)) return {error: 'These values are too large.'};
    if (kcal > total) return {error: 'Fat energy cannot exceed total energy. Check the amounts and use the same serving or time period.'};
    return {kcal, grams: kcal / 9, percent: kcal / total * 100};
  }
  window.courseFatMath = calculate;
  const base = render;
  render = function renderWithFatCalculator() {
    base();
    if (view !== 'learn' || !(unitId === 1 && [2, 5].includes(li) || unitId === 6 && li === 10)) return;
    const article = app.querySelector('.article');
    if (!article || article.querySelector('.fat-calculator')) return;
    const box = document.createElement('section');
    box.className = 'fat-calculator example';
    box.setAttribute('aria-labelledby', 'fat-calc-heading');
    box.innerHTML = `<div class="eyebrow">Try the lesson calculation</div><h3 id="fat-calc-heading">Fat &amp; energy calculator</h3>
      <div class="fat-calc-fields"><label for="fat-calc-mode">Calculate from<select id="fat-calc-mode"><option value="grams">Fat grams → % of energy</option><option value="kcal">Fat Calories → % of energy</option><option value="percent">% of energy → fat grams</option></select></label>
      <label><span id="fat-calc-amount-label">Fat (g)</span><input id="fat-calc-amount" type="number" inputmode="decimal" min="0" step="any" value="10"></label>
      <label>Total energy (kcal)<input id="fat-calc-total" type="number" inputmode="decimal" min="0" step="any" value="298"></label></div>
      <div class="actions"><button type="button" data-example="sandwich">Sandwich example</button><button type="button" data-example="label">Label example</button><button type="button" data-example="range">30% example</button></div>
      <div class="fat-calc-result" role="status" aria-live="polite" aria-atomic="true"></div>
      <p class="muted">Fat supplies approximately 9 kcal/g. Use the same serving or time period for both inputs. This calculates dietary energy—not body-fat percentage or a personal intake recommendation. Inputs stay on this page and are not saved.</p>`;
    const actions = article.querySelector('.actions');
    if (actions) actions.before(box); else article.append(box);
    const mode = box.querySelector('#fat-calc-mode'), amount = box.querySelector('#fat-calc-amount'), total = box.querySelector('#fat-calc-total'), output = box.querySelector('.fat-calc-result');
    const fmt = n => n.toLocaleString(undefined, {maximumFractionDigits: 2});
    function update() {
      box.querySelector('#fat-calc-amount-label').textContent = mode.value === 'grams' ? 'Fat (g)' : mode.value === 'kcal' ? 'Energy from fat (kcal)' : 'Energy from fat (%)';
      if (mode.value === 'percent') amount.max = '100'; else amount.removeAttribute('max');
      const result = calculate(mode.value, amount.value, total.value);
      if (result.error) {output.textContent = result.error; return;}
      output.textContent = mode.value === 'percent'
        ? `${fmt(Number(total.value))} × ${fmt(result.percent)}% = ${fmt(result.kcal)} kcal from fat; ÷ 9 = ${fmt(result.grams)} g fat.`
        : `${mode.value === 'grams' ? fmt(Number(amount.value)) + ' g × 9 = ' : ''}${fmt(result.kcal)} kcal from fat. ${fmt(result.kcal)} ÷ ${fmt(Number(total.value))} × 100 = ${fmt(result.percent)}% of total energy.`;
    }
    mode.addEventListener('change', update);
    amount.addEventListener('input', update); total.addEventListener('input', update);
    box.querySelectorAll('[data-example]').forEach(button => button.addEventListener('click', () => {
      const values = {sandwich: ['grams', 10, 298], label: ['kcal', 80, 190], range: ['percent', 30, 2400]}[button.dataset.example];
      [mode.value, amount.value, total.value] = values; update();
    }));
    if (unitId === 6) { mode.value = 'percent'; amount.value = '30'; total.value = '2400'; }
    else if (li === 5) {mode.value = 'kcal'; amount.value = '80'; total.value = '190';}
    update();
  };
  if (view === 'learn') render();
})();
