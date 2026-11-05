(() => {
  if (typeof STUDY_GUIDES === 'undefined') return;
  const guide = STUDY_GUIDES['lesson-1'];
  if (!guide || guide.comprehensive || guide.sections.some(section => section.id === 'l1-test-ready-summary')) return;

  guide.sections.splice(1, 0, {
    id: 'l1-test-ready-summary',
    title: 'Test-ready chapter summary',
    html: `
      <div class="test-ready-note">
        <strong>Built to prepare you for all 25 supplied Lesson Test 1 questions.</strong>
        <p>This is a Hōlus study summary based on the assigned topic, the printer-version test and current reference checks. It is not a reproduction of the unavailable chapter or an official answer key.</p>
      </div>

      <h3>Standards, energy and calculations</h3>
      <div class="test-ready-grid">
        <article><h4>Dietary reference values</h4><p><b>EAR</b> meets the estimated requirement of 50% of a healthy group. <b>RDA</b> covers about 97–98%. <b>AI</b> is used when an EAR and RDA cannot be set. <b>UL</b> is an upper safety boundary, not an intake target.</p></article>
        <article><h4>The 4–4–9 rule</h4><p>Carbohydrate provides 4 kcal/g, protein 4 kcal/g and fat 9 kcal/g. Multiply grams by the factor, add for total energy, then divide a nutrient’s Calories by total Calories × 100 for its percentage.</p></article>
        <article><h4>Adult AMDR</h4><p>Carbohydrate 45–65%, protein 10–35% and fat 20–35% of total energy. Age-specific ranges matter, and AMDR describes an overall dietary pattern—not the quality of one food.</p></article>
      </div>

      <div class="table-scroll" tabindex="0" role="region" aria-label="Lesson 1 worked calculations"><table class="study-table"><thead><tr><th scope="col">Worked example</th><th scope="col">Calculation</th><th scope="col">Result</th></tr></thead><tbody>
        <tr><th scope="row">Legacy label: fat share</th><td>45 ÷ 170 × 100</td><td>26.5%; numerically within the adult 20–35% range</td></tr>
        <tr><th scope="row">Smoothie</th><td>(9 × 4) + (102 × 4) + (1 × 9)</td><td>453 kcal</td></tr>
        <tr><th scope="row">Half sandwich</th><td>[(20 × 4) + (8 × 4) + (5 × 9)] ÷ 2</td><td>78.5 kcal, approximately 80</td></tr>
        <tr><th scope="row">Jill’s total</th><td>(250 × 4) + (100 × 9) + (50 × 4)</td><td>2,100 kcal</td></tr>
        <tr><th scope="row">Jill’s carbohydrate</th><td>1,000 ÷ 2,100 × 100</td><td>47.6%, approximately 48%</td></tr>
        <tr><th scope="row">Jill’s fat</th><td>900 ÷ 2,100 × 100</td><td>42.9%, approximately 43%</td></tr>
      </tbody></table></div>

      <h3>Labels, nutrients and food-quality concepts</h3>
      <ul>
        <li><b>Sucrose</b> is the disaccharide glucose + fructose.</li>
        <li>Food labels report amounts per serving and general Daily Values; they do not give a person an individualized daily prescription. <b>%DV is not percentage of Calories.</b></li>
        <li>U.S. enriched refined grains supply thiamin (B1), riboflavin (B2), niacin (B3) and iron; folic acid is also relevant even though it is absent from the test choices.</li>
        <li>The test’s older U.S. label expects <b>vitamin C</b> as the missing mandatory nutrient. Current labels have changed.</li>
        <li><b>Nutrient density</b> means substantial nutrients relative to energy. It does not simply mean “low calorie.”</li>
        <li>Fortified milk’s emphasized nutrient is <b>calcium</b>. Salami and prepared soup are important <b>sodium</b> sources.</li>
        <li>Meaningful iron sources among the test foods include steak, beans and fortified cereal; peaches provide comparatively little iron.</li>
      </ul>

      <h3>Vitamins, water and protective compounds</h3>
      <ul>
        <li><b>Water-soluble:</b> B-complex and vitamin C. <b>Fat-soluble:</b> A, D, E and K.</li>
        <li>The general claim that fat-soluble-vitamin deficiency appears faster is false because these vitamins are often stored. Vitamin B12 is an important water-soluble exception with substantial stores.</li>
        <li>The claim that we typically absorb a greater percentage of minerals than vitamins is false; mineral absorption varies with chemical form, food matrix, inhibitors, enhancers and nutrient status.</li>
        <li>Water is a reaction medium and supports chemical transformations, waste removal and temperature regulation. “Energy metabolism regulation” is the source test’s intended non-role, although its wording is imprecise.</li>
        <li>Phytochemicals are plant-produced bioactive compounds. Vitamin C, vitamin E and beta-carotene participate in antioxidant defence; beta-carotene is a carotenoid and provitamin A, not itself a vitamin.</li>
      </ul>

      <h3>Assessment, malnutrition and responsible claims</h3>
      <p><b>ABCD assessment</b> means Anthropometric, Biochemical, Clinical/physical and Dietary information. “Initial evaluation” is not one of the four categories. No single category proves nutritional status.</p>
      <p><b>Primary malnutrition</b> can result directly from insufficient intake or food access. <b>Secondary malnutrition</b> involves disease, absorption, metabolism, altered needs or losses. Not having enough money for food can therefore contribute to primary malnutrition.</p>
      <p>A statement such as “calcium supports bones” describes normal structure or function. “Calcium prevents bone fracture” is a disease-prevention claim and requires a different level of evidence and regulation. U.S. and Canadian claim systems are not interchangeable.</p>

      <details class="test-ready-checklist">
        <summary>Open the 25-question coverage checklist</summary>
        <ol>
          <li>EAR = estimated needs of 50% of a healthy group.</li>
          <li>Sucrose = glucose + fructose.</li>
          <li>Labels do not provide individualized daily intake recommendations.</li>
          <li>Enrichment: thiamin, riboflavin, niacin and iron; remember the folic-acid caveat.</li>
          <li>Legacy label answer: vitamin C; current rules differ.</li>
          <li>45 of 170 kcal from fat = 26.5%; overall-diet caveat applies.</li>
          <li>Smoothie = 453 kcal.</li>
          <li>Half sandwich ≈ 80 kcal.</li>
          <li>Milk’s intended emphasized nutrient = calcium.</li>
          <li>Salami and prepared soup point to sodium.</li>
          <li>Phytochemicals are produced by plants.</li>
          <li>Vitamin C, vitamin E and beta-carotene participate in antioxidant defence.</li>
          <li>Water-question intended exception = energy metabolism regulation; wording is imperfect.</li>
          <li>Nutrient density = nutrients relative to energy, not merely low Calories.</li>
          <li>ABCD excludes “initial evaluation.”</li>
          <li>Jill’s carbohydrate = 1,000 kcal.</li>
          <li>Jill’s carbohydrate share ≈ 48%.</li>
          <li>Jill’s fat share ≈ 43%; do not add saturated fat twice.</li>
          <li>The source key emphasizes oranges, sweet potatoes, peppers, spinach, blueberries and cranberries; raisins and figs also contain antioxidants.</li>
          <li>“Prevents bone fracture” is the disease-prevention claim.</li>
          <li>Water-soluble vitamins = B-complex + C.</li>
          <li>Faster fat-soluble deficiency statement = false as a general rule.</li>
          <li>Greater mineral absorption statement = false.</li>
          <li>Food insecurity can cause primary malnutrition.</li>
          <li>Peaches provide the least meaningful iron among the listed choices.</li>
        </ol>
      </details>
    `
  });
})();
