const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config(); // Load .env

const app = express();
const PORT = 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Optional: Health check route
app.get("/", (req, res) => {
  res.send("🟢 Blog Summarizer backend is running!");
});

// ✅ Main summarize route
app.post("/summarize", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful summarizer." },
          { role: "user", content: `Summarize this blog:\n\n${text}` },
        ],
        max_tokens: 100,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const summary = response.data.choices[0].message.content.trim();
    res.json({ summary });
  } catch (error) {
    console.error("❌ Backend error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to summarize" });
  }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log("🔐 API Key Loaded:", process.env.OPENAI_API_KEY ? "Yes ✅" : "No ❌");
});
