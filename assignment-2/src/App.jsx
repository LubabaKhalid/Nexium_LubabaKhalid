import React, { useState } from "react";
import InputForm from "./components/InputForm";
import SummaryCard from "./components/SummaryCard";

const App = () => {
  const [summary, setSummary] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-8">🧠 Blog Summariser</h1>
      <InputForm setSummary={setSummary} />
      {summary && <SummaryCard summary={summary} />}
    </div>
  );
};

export default App;
