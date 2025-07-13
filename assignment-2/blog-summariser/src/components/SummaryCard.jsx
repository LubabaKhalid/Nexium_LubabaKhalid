import { useState } from "react";

export default function Summariser() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarise = async () => {
    if (!url) return;
    setLoading(true);
    setSummary("");

    // Simulated API call
    setTimeout(() => {
      setSummary("📝 This is a summary of the blog you entered. AI summarization will go here.");
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg space-y-6 transition-all duration-700">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste blog URL here..."
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
      />
      <button
        onClick={handleSummarise}
        className="w-full bg-purple-600 text-white font-semibold py-3 rounded-md hover:bg-purple-700 transition duration-300"
      >
        {loading ? "Summarising..." : "Summarise Blog"}
      </button>

      <div className="min-h-[100px] text-gray-700 text-lg leading-relaxed">
        {summary && (
          <p className="animate-fade-in">{summary}</p>
        )}
        {loading && <p className="text-sm italic text-gray-400">Please wait...</p>}
      </div>
    </section>
  );
}
