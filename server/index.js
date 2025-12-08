import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config(); // reads .env on the server machine (not in GitHub)

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const { messages, prompt } = req.body;
    // prefer messages array (chat format). fallback to prompt string.
    const chatMessages = messages ?? [{ role: "user", content: prompt ?? "" }];

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: chatMessages,
      max_tokens: 600,
      temperature: 0.2
    });

    const reply = response?.choices?.[0]?.message?.content ?? "No reply";
    res.json({ reply, raw: response });
  } catch (err) {
    console.error("AI error:", err);
    res.status(500).json({ error: "AI request failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));