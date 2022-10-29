import React from "react";
import { Route, Routes } from "react-router-dom";
// import Image from "./logos"
import Home from "./components/Home";
import Frontend from "./components/Frontend";
import Backend from "./components/Backend";
import Cloud from "./components/Cloud";
import "./App.css";
import NotFound from "./NotFound";

function App() {
  return (
    <section className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </section>
  );
}

export default App;
