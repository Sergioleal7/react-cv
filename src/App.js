import React from 'react';
import Header from './components/Header';
import './assets/styles/App.css';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

export default App;
