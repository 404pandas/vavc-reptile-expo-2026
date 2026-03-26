const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const pages = [
  'argentine-horned-frog','ball-python','bearded-dragon','blue-tongue-skink',
  'boa-constrictor','box-turtle','chinese-water-dragon','collared-lizard',
  'corn-snake','dart-frog','iguana','leopard-gecko','panther-chameleon',
  'red-eared-slider','red-eyed-tree-frog','red-footed-tortoise','russian-tortoise',
  'savannah-monitor','sulcata-tortoise','tegu','uromastyx','veiled-chameleon',
  'white-tree-frog','water-quality','uv-light','hibernation','vital-animal-vet',
];

pages.forEach(slug => {
  app.get(`/${slug}`, (req, res) =>
    res.sendFile(path.join(__dirname, 'views', `${slug}.html`))
  );
});

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
);

app.use((req, res) =>
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
);

app.listen(PORT, () =>
  console.log(`\n🦎 All Animal Reptile Expo 2026 → http://localhost:${PORT}\n`)
);
