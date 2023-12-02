import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Imprimerie from "./pages/Imprimerie"
import Signalisation from "./pages/Signalisation";
import Sérigraphie from "./pages/Sérigraphie"
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route index exact path="/" element={<Home />} />
        <Route path="imprimerie" element={<Imprimerie />} />
        <Route path="signalisation" element={<Signalisation />} />
        <Route path="sérigraphie" element={<Sérigraphie />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
