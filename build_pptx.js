const pptxgen = require("pptxgenjs");

// ── Color palette ──────────────────────────────
const C = {
  bg:          "F4F4F6",
  dark:        "18181F",
  surface:     "FFFFFF",
  accent:      "2563EB",
  ink:         "18181F",
  ink2:        "4B5563",
  ink3:        "6B7280",
  border:      "E4E4EA",
};

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10" × 5.625"
pres.title  = "NEXUS — Defense";
pres.author = "ZARATE Ilverzon";

// ── Helper: slug footer ────────────────────────
function addSlug(slide, num, dark = false) {
  slide.addText([
    { text: "NEXUS", options: { bold: true, color: dark ? "FFFFFF" : C.ink } },
    { text: " · Defense", options: { color: dark ? "858896" : C.ink3 } },
  ], { x: 0.5, y: 5.32, w: 3, h: 0.2, fontSize: 7, fontFace: "Courier New", charSpacing: 2, margin: 0 });
  if (num) {
    slide.addText(String(num), {
      x: 8.5, y: 5.32, w: 1, h: 0.2,
      fontSize: 7, fontFace: "Courier New", charSpacing: 2,
      color: dark ? "858896" : C.ink3, align: "right", margin: 0,
    });
  }
}

// ── Helper: eyebrow ────────────────────────────
function addEyebrow(slide, text, x = 0.5, y = 0.38, dark = false) {
  const lineColor = dark ? "8AB4FF" : C.accent;
  const textColor = dark ? "8AB4FF" : C.accent;
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y: y + 0.055, w: 0.3, h: 0.015,
    fill: { color: lineColor }, line: { color: lineColor, width: 0 },
  });
  slide.addText(text.toUpperCase(), {
    x: x + 0.38, y, w: 8.5, h: 0.22,
    fontSize: 8, fontFace: "Courier New", bold: true,
    color: textColor, charSpacing: 4, margin: 0,
  });
}

// ── Helper: pull-quote ─────────────────────────
function addPullQuote(slide, quote, attribution, x, y, w, h) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w: 0.045, h,
    fill: { color: C.accent }, line: { color: C.accent, width: 0 },
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: x + 0.045, y, w: w - 0.045, h,
    fill: { color: C.surface }, line: { color: C.border, width: 0.5 },
  });
  slide.addText([
    { text: quote, options: { color: C.ink, fontSize: 9, fontFace: "Calibri", breakLine: true } },
    { text: "\n" + attribution, options: { color: C.ink3, fontSize: 7.5, fontFace: "Courier New" } },
  ], { x: x + 0.18, y: y + 0.14, w: w - 0.28, h: h - 0.22, valign: "top", margin: 0 });
}


// ════════════════════════════════════════════════
// S01 — Opening question
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "Opening question");

  slide.addText([
    { text: "Has your design\nrecommendation\never been ", options: { color: C.ink } },
    { text: "overruled?", options: { color: C.accent } },
  ], {
    x: 0.5, y: 0.7, w: 5.6, h: 2.9,
    fontSize: 36, fontFace: "Calibri", bold: true,
    charSpacing: -1.5, lineSpacingMultiple: 1.05, margin: 0,
  });

  slide.addText(
    "Because someone more senior had a different opinion.\nThat pattern has a name: the HiPPO effect (McAfee & Brynjolfsson, 2012).",
    { x: 0.5, y: 3.72, w: 5.5, h: 0.7, fontSize: 11, color: C.ink2, fontFace: "Calibri", margin: 0 }
  );
  slide.addText(
    "NEXUS gives designers a structured argument that holds its ground in the room.",
    { x: 0.5, y: 4.5, w: 5.5, h: 0.5, fontSize: 11, color: C.ink, fontFace: "Calibri", bold: true, margin: 0 }
  );

  // Hippo image placeholder
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.4, y: 0.68, w: 3.1, h: 4.3,
    fill: { color: "EBEBEE" }, line: { color: C.border, width: 0.5 },
  });
  slide.addText("hippo.png", {
    x: 6.4, y: 2.5, w: 3.1, h: 0.4,
    fontSize: 9, color: C.ink3, align: "center", fontFace: "Courier New", margin: 0,
  });

  addSlug(slide, "01");
  slide.addNotes("Has your design recommendation ever been overruled? [Pause.] Because someone more senior had a different opinion. You are not alone. Every person in this room who has worked in a team has felt this. That pattern has a name: the HiPPO effect, documented by McAfee and Brynjolfsson in 2012. NEXUS gives designers a structured argument that holds its ground in the room.");
}

// ════════════════════════════════════════════════
// S02 — What I built (The reveal)
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "What I built");

  slide.addText([
    { text: "Give it a decision.\nGet back ", options: { color: C.ink } },
    { text: "evidence.", options: { color: C.accent } },
  ], { x: 0.5, y: 0.65, w: 9, h: 1.0, fontSize: 28, fontFace: "Calibri", bold: true, charSpacing: -1, lineSpacingMultiple: 1.05, margin: 0 });

  // Three-column flow
  const cols = [
    { label: "Your decision", color: C.ink2, accent: false },
    { label: "NEXUS", color: C.accent, accent: true },
    { label: "A structured report", color: C.ink2, accent: false },
  ];
  const cW = 2.6; const cX0 = 1.2;
  cols.forEach((c, i) => {
    const cx = cX0 + i * (cW + 0.6);
    slide.addShape(pres.shapes.RECTANGLE, { x: cx, y: 1.85, w: cW, h: 2.2, fill: { color: C.surface }, line: { color: C.border, width: 0.5 }, rectRadius: 0.1 });
    slide.addText(c.label, { x: cx, y: 2.7, w: cW, h: 0.5, fontSize: c.accent ? 18 : 14, fontFace: "Calibri", bold: c.accent, color: c.color, align: "center", margin: 0 });
    if (i < 2) {
      slide.addText("→", { x: cx + cW + 0.1, y: 2.75, w: 0.5, h: 0.4, fontSize: 18, color: C.ink3, align: "center", margin: 0 });
    }
  });

  slide.addText("Checked against five documented, public cases. Scoped for a master's thesis, not an industrial system.", {
    x: 0.5, y: 4.4, w: 9, h: 0.5, fontSize: 9, color: C.ink3, fontFace: "Calibri", align: "center", margin: 0,
  });

  addSlug(slide, "02");
  slide.addNotes("I built something called NEXUS. You put in an interface decision you are about to make. It gives you back a structured report, built from evidence. Not a verdict. A tool that informs. The designer still decides.");
}

// ════════════════════════════════════════════════
// S03 — The real problem
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "The gap in practice");

  slide.addText([
    { text: "Fifteen professionals.\n", options: { color: C.ink } },
    { text: "Zero systematic frameworks.", options: { color: C.accent } },
  ], {
    x: 0.5, y: 0.65, w: 9, h: 1.05,
    fontSize: 26, fontFace: "Calibri", bold: true, charSpacing: -1, lineSpacingMultiple: 1.0, margin: 0,
  });

  slide.addText(
    "Across fifteen expert interviews: UX designers, technical leads, quality engineers, project managers, not one described a systematic process for choosing an interface type.",
    { x: 0.5, y: 1.82, w: 9, h: 0.6, fontSize: 11, color: C.ink2, fontFace: "Calibri", margin: 0 }
  );

  const quotes = [
    { q: '"Decisions here are not grounded in evidence. It is much more authoritarian than evidence-based."',   a: "UX/Digital Designer · 15 yrs experience" },
    { q: '"Basically, what prevents me from presenting a structured proposal to the client is the client themselves."', a: "Delivery Project Manager · 8 yrs experience" },
    { q: '"You grab the template you like the most. There is no way to say which interface type suits the project better."', a: "Senior Fullstack Developer · 10 yrs experience" },
  ];
  const qW = 2.88;
  quotes.forEach((q, i) => {
    addPullQuote(slide, q.q, q.a, 0.5 + i * (qW + 0.14), 2.6, qW, 2.4);
  });

  addSlug(slide, "02");
  slide.addNotes("Fifteen interviews. UX designers, tech leads, project managers, quality engineers. Not one described a systematic process for choosing an interface type. One of them put it plainly: I research, I substantiate, and I let go. The decision belongs to someone else. That is not a personal failure. It is a structural gap.");
}

// ════════════════════════════════════════════════
// S03 — Title slide
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };

  // Top accent stripe
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.055,
    fill: { color: C.accent }, line: { color: C.accent, width: 0 },
  });

  slide.addText("Master's Thesis Defense · 2026", { x: 0.5, y: 0.2, w: 6, h: 0.44, fontSize: 22, fontFace: "Calibri", bold: true, charSpacing: 5, color: C.ink, margin: 0 });

  slide.addShape(pres.shapes.OVAL, { x: 0.5, y: 1.1, w: 0.1, h: 0.1, fill: { color: C.accent }, line: { color: C.accent, width: 0 } });
  slide.addText("Beyond Intuition:", { x: 0.68, y: 1.06, w: 4.5, h: 0.22, fontSize: 8, fontFace: "Courier New", color: C.accent, charSpacing: 3, margin: 0 });

  slide.addText([
    { text: "A Designer's Framework for\n", options: { color: C.ink } },
    { text: "Interface Type Selection",      options: { color: C.accent } },
  ], {
    x: 0.5, y: 1.4, w: 9, h: 2.6,
    fontSize: 42, fontFace: "Calibri", bold: true, charSpacing: -2, lineSpacingMultiple: 1.0, margin: 0,
  });

  const meta = [
    ["Author",    "ZARATE Ilverzon"],
    ["Director",  "MONGUET, JM"],
    ["Programme", "MASD · Barcelona (UPC / UB)"],
  ];
  meta.forEach((m, i) => {
    slide.addText([
      { text: m[0] + "\n", options: { color: C.ink3, fontSize: 7, fontFace: "Courier New" } },
      { text: m[1],        options: { color: C.ink,  fontSize: 8, bold: true, fontFace: "Courier New" } },
    ], { x: 0.5 + i * 3.1, y: 5.05, w: 3.0, h: 0.42, margin: 0 });
  });

  slide.addText("03", { x: 9.3, y: 0.2, w: 0.5, h: 0.22, fontSize: 8, color: C.ink3, fontFace: "Courier New", charSpacing: 2, align: "right", margin: 0 });
  slide.addNotes("I am Ilverzon Zarate. Over the next fifteen minutes: the problem, the gap, the framework, the evidence, and a live look at the tool.");
}

// ════════════════════════════════════════════════
// S04 — The gap
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "The gap");

  slide.addText([
    { text: "Good tools for ",   options: { color: C.ink } },
    { text: "how",               options: { color: C.accent } },
    { text: " to design.\nNothing for ", options: { color: C.ink } },
    { text: "what",              options: { color: C.accent } },
    { text: " to design.",       options: { color: C.ink } },
  ], {
    x: 0.5, y: 0.65, w: 4.1, h: 1.5,
    fontSize: 24, fontFace: "Calibri", bold: true, charSpacing: -1, lineSpacingMultiple: 1.0, margin: 0,
  });

  slide.addText("Every design methodology assumes you have already chosen what kind of interface to build.", {
    x: 0.5, y: 2.3, w: 4.1, h: 0.55, fontSize: 11, color: C.ink2, fontFace: "Calibri", margin: 0,
  });
  slide.addText("None of them help you make that choice.", {
    x: 0.5, y: 2.92, w: 4.1, h: 0.32, fontSize: 11.5, color: C.ink, fontFace: "Calibri", bold: true, margin: 0,
  });

  const fw = [
    { name: "Design Thinking",         desc: "How to improve a product once you know what it is",   has: true  },
    { name: "User-Centered Design",     desc: "How to make a product fit its users",                 has: true  },
    { name: "HCD / UX methods",         desc: "How to test and refine an interface",                 has: true  },
    { name: "Choosing the interface type", desc: "Screen · voice · wearable · AI · spatial — which one?", has: false },
  ];
  fw.forEach((f, i) => {
    const fy = 0.72 + i * 1.05;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.05, y: fy, w: 4.45, h: 0.97,
      fill: { color: f.has ? C.surface : "EEF2FF" },
      line: { color: f.has ? C.border : C.accent, width: f.has ? 0.5 : 0 },
    });
    if (!f.has) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 5.05, y: fy, w: 0.05, h: 0.97,
        fill: { color: C.accent }, line: { color: C.accent, width: 0 },
      });
    }
    slide.addText([
      { text: f.name + "\n", options: { bold: true, fontSize: 10, color: C.ink, fontFace: "Calibri" } },
      { text: f.desc,        options: { fontSize: 8.5, color: C.ink2, fontFace: "Calibri" } },
    ], { x: 5.2, y: fy + 0.1, w: 3.45, h: 0.78, valign: "top", margin: 0 });
    slide.addText(f.has ? "Exists" : "Missing", {
      x: 8.75, y: fy + 0.3, w: 0.85, h: 0.32,
      fontSize: 7.5, fontFace: "Courier New", bold: true,
      color: f.has ? "16A34A" : C.accent, align: "right", margin: 0,
    });
  });

  addSlug(slide, "04");
  slide.addNotes("Every framework I reviewed assumes you already know what interface type you are building. They guide how to refine it, test it, fit it to users. None of them help you choose the type itself. That is the gap this research confirms.");
}

// ════════════════════════════════════════════════
// S05 — The cost
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "What happens without a framework", 0.5, 0.33);

  slide.addText([
    { text: "Right technology.\n",        options: { color: C.ink } },
    { text: "Wrong interface type.",      options: { color: C.accent } },
  ], {
    x: 0.5, y: 0.6, w: 9, h: 1.0,
    fontSize: 26, fontFace: "Calibri", bold: true, charSpacing: -1, lineSpacingMultiple: 1.0, margin: 0,
  });

  const cases = [
    { name: "Google Glass",  year: "2013", fail: "Values mismatch",         desc: "Spatial interface forced onto everyday social contexts. Rejected on privacy, not technology." },
    { name: "Humane AI Pin", year: "2024", fail: "Latency + redundancy",    desc: "Screenless wearable with 5–10s delays. Smartphones already solved this." },
    { name: "Rabbit R1",     year: "2024", fail: "Value proposition",       desc: "Dedicated AI hardware with no answer to: \"why not just use my phone?\"" },
    { name: "Fire Phone",    year: "2014", fail: "Task mismatch",           desc: "3D spatial UI on a phone where no daily task required it. $170M writedown." },
    { name: "Clippy",        year: "2001", fail: "Interaction initiation",  desc: "System interrupted users who needed full control. Users demanded removal." },
  ];
  const cW = 1.76;
  cases.forEach((c, i) => {
    const cx = 0.5 + i * (cW + 0.075);
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: 1.72, w: cW, h: 3.08,
      fill: { color: C.surface }, line: { color: C.border, width: 0.5 },
    });
    slide.addText(c.name, { x: cx + 0.12, y: 1.82, w: cW - 0.2, h: 0.3, fontSize: 9.5, bold: true, color: C.ink, fontFace: "Calibri", margin: 0 });
    slide.addText(c.year, { x: cx + 0.12, y: 2.14, w: cW - 0.2, h: 0.22, fontSize: 7.5, color: C.ink3, fontFace: "Courier New", margin: 0 });
    slide.addShape(pres.shapes.LINE, { x: cx + 0.12, y: 2.44, w: cW - 0.24, h: 0, line: { color: C.border, width: 0.5 } });
    slide.addText(c.fail.toUpperCase(), { x: cx + 0.12, y: 2.5, w: cW - 0.2, h: 0.24, fontSize: 7, bold: true, color: C.accent, fontFace: "Courier New", charSpacing: 1, margin: 0 });
    slide.addText(c.desc, { x: cx + 0.12, y: 2.78, w: cW - 0.2, h: 1.85, fontSize: 8, color: C.ink2, fontFace: "Calibri", valign: "top", margin: 0 });
  });

  slide.addText("Millions in combined documented losses across just five cases. Only the numbers companies disclosed.", {
    x: 0.5, y: 4.92, w: 9, h: 0.28, fontSize: 9, color: C.ink2, fontFace: "Calibri", margin: 0,
  });

  addSlug(slide, "05");
  slide.addNotes("These five products had the budget, the team, and the technology. None of them failed because the engineering broke. All of them chose the wrong interface type for the context. Hundreds of millions in documented losses.");
}

// ════════════════════════════════════════════════
// S06 — The bottleneck (dark)
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.dark };
  addEyebrow(slide, "It is not an isolated pattern", 0.5, 0.38, true);

  slide.addText([
    { text: "The failure is not technical.\n", options: { color: "FFFFFF" } },
    { text: "It is structural.",               options: { color: "8AB4FF" } },
  ], {
    x: 0.5, y: 0.68, w: 9, h: 1.05,
    fontSize: 27, fontFace: "Calibri", bold: true, charSpacing: -1, lineSpacingMultiple: 1.0, margin: 0,
  });

  const stats = [
    { n: "95%", desc: "of generative AI pilots fail to deliver measurable impact.",      src: "MIT NANDA · 2025" },
    { n: "80%", desc: "of AI projects never reach real use, twice conventional IT.",   src: "RAND Corporation · 2024" },
    { n: "84%", desc: "of those failures trace to leadership decisions, not engineering.", src: "RAND Corporation · 2024" },
  ];
  stats.forEach((s, i) => {
    const sx = 0.5 + i * 3.12;
    slide.addText(s.n, { x: sx, y: 1.85, w: 3, h: 1.05, fontSize: 52, fontFace: "Courier New", bold: true, color: "8AB4FF", charSpacing: -2, margin: 0 });
    slide.addText(s.desc, { x: sx, y: 3.02, w: 2.9, h: 0.7, fontSize: 9.5, color: "B5B7C2", fontFace: "Calibri", margin: 0 });
    slide.addText(s.src,  { x: sx, y: 3.8,  w: 2.9, h: 0.22, fontSize: 7.5, color: "858896", fontFace: "Courier New", margin: 0 });
  });

  // Pull quote
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.22, w: 0.045, h: 0.72, fill: { color: "8AB4FF" }, line: { color: "8AB4FF", width: 0 } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.545, y: 4.22, w: 9.0, h: 0.72, fill: { color: "1E1E26" }, line: { color: "1E1E26", width: 0 } });
  slide.addText("The bottleneck is the decision. Not the technology.", {
    x: 0.75, y: 4.32, w: 8.7, h: 0.5, fontSize: 12, color: "FFFFFF", fontFace: "Calibri", bold: true, margin: 0,
  });

  addSlug(slide, "06", true);
  slide.addNotes("This is not isolated. Estrada at MIT found in 2025 that 95% of generative AI pilots fail to deliver measurable impact. RAND found in 2024 that 84% of AI project failures trace to leadership decisions, not engineering. The bottleneck is the decision. No tool exists that checks this decision against documented precedent. That is where NEXUS operates.");
}

// ════════════════════════════════════════════════
// S07 — The framework
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "The framework");

  slide.addText([
    { text: "A structured conversation,\nin ", options: { color: C.ink } },
    { text: "four stages.",                    options: { color: C.accent } },
  ], {
    x: 0.5, y: 0.65, w: 4.1, h: 1.25,
    fontSize: 24, fontFace: "Calibri", bold: true, charSpacing: -1, lineSpacingMultiple: 1.0, margin: 0,
  });

  slide.addText("The decision that happens before the first mockup. Made explicit, documented, and defensible.", {
    x: 0.5, y: 2.0, w: 4.1, h: 0.65, fontSize: 10.5, color: C.ink2, fontFace: "Calibri", margin: 0,
  });

  // Principle box
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.8, w: 4.1, h: 1.2, fill: { color: "EEF2FF" }, line: { color: C.accent, width: 0.5 } });
  slide.addText("CORE PRINCIPLE", { x: 0.65, y: 2.9, w: 2.2, h: 0.2, fontSize: 7, fontFace: "Courier New", bold: true, color: C.accent, charSpacing: 3, margin: 0 });
  slide.addText("Values come first.\nBefore any technical question.", { x: 0.65, y: 3.14, w: 3.8, h: 0.55, fontSize: 11, color: C.ink, fontFace: "Calibri", bold: true, margin: 0 });

  const steps = [
    { n: "01 —", t: "Values",   d: "Rank what the organisation stands for. That ranking is the primary filter.",                                    first: true  },
    { n: "02 —", t: "Context",  d: "Fifteen questions: users, frequency, environment, consequence of failure.",                           first: false },
    { n: "03 —", t: "Patterns", d: "Does this resemble any of the five documented failures? The framework flags it.",                first: false },
    { n: "04 —", t: "Report",   d: "Not a verdict. Alignments, tensions, precedents. You read it. You decide.",                           first: false },
  ];
  steps.forEach((s, i) => {
    const sy = 0.65 + i * 1.18;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.05, y: sy, w: 4.45, h: 1.12,
      fill: { color: s.first ? "EEF2FF" : C.surface },
      line: { color: s.first ? C.accent : C.border, width: s.first ? 0 : 0.5 },
    });
    if (s.first) {
      slide.addShape(pres.shapes.RECTANGLE, { x: 5.05, y: sy, w: 0.055, h: 1.12, fill: { color: C.accent }, line: { color: C.accent, width: 0 } });
    }
    slide.addText(s.n, { x: 5.17, y: sy + 0.15, w: 0.68, h: 0.24, fontSize: 8, fontFace: "Courier New", color: C.accent, bold: true, margin: 0 });
    slide.addText(s.t, { x: 5.9,  y: sy + 0.1,  w: 3.45, h: 0.32, fontSize: 10.5, fontFace: "Calibri", bold: true, color: C.ink, margin: 0 });
    slide.addText(s.d, { x: 5.9,  y: sy + 0.44, w: 3.45, h: 0.6,  fontSize: 8.5, color: C.ink2, fontFace: "Calibri", margin: 0 });
  });

  addSlug(slide, "07");
  slide.addNotes("NEXUS works in four stages, grounded in the DIKW hierarchy Ackoff established in 1989. First, values: the organisation ranks what it stands for. That ranking is the primary filter. Second, context: fifteen questions about users, frequency, and consequences. Third, pattern matching against five documented failures. Fourth, a report. Not a verdict. The designer reads it and decides.");
}

// ════════════════════════════════════════════════
// S09b — DIKW layers
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "The framework · DIKW structure");

  slide.addText([
    { text: "15 questions,\n", options: { color: C.ink } },
    { text: "four DIKW layers.", options: { color: C.accent } },
  ], { x: 0.5, y: 0.65, w: 9, h: 1.0, fontSize: 28, fontFace: "Calibri", bold: true, charSpacing: -1, lineSpacingMultiple: 1.05, margin: 0 });

  slide.addText("Each question maps to a layer of the DIKW hierarchy established by Ackoff in 1989. The framework cannot be short-circuited: values are always evaluated before any technical question.", {
    x: 0.5, y: 1.72, w: 9, h: 0.45, fontSize: 10, color: C.ink2, fontFace: "Calibri", margin: 0,
  });

  const layers = [
    { label: "Wisdom", title: "Values ranking", body: "What does your organisation actually stand for? Primary filter. Evaluated before any technical question.", accent: true },
    { label: "Knowledge", title: "Context factors", body: "Task complexity, frequency, predictability, context of use, information type. Who are the users and how do they work?", accent: false },
    { label: "Information", title: "Risk factors", body: "Error consequence, control preference, user demographics, exploration mode. What happens if something goes wrong?", accent: false },
    { label: "Data", title: "Constraints", body: "Product type, existing solutions, interaction initiation, geography. Hard limits that constrain viable interface types.", accent: false },
  ];
  const lW = 2.15; const lX0 = 0.5; const gap = 0.1;
  layers.forEach((l, i) => {
    const lx = lX0 + i * (lW + gap);
    slide.addShape(pres.shapes.RECTANGLE, { x: lx, y: 2.3, w: lW, h: 2.8, fill: { color: l.accent ? "EEF2FF" : C.surface }, line: { color: l.accent ? C.accent : C.border, width: l.accent ? 1.5 : 0.5 }, rectRadius: 0.08 });
    slide.addText(l.label.toUpperCase(), { x: lx + 0.15, y: 2.42, w: lW - 0.3, h: 0.25, fontSize: 8, fontFace: "Courier New", bold: true, color: l.accent ? C.accent : C.ink3, charSpacing: 2, margin: 0 });
    slide.addText(l.title, { x: lx + 0.15, y: 2.72, w: lW - 0.3, h: 0.4, fontSize: 13, fontFace: "Calibri", bold: true, color: C.ink, margin: 0 });
    slide.addText(l.body, { x: lx + 0.15, y: 3.18, w: lW - 0.3, h: 1.75, fontSize: 9, fontFace: "Calibri", color: C.ink2, valign: "top", margin: 0 });
  });

  addSlug(slide, "09");
  slide.addNotes("The fifteen questions are not arbitrary. Wisdom layer first: values ranking, before any technical question. Knowledge layer: context factors, who uses the product and how. Information layer: risk factors, what happens if something goes wrong. Data layer last: hard constraints that limit which interface types are viable. The order cannot be reversed.");
}

// ════════════════════════════════════════════════
// S08 — Research method
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "Research method");

  slide.addText([
    { text: "Three phases.\n",              options: { color: C.ink } },
    { text: "Three kinds of evidence.",     options: { color: C.accent } },
  ], {
    x: 0.5, y: 0.65, w: 9, h: 1.0,
    fontSize: 26, fontFace: "Calibri", bold: true, charSpacing: -1, lineSpacingMultiple: 1.0, margin: 0,
  });

  const phases = [
    {
      n: "PHASE 01", tag: "Construction",
      t: "Built from the literature",
      d: "Literature confirmed the gap. Fifteen practitioner interviews produced the values taxonomy and framework structure.",
      metric: "15", mL1: "practitioners interviewed", mL2: "UX designers · technical leads · quality engineers · project managers",
      accent: false,
    },
    {
      n: "PHASE 02", tag: "Retrospective",
      t: "Tested against history",
      d: "Applied to the five failures using only pre-launch public information. Could the framework have seen what went wrong?",
      metric: "5", mL1: "cases", mL2: "pre-launch data only",
      accent: false,
    },
    {
      n: "PHASE 03", tag: "Proof of concept",
      t: "Validated with practitioners",
      d: "NEXUS built and validated with the same fifteen practitioners. Works in practice, not only on paper, and produced the usability data on the next slide.",
      metric: "15", mL1: "participants", mL2: "tool session",
      accent: true,
    },
  ];
  const pW = 2.93;
  phases.forEach((p, i) => {
    const px = 0.5 + i * (pW + 0.085);
    slide.addShape(pres.shapes.RECTANGLE, {
      x: px, y: 1.75, w: pW, h: 3.52,
      fill: { color: p.accent ? "EEF2FF" : C.surface },
      line: { color: p.accent ? C.accent : C.border, width: 0.5 },
    });
    slide.addText(p.n, { x: px + 0.14, y: 1.87, w: 1.5, h: 0.22, fontSize: 7.5, fontFace: "Courier New", bold: true, color: C.accent, charSpacing: 2, margin: 0 });
    slide.addText(p.tag.toUpperCase(), { x: px + 1.65, y: 1.87, w: 1.15, h: 0.22, fontSize: 7.5, fontFace: "Courier New", color: C.ink3, align: "right", margin: 0 });
    slide.addText(p.t, { x: px + 0.14, y: 2.15, w: pW - 0.28, h: 0.44, fontSize: 11, fontFace: "Calibri", bold: true, color: C.ink, margin: 0 });
    slide.addText(p.d, { x: px + 0.14, y: 2.64, w: pW - 0.28, h: 1.52, fontSize: 8.5, color: C.ink2, fontFace: "Calibri", valign: "top", margin: 0 });
    slide.addShape(pres.shapes.LINE, { x: px + 0.14, y: 4.24, w: pW - 0.28, h: 0, line: { color: C.border, width: 0.5 } });
    slide.addText(p.metric, { x: px + 0.14, y: 4.33, w: 0.62, h: 0.52, fontSize: 20, fontFace: "Courier New", bold: true, color: C.accent, margin: 0 });
    slide.addText([
      { text: p.mL1 + "\n", options: { fontSize: 8,   color: C.ink2, fontFace: "Courier New" } },
      { text: p.mL2,        options: { fontSize: 6.5, color: C.ink3, fontFace: "Courier New" } },
    ], { x: px + 0.85, y: 4.33, w: pW - 1.0, h: 0.55, valign: "middle", margin: 0 });
  });

  addSlug(slide, "08");
  slide.addNotes("Three phases of evidence. First, a literature review confirmed no framework existed for this decision, and fifteen interviews produced the values taxonomy. Second, retrospective testing against five failures using only pre-launch data. Third, validation with the same fifteen practitioners as usability testers.");
}

// ════════════════════════════════════════════════
// S09 — Validation
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "Validation");

  slide.addText([
    { text: "Did it see\nwhat went ", options: { color: C.ink } },
    { text: "wrong?",                options: { color: C.accent } },
  ], {
    x: 0.5, y: 0.65, w: 4.5, h: 1.35,
    fontSize: 26, fontFace: "Calibri", bold: true, charSpacing: -1, lineSpacingMultiple: 1.0, margin: 0,
  });
  slide.addText("Applied to each product using only pre-launch public information.", {
    x: 5.1, y: 0.8, w: 4.4, h: 0.55, fontSize: 11, color: C.ink2, fontFace: "Calibri", margin: 0,
  });

  // Main metric card
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.08, w: 4.15, h: 1.32, fill: { color: C.surface }, line: { color: C.border, width: 0.5 } });
  slide.addText("82%", { x: 0.62, y: 2.12, w: 2.0, h: 1.1, fontSize: 44, fontFace: "Courier New", bold: true, color: C.accent, margin: 0 });
  slide.addText([
    { text: "of documented failure factors identified across all five cases.\n", options: { fontSize: 9, color: C.ink2, fontFace: "Calibri", breakLine: true } },
    { text: "Target 70% · Landis & Koch (1977)",                                 options: { fontSize: 7.5, color: C.ink3, fontFace: "Courier New" } },
  ], { x: 2.68, y: 2.25, w: 1.82, h: 1.0, valign: "middle", margin: 0 });

  // Sub-metric cards
  const sub = [
    { n: "70%",   d: "agreement with designer judgment" },
    { n: "4.3/5", d: "ease of use · 12 of 15 rated 4 or 5" },
  ];
  sub.forEach((m, i) => {
    const mx = 0.5 + i * 2.16;
    slide.addShape(pres.shapes.RECTANGLE, { x: mx, y: 3.5, w: 2.0, h: 1.22, fill: { color: C.surface }, line: { color: C.border, width: 0.5 } });
    slide.addText(m.n, { x: mx + 0.12, y: 3.57, w: 1.8, h: 0.55, fontSize: 20, fontFace: "Courier New", bold: true, color: C.accent, margin: 0 });
    slide.addText(m.d, { x: mx + 0.12, y: 4.16, w: 1.8, h: 0.42, fontSize: 8, color: C.ink2, fontFace: "Calibri", margin: 0 });
  });

  // Table
  const rows = [
    [
      { text: "Product",         options: { bold: true, color: "FFFFFF", fill: { color: C.ink }, fontFace: "Courier New", fontSize: 8 } },
      { text: "What went wrong", options: { bold: true, color: "FFFFFF", fill: { color: C.ink }, fontFace: "Courier New", fontSize: 8 } },
      { text: "Caught?",         options: { bold: true, color: "FFFFFF", fill: { color: C.ink }, fontFace: "Courier New", fontSize: 8, align: "center" } },
    ],
    ["Google Glass",  "Privacy violation in public spaces",       { text: "Yes", options: { bold: true, color: "16A34A", align: "center", fontFace: "Courier New" } }],
    ["Humane AI Pin", "Privacy + tech not ready for context",     { text: "Yes", options: { bold: true, color: "16A34A", align: "center", fontFace: "Courier New" } }],
    ["Rabbit R1",     "Problem users had already solved",         { text: "Yes", options: { bold: true, color: "16A34A", align: "center", fontFace: "Courier New" } }],
    ["Fire Phone",    "Innovation mismatched with phone use",     { text: "Yes", options: { bold: true, color: "16A34A", align: "center", fontFace: "Courier New" } }],
    ["Clippy",        "Automation that removed user control",     { text: "Yes", options: { bold: true, color: "16A34A", align: "center", fontFace: "Courier New" } }],
  ];
  slide.addTable(rows, {
    x: 4.95, y: 2.08, w: 4.55, h: 2.64,
    fontSize: 9, fontFace: "Calibri", color: C.ink,
    border: { pt: 0.5, color: C.border },
    colW: [1.5, 2.4, 0.65],
  });

  addSlug(slide, "09");
  slide.addNotes("82% of documented failure factors detected across all five cases. The threshold was 70%, based on the Landis and Koch criterion from 1977 for substantial agreement in decision support research. We exceeded it. Practitioners told us consistently: the red flags are not prohibitions. They are ammunition for stakeholder conversations.");
}

// ════════════════════════════════════════════════
// S11b — Journey map (Ana)
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "Who uses it · Under what conditions");

  slide.addText([
    { text: "From HiPPO pressure\n", options: { color: C.ink } },
    { text: "to evidence-backed decision.", options: { color: C.accent } },
  ], { x: 0.5, y: 0.65, w: 9, h: 1.0, fontSize: 28, fontFace: "Calibri", bold: true, charSpacing: -1, lineSpacingMultiple: 1.05, margin: 0 });

  slide.addText("Ana, a product manager in healthtech, walks into a meeting where AR/VR is being pushed without evidence. This is what happens next.\n\nEmotion goes from frustrated to confident. The HiPPO is still in the room. But now so is the evidence.", {
    x: 0.5, y: 1.8, w: 3.5, h: 1.6, fontSize: 10, color: C.ink2, fontFace: "Calibri", valign: "top", margin: 0,
  });

  const stages = [
    { n: "01", label: "Trigger", desc: "Team meets. HiPPO pushes AR/VR. Ana has doubts but no evidence." },
    { n: "02", label: "Discovery", desc: "Searches for frameworks. Finds NEXUS. Understands it in 2 min." },
    { n: "03", label: "Assessment", desc: "Ranks values (Control first). Answers 9 questions. 10 minutes." },
    { n: "04", label: "Interpretation", desc: "Reads recommendation: Screen + AI. Reviews AR/VR red flags." },
    { n: "05", label: "Decision", desc: "Presents report. Team aligns on Screen. Decision in 1 hour." },
  ];
  const sW = 1.72; const sX0 = 4.2;
  stages.forEach((s, i) => {
    const sx = sX0 + i * (sW + 0.06);
    const isLast = i === stages.length - 1;
    slide.addShape(pres.shapes.RECTANGLE, { x: sx, y: 1.8, w: sW, h: 3.2, fill: { color: isLast ? C.accent : C.surface }, line: { color: isLast ? C.accent : C.border, width: 0.5 }, rectRadius: 0.07 });
    slide.addText(s.n + " — " + s.label, { x: sx + 0.1, y: 1.9, w: sW - 0.2, h: 0.3, fontSize: 8, fontFace: "Courier New", bold: true, color: isLast ? "FFFFFF" : C.accent, charSpacing: 1, margin: 0 });
    slide.addText(s.desc, { x: sx + 0.1, y: 2.28, w: sW - 0.2, h: 2.5, fontSize: 8.5, fontFace: "Calibri", color: isLast ? "FFFFFF" : C.ink2, valign: "top", margin: 0 });
  });

  addSlug(slide, "12");
  slide.addNotes("Meet Ana. Product manager in healthtech. AR/VR is being pushed in a meeting by someone senior, with no evidence. She has doubts and no framework to push back. She runs NEXUS in ten minutes. The report flags the same risks she felt but could not articulate. She walks back into that meeting with a PDF. The HiPPO is still in the room. But now so is the evidence.");
}

// ════════════════════════════════════════════════
// S10 — Demo
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "The tool");

  slide.addText([
    { text: "NEXUS in the browser.\n", options: { color: C.ink } },
    { text: "Live demo.",              options: { color: C.accent } },
  ], {
    x: 0.5, y: 0.65, w: 4.2, h: 1.2,
    fontSize: 26, fontFace: "Calibri", bold: true, charSpacing: -1, lineSpacingMultiple: 1.0, margin: 0,
  });
  slide.addText("Fifteen minutes, no installation. A guided conversation about values, context, and constraints. Ending in a report, not an answer.", {
    x: 0.5, y: 1.95, w: 4.2, h: 0.8, fontSize: 10.5, color: C.ink2, fontFace: "Calibri", margin: 0,
  });

  // URL card
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.75, w: 4.2, h: 0.5, fill: { color: C.ink }, line: { color: C.ink, width: 0 } });
  slide.addShape(pres.shapes.OVAL,      { x: 0.67, y: 2.93, w: 0.11, h: 0.11, fill: { color: "8AB4FF" }, line: { color: "8AB4FF", width: 0 } });
  slide.addText("nexus-flame-delta.vercel.app", { x: 0.88, y: 2.82, w: 3.6, h: 0.35, fontSize: 9, fontFace: "Courier New", color: "FFFFFF", bold: true, margin: 0 });
  slide.addText("Open source · MIT License · github.com/Zarfet/reason-road", {
    x: 0.5, y: 3.37, w: 4.2, h: 0.25, fontSize: 8, color: C.ink3, fontFace: "Courier New", margin: 0,
  });

  // Cue panel
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.0, y: 0.62, w: 4.5, h: 4.75, fill: { color: C.surface }, line: { color: C.border, width: 0.5 } });
  const cues = [
    { label: "INPUT",    text: "Rank five values.",           sub: "Control · accessibility · sustainability · efficiency · joy." },
    { label: "THEN",     text: "Answer 15 context questions.", sub: "Users · frequency · environment · consequence of failure." },
    { label: "OUTPUT",   text: "A structured report.",         sub: "Type alignment · tensions · relevant historical precedents." },
    { label: "POSITION", text: "It informs. You decide.",      sub: "",  accent: true },
  ];
  cues.forEach((c, i) => {
    const cy = 0.82 + i * 1.12;
    if (i < 3) slide.addShape(pres.shapes.LINE, { x: 5.15, y: cy + 1.02, w: 4.2, h: 0, line: { color: C.border, width: 0.5 } });
    slide.addText(c.label, { x: 5.15, y: cy, w: 1.1, h: 0.27, fontSize: 7.5, fontFace: "Courier New", bold: true, color: C.accent, charSpacing: 2.5, margin: 0 });
    slide.addText(c.text, { x: 6.35, y: cy - 0.03, w: 2.98, h: 0.36, fontSize: 10.5, fontFace: "Calibri", bold: true, color: c.accent ? C.accent : C.ink, margin: 0 });
    if (c.sub) slide.addText(c.sub, { x: 6.35, y: cy + 0.36, w: 2.98, h: 0.27, fontSize: 8, fontFace: "Courier New", color: C.ink2, margin: 0 });
  });

  addSlug(slide, "10");
  slide.addNotes("This is NEXUS. No installation. Open source under MIT license. [Switch to browser: values ranking, two questions, report output. 90 seconds.]");
}

// ════════════════════════════════════════════════
// S11 — Contributions
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "Contributions");

  slide.addText([
    { text: "Four contributions.\n",  options: { color: C.ink } },
    { text: "One open platform.",     options: { color: C.accent } },
  ], {
    x: 0.5, y: 0.65, w: 9, h: 1.0,
    fontSize: 26, fontFace: "Calibri", bold: true, charSpacing: -1, lineSpacingMultiple: 1.0, margin: 0,
  });

  const cards = [
    { label: "For the field",     t: "A replicable method",                    d: "First application of DIKW to interface type selection. Extensible to new types, contexts, and failures not yet documented.", accent: false },
    { label: "For practice",      t: "Evidence to defend good decisions",       d: "A structured argument for designers. Makes judgment visible, documented, and harder to override by opinion alone, including the HiPPO's.", accent: false },
    { label: "For the community", t: "Infrastructure that outlives the defense",d: "MIT-licensed. Open to all. The research does not end here.", accent: false },
    { label: "As a position",     t: '"It informs. It does not decide."',       d: "Structure in service of human judgment, not instead of it.", accent: true },
  ];
  const cW = 4.35, cH = 1.8;
  cards.forEach((c, i) => {
    const cx = 0.5  + (i % 2) * (cW + 0.08);
    const cy = 1.78 + Math.floor(i / 2) * (cH + 0.08);
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: cW, h: cH,
      fill: { color: c.accent ? "EEF2FF" : C.surface },
      line: { color: c.accent ? C.accent : C.border, width: c.accent ? 0 : 0.5 },
    });
    slide.addText(c.label.toUpperCase(), { x: cx + 0.2, y: cy + 0.15, w: cW - 0.35, h: 0.22, fontSize: 7.5, fontFace: "Courier New", bold: true, color: C.accent, charSpacing: 2.5, margin: 0 });
    slide.addText(c.t, { x: cx + 0.2, y: cy + 0.42, w: cW - 0.35, h: 0.44, fontSize: c.accent ? 13 : 12, fontFace: "Calibri", bold: true, color: c.accent ? C.accent : C.ink, margin: 0 });
    slide.addText(c.d, { x: cx + 0.2, y: cy + 0.92, w: cW - 0.35, h: 0.72, fontSize: 8.5, color: c.accent ? C.ink : C.ink2, fontFace: "Calibri", valign: "top", margin: 0 });
  });

  addSlug(slide, "11");
  slide.addNotes("Four contributions. Primary: the first replicable protocol for this decision, grounded in DIKW. For practice: evidence designers can use to hold their ground. For the community: open infrastructure that outlives this defense. And as a position: it informs. It does not decide.");
}

// ════════════════════════════════════════════════
// S14b — Process in motion (slide 15)
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };

  slide.addText([
    { text: "Under a minute.\n", options: { color: C.ink } },
    { text: "Everything you just heard, in motion.", options: { color: C.accent } },
  ], { x: 1, y: 1.8, w: 8, h: 1.4, fontSize: 32, fontFace: "Calibri", bold: true, charSpacing: -1.5, lineSpacingMultiple: 1.1, align: "center", margin: 0 });

  slide.addText("[ Video: nexus_process.gif ]", {
    x: 2.5, y: 3.4, w: 5, h: 0.5, fontSize: 10, color: C.ink3, fontFace: "Courier New", align: "center", margin: 0,
  });

  addSlug(slide, "15");
  slide.addNotes("Before I close, this is what all of that looks like in motion.");
}

// ════════════════════════════════════════════════
// S12 — Thank you
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };

  slide.addText([
    { text: "Thank\n", options: { color: C.ink } },
    { text: "you.",    options: { color: C.accent } },
  ], {
    x: 0.5, y: 0.7, w: 8, h: 3.4,
    fontSize: 72, fontFace: "Calibri", bold: true, charSpacing: -3, lineSpacingMultiple: 0.95, margin: 0,
  });

  slide.addText("NEXUS · Evidence-based interface selection.\nOpen source, and yours to use.", {
    x: 0.5, y: 4.1, w: 7, h: 0.65, fontSize: 11.5, color: C.ink2, fontFace: "Calibri", margin: 0,
  });

  const links = [
    ["TOOL",    "nexus-flame-delta.vercel.app"],
    ["CODE",    "github.com/Zarfet/reason-road"],
    ["LICENSE", "MIT"],
  ];
  links.forEach((l, i) => {
    slide.addText([
      { text: l[0] + "  ", options: { color: C.accent, bold: true } },
      { text: l[1],         options: { color: C.ink3 } },
    ], { x: 0.5 + i * 3.1, y: 4.88, w: 3.0, h: 0.24, fontSize: 8, fontFace: "Courier New", margin: 0 });
  });

  slide.addText("End · Questions welcome", {
    x: 7.0, y: 0.35, w: 2.7, h: 0.24, fontSize: 8, fontFace: "Courier New",
    color: C.accent, charSpacing: 1, align: "right", margin: 0,
  });

  slide.addNotes("Thank you. Questions welcome.");
}


// ════════════════════════════════════════════════
// B1 — Why DIKW
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "Backup · Framework Selection");

  slide.addText([
    { text: "Why DIKW and not\n", options: { color: C.ink } },
    { text: "Cynefin, AHP, or TAM?", options: { color: C.accent } },
  ], {
    x: 0.5, y: 0.7, w: 9, h: 1.0,
    fontSize: 28, fontFace: "Calibri", bold: true, charSpacing: -1,
    lineSpacingMultiple: 1.05, margin: 0,
  });

  const rows = [
    [
      { text: "Requirement",      options: { bold: false, color: C.ink3, fontFace: "Courier New", fontSize: 8, charSpacing: 2, fill: { color: C.bg } } },
      { text: "Design Thinking",  options: { bold: false, color: C.ink3, fontFace: "Courier New", fontSize: 8, charSpacing: 2, align: "center", fill: { color: C.bg } } },
      { text: "TAM",              options: { bold: false, color: C.ink3, fontFace: "Courier New", fontSize: 8, charSpacing: 2, align: "center", fill: { color: C.bg } } },
      { text: "MCDA",             options: { bold: false, color: C.ink3, fontFace: "Courier New", fontSize: 8, charSpacing: 2, align: "center", fill: { color: C.bg } } },
      { text: "DIKW",             options: { bold: true,  color: C.accent, fontFace: "Courier New", fontSize: 8, charSpacing: 2, align: "center", fill: { color: C.bg } } },
    ],
    ...[
      ["Operates before type selection",             "No",  "No",  "Partial", "Yes"],
      ["Accommodates values without quantification", "Yes", "No",  "No",      "Yes"],
      ["Enables cross-type comparison",              "No",  "Yes", "Yes",     "Yes"],
      ["Incorporates documented failure patterns",   "No",  "No",  "No",      "Yes"],
      ["Accessible to non-specialist practitioners", "Yes", "No",  "No",      "Yes"],
    ].map(r => [
      { text: r[0], options: { color: C.ink,   fontSize: 9, fontFace: "Calibri", fill: { color: C.surface } } },
      { text: r[1], options: { color: C.ink3,  fontSize: 9, fontFace: "Calibri", align: "center", fill: { color: C.surface } } },
      { text: r[2], options: { color: C.ink3,  fontSize: 9, fontFace: "Calibri", align: "center", fill: { color: C.surface } } },
      { text: r[3], options: { color: C.ink3,  fontSize: 9, fontFace: "Calibri", align: "center", fill: { color: C.surface } } },
      { text: r[4], options: { bold: true, color: C.accent, fontSize: 9, fontFace: "Calibri", align: "center", fill: { color: C.surface } } },
    ]),
  ];

  slide.addTable(rows, {
    x: 0.5, y: 1.85, w: 9.0,
    colW: [3.8, 1.6, 0.9, 0.9, 1.8],
    rowH: 0.42,
    border: { type: "solid", pt: 0.5, color: C.border },
  });

  addSlug(slide, "B1");
  slide.addNotes("DIKW is the only framework that explicitly separates what we know from why it matters. Other frameworks optimize process or predict adoption after the fact. None of them address the prior question: what interface type should we be building at all. DIKW does. And it is the only one that places values above technical criteria, which is exactly what this decision requires.");
}


// ════════════════════════════════════════════════
// B2 — Case selection criteria
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "Backup · Methodology");

  slide.addText([
    { text: "Why these five cases\n", options: { color: C.ink } },
    { text: "and not others?", options: { color: C.accent } },
  ], {
    x: 0.5, y: 0.7, w: 9, h: 1.0,
    fontSize: 28, fontFace: "Calibri", bold: true, charSpacing: -1,
    lineSpacingMultiple: 1.05, margin: 0,
  });

  const steps = [
    { n: "01", t: "Commercial impact",      d: "Min. €100M investment or significant market withdrawal.", first: true },
    { n: "02", t: "Documentation quality",  d: "Multiple independent sources: press, company comms, academic papers, user feedback.", first: false },
    { n: "03", t: "Temporal coverage",      d: "1997–2024 across five interface types: automation, spatial, AI, screen, voice.", first: false },
    { n: "04", t: "Interface type diversity", d: "One case per category. Prevents skew from repeated failures in one type.", first: false },
  ];

  const cW = 4.35, cH = 1.55, gap = 0.3;
  steps.forEach((s, i) => {
    const cx = 0.5 + (i % 2) * (cW + gap);
    const cy = 1.9 + Math.floor(i / 2) * (cH + gap);
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: cW, h: cH,
      fill: { color: s.first ? "EEF3FF" : C.surface },
      line: { color: s.first ? C.accent : C.border, width: s.first ? 0.75 : 0.5 },
    });
    if (s.first) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: cx, y: cy, w: 0.05, h: cH,
        fill: { color: C.accent }, line: { color: C.accent, width: 0 },
      });
    }
    slide.addText(s.n, { x: cx, y: cy + 0.14, w: cW, h: 0.22, fontSize: 8, fontFace: "Courier New", bold: true, color: C.accent, charSpacing: 1.5, align: "center", margin: 0 });
    slide.addText(s.t, { x: cx, y: cy + 0.40, w: cW, h: 0.42, fontSize: 20, fontFace: "Calibri", bold: true, color: C.ink, align: "center", margin: 0 });
    slide.addText(s.d, { x: cx + 0.18, y: cy + 0.88, w: cW - 0.36, h: 0.55, fontSize: 9, fontFace: "Calibri", color: C.ink2, align: "center", valign: "top", margin: 0 });
  });

  addSlug(slide, "B2");
  slide.addNotes("Five criteria: public documentation, pre-launch data available, commercial failure confirmed, interface type mismatch as primary cause, diverse enough to cover multiple categories. These five meet all five criteria. The selection is bounded, not arbitrary.");
}


// ════════════════════════════════════════════════
// B3 — Generalizability
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "Backup · Scope");

  slide.addText([
    { text: "Are the patterns\n", options: { color: C.ink } },
    { text: "actually generalizable?", options: { color: C.accent } },
  ], {
    x: 0.5, y: 0.7, w: 9, h: 1.0,
    fontSize: 28, fontFace: "Calibri", bold: true, charSpacing: -1,
    lineSpacingMultiple: 1.05, margin: 0,
  });

  slide.addText("Recurrent across the corpus, not universal. That distinction matters.", {
    x: 0.5, y: 1.78, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Calibri", color: C.ink, margin: 0,
  });

  const cW = 4.35, cH = 1.5, cY = 2.25;
  // Card 1 — accent
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: cY, w: cW, h: cH, fill: { color: "EEF3FF" }, line: { color: C.accent, width: 0.5 } });
  slide.addText("WHAT THE CORPUS SUPPORTS", { x: 0.7, y: cY + 0.14, w: cW - 0.3, h: 0.2, fontSize: 7, fontFace: "Courier New", bold: true, color: C.accent, charSpacing: 2.5, margin: 0 });
  slide.addText("Five cases, 27 years, five interface types. All failures traceable to the same six pattern categories. Sufficient to structure a pre-selection checklist.", { x: 0.7, y: cY + 0.42, w: cW - 0.3, h: 0.95, fontSize: 9.5, fontFace: "Calibri", color: C.ink, valign: "top", margin: 0 });

  // Card 2 — neutral
  const cx2 = 0.5 + cW + 0.3;
  slide.addShape(pres.shapes.RECTANGLE, { x: cx2, y: cY, w: cW, h: cH, fill: { color: C.surface }, line: { color: C.border, width: 0.5 } });
  slide.addText("WHAT IT DOES NOT CLAIM", { x: cx2 + 0.2, y: cY + 0.14, w: cW - 0.3, h: 0.2, fontSize: 7, fontFace: "Courier New", bold: true, color: C.ink3, charSpacing: 2.5, margin: 0 });
  slide.addText("All cases are Western and high-budget. Other contexts may surface different patterns. The framework is designed to expand through community contribution.", { x: cx2 + 0.2, y: cY + 0.42, w: cW - 0.3, h: 0.95, fontSize: 9.5, fontFace: "Calibri", color: C.ink2, valign: "top", margin: 0 });

  addPullQuote(slide, "It structures the questions that make failure less invisible.", "", 0.5, 3.93, 9.0, 0.82);

  addSlug(slide, "B3");
  slide.addNotes("Recurrent across the corpus, not universal. That distinction matters. The six patterns appeared in more than one case under similar contextual conditions. They are signals, not laws. The framework flags them. The designer interprets them.");
}


// ════════════════════════════════════════════════
// B4 — Scoring algorithm
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "Backup · Technical");

  slide.addText([
    { text: "How does the scoring\n", options: { color: C.ink } },
    { text: "algorithm work?", options: { color: C.accent } },
  ], {
    x: 0.5, y: 0.7, w: 9, h: 1.0,
    fontSize: 28, fontFace: "Calibri", bold: true, charSpacing: -1,
    lineSpacingMultiple: 1.05, margin: 0,
  });

  const steps = [
    { n: "01", t: "Values filter first",  d: "Types contradicting top-ranked values are flagged before scoring. Hard filter, not a weight.", first: true },
    { n: "02", t: "Context scoring",      d: "15 questions map to each type’s strengths. Responses generate a compatibility profile per type.", first: false },
    { n: "03", t: "Pattern matching",     d: "Failure triggers activate red flags with severity: blocking, critical, or warning.", first: false },
    { n: "04", t: "Report generation",    d: "Alignments and tensions, not scores. The designer sees the reasoning, not just the result.", first: false },
  ];

  const cW = 4.35, cH = 1.55, gap = 0.3;
  steps.forEach((s, i) => {
    const cx = 0.5 + (i % 2) * (cW + gap);
    const cy = 1.9 + Math.floor(i / 2) * (cH + gap);
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: cW, h: cH,
      fill: { color: s.first ? "EEF3FF" : C.surface },
      line: { color: s.first ? C.accent : C.border, width: s.first ? 0.75 : 0.5 },
    });
    if (s.first) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: cx, y: cy, w: 0.05, h: cH,
        fill: { color: C.accent }, line: { color: C.accent, width: 0 },
      });
    }
    slide.addText(s.n, { x: cx, y: cy + 0.14, w: cW, h: 0.22, fontSize: 8, fontFace: "Courier New", bold: true, color: C.accent, charSpacing: 1.5, align: "center", margin: 0 });
    slide.addText(s.t, { x: cx, y: cy + 0.40, w: cW, h: 0.42, fontSize: 20, fontFace: "Calibri", bold: true, color: C.ink, align: "center", margin: 0 });
    slide.addText(s.d, { x: cx + 0.18, y: cy + 0.88, w: cW - 0.36, h: 0.55, fontSize: 9, fontFace: "Calibri", color: C.ink2, align: "center", valign: "top", margin: 0 });
  });

  addSlug(slide, "B4");
  slide.addNotes("Four steps. Each answer is scored on a fixed scale. Scores are weighted by DIKW layer, with Wisdom weighted highest. Weights are adjusted by context modifiers from the product context questions. Scores are aggregated per interface type and ranked.");
}


// ════════════════════════════════════════════════
// B5 — Tie handling
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "Backup · Technical");

  slide.addText([
    { text: "What if two interface types\n", options: { color: C.ink } },
    { text: "score the same?", options: { color: C.accent } },
  ], {
    x: 0.5, y: 0.7, w: 9, h: 1.0,
    fontSize: 28, fontFace: "Calibri", bold: true, charSpacing: -1,
    lineSpacingMultiple: 1.05, margin: 0,
  });

  slide.addText("A tie is not a failure. It is information.", {
    x: 0.5, y: 1.78, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Calibri", color: C.ink, margin: 0,
  });

  const cards = [
    { label: "WHAT IT MEANS",         body: "The context doesn’t strongly favour either type. Both are viable given current inputs.", accent: true },
    { label: "WHAT THE REPORT SHOWS", body: "Both types side by side: red flags and alignments compared directly. Tension profiles, not scores.", accent: false },
    { label: "WHAT THE DESIGNER DOES", body: "Decides based on specific risks. The “informs, not decides” principle in practice.", accent: false },
  ];

  const cW = 2.85, cH = 1.65, gap = 0.23;
  cards.forEach((c, i) => {
    const cx = 0.5 + i * (cW + gap);
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: 2.3, w: cW, h: cH,
      fill: { color: c.accent ? "EEF3FF" : C.surface },
      line: { color: c.accent ? C.accent : C.border, width: c.accent ? 0.75 : 0.5 },
    });
    slide.addText(c.label, { x: cx + 0.18, y: 2.44, w: cW - 0.3, h: 0.2, fontSize: 7, fontFace: "Courier New", bold: true, color: c.accent ? C.accent : C.ink3, charSpacing: 2.5, margin: 0 });
    slide.addText(c.body, { x: cx + 0.18, y: 2.72, w: cW - 0.3, h: 1.1, fontSize: 9.5, fontFace: "Calibri", color: c.accent ? C.ink : C.ink2, valign: "top", margin: 0 });
  });

  addSlug(slide, "B5");
  slide.addNotes("A tie is not a failure. It means two interface types are genuinely comparable given the inputs. The report surfaces both with their full profiles and flags which contextual factors are pushing them apart. The designer uses that to make the call.");
}


// ════════════════════════════════════════════════
// B6 — Governance
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "Backup · Future");

  slide.addText([
    { text: "How does NEXUS evolve\n", options: { color: C.ink } },
    { text: "after this defense?", options: { color: C.accent } },
  ], {
    x: 0.5, y: 0.7, w: 9, h: 1.0,
    fontSize: 28, fontFace: "Calibri", bold: true, charSpacing: -1,
    lineSpacingMultiple: 1.05, margin: 0,
  });

  const steps = [
    { n: "Year 1 —", t: "Single maintainer",    d: "Author maintains quality. Community PRs accepted via structured review.", first: true },
    { n: "Year 2 —", t: "Community steering",   d: "Contributor council governs. Domain-specific forks enabled.", first: false },
    { n: "Year 3 —", t: "Distributed ownership", d: "Full community control. Plugin architecture for swappable AI providers.", first: false },
  ];

  const sW = 4.3, sH = 1.1, gap = 0.2;
  steps.forEach((s, i) => {
    const sy = 1.85 + i * (sH + gap);
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: sy, w: sW, h: sH,
      fill: { color: s.first ? "EEF3FF" : C.surface },
      line: { color: s.first ? C.accent : C.border, width: s.first ? 0.75 : 0.5 },
    });
    if (s.first) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.5, y: sy, w: 0.05, h: sH,
        fill: { color: C.accent }, line: { color: C.accent, width: 0 },
      });
    }
    slide.addText(s.n, { x: 0.7, y: sy + 0.1, w: 1.1, h: 0.22, fontSize: 7.5, fontFace: "Courier New", bold: true, color: C.accent, charSpacing: 1.5, margin: 0 });
    slide.addText(s.t, { x: 1.82, y: sy + 0.08, w: sW - 1.45, h: 0.28, fontSize: 12, fontFace: "Calibri", bold: true, color: C.ink, margin: 0 });
    slide.addText(s.d, { x: 0.7, y: sy + 0.42, w: sW - 0.3, h: 0.55, fontSize: 9, fontFace: "Calibri", color: C.ink2, valign: "top", margin: 0 });
  });

  addPullQuote(slide, "MIT license means anyone can use, modify, and extend it. No permission required, no payment needed.", "", 5.1, 1.85, 4.4, 3.3);

  addSlug(slide, "B6");
  slide.addNotes("Three mechanisms. Community contributions via GitHub pull requests, reviewed against the existing evidence base. Academic updates when new documented cases meet the selection criteria. And a governance model that prevents single-actor capture of the framework.");
}


// ════════════════════════════════════════════════
// B7 — TFM scope
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "Backup · Scope");

  slide.addText([
    { text: "Is this a master’s thesis\n", options: { color: C.ink } },
    { text: "or a doctoral dissertation?", options: { color: C.accent } },
  ], {
    x: 0.5, y: 0.7, w: 9, h: 1.0,
    fontSize: 28, fontFace: "Calibri", bold: true, charSpacing: -1,
    lineSpacingMultiple: 1.05, margin: 0,
  });

  slide.addText("Deliberately bounded. One primary contribution, three subordinate.", {
    x: 0.5, y: 1.78, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Calibri", color: C.ink, margin: 0,
  });

  const cW = 4.35, cH = 1.5, cY = 2.25;
  // Card 1 — accent
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: cY, w: cW, h: cH, fill: { color: "EEF3FF" }, line: { color: C.accent, width: 0.5 } });
  slide.addText("PRIMARY — METHODOLOGICAL", { x: 0.7, y: cY + 0.14, w: cW - 0.3, h: 0.2, fontSize: 7, fontFace: "Courier New", bold: true, color: C.accent, charSpacing: 2.5, margin: 0 });
  slide.addText("Replicable retrospective validation and values-first filtering. The field can build on this independently of the platform.", { x: 0.7, y: cY + 0.42, w: cW - 0.3, h: 0.95, fontSize: 9.5, fontFace: "Calibri", color: C.ink, valign: "top", margin: 0 });

  // Card 2 — neutral
  const cx2 = 0.5 + cW + 0.3;
  slide.addShape(pres.shapes.RECTANGLE, { x: cx2, y: cY, w: cW, h: cH, fill: { color: C.surface }, line: { color: C.border, width: 0.5 } });
  slide.addText("SUBORDINATE CONTRIBUTIONS", { x: cx2 + 0.2, y: cY + 0.14, w: cW - 0.3, h: 0.2, fontSize: 7, fontFace: "Courier New", bold: true, color: C.ink3, charSpacing: 2.5, margin: 0 });
  slide.addText("Theoretical: first DIKW application. Practical: NEXUS as proof of concept. Infrastructural: open-source governance model.", { x: cx2 + 0.2, y: cY + 0.42, w: cW - 0.3, h: 0.95, fontSize: 9.5, fontFace: "Calibri", color: C.ink2, valign: "top", margin: 0 });

  addPullQuote(slide, "Field validation across organizations is the explicit next step, it is not a gap in this work.", "", 0.5, 3.93, 9.0, 0.82);

  addSlug(slide, "B7");
  slide.addNotes("Deliberately bounded. One primary methodological contribution, three subordinate ones. The scope is one decision, one context, one validation cycle. Field validation across organisations is the explicit next step. It is not a gap in this work.");
}


// ════════════════════════════════════════════════
// B8 — Information Architecture
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.bg };
  addEyebrow(slide, "Backup · Architecture");

  slide.addText([
    { text: "Input to output.\n", options: { color: C.ink } },
    { text: "Every step transparent.", options: { color: C.accent } },
  ], { x: 0.5, y: 0.65, w: 9, h: 1.0, fontSize: 28, fontFace: "Calibri", bold: true, charSpacing: -1, lineSpacingMultiple: 1.05, margin: 0 });

  const steps = [
    { label: "Values ranking", desc: "Organisation ranks what it stands for. Primary filter — evaluated before all else." },
    { label: "9 Assessment questions", desc: "Context · risk · constraints. Mapped to DIKW layer. Order cannot be reversed." },
    { label: "Weighted scoring engine", desc: "Each answer scored on fixed scale. Weights by DIKW layer (Wisdom highest)." },
    { label: "5 Interface type scores", desc: "Screen · Voice · AR/VR · Conversational AI · Automation. Ranked by compatibility." },
    { label: "Red flag detection", desc: "Cross-checks top recommendation against top-ranked values. Conflicts surface as warnings." },
    { label: "Structured report", desc: "Alignments, tensions, precedents. Designer reads it. Designer decides." },
  ];

  steps.forEach((s, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const sx = 0.5 + col * 3.1;
    const sy = 1.85 + row * 1.5;
    slide.addShape(pres.shapes.RECTANGLE, { x: sx, y: sy, w: 2.95, h: 1.3, fill: { color: C.surface }, line: { color: C.border, width: 0.5 }, rectRadius: 0.08 });
    slide.addText(`${String(i + 1).padStart(2, "0")} — ${s.label}`, { x: sx + 0.15, y: sy + 0.1, w: 2.65, h: 0.28, fontSize: 9, fontFace: "Courier New", bold: true, color: C.accent, margin: 0 });
    slide.addText(s.desc, { x: sx + 0.15, y: sy + 0.42, w: 2.65, h: 0.76, fontSize: 9, fontFace: "Calibri", color: C.ink2, valign: "top", margin: 0 });
    if (i < 5) {
      const arrowX = (col === 2) ? sx + 1.47 : sx + 2.95 + 0.02;
      const arrowY = (col === 2) ? sy + 1.3 + 0.05 : sy + 0.57;
      slide.addText(col === 2 ? "↓" : "→", { x: arrowX, y: arrowY, w: 0.25, h: 0.25, fontSize: 12, color: C.ink3, align: "center", margin: 0 });
    }
  });

  addSlug(slide, "B8");
  slide.addNotes("Every step is visible. Values ranking goes in at the top. Nine assessment questions feed a weighted scoring engine. Each of the five interface types receives a score. Red flag detection cross-checks the top recommendation against the values the organisation ranked highest. If there is a conflict, a warning is added. The designer sees the reasoning behind every flag, not just the conclusion.");
}

// ── Write file ────────────────────────────────
pres.writeFile({ fileName: "/Users/zarfet/TFM_MVP/Nexus_ppt/NEXUS_Defense.pptx" })
  .then(() => console.log("✓ NEXUS_Defense.pptx written successfully"))
  .catch((err) => { console.error(err); process.exit(1); });
