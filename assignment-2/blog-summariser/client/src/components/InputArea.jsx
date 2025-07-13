import React, { useState } from "react";

function InputArea({ onSummarize }) {
  const [text, setText] = useState("");

  return (
    <div className="p-4">
      <textarea
        rows="8"
        className="w-full p-3 border rounded"
        placeholder="Paste blog text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => onSummarize(text)}
      >
        Summarize
      </button>
    </div>
  );
}

export default InputArea;
