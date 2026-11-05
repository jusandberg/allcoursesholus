window.AP_LEARNING=window.AP_LEARNING||{};
window.AP_LEARNING['lesson-3']={
  version:1,
  title:"Cell Structure",
  chapter:"Chapter 3",
  duration:"75–95 minutes",
  outcomes:[
    "Use modern cell theory to explain why cells are the basic units of living structure and function.",
    "Relate the phospholipid bilayer and membrane proteins to selective exchange and cell communication.",
    "Match the major organelles with their structural features and cellular jobs.",
    "Trace a protein from genetic instruction through synthesis, processing, and delivery.",
    "Distinguish key features of human eukaryotic cells from prokaryotic and plant cells."
  ],
  modules:[
    {
      id:"cell-foundations",
      title:"Build the cellular map",
      summary:"Start with the shared rules of cells, then use compartments to organize a eukaryotic cell.",
      moments:[
        {
          id:"cell-theory",
          title:"Cell theory gives biology its smallest living unit",
          highYield:"Every human structure is built from cells, and every new cell comes from an existing cell.",
          teaching:[
            "Modern cell theory organizes three connected ideas: living organisms consist of cells, the cell is the basic unit of living structure and function, and cells arise through division of pre-existing cells. Human tissues may look continuous, but each is an organized population of cells plus surrounding material.",
            "The theory also links continuity to heredity. When a cell divides, genetic information must be copied and distributed so daughter cells can maintain the functions appropriate to their tissue. A mature red blood cell and a neuron look very different because specialization changes cellular structure, not because either stops being a cell."
          ],
          keyPoints:[
            "Cells are the smallest units that carry out the coordinated activities of life.",
            "New cells arise from existing cells rather than appearing spontaneously.",
            "Cell structure varies with function while core cellular principles remain shared.",
            "Genetic information connects one cell generation to the next."
          ],
          visual:{
            title:"From organism to cell",
            kind:"nested-scale",
            items:[
              {label:"Organism",detail:"A coordinated human body."},
              {label:"System",detail:"Organs cooperating toward a broad function."},
              {label:"Organ",detail:"Multiple tissue types arranged together."},
              {label:"Tissue",detail:"Related cells and extracellular material."},
              {label:"Cell",detail:"The basic living unit at the center of the sequence."}
            ]
          },
          mnemonic:{title:"Three C rules",cue:"Composition · Core unit · Continuity",explanation:"Organisms are composed of cells; cells are the core living units; cellular life continues from prior cells."},
          goodToKnow:"The historical contributors refined cell theory over time as microscopes improved; the enduring value is the set of principles, not a single discovery date.",
          practiceConnection:"When reviewing a tissue image, first identify the individual cells and then ask how their shape and arrangement support the tissue function.",
          activity:{
            prompt:"A healing cut produces new epidermal cells. Which observation most directly illustrates cell theory?",
            options:[
              {text:"Existing epidermal cells divide to make new cells.",correct:true,feedback:"Correct. New cells arising from existing cells is a central principle of cell theory."},
              {text:"The tissue contains extracellular proteins.",correct:false,feedback:"Extracellular proteins matter, but they do not demonstrate the origin of new cells."},
              {text:"The cut changes local blood flow.",correct:false,feedback:"That is a tissue response, not the cell-theory principle being tested."}
            ]
          }
        },
        {
          id:"cell-types",
          title:"Eukaryotic cells use internal compartments",
          highYield:"Human cells are eukaryotic: DNA is enclosed in a nucleus and many jobs occur in membrane-bound organelles.",
          teaching:[
            "A eukaryotic cell separates tasks into specialized compartments. The nucleus houses most DNA, mitochondria organize aerobic energy pathways, and the endomembrane system builds and routes many proteins and lipids. Compartmentalization lets different reactions occur under suitable conditions at the same time.",
            "Prokaryotic cells, such as bacteria, lack a membrane-bound nucleus and the same suite of membrane-bound organelles. They are still complete living cells. Protoplasm is an older broad term for living cellular material; in practical study, it is more useful to distinguish cytoplasm from the nucleus and to name the structures within each region."
          ],
          keyPoints:[
            "Eukaryotic DNA is mainly enclosed by a nuclear envelope.",
            "Organelles divide cellular work into coordinated compartments.",
            "Prokaryotes lack membrane-bound nuclei but are not empty or nonliving.",
            "Cytoplasm includes cytosol, organelles, and inclusions outside the nucleus."
          ],
          visual:{
            title:"Two cellular plans",
            kind:"comparison",
            items:[
              {label:"Human eukaryotic cell",detail:"Nucleus plus membrane-bound organelles; generally larger and highly compartmentalized."},
              {label:"Prokaryotic cell",detail:"DNA is not enclosed by a nuclear envelope; no classic membrane-bound organelles."},
              {label:"Shared foundation",detail:"Plasma membrane, genetic material, ribosomes, and metabolic chemistry."}
            ]
          },
          mnemonic:{title:"Eu keeps DNA enclosed",cue:"EU = enclosed units",explanation:"Use enclosed units to remember that eukaryotes package many jobs inside membrane-bound compartments."},
          goodToKnow:"Ribosomes are present in both prokaryotic and eukaryotic cells even though ribosomes are not membrane-bound organelles.",
          practiceConnection:"Compartment names help explain why a cellular process can fail at one step even when other steps remain intact.",
          activity:{
            prompt:"Which feature most clearly identifies a typical human cell as eukaryotic?",
            options:[
              {text:"Its DNA is enclosed within a nucleus.",correct:true,feedback:"Correct. A membrane-bound nucleus is a defining eukaryotic feature."},
              {text:"It contains water.",correct:false,feedback:"Water is common to both prokaryotic and eukaryotic cells."},
              {text:"It has ribosomes.",correct:false,feedback:"Both major cell types use ribosomes."}
            ]
          }
        }
      ]
    },
    {
      id:"cell-boundary",
      title:"Control the boundary",
      summary:"Read the plasma membrane as a dynamic selective interface rather than a static wall.",
      moments:[
        {
          id:"fluid-mosaic",
          title:"The plasma membrane is a fluid mosaic",
          highYield:"A phospholipid bilayer forms the barrier; membrane proteins provide much of its selectivity, signaling, adhesion, and transport.",
          teaching:[
            "Each phospholipid has a water-attracting polar head and water-avoiding nonpolar tails. In an aqueous environment, heads face the fluid on both sides while tails turn inward. This bilayer creates a flexible boundary whose hydrophobic center limits the free passage of many charged or water-soluble substances.",
            "Proteins embedded in or attached to the bilayer act as channels, carriers, receptors, enzymes, anchors, and identity markers. Lipids and many proteins can move laterally, which is why the model is described as fluid. Mosaic refers to the varied components arranged across this moving surface."
          ],
          keyPoints:[
            "Polar heads contact water; nonpolar tails form the membrane interior.",
            "The bilayer is selectively permeable rather than completely sealed.",
            "Channels and carriers support regulated movement across the membrane.",
            "Receptors translate external signals into cellular responses."
          ],
          visual:{
            title:"Membrane cross-section",
            kind:"layer-model",
            items:[
              {label:"Extracellular fluid",detail:"Water-based environment outside the cell."},
              {label:"Polar heads",detail:"Face the aqueous environments on both surfaces."},
              {label:"Nonpolar core",detail:"Paired fatty-acid tails restrict many polar solutes."},
              {label:"Transmembrane protein",detail:"Spans the bilayer as a channel, carrier, or receptor."},
              {label:"Cytoplasm",detail:"Water-based internal environment."}
            ]
          },
          mnemonic:{title:"Heads hug water",cue:"Heads out, tails in",explanation:"The phrase fixes the orientation of phospholipids in the bilayer."},
          goodToKnow:"The membrane is only a few nanometres thick, yet its molecular arrangement maintains very different conditions inside and outside the cell.",
          practiceConnection:"Nutrient absorption depends on membrane properties: some small nonpolar molecules cross the bilayer, while many nutrients require specific proteins.",
          activity:{
            prompt:"Why does an ion usually need a membrane protein to enter a cell?",
            options:[
              {text:"Its charge is unfavorable in the nonpolar bilayer core.",correct:true,feedback:"Correct. The hydrophobic interior resists charged particles, so a channel or carrier is usually needed."},
              {text:"The polar heads destroy every ion.",correct:false,feedback:"Polar heads do not destroy ions; the nonpolar interior is the main barrier."},
              {text:"Ions are always larger than cells.",correct:false,feedback:"Ions are tiny, but charge rather than overall size is the key obstacle here."}
            ]
          }
        },
        {
          id:"cytoplasm-cytoskeleton",
          title:"Cytoplasm is organized, not shapeless",
          highYield:"Cytosol suspends organelles, while the cytoskeleton supports shape, internal transport, movement, and division.",
          teaching:[
            "The cytosol is the intracellular fluid in which dissolved substances and suspended macromolecules interact. Together with organelles and stored inclusions, it forms the cytoplasm outside the nucleus. Many metabolic reactions occur here, including the first stage of glucose breakdown.",
            "Protein filaments organize the interior. Microtubules act as structural supports and tracks, help form the mitotic spindle, and contribute to cilia and flagella. Other filaments resist tension, position organelles, and help cells change shape. The result is a dynamic internal framework rather than a bag of floating parts."
          ],
          keyPoints:[
            "Cytosol is the fluid portion; cytoplasm includes cytosol plus internal structures outside the nucleus.",
            "The cytoskeleton maintains shape and positions cellular components.",
            "Microtubules support transport, motility structures, and chromosome movement.",
            "Cellular organization depends on continual remodeling."
          ],
          visual:{
            title:"A cell as a working room",
            kind:"analogy-map",
            items:[
              {label:"Cytosol",detail:"The fluid workspace where many reactions occur."},
              {label:"Cytoskeleton",detail:"Beams and tracks that organize the room."},
              {label:"Motor proteins",detail:"Molecular movers that carry cargo along selected tracks."},
              {label:"Organelles",detail:"Specialized workstations placed within the network."}
            ]
          },
          mnemonic:{title:"Skeleton does more than support",cue:"Shape · Ship · Split",explanation:"The cytoskeleton shapes the cell, helps ship cargo, and participates when cells split."},
          goodToKnow:"Cilia usually occur in large numbers and move material over a cell surface; a flagellum is longer and propels a cell, as in a sperm cell.",
          practiceConnection:"Cilia moving mucus in airways illustrate how a specialized surface structure supports an organ-level protective function.",
          activity:{
            prompt:"A vesicle moves from the cell center toward the membrane. Which structure most directly provides an intracellular track?",
            options:[
              {text:"A cytoskeletal microtubule",correct:true,feedback:"Correct. Microtubules commonly serve as tracks for motor-driven vesicle transport."},
              {text:"A chromosome",correct:false,feedback:"Chromosomes carry genetic information rather than serving as routine cargo tracks."},
              {text:"The nucleolus",correct:false,feedback:"The nucleolus helps assemble ribosomal components inside the nucleus."}
            ]
          }
        }
      ]
    },
    {
      id:"organelle-network",
      title:"Coordinate the organelle network",
      summary:"Group organelles by information, energy, manufacture, shipping, cleanup, and movement.",
      moments:[
        {
          id:"nucleus-mitochondria",
          title:"The nucleus stores instructions; mitochondria release usable energy",
          highYield:"The nucleus protects and manages most genetic information, while mitochondria convert fuel energy into ATP through aerobic pathways.",
          teaching:[
            "A double nuclear envelope separates nucleoplasm from cytoplasm, and nuclear pores regulate exchange. DNA associated with proteins forms chromatin, which condenses into visible chromosomes during division. The nucleolus is a dense region where ribosomal RNA is produced and early ribosome assembly begins.",
            "Mitochondria also have two membranes. Folds of the inner membrane, called cristae, expand the surface available for electron transport and ATP production. Cells with high energy demand generally contain many mitochondria, showing the recurring structure–function principle."
          ],
          keyPoints:[
            "Nuclear pores permit controlled traffic between nucleus and cytoplasm.",
            "Chromatin contains DNA and associated proteins.",
            "The nucleolus contributes components used to assemble ribosomes.",
            "Cristae increase inner-membrane area for ATP-producing machinery."
          ],
          visual:{
            title:"Two double-membrane organelles",
            kind:"paired-diagram",
            items:[
              {label:"Nucleus",detail:"Envelope, pores, chromatin, and nucleolus organize genetic control."},
              {label:"Mitochondrion",detail:"Outer membrane, inner membrane, cristae, and matrix organize aerobic metabolism."},
              {label:"Functional link",detail:"Nuclear genes encode many proteins needed for mitochondrial work."}
            ]
          },
          mnemonic:{title:"Nucleus knows; mitochondria mobilize",cue:"Know and mobilize",explanation:"The nucleus manages information, while mitochondria mobilize energy into ATP."},
          goodToKnow:"Mitochondria contain a small amount of their own DNA, but most proteins they use are encoded by nuclear genes.",
          practiceConnection:"Food energy is not ATP. Cells extract energy from nutrients and use mitochondrial pathways to capture part of it in ATP.",
          activity:{
            prompt:"Which structural feature most directly expands the surface for mitochondrial electron transport?",
            options:[
              {text:"Cristae",correct:true,feedback:"Correct. Cristae are folds of the inner mitochondrial membrane."},
              {text:"Nuclear pores",correct:false,feedback:"Nuclear pores control exchange across the nuclear envelope."},
              {text:"Lysosomal vesicles",correct:false,feedback:"Lysosomes digest selected cellular material."}
            ]
          }
        },
        {
          id:"endomembrane-system",
          title:"ER, Golgi, and vesicles form a production line",
          highYield:"Rough ER begins production of many exported and membrane proteins; Golgi compartments modify, sort, and package them.",
          teaching:[
            "Rough endoplasmic reticulum has ribosomes attached to its cytosolic surface. Proteins destined for secretion, membranes, or certain organelles enter this system as they are made, then fold and receive early modifications. Smooth ER lacks attached ribosomes and contributes to lipid synthesis, detoxification, and calcium handling in specialized cells.",
            "Transport vesicles carry cargo from ER to the Golgi apparatus. Flattened Golgi cisternae receive, modify, label, and sort products into new vesicles. Destinations can include the plasma membrane, secretion outside the cell, or a digestive compartment. Directional trafficking prevents cellular products from being delivered at random."
          ],
          keyPoints:[
            "Rough ER is associated with ribosomes and many proteins entering the endomembrane pathway.",
            "Smooth ER emphasizes lipid-related and specialized chemical tasks.",
            "Golgi cisternae modify and sort incoming cargo.",
            "Vesicles connect compartments and deliver products to selected destinations."
          ],
          visual:{
            title:"Protein shipping route",
            kind:"process-flow",
            items:[
              {label:"Ribosome on rough ER",detail:"Builds a protein into the ER pathway."},
              {label:"Transport vesicle",detail:"Buds from ER carrying newly made cargo."},
              {label:"Golgi apparatus",detail:"Modifies, labels, and sorts cargo."},
              {label:"Delivery vesicle",detail:"Moves cargo to the membrane, secretion, or another compartment."}
            ]
          },
          mnemonic:{title:"Build, fold, finish, forward",cue:"Ribosome → ER → Golgi → vesicle",explanation:"Use the four verbs to rehearse the secretory pathway in order."},
          goodToKnow:"Free ribosomes and rough-ER-bound ribosomes are structurally similar; the destination signal on a growing protein helps determine where synthesis continues.",
          practiceConnection:"A pancreatic cell that exports digestive enzymes has abundant rough ER and Golgi because its structure matches its high secretory workload.",
          activity:{
            prompt:"A newly made digestive enzyme is ready to leave the rough ER. What is the next major destination?",
            options:[
              {text:"A transport vesicle heading to the Golgi apparatus",correct:true,feedback:"Correct. Vesicles transfer secretory-pathway cargo from ER to Golgi."},
              {text:"Directly into the nucleus",correct:false,feedback:"Secreted proteins do not normally return to the nucleus after entering rough ER."},
              {text:"Directly into chromatin",correct:false,feedback:"Chromatin is DNA-protein material, not a protein shipping destination."}
            ]
          }
        },
        {
          id:"cleanup-movement",
          title:"Lysosomes recycle; centrioles and surface structures organize movement",
          highYield:"Cells survive by removing damaged material and by organizing controlled movement inside or at the surface.",
          teaching:[
            "Lysosomes are enzyme-containing vesicles that break down selected macromolecules, worn organelles, and material brought into the cell. Their membrane isolates digestive enzymes from most cytoplasm. Recovered building blocks can be reused. Extensive enzyme release can contribute to autolysis, while apoptosis is a regulated program of cell dismantling.",
            "Near the nucleus, the centrosome organizes microtubules and contains a pair of centrioles in many animal cells. Microtubules contribute to the spindle during division and form the internal scaffold of cilia and flagella. These structures show how one molecular system can support transport, division, and movement."
          ],
          keyPoints:[
            "Lysosomal enzymes digest selected cellular and imported material.",
            "Recycling returns usable components to the cytoplasm.",
            "The centrosome is a major microtubule-organizing site.",
            "Cilia move material across a surface; a flagellum propels a cell."
          ],
          visual:{
            title:"Maintain and move",
            kind:"two-pathway",
            items:[
              {label:"Maintenance pathway",detail:"Damaged material → lysosome → breakdown → reusable components."},
              {label:"Division pathway",detail:"Centrosome → spindle microtubules → chromosome movement."},
              {label:"Surface pathway",detail:"Microtubule bundles → cilia or flagellum → directed movement."}
            ]
          },
          mnemonic:{title:"Lysosomes lyse and recycle",cue:"Digest, recover, reuse",explanation:"The sequence emphasizes controlled intracellular digestion rather than indiscriminate destruction."},
          goodToKnow:"Apoptosis is organized cell death used in development and tissue maintenance; it is conceptually different from uncontrolled injury-related cell breakdown.",
          practiceConnection:"Understanding cellular cleanup helps interpret why normal tissue maintenance requires a balance of synthesis, repair, recycling, and regulated cell loss.",
          activity:{
            prompt:"Which organelle most directly digests a worn-out cellular component?",
            options:[
              {text:"Lysosome",correct:true,feedback:"Correct. Lysosomal enzymes break down selected material for disposal or reuse."},
              {text:"Nucleolus",correct:false,feedback:"The nucleolus participates in ribosome production."},
              {text:"Centriole",correct:false,feedback:"Centrioles are associated with microtubule organization, not digestion."}
            ]
          }
        }
      ]
    },
    {
      id:"information-flow",
      title:"Turn information into protein",
      summary:"Follow the logic from DNA to RNA to an amino-acid sequence, then compare the plant-cell plan.",
      moments:[
        {
          id:"protein-synthesis",
          title:"Transcription and translation connect genes to proteins",
          highYield:"Transcription makes an RNA copy from DNA; translation reads messenger RNA to assemble an amino-acid chain.",
          teaching:[
            "During transcription, a selected DNA region serves as a template for messenger RNA. The RNA copy can leave the nucleus through a pore while the original DNA remains protected. This separates information storage from the cytoplasmic machinery that uses the message.",
            "At a ribosome, translation reads messenger RNA in three-base codons. Transfer RNA molecules use complementary anticodons to deliver the appropriate amino acids. Ribosomal RNA helps form the ribosome and supports peptide-bond formation. The amino-acid sequence then folds and may be processed further to become a functional protein."
          ],
          keyPoints:[
            "DNA is the long-term information store; messenger RNA is a working copy.",
            "Transcription occurs in the nucleus of a typical human cell.",
            "Translation occurs at ribosomes in the cytoplasm or on rough ER.",
            "Transfer RNA pairs anticodons with codons and carries amino acids.",
            "Protein function depends on sequence, folding, and often later modification."
          ],
          visual:{
            title:"Information relay",
            kind:"sequence",
            items:[
              {label:"DNA gene",detail:"Stores the nucleotide sequence in the nucleus."},
              {label:"Transcription",detail:"Produces a complementary messenger RNA copy."},
              {label:"mRNA at ribosome",detail:"Presents codons in sequence."},
              {label:"tRNA delivery",detail:"Matches anticodons and brings amino acids."},
              {label:"Polypeptide",detail:"Folds and may be modified into a working protein."}
            ]
          },
          mnemonic:{title:"Message, transfer, ribosome",cue:"mRNA = message · tRNA = transfer · rRNA = ribosome",explanation:"The initials cue the distinct roles of the three major RNA types in protein synthesis."},
          goodToKnow:"A gene is not converted into a protein molecule directly; information is transcribed and translated through intermediates.",
          practiceConnection:"Dietary amino acids supply building blocks, but cells control which proteins are synthesized through gene expression and cellular signals.",
          activity:{
            prompt:"Which molecule carries an amino acid to a ribosome and pairs with an mRNA codon?",
            options:[
              {text:"Transfer RNA",correct:true,feedback:"Correct. tRNA carries an amino acid and uses its anticodon to recognize an mRNA codon."},
              {text:"DNA polymerase",correct:false,feedback:"DNA polymerase participates in DNA replication, not amino-acid delivery."},
              {text:"A phospholipid",correct:false,feedback:"Phospholipids are major membrane components, not translation adaptors."}
            ]
          }
        },
        {
          id:"plant-comparison",
          title:"Plant cells add structures for support and photosynthesis",
          highYield:"Plant and animal cells share the eukaryotic core, but plant cells also have a cellulose wall, plastids, and a prominent vacuole.",
          teaching:[
            "Plant cells contain nuclei, mitochondria, ER, ribosomes, Golgi apparatus, and plasma membranes just as animal cells do. A rigid cellulose cell wall lies outside the plasma membrane and supports cell shape. A large central vacuole helps store material and contributes to internal pressure.",
            "Chloroplasts are plastids that capture light energy for photosynthesis. Their thylakoid membranes stack into grana, linked by lamellae. Other plastids store materials or pigments. Human cells have no cell wall or chloroplasts, so plant-specific structures should not be assigned to a typical anatomy diagram of a human cell."
          ],
          keyPoints:[
            "Both plant and animal cells are eukaryotic.",
            "The plant cell wall is outside the plasma membrane and contains cellulose.",
            "Chloroplast thylakoids are organized into grana.",
            "A large central vacuole is characteristic of many mature plant cells.",
            "Human cells lack chloroplasts and cellulose walls."
          ],
          visual:{
            title:"Shared core and plant additions",
            kind:"venn-model",
            items:[
              {label:"Shared",detail:"Nucleus, mitochondria, ER, Golgi, ribosomes, plasma membrane."},
              {label:"Plant emphasis",detail:"Cellulose wall, chloroplasts and other plastids, large central vacuole."},
              {label:"Animal emphasis",detail:"Flexible outer boundary and centrioles in many cells; no chloroplasts."}
            ]
          },
          mnemonic:{title:"Plants have the three Cs",cue:"Cell wall · Chloroplast · Central vacuole",explanation:"The three Cs quickly identify the most familiar plant-cell additions."},
          goodToKnow:"Carotene and xanthophyll are pigments found in certain plant plastids; they are not human cellular organelles even though humans obtain related compounds from foods.",
          practiceConnection:"Plant foods contain cells with walls and vacuoles, but digestion breaks food structure down; intact chloroplasts do not become organelles in human cells.",
          activity:{
            prompt:"A diagram shows a nucleus, mitochondria, a cellulose wall, and chloroplasts. What is the best identification?",
            options:[
              {text:"A plant eukaryotic cell",correct:true,feedback:"Correct. The nucleus confirms a eukaryote, while the cellulose wall and chloroplasts identify a plant cell."},
              {text:"A typical human epithelial cell",correct:false,feedback:"Human cells do not have cellulose walls or chloroplasts."},
              {text:"A prokaryotic bacterial cell",correct:false,feedback:"A membrane-bound nucleus and chloroplasts rule out a prokaryote."}
            ]
          }
        }
      ]
    }
  ],
  caseStudy:{
    title:"Follow a secreted enzyme",
    scenario:"A glandular cell has been stimulated to release a protein enzyme. The gene is active, the cell has abundant rough ER and Golgi cisternae, and secretory vesicles are moving toward its plasma membrane.",
    prompts:[
      "Trace the enzyme from DNA information to a finished product outside the cell.",
      "Explain why this cell contains abundant rough ER, Golgi apparatus, and mitochondria.",
      "Predict what would happen to delivery if vesicles could no longer move along cytoskeletal tracks.",
      "Identify the membrane event that releases vesicle contents while preserving the cell boundary."
    ],
    takeaway:"A cellular product is the result of coordinated information flow, organelle processing, energy transfer, cytoskeletal transport, and membrane trafficking—not the action of one isolated structure."
  },
  recap:[
    "Cell theory defines cells as the basic living units and states that new cells arise from existing cells.",
    "Human cells are eukaryotic and divide work among membrane-bound compartments.",
    "The phospholipid bilayer creates a selective boundary whose proteins manage transport, signaling, identity, and attachment.",
    "The nucleus, mitochondria, endomembrane system, lysosomes, and cytoskeleton contribute different but linked functions.",
    "The secretory pathway runs from ribosome and rough ER through Golgi and delivery vesicles.",
    "Transcription produces RNA from DNA; translation uses RNA to assemble an amino-acid sequence.",
    "Plant and animal cells share eukaryotic organelles, while plant cells add a wall, plastids, and a large vacuole."
  ],
  flashcards:[
    {front:"What are the three central principles of modern cell theory?",back:"Organisms are composed of cells; the cell is the basic unit of living structure and function; new cells arise from existing cells.",tag:"foundations"},
    {front:"What makes a cell eukaryotic?",back:"Its DNA is enclosed in a nucleus and it uses membrane-bound organelles to compartmentalize many functions.",tag:"cell types"},
    {front:"What is the difference between cytosol and cytoplasm?",back:"Cytosol is the intracellular fluid; cytoplasm includes cytosol and structures outside the nucleus.",tag:"cytoplasm"},
    {front:"How are phospholipids oriented in a membrane?",back:"Polar heads face water on both sides, and nonpolar tails face inward toward one another.",tag:"membrane"},
    {front:"Name four jobs of membrane proteins.",back:"Transport, receptor signaling, enzymatic activity, adhesion/anchoring, or identity marking; any four.",tag:"membrane"},
    {front:"What is the nucleolus?",back:"A nuclear region that produces ribosomal RNA and begins assembly of ribosomal subunits.",tag:"nucleus"},
    {front:"Why do mitochondrial cristae matter?",back:"They expand the inner-membrane surface available for electron transport and ATP production.",tag:"mitochondria"},
    {front:"Contrast rough and smooth ER.",back:"Rough ER bears ribosomes and processes many proteins; smooth ER emphasizes lipid synthesis and specialized chemical tasks.",tag:"ER"},
    {front:"What does the Golgi apparatus do?",back:"It modifies, sorts, and packages cellular products for selected destinations.",tag:"Golgi"},
    {front:"What is a lysosome?",back:"An enzyme-containing compartment that digests selected macromolecules and worn cellular material.",tag:"lysosome"},
    {front:"What are the roles of mRNA and tRNA?",back:"mRNA carries the coded message; tRNA matches codons through its anticodon and delivers amino acids.",tag:"protein synthesis"},
    {front:"What are three characteristic plant-cell structures?",back:"A cellulose cell wall, chloroplasts or other plastids, and a large central vacuole.",tag:"comparison"}
  ],
  practice:[
    {prompt:"Explain why a plasma membrane can be both a barrier and a communication surface.",answer:"Its nonpolar bilayer limits many solutes, while embedded proteins provide regulated transport and receptors for signals.",rationale:"The membrane combines lipid-based selectivity with protein-based functions.",tag:"membrane"},
    {prompt:"A cell makes large quantities of exported protein. Which organelles should be prominent?",answer:"Rough ER, Golgi apparatus, transport/secretory vesicles, and enough mitochondria to support the workload.",rationale:"These structures synthesize, process, deliver, and energize secretion.",tag:"organelles"},
    {prompt:"Place these in order: Golgi, mRNA, secretory vesicle, rough ER, DNA.",answer:"DNA → mRNA → rough ER → Golgi → secretory vesicle.",rationale:"The order follows information transfer, protein synthesis, processing, and delivery.",tag:"integration"},
    {prompt:"Why can a charged particle not usually cross the phospholipid interior freely?",answer:"The charge is unfavorable in the nonpolar core of the bilayer.",rationale:"Channels or carriers provide a compatible route across the membrane.",tag:"membrane"},
    {prompt:"Distinguish chromatin, chromosome, and nucleolus.",answer:"Chromatin is DNA with associated proteins; a chromosome is condensed chromatin organized for division; the nucleolus makes rRNA and begins ribosome assembly.",rationale:"All are nuclear terms with different structures and roles.",tag:"nucleus"},
    {prompt:"What would be disrupted if microtubules could not form?",answer:"Vesicle transport, cilia/flagella function, cell organization, and chromosome movement during division could be affected.",rationale:"Microtubules support multiple structural and movement systems.",tag:"cytoskeleton"},
    {prompt:"Why is a lysosome not simply a bag of destructive enzymes?",answer:"Its membrane isolates enzymes and its trafficking targets selected cargo for controlled digestion and recycling.",rationale:"Compartmentalization protects the rest of the cell.",tag:"lysosome"},
    {prompt:"Compare transcription with translation.",answer:"Transcription copies DNA information into RNA; translation reads mRNA at a ribosome to build a polypeptide.",rationale:"They are sequential but distinct stages of gene expression.",tag:"protein synthesis"},
    {prompt:"Which organelle would likely be abundant in a cell with very high aerobic energy demand, and why?",answer:"Mitochondria, because their inner membranes organize electron transport and much ATP production.",rationale:"Organelle abundance often reflects specialized workload.",tag:"mitochondria"},
    {prompt:"Why is a chloroplast not expected in a human cell?",answer:"Chloroplasts are plant plastids specialized for photosynthesis; human cells obtain chemical energy from nutrients instead.",rationale:"Plant and animal cells share a eukaryotic core but differ in specialized structures.",tag:"comparison"}
  ]
};
