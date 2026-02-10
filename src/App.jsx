import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
        <div className="min-h-screen bg-white font-sans selection:bg-triloe-blue selection:text-white flex flex-col">
            <Navbar />
        </div>
    </Router>
  );
}

export default App;