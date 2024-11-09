import React from "react";
import expertsData from "../data";
import Experts1 from "./Experts1";
import Formulaire from "./Formulaire";
import Experts2 from "./Experts2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarExperts from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const experts = expertsData;

  return (
    <BrowserRouter>
      <NavbarExperts></NavbarExperts>
      <Routes>
        <Route path="expert1" element={<Experts1></Experts1>}></Route>
        <Route path="expert1" element={<Experts2></Experts2>}></Route>
        <Route path="formulaire" element={<Formulaire></Formulaire>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
