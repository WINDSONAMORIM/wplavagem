import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contatos } from "../pages/contatos";
import { Galeria } from "../pages/galeria";
import { Home } from "../pages/home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/constatos" element={<Contatos />} />
      </Routes>
    </BrowserRouter>
  );
};
