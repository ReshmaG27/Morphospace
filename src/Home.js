import React from "react";
import HeroSection from "./components/hero/HeroSection";
import ServicesSection from "./components/service/ServicesSection";
import CategoriesSection from "./components/category/CategoriesSection";

function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection/>
        <CategoriesSection />
        
      </main>
    </>
  );
}

export default Home;
