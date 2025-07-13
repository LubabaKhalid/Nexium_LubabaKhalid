const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🟢 Blog Summarizer backend (OpenRouter) is running!");
});

app.post("/summarize", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct",
        messages: [
          { role: "system", content: "You are a helpful assistant that summarizes blog content." },
          { role: "user", content: `Summarize this blog in 3 to 4 concise sentences, focusing only on key ideas:` + text },

        ],
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Blog Summarizer",
        },
      }
    );

    const summary = response.data.choices[0].message.content.trim();
    res.json({ summary });
  } catch (error) {
    console.error("❌ Backend error:", error.response?.data || error.message);
    res.status(500).json({ error: "Summarization failed" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log("🔐 API Key Loaded:", process.env.OPENROUTER_API_KEY ? "Yes ✅" : "No ❌");
});
