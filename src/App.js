import React, { Component } from "react";
import './App.css';
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Bestmember from './Components/BestMember/Bestmember'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Bestmember />
    </div>
  );
}

export default App;
