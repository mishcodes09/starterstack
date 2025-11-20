import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Opportunities from "./components/Opportunities";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Benefits />
      <Opportunities />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
