window.AP_LEARNING = window.AP_LEARNING || {};
window.AP_LEARNING['lesson-19'] = {
  version: 1,
  title: "The Reproductive System",
  chapter: "Chapter 19",
  duration: "75–95 minutes",
  outcomes: [
    "Map the major male and female reproductive organs and explain how structure supports each organ's role.",
    "Sequence spermatogenesis and oogenesis, including where mitosis, meiosis, maturation, and ovulation occur.",
    "Trace sperm and oocyte pathways and connect accessory secretions, cilia, and smooth muscle to transport.",
    "Relate ovarian events to changes in the uterine lining across the menstrual cycle.",
    "Outline fertilization, implantation, early embryonic support, placental exchange, lactation, and the stages of labor.",
    "Use reproductive anatomy in respectful, scope-aware nutrition conversations without diagnosing or promising fertility outcomes."
  ],
  modules: [
    {
      id: "l19-mod1",
      title: "Male reproductive organization",
      summary: "Follow sperm production from the testis through maturation, transport, and seminal-fluid formation.",
      moments: [
        {
          id: "l19-m1",
          title: "The testes have paired exocrine and endocrine jobs",
          highYield: "Seminiferous tubules make sperm, while interstitial cells between the tubules make testosterone.",
          teaching: [
            "Each testis is wrapped by a fibrous capsule that sends partitions inward, forming lobules. Inside those lobules, tightly coiled seminiferous tubules provide the site of sperm formation. The scrotum holds the testes outside the pelvic cavity, where muscular adjustments help maintain a temperature suited to sperm production.",
            "Two cell populations clarify the testis's dual role. Developing germ cells and their supporting Sertoli cells occupy the tubules, while interstitial Leydig cells lie in the tissue between tubules and secrete testosterone. The organ therefore sends sperm through ducts and hormones into blood."
          ],
          keyPoints: [
            "Tunica albuginea and internal septa organize the testis into lobules.",
            "Spermatogenesis occurs in seminiferous tubules.",
            "Sertoli cells support developing sperm cells.",
            "Leydig cells secrete testosterone into the circulation."
          ],
          visual: {
            title: "Inside a testis",
            kind: "layers",
            items: [
              {label: "Capsule", detail: "Tunica albuginea forms a durable outer coat."},
              {label: "Lobules", detail: "Septa divide the organ into compartments."},
              {label: "Tubules", detail: "Seminiferous tubules contain developing sperm and Sertoli cells."},
              {label: "Between tubules", detail: "Leydig cells produce testosterone."}
            ]
          },
          mnemonic: {
            title: "S inside, L between",
            cue: "Sertoli supports sperm in Seminiferous tubules; Leydig lies between Loops.",
            explanation: "The repeated initials anchor the location and role of the two important support cells."
          },
          goodToKnow: "The testes are both exocrine and endocrine: sperm travel through ducts, whereas testosterone enters the bloodstream.",
          practiceConnection: "When a client asks whether a food directly increases testosterone or sperm count, separate normal physiology from marketing claims and avoid promising a reproductive outcome from one ingredient.",
          activity: {
            prompt: "Which pairing correctly identifies a testicular cell and its main role?",
            options: [
              {text: "Leydig cell — testosterone secretion", correct: true, feedback: "Correct. Leydig cells are interstitial endocrine cells."},
              {text: "Sertoli cell — carrying urine to the bladder", correct: false, feedback: "Sertoli cells support developing sperm within seminiferous tubules."},
              {text: "Spermatogonium — producing seminal-vesicle fluid", correct: false, feedback: "A spermatogonium is an early germ cell, not an accessory gland."}
            ]
          }
        },
        {
          id: "l19-m2",
          title: "Spermatogenesis reduces chromosome number, then reshapes the cell",
          highYield: "Mitosis preserves the germ-cell line; meiosis produces haploid spermatids; maturation creates a streamlined sperm cell.",
          teaching: [
            "Spermatogonia near the outer wall of a seminiferous tubule divide by mitosis. Some remain as a renewing cell population, while others become primary spermatocytes. A primary spermatocyte completes meiosis I to form two secondary spermatocytes, and meiosis II produces four haploid spermatids.",
            "Spermatids are not yet fully shaped sperm. During maturation, the nucleus becomes compact, an enzyme-containing acrosome forms over the head, mitochondria concentrate in the midpiece, and a flagellum develops for movement. This is a change in form and function after the chromosome-reduction divisions."
          ],
          keyPoints: [
            "Mitosis replenishes spermatogonia and supplies cells for development.",
            "Meiosis I and II reduce a diploid primary spermatocyte to haploid spermatids.",
            "One primary spermatocyte can yield four spermatids.",
            "Head, midpiece, and tail are specialized for genetic delivery, energy, and movement."
          ],
          visual: {
            title: "From germ cell to sperm",
            kind: "flow",
            items: [
              {label: "Spermatogonium", detail: "Diploid stem-line cell; divides by mitosis."},
              {label: "Primary spermatocyte", detail: "Enters the first meiotic division."},
              {label: "Secondary spermatocytes", detail: "Haploid products of meiosis I."},
              {label: "Spermatids", detail: "Four products after meiosis II."},
              {label: "Spermatozoa", detail: "Mature form with head, midpiece, and tail."}
            ]
          },
          mnemonic: {
            title: "Grow, halve, halve, shape",
            cue: "Mitosis grows the line; meiosis halves twice; maturation shapes.",
            explanation: "This separates cell-number maintenance, chromosome reduction, and structural specialization."
          },
          goodToKnow: "A mature sperm cell's midpiece is rich in mitochondria, but the cell's purpose is transport of paternal genetic material rather than general nutrient storage.",
          practiceConnection: "Reproductive-cell development is a long biological process influenced by many factors. Treat single-supplement fertility claims cautiously and refer individualized fertility concerns to qualified clinical care.",
          activity: {
            prompt: "What is produced directly by meiosis II during spermatogenesis?",
            options: [
              {text: "Haploid spermatids", correct: true, feedback: "Correct. Secondary spermatocytes complete meiosis II to form spermatids."},
              {text: "Diploid spermatogonia", correct: false, feedback: "Spermatogonia are maintained through mitosis."},
              {text: "Seminal fluid", correct: false, feedback: "Accessory glands contribute most seminal fluid."}
            ]
          }
        }
      ]
    },
    {
      id: "l19-mod2",
      title: "Male transport and seminal fluid",
      summary: "Trace sperm through the ducts and identify how accessory glands assemble the transport medium.",
      moments: [
        {
          id: "l19-m3",
          title: "Sperm follow a continuous transport route",
          highYield: "Seminiferous tubules → straight tubules → rete testis → efferent ductules → epididymis → ductus deferens → ejaculatory duct → urethra.",
          teaching: [
            "Newly formed sperm leave the convoluted seminiferous tubules, pass into straight tubules, cross the rete testis, and exit through efferent ductules. They then enter the epididymis, whose long coiled duct supports further maturation and storage while sperm gain motility.",
            "During ejaculation, smooth-muscle contractions propel sperm into the ductus deferens, through an ejaculatory duct, and then into the urethra. The male urethra has prostatic, membranous, and spongy regions. Route questions become much easier when each segment is linked to its landmark."
          ],
          keyPoints: [
            "The epididymis is a maturation and storage site, not the production site.",
            "The ductus deferens carries sperm from the epididymis toward the pelvic cavity.",
            "Ejaculatory ducts empty into the prostatic urethra.",
            "The urethra provides the final passage to the exterior."
          ],
          visual: {
            title: "Sperm route map",
            kind: "route",
            items: [
              {label: "Produce", detail: "Seminiferous tubules."},
              {label: "Collect", detail: "Straight tubules, rete testis, efferent ductules."},
              {label: "Mature", detail: "Epididymis."},
              {label: "Transport", detail: "Ductus deferens and ejaculatory duct."},
              {label: "Exit", detail: "Prostatic → membranous → spongy urethra."}
            ]
          },
          mnemonic: {
            title: "Sperm Take Roads, Exit, Drive, Enter, Use",
            cue: "Seminiferous → straight → rete → efferent → ductus epididymis → ductus deferens → ejaculatory → urethra.",
            explanation: "The phrase cues the major route in order; add details only after the sequence is secure."
          },
          goodToKnow: "After a vasectomy, sperm production and testosterone secretion can continue; the procedure interrupts the ductus deferens rather than removing the testes.",
          practiceConnection: "Use a route diagram to explain structure without drifting into procedural counseling; contraception decisions and postoperative questions belong with the client's healthcare team.",
          activity: {
            prompt: "Where do sperm normally mature and develop motility after leaving the testis?",
            options: [
              {text: "Epididymis", correct: true, feedback: "Correct. The coiled epididymal duct supports maturation and storage."},
              {text: "Seminal vesicle", correct: false, feedback: "The seminal vesicle adds fluid but is not a sperm-maturation site."},
              {text: "Urinary bladder", correct: false, feedback: "The bladder stores urine, not sperm."}
            ]
          }
        },
        {
          id: "l19-m4",
          title: "Accessory glands build the transport medium",
          highYield: "Semen combines sperm with secretions from seminal vesicles, prostate, and bulbourethral glands.",
          teaching: [
            "Sperm make up only part of semen. Seminal vesicles contribute much of the fluid and include fructose that can support sperm movement. The prostate adds fluid around the first portion of the urethra, and bulbourethral glands add a mucus-like secretion that lubricates the urethral passage.",
            "Together, these secretions provide a liquid transport medium and help buffer conditions encountered during passage. This is a useful structure–function example: glands placed along the route add components before the mixture leaves through the urethra."
          ],
          keyPoints: [
            "Semen is sperm plus accessory-gland secretions.",
            "Seminal-vesicle fluid contributes energy substrate and volume.",
            "Prostatic fluid joins the ejaculatory-duct contents in the prostatic urethra.",
            "Bulbourethral secretion lubricates the urethra before ejaculation."
          ],
          visual: {
            title: "What enters semen?",
            kind: "contributions",
            items: [
              {label: "Testes/epididymides", detail: "Sperm cells."},
              {label: "Seminal vesicles", detail: "Large fluid contribution with fructose."},
              {label: "Prostate", detail: "Additional glandular fluid around the urethral route."},
              {label: "Bulbourethral glands", detail: "Lubricating mucus-like secretion."}
            ]
          },
          mnemonic: {
            title: "Cells plus three secretions",
            cue: "Sperm + seminal vesicle + prostate + bulbourethral.",
            explanation: "Think of semen as a mixture assembled along a route, not a product made in one organ."
          },
          goodToKnow: "Fructose in seminal fluid is a local energy substrate for sperm movement; it does not mean that eating more sugar predictably improves fertility.",
          practiceConnection: "Correct the common leap from a biochemical ingredient to a dietary prescription. A substance's role in a body fluid does not establish that extra oral intake changes that fluid's function.",
          activity: {
            prompt: "Which statement best describes semen?",
            options: [
              {text: "A mixture of sperm and several accessory-gland secretions", correct: true, feedback: "Correct. Multiple structures contribute to the final fluid."},
              {text: "A hormone made only by Leydig cells", correct: false, feedback: "Leydig cells make testosterone, not semen."},
              {text: "Fluid stored in the urinary bladder", correct: false, feedback: "The urinary bladder stores urine."}
            ]
          }
        }
      ]
    },
    {
      id: "l19-mod3",
      title: "Female reproductive organization and cycles",
      summary: "Connect ovarian events, oocyte development, uterine anatomy, and endometrial change across a cycle.",
      moments: [
        {
          id: "l19-m5",
          title: "Oogenesis produces one large functional cell",
          highYield: "Unequal meiotic divisions preserve cytoplasm in one oocyte while small polar bodies receive little cytoplasm.",
          teaching: [
            "Oogonia form primary oocytes before birth, and those primary oocytes remain arrested until later reproductive cycles. When a selected oocyte resumes meiosis, the first division produces a large secondary oocyte and a small polar body rather than two equal cells.",
            "The secondary oocyte is released at ovulation. In the usual sequence, meiosis II completes only if fertilization occurs, producing an ovum and another polar body. The unequal allocation retains organelles and cytoplasm in the cell that could support the first divisions after fertilization."
          ],
          keyPoints: [
            "Primary oocytes form before birth and later resume development.",
            "Meiosis I yields a secondary oocyte plus a polar body.",
            "The secondary oocyte is the cell released at ovulation.",
            "Meiosis II usually completes in association with fertilization."
          ],
          visual: {
            title: "Unequal meiotic divisions",
            kind: "flow",
            items: [
              {label: "Oogonium", detail: "Diploid precursor in fetal development."},
              {label: "Primary oocyte", detail: "Begins meiosis and remains arrested."},
              {label: "Secondary oocyte + polar body", detail: "Unequal products of meiosis I."},
              {label: "Ovum + polar bodies", detail: "Completion of meiosis II if fertilization occurs."}
            ]
          },
          mnemonic: {
            title: "One keeps the kitchen",
            cue: "One oocyte keeps most cytoplasm; polar bodies carry chromosomes with little cytoplasm.",
            explanation: "The image explains why the divisions are genetically ordered but physically unequal."
          },
          goodToKnow: "Oogenesis and spermatogenesis both use meiosis, but they differ in timing, equality of cell division, and the number of functional gametes produced.",
          practiceConnection: "Avoid treating menstrual or fertility changes as proof of one nutrient deficiency. They can have many causes and warrant individualized assessment when persistent or concerning.",
          activity: {
            prompt: "Why is a secondary oocyte much larger than its polar body?",
            options: [
              {text: "Meiosis divides chromosomes but allocates most cytoplasm to the oocyte", correct: true, feedback: "Correct. The divisions are unequal in cytoplasmic volume."},
              {text: "The polar body contains twice as many chromosomes", correct: false, feedback: "Both products are haploid after meiosis I; size reflects cytoplasmic allocation."},
              {text: "The oocyte has already implanted", correct: false, feedback: "Implantation occurs after fertilization and early cell divisions."}
            ]
          }
        },
        {
          id: "l19-m6",
          title: "The ovarian and uterine cycles are synchronized",
          highYield: "Follicle growth and ovulation in the ovary align with menstrual, proliferative, and secretory changes in the endometrium.",
          teaching: [
            "During the follicular portion of the ovarian cycle, follicles develop and one usually becomes dominant. Rising estrogen is associated with repair and growth of the uterine endometrium. Ovulation releases the secondary oocyte, which is guided toward a uterine tube by the fimbriae and ciliary movement.",
            "After ovulation, the emptied follicle becomes the corpus luteum and secretes progesterone as well as estrogen. These hormones support a secretory endometrium prepared for possible implantation. If implantation does not occur, the corpus luteum regresses, hormone support falls, and another menstrual phase begins."
          ],
          keyPoints: [
            "Menstrual phase sheds the functional endometrial lining.",
            "Proliferative phase rebuilds the lining as a follicle matures.",
            "Ovulation separates the preovulatory and postovulatory portions of the cycle.",
            "Secretory phase is supported by corpus-luteum hormones.",
            "Cycle length and timing vary among individuals and across life stages."
          ],
          visual: {
            title: "Two cycles, one timeline",
            kind: "timeline",
            items: [
              {label: "Menstrual / early follicular", detail: "Endometrium sheds while follicles begin developing."},
              {label: "Proliferative / follicular", detail: "Estrogen rises and the lining rebuilds."},
              {label: "Ovulation", detail: "Secondary oocyte leaves the mature follicle."},
              {label: "Secretory / luteal", detail: "Corpus luteum hormones support a receptive lining."},
              {label: "No implantation", detail: "Corpus luteum regresses and the cycle resets."}
            ]
          },
          mnemonic: {
            title: "Shed, spread, secrete",
            cue: "Menstrual sheds · proliferative spreads new lining · secretory enriches it.",
            explanation: "This anchors the three uterine phases without assuming an identical day count for everyone."
          },
          goodToKnow: "The textbook's day numbers are a teaching model; real cycles vary. Phase relationships are more reliable than memorizing one universal calendar.",
          practiceConnection: "For nutrition history, ask respectfully about cycle regularity when relevant, but do not diagnose from cycle length alone. Persistent change, severe pain, or heavy bleeding needs clinical evaluation.",
          activity: {
            prompt: "Which ovarian structure chiefly supports the postovulatory secretory phase?",
            options: [
              {text: "Corpus luteum", correct: true, feedback: "Correct. It secretes progesterone and estrogen after ovulation."},
              {text: "Fimbria", correct: false, feedback: "Fimbriae help guide the oocyte toward the uterine tube."},
              {text: "Polar body", correct: false, feedback: "A polar body is a small meiotic product, not a hormone-secreting ovarian structure."}
            ]
          }
        }
      ]
    },
    {
      id: "l19-mod4",
      title: "Fertilization, development, birth, and lactation",
      summary: "Follow the biological sequence from gamete union through implantation, placental exchange, labor, and milk delivery.",
      moments: [
        {
          id: "l19-m7",
          title: "Fertilization starts a sequence of transport and implantation",
          highYield: "Fertilization usually occurs in a uterine tube; the dividing conceptus reaches the uterus and implants in the endometrium.",
          teaching: [
            "The uterine tubes receive the ovulated secondary oocyte through the infundibulum and fimbriae. Cilia and smooth-muscle contractions move it toward the uterus. When fertilization occurs, sperm and oocyte genetic material combine to restore the diploid chromosome number in the zygote.",
            "The zygote undergoes repeated mitotic divisions while traveling toward the uterine cavity, developing into a blastocyst. Its outer cells participate in implantation and formation of chorionic villi, while the inner cell mass gives rise to the embryo. Ectoderm, mesoderm, and endoderm then provide the foundational tissue layers."
          ],
          keyPoints: [
            "Fertilization most often occurs in the uterine tube, not the uterus.",
            "A zygote divides by mitosis while moving toward the uterine cavity.",
            "Implantation occurs in the endometrium.",
            "The inner cell mass forms the embryo; trophoblast-related tissues support implantation and placenta formation.",
            "Three germ layers give rise to the body's tissues and organs."
          ],
          visual: {
            title: "Early development route",
            kind: "route",
            items: [
              {label: "Ovulation", detail: "Secondary oocyte enters the vicinity of a uterine tube."},
              {label: "Fertilization", detail: "Gametes unite in the tube and form a zygote."},
              {label: "Cleavage", detail: "Mitotic divisions occur during transport."},
              {label: "Blastocyst", detail: "Outer support cells and an inner cell mass become distinct."},
              {label: "Implantation", detail: "The conceptus embeds in uterine endometrium."}
            ]
          },
          mnemonic: {
            title: "Tube, travel, touch down",
            cue: "Fertilize in the tube · divide while traveling · implant in the uterus.",
            explanation: "The phrase distinguishes the usual sites of fertilization, early transport, and implantation."
          },
          goodToKnow: "Placental and maternal blood normally remain in separate circulations; exchange occurs across a thin interface rather than by directly mixing the two blood supplies.",
          practiceConnection: "Preconception and pregnancy nutrition can support maternal and fetal needs, but it cannot guarantee fertilization or implantation. Use evidence-based guidance and coordinate with prenatal care.",
          activity: {
            prompt: "Which sequence is anatomically correct?",
            options: [
              {text: "Fertilization in uterine tube → mitotic divisions → implantation in endometrium", correct: true, feedback: "Correct. The early conceptus divides while moving to the uterus."},
              {text: "Implantation in ovary → fertilization in cervix → cleavage in vagina", correct: false, feedback: "Those locations reverse the normal pathway."},
              {text: "Fertilization in bladder → implantation in ureter", correct: false, feedback: "Those are urinary, not reproductive, structures."}
            ]
          }
        },
        {
          id: "l19-m8",
          title: "Placenta, labor, and mammary glands support the transition to birth",
          highYield: "The placenta supports exchange during pregnancy; labor progresses through dilation, expulsion, and placental stages; mammary lobules produce milk.",
          teaching: [
            "Chorionic villi and uterine tissue contribute to the placenta, which supports exchange of oxygen, nutrients, and wastes between maternal and fetal circulations. The amnion surrounds the developing embryo or fetus with fluid, and the umbilical cord links fetal circulation to the placenta. These are coordinated support structures, not interchangeable names for one organ.",
            "Labor is commonly organized into cervical dilation, expulsion of the baby, and delivery of the placenta. After birth, milk is produced by secretory alveoli grouped within mammary lobules. Milk moves through branching ducts toward widened regions and then through lactiferous ducts that open at the nipple."
          ],
          keyPoints: [
            "The placenta is an exchange and endocrine interface during pregnancy.",
            "The amnion encloses the developing fetus in fluid.",
            "The umbilical cord connects fetal vessels to the placenta.",
            "Labor progresses through dilation, expulsion, and placental stages.",
            "Mammary alveoli make milk; ducts carry it toward the nipple."
          ],
          visual: {
            title: "Support before and after birth",
            kind: "paired-flow",
            items: [
              {label: "Pregnancy", detail: "Placenta exchanges; amnion cushions; cord connects."},
              {label: "Dilation", detail: "Cervix opens as uterine contractions progress."},
              {label: "Expulsion", detail: "Baby passes through the birth canal."},
              {label: "Placental stage", detail: "Placenta separates and is delivered."},
              {label: "Lactation", detail: "Alveoli produce milk and ducts convey it outward."}
            ]
          },
          mnemonic: {
            title: "Open, out, after",
            cue: "Dilation opens · expulsion moves baby out · placental stage delivers afterbirth.",
            explanation: "A three-word cue for the major stages of labor."
          },
          goodToKnow: "The mammary glands are organized into lobes, lobules, secretory alveoli, and ducts. Breast size mostly reflects adipose tissue and does not by itself indicate milk-making capacity.",
          practiceConnection: "Pregnancy and lactation needs are life-stage specific. Use current professional guidance, respect feeding choices and clinical constraints, and refer pain, poor infant growth, dehydration concerns, or major feeding difficulty promptly.",
          activity: {
            prompt: "Where is milk produced within a lactating mammary gland?",
            options: [
              {text: "Secretory alveoli in lobules", correct: true, feedback: "Correct. Alveolar cells produce milk, which then enters the duct system."},
              {text: "Placental villi", correct: false, feedback: "Placental villi support exchange during pregnancy, not milk production."},
              {text: "Uterine endometrium", correct: false, feedback: "The endometrium lines the uterus and supports implantation."}
            ]
          }
        }
      ]
    }
  ],
  caseStudy: {
    title: "A cycle change is not a one-nutrient diagnosis",
    scenario: "A physically active client reports that menstrual cycles have become less regular while training volume increased and meals became more restrictive. They ask for one supplement to restore fertility immediately and want reassurance that no medical assessment is needed.",
    prompts: [
      "Which ovarian and uterine events must coordinate for a typical cycle?",
      "What intake, training, stress, medication, reproductive, and health-history questions are relevant without assuming a cause?",
      "Why would one supplement be unable to guarantee ovulation, implantation, or fertility?",
      "Which scope and referral language would support the client without diagnosing them?"
    ],
    takeaway: "Cycle changes can reflect many interacting reproductive, endocrine, energy-availability, medication, stress, and health factors. A nutrition professional can assess intake patterns and support adequacy while recommending timely clinical evaluation rather than assigning a cause or promising a fertility outcome."
  },
  recap: [
    "Seminiferous tubules generate sperm while Leydig cells secrete testosterone.",
    "Spermatogenesis uses mitosis, meiosis, and maturation; sperm then travel through a defined duct route.",
    "Semen combines sperm with secretions from seminal vesicles, prostate, and bulbourethral glands.",
    "Oogenesis uses unequal meiotic divisions so one functional cell retains most cytoplasm.",
    "Ovarian follicular and luteal events align with menstrual, proliferative, and secretory endometrial phases.",
    "Fertilization generally occurs in a uterine tube, followed by cleavage, uterine entry, and implantation.",
    "Placenta, amnion, umbilical cord, labor stages, and mammary ducts each have distinct support roles."
  ],
  flashcards: [
    {front: "Seminiferous tubule", back: "Coiled testicular tubule where spermatogenesis occurs.", tag: "male anatomy"},
    {front: "Sertoli cell", back: "Support cell within seminiferous tubules that nourishes and regulates developing sperm.", tag: "male anatomy"},
    {front: "Leydig cell", back: "Interstitial testicular cell that secretes testosterone.", tag: "male anatomy"},
    {front: "Epididymis", back: "Coiled duct where sperm mature, gain motility, and are stored.", tag: "transport"},
    {front: "Sperm route", back: "Seminiferous tubules → straight tubules → rete testis → efferent ductules → epididymis → ductus deferens → ejaculatory duct → urethra.", tag: "transport"},
    {front: "Semen", back: "Sperm combined with secretions from the seminal vesicles, prostate, and bulbourethral glands.", tag: "male anatomy"},
    {front: "Oogenesis", back: "Formation and maturation of the female gamete through unequal meiotic divisions.", tag: "female anatomy"},
    {front: "Ovulation", back: "Release of a secondary oocyte from a mature ovarian follicle.", tag: "cycle"},
    {front: "Corpus luteum", back: "Postovulatory ovarian structure that secretes progesterone and estrogen.", tag: "cycle"},
    {front: "Endometrium", back: "Inner uterine layer that changes across the cycle and receives an implanting conceptus.", tag: "uterus"},
    {front: "Blastocyst", back: "Early hollow-stage conceptus with an outer trophoblast and inner cell mass.", tag: "development"},
    {front: "Placenta", back: "Temporary maternal–fetal interface for exchange and hormone production during pregnancy.", tag: "development"},
    {front: "Three labor stages", back: "Dilation, expulsion, and placental stages.", tag: "birth"},
    {front: "Mammary alveoli", back: "Secretory structures in lobules that produce milk.", tag: "lactation"}
  ],
  practice: [
    {prompt: "Distinguish the roles of Sertoli and Leydig cells.", answer: "Sertoli cells support developing sperm in seminiferous tubules; Leydig cells secrete testosterone from interstitial tissue.", rationale: "Their locations reveal the testis's exocrine and endocrine functions.", tag: "male anatomy"},
    {prompt: "Sequence the main germ-cell stages of spermatogenesis.", answer: "Spermatogonium → primary spermatocyte → secondary spermatocytes → spermatids → spermatozoa.", rationale: "Mitosis supplies primary spermatocytes, meiosis creates haploid spermatids, and maturation shapes sperm.", tag: "gametogenesis"},
    {prompt: "Trace sperm from its production site to the exterior.", answer: "Seminiferous tubule → straight tubule → rete testis → efferent ductules → epididymis → ductus deferens → ejaculatory duct → urethra.", rationale: "Production, maturation, transport, and exit occur in different structures.", tag: "transport"},
    {prompt: "Name the three major accessory glands contributing to semen.", answer: "Seminal vesicles, prostate gland, and bulbourethral glands.", rationale: "Their secretions combine with sperm along the transport route.", tag: "male anatomy"},
    {prompt: "Why does oogenesis produce one large cell and polar bodies?", answer: "Meiotic chromosome division is paired with unequal cytoplasmic division, preserving most cytoplasm in the potential ovum.", rationale: "The functional gamete retains organelles and material for early development.", tag: "gametogenesis"},
    {prompt: "Pair the three uterine phases with their main event.", answer: "Menstrual: shedding; proliferative: rebuilding; secretory: progesterone-supported preparation for implantation.", rationale: "The uterine phases track endometrial change.", tag: "cycle"},
    {prompt: "What does the corpus luteum do after ovulation?", answer: "It secretes progesterone and estrogen that support the secretory endometrium; without pregnancy it later regresses.", rationale: "Ovarian hormones coordinate the postovulatory uterine phase.", tag: "cycle"},
    {prompt: "Differentiate fertilization from implantation.", answer: "Fertilization is union of gametes, usually in a uterine tube; implantation is embedding of the blastocyst in uterine endometrium.", rationale: "They occur at different times and anatomical locations.", tag: "development"},
    {prompt: "Name the three primary germ layers and one broad contribution of each.", answer: "Ectoderm: skin and nervous system; mesoderm: muscle, bone, and connective tissues; endoderm: many internal epithelial linings.", rationale: "The layers organize early tissue differentiation.", tag: "development"},
    {prompt: "Distinguish the placenta, amnion, and umbilical cord.", answer: "The placenta is the exchange interface; the amnion is the fluid-filled membrane around the fetus; the cord carries fetal vessels between fetus and placenta.", rationale: "Each support structure has a separate anatomical role.", tag: "development"},
    {prompt: "Name the stages of labor in order.", answer: "Dilation, expulsion, and placental stages.", rationale: "The sequence moves from cervical opening to birth and then placental delivery.", tag: "birth"},
    {prompt: "Trace milk from its production site toward the nipple.", answer: "Secretory alveoli → small tubules → mammary ducts → widened storage regions → lactiferous ducts → nipple openings.", rationale: "Milk production and milk transport occur in different parts of the gland.", tag: "lactation"}
  ]
};
