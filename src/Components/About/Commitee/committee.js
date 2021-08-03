import React, { Component } from "react";
import "./committee.css";

export default class Commitee extends Component {

  render() {

    let { Info } = this.props;

    let commit = Info.map(committeeInfo => {
      return (
        <div className="col-lg-3 col-sm-6 col-12 commit-parent">
          {/******** Start PArent Div ******/}
            <div  key={committeeInfo.id} className="parent" >
              {/******* Start Showing Icon for Each committee ********/}
              <div className="commit-Icon ">
                <i className={committeeInfo.icon}></i>
              </div>
              {/******* End Showing Icon for Each committee ********/}

              {/****** Start Showing Name for Each committee ******/}
              <div className="commit-name">
                <h3>{committeeInfo.name}</h3>
              </div>
              {/****** End Showing Name for Each committee ******/}

              {/****** Start Showing Description for Each committee ******/}
              <div className="commit-des">
                <p className="commit-head">{committeeInfo.des}</p>
                
                  <p>{committeeInfo.part1}</p>
                  <p>{committeeInfo.part2}</p>
                  <p>{committeeInfo.part3}</p>
                  <p>{committeeInfo.part4}</p>
                  <p>{committeeInfo.part5}</p>
                  <p>{committeeInfo.part6}</p>
                
              </div>
              {/****** End Showing Description for Each committee ******/}
              </div>

          {/***** End Parent Div *****/}
        </div>
      );
    });
    return <div className="row">{commit}</div>;
  }
}
