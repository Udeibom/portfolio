"use client";

import { useState, useRef, useEffect } from "react";

export default function AiChat() {
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; content: string }[]
  >([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatContainerRef.current) return;

    chatContainerRef.current.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  async function askAI() {
    if (!question.trim()) return;

    const userMessage = { role: "user" as const, content: question };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "ai", content: data.answer || "Hmm, interesting question." },
        ]);
        setLoading(false);
      }, 800);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Network error. Please try again." },
      ]);
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-xl p-6 shadow-xl">
      <h3 className="text-lg font-semibold text-white">C@l</h3>
      <p className="text-sm text-neutral-400">
        Ask about Caleb’s skills, projects, or experience.
      </p>

      <div
        ref={chatContainerRef}
        className="mt-4 max-h-80 overflow-y-auto space-y-3"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg text-sm ${
              msg.role === "user"
                ? "bg-indigo-500 text-white ml-auto max-w-[75%]"
                : "bg-neutral-800 text-neutral-200 max-w-[75%]"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <div className="text-sm text-neutral-400">Thinking...</div>
        )}
      </div>

      <div className="mt-4 flex gap-2">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 rounded-md border border-neutral-700 bg-neutral-800 p-2 text-sm text-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={2}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              askAI();
            }
          }}
        />

        <button
          onClick={askAI}
          disabled={loading}
          className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
