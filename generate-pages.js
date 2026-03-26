// generate-pages.js — node generate-pages.js
const fs = require('fs');
const path = require('path');
const { buildSidenav, buildNav, buildFooter, SCRIPTS } = require('./shared');

const ANIMALS = [
  { title: 'Argentine Horned Frog', slug: 'argentine-horned-frog', emoji: '🐸', diff: 'Beginner',  dc: 'diff-beginner',  pdf: 'argentine-horned-frog.pdf',  size: '4–6"',   lifespan: '10–15 yrs', temp: '75–85°F',   diet: 'Carnivore'    },
  { title: 'Ball Python',           slug: 'ball-python',           emoji: '🐍', diff: 'Beginner',  dc: 'diff-beginner',  pdf: 'ball-python.pdf',           size: '3–5 ft',  lifespan: '20–30 yrs', temp: '88–92°F',   diet: 'Carnivore'    },
  { title: 'Bearded Dragon',        slug: 'bearded-dragon',        emoji: '🦕', diff: 'Beginner',  dc: 'diff-beginner',  pdf: 'bearded-dragon.pdf',        size: '18–24"',  lifespan: '10–15 yrs', temp: '100–110°F', diet: 'Omnivore'     },
  { title: 'Blue-Tongue Skink',     slug: 'blue-tongue-skink',     emoji: '🔵', diff: 'Moderate',  dc: 'diff-moderate',  pdf: 'blue-tongue-skink.pdf',     size: '18–24"',  lifespan: '15–20 yrs', temp: '95–105°F',  diet: 'Omnivore'     },
  { title: 'Boa Constrictor',       slug: 'boa-constrictor',       emoji: '🐍', diff: 'Moderate',  dc: 'diff-moderate',  pdf: 'boa-constrictor.pdf',       size: '6–10 ft', lifespan: '20–30 yrs', temp: '88–95°F',   diet: 'Carnivore'    },
  { title: 'Box Turtle',            slug: 'box-turtle',            emoji: '🐢', diff: 'Moderate',  dc: 'diff-moderate',  pdf: 'box-turtle.pdf',            size: '5–7"',    lifespan: '30–50 yrs', temp: '85–88°F',   diet: 'Omnivore'     },
  { title: 'Chinese Water Dragon',  slug: 'chinese-water-dragon',  emoji: '🐉', diff: 'Moderate',  dc: 'diff-moderate',  pdf: 'chinese-water-dragon.pdf',  size: '24–36"',  lifespan: '10–15 yrs', temp: '90–95°F',   diet: 'Omnivore'     },
  { title: 'Collared Lizard',       slug: 'collared-lizard',       emoji: '🦎', diff: 'Moderate',  dc: 'diff-moderate',  pdf: 'collared-lizard.pdf',       size: '8–14"',   lifespan: '5–8 yrs',   temp: '110–120°F', diet: 'Carnivore'    },
  { title: 'Corn Snake',            slug: 'corn-snake',            emoji: '🐍', diff: 'Beginner',  dc: 'diff-beginner',  pdf: 'corn-snake.pdf',            size: '4–5 ft',  lifespan: '15–20 yrs', temp: '85–88°F',   diet: 'Carnivore'    },
  { title: 'Dart Frog',             slug: 'dart-frog',             emoji: '🐸', diff: 'Advanced',  dc: 'diff-advanced',  pdf: 'dart-frog.pdf',             size: '1–2.5"',  lifespan: '10–20 yrs', temp: '70–80°F',   diet: 'Insectivore'  },
  { title: 'Iguana',                slug: 'iguana',                emoji: '🦎', diff: 'Advanced',  dc: 'diff-advanced',  pdf: 'iguana.pdf',                size: '4–6 ft',  lifespan: '10–15 yrs', temp: '95–100°F',  diet: 'Herbivore'    },
  { title: 'Leopard Gecko',         slug: 'leopard-gecko',         emoji: '🦎', diff: 'Beginner',  dc: 'diff-beginner',  pdf: 'leopard-gecko.pdf',         size: '7–10"',   lifespan: '15–20 yrs', temp: '88–92°F',   diet: 'Insectivore'  },
  { title: 'Panther Chameleon',     slug: 'panther-chameleon',     emoji: '🦎', diff: 'Advanced',  dc: 'diff-advanced',  pdf: 'panther-chameleon.pdf',     size: '12–18"',  lifespan: '5–7 yrs',   temp: '85–90°F',   diet: 'Insectivore'  },
  { title: 'Red-Eared Slider',      slug: 'red-eared-slider',      emoji: '🌊', diff: 'Moderate',  dc: 'diff-moderate',  pdf: 'red-eared-slider.pdf',      size: '8–12"',   lifespan: '20–40 yrs', temp: '85–90°F',   diet: 'Omnivore'     },
  { title: 'Red-Eyed Tree Frog',    slug: 'red-eyed-tree-frog',    emoji: '🐸', diff: 'Moderate',  dc: 'diff-moderate',  pdf: 'red-eyed-tree-frog.pdf',    size: '2–3"',    lifespan: '5–10 yrs',  temp: '75–85°F',   diet: 'Insectivore'  },
  { title: 'Red-Footed Tortoise',   slug: 'red-footed-tortoise',   emoji: '🐢', diff: 'Moderate',  dc: 'diff-moderate',  pdf: 'red-footed-tortoise.pdf',   size: '10–14"',  lifespan: '40–50 yrs', temp: '90–95°F',   diet: 'Omnivore'     },
  { title: 'Russian Tortoise',      slug: 'russian-tortoise',      emoji: '🐢', diff: 'Moderate',  dc: 'diff-moderate',  pdf: 'russian-tortoise.pdf',      size: '6–10"',   lifespan: '40–50 yrs', temp: '95–100°F',  diet: 'Herbivore'    },
  { title: 'Savannah Monitor',      slug: 'savannah-monitor',      emoji: '🦖', diff: 'Advanced',  dc: 'diff-advanced',  pdf: 'savannah-monitor.pdf',      size: '3–5 ft',  lifespan: '10–15 yrs', temp: '110–130°F', diet: 'Carnivore'    },
  { title: 'Sulcata Tortoise',      slug: 'sulcata-tortoise',      emoji: '🐢', diff: 'Advanced',  dc: 'diff-advanced',  pdf: 'sulcata-tortoise.pdf',      size: '18–30"',  lifespan: '70–150 yrs',temp: '95–105°F',  diet: 'Herbivore'    },
  { title: 'Tegu',                  slug: 'tegu',                  emoji: '🦎', diff: 'Advanced',  dc: 'diff-advanced',  pdf: 'tegu.pdf',                  size: '4–5 ft',  lifespan: '15–20 yrs', temp: '115–135°F', diet: 'Omnivore'     },
  { title: 'Uromastyx',             slug: 'uromastyx',             emoji: '🦎', diff: 'Moderate',  dc: 'diff-moderate',  pdf: 'uromastyx.pdf',             size: '10–18"',  lifespan: '15–25 yrs', temp: '120–130°F', diet: 'Herbivore'    },
  { title: 'Veiled Chameleon',      slug: 'veiled-chameleon',      emoji: '🦎', diff: 'Advanced',  dc: 'diff-advanced',  pdf: 'veiled-chameleon.pdf',      size: '14–24"',  lifespan: '5–8 yrs',   temp: '85–95°F',   diet: 'Omnivore'     },
  { title: 'White Tree Frog',       slug: 'white-tree-frog',       emoji: '🐸', diff: 'Beginner',  dc: 'diff-beginner',  pdf: 'white-tree-frog.pdf',       size: '3–5"',    lifespan: '15–20 yrs', temp: '75–85°F',   diet: 'Insectivore'  },
];

function buildPage(a) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${a.title} Care Sheet — All Animal Expo 2026</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
${buildSidenav()}
${buildNav()}
<main>

  <!-- Breadcrumb -->
  <div class="expo-breadcrumb">
    <div class="container">
      <a href="/" class="breadcrumb">Home</a>
      <a href="/" class="breadcrumb">Animals</a>
      <span class="breadcrumb">${a.title}</span>
    </div>
  </div>

  <!-- Hero -->
  <div class="animal-hero">
    <div class="container">
      <span class="animal-emoji">${a.emoji}</span>
      <h1>${a.title}</h1>
      <div style="margin-top:.75rem;">
        <span class="diff-badge ${a.dc}" style="font-size:.9rem;padding:4px 16px;">${a.diff} Care Level</span>
      </div>
    </div>
  </div>

  <!-- Quick stats + sidebar -->
  <section class="care-section">
    <div class="container">

      <!-- Stats bar -->
      <div class="quick-stats">
        <div class="stat-item"><span class="stat-value">${a.size}</span><span class="stat-label">Adult Size</span></div>
        <div class="stat-item"><span class="stat-value">${a.lifespan}</span><span class="stat-label">Lifespan</span></div>
        <div class="stat-item"><span class="stat-value">${a.temp}</span><span class="stat-label">Basking Temp</span></div>
        <div class="stat-item"><span class="stat-value">${a.diet}</span><span class="stat-label">Diet Type</span></div>
      </div>

      <div class="row">
        <!-- Main: PDF viewer -->
        <div class="col s12 l8">
          <div class="care-card" style="padding:0;overflow:hidden;border-left-color:#f9a825;">
            <div style="padding:1.25rem 1.5rem .75rem;background:#fff;">
              <h3 style="margin:0;"><i class="material-icons tiny" style="color:#e65100;vertical-align:middle;margin-right:.4rem;">picture_as_pdf</i>${a.title} Care Sheet</h3>
              <p style="margin:.4rem 0 1rem;color:#616161;font-size:.88rem;">Full care guide — view below, or download to keep.</p>
              <div style="display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:1rem;">
                <a href="/pdfs/${a.pdf}" download class="btn waves-effect download-btn">
                  <i class="material-icons left">download</i>Download PDF
                </a>
                <a href="/pdfs/${a.pdf}" target="_blank" class="btn waves-effect view-btn">
                  <i class="material-icons left">open_in_new</i>Open Full Screen
                </a>
              </div>
            </div>
            <iframe
              src="/pdfs/${a.pdf}"
              class="pdf-viewer-frame"
              title="${a.title} Care Sheet"
              style="border-top:1px solid #e0e0e0;">
              <p style="padding:1rem;">Your browser does not support inline PDFs.
                <a href="/pdfs/${a.pdf}">Download it here.</a>
              </p>
            </iframe>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="col s12 l4">

          <div class="care-card" style="background:linear-gradient(135deg,#1b2a1c,#2d4a1e);border-left-color:#f9a825;">
            <h3 style="color:#f9a825;"><i class="material-icons tiny" style="color:#f9a825;">local_hospital</i> Need a Vet?</h3>
            <p style="color:#b0c8b0;font-size:.9rem;margin-bottom:.75rem;">
              Vital Animal Veterinary Clinic in Sioux Falls sees reptiles &amp; exotic animals.
            </p>
            <p style="color:#b0c8b0;font-size:.85rem;margin-bottom:.5rem;">📞 <a href="tel:6053399261" style="color:#f9a825;">(605) 339-9261</a></p>
            <p style="color:#b0c8b0;font-size:.85rem;margin-bottom:1rem;">🕐 Mon–Fri 8am–5pm</p>
            <a href="/vital-animal-vet" class="btn waves-effect" style="background:#f9a825;color:#1a1a1a;font-family:'Bebas Neue',sans-serif;letter-spacing:.08em;width:100%;">
              <i class="material-icons left">local_hospital</i>Vet Info &amp; Map
            </a>
          </div>

          <div class="care-card">
            <h3><i class="material-icons tiny green-text">lightbulb</i> New Owner Tips</h3>
            <ul>
              <li>Set up the full enclosure <strong>before</strong> bringing your animal home</li>
              <li>Allow 1–2 weeks to settle in before heavy handling</li>
              <li>Find a reptile-experienced vet right away</li>
              <li>Download the care sheet — keep it handy</li>
              <li>Join a species-specific online community</li>
            </ul>
          </div>

          <div class="care-card" style="background:#e8f5e9;border-left-color:#2e7d32;">
            <h3 style="color:#2e7d32;"><i class="material-icons tiny" style="color:#2e7d32;">pets</i> More Animals</h3>
            <p style="font-size:.85rem;color:#424242;margin-bottom:.75rem;">Browse care sheets for all expo animals.</p>
            <a href="/" class="btn waves-effect" style="background:#2e7d32;font-family:'Bebas Neue',sans-serif;letter-spacing:.08em;width:100%;">
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

// Generate all pages
ANIMALS.forEach(a => {
  const html = buildPage(a);
  fs.writeFileSync(path.join(__dirname, 'views', `${a.slug}.html`), html);
  console.log(`✅ ${a.slug}.html`);
});

console.log(`\n🦎 Generated ${ANIMALS.length} animal pages.\n`);
