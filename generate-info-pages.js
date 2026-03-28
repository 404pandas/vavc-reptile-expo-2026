// generate-info-pages.js — node generate-info-pages.js
const fs = require("fs");
const path = require("path");
const { buildSidenav, buildNav, buildFooter, SCRIPTS } = require("./shared");

const INFO_PAGES = [
  {
    title: "Water Quality",
    slug: "water-quality",
    emoji: "💧",
    pdf: "water-quality.pdf",
    color: "#1565c0",
    bg: "linear-gradient(135deg,#0d2a3a,#1a5276)",
    subtitle:
      "Essential for aquatic turtles, frogs, and any reptile with standing water.",
    applies: [
      "Red-Eared Slider",
      "Box Turtle",
      "Dart Frog",
      "Argentine Horned Frog",
      "Red-Eyed Tree Frog",
      "White Tree Frog",
      "Chinese Water Dragon",
    ],
    appliesSlugs: [
      "red-eared-slider",
      "box-turtle",
      "dart-frog",
      "argentine-horned-frog",
      "red-eyed-tree-frog",
      "white-tree-frog",
      "chinese-water-dragon",
    ],
  },
  {
    title: "UV Light",
    slug: "uv-light",
    emoji: "☀️",
    pdf: "uv-light.pdf",
    color: "#f57f17",
    bg: "linear-gradient(135deg,#3e2723,#bf360c)",
    subtitle: "Understanding UVA, UVB, and proper lighting for reptile health.",
    applies: [
      "Bearded Dragon",
      "Tegu",
      "Iguana",
      "Russian Tortoise",
      "Sulcata Tortoise",
      "Uromastyx",
      "Savannah Monitor",
    ],
    appliesSlugs: [
      "bearded-dragon",
      "tegu",
      "iguana",
      "russian-tortoise",
      "sulcata-tortoise",
      "uromastyx",
      "savannah-monitor",
    ],
  },
  {
    title: "Hibernation & Brumation",
    slug: "hibernation",
    emoji: "❄️",
    pdf: "hibernation.pdf",
    color: "#1565c0",
    bg: "linear-gradient(135deg,#0d1b2a,#1a3a5a)",
    subtitle:
      "How to safely prepare your reptile or tortoise for winter dormancy.",
    applies: [
      "Russian Tortoise",
      "Box Turtle",
      "Tegu",
      "Bearded Dragon",
      "Corn Snake",
      "Ball Python",
      "Uromastyx",
    ],
    appliesSlugs: [
      "russian-tortoise",
      "box-turtle",
      "tegu",
      "bearded-dragon",
      "corn-snake",
      "ball-python",
      "uromastyx",
    ],
  },
];

function buildInfoPage(p) {
  const applyLinks = p.applies
    .map((name, i) => `<li><a href="/${p.appliesSlugs[i]}">${name}</a></li>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${p.title} Guide — All Animal Expo 2026</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
${buildSidenav()}
${buildNav()}
<main>

  <div class="expo-breadcrumb">
    <div class="container">
      <a href="/" class="breadcrumb">Home</a>
      <span class="breadcrumb">${p.title}</span>
    </div>
  </div>

  <div style="background:${p.bg};padding:3rem 0 2.5rem;text-align:center;">
    <div class="container">
      <span style="font-size:3.5rem;display:block;margin-bottom:.5rem;">${
        p.emoji
      }</span>
      <h1 style="color:#fff;font-size:clamp(2rem,5vw,3.5rem);margin:0;">${
        p.title
      }</h1>
      <p style="color:rgba(255,255,255,.7);margin:.75rem auto 0;max-width:540px;font-size:1rem;">${
        p.subtitle
      }</p>
    </div>
  </div>

  <section class="care-section">
    <div class="container">
      <div class="row">

        <!-- Main: PDF viewer -->
        <div class="col s12 l8">
          <div class="care-card" style="padding:0;overflow:hidden;border-left-color:${
            p.color
          };">
            <div style="padding:1.25rem 1.5rem .75rem;background:#fff;">
              <h3 style="margin:0;"><i class="material-icons tiny" style="color:#e65100;vertical-align:middle;margin-right:.4rem;">picture_as_pdf</i>${
                p.title
              } Guide</h3>
              <p style="margin:.4rem 0 1rem;color:#616161;font-size:.88rem;">View the full guide below, or download to keep.</p>
              <div style="display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:1rem;">
                <a href="/pdfs/${
                  p.pdf
                }" download class="btn waves-effect download-btn">
                  <i class="material-icons left">download</i>Download PDF
                </a>
                <a href="/pdfs/${
                  p.pdf
                }" target="_blank" class="btn waves-effect view-btn">
                  <i class="material-icons left">open_in_new</i>Open Full Screen
                </a>
              </div>
            </div>
            <iframe
              src="/pdfs/${p.pdf}"
              class="pdf-viewer-frame"
              title="${p.title} Guide PDF"
              style="border-top:1px solid #e0e0e0;">
              <p style="padding:1rem;">Your browser does not support inline PDFs.
                <a href="/pdfs/${p.pdf}">Download it here.</a>
              </p>
            </iframe>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="col s12 l4">

          <div class="care-card" style="background:linear-gradient(135deg,#1b2a1c,#2d4a1e);border-left-color:#f9a825;">
            <h3 style="color:#f9a825;"><i class="material-icons tiny" style="color:#f9a825;">local_hospital</i> Need a Vet?</h3>
            <p style="color:#b0c8b0;font-size:.9rem;margin-bottom:.75rem;">
              Vital Animal Veterinary Clinic in Sioux Falls specializes in reptiles &amp; exotic animals.
            </p>
            <p style="color:#b0c8b0;font-size:.85rem;margin-bottom:1rem;">📞 <a href="tel:6053399261" style="color:#f9a825;">(605) 339-9261</a></p>
            <a href="/vital-animal-vet" class="btn waves-effect" style="background:#f9a825;color:#1a1a1a;font-family:'Bebas Neue',sans-serif;letter-spacing:.08em;width:100%;">
              <i class="material-icons left">local_hospital</i>Vet Info &amp; Map
            </a>
          </div>

          <div class="care-card" style="border-left-color:${p.color};">
            <h3><i class="material-icons tiny" style="color:${
              p.color
            };">pets</i> Relevant Animals</h3>
            <p style="font-size:.85rem;color:#616161;margin-bottom:.5rem;">This guide is especially important for:</p>
            <ul style="padding-left:1rem;">${applyLinks}</ul>
          </div>

          <div class="care-card" style="background:#e8f5e9;border-left-color:#2e7d32;">
            <h3 style="color:#2e7d32;"><i class="material-icons tiny" style="color:#2e7d32;">menu_book</i> More Guides</h3>
            <ul style="padding-left:1rem;">
              <li><a href="/water-quality">Water Quality</a></li>
              <li><a href="/uv-light">UV Light</a></li>
              <li><a href="/hibernation">Hibernation &amp; Brumation</a></li>
            </ul>
            <a href="/" class="btn waves-effect" style="background:#2e7d32;font-family:'Bebas Neue',sans-serif;letter-spacing:.08em;width:100%;margin-top:.75rem;">
              <i class="material-icons left">arrow_back</i>All Animals
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>

</main>
${buildFooter()}
${SCRIPTS}
</body>
</html>`;
}

INFO_PAGES.forEach((p) => {
  const html = buildInfoPage(p);
  fs.writeFileSync(path.join(__dirname, "views", `${p.slug}.html`), html);
  console.log(`✅ ${p.slug}.html`);
});

console.log("\n📄 Generated 3 info pages.\n");
