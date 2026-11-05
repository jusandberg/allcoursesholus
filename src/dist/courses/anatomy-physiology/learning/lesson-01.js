window.AP_LEARNING=window.AP_LEARNING||{};
window.AP_LEARNING['lesson-1']={
  version:1,
  title:'The Human Body',
  chapter:'Chapter 1',
  duration:'70–85 minutes',
  outcomes:[
    'Use anatomic position, directional terms and body planes to describe location precisely.',
    'Match the major body cavities with their important subdivisions and contents.',
    'Trace organization from chemical building blocks to a functioning human organism.',
    'Distinguish the four primary tissue classes and connect them to organ function.',
    'Explain how organ systems cooperate and how feedback supports homeostasis.'
  ],
  modules:[
    {id:'language',title:'Speak the language of anatomy',summary:'Use structure, function and a shared reference position.',moments:[
      {
        id:'l1-m1',title:'Structure and function answer different questions',
        highYield:'Anatomy describes what a body part is and where it is; physiology explains what it does and how it works.',
        teaching:[
          'Anatomy examines body form: the shape, location and relationships of structures. Physiology examines function: the processes those structures carry out. The two disciplines are inseparable because the form of a structure limits and supports what it can do. Teeth, a muscular tongue and saliva-producing glands, for example, have different forms that contribute different parts of early digestion.',
          'Pathology focuses on changes associated with disease, but this course begins with typical structure and function. A useful learning habit is to ask two questions whenever a new term appears: What is the structure, and what job does its design make possible? This prevents vocabulary from becoming a disconnected list.'
        ],
        keyPoints:['Anatomy is about structure and relationships.','Physiology is about function and mechanism.','Structure and function should be learned together.'],
        visual:{title:'One body part, two lenses',kind:'comparison',items:[{label:'Anatomy',detail:'Teeth are hard structures arranged in the oral cavity.'},{label:'Physiology',detail:'Their shape helps cut, tear and grind food.'},{label:'Connection',detail:'Form helps explain the mechanical work.'}]},
        mnemonic:{title:'Ask two questions',cue:'FORM → FUNCTION',explanation:'Name the structure first, then explain what its form allows it to do.'},
        goodToKnow:'A description of normal anatomy or physiology is not, by itself, a diagnosis of what is happening in one person.',
        practiceConnection:'When explaining physiology in nutrition practice, anchor the process to a visible structure instead of using isolated biochemical terms.',
        activity:{prompt:'Which statement is physiological rather than anatomic?',options:[{text:'The stomach lies inferior to the diaphragm.',correct:false,feedback:'That describes location, so it is anatomy.'},{text:'The stomach mixes food with secretions and moves the mixture onward.',correct:true,feedback:'This explains processes performed by the stomach.'},{text:'The stomach is a hollow organ in the abdominopelvic cavity.',correct:false,feedback:'That describes form and location.'}]}
      },
      {
        id:'l1-m2',title:'Anatomic position makes directions dependable',
        highYield:'Directional terms assume an erect body facing forward, arms at the sides and palms facing forward.',
        teaching:[
          'Every directional statement uses a common reference called anatomic position. Without it, words such as left, medial or anterior could shift with posture. Right and left always belong to the person being described, not to an observer facing that person.',
          'Directional terms occur in contrasting pairs. Superior is above and inferior is below; anterior is toward the front and posterior toward the back; medial is nearer the midline and lateral farther from it. Proximal and distal compare locations along a limb or another attached structure: the elbow is proximal to the wrist, while the wrist is distal to the elbow.'
        ],
        keyPoints:['Use the subject’s right and left.','Medial and lateral compare distance from the midline.','Proximal and distal compare distance from attachment or origin.'],
        visual:{title:'Directional pairs',kind:'axis',items:[{label:'Superior ↕ inferior',detail:'Headward versus lower in the body.'},{label:'Anterior ↔ posterior',detail:'Front versus back.'},{label:'Medial ↔ lateral',detail:'Toward versus away from the midline.'},{label:'Proximal ↔ distal',detail:'Nearer versus farther from attachment.'}]},
        mnemonic:{title:'Learn directions as pairs',cue:'S-I · A-P · M-L · P-D',explanation:'Say each opposing pair together before applying it to a body part.'},
        goodToKnow:'Cranial or cephalad often parallels superior; caudal may parallel inferior, but the precise wording depends on the structure being described.',
        practiceConnection:'Precise location language helps learners interpret diagrams and communicate where an observation was made without relying on vague words such as above or beside.',
        activity:{prompt:'Which comparison is accurate in anatomic position?',options:[{text:'The wrist is proximal to the elbow.',correct:false,feedback:'The wrist is farther from the upper limb’s attachment, so it is distal.'},{text:'The nose is medial to the ears.',correct:true,feedback:'The nose is closer to the body’s midline.'},{text:'The spine is anterior to the sternum.',correct:false,feedback:'The spine is posterior to the sternum.'}]}
      }
    ]},
    {id:'map',title:'Map spaces and levels',summary:'Use planes, cavities and levels of organization to locate structures.',moments:[
      {
        id:'l1-m3',title:'Planes turn a three-dimensional body into useful views',
        highYield:'Sagittal divides right from left, frontal divides front from back, and transverse divides upper from lower.',
        teaching:[
          'A body plane is an imaginary flat surface used to describe a section or viewing direction. A midsagittal plane passes through the midline and creates equal right and left halves. Other sagittal planes remain parallel to it but may create unequal portions.',
          'A frontal, or coronal, plane separates anterior and posterior portions. A transverse, or horizontal, plane separates superior and inferior portions. Within an individual organ, a longitudinal section follows its long axis, while a cross section cuts across that axis. The plane names describe how the view was made, not a new body structure.'
        ],
        keyPoints:['Midsagittal creates equal right and left halves.','Frontal separates anterior and posterior.','Transverse separates superior and inferior.'],
        visual:{title:'Three foundational planes',kind:'slices',items:[{label:'Sagittal',detail:'A vertical slice viewed from the side.'},{label:'Frontal',detail:'A vertical slice separating front and back.'},{label:'Transverse',detail:'A horizontal slice separating upper and lower portions.'}]},
        mnemonic:{title:'Match plane to separation',cue:'S-F-T = Sides, Front/back, Top/bottom',explanation:'Sagittal separates sides; frontal separates front and back; transverse separates top and bottom.'},
        goodToKnow:'Medical images are commonly displayed in standardized orientations, so always check the orientation marker before assuming left or right.',
        practiceConnection:'A plane gives context to an image. Before interpreting an anatomical visual, name the plane and the body region shown.',
        activity:{prompt:'A scan separates the body into superior and inferior portions. Which plane is being used?',options:[{text:'Frontal',correct:false,feedback:'Frontal separates anterior and posterior.'},{text:'Transverse',correct:true,feedback:'A transverse or horizontal plane separates upper and lower portions.'},{text:'Midsagittal',correct:false,feedback:'Midsagittal separates equal right and left halves.'}]}
      },
      {
        id:'l1-m4',title:'Cavities protect and organize the viscera',
        highYield:'The dorsal cavity houses the central nervous system; the ventral cavity contains thoracic and abdominopelvic subdivisions.',
        teaching:[
          'The dorsal cavity is divided into the cranial cavity around the brain and the spinal cavity around the spinal cord. The ventral cavity is larger and is divided by the diaphragm. Above the diaphragm, the thoracic cavity contains the pleural cavities for the lungs, the pericardial cavity around the heart and the mediastinum between the lungs.',
          'Below the diaphragm, the abdominopelvic cavity contains many digestive, urinary and reproductive organs. Cavity terminology also distinguishes a wall from an organ covering: parietal refers to the cavity wall, while visceral refers to the surface of an organ. The organs within a cavity are collectively called viscera.'
        ],
        keyPoints:['Cranial and spinal cavities form the dorsal cavity.','The diaphragm separates thoracic and abdominopelvic spaces.','Parietal relates to a wall; visceral relates to an organ surface.'],
        visual:{title:'Nested cavity map',kind:'hierarchy',items:[{label:'Dorsal',detail:'Cranial cavity + spinal cavity.'},{label:'Thoracic',detail:'Pleural cavities, pericardial cavity and mediastinum.'},{label:'Abdominopelvic',detail:'Abdominal and pelvic regions containing many viscera.'}]},
        mnemonic:{title:'Wall versus organ',cue:'PARIETAL = PERIMETER',explanation:'Both begin with P: parietal describes the cavity perimeter; visceral covers a viscus or organ.'},
        goodToKnow:'The mediastinum is a central thoracic region, not an empty cavity identical to a pleural cavity.',
        practiceConnection:'Cavity language helps place organs and understand why a structure can affect neighbours within the same limited space.',
        activity:{prompt:'Where is the heart located most specifically?',options:[{text:'In the pleural cavity',correct:false,feedback:'Pleural cavities surround the lungs.'},{text:'In the pericardial cavity within the thorax',correct:true,feedback:'The heart is enclosed by its pericardial space in the thoracic region.'},{text:'In the dorsal cavity',correct:false,feedback:'The dorsal cavity contains the brain and spinal cord.'}]}
      }
    ]},
    {id:'organization',title:'Build the body from cells to tissues',summary:'Connect the levels of organization and the four tissue families.',moments:[
      {
        id:'l1-m5',title:'Organization is a ladder of increasing complexity',
        highYield:'Atoms form molecules; molecules contribute to cells; cells form tissues; tissues form organs; organs cooperate in systems.',
        teaching:[
          'The cell is the smallest living level able to carry out the activities of life. Its membrane regulates exchange with the environment, while internal structures perform specialized work. Similar cells and their surrounding material form tissues; several tissue types combine in different proportions to form an organ.',
          'Organs then cooperate in organ systems, and all systems together make the organism. New properties emerge at each level. A heart cell can contract, but circulation depends on an organized heart, vessels, blood, regulatory signals and exchange with other systems. Moving up the ladder means adding relationships, not simply adding size.'
        ],
        keyPoints:['A cell is the basic living unit.','Organs contain multiple tissue types.','System function emerges from coordinated organs.'],
        visual:{title:'Levels of organization',kind:'ladder',items:[{label:'Chemical',detail:'Atoms and molecules.'},{label:'Cellular',detail:'Smallest living units.'},{label:'Tissue and organ',detail:'Specialized groups and integrated structures.'},{label:'System and organism',detail:'Cooperating organs and the whole person.'}]},
        mnemonic:{title:'Climb the organization ladder',cue:'A Mighty Cell Team Organizes Strong Organisms',explanation:'Atoms → Molecules → Cells → Tissues → Organs → Systems → Organism.'},
        goodToKnow:'A molecule can be essential to life without being alive; the cellular level is the first living level in this sequence.',
        practiceConnection:'When explaining a nutrient’s role, identify the level involved: molecular participation, cellular process, tissue effect or whole-system outcome.',
        activity:{prompt:'Which sequence moves from simpler to more complex organization?',options:[{text:'Tissue → cell → organ → system',correct:false,feedback:'Cells precede tissues.'},{text:'Cell → tissue → organ → system',correct:true,feedback:'Cells organize into tissues, tissues into organs and organs into systems.'},{text:'Organ → molecule → tissue → organism',correct:false,feedback:'This mixes levels out of order.'}]}
      },
      {
        id:'l1-m6',title:'Four tissue families create every organ',
        highYield:'Epithelial covers and lines, connective supports and binds, muscle contracts, and nervous tissue communicates.',
        teaching:[
          'Epithelial tissue forms coverings, linings and glands, with closely packed cells and little material between them. Connective tissue has comparatively abundant extracellular matrix and performs diverse support, binding, storage and transport functions. Bone, blood and adipose tissue look very different but belong to this broad family.',
          'Muscle tissue produces force by contraction. Skeletal muscle moves bones, smooth muscle moves material through hollow organs and cardiac muscle powers the heart. Nervous tissue detects change, processes information and conducts signals. Most organs combine all four families: the intestine, for example, has an epithelial lining, connective support, smooth muscle and nervous control.'
        ],
        keyPoints:['Tissue classification reflects structure and dominant function.','There are three muscle types, not four.','Organs usually combine several tissue families.'],
        visual:{title:'Four tissue functions',kind:'matrix',items:[{label:'Epithelial',detail:'Cover, line, absorb and secrete.'},{label:'Connective',detail:'Bind, support, store and transport.'},{label:'Muscle',detail:'Shorten to generate movement.'},{label:'Nervous',detail:'Receive and transmit information.'}]},
        mnemonic:{title:'Four tissue families',cue:'Every Connection Moves News',explanation:'Epithelial, Connective, Muscle and Nervous.'},
        goodToKnow:'Calling blood connective tissue makes sense when its cells and fibres are considered within a fluid extracellular matrix.',
        practiceConnection:'Digestive function is not performed by epithelium alone; transport, motility, support and neural regulation depend on other tissues.',
        activity:{prompt:'Which tissue is most directly responsible for propelling food along the digestive tract?',options:[{text:'Smooth muscle',correct:true,feedback:'Smooth muscle in the tract wall produces involuntary movement.'},{text:'Nervous tissue alone',correct:false,feedback:'Nerves coordinate activity, but muscle generates the force.'},{text:'Dense bone tissue',correct:false,feedback:'Bone provides support and protection rather than intestinal propulsion.'}]}
      }
    ]},
    {id:'systems',title:'Connect systems through homeostasis',summary:'See the body as interacting systems regulated by feedback.',moments:[
      {
        id:'l1-m7',title:'Organ systems divide the work but share the outcome',
        highYield:'No organ system works alone; transport links supply, exchange, control, movement, protection and waste removal.',
        teaching:[
          'The integumentary, skeletal and muscular systems protect, support and move the body. Nervous and endocrine systems coordinate activity through rapid electrical signalling and slower chemical signals. The cardiovascular system provides the transport network that connects organs with oxygen, nutrients, hormones, heat and wastes.',
          'Respiratory and digestive systems exchange materials with the outside environment, while urinary and respiratory processes help remove wastes and regulate internal chemistry. The lymphatic system returns excess tissue fluid, transports absorbed fats and supports immune defence. Reproductive organs support production of sex cells and continuation of the species. These labels organize study, but the functions overlap constantly.'
        ],
        keyPoints:['Control systems depend on transport and responsive tissues.','Exchange systems bring in or eliminate materials.','A system map is a network, not a set of isolated boxes.'],
        visual:{title:'A connected systems loop',kind:'network',items:[{label:'Supply',detail:'Digestive and respiratory systems acquire nutrients and oxygen.'},{label:'Transport',detail:'Cardiovascular and lymphatic pathways move materials.'},{label:'Use and control',detail:'Cells use resources under nervous and endocrine regulation.'},{label:'Removal',detail:'Respiratory, urinary and digestive routes eliminate wastes.'}]},
        mnemonic:{title:'Follow material through the body',cue:'IN → MOVE → USE → OUT',explanation:'Ask how a material enters, travels, is used and leaves.'},
        goodToKnow:'A textbook system boundary is a learning tool. Many organs participate in more than one regulatory network.',
        practiceConnection:'Tracing a nutrient from ingestion to absorption, circulation, cellular use and waste removal is a practical way to integrate systems.',
        activity:{prompt:'Which pairing best explains absorbed dietary fat entering circulation?',options:[{text:'Digestive absorption with lymphatic transport before entry into blood',correct:true,feedback:'Many absorbed lipids first travel through intestinal lymphatic vessels.'},{text:'Skeletal storage with direct transfer into the spinal cavity',correct:false,feedback:'That route does not describe absorption or transport.'},{text:'Respiratory exchange with urinary digestion',correct:false,feedback:'Respiration exchanges gases; the urinary system does not digest food.'}]}
      },
      {
        id:'l1-m8',title:'Feedback keeps internal conditions within workable ranges',
        highYield:'Negative feedback opposes a change; positive feedback amplifies a change until a defined event ends the loop.',
        teaching:[
          'Homeostasis is dynamic stability rather than perfect constancy. Variables such as temperature, fluid balance and blood chemistry fluctuate within regulated ranges. A receptor detects change, a control process compares information with a workable range, and effectors alter activity. In negative feedback, the response reduces the original disturbance, as heat-loss responses oppose a rise in body temperature.',
          'Positive feedback reinforces the initiating change. During labour, uterine contractions promote signals that intensify further contractions until birth ends the loop. Positive feedback is useful when a process needs a decisive endpoint, but it is not the default pattern for maintaining everyday internal balance. Both loops depend on communication among systems.'
        ],
        keyPoints:['Homeostasis is regulated variation, not a frozen value.','Negative feedback reverses the direction of change.','Positive feedback accelerates a process toward an endpoint.'],
        visual:{title:'Feedback loop anatomy',kind:'cycle',items:[{label:'Change',detail:'A regulated condition shifts.'},{label:'Detection and control',detail:'Information is sensed and interpreted.'},{label:'Response',detail:'Effectors act on the condition.'},{label:'Result',detail:'The shift is reduced or amplified.'}]},
        mnemonic:{title:'Two feedback directions',cue:'Negative nudges back; positive pushes forward',explanation:'Negative feedback resists deviation; positive feedback strengthens it until an endpoint.'},
        goodToKnow:'A symptom or single measurement cannot reveal the entire feedback system; context, timing and other evidence matter.',
        practiceConnection:'Use feedback language to explain regulation without promising that one food or supplement directly resets a complex system.',
        activity:{prompt:'Which example best represents negative feedback?',options:[{text:'Rising temperature triggers sweating that increases heat loss.',correct:true,feedback:'The response opposes the temperature increase.'},{text:'One uterine contraction intensifies signals for a stronger contraction.',correct:false,feedback:'That is an amplifying positive-feedback loop.'},{text:'A cut leads to an expanding clotting cascade until the break is sealed.',correct:false,feedback:'Clotting is another positive-feedback example with an endpoint.'}]}
      }
    ]}
  ],
  caseStudy:{
    title:'From a warm room to a whole-body response',
    scenario:'During a classroom demonstration, a learner becomes warm and begins sweating. They say the skin alone is “fixing” temperature.',
    prompts:['Which structures detect and coordinate the change?','Which tissue and organ-system responses help release heat?','Why is this an example of negative feedback rather than a single-organ action?'],
    takeaway:'Thermoregulation illustrates the course’s central idea: structure, signalling, circulation and effectors cooperate to keep a variable within a workable range.'
  },
  recap:['Anatomy studies structure; physiology studies function.','Anatomic position makes directional language consistent.','Sagittal, frontal and transverse planes describe different sections.','Dorsal and ventral cavities have predictable subdivisions.','Cells build tissues, tissues build organs and organs cooperate in systems.','The four tissue families are epithelial, connective, muscle and nervous.','Homeostasis is dynamic regulation, usually through negative feedback.'],
  flashcards:[
    {front:'Anatomy',back:'Study of body structure, form and relationships.',tag:'foundations'},
    {front:'Physiology',back:'Study of body function and mechanism.',tag:'foundations'},
    {front:'Medial vs lateral',back:'Medial is nearer the midline; lateral is farther from it.',tag:'directions'},
    {front:'Proximal vs distal',back:'Proximal is nearer an attachment or origin; distal is farther away.',tag:'directions'},
    {front:'Transverse plane',back:'A plane separating superior and inferior portions.',tag:'planes'},
    {front:'Midsagittal plane',back:'A plane through the midline creating equal right and left halves.',tag:'planes'},
    {front:'Dorsal cavity',back:'The cranial and spinal cavities housing the brain and spinal cord.',tag:'cavities'},
    {front:'Viscera',back:'The internal organs contained within a body cavity.',tag:'cavities'},
    {front:'Four tissue classes',back:'Epithelial, connective, muscle and nervous.',tag:'organization'},
    {front:'Homeostasis',back:'Dynamic maintenance of internal conditions within regulated ranges.',tag:'regulation'},
    {front:'Negative feedback',back:'A response that reduces or opposes the original change.',tag:'regulation'},
    {front:'Positive feedback',back:'A response that amplifies a change until an endpoint interrupts the loop.',tag:'regulation'}
  ],
  practice:[
    {prompt:'Why must right and left be interpreted from the subject’s perspective?',answer:'Anatomic descriptions use the body being described as the reference, preventing observer-dependent reversals.',rationale:'A shared reference makes communication reproducible.',tag:'directions'},
    {prompt:'Compare a frontal plane with a transverse plane.',answer:'Frontal separates anterior from posterior; transverse separates superior from inferior.',rationale:'The plane determines the view of internal relationships.',tag:'planes'},
    {prompt:'Place the brain, lungs and stomach into their most relevant major cavities.',answer:'Brain: cranial/dorsal; lungs: pleural/thoracic/ventral; stomach: abdominal/abdominopelvic/ventral.',rationale:'Cavities are nested, so both specific and major locations can be named.',tag:'cavities'},
    {prompt:'Explain why an organ is more than a collection of identical cells.',answer:'An organ combines multiple tissue types in an organized structure that performs integrated functions.',rationale:'Complex function emerges through tissue relationships.',tag:'organization'},
    {prompt:'Which tissue class chiefly lines the intestine, and which creates propulsion?',answer:'Epithelial tissue lines it; smooth muscle produces propulsion.',rationale:'One organ combines distinct tissue functions.',tag:'tissues'},
    {prompt:'Trace oxygen using the IN → MOVE → USE → OUT model.',answer:'Oxygen enters through respiration, moves in blood, is used by cells and contributes to products that include carbon dioxide, which is transported back to the lungs.',rationale:'Tracing a material integrates several systems.',tag:'systems'},
    {prompt:'Why is cardiovascular transport not useful without exchange surfaces?',answer:'Transport can only distribute materials that enter or leave through respiratory, digestive, urinary and tissue exchange processes.',rationale:'Systems are interdependent.',tag:'systems'},
    {prompt:'Give one negative-feedback example and identify the opposed change.',answer:'Sweating after temperature rises increases heat loss and opposes the rise.',rationale:'The response direction defines negative feedback.',tag:'homeostasis'},
    {prompt:'Why is labour commonly used as a positive-feedback example?',answer:'Contractions promote signals that strengthen further contractions until birth ends the cycle.',rationale:'The response amplifies rather than reverses the initiating change.',tag:'homeostasis'},
    {prompt:'Turn the statement “the digestive system works alone” into a systems explanation.',answer:'Digestion depends on muscular movement, nervous and endocrine regulation, blood and lymphatic transport, and waste-removal processes.',rationale:'A connected explanation better reflects physiology.',tag:'integration'}
  ]
};
