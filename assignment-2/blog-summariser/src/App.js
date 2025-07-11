import React from "react";
import Header from "./components/Header";
import Summariser from "./components/Summariser";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-900 font-sans transition-all duration-500 ease-in-out">
      <Header />
      <Summariser />
      <Footer />
    </div>
  );
}
