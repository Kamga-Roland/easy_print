import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Imprimerie from "../pages/Imprimerie";
import Signalisation from "../pages/Signalisation";
import Sérigraphie from "../pages/Sérigraphie";
import Contact from "../pages/Contact";

function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index exact path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="imprimerie" element={<Imprimerie />} />
        <Route path="Signalisation" element={<Signalisation />} />
        <Route path="sérigraphie" element={<Sérigraphie />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
