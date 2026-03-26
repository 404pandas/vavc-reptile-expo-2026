# 🦎 All Animal 2026 Reptile Expo — Care Information Hub

A multi-page Node.js/Express website with Materialize CSS for the All Animal 2026 Reptile Expo in Sioux Falls, SD.

## Project Structure

```
reptile-expo/
├── server.js                 # Express server with all routes
├── generate-pages.js         # Generator script for animal HTML pages
├── package.json
├── public/
│   ├── css/
│   │   └── style.css         # Custom styles (on top of Materialize)
│   ├── js/
│   │   └── main.js           # Materialize init + nav behavior
│   └── pdfs/                 # ← Place your care sheet PDFs here
│       ├── tegu-lizard.pdf
│       ├── savannah-monitor.pdf
│       ├── russian-tortoise.pdf
│       ├── ball-python.pdf
│       ├── bearded-dragon.pdf
│       ├── blue-tongue-skink.pdf
│       ├── crested-gecko.pdf
│       └── red-eared-slider.pdf
└── views/
    ├── index.html             # Home page
    ├── tegu-lizard.html       # → served at /tegu-lizard
    ├── savannah-monitor.html  # → served at /savannah-monitor
    ├── russian-tortoise.html  # → served at /russian-tortoise
    ├── ball-python.html       # → served at /ball-python
    ├── bearded-dragon.html    # → served at /bearded-dragon
    ├── blue-tongue-skink.html # → served at /blue-tongue-skink
    ├── crested-gecko.html     # → served at /crested-gecko
    ├── red-eared-slider.html  # → served at /red-eared-slider
    ├── vital-animal-vet.html  # → served at /vital-animal-vet
    └── 404.html               # Custom 404 page
```

## URL Routes

| URL                          | Page                          |
|------------------------------|-------------------------------|
| `/`                          | Home / Animal Hub             |
| `/tegu-lizard`               | Tegu Lizard Care Sheet        |
| `/savannah-monitor`          | Savannah Monitor Care Sheet   |
| `/russian-tortoise`          | Russian Tortoise Care Sheet   |
| `/ball-python`               | Ball Python Care Sheet        |
| `/bearded-dragon`            | Bearded Dragon Care Sheet     |
| `/blue-tongue-skink`         | Blue-Tongue Skink Care Sheet  |
| `/crested-gecko`             | Crested Gecko Care Sheet      |
| `/red-eared-slider`          | Red-Eared Slider Care Sheet   |
| `/vital-animal-vet`          | Vital Animal Vet Clinic Page  |

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your care sheet PDFs to public/pdfs/
#    (filenames must match exactly as listed above)

# 3. Start the server
npm start

# 4. Open in browser
open http://localhost:3000
```

## Development

```bash
# Install nodemon for auto-restart during development
npm install -g nodemon

# Run in dev mode
npm run dev
```

## Adding PDFs

Place your care sheet PDFs in `public/pdfs/` with these exact filenames:

- `tegu-lizard.pdf`
- `savannah-monitor.pdf`
- `russian-tortoise.pdf`
- `ball-python.pdf`
- `bearded-dragon.pdf`
- `blue-tongue-skink.pdf`
- `crested-gecko.pdf`
- `red-eared-slider.pdf`

The PDF viewer iframe on each animal page will automatically display the PDF,
and both "Download PDF" and "Open Full Screen" buttons will link to it.

## Regenerating Animal Pages

If you update `generate-pages.js` with new content:

```bash
node generate-pages.js
```

## Deploying to Netlify

For static hosting on Netlify (no server-side Node), you'll need to:

1. Add a `netlify.toml` with redirect rules pointing all routes to static HTML files
2. Or use Netlify Functions to run the Express server

**netlify.toml example for static serving:**
```toml
[[redirects]]
  from = "/tegu-lizard"
  to = "/tegu-lizard.html"
  status = 200

[[redirects]]
  from = "/savannah-monitor"
  to = "/savannah-monitor.html"
  status = 200

# ... repeat for each animal
```

Then move all HTML files to the root or a `public/` folder.

## Vet Partner Info

**Vital Animal Veterinary Clinic**
- 📍 2809 S Spring Ave, Sioux Falls, SD 57105
- 📞 (605) 339-9261
- 💬 Text: (605) 460-6094
- 📧 reception@vitalanimalvetclinic.com
- 🌐 https://vitalanimalvetclinic.com
- 🗓️ Book: https://petportal.vet/vavc
- Mon–Fri: 8:00 AM – 5:00 PM

## Tech Stack

- **Runtime:** Node.js
- **Server:** Express 4.x
- **CSS Framework:** Materialize CSS 1.0 (CDN)
- **Fonts:** Bebas Neue (headings), Nunito (body) via Google Fonts
- **Icons:** Material Icons (Google CDN)
- **PDF Viewer:** Native browser iframe embed
- **Maps:** Google Maps Embed API (no key required for embed)
