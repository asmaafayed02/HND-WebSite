import React, { Component } from "react";
import './HomeScript.css'

class HomeScript extends Component {
  render() {
    return (
      <div className ='homeScript'>
        {/********* Start Section Contain Public Des *********/}
        <div className="publicDescribtion space">
          <h1>MSP</h1>
          <h6>
            Technical professional Organization interested in technology and
            programming <br /> and working towards technological illiteracy And
            it has many branches in different <br /> universities Ain Shams,
            Cairo, Al-Azhar, Mansoura, Alexandria, and Kafr El-Sheikh
          </h6>
        </div>
        {/********* End Section Contain Public Des *********/}
      </div>
    )
  }
}

export default HomeScript