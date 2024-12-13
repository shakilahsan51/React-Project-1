import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Hero";

function App() {
  return (
    <>
      <div>
        <Navigation></Navigation>
        <HeroSection></HeroSection>
      </div>
    </>
  );
}

export default App;
