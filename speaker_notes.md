# NEXUS Defense — Speaker Notes

Full script for all 24 slides (main deck + backup).

---

## 01 — Hook

Has your design recommendation ever been overruled? [Pause.] Because someone more senior had a different opinion. You are not alone. Every person in this room who has worked in a team has felt this. That pattern has a name: the HiPPO effect, documented by McAfee and Brynjolfsson in 2012. NEXUS gives designers a structured argument that holds its ground in the room.

---

## 02 — What I built

I built something called NEXUS. You put in an interface decision you are about to make. It gives you back a structured report, built from evidence. Not a verdict. A tool that informs. The designer still decides.

---

## 03 — Fifteen professionals

Fifteen interviews. UX designers, tech leads, project managers, quality engineers. Not one described a systematic process for choosing an interface type. One of them put it plainly: I research, I substantiate, and I let go. The decision belongs to someone else. That is not a personal failure. It is a structural gap.

---

## 04 — About me

I am Ilverzon Zarate. Over the next fifteen minutes: the problem, the gap, the framework, the evidence, and a live look at the tool.

---

## 05 — The gap in frameworks

Every framework I reviewed assumes you already know what interface type you are building. They guide how to refine it, test it, fit it to users. None of them help you choose the type itself. That is the gap this research confirms.

---

## 06 — The cost of wrong decisions

These five products had the budget, the team, and the technology. None of them failed because the engineering broke. All of them chose the wrong interface type for the context. Hundreds of millions in documented losses.

---

## 07 — The bottleneck

This is not isolated. Estrada at MIT found in 2025 that 95% of generative AI pilots fail to deliver measurable impact. RAND found in 2024 that 84% of AI project failures trace to leadership decisions, not engineering. The bottleneck is the decision. No tool exists that checks this decision against documented precedent. That is where NEXUS operates.

---

## 08 — The framework (four stages)

NEXUS works in four stages, grounded in the DIKW hierarchy Ackoff established in 1989. First, values: the organisation ranks what it stands for. That ranking is the primary filter. Second, context: fifteen questions about users, frequency, and consequences. Third, pattern matching against five documented failures. Fourth, a report. Not a verdict. The designer reads it and decides.

---

## 09 — DIKW layers

The fifteen questions are not arbitrary. Wisdom layer first: values ranking, before any technical question. Knowledge layer: context factors, who uses the product and how. Information layer: risk factors, what happens if something goes wrong. Data layer last: hard constraints that limit which interface types are viable. The order cannot be reversed.

---

## 10 — Research method

Three phases of evidence. First, a literature review confirmed no framework existed for this decision, and fifteen interviews produced the values taxonomy. Second, retrospective testing against five failures using only pre-launch data. Third, validation with the same fifteen practitioners as usability testers.

---

## 11 — Validation results

82% of documented failure factors detected across all five cases. The threshold was 70%, based on the Landis and Koch criterion from 1977 for substantial agreement in decision support research. We exceeded it. Practitioners told us consistently: the red flags are not prohibitions. They are ammunition for stakeholder conversations.

---

## 12 — Journey map (Ana)

Meet Ana. Product manager in healthtech. AR/VR is being pushed in a meeting by someone senior, with no evidence. She has doubts and no framework to push back. She runs NEXUS in ten minutes. The report flags the same risks she felt but could not articulate. She walks back into that meeting with a PDF. The HiPPO is still in the room. But now so is the evidence.

---

## 13 — Live demo

This is NEXUS. No installation. Open source under MIT license. [Switch to browser: values ranking, two questions, report output. 90 seconds.]

---

## 14 — Contributions

Four contributions. Primary: the first replicable protocol for this decision, grounded in DIKW. For practice: evidence designers can use to hold their ground. For the community: open infrastructure that outlives this defense. And as a position: it informs. It does not decide.

---

## 15 — Process in motion

Before I close, this is what all of that looks like in motion.

---

## 16 — Thank you

Thank you. Questions welcome.

---

## B1 — Why DIKW

DIKW is the only framework that explicitly separates what we know from why it matters. Other frameworks optimize process or predict adoption after the fact. None of them address the prior question: what interface type should we be building at all. DIKW does. And it is the only one that places values above technical criteria, which is exactly what this decision requires.

---

## B2 — Case selection

Five criteria: public documentation, pre-launch data available, commercial failure confirmed, interface type mismatch as primary cause, diverse enough to cover multiple categories. These five meet all five criteria. The selection is bounded, not arbitrary.

---

## B3 — Generalizability

Recurrent across the corpus, not universal. That distinction matters. The six patterns appeared in more than one case under similar contextual conditions. They are signals, not laws. The framework flags them. The designer interprets them.

---

## B4 — Scoring algorithm

Four steps. Each answer is scored on a fixed scale. Scores are weighted by DIKW layer, with Wisdom weighted highest. Weights are adjusted by context modifiers from the product context questions. Scores are aggregated per interface type and ranked.

---

## B5 — Tie handling

A tie is not a failure. It means two interface types are genuinely comparable given the inputs. The report surfaces both with their full profiles and flags which contextual factors are pushing them apart. The designer uses that to make the call.

---

## B6 — Governance

Three mechanisms. Community contributions via GitHub pull requests, reviewed against the existing evidence base. Academic updates when new documented cases meet the selection criteria. And a governance model that prevents single-actor capture of the framework.

---

## B7 — TFM scope

Deliberately bounded. One primary methodological contribution, three subordinate ones. The scope is one decision, one context, one validation cycle. Field validation across organisations is the explicit next step. It is not a gap in this work.

---

## B8 — Information Architecture

Every step is visible. Values ranking goes in at the top. Nine assessment questions feed a weighted scoring engine. Each of the five interface types receives a score. Red flag detection cross-checks the top recommendation against the values the organisation ranked highest. If there is a conflict, a warning is added. The designer sees the reasoning behind every flag, not just the conclusion.
