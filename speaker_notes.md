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

Fifteen interviews, from junior designers to senior product managers.
Not one of them described a systematic process for choosing an interface type.
If experience alone solved this, the most senior people would have a method. They do not.
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
Five different companies, five different eras, the same blind spot.
Hundreds of millions in documented losses.

---

## 05 — The bottleneck

This is not isolated. These numbers come from MIT and RAND, not from this research.
The failures keep tracing back to the same point: not the technology, the decision before it.
No tool exists that checks that decision against documented precedent.

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
The framework was also tested against five successful products, to confirm it does not raise false alarms. You will see both sets in the live demo.
Third, usability validation with the same fifteen practitioners.

---

## 11 — Validation

Eighty-two percent, and every one of the five cases passed individually, not just the average.
Practitioners told us consistently: the red flags are not prohibitions. They are ammunition for stakeholder conversations.

---

## 12 — User Journey Map

This is Ana. A composite of patterns we saw across the fifteen interviews, not one person.
The diagram walks through her full journey, from the meeting where she had no evidence, to the moment she had a PDF.
What I want you to notice is the curve at the bottom: frustrated to confident, in under an hour.
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

This is the part most AI tools hide. Every step here is visible, nothing is a black box.
The diagram shows why a flag fired, not just that it fired.
That traceability is what makes the report defensible in a room full of stakeholders.
