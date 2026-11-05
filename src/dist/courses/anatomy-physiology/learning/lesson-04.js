window.AP_LEARNING=window.AP_LEARNING||{};
window.AP_LEARNING['lesson-4']={
  version:1,
  title:"Cellular Metabolism and Reproduction",
  chapter:"Chapter 4",
  duration:"95–120 minutes",
  outcomes:[
    "Distinguish catabolic and anabolic pathways and explain why ATP couples energy release to cellular work.",
    "Trace carbon and energy through glycolysis, pyruvate oxidation, the citric acid cycle, and electron transport.",
    "Compare aerobic respiration with lactate formation and alcoholic fermentation.",
    "Relate DNA structure and replication to the cell cycle.",
    "Sequence mitosis and explain how it supports growth and tissue repair.",
    "Explain how meiosis reduces chromosome number and increases genetic variation in gametes."
  ],
  modules:[
    {
      id:"metabolic-logic",
      title:"Think in energy pathways",
      summary:"Learn the language of metabolism before following glucose through the cell.",
      moments:[
        {
          id:"metabolism-atp",
          title:"Metabolism links breakdown, building, and cellular work",
          highYield:"Catabolism releases usable energy from larger molecules; anabolism uses energy to build larger molecules; ATP transfers energy between them.",
          teaching:[
            "Metabolism is the complete network of chemical reactions occurring in a cell. Catabolic pathways dismantle molecules and can capture some released energy. Anabolic pathways assemble molecules required for growth, repair, storage, and function. The two sets are coordinated rather than operating as independent switches.",
            "ATP is a short-term energy carrier. Energy released by favorable reactions can be captured when ATP is formed, and ATP hydrolysis can then help drive transport, movement, synthesis, and signaling. ATP is not a nutrient stored in large quantities; cells continually regenerate it from ADP and phosphate."
          ],
          keyPoints:[
            "Catabolism breaks down; anabolism builds up.",
            "ATP couples energy-releasing reactions to energy-requiring work.",
            "Cells continually recycle ATP rather than stockpiling a lifetime supply.",
            "Enzymes and cellular conditions regulate pathway rate and direction."
          ],
          visual:{
            title:"The ATP coupling cycle",
            kind:"cycle",
            items:[
              {label:"Fuel breakdown",detail:"Catabolic reactions release chemical energy."},
              {label:"ATP regeneration",detail:"Part of that energy is captured as ATP from ADP plus phosphate."},
              {label:"Cellular work",detail:"ATP hydrolysis supports transport, movement, and synthesis."},
              {label:"ADP return",detail:"ADP and phosphate re-enter the cycle."}
            ]
          },
          mnemonic:{title:"CAT cuts; ANA assembles",cue:"Catabolism cuts · Anabolism assembles",explanation:"The verbs distinguish the two complementary directions of metabolism."},
          goodToKnow:"A food calorie measures energy content; ATP is the molecular transfer currency cells use to apply captured energy to work. The terms are related but not interchangeable.",
          practiceConnection:"A nutrition professional can describe carbohydrate, fat, and protein as metabolic substrates without implying that a food molecule becomes ATP intact.",
          activity:{
            prompt:"Which process is anabolic?",
            options:[
              {text:"Linking amino acids to build a cellular protein",correct:true,feedback:"Correct. Building a larger molecule from smaller units is anabolic."},
              {text:"Splitting glucose during glycolysis",correct:false,feedback:"Glycolysis is a catabolic breakdown pathway."},
              {text:"Digesting a worn organelle",correct:false,feedback:"Breakdown and recycling are catabolic processes."}
            ]
          }
        },
        {
          id:"glycolysis",
          title:"Glycolysis starts glucose breakdown in the cytosol",
          highYield:"One six-carbon glucose becomes two three-carbon pyruvate molecules, with a small net ATP gain and reduced electron carriers.",
          teaching:[
            "Glycolysis is a sequence of enzyme-controlled reactions in the cytosol. An early investment phase uses ATP to activate glucose. Later reactions split and rearrange the carbon skeleton, producing two pyruvate and capturing energy in ATP and NADH. The pathway does not directly require oxygen.",
            "Because glycolysis occurs outside mitochondria, it can provide ATP quickly and can continue under limited oxygen if NADH is reoxidized. Its direct ATP yield is modest compared with the complete aerobic pathway, so glycolysis is the opening stage rather than the whole story of cellular respiration."
          ],
          keyPoints:[
            "Location: cytosol.",
            "Carbon result: one glucose becomes two pyruvate.",
            "Energy result: a small net amount of ATP plus NADH.",
            "Oxygen is not a direct reactant in glycolysis.",
            "The fate of pyruvate depends on cellular conditions."
          ],
          visual:{
            title:"Glycolysis carbon ledger",
            kind:"process-flow",
            items:[
              {label:"Glucose",detail:"One six-carbon starting molecule."},
              {label:"Investment",detail:"ATP is used to prepare the molecule for splitting."},
              {label:"Two three-carbon pathways",detail:"The reactions proceed twice after the split."},
              {label:"Pyruvate",detail:"Two three-carbon end products remain."},
              {label:"Captured energy",detail:"A small net ATP gain and NADH are produced."}
            ]
          },
          mnemonic:{title:"Split, harvest, decide",cue:"Glucose splits · energy is harvested · pyruvate fate is decided",explanation:"The three-part cue captures the logic without memorizing every intermediate first."},
          goodToKnow:"Glycolysis makes four ATP but uses two earlier in the pathway, so its direct net gain is two ATP per glucose.",
          practiceConnection:"Carbohydrate digestion supplies monosaccharides, but entry into cellular pathways depends on absorption, transport, hormones, and tissue needs.",
          activity:{
            prompt:"Which statement about glycolysis is accurate?",
            options:[
              {text:"It occurs in the cytosol and produces two pyruvate per glucose.",correct:true,feedback:"Correct. That location and carbon outcome define the pathway."},
              {text:"It occurs only inside the nucleus.",correct:false,feedback:"Glycolysis is a cytosolic pathway."},
              {text:"It directly uses oxygen to split water.",correct:false,feedback:"Oxygen is not a direct glycolysis reactant."}
            ]
          }
        }
      ]
    },
    {
      id:"aerobic-respiration",
      title:"Complete aerobic respiration",
      summary:"Move pyruvate into mitochondria, harvest electrons, and use oxygen at the end of the chain.",
      moments:[
        {
          id:"citric-cycle",
          title:"Pyruvate links glycolysis to the citric acid cycle",
          highYield:"Pyruvate is converted to acetyl-CoA; the citric acid cycle releases carbon dioxide and loads electron carriers.",
          teaching:[
            "Under aerobic conditions, pyruvate enters a mitochondrion and is converted to acetyl-CoA, producing carbon dioxide and NADH. Acetyl-CoA then joins a four-carbon acceptor in the citric acid cycle, also called the Krebs cycle. The cycle regenerates its starting acceptor so another acetyl group can enter.",
            "For each turn, carbon leaves as carbon dioxide, a small amount of ATP or an equivalent is formed, and much of the available energy is transferred to NADH and FADH2. The cycle is therefore best viewed as an electron-carrier loading system rather than the main direct source of ATP."
          ],
          keyPoints:[
            "Pyruvate oxidation produces acetyl-CoA before the cycle begins.",
            "The citric acid cycle operates in the mitochondrial matrix.",
            "Carbon dioxide is released during pyruvate oxidation and the cycle.",
            "NADH and FADH2 carry high-energy electrons onward.",
            "Only a small portion of ATP is made directly in the cycle."
          ],
          visual:{
            title:"Mitochondrial carbon route",
            kind:"cycle-and-entry",
            items:[
              {label:"Pyruvate entry",detail:"The three-carbon product of glycolysis enters the mitochondrion."},
              {label:"Acetyl-CoA",detail:"A two-carbon acetyl group is linked to coenzyme A."},
              {label:"Cycle entry",detail:"The acetyl group joins a regenerated four-carbon acceptor."},
              {label:"Carbon exit",detail:"Carbon dioxide leaves during oxidation steps."},
              {label:"Carrier loading",detail:"NADH and FADH2 collect electrons for the next stage."}
            ]
          },
          mnemonic:{title:"Acetyl enters; carriers exit loaded",cue:"A in, CO2 out, NADH/FADH2 loaded",explanation:"The cue tracks the main inputs and outputs without treating the cycle as a simple ATP factory."},
          goodToKnow:"The cycle name refers to regeneration of the starting acceptor; acetyl carbon enters each turn while oxidized carbon eventually exits as carbon dioxide.",
          practiceConnection:"Fatty acids and some amino acids can enter energy metabolism at acetyl-CoA or other pathway intermediates, so glucose is not the only cellular fuel.",
          activity:{
            prompt:"What is the main energy-related output of the citric acid cycle?",
            options:[
              {text:"Reduced electron carriers such as NADH and FADH2",correct:true,feedback:"Correct. The cycle primarily loads carriers that feed electron transport."},
              {text:"A large stockpile of glucose",correct:false,feedback:"The pathway oxidizes carbon fuel rather than storing glucose."},
              {text:"Messenger RNA",correct:false,feedback:"mRNA is produced by transcription, not the citric acid cycle."}
            ]
          }
        },
        {
          id:"electron-transport",
          title:"Electron transport creates the gradient that drives most ATP formation",
          highYield:"Electrons move through inner-membrane carriers; their energy pumps protons, and oxygen accepts electrons at the end.",
          teaching:[
            "NADH and FADH2 donate electrons to a chain of carriers in the inner mitochondrial membrane. As electrons move toward lower-energy states, selected complexes use released energy to pump hydrogen ions across the membrane. This creates an electrochemical gradient, storing potential energy.",
            "Hydrogen ions flow back through ATP synthase, which couples that flow to ATP formation. Oxygen is the terminal electron acceptor and combines with electrons and hydrogen ions to form water. If oxygen is unavailable, the chain backs up and oxidative ATP production cannot continue normally."
          ],
          keyPoints:[
            "The electron transport chain is embedded in the inner mitochondrial membrane.",
            "Electron energy pumps protons and builds a gradient.",
            "ATP synthase uses proton flow to phosphorylate ADP.",
            "Oxygen accepts electrons at the end and contributes to water formation.",
            "Most ATP from complete aerobic glucose oxidation is formed here."
          ],
          visual:{
            title:"Electron-to-ATP converter",
            kind:"membrane-gradient",
            items:[
              {label:"NADH/FADH2",detail:"Deliver high-energy electrons."},
              {label:"Carrier chain",detail:"Transfers electrons and powers proton pumping."},
              {label:"Proton gradient",detail:"Stores energy across the inner membrane."},
              {label:"ATP synthase",detail:"Uses proton return to make ATP."},
              {label:"Oxygen",detail:"Receives electrons at the chain end and supports water formation."}
            ]
          },
          mnemonic:{title:"Electrons pump; protons power",cue:"e− move → H+ gradient → ATP",explanation:"Electron movement builds the gradient, and proton flow through ATP synthase powers ATP production."},
          goodToKnow:"Older textbook accounting often gives one fixed ATP total per glucose. Modern estimates vary with cell type, shuttle systems, and coupling efficiency, so pathway logic is more dependable than a universal number.",
          practiceConnection:"Breathing supplies oxygen to blood, but cellular oxygen delivery also depends on circulation and diffusion to tissues; the nutrient and respiratory systems converge at mitochondria.",
          activity:{
            prompt:"What directly powers ATP synthase during oxidative phosphorylation?",
            options:[
              {text:"Hydrogen ions flowing down their electrochemical gradient",correct:true,feedback:"Correct. Proton flow through ATP synthase is coupled to ATP formation."},
              {text:"DNA moving out of the nucleus",correct:false,feedback:"DNA remains the genetic template and does not power ATP synthase."},
              {text:"Carbon dioxide binding to glucose",correct:false,feedback:"Carbon dioxide is an oxidation product, not the immediate energy source for ATP synthase."}
            ]
          }
        }
      ]
    },
    {
      id:"alternative-fates",
      title:"Adapt when oxygen or fuel changes",
      summary:"Compare fermentation routes and see where fat and protein can enter shared metabolic pathways.",
      moments:[
        {
          id:"anaerobic-pathways",
          title:"Fermentation regenerates NAD+ so glycolysis can continue",
          highYield:"When electron transport cannot reoxidize NADH fast enough, cells can transfer electrons to an organic molecule and preserve glycolytic ATP production.",
          teaching:[
            "In human cells under limited oxygen availability or very high demand, pyruvate can accept electrons from NADH and become lactate. This regenerates NAD+, which glycolysis needs. The process does not add extra ATP beyond the ATP already made by glycolysis, but it allows that small supply to continue temporarily.",
            "Some microorganisms use alcoholic fermentation, converting pyruvate through acetaldehyde to ethanol and carbon dioxide while regenerating NAD+. Human muscle does not make ethanol as its normal anaerobic route. Fermentation should therefore be described by organism and end product rather than treated as one universal reaction."
          ],
          keyPoints:[
            "The immediate purpose of fermentation is NAD+ regeneration.",
            "Lactate formation is the relevant human pathway discussed here.",
            "Alcoholic fermentation produces ethanol and carbon dioxide in organisms such as yeast.",
            "Fermentation relies on glycolysis for its ATP.",
            "Anaerobic output is limited compared with complete aerobic oxidation."
          ],
          visual:{
            title:"Two pyruvate branches",
            kind:"branching-path",
            items:[
              {label:"Shared start",detail:"Glycolysis produces pyruvate, NADH, and a small ATP gain."},
              {label:"Human lactate branch",detail:"Pyruvate accepts electrons and NAD+ is regenerated."},
              {label:"Yeast alcohol branch",detail:"Acetaldehyde becomes ethanol; carbon dioxide is released."},
              {label:"Aerobic branch",detail:"Pyruvate enters mitochondrial oxidation when conditions support it."}
            ]
          },
          mnemonic:{title:"Fermentation frees NAD+",cue:"NAD+ back, glycolysis on",explanation:"The key result is carrier recycling, not a large extra ATP reward."},
          goodToKnow:"Lactate is not simply metabolic waste; it can be transported and used in other metabolic pathways. This lesson focuses on pathway logic rather than exercise prescriptions.",
          practiceConnection:"A learner should not equate the burning sensation of intense activity with lactate itself; several changes accompany high-rate metabolism.",
          activity:{
            prompt:"Why does lactate formation help glycolysis continue?",
            options:[
              {text:"It regenerates NAD+ from NADH.",correct:true,feedback:"Correct. Glycolysis needs oxidized NAD+ to accept more electrons."},
              {text:"It creates oxygen inside the cell.",correct:false,feedback:"The pathway does not manufacture oxygen."},
              {text:"It produces a large amount of mitochondrial ATP.",correct:false,feedback:"The ATP comes from glycolysis and remains limited."}
            ]
          }
        },
        {
          id:"other-fuels",
          title:"Fat and protein feed the same metabolic network at different entry points",
          highYield:"Glycerol, fatty acids, and amino-acid carbon skeletons can enter glycolysis, acetyl-CoA formation, or the citric acid cycle after appropriate processing.",
          teaching:[
            "Triglycerides are separated into glycerol and fatty acids. Glycerol can be converted to a glycolytic intermediate, while fatty acids are shortened through beta oxidation to produce acetyl-CoA and reduced carriers. This explains why fat is energy-dense and why its complete oxidation depends on mitochondrial pathways.",
            "Amino acids can contribute to energy metabolism after removal or transfer of their nitrogen-containing amino group. The remaining carbon skeleton enters at different points depending on the amino acid. Nitrogen requires separate handling, so protein use is not identical to carbohydrate or fat oxidation."
          ],
          keyPoints:[
            "Glycerol can enter near the glycolytic pathway.",
            "Beta oxidation converts fatty acids into acetyl-CoA units and electron carriers.",
            "Amino acids require nitrogen handling before carbon skeletons enter energy pathways.",
            "Multiple fuels converge on shared mitochondrial reactions.",
            "Fuel use depends on cellular state and regulation, not one nutrient in isolation."
          ],
          visual:{
            title:"Fuel convergence map",
            kind:"converging-flow",
            items:[
              {label:"Carbohydrate",detail:"Glucose enters glycolysis and forms pyruvate."},
              {label:"Fat",detail:"Glycerol approaches glycolysis; fatty acids form acetyl-CoA."},
              {label:"Protein",detail:"Amino-acid carbon skeletons enter at several metabolic points."},
              {label:"Shared hub",detail:"Acetyl-CoA, citric acid cycle, and electron transport integrate fuel oxidation."}
            ]
          },
          mnemonic:{title:"Glycerol joins, fatty acids fragment, amino acids adapt",cue:"Join · Fragment · Adapt",explanation:"The three verbs distinguish the main routes without suggesting all fuels enter at the same point."},
          goodToKnow:"Metabolic flexibility means several fuels can contribute, but tissue type, hormonal state, oxygen supply, and recent intake influence which pathways are most active.",
          practiceConnection:"This shared map helps explain why macronutrient metabolism is integrated; it does not by itself determine an appropriate eating pattern for an individual.",
          activity:{
            prompt:"Which product of fatty-acid beta oxidation enters the citric acid cycle pathway?",
            options:[
              {text:"Acetyl-CoA",correct:true,feedback:"Correct. Fatty acids are shortened into acetyl-CoA units."},
              {text:"Messenger RNA",correct:false,feedback:"mRNA carries genetic information and is not a fuel intermediate."},
              {text:"Lactic acid as the only product",correct:false,feedback:"Fatty-acid oxidation does not require conversion to lactate as its sole route."}
            ]
          }
        }
      ]
    },
    {
      id:"dna-cell-cycle",
      title:"Copy information and divide a somatic cell",
      summary:"Connect complementary DNA structure to replication, then place mitosis inside the full cell cycle.",
      moments:[
        {
          id:"dna-replication",
          title:"Complementary DNA strands make accurate copying possible",
          highYield:"A pairs with T and C pairs with G; each original strand can guide synthesis of a complementary new strand.",
          teaching:[
            "DNA consists of two antiparallel nucleotide strands twisted into a double helix. Each nucleotide contains deoxyribose, phosphate, and one nitrogenous base. Adenine pairs with thymine through hydrogen bonds, while cytosine pairs with guanine. The base sequence carries genetic information.",
            "Before division, the strands separate and each acts as a template for a new complementary strand. The result is two DNA molecules, each containing one old strand and one newly synthesized strand. Proofreading and repair improve accuracy, although replication errors can still occur."
          ],
          keyPoints:[
            "A DNA nucleotide contains sugar, phosphate, and a base.",
            "Complementary base pairing is A–T and C–G.",
            "Base sequence stores information.",
            "Replication is semiconservative: each product contains one original strand.",
            "DNA must be copied before a cell can distribute chromosomes."
          ],
          visual:{
            title:"Copy by complement",
            kind:"molecular-sequence",
            items:[
              {label:"Parental helix",detail:"Two complementary DNA strands are paired."},
              {label:"Strand separation",detail:"Hydrogen-bonded base pairs separate."},
              {label:"Template reading",detail:"Each exposed base directs a complementary nucleotide."},
              {label:"Two helices",detail:"Each contains one original and one new strand."}
            ]
          },
          mnemonic:{title:"Apples in Trees; Cars in Garages",cue:"A–T · C–G",explanation:"The paired images cue the two complementary DNA base pairs."},
          goodToKnow:"Watson and Crick proposed the double-helix model using crucial evidence that included Rosalind Franklin and Maurice Wilkins, along with base-pair findings from Erwin Chargaff.",
          practiceConnection:"Genetic variation can influence nutrient metabolism, but a gene result rarely replaces a complete clinical and dietary assessment.",
          activity:{
            prompt:"If one DNA strand reads A-C-G-T, what is the complementary sequence?",
            options:[
              {text:"T-G-C-A",correct:true,feedback:"Correct. A pairs with T, and C pairs with G."},
              {text:"A-C-G-T",correct:false,feedback:"The complementary strand uses paired bases rather than repeating the same sequence."},
              {text:"U-G-C-A",correct:false,feedback:"Uracil belongs to RNA; DNA uses thymine."}
            ]
          }
        },
        {
          id:"cell-cycle-mitosis",
          title:"Mitosis distributes duplicated chromosomes to two nuclei",
          highYield:"Interphase prepares and copies DNA; mitosis separates duplicated chromosomes; cytokinesis divides the cell.",
          teaching:[
            "The cell cycle includes interphase and a division phase. During interphase, a cell grows, performs normal functions, duplicates DNA, and prepares division machinery. Interphase is active preparation, not a resting pause. After replication, each chromosome consists of sister chromatids joined at a centromere.",
            "In prophase chromosomes condense and the spindle forms; in metaphase chromosomes align; in anaphase sister chromatids separate; in telophase new nuclear regions form. Cytokinesis partitions the cytoplasm. The resulting daughter cells normally receive equivalent chromosome sets for growth, replacement, and repair."
          ],
          keyPoints:[
            "DNA replication occurs before mitosis, during interphase.",
            "Prophase condenses, metaphase aligns, anaphase separates, telophase re-forms nuclei.",
            "Sister chromatids separate during anaphase.",
            "Cytokinesis divides cytoplasm after or alongside nuclear division.",
            "Cell-cycle checkpoints help prevent damaged or incomplete cells from progressing."
          ],
          visual:{
            title:"Mitosis chromosome choreography",
            kind:"timeline",
            items:[
              {label:"Interphase",detail:"Grow, function, replicate DNA, prepare."},
              {label:"Prophase",detail:"Condense chromosomes and assemble spindle."},
              {label:"Metaphase",detail:"Align duplicated chromosomes at the middle."},
              {label:"Anaphase",detail:"Separate sister chromatids toward opposite poles."},
              {label:"Telophase + cytokinesis",detail:"Re-form nuclei and partition the cell."}
            ]
          },
          mnemonic:{title:"Prepare, Meet, Apart, Two",cue:"Prophase · Metaphase · Anaphase · Telophase",explanation:"The action words cue the PMAT order and the main chromosome event in each stage."},
          goodToKnow:"Cancer involves loss of normal controls on cell growth and division. Carcinogens can increase risk by damaging DNA, but cancer biology is multi-step and cannot be inferred from one exposure alone.",
          practiceConnection:"Tissue renewal depends on controlled division; nutrition supports normal cellular processes but is not a stand-alone treatment for uncontrolled growth.",
          activity:{
            prompt:"During which mitotic stage do sister chromatids move toward opposite poles?",
            options:[
              {text:"Anaphase",correct:true,feedback:"Correct. Anaphase separates sister chromatids."},
              {text:"Metaphase",correct:false,feedback:"Metaphase aligns duplicated chromosomes before separation."},
              {text:"Interphase",correct:false,feedback:"Interphase includes growth and DNA replication, not chromatid separation."}
            ]
          }
        }
      ]
    },
    {
      id:"meiosis",
      title:"Reduce chromosome number and create variation",
      summary:"Contrast one somatic-cell division with the two divisions that produce haploid gametes.",
      moments:[
        {
          id:"meiosis-logic",
          title:"Meiosis changes one diploid cell into haploid products",
          highYield:"DNA replicates once, but homologous chromosomes and then sister chromatids separate across two divisions.",
          teaching:[
            "A diploid human cell has homologous chromosome pairs, one member of each pair inherited from each parent. Meiosis begins after one round of DNA replication. In meiosis I, homologous chromosomes pair and then separate, reducing chromosome number. In meiosis II, sister chromatids separate in a mitosis-like division.",
            "Crossing-over between homologous chromosomes and independent assortment of pairs create new allele combinations. The products are haploid, so fertilization can unite two gametes and restore the diploid number without chromosome number doubling in every generation."
          ],
          keyPoints:[
            "Diploid means two chromosome sets; haploid means one set.",
            "Homologous chromosomes separate in meiosis I.",
            "Sister chromatids separate in meiosis II.",
            "Crossing-over and independent assortment increase variation.",
            "Fertilization restores the diploid chromosome number."
          ],
          visual:{
            title:"One copy, two divisions",
            kind:"division-tree",
            items:[
              {label:"Diploid parent cell",detail:"Contains homologous chromosome pairs."},
              {label:"DNA replication",detail:"Each chromosome becomes two sister chromatids."},
              {label:"Meiosis I",detail:"Homologous pairs separate; chromosome number is reduced."},
              {label:"Meiosis II",detail:"Sister chromatids separate."},
              {label:"Haploid products",detail:"Each receives one chromosome from every homologous pair."}
            ]
          },
          mnemonic:{title:"Pairs first, sisters second",cue:"I = homologs · II = chromatids",explanation:"The sentence distinguishes the defining separation event in each meiotic division."},
          goodToKnow:"Nondisjunction is a failure of chromosomes to separate normally and can change chromosome number in a gamete. The outcome depends on which chromosome and division are involved.",
          practiceConnection:"Reproductive genetics is probabilistic. General chromosome mechanisms can explain risk patterns but do not predict an individual outcome with certainty.",
          activity:{
            prompt:"What separates during anaphase I of meiosis?",
            options:[
              {text:"Homologous chromosomes",correct:true,feedback:"Correct. Meiosis I separates homologous members of each pair."},
              {text:"Amino acids",correct:false,feedback:"Amino acids are unrelated to chromosome separation."},
              {text:"Sister chromatids in every case",correct:false,feedback:"Sister chromatids normally remain together until meiosis II."}
            ]
          }
        },
        {
          id:"gametogenesis",
          title:"Spermatogenesis and oogenesis apply meiosis differently",
          highYield:"Both produce haploid cells, but the timing and division of cytoplasm differ.",
          teaching:[
            "Spermatogenesis begins from germ cells in the testes and ordinarily produces four functional sperm from one primary meiotic cell, with cytoplasm divided relatively evenly. Continuous production after puberty creates many small, motile gametes.",
            "Oogenesis begins before birth, includes long pauses, and divides cytoplasm unevenly so one cell retains most cellular resources. One primary meiotic cell ordinarily yields one large ovum and smaller polar bodies. The distinct patterns support different reproductive roles while using the same chromosome-reduction logic."
          ],
          keyPoints:[
            "Both pathways reduce diploid germ cells to haploid gametes.",
            "Spermatogenesis usually yields four functional sperm per primary meiotic cell.",
            "Oogenesis usually concentrates cytoplasm into one functional ovum.",
            "Meiotic timing differs substantially between the two pathways.",
            "Fertilization unites haploid nuclei to form a diploid zygote."
          ],
          visual:{
            title:"Two gamete-production patterns",
            kind:"comparison",
            items:[
              {label:"Spermatogenesis",detail:"Relatively equal cytokinesis; four small functional gametes are typical."},
              {label:"Oogenesis",detail:"Unequal cytokinesis; one large functional gamete and polar bodies are typical."},
              {label:"Shared meiotic goal",detail:"Reduce chromosome number and create genetically varied haploid cells."}
            ]
          },
          mnemonic:{title:"Sperm shares; ovum owns",cue:"Equal split versus concentrated cytoplasm",explanation:"The cue highlights the different pattern of cytoplasmic division, not the value of either gamete."},
          goodToKnow:"Chromosome conditions such as trisomy 21 or XXY can result from nondisjunction, but diagnosis and counseling require appropriate clinical testing and expertise.",
          practiceConnection:"Preconception education can explain meiosis and age-related statistical patterns without blaming individuals or promising control over chromosome events.",
          activity:{
            prompt:"Which comparison is most accurate?",
            options:[
              {text:"Oogenesis usually retains most cytoplasm in one functional ovum, while spermatogenesis divides it more evenly.",correct:true,feedback:"Correct. The different cytokinesis patterns produce different gamete forms."},
              {text:"Only spermatogenesis uses meiosis.",correct:false,feedback:"Both spermatogenesis and oogenesis use meiosis."},
              {text:"Both pathways always produce four equally sized functional gametes.",correct:false,feedback:"That does not describe oogenesis."}
            ]
          }
        }
      ]
    }
  ],
  caseStudy:{
    title:"From breakfast glucose to tissue renewal",
    scenario:"A tissue cell receives glucose and oxygen, uses ATP for active transport, duplicates its DNA, and later divides to replace a worn cell. During a brief period of high demand, glycolysis outpaces mitochondrial oxidation and lactate formation increases.",
    prompts:[
      "Trace the major carbon and electron path from glucose through aerobic respiration.",
      "Explain why lactate formation can support continued glycolysis but cannot match aerobic ATP output.",
      "Place DNA replication, mitosis, and cytokinesis in the correct cell-cycle order.",
      "Explain why this somatic-cell division is mitosis rather than meiosis."
    ],
    takeaway:"Cellular energy pathways and cell reproduction are linked by ATP demand, molecular regulation, and accurate information transfer; neither process is a single isolated reaction."
  },
  recap:[
    "Catabolism releases energy and building blocks; anabolism uses energy to construct cellular molecules.",
    "Glycolysis occurs in cytosol and produces two pyruvate, a small net ATP gain, and NADH.",
    "Pyruvate oxidation and the citric acid cycle release carbon dioxide and load electron carriers.",
    "Electron transport builds a proton gradient, and oxygen is the terminal electron acceptor.",
    "Fermentation regenerates NAD+ so glycolysis can continue when electron transport is constrained.",
    "Complementary DNA strands allow accurate semiconservative replication before division.",
    "Mitosis preserves chromosome number in somatic cells; meiosis halves it and generates varied gametes."
  ],
  flashcards:[
    {front:"What is metabolism?",back:"The complete network of chemical reactions in a cell or organism.",tag:"metabolism"},
    {front:"Contrast catabolism and anabolism.",back:"Catabolism breaks molecules down and can release energy; anabolism builds molecules and requires energy.",tag:"metabolism"},
    {front:"Where does glycolysis occur and what carbon products result?",back:"In the cytosol; one glucose becomes two pyruvate.",tag:"glycolysis"},
    {front:"What is the main role of the citric acid cycle in energy capture?",back:"It transfers electrons to NADH and FADH2 while releasing carbon dioxide and making a small direct energy yield.",tag:"citric cycle"},
    {front:"What does oxygen do in electron transport?",back:"It accepts electrons at the end of the chain and contributes to water formation.",tag:"ETC"},
    {front:"Why is fermentation useful?",back:"It regenerates NAD+ so glycolysis can continue producing a small amount of ATP.",tag:"fermentation"},
    {front:"How do fatty acids enter central energy metabolism?",back:"Beta oxidation converts them into acetyl-CoA units and reduced electron carriers.",tag:"other fuels"},
    {front:"What are the DNA base pairs?",back:"Adenine pairs with thymine; cytosine pairs with guanine.",tag:"DNA"},
    {front:"What is semiconservative replication?",back:"Each new DNA molecule contains one original strand and one newly synthesized strand.",tag:"DNA"},
    {front:"What is the order of mitosis?",back:"Prophase, metaphase, anaphase, telophase; cytokinesis partitions the cytoplasm.",tag:"mitosis"},
    {front:"What separates in meiosis I versus meiosis II?",back:"Homologous chromosomes separate in meiosis I; sister chromatids separate in meiosis II.",tag:"meiosis"},
    {front:"Why does meiosis matter?",back:"It produces genetically varied haploid gametes so fertilization can restore the diploid number.",tag:"meiosis"},
    {front:"Contrast typical products of spermatogenesis and oogenesis.",back:"One primary cell typically yields four functional sperm, but one large ovum plus polar bodies.",tag:"gametogenesis"}
  ],
  practice:[
    {prompt:"Why is ATP described as an energy currency rather than an energy source stored for months?",answer:"Cells continually regenerate ATP from ADP using energy captured from metabolism, then rapidly spend it on work.",rationale:"ATP transfers energy between reactions and is maintained as a cycling pool.",tag:"ATP"},
    {prompt:"Track one glucose carbon skeleton to its aerobic end products.",answer:"Glucose becomes pyruvate in glycolysis, acetyl-CoA before the cycle, and carbon dioxide during pyruvate oxidation and the citric acid cycle.",rationale:"Electron energy is captured separately in carriers and ATP.",tag:"respiration"},
    {prompt:"Why is the citric acid cycle not the main direct ATP-producing stage?",answer:"Its major captured-energy products are NADH and FADH2, which feed electron transport.",rationale:"Only a small direct ATP-equivalent yield occurs in the cycle.",tag:"citric cycle"},
    {prompt:"Predict the immediate effect if oxygen cannot accept electrons at the end of the chain.",answer:"Electron transport slows or stops, carrier oxidation is impaired, and oxidative ATP production falls.",rationale:"Terminal electron acceptance is required to maintain chain flow.",tag:"ETC"},
    {prompt:"Compare lactate formation with alcoholic fermentation.",answer:"Both regenerate NAD+; human cells reduce pyruvate to lactate, while yeast can produce ethanol and carbon dioxide through acetaldehyde.",rationale:"The shared purpose is carrier recycling, but the end products differ.",tag:"fermentation"},
    {prompt:"How can fat and protein contribute to ATP production?",answer:"Fatty acids form acetyl-CoA and carriers; glycerol and amino-acid carbon skeletons enter at glycolytic or cycle intermediates after processing.",rationale:"Several fuels converge on central pathways at different points.",tag:"other fuels"},
    {prompt:"If one DNA template segment is T-A-C-G, what complementary DNA segment forms?",answer:"A-T-G-C.",rationale:"DNA base-pair rules are A–T and C–G.",tag:"DNA"},
    {prompt:"Why must DNA replication precede mitosis?",answer:"Each future daughter nucleus needs a complete chromosome set, so chromosomes must be duplicated before separation.",rationale:"Mitosis distributes copies; it does not first create them.",tag:"cell cycle"},
    {prompt:"A chromosome is aligned at the cell equator with its sister chromatid attached. Which stage is this?",answer:"Metaphase.",rationale:"Duplicated chromosomes align before sister chromatids separate in anaphase.",tag:"mitosis"},
    {prompt:"Explain why meiosis has two divisions after one DNA replication.",answer:"The first separates homologous chromosome pairs to reduce ploidy; the second separates sister chromatids.",rationale:"Both separations are needed to create haploid products.",tag:"meiosis"},
    {prompt:"Name two mechanisms by which meiosis increases genetic variation.",answer:"Crossing-over and independent assortment of homologous chromosome pairs.",rationale:"Both create new combinations of inherited alleles in gametes.",tag:"meiosis"}
  ]
};
