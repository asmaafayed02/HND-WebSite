import React, { Component } from "react";
import './Counter.css'

export default class Commitee extends Component {

  render() {

    let { Info } = this.props;

    let commit = Info.map(countersInformation => {
      return (
        <div className="col-lg-3 col-sm-6 col-12 counter-parent">
          {/******** Start PArent Div ******/}
            <div  key={countersInformation.id} className="parent" >
              {/******* Start Showing Icon for Each committee ********/}
              <div className="commit-Icon ">
                <i className={countersInformation.icon}></i>
              </div>
              {/******* End Showing Icon for Each committee ********/}

              {/****** Start Showing Name for Each committee ******/}
              <div className="commit-name">
                <h4>{countersInformation.name}</h4>
                <h6> {countersInformation.number} </h6>
              </div>
              {/****** End Showing Name for Each committee ******/}
            </div>

          {/***** End Parent Div *****/}
        </div>
      );
    });
    return <div className="row">{commit}</div>;
  }
}
