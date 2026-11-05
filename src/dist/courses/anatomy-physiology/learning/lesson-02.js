window.AP_LEARNING=window.AP_LEARNING||{};
window.AP_LEARNING['lesson-2']={
  version:1,
  title:'The Chemistry of Life',
  chapter:'Chapter 2',
  duration:'80–95 minutes',
  outcomes:[
    'Describe atomic structure and distinguish elements, isotopes, ions, molecules and compounds.',
    'Compare ionic, covalent and hydrogen bonds in living systems.',
    'Relate water polarity to solvent behaviour, transport and temperature stability.',
    'Recognize the basic roles of carbohydrates, lipids, proteins, nucleic acids and ATP.',
    'Explain diffusion, osmosis and active transport without confusing their energy requirements.',
    'Interpret the pH scale and the stabilizing role of buffers.'
  ],
  modules:[
    {id:'matter',title:'Build matter from particles',summary:'Start with atoms, elements, ions, isotopes and compounds.',moments:[
      {
        id:'l2-m1',title:'Atomic structure determines chemical behaviour',
        highYield:'Protons identify the element, neutrons change its isotope, and electrons drive most chemical interactions.',
        teaching:[
          'An atom is the smallest particle that retains the properties of an element. Its compact nucleus contains positively charged protons and uncharged neutrons. Negatively charged electrons occupy regions around the nucleus. In a neutral atom, the numbers of protons and electrons are equal, so their charges balance.',
          'The atomic number equals the number of protons and therefore identifies the element. Electron arrangement is especially important because chemical reactions involve gaining, losing or sharing electrons. An atom that gains electrons becomes negatively charged; one that loses electrons becomes positively charged. Charged atoms are called ions.'
        ],
        keyPoints:['Protons have positive charge; neutrons have no charge.','Electrons have negative charge and participate in bonding.','Changing electron number creates an ion, not a new element.'],
        visual:{title:'A simplified atom',kind:'layers',items:[{label:'Nucleus',detail:'Protons and neutrons concentrated at the centre.'},{label:'Electron region',detail:'Electrons occupy energy levels around the nucleus.'},{label:'Net charge',detail:'Depends on the balance between protons and electrons.'}]},
        mnemonic:{title:'Keep the particles straight',cue:'PEN',explanation:'Protons are Positive, Electrons are negative, Neutrons are neutral.'},
        goodToKnow:'An atomic diagram is a model. Electrons do not travel around the nucleus on fixed planetary tracks.',
        practiceConnection:'Mineral ions such as sodium, potassium and calcium behave according to charge; a nutrient name alone does not explain its chemical form or movement.',
        activity:{prompt:'An atom gains one electron without changing its nucleus. What changes?',options:[{text:'It becomes a negatively charged ion.',correct:true,feedback:'An extra electron creates a net negative charge.'},{text:'It becomes a different element.',correct:false,feedback:'The element is determined by proton number.'},{text:'It becomes a new isotope.',correct:false,feedback:'Isotopes differ in neutron number.'}]}
      },
      {
        id:'l2-m2',title:'Elements, isotopes and compounds are related but distinct',
        highYield:'An element is defined by proton number; an isotope differs in neutrons; a compound joins atoms of different elements.',
        teaching:[
          'All atoms of one element have the same number of protons. Carbon is central to living matter because its electron arrangement allows it to form stable covalent frameworks with many other atoms. Hydrogen, oxygen, nitrogen, phosphorus and several mineral elements also contribute to body structure and function.',
          'Isotopes are forms of the same element with different numbers of neutrons. Their chemical behaviour is often similar, although their mass and nuclear stability may differ. A molecule contains atoms held together by chemical bonds. When those atoms represent more than one element, the molecule is also a compound, as in water or carbon dioxide.'
        ],
        keyPoints:['Element identity comes from proton number.','Isotopes differ in neutron number.','Every compound contains more than one element.'],
        visual:{title:'Classify the particle',kind:'comparison',items:[{label:'Element',detail:'One kind of atom defined by proton number.'},{label:'Isotope',detail:'Same element, different neutron number.'},{label:'Molecule',detail:'Two or more atoms chemically joined.'},{label:'Compound',detail:'Joined atoms from at least two elements.'}]},
        mnemonic:{title:'Identity versus variation',cue:'P identifies; N varies',explanation:'Protons identify the element, while neutrons create isotopic variation.'},
        goodToKnow:'The word chemical does not mean artificial or harmful. Water, oxygen, glucose and DNA are chemicals.',
        practiceConnection:'When comparing supplement labels, the element amount and the compound form are different pieces of information; absorption and use cannot be inferred from the element name alone.',
        activity:{prompt:'Which statement correctly describes an isotope?',options:[{text:'It has a different number of protons and is a new element.',correct:false,feedback:'Changing protons changes element identity.'},{text:'It has the same proton number but a different neutron number.',correct:true,feedback:'That is the defining relationship among isotopes.'},{text:'It has identical particles but a different name.',correct:false,feedback:'Isotopes have a real neutron and mass difference.'}]}
      }
    ]},
    {id:'bonds',title:'Connect bonds, water and energy',summary:'See how electron behaviour creates stable molecules and useful interactions.',moments:[
      {
        id:'l2-m3',title:'Bonds organize atoms into biological molecules',
        highYield:'Ionic bonding follows electron transfer, covalent bonding shares electrons, and hydrogen bonding is a weaker attraction between partial charges.',
        teaching:[
          'An ionic interaction begins when one atom loses electron density and another gains it, creating oppositely charged ions that attract. Many mineral salts separate into ions in water. Covalent bonds form when atoms share electron pairs. The carbon skeletons and many oxygen, hydrogen and nitrogen connections in biological molecules are covalent.',
          'Because electrons may be shared unequally, a covalent molecule can have partially charged regions. Those partial charges allow weaker hydrogen bonds to form between molecules or between different parts of a large molecule. Individually weak interactions become powerful when many act together, helping stabilize water, proteins and nucleic acids.'
        ],
        keyPoints:['Ionic interactions involve charged particles.','Covalent bonds involve shared electrons.','Hydrogen bonds help stabilize molecular shape and water behaviour.'],
        visual:{title:'Three bonding patterns',kind:'comparison',items:[{label:'Ionic',detail:'Electron transfer creates attraction between ions.'},{label:'Covalent',detail:'Atoms share electron pairs.'},{label:'Hydrogen',detail:'Partial charges form a weaker bridge.'}]},
        mnemonic:{title:'Remember the electron action',cue:'I transfer · CO-share · H attracts',explanation:'Ionic transfer, covalent sharing and hydrogen attraction describe the core difference.'},
        goodToKnow:'Ionic bonds in a dry crystal and separated ions in water are different physical arrangements of the same chemical components.',
        practiceConnection:'Electrolytes are ions in solution; their function depends on charge, concentration and compartment, not simply on consuming more of a mineral.',
        activity:{prompt:'Which bond directly joins amino acids within a protein chain?',options:[{text:'A covalent peptide bond',correct:true,feedback:'Peptide bonds are covalent links between amino acids.'},{text:'Only a hydrogen bond',correct:false,feedback:'Hydrogen bonds help shape proteins but do not form the primary amino-acid chain.'},{text:'A free-electron cloud with no bond',correct:false,feedback:'A stable protein backbone requires covalent connections.'}]}
      },
      {
        id:'l2-m4',title:'Water is a polar working environment',
        highYield:'Water’s polarity explains much of its solvent power, cohesion, heat buffering and transport role.',
        teaching:[
          'In water, oxygen attracts shared electrons more strongly than hydrogen, producing a partial negative region near oxygen and partial positive regions near hydrogen. This polarity allows water molecules to interact through hydrogen bonds and surround many ions and polar compounds. Substances that mix readily with water are hydrophilic; many nonpolar substances are hydrophobic.',
          'Water participates in reactions, carries dissolved materials, lubricates surfaces and helps distribute heat. Its capacity to absorb substantial heat with a relatively modest temperature change supports thermal stability. No single property makes water important; its polarity, bonding and abundance combine to create the medium in which most cellular chemistry occurs.'
        ],
        keyPoints:['Water has partial charges even though the molecule is neutral overall.','Polarity helps dissolve ions and polar molecules.','Hydrogen bonding contributes to cohesion and heat behaviour.'],
        visual:{title:'Water as a molecular tool',kind:'hub',items:[{label:'Solvent',detail:'Surrounds many ions and polar solutes.'},{label:'Transport',detail:'Provides the fluid medium for movement.'},{label:'Temperature',detail:'Absorbs and releases heat gradually.'},{label:'Reaction partner',detail:'Participates in many chemical reactions.'}]},
        mnemonic:{title:'Water’s four jobs',cue:'STAR',explanation:'Solvent, Transport, temperature Absorption and Reactions.'},
        goodToKnow:'Hydrophobic does not mean harmful. Lipids are relatively nonpolar and are essential components of membranes.',
        practiceConnection:'Hydration advice should be individualized; knowing water chemistry does not create a universal fluid prescription.',
        activity:{prompt:'Why can water help dissolve sodium chloride?',options:[{text:'Its polar regions interact with the charged sodium and chloride ions.',correct:true,feedback:'Partial charges orient around and stabilize separated ions.'},{text:'It converts sodium and chloride into carbon.',correct:false,feedback:'Dissolving does not change the elements.'},{text:'It has no electrical pattern at all.',correct:false,feedback:'Water is neutral overall but polar within the molecule.'}]}
      }
    ]},
    {id:'molecules',title:'Recognize the molecules of life',summary:'Connect common chemical families to cellular structure and energy transfer.',moments:[
      {
        id:'l2-m5',title:'Carbohydrates and lipids store and build in different ways',
        highYield:'Carbohydrates commonly provide readily accessible fuel and structural sugars; lipids store concentrated energy and form membranes.',
        teaching:[
          'Carbohydrates contain carbon, hydrogen and oxygen. Simple sugars such as glucose can be linked into larger storage molecules such as glycogen. Five-carbon sugars are structural components of nucleic acids. Cells use carbohydrate chemistry for both energy transfer and molecular construction, so carbohydrate is not synonymous with sweetness.',
          'Lipids are relatively insoluble in water. Triacylglycerols combine glycerol with fatty acids and are an efficient energy store. Phospholipids contain both water-compatible and water-avoiding regions, allowing them to assemble into cell membranes. Saturated and unsaturated describe aspects of carbon bonding in fatty-acid chains, not a complete judgment about a food or person’s health.'
        ],
        keyPoints:['Glucose is a six-carbon sugar used in cellular energy pathways.','Glycogen is a storage carbohydrate in animals.','Phospholipids self-organize into membrane bilayers.','Triacylglycerols store substantial chemical energy.'],
        visual:{title:'Two molecular families',kind:'split',items:[{label:'Carbohydrate',detail:'Sugars, storage polymers and structural components.'},{label:'Triacylglycerol',detail:'Glycerol plus three fatty acids.'},{label:'Phospholipid',detail:'Polar head with nonpolar tails for membranes.'}]},
        mnemonic:{title:'Match structure to role',cue:'Sugar stores; phospholipid separates',explanation:'Carbohydrates often support fuel/storage, while phospholipids create boundaries.'},
        goodToKnow:'A nutrient’s molecular family does not determine the quality of an entire food or dietary pattern.',
        practiceConnection:'Use molecular explanations to clarify digestion and absorption, but avoid turning a structural fact into a blanket food rule.',
        activity:{prompt:'Which molecule is especially suited to forming a cell boundary in water?',options:[{text:'A phospholipid with a polar head and nonpolar tails',correct:true,feedback:'Its two-region structure drives bilayer formation.'},{text:'A free neutron',correct:false,feedback:'A neutron is a subatomic particle, not a membrane-forming molecule.'},{text:'Only a strand of glycogen',correct:false,feedback:'Glycogen stores carbohydrate rather than forming the basic membrane bilayer.'}]}
      },
      {
        id:'l2-m6',title:'Proteins, nucleic acids and ATP perform information-rich work',
        highYield:'Amino-acid sequence shapes protein function; nucleotide sequence stores information; ATP transfers usable energy between reactions.',
        teaching:[
          'Proteins are chains of amino acids linked by peptide bonds. The amino-acid sequence is the primary structure, and interactions along the chain produce increasingly complex folding. Shape matters: enzymes, receptors, transport proteins and structural proteins work because particular surfaces interact with particular molecules. Heat, pH and other conditions can alter folding and function.',
          'DNA and RNA are nucleic acids built from nucleotides. Their base sequences carry and use biological information. ATP is also a nucleotide-related molecule, but its immediate role is energy transfer. When a reaction releases usable energy, cells can capture part of it in ATP; ATP can then support work such as transport, synthesis and movement.'
        ],
        keyPoints:['Amino acids are the building blocks of proteins.','DNA and RNA are polymers of nucleotides.','ATP couples energy-releasing processes to cellular work.'],
        visual:{title:'Build, instruct, power',kind:'triad',items:[{label:'Protein',detail:'Amino-acid chain folded into a functional shape.'},{label:'Nucleic acid',detail:'Nucleotide sequence that stores or uses information.'},{label:'ATP',detail:'A transferable packet of chemical energy.'}]},
        mnemonic:{title:'Three molecular jobs',cue:'PNA',explanation:'Proteins Perform, Nucleic acids encode, ATP Activates work.'},
        goodToKnow:'ATP is not a long-term energy warehouse; cells continually make and use it.',
        practiceConnection:'Protein intake supplies amino acids, but the body’s protein functions also depend on digestion, absorption, synthesis signals and cellular machinery.',
        activity:{prompt:'What most directly determines a protein’s primary structure?',options:[{text:'The order of its amino acids',correct:true,feedback:'Primary structure is the amino-acid sequence.'},{text:'The number of neutrons in water',correct:false,feedback:'That does not specify a protein chain.'},{text:'The pH scale alone',correct:false,feedback:'pH can affect folding, but it does not encode the sequence.'}]}
      }
    ]},
    {id:'movement',title:'Move matter and stabilize chemistry',summary:'Distinguish passive and active transport, then interpret pH.',moments:[
      {
        id:'l2-m7',title:'Diffusion follows a concentration gradient',
        highYield:'Net diffusion moves particles from higher to lower concentration through random molecular motion.',
        teaching:[
          'Particles in fluids are always moving. When more particles occupy one region than another, random motion produces a net movement down the concentration gradient until the distribution becomes more even. Temperature, distance, particle size and available surface can influence the rate. Equilibrium does not mean molecular motion stops; it means there is no net directional change.',
          'Simple diffusion can occur through a membrane when the substance and membrane permit it. Facilitated diffusion also moves down a gradient but uses a membrane protein. Neither process directly consumes ATP to push the transported substance uphill. The distinction between direction and mechanism is essential.'
        ],
        keyPoints:['Diffusion is driven by a concentration difference.','Equilibrium still includes molecular motion.','Facilitated diffusion uses a protein but remains passive.'],
        visual:{title:'Gradient to equilibrium',kind:'sequence',items:[{label:'High concentration',detail:'Many particles begin in one region.'},{label:'Net movement',detail:'Random movement favours spread toward the lower concentration.'},{label:'Dynamic equilibrium',detail:'Movement continues without a net shift.'}]},
        mnemonic:{title:'Direction of diffusion',cue:'HIGH → LOW',explanation:'Passive net movement travels down the concentration gradient.'},
        goodToKnow:'Faster diffusion at a higher temperature does not mean temperature is the only control on transport in a living cell.',
        practiceConnection:'Absorption is not explained by concentration alone; membrane properties, transport proteins, surface area and blood flow may all matter.',
        activity:{prompt:'Which process is passive but requires a membrane carrier or channel?',options:[{text:'Facilitated diffusion',correct:true,feedback:'The protein assists movement down a gradient without directly using ATP.'},{text:'Primary active transport',correct:false,feedback:'Primary active transport uses energy to move against a gradient.'},{text:'Covalent bonding',correct:false,feedback:'Bond formation is not a membrane-transport mechanism.'}]}
      },
      {
        id:'l2-m8',title:'Osmosis tracks water across a selective barrier',
        highYield:'Water moves toward the side with the greater effective concentration of nonpenetrating solute.',
        teaching:[
          'Osmosis is the net movement of water through a selectively permeable membrane. Tonicity describes how a surrounding solution changes cell volume. In an isotonic environment, there is no sustained net water shift. A hypotonic environment favours water entry and swelling; a hypertonic environment favours water loss and shrinking.',
          'The words hypo and hyper describe the solution relative to the cell, not the cell itself. Real biological fluids contain several solutes, and whether a solute can cross the membrane affects its osmotic impact. The classroom model is powerful, but it is still a model of a more complex system.'
        ],
        keyPoints:['Osmosis concerns water movement.','Isotonic solutions do not drive a lasting volume change.','Hypotonic swells; hypertonic shrinks.'],
        visual:{title:'Cell volume and tonicity',kind:'comparison',items:[{label:'Hypotonic outside',detail:'Water tends to enter; cell volume rises.'},{label:'Isotonic outside',detail:'Water exchanges without a net volume shift.'},{label:'Hypertonic outside',detail:'Water tends to leave; cell volume falls.'}]},
        mnemonic:{title:'Predict cell volume',cue:'HYPO = hippo-sized; HYPER = shrivel',explanation:'A simple visual cue: hypotonic surroundings swell a cell, hypertonic surroundings shrink it.'},
        goodToKnow:'Tonicity depends mainly on solutes that do not freely cross the membrane during the time being considered.',
        practiceConnection:'Fluid balance cannot be judged from water intake alone; solute distribution, losses, kidney regulation and clinical context also matter.',
        activity:{prompt:'A red blood cell loses water and shrinks. The surrounding solution is most likely:',options:[{text:'Hypertonic relative to the cell',correct:true,feedback:'Higher effective external solute draws water outward.'},{text:'Hypotonic relative to the cell',correct:false,feedback:'A hypotonic environment favours water entry and swelling.'},{text:'Purely isotonic',correct:false,feedback:'An isotonic environment should not drive a sustained volume loss.'}]}
      },
      {
        id:'l2-m9',title:'Active transport and buffers protect useful gradients',
        highYield:'Active transport uses cellular energy to move substances against a gradient; buffers limit abrupt pH change by accepting or releasing hydrogen ions.',
        teaching:[
          'Cells maintain unequal ion distributions across membranes. Moving a substance from lower to higher concentration requires energy and a transport protein. Primary active transport uses energy directly, often from ATP. Vesicular processes can move larger packages into or out of cells. These mechanisms create gradients that later support electrical signals and coupled transport.',
          'pH expresses hydrogen-ion concentration on a logarithmic scale. Values below 7 are acidic, 7 is neutral and values above 7 are basic in the standard classroom frame. Because each pH unit represents a tenfold change, a shift from 7 to 6 is substantial. Buffers reduce sudden pH swings by reversibly binding or releasing hydrogen ions; they do not make pH irrelevant or permanently fixed.'
        ],
        keyPoints:['Active transport can move against a gradient.','ATP commonly supplies transport energy.','Lower pH means greater hydrogen-ion concentration.','Buffers resist rather than eliminate pH change.'],
        visual:{title:'Maintaining chemical conditions',kind:'split',items:[{label:'Transport pump',detail:'Uses energy to maintain unequal concentrations.'},{label:'Acid',detail:'Contributes hydrogen ions in solution.'},{label:'Base',detail:'Accepts hydrogen ions or reduces their concentration.'},{label:'Buffer',detail:'Temporarily absorbs added acid or base.'}]},
        mnemonic:{title:'Two stabilizers',cue:'PUMPS place; BUFFERS brace',explanation:'Pumps place ions across membranes; buffers brace against rapid pH change.'},
        goodToKnow:'The pH scale is logarithmic, so equal numeric steps do not represent equal absolute changes in hydrogen ions.',
        practiceConnection:'Avoid using food pH to claim that one food directly “alkalizes” all body compartments; the body regulates different fluids through several physiological systems.',
        activity:{prompt:'Which statement is accurate?',options:[{text:'Active transport can use ATP to move a solute against its gradient.',correct:true,feedback:'Energy allows the transporter to maintain an unequal distribution.'},{text:'A buffer prevents any possible change in pH.',correct:false,feedback:'Buffers reduce the size or speed of change but have limits.'},{text:'pH 6 contains less hydrogen ion than pH 7.',correct:false,feedback:'A lower pH represents a greater hydrogen-ion concentration.'}]}
      }
    ]}
  ],
  caseStudy:{
    title:'A cell placed in a new solution',
    scenario:'A teaching model shows identical cells placed into three unlabeled solutions. One swells, one retains its volume and one shrinks.',
    prompts:['Classify each surrounding solution as hypotonic, isotonic or hypertonic.','Explain the direction of net water movement without saying that solute itself must cross.','Identify one reason a real cell may respond differently from a simplified model.'],
    takeaway:'Predicting transport requires the gradient, membrane permeability and the identity of the moving substance—not a memorized arrow alone.'
  },
  recap:['Protons identify an element; neutrons create isotopes; electrons shape bonding.','Ionic transfer and covalent sharing produce different molecular behaviour.','Water’s polarity supports solvent, transport and temperature functions.','Carbohydrates, lipids, proteins and nucleic acids have distinct structural patterns.','ATP transfers usable chemical energy to cellular work.','Diffusion and osmosis are passive; active transport requires energy input.','pH is logarithmic and buffers resist sudden change.'],
  flashcards:[
    {front:'Atomic number',back:'The number of protons in an atom’s nucleus.',tag:'atoms'},
    {front:'Isotope',back:'An atom of the same element with a different number of neutrons.',tag:'atoms'},
    {front:'Ion',back:'An atom or molecule with a net charge from gaining or losing electrons.',tag:'atoms'},
    {front:'Ionic interaction',back:'Attraction between oppositely charged ions created through electron transfer.',tag:'bonds'},
    {front:'Covalent bond',back:'A bond in which atoms share electron pairs.',tag:'bonds'},
    {front:'Hydrogen bond',back:'A relatively weak attraction involving partial charges, important in water and biomolecular shape.',tag:'bonds'},
    {front:'Amino acid',back:'A building block joined by peptide bonds to form proteins.',tag:'molecules'},
    {front:'Nucleotide',back:'A building block of nucleic acids, consisting of a sugar, phosphate and nitrogenous base.',tag:'molecules'},
    {front:'ATP',back:'A molecule that transfers chemical energy to many forms of cellular work.',tag:'energy'},
    {front:'Diffusion',back:'Net movement down a concentration gradient.',tag:'transport'},
    {front:'Osmosis',back:'Net movement of water through a selectively permeable membrane.',tag:'transport'},
    {front:'Active transport',back:'Energy-dependent movement, often against a concentration gradient.',tag:'transport'},
    {front:'Buffer',back:'A chemical system that resists abrupt pH change by accepting or releasing hydrogen ions.',tag:'pH'}
  ],
  practice:[
    {prompt:'What changes when a neutral atom loses one electron?',answer:'It becomes a positively charged ion; its element identity remains the same.',rationale:'Electron number changes charge, while proton number defines the element.',tag:'atoms'},
    {prompt:'Distinguish an isotope from an ion.',answer:'An isotope differs in neutron number; an ion differs in net charge because of electrons.',rationale:'The two terms describe different types of variation.',tag:'atoms'},
    {prompt:'Why do many salts separate into ions in water?',answer:'Water’s polar regions stabilize the oppositely charged ions.',rationale:'Solvent behaviour follows molecular charge distribution.',tag:'water'},
    {prompt:'Compare ionic, covalent and hydrogen bonding in one sentence each.',answer:'Ionic attraction follows charge separation; covalent bonds share electrons; hydrogen bonds are weaker attractions between partial charges.',rationale:'The electron relationship distinguishes the three.',tag:'bonds'},
    {prompt:'Why can phospholipids form a membrane in water?',answer:'Their polar heads interact with water while nonpolar tails cluster away from it, producing a bilayer.',rationale:'Two chemical regions make self-assembly possible.',tag:'lipids'},
    {prompt:'Connect protein primary structure to protein function.',answer:'Amino-acid order drives folding, and the resulting shape creates functional binding and interaction surfaces.',rationale:'Sequence, shape and function are linked.',tag:'proteins'},
    {prompt:'Explain why ATP is described as an energy-transfer molecule.',answer:'Cells continually make ATP using energy from other reactions and then hydrolyze it to support work.',rationale:'ATP links energy release with energy-requiring processes.',tag:'energy'},
    {prompt:'What is the difference between simple and facilitated diffusion?',answer:'Both move down a gradient; facilitated diffusion uses a membrane protein.',rationale:'Using a protein does not automatically make transport active.',tag:'transport'},
    {prompt:'Predict cell volume in a hypotonic environment.',answer:'Water tends to enter and cell volume tends to increase.',rationale:'The exterior has a lower effective nonpenetrating-solute concentration.',tag:'osmosis'},
    {prompt:'Why is a change from pH 7 to pH 6 not a small one-unit chemical change?',answer:'The pH scale is logarithmic, so the hydrogen-ion concentration changes tenfold.',rationale:'Numeric distance on the scale represents multiplicative chemical change.',tag:'pH'},
    {prompt:'What is the difference between a buffer and an active-transport pump?',answer:'A buffer reversibly handles hydrogen ions to limit pH change; a pump uses energy to move a substance across a membrane.',rationale:'Both stabilize conditions through different mechanisms.',tag:'integration'}
  ]
};
