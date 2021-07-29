import React, { Component } from "react";
import "./Counter.css";
import AllCounters from "./AllCounters";


class Counter extends Component {
  state = {
    countersInformation: [
      {
        id: 1,
        icon: "far fa-user fa-2x",
        name: 'Follower',
        number: '40,000'
      },
      {
        id: 2,
        icon: "fa fa-graduation-cap fa-2x",
        name: 'Student',
        number: '10,000'
      },
      {
        id: 3,
        icon: "fa fa-bar-chart fa-2x",
        name: 'camp',
        number:'100'
      },
      {
        id: 4,
        icon: "fas fa-map-marker-alt fa-2x",
        name: 'Event',
        number:'100'
      }
    ]
  };
  render() {
    return (
      <div className="counter container">
        <AllCounters Info={this.state.countersInformation} />    
      </div>
    );
  }
}

export default Counter;
