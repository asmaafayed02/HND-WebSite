import React, { Component } from "react";
import './App.css';
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Bestmember from './Components/BestMember/Bestmember'
import EventsPage from "./Components/Events/EventsPage/EventsPage";
import SingleEventPage from './Components/Events/SingleEventPage/SingleEventPage'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Bestmember />
      <EventsPage />
      <SingleEventPage />
    </div>
  );
}

export default App;
