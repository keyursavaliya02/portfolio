// This is the main entry point of your React application.
// App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./style.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Expertise />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;