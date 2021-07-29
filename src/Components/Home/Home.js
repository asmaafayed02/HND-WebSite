import React, { Component } from "react";
import HomeSlider from './SliderVidio/slider'
import HomeScript from "./HomeScript/HomeScript"
import Counter from './Counter/Counter'
import EventsSection from "./EventsSection/EventsSection";
import BreifCommit from "./About/Committ/BreifCommitee";

class Home extends Component {
  
  render() {
    return (
      <div className="Home">
          <HomeSlider />
          <HomeScript />
          <Counter />
          <EventsSection />
          <BreifCommit />

      </div>
    );
  }
}

export default Home;
