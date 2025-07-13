import React from "react";

function SummaryCard({ summary }) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-inner transition-all duration-300">
      <h2 className="text-lg font-bold text-blue-600 mb-2">Summary:</h2>
      <p className="text-gray-700 leading-relaxed">{summary}</p>
    </div>
  );
}

export default SummaryCard;
