const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON." }) };
  }

  const { name, email, animal } = body;
  if (!name || !animal) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Name and animal are required." }),
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

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

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error("Suggest email error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email." }),
    };
  }
};
