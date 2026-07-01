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
[NEXT]
[NEXT]
[NEXT]
That is not a personal failure. It is a structural gap.

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

I am Ilverzon Zarate. This is my thesis defense: Beyond Intuition, A Designer's Framework for Interface Type Selection.
You just saw the problem. Over the next minutes I will show you what I built to address it.

---

## 07 — The reveal

I built NEXUS.
[NEXT]
You put in your project information and the interface decision you are facing: screen, voice, invisible automation, AI-driven, or spatial computing.
NEXUS processes it through your values, context factors, and documented failure patterns from the research.
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

This is NEXUS. No installation. Open source.
[NEXT]
The demo has three scenario sets:
Five products that failed. Five that succeeded. And Ana's case.
Each preloads real answers so you can trace what inputs generate what output.
[NEXT]
Ana's scenario: a PM pressured to use AR/VR for chronic patient monitoring.
Values ranked first: User Control number one, Accessibility number two.
That ranking filters everything before any technical question is asked.
Each of the fifteen questions has a tooltip explaining why the framework asks it.
Before results, the system flags internal contradictions:
Accessibility ranked second, but the proposed interface excludes the primary user group.
[NEXT]
Four result tabs.
Analysis explains why each interface type scores the way it does: what speaks for it, what speaks against it. The designer reads the reasoning and decides.
Implementation flags AR/VR as contraindicated across five dimensions:
Control violation, accessibility exclusion, regulatory conflict with GDPR Article 9 and EU AI Act, context mismatch, and hardware dependency.
Every flag traces back to a documented pattern from the research. Not an external AI.
[NEXT]
Research shows where your product sits in documented history.
Products that used the same interface type and succeeded. Products that used it and failed.
Real academic papers from Google Scholar in real time. Every source verifiable.
[NEXT]
Actions generates two PDFs.
Technical report for the team.
Executive brief for the HiPPO: the recommendation, the critical flags, and the evidence. One page.
Ana walks in with a document. Flags detected. Evidence nobody can dismiss with just an opinion.

---

## 14 — Contributions

Four contributions.
[NEXT]
The primary one: a documented process to choose an interface type before building anything. Replicable by any designer, with or without the platform.
[NEXT]
For practice: a structured argument designers can use when someone more senior overrules without evidence.
[NEXT]
For the community: free, no installation needed. Anyone can use it, update it, improve it, and adapt it to their own context.
The corpus is bounded by what exists today. The platform is open precisely so the evidence can grow and new interface types can be added as technology evolves.
[NEXT]
And as a position: it informs. It does not decide.
The next time someone overrules your recommendation, you will have evidence. Not just an opinion.

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
Six categories appeared across all five cases: value contradictions, safety mismatches, demographic misalignments, regulatory conflicts, sustainability conflicts, and adoption risks.
Recurrent across 27 years and five interface types. Enough to structure a pre-selection checklist.
All cases are Western and high-budget. Other contexts may surface different patterns.
The framework is designed to expand through community contribution.

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

Year one: quality maintained while community pull requests are reviewed against the evidence base.
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
