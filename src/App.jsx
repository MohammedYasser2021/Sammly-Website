import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Objectives from "./Components/Objectives";
import Testimonials from "./Components/Testimonials";
import ChooseUs from "./Components/ChooseUs";
import Team from "./Components/Team";
import ContactUs from "./Components/ContactUs";
import SendUs from "./Components/SendUs";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-darkBg">
      <Header />
      <About />
      <Services />
      <Objectives />
      <Testimonials />
      <ChooseUs />
      <Team />
      <ContactUs />
      <SendUs />
      <Footer />
    </div>
  );
}

export default App;
