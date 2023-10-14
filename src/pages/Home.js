import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Tours from "../components/Tours/Tours";
import Hero from "../components/Layout/Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Tours />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
