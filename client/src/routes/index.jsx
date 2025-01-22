import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, SignUpPage } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element />
        <Route path="/signup" element={SignUpPage} />
        <Route path="/login" element={LoginPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
