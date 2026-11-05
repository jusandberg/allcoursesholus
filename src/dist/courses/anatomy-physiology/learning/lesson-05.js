window.AP_LEARNING=window.AP_LEARNING||{};
window.AP_LEARNING['lesson-5']={
  version:1,
  title:"Tissues",
  chapter:"Chapter 5",
  duration:"85–105 minutes",
  outcomes:[
    "Identify the four primary tissue classes and connect microscopic organization to function.",
    "Classify epithelia by cell shape and number of layers and recognize major gland categories.",
    "Compare loose, dense, cartilage, bone, and blood connective tissues through cells, fibers, and matrix.",
    "Distinguish mucous, serous, and synovial membranes by location and function.",
    "Compare skeletal, cardiac, and smooth muscle and describe the basic organization of nervous tissue."
  ],
  modules:[
    {
      id:"tissue-map",
      title:"Read tissues as organized communities",
      summary:"Use histology and the four tissue families to move from isolated cells to organs.",
      moments:[
        {
          id:"four-families",
          title:"Four primary tissues divide the body’s work",
          highYield:"Epithelium covers and lines, connective tissue supports and links, muscle contracts, and nervous tissue communicates.",
          teaching:[
            "A tissue is a coordinated group of cells plus any extracellular material they produce. Histology studies these microscopic arrangements. Tissue identity depends not only on the cells present but also on their shape, spacing, polarity, fibers, and surrounding matrix.",
            "The four primary tissue classes are epithelial, connective, muscle, and nervous. Most organs combine all four in different proportions. The stomach, for example, needs an epithelial lining, connective support, smooth muscle for movement, and nervous tissue for control."
          ],
          keyPoints:[
            "Histology links microscopic structure with tissue function.",
            "Epithelial cells form boundaries, surfaces, and glands.",
            "Connective tissues contain cells dispersed within extracellular matrix.",
            "Muscle produces force; nervous tissue carries and processes signals.",
            "Organs usually contain multiple tissue classes."
          ],
          visual:{
            title:"Four-tissue compass",
            kind:"quadrant",
            items:[
              {label:"Epithelium",detail:"Cover, line, absorb, protect, and secrete."},
              {label:"Connective",detail:"Bind, support, store, protect, and transport."},
              {label:"Muscle",detail:"Shorten or develop tension to create movement."},
              {label:"Nervous",detail:"Detect, integrate, and transmit information."}
            ]
          },
          mnemonic:{title:"Every Connection Moves News",cue:"E · C · M · N",explanation:"The first letters cue epithelial, connective, muscle, and nervous tissue."},
          goodToKnow:"A tissue sample is a two-dimensional slice through a three-dimensional structure, so orientation can change the shapes seen under a microscope.",
          practiceConnection:"When reading a micrograph, first ask whether cells are tightly packed or widely separated by matrix; that question quickly narrows epithelial versus connective tissue.",
          activity:{
            prompt:"A sample contains cells packed into a continuous sheet with little extracellular matrix. Which class is most likely?",
            options:[
              {text:"Epithelial tissue",correct:true,feedback:"Correct. Closely packed cells forming a sheet are characteristic of epithelium."},
              {text:"Connective tissue",correct:false,feedback:"Connective tissue usually has more obvious extracellular matrix between cells."},
              {text:"Nervous tissue only because it is thin",correct:false,feedback:"Thickness alone does not identify nervous tissue."}
            ]
          }
        },
        {
          id:"structure-function",
          title:"Arrangement predicts function",
          highYield:"Thin tissues favor exchange; layered tissues favor protection; fiber-rich matrices favor mechanical support.",
          teaching:[
            "Tissue design reflects the job. A single layer of flat cells creates a short diffusion path, useful in lung air sacs and vessel lining. Many cell layers withstand friction at the skin or mouth. Tall absorptive cells provide room for transport machinery, while cilia move surface material.",
            "Connective tissues solve different problems through extracellular matrix. A loose matrix permits cushioning and diffusion, parallel collagen resists pull in one direction, cartilage provides resilient support, and mineralized bone resists compression. Structure–function reasoning is more durable than memorizing unrelated locations."
          ],
          keyPoints:[
            "Cell layers affect protection versus exchange.",
            "Cell shape provides clues to surface function.",
            "Fiber type and orientation affect mechanical strength.",
            "Matrix consistency ranges from fluid blood to rigid bone.",
            "Location should confirm, not replace, structural identification."
          ],
          visual:{
            title:"Design-to-job matches",
            kind:"matching-map",
            items:[
              {label:"Thin single layer",detail:"Rapid exchange or smooth low-friction lining."},
              {label:"Many layers",detail:"Protection from abrasion."},
              {label:"Parallel collagen",detail:"Tensile strength along one main axis."},
              {label:"Mineralized matrix",detail:"Rigid load-bearing support."},
              {label:"Fluid matrix",detail:"Transport of cells and dissolved substances."}
            ]
          },
          mnemonic:{title:"Shape serves the site",cue:"Structure → job → location",explanation:"Identify the structural clue, infer the job, then verify with a plausible location."},
          goodToKnow:"A tissue can remodel when workload changes, but remodeling capacity differs among tissues and depends partly on blood supply and cell turnover.",
          practiceConnection:"In digestive anatomy, a thin absorptive epithelium and underlying capillaries form a coordinated route for nutrient movement.",
          activity:{
            prompt:"Which design best supports rapid diffusion?",
            options:[
              {text:"A single layer of flattened cells",correct:true,feedback:"Correct. A thin barrier shortens diffusion distance."},
              {text:"Many layers of keratinized cells",correct:false,feedback:"That arrangement emphasizes protection, not rapid exchange."},
              {text:"A thick mineralized matrix",correct:false,feedback:"Mineralized matrix provides support and creates a much longer diffusion path."}
            ]
          }
        }
      ]
    },
    {
      id:"epithelium",
      title:"Classify coverings, linings, and glands",
      summary:"Name epithelia systematically, then distinguish secretions that use ducts from hormones entering tissue fluid and blood.",
      moments:[
        {
          id:"epithelial-classification",
          title:"Layer number and surface-cell shape name an epithelium",
          highYield:"Simple versus stratified describes layers; squamous, cuboidal, and columnar describe the cells at the free surface.",
          teaching:[
            "Epithelial tissue has an apical free surface and a basal surface attached to a basement membrane. It contains closely packed cells, has little extracellular matrix, and is avascular, receiving nutrients by diffusion from underlying connective tissue. Cell junctions help maintain a continuous boundary.",
            "Simple epithelium is one cell layer thick; stratified epithelium has multiple layers. Squamous cells are flat, cuboidal cells are roughly as tall as wide, and columnar cells are taller than wide. Pseudostratified epithelium appears layered because nuclei sit at different heights, but all cells contact the basement membrane. Transitional epithelium changes shape as a urinary organ stretches."
          ],
          keyPoints:[
            "The free surface is apical; the attached surface is basal.",
            "Epithelium rests on a basement membrane and lacks its own blood vessels.",
            "Simple means one layer; stratified means multiple layers.",
            "Use the shape of apical cells to name stratified epithelium.",
            "Pseudostratified and transitional are special arrangements, not exceptions to structure–function logic."
          ],
          visual:{
            title:"Epithelial naming grid",
            kind:"classification-grid",
            items:[
              {label:"Simple squamous",detail:"One thin layer; exchange and smooth lining."},
              {label:"Simple cuboidal",detail:"One cube-shaped layer; secretion and absorption."},
              {label:"Simple columnar",detail:"One tall-cell layer; absorption and secretion."},
              {label:"Stratified squamous",detail:"Many layers; protection from abrasion."},
              {label:"Pseudostratified",detail:"One layer that looks multilayered; often ciliated."},
              {label:"Transitional",detail:"Layered tissue whose surface cells change shape during stretch."}
            ]
          },
          mnemonic:{title:"Layers first, shape second",cue:"Simple/stratified + squamous/cuboidal/columnar",explanation:"The naming order prevents mixing cell shape with layer count."},
          goodToKnow:"Endothelium is simple squamous epithelium lining blood and lymphatic vessels; mesothelium is simple squamous epithelium forming serous membranes.",
          practiceConnection:"Simple columnar epithelium in the intestine supports absorption, while its goblet cells contribute protective mucus.",
          activity:{
            prompt:"A lining has one layer of tall cells with nuclei near the base. How should it be classified?",
            options:[
              {text:"Simple columnar epithelium",correct:true,feedback:"Correct. One layer is simple and tall cells are columnar."},
              {text:"Stratified squamous epithelium",correct:false,feedback:"That would have multiple layers and flattened apical cells."},
              {text:"Dense regular connective tissue",correct:false,feedback:"Connective tissue is classified by cells and matrix, not epithelial layers."}
            ]
          }
        },
        {
          id:"glands",
          title:"Glands specialize epithelial secretion",
          highYield:"Exocrine glands deliver through ducts to a surface; endocrine glands release hormones into interstitial fluid for distribution by blood.",
          teaching:[
            "Glandular epithelium produces and releases substances. Exocrine glands retain a connection to an epithelial surface through a duct. Their products include sweat, sebum, saliva, mucus, and digestive secretions. A unicellular goblet cell is a simple exocrine example, while multicellular glands may have branched ducts and secretory units.",
            "Endocrine glands are ductless. They release hormones into surrounding fluid, and the hormones enter blood to reach responsive targets. The route, not merely the chemical name, distinguishes the two categories. Some organs contain both exocrine and endocrine components."
          ],
          keyPoints:[
            "Exocrine products travel through ducts to an epithelial surface.",
            "Endocrine hormones enter tissue fluid and then circulation.",
            "Goblet cells are unicellular mucus-secreting exocrine glands.",
            "Gland shape can be simple or compound and tubular or acinar.",
            "One organ may perform both gland types."
          ],
          visual:{
            title:"Two secretion routes",
            kind:"split-path",
            items:[
              {label:"Exocrine cell",detail:"Product enters a duct."},
              {label:"Duct route",detail:"Duct opens onto a body surface or lumen."},
              {label:"Endocrine cell",detail:"Hormone enters nearby tissue fluid."},
              {label:"Blood route",detail:"Capillaries distribute hormone to target cells."}
            ]
          },
          mnemonic:{title:"EXits by a duct; ENters blood",cue:"EXocrine exits · ENdocrine enters",explanation:"The route words separate surface delivery from hormonal circulation."},
          goodToKnow:"The pancreas illustrates a mixed organ: digestive enzymes use ducts, whereas pancreatic hormones enter the circulation.",
          practiceConnection:"In nutrition physiology, pancreatic enzymes and insulin come from the same organ but use different tissue routes and serve different roles.",
          activity:{
            prompt:"A gland releases a product into a tube that opens into the small intestine. What type is it?",
            options:[
              {text:"Exocrine",correct:true,feedback:"Correct. Delivery through a duct to a lumen defines an exocrine route."},
              {text:"Endocrine",correct:false,feedback:"Endocrine secretions are ductless and enter tissue fluid and blood."},
              {text:"Nervous",correct:false,feedback:"Nervous tissue communicates by electrical and chemical signals but is not this gland category."}
            ]
          }
        }
      ]
    },
    {
      id:"connective-tissue",
      title:"Build with cells, fibers, and matrix",
      summary:"Read connective tissue by the composition and organization of its extracellular matrix.",
      moments:[
        {
          id:"loose-dense",
          title:"Connective tissue proper ranges from loose packing to strong fiber bundles",
          highYield:"Fibroblasts make matrix; collagen provides tensile strength, elastin permits recoil, and reticular fibers form delicate support networks.",
          teaching:[
            "Unlike epithelium, connective tissue usually has cells separated by extracellular matrix. Fibroblasts are major matrix-producing cells. The matrix includes ground substance plus fibers. Other resident or visiting cells can store fat, defend tissue, release mediators, or clear debris.",
            "Loose areolar tissue has open space, varied fibers, and fluid ground substance, making it useful beneath epithelia and around vessels. Adipose emphasizes lipid-storing cells, while reticular tissue forms soft scaffolds. Dense regular tissue aligns collagen in one direction, as in tendons and many ligaments; dense irregular tissue interweaves fibers to resist stress from several directions."
          ],
          keyPoints:[
            "Connective-tissue identity depends heavily on extracellular matrix.",
            "Fibroblasts produce fibers and ground-substance components.",
            "Collagen resists tension; elastin supports stretch and recoil.",
            "Loose tissue permits cushioning and exchange around other structures.",
            "Dense regular tissue is strong mainly along the direction of its parallel fibers."
          ],
          visual:{
            title:"Fiber architecture",
            kind:"texture-comparison",
            items:[
              {label:"Areolar",detail:"Loose mesh with space for fluid, vessels, and migrating cells."},
              {label:"Adipose",detail:"Large lipid-filled cells with storage, cushioning, and signaling roles."},
              {label:"Reticular",detail:"Fine branching scaffold supporting many free cells."},
              {label:"Dense regular",detail:"Parallel collagen bundles for one-direction pull."},
              {label:"Dense irregular",detail:"Interwoven collagen for multi-direction stress."}
            ]
          },
          mnemonic:{title:"Regular runs one way",cue:"Parallel = predictable pull",explanation:"Dense regular fibers align with the dominant direction of force."},
          goodToKnow:"Adipose tissue is metabolically active and communicates through signaling molecules; it is more than inert padding or stored fuel.",
          practiceConnection:"Adipose tissue stores triglyceride, while blood transports fuels and hormones; both are connective tissues with very different matrices.",
          activity:{
            prompt:"A tendon must resist strong pull along one main axis. Which tissue arrangement best fits?",
            options:[
              {text:"Dense regular connective tissue with parallel collagen",correct:true,feedback:"Correct. Parallel collagen is suited to tensile force in one direction."},
              {text:"Simple squamous epithelium",correct:false,feedback:"That thin epithelium supports exchange rather than strong tension."},
              {text:"Reticular tissue only",correct:false,feedback:"Reticular fibers form a delicate scaffold, not a tendon-like cable."}
            ]
          }
        },
        {
          id:"cartilage-bone-blood",
          title:"Supportive and fluid connective tissues modify the matrix",
          highYield:"Cartilage uses a resilient gel, bone uses mineralized matrix, and blood uses plasma as a fluid matrix.",
          teaching:[
            "Cartilage cells called chondrocytes occupy spaces called lacunae. Hyaline cartilage provides smooth resilient support, elastic cartilage bends and recoils, and fibrocartilage combines thick collagen with resistance to compression. Cartilage has limited direct blood supply, which helps explain its relatively slow repair.",
            "Bone has a collagen framework reinforced with mineral, producing rigid support and protection. Compact bone forms dense outer regions, while cancellous bone forms a lighter internal lattice. Blood is also connective tissue: formed elements such as red cells, white cells, and platelets are suspended in fluid plasma, allowing rapid transport."
          ],
          keyPoints:[
            "Chondrocytes sit in lacunae within cartilage matrix.",
            "Hyaline, elastic, and fibrocartilage differ in fiber emphasis and mechanical behavior.",
            "Bone matrix combines organic collagen with inorganic mineral.",
            "Compact and cancellous bone organize the same basic material differently.",
            "Blood has a fluid extracellular matrix called plasma."
          ],
          visual:{
            title:"Matrix consistency spectrum",
            kind:"continuum",
            items:[
              {label:"Blood",detail:"Fluid plasma permits rapid transport."},
              {label:"Cartilage",detail:"Firm, resilient matrix permits support with some flexibility."},
              {label:"Bone",detail:"Mineralized matrix provides rigid strength."},
              {label:"Shared principle",detail:"Cells are embedded or suspended within extracellular material."}
            ]
          },
          mnemonic:{title:"Hyaline smooth, elastic springs, fibro fights pressure",cue:"Smooth · spring · compression",explanation:"The cue separates the three cartilage types by their dominant mechanical role."},
          goodToKnow:"A lacuna is a space in matrix. Chondrocytes occupy cartilage lacunae and osteocytes occupy bone lacunae, so the surrounding matrix identifies the tissue.",
          practiceConnection:"Blood distributes absorbed nutrients, while bone stores minerals within a living, remodeling tissue; neither function is simply passive storage.",
          activity:{
            prompt:"Which observation best identifies blood as connective tissue?",
            options:[
              {text:"Cells and cell fragments are suspended in an extracellular plasma matrix.",correct:true,feedback:"Correct. Blood follows the connective-tissue plan with a fluid matrix."},
              {text:"Its cells form a continuous apical sheet.",correct:false,feedback:"That describes epithelium rather than blood."},
              {text:"It contains only neurons.",correct:false,feedback:"Blood contains formed elements, not a population of neurons."}
            ]
          }
        }
      ]
    },
    {
      id:"membranes",
      title:"Line and lubricate body spaces",
      summary:"Distinguish membranes by the epithelium, connective tissue, and body space involved.",
      moments:[
        {
          id:"body-membranes",
          title:"Mucous, serous, and synovial membranes occupy different spaces",
          highYield:"Mucous membranes line passages open to the exterior, serous membranes line closed ventral cavities, and synovial membranes line movable joint cavities.",
          teaching:[
            "A mucous membrane combines an epithelium with underlying connective tissue and lines a tract that communicates with the exterior, such as digestive, respiratory, urinary, or reproductive passages. Its mucus or other surface secretions protect, lubricate, or trap material according to location.",
            "A serous membrane has a parietal layer lining a cavity wall and a visceral layer covering an organ. A thin serous fluid reduces friction in spaces such as pleura, pericardium, and peritoneum. Synovial membranes are connective-tissue membranes without a true epithelial layer; they line freely movable joint cavities and produce lubricating synovial fluid."
          ],
          keyPoints:[
            "Mucous membranes line passages connected to the outside.",
            "Serous membranes have parietal and visceral layers in closed ventral cavities.",
            "Pleura, pericardium, and peritoneum are major serous membranes.",
            "Synovial membranes line joint cavities and are not classic epithelial membranes.",
            "Fluid reduces friction where surfaces move."
          ],
          visual:{
            title:"Membrane location map",
            kind:"three-column",
            items:[
              {label:"Mucous",detail:"Open tract; epithelium plus lamina propria; secretion varies by site."},
              {label:"Serous",detail:"Closed cavity; parietal wall layer and visceral organ layer."},
              {label:"Synovial",detail:"Movable joint cavity; connective lining and lubricating fluid."}
            ]
          },
          mnemonic:{title:"Mucous meets outside; serous surrounds organs; synovial serves joints",cue:"Open · closed · joint",explanation:"The location cue distinguishes membranes more reliably than secretion alone."},
          goodToKnow:"Serous layers are continuous, like a fist pushed into a partly inflated balloon; the fist represents the organ and the double balloon wall represents visceral and parietal layers.",
          practiceConnection:"The intestinal mucosa is both a protective boundary and an absorptive interface, so epithelial integrity and underlying blood flow both matter for nutrient transfer.",
          activity:{
            prompt:"Which membrane directly covers a lung surface?",
            options:[
              {text:"Visceral pleura",correct:true,feedback:"Correct. The visceral serous layer adheres to the organ surface."},
              {text:"Parietal peritoneum",correct:false,feedback:"The peritoneum is associated with the abdominopelvic cavity, not the lung."},
              {text:"Synovial membrane",correct:false,feedback:"Synovial membranes line movable joints."}
            ]
          }
        }
      ]
    },
    {
      id:"muscle-nervous",
      title:"Create movement and communication",
      summary:"Compare the three muscle tissues and trace information through a neuron with supporting glial cells.",
      moments:[
        {
          id:"muscle-types",
          title:"Three muscle tissues produce force in different settings",
          highYield:"Skeletal muscle is striated and usually voluntary; cardiac muscle is striated, branching, and involuntary; smooth muscle is nonstriated and involuntary.",
          teaching:[
            "Skeletal muscle fibers are long, cylindrical, multinucleated, and visibly striated. They attach directly or indirectly to the skeleton and generate voluntary movement, posture, and heat. Neural control can be conscious, although many postural adjustments are automatic.",
            "Cardiac muscle forms the heart wall. Its striated branching cells connect through intercalated discs that support coordinated activity. Smooth muscle lacks visible striations and forms sheets around hollow organs and vessels, where slow sustained contractions move contents or change diameter."
          ],
          keyPoints:[
            "Skeletal: long, striated, multinucleated fibers; usually voluntary.",
            "Cardiac: branching striated cells with intercalated discs; involuntary.",
            "Smooth: spindle-shaped nonstriated cells; involuntary.",
            "All muscle tissue develops tension through interactions of contractile proteins.",
            "Location and cell architecture help distinguish the three types."
          ],
          visual:{
            title:"Muscle identity cards",
            kind:"comparison",
            items:[
              {label:"Skeletal",detail:"Parallel striated fibers; multiple nuclei; moves the skeleton."},
              {label:"Cardiac",detail:"Branching striated cells; intercalated discs; pumps blood."},
              {label:"Smooth",detail:"Spindle-shaped nonstriated cells; moves contents and regulates tubes."}
            ]
          },
          mnemonic:{title:"Skeleton stripes; heart branches; hollow organs smooth",cue:"Stripes · branches · smooth",explanation:"The visual cue connects each muscle type with its most recognizable appearance and location."},
          goodToKnow:"Peristalsis is a coordinated wave of smooth-muscle contraction that propels material through a hollow organ such as the digestive tract.",
          practiceConnection:"Digestive motility is a tissue-level process: smooth muscle moves contents while nervous and hormonal signals regulate timing.",
          activity:{
            prompt:"A tissue has branching striated cells joined by intercalated discs. What is it?",
            options:[
              {text:"Cardiac muscle",correct:true,feedback:"Correct. Branching striated cells and intercalated discs identify cardiac tissue."},
              {text:"Smooth muscle",correct:false,feedback:"Smooth muscle is nonstriated and spindle-shaped."},
              {text:"Dense regular connective tissue",correct:false,feedback:"Dense regular tissue has parallel collagen bundles, not contractile striations."}
            ]
          }
        },
        {
          id:"nervous-tissue",
          title:"Neurons signal; glial cells sustain the signaling environment",
          highYield:"Dendrites usually receive, the cell body integrates, and the axon carries a signal toward its endings.",
          teaching:[
            "A neuron has a cell body containing the nucleus and most biosynthetic machinery, dendrites that commonly receive input, and one axon that conducts an electrical signal toward axon endings. At a synapse, the neuron communicates with another neuron, muscle cell, gland cell, or sensory partner.",
            "Neuroglia are diverse supporting cells. Depending on location and type, they regulate the chemical environment, form insulating myelin, support immune defense, nourish neurons, or contribute to barriers. Nervous tissue function therefore depends on neuron–glia cooperation rather than neurons acting alone."
          ],
          keyPoints:[
            "The neuronal cell body contains the nucleus and integrates inputs.",
            "Dendrites generally receive information toward the cell body.",
            "The axon conducts a signal away from the cell body to endings.",
            "Synapses transfer information to another cell.",
            "Glia support, protect, insulate, and regulate the neuronal environment."
          ],
          visual:{
            title:"Neuron information path",
            kind:"directional-flow",
            items:[
              {label:"Dendrites",detail:"Receive many incoming signals."},
              {label:"Cell body",detail:"Integrates inputs and maintains the cell."},
              {label:"Axon",detail:"Conducts the action signal over distance."},
              {label:"Axon endings",detail:"Communicate with the next target at synapses."},
              {label:"Glia",detail:"Maintain conditions that make reliable signaling possible."}
            ]
          },
          mnemonic:{title:"Dendrites detect; axons announce",cue:"D in · A out",explanation:"The phrase captures the usual direction of information relative to the cell body."},
          goodToKnow:"Neurons vary widely in shape and function. The basic dendrite–body–axon map is a powerful model, but specialized sensory neurons may not fit the simplest drawing perfectly.",
          practiceConnection:"Appetite, digestive secretion, and gut motility involve neural signaling, but tissue anatomy alone does not explain all behavioral or clinical outcomes.",
          activity:{
            prompt:"Which neuronal structure carries a signal toward axon endings?",
            options:[
              {text:"Axon",correct:true,feedback:"Correct. The axon conducts signals away from the cell body toward its endings."},
              {text:"Basement membrane",correct:false,feedback:"A basement membrane supports epithelium and is not part of a neuron."},
              {text:"Collagen bundle",correct:false,feedback:"Collagen provides connective-tissue strength rather than neuronal conduction."}
            ]
          }
        }
      ]
    }
  ],
  caseStudy:{
    title:"Map the wall of the small intestine",
    scenario:"A cross-section of small intestine shows a tall absorptive lining with goblet cells, loose connective tissue containing capillaries, bands of smooth muscle, and nerve fibers coordinating movement and secretion.",
    prompts:[
      "Classify the epithelial lining and explain why its structure suits absorption.",
      "Identify the tissue beneath the epithelium and explain how it supports nutrient transfer.",
      "Explain the distinct roles of goblet cells, smooth muscle, and nervous tissue.",
      "Trace an absorbed water-soluble nutrient from the epithelial surface toward a blood vessel without treating tissues as isolated layers."
    ],
    takeaway:"An organ works because multiple tissue classes form an integrated route: boundary and absorption, support and transport, movement, and regulation."
  },
  recap:[
    "The four primary tissue classes are epithelial, connective, muscle, and nervous.",
    "Epithelia are named by layer number and apical-cell shape, with special pseudostratified and transitional forms.",
    "Exocrine glands use ducts; endocrine glands release hormones to tissue fluid and blood.",
    "Connective tissues vary mainly through cells, fibers, and ground substance in the extracellular matrix.",
    "Cartilage, bone, and blood are connective tissues with firm, mineralized, and fluid matrices.",
    "Mucous, serous, and synovial membranes differ in body-space connection and tissue construction.",
    "Skeletal, cardiac, and smooth muscle create force; neurons and glia coordinate communication."
  ],
  flashcards:[
    {front:"Name the four primary tissue classes.",back:"Epithelial, connective, muscle, and nervous.",tag:"overview"},
    {front:"How is an epithelium named?",back:"By number of cell layers and the shape of cells at its free surface.",tag:"epithelium"},
    {front:"Why is epithelium called avascular?",back:"It contains no blood vessels and receives nutrients by diffusion from underlying connective tissue.",tag:"epithelium"},
    {front:"What is pseudostratified epithelium?",back:"A single layer in which nuclei appear at different heights, making it look multilayered.",tag:"epithelium"},
    {front:"Contrast exocrine and endocrine glands.",back:"Exocrine glands use ducts to a surface or lumen; endocrine glands release hormones into tissue fluid and blood.",tag:"glands"},
    {front:"What is extracellular matrix?",back:"Ground substance and fibers surrounding connective-tissue cells.",tag:"connective"},
    {front:"Contrast dense regular and dense irregular connective tissue.",back:"Regular has mainly parallel collagen for one-direction pull; irregular has interwoven collagen for stress from several directions.",tag:"connective"},
    {front:"Name the three cartilage types.",back:"Hyaline, elastic, and fibrocartilage.",tag:"cartilage"},
    {front:"Why is blood connective tissue?",back:"Its cells and cell fragments are suspended in an extracellular fluid matrix called plasma.",tag:"blood"},
    {front:"What do parietal and visceral mean in a serous membrane?",back:"Parietal lines the cavity wall; visceral covers the organ.",tag:"membranes"},
    {front:"Distinguish the three muscle tissues.",back:"Skeletal is striated and usually voluntary; cardiac is branching, striated, and involuntary; smooth is nonstriated and involuntary.",tag:"muscle"},
    {front:"State the usual direction through a neuron.",back:"Dendrites receive toward the cell body; the axon conducts toward axon endings.",tag:"nervous"}
  ],
  practice:[
    {prompt:"A sample has one layer of flat cells lining a vessel. Classify it fully.",answer:"Simple squamous epithelium, specifically endothelium in a vessel.",rationale:"One layer is simple, flat cells are squamous, and vessel lining is endothelium.",tag:"epithelium"},
    {prompt:"Why can stratified squamous epithelium protect against abrasion better than simple squamous epithelium?",answer:"It has multiple cell layers, so superficial cells can be lost while deeper layers preserve the barrier.",rationale:"Layer number matches mechanical demand.",tag:"epithelium"},
    {prompt:"A secretion enters a capillary without using a duct. What gland category is involved?",answer:"Endocrine.",rationale:"Ductless release into tissue fluid and blood defines endocrine secretion.",tag:"glands"},
    {prompt:"Compare epithelium with connective tissue in cell spacing and matrix.",answer:"Epithelium has tightly packed cells and little matrix; connective tissue usually has more widely spaced cells in abundant matrix.",rationale:"This is a strong first distinction on a micrograph.",tag:"overview"},
    {prompt:"Which connective tissue best resists pulling along a tendon, and why?",answer:"Dense regular connective tissue because parallel collagen bundles align with the main force.",rationale:"Fiber orientation determines tensile performance.",tag:"connective"},
    {prompt:"Identify the cells and spaces seen in cartilage.",answer:"Chondrocytes occupy lacunae within cartilage matrix.",rationale:"Both terms are key histologic landmarks.",tag:"cartilage"},
    {prompt:"Contrast compact and cancellous bone.",answer:"Compact bone is dense and forms strong outer regions; cancellous bone is a lighter internal lattice with spaces.",rationale:"They organize mineralized matrix differently.",tag:"bone"},
    {prompt:"What is the difference between visceral pleura and parietal pleura?",answer:"Visceral pleura covers the lung; parietal pleura lines the thoracic cavity wall.",rationale:"Visceral is organ-facing and parietal is wall-facing.",tag:"membranes"},
    {prompt:"A tissue is striated, involuntary, and joined by intercalated discs. Identify it.",answer:"Cardiac muscle.",rationale:"That combination is distinctive for the heart wall.",tag:"muscle"},
    {prompt:"How does smooth muscle support digestion?",answer:"Coordinated contraction changes lumen diameter and propels contents through peristalsis.",rationale:"Smooth muscle forms functional layers in the digestive tract.",tag:"muscle"},
    {prompt:"What roles do glial cells play in nervous tissue?",answer:"They support, protect, insulate, nourish, and regulate the environment in which neurons signal.",rationale:"Reliable communication depends on neuron–glia cooperation.",tag:"nervous"}
  ]
};
