'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { quotes } from "../data/quotes";

export default function QuotePage() {
  const [topic, setTopic] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState<string[]>([]);
  const [bgStyle, setBgStyle] = useState<string>("bg-slate-100");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const allTopics = Array.from(new Set(quotes.map(q => q.topic.toLowerCase())));

  const backgroundMap: Record<string, string> = {
    wife: "#800000",
    brother: "#fbb505",
    love: "#ef7699",
    success: "#76f73e",
    inspiration: "#0465a1",
    sad: "#03040c",
    life: "#ff5733",
    family: "#C70039",
    work: "#474e91",
    study: "#479189",
    exam: "#f9d72a",
    happiness: "#581845",
    failure: "#ff6f61",
    marriage: "#8e44ad",
    husband: "#2c3e50",
    home: "#e67e22",
    friends: "#1abc9c",
    degree: "#f39c12",
    topic: "#9b59b6",
    mother: "#d35400",
    "": "bg-slate-100",
    " ": "bg-slate-100",
    default: "bg-slate-100"
  };

  const handleSubmit = () => {
    const input = topic.trim().toLowerCase();

    const match = quotes
      .filter(q =>
        q.text.toLowerCase().includes(input) ||
        q.topic.toLowerCase().includes(input)
      )
      .slice(0, 3)
      .map(q => q.text);

    setFilteredQuotes(match);

    const selected = backgroundMap[input] || backgroundMap["default"];

    if (selected.startsWith("bg-")) {
      setBgStyle(selected);
      document.body.style.backgroundColor = "";
    } else {
      setBgStyle("");
      document.body.style.backgroundColor = selected;
    }

    setSuggestions([]);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4 transition-all duration-700 ease-in-out w-full ${bgStyle}`}
      style={bgStyle ? {} : { backgroundColor: document.body.style.backgroundColor }}
    >
      <p className="fixed bottom-2 right-4 text-sm text-black-1000">© Lubaba Khalid</p>

      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Quote Generator</h1>

        <Input
          autoComplete="off"
          placeholder="Enter any alphabet and choose a word"
          value={topic}
          onChange={(e) => {
            const val = e.target.value.toLowerCase();
            setTopic(val);
            if (val.trim() === "") {
              setSuggestions([]);
            } else {
              const filtered = allTopics.filter(t => t.startsWith(val));
              setSuggestions(filtered.slice(0, 5));
            }
          }}
        />

        {/* Dropdown Suggestions */}
        {suggestions.length > 0 && (
          <div className="border border-gray-300 rounded-md bg-white shadow-sm text-left">
            {suggestions.map((s, i) => (
              <div
                key={i}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setTopic(s);
                  setSuggestions([]);
                }}
              >
                {s}
              </div>
            ))}
          </div>
        )}

        <Button className="w-full" onClick={handleSubmit}>Generate Quotes</Button>

        {/* Output Quotes */}
        <div className="space-y-2 mt-4">
          {filteredQuotes.length > 0 ? (
            filteredQuotes.map((quote, idx) => (
              <p key={idx} className="text-gray-700 text-center italic">“{quote}”</p>
            ))
          ) : (
            <p className="text-center text-gray-400">No quotes yet. Enter a topic!</p>
          )}
        </div>
      </div>
    </div>
  );
}
