import React from "react";
import "./Bootstrap/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import ServiceSection from "./Components/ServiceSection/ServiceSection";

function App() {
  return (
    <>
      <Header />
      {/* <HeroSection /> */}
      <ServiceSection />
    </>
  );
}

export default App;
