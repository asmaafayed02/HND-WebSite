import React, { Component } from "react";
import HomeSlider from './SliderVidio/slider'
import HomeScript from "./HomeScript/HomeScript"
import Counter from './Counter/Counter'
import BreifCommit from "./About/Committ/BreifCommitee";

class Home extends Component {
  
  render() {
    return (
      <div className="Home">
          <HomeSlider />
          <HomeScript />
          <Counter />
          <BreifCommit />

      </div>
    );
  }
}

export default Home;
