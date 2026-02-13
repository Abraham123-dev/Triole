import React from "react";
import { Toaster } from "sonner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
        <div className="min-h-screen bg-white font-sans selection:bg-triloe-blue selection:text-white flex flex-col">
          <Toaster position="top-center" richColors theme="light" />
            <Navbar />
            <div className="grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
        </div>
    </Router>
  );
}

export default App;