import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import "./styles.css";

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setSummary("");

    try {
      const res = await axios.post("https://nexiumlubabakhalid.onrender.com//summarize", { text });
      setSummary(res.data.summary);
    } catch (err) {
      setSummary("⚠️ Failed to summarize. Please try again.");
      console.error(err);
    }

    setLoading(false);
  };

  const handleReset = () => {
    setText("");
    setSummary("");
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
     
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Blog Summariser
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Created by Lubaba Khalid
        </motion.p>
      </motion.div>

      {/* Input & Output Section */}
      <motion.div
        className="input-section"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <motion.textarea
          placeholder="Paste blog text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        />

        <div className="button-container">
          <button onClick={handleSummarize}>Summarize</button>
          <button onClick={handleReset} className="reset-btn">Reset</button>
        </div>

        {loading && (
          <motion.p
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Summarizing...
          </motion.p>
        )}

        {summary && (
          <motion.div
            className="summary-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            {summary}
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

export default App;
