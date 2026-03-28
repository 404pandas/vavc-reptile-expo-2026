// shared.js — reusable HTML blocks for all generated pages

const NAV_LINKS = [
  { href: "/argentine-horned-frog", label: "Argentine Horned Frog" },
  { href: "/ball-python", label: "Ball Python" },
  { href: "/bearded-dragon", label: "Bearded Dragon" },
  { href: "/blue-tongue-skink", label: "Blue-Tongue Skink" },
  { href: "/boa-constrictor", label: "Boa Constrictor" },
  { href: "/box-turtle", label: "Box Turtle" },
  { href: "/chinese-water-dragon", label: "Chinese Water Dragon" },
  { href: "/collared-lizard", label: "Collared Lizard" },
  { href: "/corn-snake", label: "Corn Snake" },
  { href: "/dart-frog", label: "Dart Frog" },
  { href: "/iguana", label: "Iguana" },
  { href: "/leopard-gecko", label: "Leopard Gecko" },
  { href: "/panther-chameleon", label: "Panther Chameleon" },
  { href: "/red-eared-slider", label: "Red-Eared Slider" },
  { href: "/red-eyed-tree-frog", label: "Red-Eyed Tree Frog" },
  { href: "/red-footed-tortoise", label: "Red-Footed Tortoise" },
  { href: "/russian-tortoise", label: "Russian Tortoise" },
  { href: "/savannah-monitor", label: "Savannah Monitor" },
  { href: "/sulcata-tortoise", label: "Sulcata Tortoise" },
  { href: "/tegu", label: "Tegu" },
  { href: "/uromastyx", label: "Uromastyx" },
  { href: "/veiled-chameleon", label: "Veiled Chameleon" },
  { href: "/white-tree-frog", label: "White Tree Frog" },
];

const INFO_LINKS = [
  { href: "/water-quality", label: "Water Quality" },
  { href: "/uv-light", label: "UV Light" },
  { href: "/hibernation", label: "Hibernation" },
];

function buildSidenav() {
  const animalItems = NAV_LINKS.map(
    (l) => `  <li><a href="${l.href}">${l.label}</a></li>`
  ).join("\n");
  const infoItems = INFO_LINKS.map(
    (l) => `  <li><a href="${l.href}">${l.label}</a></li>`
  ).join("\n");
  return `
<ul class="sidenav" id="mobile-nav">
  <li><div class="user-view" style="background:#1a1a1a;padding:1rem;">
    <span style="font-family:'Bebas Neue',sans-serif;font-size:1.3rem;color:#f9a825;letter-spacing:0.1em;"> All Animal Expo 2026</span>
  </div></li>
  <li><a href="/">Home</a></li>
  <li><div class="divider" style="background:#333"></div></li>
  <li><a class="subheader" style="color:#9e9e9e;font-size:0.75rem;letter-spacing:0.1em;">ANIMALS</a></li>
${animalItems}
  <li><div class="divider" style="background:#333"></div></li>
  <li><a class="subheader" style="color:#9e9e9e;font-size:0.75rem;letter-spacing:0.1em;">CARE GUIDES</a></li>
${infoItems}
  <li><div class="divider" style="background:#333"></div></li>
  <li><a href="/vital-animal-vet" style="color:#f9a825;">🏥 Our Vet Partner</a></li>
</ul>`;
}

function buildNav() {
  return `
<nav class="expo-nav">
  <div class="nav-wrapper container">
    <a href="/" class="brand-logo"> <span class="accent">All Animal</span> Expo <span style="color:#f9a825">2026</span></a>
    <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
      <li><a href="/">Home</a></li>
      <li><a href="/water-quality">Water</a></li>
      <li><a href="/uv-light">UV Light</a></li>
      <li><a href="/hibernation">Hibernation</a></li>
      <li><a href="/vital-animal-vet" style="color:#f9a825!important">🏥 Vet Partner</a></li>
    </ul>
  </div>
</nav>`;
}

function buildFooter() {
  const animalCols = NAV_LINKS.map(
    (l) => `          <li><a href="${l.href}">${l.label}</a></li>`
  ).join("\n");
  return `
<footer class="expo-footer">
  <!-- Made with love banner -->
  <div style="background:#1a2e1a;border-bottom:1px solid #2a3e2a;padding:1.25rem 0;text-align:center;">
    <p style="margin:0;font-size:1rem;color:#c8e6c9;letter-spacing:0.02em;">
      Made with 💓 by <a href="/vital-animal-vet" style="color:#f9a825;font-weight:700;">Vital Animal Veterinary Clinic</a> for the 2026 Reptile Expo
    </p>
  </div>

  <div class="container" style="padding-top:2rem;">
    <div class="row" style="margin-bottom:0;">

      <!-- Vet Info -->
      <div class="col s12 m12 l3" style="margin-bottom:1.5rem;">
        <span class="footer-logo">🏥 Vital Animal Vet Clinic</span>
        <p style="font-size:0.85rem;color:#757575;line-height:1.8;margin-top:0.5rem;">
          <span style="color:#9e9e9e;">📍</span> 2809 S Spring Ave<br>
          &nbsp;&nbsp;&nbsp;&nbsp;Sioux Falls, SD 57105<br>
          <span style="color:#9e9e9e;">📞</span> <a href="tel:6053399261">(605) 339-9261</a><br>
          <span style="color:#9e9e9e;">💬</span> <a href="sms:6054606094">(605) 460-6094</a><br>
          <span style="color:#9e9e9e;">📧</span> <a href="mailto:reception@vitalanimalvetclinic.com" style="font-size:0.8rem;">reception@vitalanimalvetclinic.com</a><br>
          <span style="color:#9e9e9e;">🌐</span> <a href="https://vitalanimalvetclinic.com" target="_blank">vitalanimalvetclinic.com</a><br>
          <span style="color:#9e9e9e;">🕐</span> Mon–Fri: 8:00am – 5:00pm
        </p>
        <a href="https://petportal.vet/vavc/appointment/request" target="_blank"
           style="display:inline-block;background:#1565c0;color:#fff;font-family:'Bebas Neue',sans-serif;letter-spacing:0.08em;padding:6px 14px;border-radius:4px;font-size:0.85rem;margin-top:0.25rem;">
          Book Appointment
        </a>
      </div>

      <!-- Animals col 1 -->
      <div class="col s6 m4 l2">
        <p style="font-family:'Bebas Neue',sans-serif;letter-spacing:0.1em;color:#9e9e9e;margin-bottom:0.5rem;font-size:0.85rem;">ANIMALS A–L</p>
        <ul class="footer-links">
          <li><a href="/argentine-horned-frog">Argentine Horned Frog</a></li>
          <li><a href="/ball-python">Ball Python</a></li>
          <li><a href="/bearded-dragon">Bearded Dragon</a></li>
          <li><a href="/blue-tongue-skink">Blue-Tongue Skink</a></li>
          <li><a href="/boa-constrictor">Boa Constrictor</a></li>
          <li><a href="/box-turtle">Box Turtle</a></li>
          <li><a href="/chinese-water-dragon">Chinese Water Dragon</a></li>
          <li><a href="/collared-lizard">Collared Lizard</a></li>
          <li><a href="/corn-snake">Corn Snake</a></li>
          <li><a href="/dart-frog">Dart Frog</a></li>
          <li><a href="/iguana">Iguana</a></li>
          <li><a href="/leopard-gecko">Leopard Gecko</a></li>
        </ul>
      </div>

      <!-- Animals col 2 -->
      <div class="col s6 m4 l2">
        <p style="font-family:'Bebas Neue',sans-serif;letter-spacing:0.1em;color:#9e9e9e;margin-bottom:0.5rem;font-size:0.85rem;">ANIMALS P–W</p>
        <ul class="footer-links">
          <li><a href="/panther-chameleon">Panther Chameleon</a></li>
          <li><a href="/red-eared-slider">Red-Eared Slider</a></li>
          <li><a href="/red-eyed-tree-frog">Red-Eyed Tree Frog</a></li>
          <li><a href="/red-footed-tortoise">Red-Footed Tortoise</a></li>
          <li><a href="/russian-tortoise">Russian Tortoise</a></li>
          <li><a href="/savannah-monitor">Savannah Monitor</a></li>
          <li><a href="/sulcata-tortoise">Sulcata Tortoise</a></li>
          <li><a href="/tegu">Tegu</a></li>
          <li><a href="/uromastyx">Uromastyx</a></li>
          <li><a href="/veiled-chameleon">Veiled Chameleon</a></li>
          <li><a href="/white-tree-frog">White Tree Frog</a></li>
        </ul>
      </div>

      <!-- Care Guides -->
      <div class="col s6 m4 l2">
        <p style="font-family:'Bebas Neue',sans-serif;letter-spacing:0.1em;color:#9e9e9e;margin-bottom:0.5rem;font-size:0.85rem;">CARE GUIDES</p>
        <ul class="footer-links">
          <li><a href="/water-quality">Water Quality</a></li>
          <li><a href="/uv-light">UV Light</a></li>
          <li><a href="/hibernation">Hibernation</a></li>
        </ul>
        <p style="font-family:'Bebas Neue',sans-serif;letter-spacing:0.1em;color:#9e9e9e;margin-bottom:0.5rem;font-size:0.85rem;margin-top:1rem;">CONNECT</p>
        <ul class="footer-links">
          <li><a href="https://www.facebook.com/Vital-Animal-Veterinary-Clinic-100076364851885/" target="_blank">Facebook</a></li>
          <li><a href="https://www.instagram.com/vitalanimalveterinaryclinic/" target="_blank">Instagram</a></li>
          <li><a href="https://www.yelp.com/biz/vital-animal-veterinary-clinic-sioux-falls" target="_blank">Yelp</a></li>
        </ul>
      </div>

    </div><!-- .row -->

    <div class="footer-bottom">
      © 2026 All Animal Reptile Expo · Made with 💓 by Vital Animal Veterinary Clinic · Care information is for reference only · Always consult a qualified exotic vet
    </div>
  </div>
</footer>`;
}

const SCRIPTS = `
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="/js/main.js"></script>`;

module.exports = {
  buildSidenav,
  buildNav,
  buildFooter,
  SCRIPTS,
  NAV_LINKS,
  INFO_LINKS,
};
