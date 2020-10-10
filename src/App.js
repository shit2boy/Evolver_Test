import React from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import Hero from "./components/hero";
import CategorySections from "./components/CategorySections";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="">
      <Navigation />
      <Hero />
      <CategorySections />
      <Footer />
    </div>
  );
}

export default App;
