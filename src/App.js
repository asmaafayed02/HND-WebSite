import React, { Component } from "react";
import{BrowserRouter, Route,Switch} from'react-router-dom';
import './App.css';
import Header from "./Shared/Header/Header";
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Bestmember from './Components/BestMember/Bestmember'
import EventsPage from "./Components/Events/EventsPage/EventsPage";
import SingleEventPage from './Components/Events/SingleEventPage/SingleEventPage'
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/> 
        <Route path='/'exact><Home/></Route>
        <Route path='/about'><About/></Route>
        <Route path='/events'><EventsPage/></Route>
        <Route path='/best-members'><Bestmember/></Route>
        
        <Footer/> 
      </BrowserRouter>
    
    </div>
  );
}

export default App;
