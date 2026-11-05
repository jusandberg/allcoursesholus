(function(){
  'use strict';
  const {M,V,C,N}=window.NHF_BUILD;
  const labels=['Notice','Connect','Distinguish','Apply'];
  function P(id,title,bullets,note,practice){
    const split=Math.ceil(bullets.length/2);
    const cue=title.split(/\s+/).filter(word=>word.length>3).slice(0,5).map(word=>word[0].toUpperCase()).join('');
    return M(id,title,bullets[0],[bullets.slice(0,split).join(' '),bullets.slice(split).join(' ')],bullets.slice(1,4),V(`${title} · connection map`,...bullets.slice(0,4).map((text,i)=>[labels[i],text])),N(cue||'LINK',`Use ${cue||'LINK'} to rebuild the idea, then name its evidence or cultural boundary.`),note,practice||'Translate the source into a safe, specific support while keeping claims proportional to evidence and within scope.',C(`Which statement best preserves the meaning and boundary of “${title}”?`,[bullets[0],true,'This is the source-faithful high-yield idea.'],['Every related traditional or mechanistic claim is established clinical fact.',false,'That erases the evidence boundary.'],['Red flags, culture, consent and context can be ignored.',false,'Those factors are essential.']));
  }
  const module=(id,title,moments)=>[{id,title,label:title,moments}];

  window.NHF_BUILD.lessons.push({number:7,title:'A Healthy Lifestyle',lede:'Connect movement, stress, sleep and environmental health while learning to question dated exposure and product claims.',modules:module('healthy-lifestyle','Lifestyle and environmental health',[
    P('nhf7-1','Move more, feel better',[
      'The course sets a historical minimum target of 20 minutes of exercise on three to four days each week.',
      'Regular activity is associated in the lesson with lower blood pressure and cholesterol, stronger muscles and bones, improved mood and sleep, and reduced chronic-disease risk.',
      'Choose activities that remain interesting, vary the type of movement and set measurable, realistic goals.',
      'Warm up, cool down and treat pain, dizziness or weakness as signals to stop or reduce intensity.'
    ],'Activity guidance has evolved; use current Canadian guidance for practice while remembering the source target for its test.','Build a plan from current ability, preference, access, medical status and gradual progression—not a one-size prescription.'),
    P('nhf7-2','Stress: notice, reframe, recover',[
      'The lesson frames coping as partly shaped by whether a challenge is interpreted as manageable or defeating.',
      'Workplace contributors can include poor air quality, insufficient natural light, noise and crowding.',
      'Begin stress management by identifying environmental and behavioural contributors rather than treating stress as personal failure.',
      'When a stressor cannot be removed, recognize its effect and develop ways to counter it.'
    ],'Stress responses are not purely a mindset problem; workload, trauma, illness, discrimination and resources matter.','Ask what can be changed, what support is available and which recovery practice is realistic.'),
    P('nhf7-3','Sleep is active repair',[
      'The source recommends about seven and a half to nine hours of sleep for most healthy adults.',
      'Sleep supports biological maintenance; chronic sleep loss can impair judgment, coordination and reaction time.',
      'Use a dark, cool, ventilated and quiet room, maintain regular sleep and wake times, and avoid late caffeine, alcohol, heavy food and vigorous exercise.',
      'Deep breathing, a warm bath, regular daytime activity and a consistent pre-sleep routine are presented as supports.'
    ],'Sleep need varies and persistent insomnia, loud snoring, breathing pauses or severe daytime sleepiness need assessment.','Choose one change, track it for a week and avoid stacking many sleep products before clarifying the problem.'),
    P('nhf7-4','Build your exposure map',[
      'The lesson links environmental exposure with symptoms such as fatigue, headache, allergies, respiratory complaints, eye irritation and nausea.',
      'Possible sources span home, office, outdoor environment, cleaning products, personal-care products, combustion, furnishings and building materials.',
      'Symptoms are nonspecific; noticing a pattern does not by itself identify a cause.',
      'Persistent or serious symptoms require appropriate medical and environmental assessment.'
    ],'The source uses broad chemical-sensitivity language. A temporal pattern can guide investigation but does not prove causation.','Record time, place, task, ventilation, products and symptoms; change one plausible exposure safely and coordinate assessment.'),
    P('nhf7-5','Create a healthier home and office',[
      'Named indoor contaminants include tobacco smoke, gas appliances, formaldehyde-emitting board products, synthetic furnishings, dust, mould and bacteria.',
      'Ventilation, source control, appropriate cleaning, daylight and attention to ergonomics are practical first steps.',
      'The source presents selected houseplants and negative-ion generators as air-quality aids.',
      'Room-scale plant effects are limited, and some ionizers can generate ozone.'
    ],'Do not use houseplants or ionizers as substitutes for fixing moisture, combustion or ventilation problems.','Prioritize removing the source, ventilating appropriately and involving building or public-health professionals when needed.'),
    P('nhf7-6','Air, water, light and EMFs',[
      'The course says inexpensive pitcher filters generally target chlorine and lead, while most home filters do not remove E. coli unless specifically designed to do so.',
      'Filter selection should be based on the contaminant, device specifications, certification and timely cartridge replacement.',
      'Daytime outdoor light and appropriately timed bright-light therapy are relevant to seasonal affective symptoms.',
      'The source gives technically unreliable EMF frequency ranges; retain them only for source-test recognition, not practice.',
      'Bottled-water production is presented as having substantial plastic, energy and waste impacts.'
    ],'No filter removes every contaminant. Verify local water reports and product-specific certified reduction claims. EMF health claims in the source are weak.','Name the actual contaminant or symptom before choosing a filter, light intervention or exposure strategy.'),
    P('nhf7-7','Read the label, not the promise',[
      'The lesson says the word natural on personal-care labels does not guarantee safety or organic production.',
      'Its source guide distinguishes 100 percent organic, certified organic and made-with-organic-ingredients thresholds.',
      'The cosmetic article challenges myths about absorption, vegan labels, price, ingredient disclosure and legal availability.',
      'Risk depends on the specific ingredient, dose, route, exposure and person; an ingredient list is not a blanket toxicity verdict.'
    ],'Organic label rules depend on product category and jurisdiction. Several ingredient claims in the source use hazard language without realistic exposure context.','Verify the current rule, exact ingredient and intended use before advising avoidance.'),
    P('nhf7-8','Work smarter: standing and postural rotation',[
      'The article associates prolonged uninterrupted sitting with poorer metabolic and cardiovascular outcomes.',
      'A standing desk is not an instruction to stand all day; alternate sitting, standing and movement.',
      'Place the screen slightly below eye level and keep the arms near a 90-degree angle to the work surface.',
      'Ease into standing, use sitting breaks and consider an antifatigue mat.'
    ],'The key intervention is postural variety and movement, not one perfect workstation position.','Create a realistic rotation cue: sit, stand, walk or stretch briefly at work transitions.'),
    P('nhf7-9','Fast fashion and sick buildings',[
      'Fast fashion is examined through environmental waste, pesticide and chemical use, worker exposure, working conditions and residues reaching consumers.',
      'More durable garments, reduced consumption, reuse, repair and responsible production reduce the burden described.',
      'Sick building syndrome describes nonspecific symptoms associated with time in a poorly ventilated or contaminated building.',
      'Possible contributors include VOCs, smoke, mould, bacteria, radon, asbestos, poor lighting, acoustics and ergonomics.',
      'Useful responses include documenting time-place symptom patterns, improving ventilation and source control, and involving qualified professionals.'
    ],'Symptoms alone cannot identify a building cause; emergencies such as carbon monoxide exposure require immediate response.','Use the hierarchy: urgent hazard check, source control, ventilation, documentation and qualified follow-up.'),
    P('nhf7-10','Official Lesson 7 test and remediation',[
      'Retrieve the course activity dose, exercise warning signs, workplace stressors, seasonal-light strategy and sleep supports.',
      'Distinguish inexpensive-filter claims from E. coli removal and recall the source organic-label thresholds.',
      'Practise identifying indoor-air sources, household products, personal-care claims and the source EMF statements.',
      'Answer using the inferred source key, then review every dated or weak-evidence item separately before carrying it into practice.'
    ],'The supplied printer test contains no official answer key; all keys are inferred from the lesson and visibly labelled.','Use Quiz for exact wording and evidence notes; remediate in the matching learning moment.')
  ])});

  window.NHF_BUILD.lessons.push({number:8,title:'Physical, Mental, Emotional and Spiritual Health',lede:'Explore mind–body practices, bodywork and self-regulation while separating comfort, theory and evidence-based clinical care.',modules:module('mind-body','Mind–body medicine and safe application',[
    P('nhf8-1','The mind–body loop',[
      'The course defines psychoneuroimmunology as the study of connections among emotions, the nervous system and the immune system.',
      'Mind–body medicine integrates physical, mental, emotional and spiritual dimensions in its model of health.',
      'The lesson groups breathing, meditation, bodywork, biofeedback and cognitive-behavioural methods under this umbrella.',
      'Separate the broad mind–body principle from stronger claims that a specific practice treats a specific disease.'
    ],'Mind and body interact through multiple neural, endocrine, immune and behavioural pathways; one pathway is not a universal treatment mechanism.','Use mind–body support alongside medical or psychological care when indicated.'),
    P('nhf8-2','Breathe to shift state',[
      'Shallow chest breathing is associated in the lesson with fight-or-flight, while diaphragmatic breathing is presented as calming.',
      'During relaxed breathing, the abdomen rises first while the chest rises more subtly.',
      'The source teaches breathing awareness, paced deep breathing, alternate-nostril breathing and ocean breathing.',
      'Practise without strain and stop if exercises cause dizziness, distress or uncomfortable breathlessness.'
    ],'Breathing changes can influence arousal, but “air filling the diaphragm” is imprecise—the diaphragm is a muscle and the lungs fill.','Teach a comfortable, slow exhale and screen for respiratory, panic or trauma considerations.'),
    P('nhf8-3','Meditation: train attention and physiology',[
      'Meditation is quiet contemplation focused on breath, a phrase, a mantra, a theme or present-moment experience.',
      'The lesson places meditation in multiple religious traditions as well as secular practice.',
      'Proposed benefits include reduced stress, improved concentration, lower cardiovascular arousal and pain support.',
      'The source calls meditation-related neuronal signals gamma waves; the test therefore keys gamma waves, not alpha waves.',
      'Immune, tumour, infection and accelerated-healing claims require evidence caveats.'
    ],'Meditation can be helpful but may feel difficult or destabilizing for some people; offer choice and qualified support.','Start with a brief, consent-based practice and track the outcome the person actually cares about.'),
    P('nhf8-4','Bodywork map',[
      'The course surveys chiropractic and osteopathic manipulation, massage, Rolfing, Trager, craniosacral therapy, Feldenkrais and reflexology.',
      'It defines chiropractic subluxation as joint changes said to compromise nervous-system function.',
      'Rolfing is identified as structural integration; Trager uses gentle rhythmic rocking and shaking.',
      'Reflexology maps body parts to areas of the feet within its traditional model.',
      'Teach proposed mechanisms and demonstrated outcomes separately.'
    ],'Evidence and scope vary by modality and condition; reflex maps and broad subluxation claims are not established anatomy.','Before referral, define the goal, verify credentials and screen contraindications such as fracture, clotting risk or neurologic signs.'),
    P('nhf8-5','Hydrotherapy and sauna—use safely',[
      'Hydrotherapy means therapeutic use of water; the source contrasts stimulating cool water with vasodilating warm water.',
      'The lesson describes a traditional sauna as roughly 80–90°C with approximately 15–25 percent relative humidity.',
      'Its preferred timing is after exercise, with a cooling interval first.',
      'Hydrate, avoid alcohol, limit duration, cool gradually and leave immediately for dizziness, nausea or illness.',
      'Treat detoxification, kidney support, respiratory relief and skin-treatment claims cautiously.'
    ],'Sauna is not appropriate for everyone; cardiovascular disease, pregnancy, medicines and impaired heat tolerance may require guidance.','Use comfort and relaxation goals, not vague detox promises, and establish a stop rule.'),
    P('nhf8-6','Energy medicine, EFT and evidence',[
      'The source distinguishes measurable or veritable fields from unmeasured putative fields.',
      'It places acupuncture, qigong, Reiki, healing touch and intercessory prayer in the putative-field category.',
      'Healing touch is described as passing hands over the body to identify and correct an alleged imbalance.',
      'The lesson itself acknowledges that putative fields and therapeutic effects have not been convincingly demonstrated scientifically.',
      'Present EFT and related practices as course-described modalities, not replacements for indicated care.'
    ],'A person may value a ritual or relaxation practice without its proposed energy mechanism being demonstrated.','Respect the preference, clarify what is known and prevent displacement of effective treatment.'),
    P('nhf8-7','Biofeedback and CBT: make the invisible visible',[
      'Biofeedback uses sensors and cues to show measures such as heart rate, breathing, muscle tension, skin temperature or conductivity.',
      'The learner practises deliberate changes while observing feedback.',
      'Cognitive behavioural therapy links thoughts, beliefs, emotions and behavioural responses.',
      'The course sequence is identify the problem and goal, examine thoughts and beliefs, detect inaccurate patterns, and challenge or revise them.',
      'CBT is evidence based, but serious conditions belong with appropriately qualified practitioners.'
    ],'Do not reduce distress to “thinking wrong.” CBT includes behaviour, context and collaborative skill-building.','Use biofeedback or CBT language within training and scope; refer for diagnosis or treatment of mental illness.'),
    P('nhf8-8','Migraine: recognize, track, prevent',[
      'Migraine may include one-sided throbbing pain, nausea, sensory sensitivity and sometimes neurological aura.',
      'Potential triggers differ by person and may include hormonal change, food, hunger, sleep disruption, stress, weather and strong smells.',
      'A diary can connect timing, symptoms, exposures, meals, sleep and medication use without assuming every association is causal.',
      'The article discusses acupuncture, massage, regular sleep, magnesium, riboflavin, butterbur and CoQ10.',
      'Butterbur advice is dated: safety depends on PA-free products, and routine use may not be recommended.'
    ],'New severe headache, neurologic deficit, fever, head injury or major pattern change requires urgent assessment.','Track pattern and red flags, protect regular meals and sleep, and coordinate evidence-based migraine care.'),
    P('nhf8-9','Natural-healing modalities and osteopathy',[
      'The natural-healing article profiles naturopathic medicine, Reiki, Bowen therapy, integrated speech and yoga, deep-flow massage, kinesiology, hypnosis, mindfulness and orthomolecular medicine.',
      'The osteopathy article emphasizes palpation, whole-body relationships, fluid flow and proposed self-healing capacity.',
      'Its treatment categories are craniosacral, visceral and musculoskeletal.',
      'The article also stresses referral for imaging, blood work or medical assessment and presents osteopathy as complementary.',
      'Case stories illustrate author claims; they do not establish efficacy.'
    ],'Do not treat the modalities as equivalent or assume the same regulation in every jurisdiction.','Match the modality and provider to a defined goal, verify scope and coordinate when symptoms need medical work-up.'),
    P('nhf8-10','Official Lesson 8 test and remediation',[
      'Retrieve the psychoneuroimmunology definition, proper-breathing effects, bodywork distinctions, reflexology and hydrotherapy.',
      'Know the source sauna temperature, humidity, timing and safety rules.',
      'Distinguish veritable from putative fields and healing touch from electromagnetic therapy.',
      'Remember that the source keys meditation brain signals as gamma waves.',
      'Answer source-faithfully, then revisit every immune, detoxification, subluxation and energy-field claim through an evidence lens.'
    ],'The supplied printer test has no official answer key; course answers are inferred and evidence flags remain separate.','Use review mode to separate recall errors from source claims that should not be generalized.')
  ])});

  window.NHF_BUILD.lessons.push({number:9,title:'Traditional Holistic Healing Practices',lede:'Compare Ayurveda, traditional Chinese medicine and Indigenous healing teachings with cultural humility and clear evidence boundaries.',modules:module('traditional-systems','Traditions, comparison and respectful practice',[
    P('nhf9-1','Three healing traditions, one comparison lens',[
      'The lesson introduces Ayurveda, traditional Chinese medicine and North American Indigenous healing traditions.',
      'It identifies balance, prevention, mind–body–spirit integration and proposed self-healing capacity as recurring themes.',
      'Each system has its own history, language, practices and cultural authority; they are not interchangeable.',
      'Traditional explanatory models should be distinguished from biomedical anatomy and causal evidence.'
    ],'“Traditional” is not one universal category. Name the tradition and community, and avoid extracting sacred knowledge from its context.','Compare purpose, model, practitioner role, evidence and safety without ranking cultures.'),
    P('nhf9-2','Ayurveda: elements, doshas and constitution',[
      'Ayurveda translates as science of life and is presented as an ancient Indian system of living, prevention and healing.',
      'Its five elements are earth, water, fire, air and ether.',
      'Its three doshas are vata, pitta and kapha; prakriti refers to an individual constitutional pattern.',
      'The source says care is individualized to physical, mental, lifestyle and environmental conditions.',
      'Doshas and elemental constitutions are traditional models, not biomedical diagnoses.'
    ],'Respect cultural meaning while avoiding disease predictions based solely on dosha typing.','If a client follows Ayurveda, ask what foods, herbs and practices they actually use and screen them specifically.'),
    P('nhf9-3','The six tastes and Ayurvedic care',[
      'The six tastes are sweet, sour, salty, pungent, bitter and astringent.',
      'For the source test: sour stimulates digestion; salty increases pitta and kapha; pungent is stimulating and warming; bitter is said to stimulate digestion and absorb phlegm; astringent increases vata and decreases pitta and kapha.',
      'The source describes medicinal plants, diet rules, exercise, massage, yoga, breathing, meditation and lifestyle change as care components.',
      'Prana, agni and soma are the three—not four—primal forces named by the lesson.',
      'Taste–dosha effects are course teachings, not established nutritional physiology.'
    ],'A traditional classification can guide cultural food practice without being presented as a biochemical law.','Translate food rules into an adequacy check and investigate concentrated herbs for interactions.'),
    P('nhf9-4','TCM: yin–yang and Five Phases',[
      'The lesson describes traditional Chinese medicine as restoring balance, with herbs supported by acupuncture and massage.',
      'Chinese medicines are grouped in the source as superior, middle and inferior.',
      'Yin is described as female, dark and cold; yang as male, light and hot.',
      'The Five Phases are wood, fire, earth, metal and water, each paired with yin and yang organ categories.',
      'These are traditional relational models rather than biomedical organ physiology.'
    ],'Do not use symbolic organ categories as a substitute for medical diagnosis of liver, heart, kidney or other disease.','Clarify whether a person is describing a TCM pattern or a biomedical diagnosis before discussing nutrition or referral.'),
    P('nhf9-5','Qi, meridians and acupuncture',[
      'Qi is presented as vital energy moving through pathways called meridians.',
      'The source teaches 12 main meridians and eight extraordinary meridians.',
      'Named main meridians include the large intestine, spleen and liver.',
      'Acupuncture is described as stimulating points by needles, heat, pressure or massage to rebalance qi.',
      'Meridians are elements of the TCM model and should not be represented as demonstrated anatomical structures.'
    ],'Evidence for acupuncture is condition- and outcome-specific; proposed qi mechanisms are distinct from clinical effect research.','If referring, verify a regulated practitioner, sterile technique and contraindications, and define the target outcome.'),
    P('nhf9-6','Qigong and tai chi in practice',[
      'Tai chi combines controlled movement, breathing, concentration and martial-arts roots.',
      'Qigong combines slow movement with regulated breathing, meditation, self-massage or imagery.',
      'The qigong article identifies healing or medical, external-qi, spiritual and martial applications.',
      'Movement, balance, flexibility, stress reduction and quality of life are reasonable themes.',
      'Claims involving cancer, immunity, stroke mortality, medication reduction or disease reversal need modern evidence review.'
    ],'Low-impact movement can be valuable without proving traditional energy explanations or broad disease claims.','Frame the activity as accessible movement and self-regulation, adapt for falls risk and avoid medication changes without care coordination.'),
    P('nhf9-7','Indigenous healing and the Medicine Wheel',[
      'The source presents healing as physical, spiritual, relational and connected with nature and the cosmos.',
      'Its test mapping is East–Eagle–yellow–new beginnings; South–Beaver–red–playfulness; West–Turtle–black–transformation; North–Wolf–white–wisdom and justice.',
      'The circle represents connectedness and balance.',
      'The source notes that symbols and teachings vary among Indigenous Nations.',
      'Use official source terms only for test fidelity; teaching should say Indigenous or name the specific Nation and avoid presenting one wheel as universal.'
    ],'The PDF title and test use outdated pan-Indigenous terminology. Preserve it only where quoting the source, and teach with specificity and respect.','Do not reproduce ceremony or sacred knowledge as a generic wellness tool; seek community-authorized sources and consent.'),
    P('nhf9-8','Four sacred plants—with cultural respect',[
      'The article discusses sage, sweetgrass, cedar and tobacco as four culturally significant plants.',
      'It describes ceremonial and traditional topical or medicinal uses.',
      'Sweetgrass is identified as toxic if consumed; cedar preparations and essential oils require careful identification and dosing.',
      'Commercial tobacco use is harmful and addictive and must not be conflated with ceremonial use.',
      'Sacred-plant knowledge should not be detached from Nation, community authority, protocol or consent.'
    ],'Cultural significance is not permission for commercialization or self-treatment. Plant safety still depends on species, route and dose.','When a client raises a sacred practice, listen, avoid appropriation and coordinate only within appropriate cultural and professional boundaries.'),
    P('nhf9-9','Six approaches to natural pain relief',[
      'The pain article begins with nociception: peripheral signals travel through the spinal cord to the brain.',
      'It compares yoga, acupuncture, Bowen therapy, massage, chiropractic and reflexology.',
      'Each modality is organized around proposed mechanism, cited research and claimed benefits.',
      'Evidence is not equally strong across modalities or conditions; case reports and small studies are not equivalent to robust trials.',
      'Persistent, severe, progressive, traumatic, neurological or unexplained pain requires appropriate assessment.'
    ],'Pain is both physiologic and contextual, but that does not make it imaginary or prove any one mind–body treatment.','Clarify the pain pattern, red flags, diagnosis and functional goal before discussing adjunctive approaches.'),
    P('nhf9-10','Official Lesson 9 test and remediation',[
      'Retrieve the five TCM phases and organ relationships, yin versus yang and the 12 main meridians.',
      'Know the three doshas, six Ayurvedic tastes, three primal forces and individualized-care factors.',
      'Practise the source Medicine Wheel direction, animal and colour associations without universalizing them.',
      'Distinguish traditional system descriptions from biomedical claims.',
      'Use the inferred source key for assessment fidelity, then review cultural and evidence flags before applying any claim.'
    ],'The printer test has no official answer key. Several questions reproduce culturally broad or weak-evidence source claims; their notes remain visible.','Use test recall to pass the course while keeping respectful language and evidence-aware practice separate.')
  ])});
})();
