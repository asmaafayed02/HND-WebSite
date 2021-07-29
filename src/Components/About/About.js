import React, { Component } from "react";
import HomeSlider from './Slider/Slider'
import Script from "./Script/Script";
import AllCommittee from './Commitee/AllCommitee'
import Structure from "./Structure/Structure"

class About extends Component {
  render() {
    return (
      <div className ='about'>
        <HomeSlider />
        <Script />
        <AllCommittee />
        <Structure />
      </div>
    )
  }
}

export default About