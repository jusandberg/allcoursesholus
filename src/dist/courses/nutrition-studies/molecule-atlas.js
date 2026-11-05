(() => {
  const atlasBaseRender = render;
  let atlasFocus = '';

  function moleculeAtlasMarkup() {
    return `<div class="molecule-atlas">
      <section class="atlas-hero" aria-labelledby="atlas-title">
        <div>
          <div class="eyebrow">Visual learning · Molecule atlas</div>
          <h1 id="atlas-title">See the shape.<br>Understand the role.</h1>
          <p class="atlas-lede">Macronutrients are families of molecules—not three universal shapes. These simplified models show one useful example from each family and the structural clues worth recognizing.</p>
          <nav class="atlas-jump" aria-label="Jump to a molecule">
            <a href="#atlas-carbohydrate">Carbohydrate</a>
            <a href="#atlas-protein">Protein</a>
            <a href="#atlas-pufa">PUFA</a>
          </nav>
        </div>
      </section>

      <section class="atlas-primer" aria-label="Molecule comparison">
        <div><span>Carbohydrate</span><strong>Hydroxyl-rich sugar units that can link into larger structures</strong></div>
        <div><span>Protein</span><strong>Amino-acid chains joined by peptide bonds, then folded</strong></div>
        <div><span>PUFA</span><strong>A fatty-acid chain with two or more carbon–carbon double bonds</strong></div>
      </section>

      <section class="atlas-entry" id="atlas-carbohydrate" aria-labelledby="carbohydrate-title">
        <div class="atlas-copy">
          <span class="atlas-tag">Carbohydrate example</span><span class="atlas-formula">C₆H₁₂O₆</span>
          <h2 id="carbohydrate-title">α-D-glucose</h2>
          <p>Glucose is one monosaccharide. In water it commonly forms a ring; glucose units can also join through glycosidic bonds to build structures such as starch and glycogen.</p>
          <ul class="atlas-notes">
            <li><strong>Look for</strong><span>A six-membered ring containing five carbons and one oxygen.</span></li>
            <li><strong>Notice</strong><span>The many hydroxyl (OH) groups that make this small sugar polar.</span></li>
            <li><strong>Remember</strong><span>Carbohydrate is a family. This α ring is one cyclic form of one member.</span></li>
          </ul>
          <button class="atlas-unit-link" data-unit-jump="4">Study carbohydrates · Unit 4 →</button>
        </div>
        <figure class="molecule-figure">
          <svg viewBox="0 0 720 405" role="img" focusable="false" aria-labelledby="glucose-svg-title glucose-svg-desc">
            <title id="glucose-svg-title">Alpha-D-glucose ring structure</title>
            <desc id="glucose-svg-desc">A simplified Haworth projection of alpha-D-glucose. Its six-membered ring contains five carbon atoms and one oxygen atom; the sixth carbon is in the CH2OH side group. Hydroxyl groups surround the ring. Unlabelled corners are carbons and most hydrogens are omitted.</desc>
            <circle class="guide" cx="390" cy="207" r="174" opacity=".38" />
            <path class="bond" d="M250 155 L430 100 L520 155 L500 260 L385 315 L270 260 Z" />
            <rect x="412" y="79" width="38" height="39" rx="18" fill="#f4f0e6" />
            <text class="atom oxygen" x="431" y="107" text-anchor="middle">O</text>
            <path class="bond" d="M520 155 L555 222" />
            <text class="atom oxygen" x="571" y="249" text-anchor="middle">OH</text>
            <path class="bond" d="M500 260 L507 327" />
            <text class="atom oxygen" x="508" y="360" text-anchor="middle">OH</text>
            <path class="bond" d="M385 315 L385 247" />
            <text class="atom oxygen" x="385" y="229" text-anchor="middle">OH</text>
            <path class="bond" d="M270 260 L230 325" />
            <text class="atom oxygen" x="218" y="356" text-anchor="middle">OH</text>
            <path class="bond" d="M250 155 L210 86" />
            <text class="atom carbon" x="174" y="67" text-anchor="middle">CH₂OH</text>
            <text class="tiny annot" x="541" y="144">C1 · α OH ↓</text>
            <text class="tiny minor minor-label" x="209" y="151">C5</text>
            <path class="guide" d="M180 115 C147 148 140 249 181 291" />
            <text class="tiny annot" x="35" y="192">5 C + 1 O</text>
            <text class="tiny annot" x="40" y="211">in the ring</text>
          </svg>
          <figcaption>Glucose is one carbohydrate building block. Starch, glycogen and many fibres are larger structures made from linked sugar units.</figcaption>
          <div class="molecule-legend"><span>Unlabelled corners = carbon</span><span>Most hydrogens omitted</span><span>OH = hydroxyl group</span></div>
        </figure>
      </section>

      <section class="atlas-entry" id="atlas-protein" aria-labelledby="protein-title">
        <div class="atlas-copy">
          <span class="atlas-tag">Protein building pattern</span><span class="atlas-formula">3 amino-acid residues</span>
          <h2 id="protein-title">A short peptide</h2>
          <p>Proteins are long polymers, not one universal molecule. This three-residue model reveals the repeating backbone, the variable side chains and the peptide bonds that join amino acids.</p>
          <ul class="atlas-notes">
            <li><strong>Look for</strong><span>The repeating N—Cα—C backbone from the N-terminus to the C-terminus.</span></li>
            <li><strong>Notice</strong><span>Every Cα carries an R group; changing the R groups changes the chain’s chemistry.</span></li>
            <li><strong>Remember</strong><span>Sequence guides folding, and three-dimensional shape helps determine function.</span></li>
          </ul>
          <button class="atlas-unit-link" data-unit-jump="5">Study proteins · Unit 5 →</button>
        </div>
        <figure class="molecule-figure">
          <svg viewBox="0 0 720 405" role="img" focusable="false" aria-labelledby="peptide-svg-title peptide-svg-desc">
            <title id="peptide-svg-title">A three-amino-acid peptide backbone</title>
            <desc id="peptide-svg-desc">A simplified tripeptide running from the positively charged N-terminus to the negatively charged C-terminus. Three alpha carbons carry different R side chains. Two highlighted carbonyl-to-nitrogen links are peptide bonds. Most hydrogens are omitted.</desc>
            <path class="guide" d="M92 99 C196 33 295 73 362 48 C465 10 565 70 632 45" opacity=".65" />
            <text class="tiny annot" x="362" y="29" text-anchor="middle">longer chains fold into proteins</text>
            <path class="highlight" d="M200 218 L280 218 M440 218 L520 218" />
            <path class="bond" d="M45 218 L120 218 L200 218 L280 218 L360 218 L440 218 L520 218 L600 218 L680 218" />
            <path class="bond" d="M197 214 L197 145 M205 214 L205 145 M437 214 L437 145 M445 214 L445 145" />
            <text class="atom nitrogen" x="43" y="225" text-anchor="middle">H₃N⁺</text>
            <text class="atom carbon" x="120" y="225" text-anchor="middle">Cα</text>
            <text class="atom carbon" x="200" y="225" text-anchor="middle">C</text>
            <text class="atom nitrogen" x="280" y="225" text-anchor="middle">NH</text>
            <text class="atom carbon" x="360" y="225" text-anchor="middle">Cα</text>
            <text class="atom carbon" x="440" y="225" text-anchor="middle">C</text>
            <text class="atom nitrogen" x="520" y="225" text-anchor="middle">NH</text>
            <text class="atom carbon" x="600" y="225" text-anchor="middle">Cα</text>
            <text class="atom carbon" x="680" y="225" text-anchor="middle">COO⁻</text>
            <text class="atom oxygen" x="201" y="130" text-anchor="middle">O</text>
            <text class="atom oxygen" x="441" y="130" text-anchor="middle">O</text>
            <path class="bond" d="M120 218 L120 305 M360 218 L360 305 M600 218 L600 305" />
            <text class="atom annot" x="120" y="338" text-anchor="middle">R¹</text>
            <text class="atom annot" x="360" y="338" text-anchor="middle">R²</text>
            <text class="atom annot" x="600" y="338" text-anchor="middle">R³</text>
            <path class="guide" d="M198 272 C221 293 258 293 282 272 M438 272 C461 293 498 293 522 272" />
            <text class="tiny annot" x="360" y="382" text-anchor="middle">highlighted links = peptide bonds</text>
            <text class="tiny minor" x="43" y="258" text-anchor="middle">N-terminus</text>
            <text class="tiny minor" x="676" y="258" text-anchor="middle">C-terminus</text>
          </svg>
          <figcaption>Proteins are long amino-acid chains. This three-residue example shows the repeating backbone and the peptide bonds that join amino acids.</figcaption>
          <div class="molecule-legend"><span>Blue = nitrogen</span><span>Clay = oxygen</span><span>R = variable side chain</span></div>
        </figure>
      </section>

      <section class="atlas-entry" id="atlas-pufa" aria-labelledby="pufa-title">
        <div class="atlas-copy">
          <span class="atlas-tag">PUFA example</span><span class="atlas-formula">18:3 n−3</span>
          <h2 id="pufa-title">Alpha-linolenic acid</h2>
          <p>ALA is an essential omega-3 polyunsaturated fatty acid. Its 18-carbon chain contains three cis double bonds; those bonds interrupt tight packing and create flexible bends.</p>
          <ul class="atlas-notes">
            <li><strong>Look for</strong><span>The carboxyl end, the methyl (ω) end and three double lines for three C=C bonds.</span></li>
            <li><strong>Notice</strong><span>“n−3” means the first double bond begins three carbons from the methyl end.</span></li>
            <li><strong>Remember</strong><span>PUFA is a family. ALA is not interchangeable with EPA or DHA.</span></li>
          </ul>
          <button class="atlas-unit-link" data-unit-jump="6">Study lipids · Unit 6 →</button>
        </div>
        <figure class="molecule-figure">
          <svg viewBox="0 0 720 405" role="img" focusable="false" aria-labelledby="ala-svg-title ala-svg-desc">
            <title id="ala-svg-title">Alpha-linolenic acid, an omega-3 polyunsaturated fatty acid</title>
            <desc id="ala-svg-desc">A simplified 18-carbon skeletal structure of alpha-linolenic acid. The carboxyl end is on the left and the methyl omega end is on the right. Cis double bonds occur between carbons 9 and 10, 12 and 13, and 15 and 16, producing bends in the chain. Unlabelled vertices are carbon atoms and most hydrogens are omitted.</desc>
            <text class="tiny annot" x="24" y="98">carboxyl end</text>
            <text class="tiny annot" x="614" y="98">methyl / ω end</text>
            <path class="bond" d="M76 205 L110 175 L144 205 L178 175 L212 205 L246 175 L280 205 L314 175 L348 205 L382 205 L416 175 L450 205 L484 205 L518 175 L552 205 L586 205 L620 175 L654 205" />
            <path class="bond" d="M72 201 L72 146 M80 201 L80 146 M76 205 L38 205" />
            <text class="atom oxygen" x="76" y="128" text-anchor="middle">O</text>
            <text class="atom oxygen" x="12" y="212">HO</text>
            <rect x="642" y="187" width="69" height="35" rx="16" fill="#f4f0e6" />
            <text class="atom carbon" x="652" y="212">CH₃</text>
            <path class="bond" d="M348 195 L382 195 M450 195 L484 195 M552 195 L586 195" />
            <path class="guide" d="M337 251 C362 269 384 269 394 251 M439 251 C464 269 486 269 496 251 M541 251 C566 269 588 269 598 251" />
            <text class="tiny annot" x="468" y="294" text-anchor="middle">3 cis double bonds</text>
            <text class="tiny minor" x="76" y="232" text-anchor="middle">1</text>
            <text class="tiny minor" x="348" y="232" text-anchor="middle">9</text>
            <text class="tiny minor" x="450" y="232" text-anchor="middle">12</text>
            <text class="tiny minor" x="552" y="232" text-anchor="middle">15</text>
            <text class="tiny minor" x="654" y="232" text-anchor="middle">18</text>
            <path class="guide" d="M649 332 L557 332" />
            <path d="M557 332 l13 -7 v14 z" fill="#71836d" />
            <text class="tiny annot" x="604" y="319" text-anchor="middle">count from ω end</text>
            <text class="tiny minor minor-label" x="360" y="370" text-anchor="middle">HOOC–(CH₂)₇–CH=CH–CH₂–CH=CH–CH₂–CH=CH–CH₂–CH₃</text>
          </svg>
          <figcaption>ALA is one PUFA example. PUFA means a fatty acid with more than one carbon–carbon double bond; n−3 locates the first double bond from the methyl end.</figcaption>
          <div class="molecule-legend"><span>Unlabelled corners = carbon</span><span>Double line = double bond</span><span>Chain shown in a simplified conformation</span></div>
        </figure>
      </section>

      <aside class="atlas-model-note" aria-label="Model limitations">
        <b>What these models leave out</b>
        <p>Molecules move in three dimensions, and foods contain mixtures of compounds. These drawings deliberately omit most hydrogens and simplify shape so the bonds, functional groups and repeating patterns are easier to study.</p>
      </aside>
    </div>`;
  }

  function triglycerideFigureMarkup() {
    return `<figure class="molecule-figure">
      <svg viewBox="0 0 720 405" role="img" focusable="false" aria-labelledby="triglyceride-svg-title triglyceride-svg-desc">
        <title id="triglyceride-svg-title">Simplified triglyceride structure</title>
        <desc id="triglyceride-svg-desc">A glycerol backbone on the left is joined through three ester bonds to three fatty-acid portions extending to the right. The three fatty-acid chains may differ from one another.</desc>
        <path class="guide" d="M83 73 C45 112 45 294 83 333" />
        <text class="tiny annot" x="16" y="191">glycerol</text>
        <text class="tiny annot" x="16" y="211">backbone</text>
        <path class="bond" d="M122 105 L122 200 L122 295" />
        <text class="atom carbon" x="122" y="112" text-anchor="middle">CH₂</text>
        <text class="atom carbon" x="122" y="207" text-anchor="middle">CH</text>
        <text class="atom carbon" x="122" y="302" text-anchor="middle">CH₂</text>
        <path class="bond" d="M154 105 L195 105 L246 105 M154 200 L195 200 L246 200 M154 295 L195 295 L246 295" />
        <text class="atom oxygen" x="177" y="112" text-anchor="middle">O</text>
        <text class="atom oxygen" x="177" y="207" text-anchor="middle">O</text>
        <text class="atom oxygen" x="177" y="302" text-anchor="middle">O</text>
        <text class="atom carbon" x="246" y="112" text-anchor="middle">C</text>
        <text class="atom carbon" x="246" y="207" text-anchor="middle">C</text>
        <text class="atom carbon" x="246" y="302" text-anchor="middle">C</text>
        <path class="bond" d="M242 98 L242 56 M250 98 L250 56 M242 193 L242 151 M250 193 L250 151 M242 288 L242 246 M250 288 L250 246" />
        <text class="atom oxygen" x="246" y="40" text-anchor="middle">O</text>
        <text class="atom oxygen" x="246" y="135" text-anchor="middle">O</text>
        <text class="atom oxygen" x="246" y="230" text-anchor="middle">O</text>
        <path class="bond" d="M268 105 L307 79 L346 105 L385 79 L424 105 L463 79 L502 105 L541 79 L580 105 L619 79 L658 105" />
        <path class="bond" d="M268 200 L307 174 L346 200 L385 174 L424 200 L463 174 L502 200 L541 174 L580 200 L619 174 L658 200" />
        <path class="bond" d="M268 295 L307 269 L346 295 L385 269 L424 295 L463 269 L502 295 L541 269 L580 295 L619 269 L658 295" />
        <path class="guide" d="M190 349 C206 371 266 371 282 349" />
        <text class="tiny annot" x="236" y="389" text-anchor="middle">3 ester bonds</text>
        <text class="tiny annot" x="500" y="354" text-anchor="middle">three fatty-acid portions</text>
      </svg>
      <figcaption>A triglyceride stores three fatty acids on one glycerol backbone. The three fatty-acid portions can differ in length and saturation.</figcaption>
      <div class="molecule-legend"><span>Tri = three fatty acids</span><span>Ester bonds join each chain</span><span>Most hydrogens omitted</span></div>
    </figure>`;
  }

  function atlasFigureMarkup(selector) {
    const holder = document.createElement('div');
    holder.innerHTML = moleculeAtlasMarkup();
    return holder.querySelector(selector)?.outerHTML || '';
  }

  function bindAtlas() {
    document.querySelectorAll('[data-unit-jump]').forEach(button => {
      button.addEventListener('click', () => {
        const id = Number(button.dataset.unitJump);
        selectUnit(id);
        go('learn');
      });
    });
    if (atlasFocus) {
      const target = document.querySelector(atlasFocus);
      atlasFocus = '';
      requestAnimationFrame(() => target?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }

  function addLessonAtlasLink() {
    const links = {
      4: ['#atlas-carbohydrate', 'See the glucose structure', 'Connect the ring, hydroxyl groups and glycosidic-bond concept.'],
      5: ['#atlas-protein', 'See the peptide structure', 'Trace the repeating backbone, R groups and peptide bonds.'],
      6: ['#atlas-pufa', 'See the PUFA structure', 'Find the carboxyl end, omega end and cis double bonds.']
    };
    const details = links[unitId];
    const article = app.querySelector('.article');
    if (!details || !article || article.querySelector('.lesson-atlas-link')) return;
    let figure = '';
    if (unitId === 4 && (li <= 2 || li === 4)) figure = atlasFigureMarkup('#atlas-carbohydrate .molecule-figure');
    if (unitId === 5 && (li <= 2 || li === 4)) figure = atlasFigureMarkup('#atlas-protein .molecule-figure');
    if (unitId === 6 && li <= 3) figure = atlasFigureMarkup('#atlas-pufa .molecule-figure');
    if (unitId === 6 && li === 5) figure = triglycerideFigureMarkup();
    if (!figure) return;
    const block = document.createElement('aside');
    block.className = 'lesson-atlas-link lesson-molecule-visual';
    block.setAttribute('aria-label','Lesson figure');
    block.innerHTML = figure;
    const heading = article.querySelector('h2');
    heading?.insertAdjacentElement('afterend', block);
  }

  render = function renderWithMoleculeAtlas() {
    if (view === 'molecules') {
      document.querySelectorAll('[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === view));
      app.innerHTML = moleculeAtlasMarkup();
      const status = document.querySelector('#unit-status');
      if (status) status.textContent = 'Visual guide · Units 4–6';
      bindAtlas();
      return;
    }
    atlasBaseRender();
    if (view === 'learn') addLessonAtlasLink();
  };
})();
