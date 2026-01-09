import React from "react";
import Hero from "../components/landing/Hero";
import Benefits from "../components/landing/Benefits";
import Opportunities from "../components/landing/Opportunities";
import HowItWorks from "../components/landing/HowItWorks";
import CTA from "../components/landing/CTA";

const Landing = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Opportunities />
      <HowItWorks />
      <CTA />
    </>
  );
};

export default Landing;
