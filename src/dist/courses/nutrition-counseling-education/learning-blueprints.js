/* Instructional-design blueprints layered over the substantial source-aware guides. */
window.NC_LEARNING_BLUEPRINTS={
  'lesson-2':{
    duration:'35–45 minutes',
    level:'Nutrition counsellor in training',
    why:'Preconception support begins before pregnancy is recognized. The learner must connect nutrient knowledge with energy sufficiency, realistic access, safe boundaries and timely referral.',
    outcomes:[
      'Explain why preparation begins before a positive pregnancy test.',
      'Distinguish routine supplement guidance, total-intake references and individualized treatment.',
      'Recognize when food quality does not mean sufficient energy or nutrient status.',
      'Apply risk-reduction guidance without blanket rules or abrupt medication changes.',
      'Use READY to agree on a realistic next step while staying within scope.'
    ],
    order:[
      'l2-interactive-1','l2-interactive-4',
      'l2-interactive-2','l2-interactive-3','l2-interactive-5',
      'l2-interactive-6','l2-interactive-7',
      'l2-interactive-8'
    ],
    modules:[
      {
        id:'foundation',label:'Module 1',title:'Start early and assess context',
        stepIds:['l2-interactive-1','l2-interactive-4'],
        summary:'Begin before pregnancy is recognized, then look beyond food quality to energy, access and clinical context.',
        highlight:'Preparation supports health; it does not guarantee a pregnancy outcome.'
      },
      {
        id:'nutrients',label:'Module 2',title:'Get the nutrient distinctions right',
        stepIds:['l2-interactive-2','l2-interactive-3','l2-interactive-5'],
        summary:'Read units carefully and separate a total-intake reference from a routine supplement amount or a treatment dose.',
        highlight:'Use the right number for the right purpose.'
      },
      {
        id:'risk',label:'Module 3',title:'Reduce avoidable risk',
        stepIds:['l2-interactive-6','l2-interactive-7'],
        summary:'Apply food, exposure and care-coordination guidance precisely—without turning it into a blanket prohibition.',
        highlight:'Keep the population, category, amount and time window attached to every limit.'
      },
      {
        id:'practice',label:'Module 4',title:'Counsel responsibly',
        stepIds:['l2-interactive-8'],
        summary:'Translate knowledge into one feasible action that fits the client’s resources and your actual scope.',
        highlight:'A useful plan is specific, repeatable and realistic on a difficult day.'
      }
    ],
    stepHighlights:{
      'l2-interactive-1':'Early development can begin before pregnancy is usually recognized.',
      'l2-interactive-4':'Food quality and sufficient energy are different questions.',
      'l2-interactive-2':'0.4 mg and 400 mcg are the same amount; the unit changes, not the dose.',
      'l2-interactive-3':'A total-intake reference is not automatically a supplement instruction or a treatment dose.',
      'l2-interactive-5':'A prenatal product supports a plan; it does not replace food, access, medical review or reliable B12 planning.',
      'l2-interactive-6':'Do not collapse category-specific fish guidance into “avoid all fish.”',
      'l2-interactive-7':'Routine nutrition support and clinical decision-making require different actions.',
      'l2-interactive-8':'Start with the barrier the person actually faces, not the plan you wish they could follow.'
    },
    recap:[
      'Start early, without blaming someone who did not prepare before learning they were pregnant.',
      'Meet energy and nutrient needs consistently; a nutritious-looking diet can still be insufficient.',
      'Use the right number for the right purpose: unit, total need, supplement advice and treatment are not interchangeable.',
      'Reduce avoidable exposures with precise guidance rather than blanket rules.',
      'Coordinate care, stay within scope and avoid promises about fertility or pregnancy outcomes.'
    ],
    application:{
      title:'Four months before pregnancy',
      scenario:'A vegan client plans pregnancy in four months, often misses lunch at work and reports heavy periods.',
      stages:[
        {title:'1 · Ask',prompt:'What information would make the next step safer and more realistic?',points:['Meal access and whether enough food is available across the day.','Reliable vitamin B12 sources and the actual supplement label, including folic acid.','Bleeding history, existing care and what support the client wants.']},
        {title:'2 · Support',prompt:'What can a nutrition counsellor support within scope?',points:['Reliable B12 and iron food sources without diagnosing a deficiency.','Routine folic-acid guidance and a portable lunch that fits the work setting.','One achievable action chosen with the client.']},
        {title:'3 · Coordinate',prompt:'What needs appropriately qualified clinical review?',points:['Heavy bleeding and possible iron-status assessment.','Medication, diagnosed conditions or treatment-dose supplement questions.','Any concern beyond the counsellor’s training, competence or legal role.']}
      ]
    }
  }
};
