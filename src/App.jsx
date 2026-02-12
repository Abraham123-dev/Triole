import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
        <div className="min-h-screen bg-white font-sans selection:bg-triloe-blue selection:text-white flex flex-col">
            <Navbar />
            <div className="grow">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
        </div>
    </Router>
  );
}

export default App;