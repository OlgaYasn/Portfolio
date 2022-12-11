import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Parcours from "./components/Parcours/Parcours";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/parcours" element={<Parcours />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
