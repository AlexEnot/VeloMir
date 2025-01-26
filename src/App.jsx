import React from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FeatureSection from "./components/FeatureSection"
import WorkFlow from "./components/Workflow"
import PricingSection from "./components/PricingSection"
import TestimonialSection from "./components/TestimonialSection"
import FooterSection from "./components/FooterSection"

function App() {

  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <FeatureSection/>
        <WorkFlow/>
        <PricingSection/>
        <TestimonialSection/>
        <FooterSection/>
      </div>
    </>
  )
}

export default App
