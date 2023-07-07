import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
