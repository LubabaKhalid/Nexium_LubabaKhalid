import React from "react";

const SummaryCard = ({ summary }) => {
  return (
    <div className="mt-8 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-2">Summary:</h2>
      <p className="text-gray-700 whitespace-pre-line">{summary}</p>
    </div>
  );
};

export default SummaryCard;
