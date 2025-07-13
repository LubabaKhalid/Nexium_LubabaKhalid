import React from "react";

function SummaryCard({ summary }) {
  return (
    <div className="bg-white shadow p-4 rounded mt-6">
      <h2 className="text-xl font-semibold mb-2">Summary:</h2>
      <p className="text-gray-700">{summary}</p>
    </div>
  );
}

export default SummaryCard;
