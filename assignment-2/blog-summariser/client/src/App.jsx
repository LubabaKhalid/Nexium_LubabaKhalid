import React, { useState } from "react";
import axios from "axios";
import InputArea from "./components/InputArea";
import SummaryCard from "./components/SummaryCard";

function App() {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async (text) => {
    setLoading(true);
    setSummary("");

    try {
      const response = await axios.post("http://localhost:5000/summarize", {
        text,
      });
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Client error:", error.response?.data || error.message);
      setSummary("⚠️ Failed to summarize. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">📝 Blog Summariser</h1>
      <InputArea onSummarize={handleSummarize} />
      {loading && <p className="text-center mt-4 text-blue-500">Summarizing...</p>}
      {summary && <SummaryCard summary={summary} />}
    </div>
  );
}

export default App;
