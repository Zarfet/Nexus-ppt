# NEXUS Defense — Speaker Notes

Full script for all 24 slides (main deck + backup).

---

## 01 — Opening question

Has your design recommendation ever been overruled?
Because someone more senior had a different opinion.
You are not alone.
Every person in this room who has worked in a team has felt this.
That pattern has a name: the HiPPO effect, documented by McAfee and Brynjolfsson in 2012.

---

## 02 — The real problem

Fifteen interviews. UX designers, tech leads, project managers, quality engineers.
Not one described a systematic process for choosing an interface type.
One of them put it plainly: I research, I substantiate, and I let go.
The decision belongs to someone else.
That is not a personal failure. It is a structural gap.

---

## 03 — The gap

Every methodology reviewed in this research assumes you already know what interface type you are building.
They guide how to refine it, test it, fit it to users.
None of them help you choose the type itself.
That is the gap this research confirms.

---

## 04 — The cost

These five products had the budget, the team, and the technology.
None of them failed because the engineering broke.
All of them chose the wrong interface type for the context.
Hundreds of millions in documented losses.

---

## 05 — The bottleneck

This is not isolated.
Estrada at MIT found in 2025 that 95% of generative AI pilots fail to deliver measurable impact.
RAND found in 2024 that 84% of AI project failures trace to leadership decisions, not engineering.
The bottleneck is the decision.
No tool exists that checks this decision against documented precedent.

---

## 06 — Title

I am Ilverzon Zarate.
This is my thesis defense: Beyond Intuition, A Designer's Framework for Interface Type Selection.
Over the next minutes I will walk you through the problem, the gap, the framework, the evidence, and a live look at the tool.

---

## 07 — The reveal

I built something called NEXUS.
You put in an interface decision you are about to make.
It gives you back a structured report, built from evidence.
Not a verdict. A tool that informs.
The designer still decides.

---

## 08 — The framework

NEXUS works in four stages, grounded in the DIKW hierarchy Ackoff established in 1989.
First, values: the organisation ranks what it stands for.
That ranking is the primary filter.
Second, context: fifteen questions about users, frequency, and consequences.
Third, pattern matching against five documented failures.
Fourth, a report. Not a verdict.
The designer reads it and decides.

---

## 09 — DIKW layers

The fifteen questions are not arbitrary.
Wisdom layer first: values ranking, before any technical question.
Knowledge layer: who uses the product and how.
Information layer: what happens if something goes wrong.
Data layer last: hard constraints that limit which interface types are viable.
The order cannot be reversed.

---

## 10 — The method

Three phases of evidence.
First, a literature review across papers confirmed no framework existed for this decision.
Fifteen interviews produced the values taxonomy.
Second, retrospective testing against five documented failures using only pre-launch public information.
Third, usability validation with the same fifteen practitioners.

---

## 11 — Validation

82% of documented failure factors detected across all five cases.
The threshold was 70%, based on Landis and Koch 1977, the standard for substantial agreement in decision support research.
We exceeded it.
Practitioners told us consistently: the red flags are not prohibitions. They are ammunition for stakeholder conversations.

---

## 12 — User Journey Map

Meet Ana. Product manager in healthtech.
AR/VR is being pushed in a meeting by someone senior, with no evidence.
She has doubts and no framework to push back.
She runs NEXUS. The report flags the same risks she felt but could not articulate.
She walks back into that meeting with a PDF.
The HiPPO is still in the room. But now so is the evidence.

---

## 13 — The tool — demo

This is NEXUS.

---

## 14 — Contributions

Four contributions.
The primary one is the first replicable protocol for this decision, grounded in DIKW.
For practice: evidence designers can use to hold their ground.
For the community: open infrastructure that outlives this defense.
And as a position: it informs. It does not decide.

---

## 15 — Video recap

Before closing, this is what all of that looks like in motion.

---

## 16 — Thank you

Thank you. Questions welcome.

---

## B1 — Why DIKW

The question is not which framework is more elegant.
The question is which one addresses the decision designers actually face before the first mockup.
Other frameworks optimize how you design once the type is chosen, or predict adoption after the fact.
None of them address what type to build at all.
DIKW does. And it is the only one that places values above technical criteria, which is exactly what this decision requires.

---

## B2 — Case selection

Four criteria guided the selection.
Commercial impact: minimum investment or significant market withdrawal.
Documentation quality: multiple independent sources including press, company communications, and academic papers.
Temporal coverage: cases span from 1997 to 2024 across all five interface types.
Interface type diversity: one case per category, preventing skew from repeated failures in one type.
These five meet all four criteria. The selection is bounded, not arbitrary.

---

## B3 — Generalizability

The honest answer is: recurrent across the corpus, not universal.
That distinction matters.
The six patterns appeared in more than one case under similar contextual conditions across 27 years and five interface types.
That is enough to structure a pre-selection checklist.
All cases are Western and high-budget.
Other contexts may surface different patterns. The framework is designed to expand through community contribution.

---

## B4 — Scoring algorithm

The full process runs across 16 steps.
The first 15 are the assessment questions, grouped by DIKW layer.
Step 16 is a consistency review: before the report generates, the tool checks for contradictions in your answers and flags them so you can correct them.
Then scores aggregate per interface type and rank.
The designer sees alignments and tensions, not just a number.

---

## B5 — Tie handling

A tie is not a failure.
It means two interface types are genuinely comparable given the inputs.
The report surfaces both side by side: red flags and alignments compared directly.
The designer sees the specific tensions pushing them apart and makes the call.
This is the informs, not decides principle in practice.

---

## B6 — Governance

Year one: I maintain quality while community pull requests are reviewed against the evidence base.
Year two: a contributor council governs and domain-specific forks are enabled.
Year three: full community control with a plugin architecture for swappable components.
MIT license means anyone can use, modify, and extend it today. No permission required.

---

## B7 — TFM scope

This is a master's thesis, deliberately bounded.
One primary contribution: the replicable retrospective validation protocol and values-first filtering method.
The field can build on that independently of the platform.
Three subordinate contributions: the first DIKW application to interface selection, NEXUS as proof of concept, and the open-source governance model.
Field validation across organisations is the explicit next step.
It is not a gap in this work.

---

## B8 — Information Architecture

Every step is visible.
Values ranking goes in at the top.
Fifteen assessment questions feed a weighted scoring engine.
Each of the five interface types receives a score.
Red flag detection cross-checks the top recommendation against the values the organisation ranked highest.
If there is a conflict, a warning is added.
The designer sees the reasoning behind every flag, not just the conclusion.
