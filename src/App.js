import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import EduandExp from "./components/eande/EduandExp";
import Portfolio from "./components/portfolio/Portfolio";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <EduandExp />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
