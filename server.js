require("dotenv").config();
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/suggest", async (req, res) => {
  const { name, email, animal } = req.body;
  if (!name || !animal) {
    return res.status(400).json({ error: "Name and animal are required." });
  }
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "mary.panda.jackson@gmail.com",
      subject: `Expo Animal Suggestion: ${animal}`,
      text: [
        `Name: ${name}`,
        `Email: ${email || "(not provided)"}`,
        `Animal Suggestion: ${animal}`,
      ].join("\n"),
    });
    res.json({ ok: true });
  } catch (err) {
    console.error("Suggest email error:", err);
    res.status(500).json({ error: "Failed to send email." });
  }
});

const pages = [
  "argentine-horned-frog",
  "ball-python",
  "bearded-dragon",
  "blue-tongue-skink",
  "boa-constrictor",
  "box-turtle",
  "chinese-water-dragon",
  "collared-lizard",
  "corn-snake",
  "dart-frog",
  "iguana",
  "leopard-gecko",
  "panther-chameleon",
  "red-eared-slider",
  "red-eyed-tree-frog",
  "red-footed-tortoise",
  "russian-tortoise",
  "savannah-monitor",
  "sulcata-tortoise",
  "tegu",
  "uromastyx",
  "veiled-chameleon",
  "white-tree-frog",
  "water-quality",
  "uv-light",
  "hibernation",
  "vital-animal-vet",
  "suggest",
];

pages.forEach((slug) => {
  app.get(`/${slug}`, (req, res) =>
    res.sendFile(path.join(__dirname, "views", `${slug}.html`))
  );
});

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "index.html"))
);

app.use((req, res) =>
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
);

app.listen(PORT, () =>
  console.log(`\n Vital Animal Care Hub → http://localhost:${PORT}\n`)
);
