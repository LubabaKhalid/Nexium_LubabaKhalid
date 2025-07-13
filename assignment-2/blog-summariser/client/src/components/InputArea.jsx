import React, { useState } from "react";

function InputArea({ onSummarize }) {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        rows="8"
        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        placeholder="Paste your blog content here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => onSummarize(text)}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all duration-300"
      >
        Summarize
      </button>
    </div>
  );
}

export default InputArea;
