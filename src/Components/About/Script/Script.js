import React, { Component } from "react";
import "./Script.css";

class Script extends Component {
  render() {
    return (
      <div className="describtion container">

        {/********* Start Section Contain Al-azher Des *********/}
        <div className="row responsive">
          {/******** Start Vision *********/}
          <div className='home-card vision col-md-4 col-12'>
            <i class="fa fa-bar-chart fa-3x"></i>
            <h3>Vision</h3>
            <ul>
              <li>Decrease technological illiteracy</li>
              <li>Be one of the best student activity in Al-Azhar university</li>
              <li>Reduce gap between the university studing system and market</li>
            </ul>
          </div>
          {/******** End Vission *********/}

          {/******** Start Mission *********/}
          <div className='home-card mission col-md-4 col-12'>
            <i class="fa fa-fire fa-3x"></i>
            <h3>Mission </h3>
            <ul>
              <li>Developing the knowledge of students about technology</li>
              <li>Launching projects and campaigns in the university</li>
              <li>Coordinate with other student activities at the university</li>
            </ul>
          </div>
          {/******** End Mission *********/}

          {/******** Start Objective *********/}
          <div className=' home-card objective col-md-4 col-12'>
            <i class="fa fa-lightbulb-o  fa-3x"></i>
            <h3>Objectives</h3>
            <ul>
              <li>Make sure that all membwrs have learned</li>
              <li>Have a huge backbone in most of faculties</li>
              <li>Increase student's awareness about technology</li>
            </ul>
          </div>
          {/******** End Objective *********/}
        </div>
        {/********* End Section Contain Al-azher Des *********/}
      </div>
    );
  }
}

export default Script;
