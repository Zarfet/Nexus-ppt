# NEXUS Defense — Speaker Notes

Full script for all 24 slides (main deck + backup).
`[NEXT]` marks a click/advance cue within the slide.

---

## 01 — Opening question

Has your design recommendation ever been overruled?
[NEXT]
Because someone more senior had a different opinion.
You are not alone.
Every person in this room who has worked in a team has felt this.
That pattern has a name: the HiPPO effect, documented by McAfee and Brynjolfsson in 2012.

---

## 02 — The real problem

Fifteen interviews, from junior designers to senior product managers.
[NEXT]
Not one of them described a systematic process for choosing an interface type.
If experience alone solved this, the most senior people would have a method. They do not.
That is not a personal failure. It is a structural gap.
[NEXT]
[NEXT]
[NEXT]

---

## 03 — The gap

Every methodology reviewed in this research assumes you already know what interface type you are building.
[NEXT]
They guide how to refine it, test it, fit it to users.
[NEXT]
None of them help you choose the type itself.
That is the gap this research confirms.

---

## 04 — The cost

[NEXT]
These five products had the budget, the team, and the technology.
None of them failed because the engineering broke.
Five different companies, five different eras, the same blind spot.
[NEXT]
Hundreds of millions in documented losses.

---

## 05 — The bottleneck

This is not isolated.
[NEXT]
[NEXT]
[NEXT]
These numbers come from MIT and RAND, not from this research.
The failures keep tracing back to the same point: not the technology, the decision before it.
[NEXT]
No tool exists that checks that decision against documented precedent.

---

## 06 — Title

I am Ilverzon Zarate.
This is my thesis defense: Beyond Intuition, A Designer's Framework for Interface Type Selection.
Over the next minutes I will walk you through the problem, the gap, the framework, the evidence, and a live look at the tool.

---

## 07 — The reveal

I built NEXUS.
[NEXT]
You put in an interface decision you are about to make.
NEXUS processes it.
It gives you back a structured report, built from evidence.
Not a verdict. A tool that informs.
The designer still decides.

---

## 08 — The framework

[NEXT]
NEXUS works in four stages. The decision that happens before the first mockup.
[NEXT]
First, values: the organisation ranks what it stands for.
That ranking is the primary filter.
[NEXT]
Second, context: fifteen questions about users, frequency, and consequences.
[NEXT]
Third, pattern matching against five documented failures.
[NEXT]
Fourth, a report. Not a verdict.
The designer reads it and decides.

---

## 09 — DIKW layers

The fifteen questions are not arbitrary.
[NEXT]
Each question maps to a layer of the DIKW hierarchy established by Ackoff in 1989. The order cannot be short-circuited.
[NEXT]
Wisdom layer first: values ranking, before any technical question.
[NEXT]
Knowledge layer: who uses the product and how.
[NEXT]
Information layer: what happens if something goes wrong.
[NEXT]
Data layer last: hard constraints that limit which interface types are viable.
The order cannot be reversed.

---

## 10 — The method

Three phases of evidence.
[NEXT]
First, a literature review across papers confirmed no framework existed for this decision.
Fifteen interviews produced the values taxonomy.
[NEXT]
Second, retrospective testing against five documented failures using only pre-launch public information.
The framework was also tested against five successful products, to confirm it does not raise false alarms. You will see both sets in the live demo.
[NEXT]
Third, usability validation with the same fifteen practitioners.

---

## 11 — Validation

[NEXT]
70% is the minimum for results reliable enough to inform real decisions, per Landis and Koch 1977. We hit 82%.
[NEXT]
Every case passed individually, not just the average.
The red flags detected are not prohibitions. They are ammunition for stakeholder conversations.

---

## 12 — User Journey Map

[NEXT]
This is Ana. A composite of patterns we saw across the fifteen interviews, not one person.
[NEXT]
The diagram walks through her full journey.
[NEXT]
From the meeting where she had no evidence, to the moment she had a PDF.
What I want you to notice is the curve at the bottom: frustrated to confident, in under an hour.
[NEXT]
The HiPPO is still in the room. But now so is the evidence.

---

## 13 — The tool — demo

This is NEXUS.

---

## 14 — Contributions

Four contributions.
[NEXT]
The primary one: a documented process to choose an interface type before building anything. Replicable by any designer, with or without the platform.
[NEXT]
For practice: a structured argument designers can use when someone more senior overrules without evidence.
[NEXT]
For the community: free, no installation needed. Anyone can use it, update it, improve it, and adapt it to their own context.
[NEXT]
And as a position: it informs. It does not decide. Structure in service of human judgment, not instead of it.

---

## 15 — Video recap

Before closing, everything you heard and saw, in one take.

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
