import React from "react";
import { ToastProvider } from "./components/Toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Footer } from "./components/Footer";
import { Careers } from "./components/Career";

function App() {
  return (
    <Router>
        <ToastProvider>
          <div className="min-h-screen bg-white font-sans selection:bg-triloe-blue selection:text-white flex flex-col">
              <Navbar />
              <div className="grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
              <Footer />
          </div>
        </ToastProvider>
    </Router>
  );
}

export default App;