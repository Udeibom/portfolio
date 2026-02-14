import { readFileSync } from "fs";
import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

/* ----------------------------
   Basic Stopword Filtering
----------------------------- */
const STOPWORDS = new Set([
  "the", "is", "a", "an", "of", "about", "tell",
  "me", "what", "are", "you", "your", "do",
  "have", "has", "in", "on", "for", "his"
]);

function tokenize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter(word => word && !STOPWORDS.has(word));
}

function scoreChunk(chunk: string, questionTokens: string[]) {
  const chunkTokens = tokenize(chunk);
  let score = 0;

  for (const token of questionTokens) {
    for (const chunkToken of chunkTokens) {
      if (chunkToken === token) score += 5;
      else if (chunkToken.includes(token)) score += 2;
    }
  }

  return score;
}

/* ----------------------------
   API Route
----------------------------- */
export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { answer: "Invalid question provided." },
        { status: 400 }
      );
    }

    // Load profile data
    const profile = readFileSync(
      process.cwd() + "/data/profile.txt",
      "utf-8"
    );

    // Split into chunks by heading marker
    const chunks = profile
      .split("\n# ")
      .map(chunk => chunk.trim())
      .filter(Boolean);

    const questionTokens = tokenize(question);

    let bestMatch = "";
    let highestScore = 0;

    for (const chunk of chunks) {
      const score = scoreChunk(chunk, questionTokens);
      if (score > highestScore) {
        highestScore = score;
        bestMatch = chunk;
      }
    }

    // If nothing matched well enough (stricter threshold)
    if (!bestMatch || highestScore < 5) {
      return NextResponse.json({
        answer:
          "I don’t have information about that in Caleb’s profile. You can ask about his machine learning systems, technical skills, or professional experience."
      });
    }

    /* ----------------------------
       Send to Groq (Updated Model)
    ----------------------------- */
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `
You are the AI assistant on Caleb Udeibom's personal website.

Your role is to answer questions about Caleb's background, machine learning systems, technical skills, projects, and experience.

Rules:
- Only use the provided context.
- Do not invent information.
- If the context does not contain the answer, clearly say you do not have that information.
- Keep responses professional, confident, and concise.
- Emphasize system-level thinking, reliability, evaluation, and real-world impact when relevant.
          `
        },
        {
          role: "user",
          content: `
Context:
${bestMatch}

Question:
${question}
          `
        }
      ],
      temperature: 0.4,
    });

    const answer =
      completion.choices[0]?.message?.content ||
      "I'm unable to generate a response at the moment.";

    return NextResponse.json({ answer });

  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      { answer: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
