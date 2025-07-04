'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { quotes } from "@/data/quotes";

export default function QuotePage() {
  const [topic, setTopic] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState<string[]>([]);

  const handleSubmit = () => {
    const match = quotes
      .filter(q => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map(q => q.text);
    setFilteredQuotes(match);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Quote Generator</h1>

        <Input
          placeholder="Enter a topic (e.g. inspiration, success)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button className="w-full" onClick={handleSubmit}>
          Generate Quotes
        </Button>

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
