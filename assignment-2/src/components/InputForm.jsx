import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ setSummary }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/summarize", { text });
      setSummary(response.data.summary);
    } catch (err) {
      alert("Error summarizing text.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        className="w-full p-4 border rounded"
        rows="8"
        placeholder="Paste your blog content here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Summarizing..." : "Summarize"}
      </button>
    </form>
  );
};

export default InputForm;
