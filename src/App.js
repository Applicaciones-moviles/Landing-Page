import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Testimonials from './components/Testimonials'; 
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutProduct from './components/AboutProduct';
import AboutTeam from './components/AboutTeam';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutProduct />
      <About />
      <AboutTeam />
      <Testimonials /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
