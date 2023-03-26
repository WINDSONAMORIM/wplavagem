import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Galeria } from "../pages/galeria";
import { Home } from "../pages/home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
    </BrowserRouter>
  );
};
