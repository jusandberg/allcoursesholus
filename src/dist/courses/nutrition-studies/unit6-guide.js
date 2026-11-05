(() => {
  const support = [
    {
      plain: 'A fatty acid is easiest to read as a chain with two different ends and a bond pattern in between.',
      memory: 'Alpha = acid end. Omega = methyl end. Read n−3 from omega.',
      practice: 'What does 18:2 n−6 tell you before you know anything else?',
      answer: 'It has 18 carbons, 2 double bonds, and its first double bond begins 6 carbons from the methyl end.',
      lens: 'On a supplement or food-composition sheet, separate chain length, double-bond count and omega family instead of treating them as one label.'
    },
    {
      plain: 'First count carbon–carbon double bonds; that one step separates saturated, monounsaturated and polyunsaturated fatty acids.',
      memory: '0 = saturated. 1 = mono. 2 or more = poly.',
      practice: 'Why is an 18:2 fatty acid both unsaturated and polyunsaturated?',
      answer: 'Any C=C bond makes it unsaturated, and two C=C bonds place it specifically in the polyunsaturated group.',
      lens: 'Foods contain mixtures. “Olive oil is monounsaturated” describes the predominant pattern, not every fatty acid in the oil.'
    },
    {
      plain: 'Cis and trans describe geometry around a double bond: cis bends the chain more, while trans keeps it relatively straighter.',
      memory: 'Cis curves; trans tracks straighter.',
      practice: 'Does fully hydrogenated oil contain the same trans-fat concern as partially hydrogenated oil?',
      answer: 'No. Full hydrogenation removes most or all double bonds; partial hydrogenation can create trans double bonds.',
      lens: 'Use the ingredient list and overall formulation—not a front-of-package claim alone—when assessing industrial trans-fat exposure.'
    },
    {
      plain: 'Omega names are addresses: count from the methyl end to the first double bond.',
      memory: 'ALA = 18:3 n−3. LA = 18:2 n−6. Both are essential.',
      practice: 'Why is ALA called an omega-3 fatty acid?',
      answer: 'Its first double bond begins at the third carbon counted from the methyl (omega) end.',
      lens: 'Distinguish plant ALA sources from direct EPA and DHA sources; conversion from ALA is limited and variable.'
    },
    {
      plain: 'Eicosanoids are short-lived local signals made from 20-carbon PUFA derivatives—not simple “good” or “bad” fats.',
      memory: 'Eicosa means 20; think local messenger.',
      practice: 'Why is “omega-6 is inflammatory” an incomplete statement?',
      answer: 'Omega-6 pathways produce several signals with different roles, and inflammatory balance depends on the wider physiological context.',
      lens: 'Avoid reducing inflammation counselling to one fatty-acid family; assess the overall dietary pattern and clinical context.'
    },
    {
      plain: 'A triglyceride is a storage package: one glycerol backbone carrying three fatty acids.',
      memory: 'Tri = three fatty-acid tails.',
      practice: 'Can carbohydrate contribute to triglyceride storage?',
      answer: 'Yes. When energy exceeds immediate needs, energy from carbohydrate, fat or protein can contribute to stored triglyceride.',
      lens: 'Adipose tissue is metabolically active: it stores energy, cushions, insulates and releases signalling molecules.'
    },
    {
      plain: 'Phospholipids build water-compatible boundaries; cholesterol is a sterol with different structural and precursor roles.',
      memory: 'Phospholipid: water-facing head, water-avoiding tails.',
      practice: 'Why do phospholipids form bilayers in water?',
      answer: 'Their polar heads interact with water while their nonpolar tails cluster away from it.',
      lens: 'Keep dietary cholesterol separate from blood cholesterol; synthesis, genetics and overall diet all influence blood levels.'
    },
    {
      plain: 'Fat digestion follows a sequence: disperse, emulsify, hydrolyse, ferry, absorb, rebuild and ship.',
      memory: 'Bile breaks up droplets; lipase breaks chemical bonds.',
      practice: 'What is the difference between bile and pancreatic lipase?',
      answer: 'Bile emulsifies fat physically; pancreatic lipase catalyses triglyceride hydrolysis.',
      lens: 'When symptoms suggest fat malabsorption, think across bile delivery, pancreatic enzymes, intestinal absorption and lymphatic transport.'
    },
    {
      plain: 'Lipoproteins are transport packages; their origin and cargo help you keep their roles straight.',
      memory: 'Chylomicron = cuisine/intestine. VLDL = liver export.',
      practice: 'Which particle first carries dietary triglyceride away from intestinal cells?',
      answer: 'A chylomicron, which enters lymph before reaching the bloodstream.',
      lens: 'Do not reduce LDL and HDL to “bad” and “good” cholesterol; they are particles involved in different transport pathways.'
    },
    {
      plain: 'Cardiovascular risk is about cumulative exposure and the whole pattern—especially what replaces saturated or trans fat.',
      memory: 'Swap, do not simply add: unsaturated for saturated or trans.',
      practice: 'Why does the replacement nutrient matter?',
      answer: 'Replacing saturated fat with unsaturated fat differs metabolically from replacing it with refined carbohydrate or simply adding more energy.',
      lens: 'Interpret lipids beside blood pressure, diabetes, smoking, family history and other risk factors rather than in isolation.'
    },
    {
      plain: 'Turn a percentage into grams in two steps: percent × total kcal, then divide fat kcal by 9.',
      memory: 'Percent → kcal → ÷9 = grams.',
      practice: 'What is 30% of 2,000 kcal as grams of fat?',
      answer: '2,000 × 0.30 = 600 kcal; 600 ÷ 9 ≈ 67 g fat.',
      lens: 'An AMDR is a range for planning, not a prescription that overrides individual energy needs or clinical goals.'
    },
    {
      plain: 'Master the unit by telling one connected story from fatty-acid structure to digestion, transport, tissue use and health context.',
      memory: 'Meal → bile/lipase → micelle → enterocyte → chylomicron → LPL → tissue.',
      practice: 'Where do chylomicrons and VLDL enter the story?',
      answer: 'Chylomicrons leave intestinal cells with dietary lipid; VLDL leaves the liver with endogenous triglyceride.',
      lens: 'If you can explain the journey without notes, you understand the system rather than memorizing isolated definitions.'
    }
  ];

  const unit6BaseRender = render;

  function addRoadmap() {
    if (app.querySelector('.fat-roadmap')) return;
    const welcome = app.querySelector('.welcome-note');
    const roadmap = document.createElement('section');
    roadmap.className = 'fat-roadmap';
    roadmap.innerHTML = `<div class="eyebrow">Unit 6 · Lipids</div>
      <h2>Structure, digestion and transport.</h2>
      <p>Fatty-acid structure → digestion and absorption → transport and tissue use.</p>
      <div class="fat-roadmap-grid">
        <article class="fat-roadmap-card"><span>Chapter 01 · Lessons 1–5</span><strong>Read the structure</strong><p>Ends, double bonds, cis/trans geometry, omega families and signalling.</p><button type="button" data-fat-start="0">Start with structure →</button></article>
        <article class="fat-roadmap-card"><span>Chapter 02 · Lessons 6–8</span><strong>Build and digest</strong><p>Triglycerides, phospholipids, cholesterol and the digestion sequence.</p><button type="button" data-fat-start="5">Start with digestion →</button></article>
        <article class="fat-roadmap-card"><span>Chapter 03 · Lessons 9–12</span><strong>Transport and apply</strong><p>Lipoproteins, cardiovascular context, intake math and integration.</p><button type="button" data-fat-start="8">Start with transport →</button></article>
      </div>`;
    (welcome || app.querySelector('.hero'))?.insertAdjacentElement('afterend', roadmap);
    roadmap.querySelectorAll('[data-fat-start]').forEach(button => {
      button.addEventListener('click', () => {
        li = Number(button.dataset.fatStart);
        go('learn');
      });
    });
  }

  function enhanceLesson() {
    const article = app.querySelector('.article');
    const item = support[li];
    if (!article || !item || article.querySelector('.fat-lesson-orientation')) return;

    const heading = article.querySelector('h2');
    const orientation = document.createElement('section');
    orientation.className = 'fat-lesson-orientation';
    orientation.innerHTML = `<div class="eyebrow">Core idea</div><h3>${item.plain}</h3>`;
    heading?.insertAdjacentElement('afterend', orientation);

    const memory = document.createElement('aside');
    memory.className = 'lesson-memory';
    memory.setAttribute('aria-label','Mnemonic and memory hook');
    memory.innerHTML = `<div class="eyebrow">Mnemonic · memory hook</div><strong>${item.memory}</strong>`;
    heading?.insertAdjacentElement('afterend', memory);

    const tools = document.createElement('section');
    tools.className = 'fat-learning-tools';
    tools.setAttribute('aria-label', 'Lesson study tools');
    tools.innerHTML = `
      <article class="fat-tool"><div class="eyebrow">Practice connection</div><strong>Why this matters in practice</strong><p>${item.lens}</p></article>
      <article class="fat-tool"><div class="eyebrow">Quick check</div><strong>${item.practice}</strong><details><summary>Reveal answer</summary><p>${item.answer}</p></details></article>`;
    const mastery = Array.from(article.querySelectorAll('.example')).at(-1);
    (mastery || article.querySelector('.actions'))?.insertAdjacentElement('beforebegin', tools);
  }

  render = function renderWithUnit6Guide() {
    unit6BaseRender();
    if (unitId !== 6) return;
    if (view === 'home') addRoadmap();
    if (view === 'learn') enhanceLesson();
  };

  if (unitId === 6 && view === 'home') addRoadmap();
})();
