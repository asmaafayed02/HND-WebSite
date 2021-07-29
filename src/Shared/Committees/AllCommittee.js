import React, { Component } from "react";
import SingleCommittee from "./SingleCommittees";

class AllCommittee extends Component {
  state = {
    cardsInformation: [
      {
        id: 1,
        name: "Developers",
        des:
          "One of techenical Commitee is called The developers committee is divided into three sections : 1- web committee "
          + " " + 
          "2- Mobile Application committee"
          +" " +
          " 3- Testing committee ",
        icon: "fa fa-laptop fa-3x"
      },
      {
        id: 2,
        name: "Media",
        des:
          "There are effective more than we can actually imagine, every little perfect thing that our eyes can capture and every creative idea that comes up to our minds, it's include: Graphic Design, Illustration, Video Editing, Photo/Videography, Motion Graphics, Scriptwriting, VO, and more. ",
        icon: "fa fa-camera fa-3x"
      },
      {
        id: 3,
        name: "Techoons",
        des:
          "One of the technical committees. Found before as (IT committee). It contains six tracks as follows: " +
          " " +
          "1- Java" +
          " " +
          "2-Embedded Systems" +
          " " +
          "3-Network" +
          " " +
          "4-DataBase" +
          " " +
          "5- Artificial Intelligence ( AI )" +
          " " +
          "6-Security ",
        icon: "fa fa-desktop fa-3x"
      },
      {
        id: 4,
        name: "FR",
        des:
          "Fr is acronym for fundraising and it's part of of non-profit marketing It is a process that aims to provide support to non-profit institutions and activities for students or even your own project whether it is material or non-material support to achieve the goals of the institution ",
        icon: "fa fa-users",
        icon: "fa fa-money fa-3x"
      },
      {
        id: 5,
        name: "Logistic",
        des:
          "The Committee contributes to the organization of meetings of the team through the preparation of the necessary giveaway , also organizing Events . ",
        icon: "fa fa-chain-broken fa-3x"
      },
      {
        id: 6,
        name: "HR",
        des:
          "Here We meet a lot of the challenges , we deal with all of them, committee we deal with team members , to achieve goals of committees and goals of team .",
        icon: "fa fa-smile-o fa-3x"
      },
      {
        id: 7,
        name: "PR",
        des:
          "public Relations Committee is considerd as the bridge between the team and any other outer party . students,  VIP or Media . ",
        icon: "fa fa-users fa-3x"
      },
      {
        id: 8,
        name: "Digital marketing",
        des:
          "They are in charge of planning and managing marketing campaigns that promote MSP's  brand, Events ,and services.  ",
        icon: "fa fa-shopping-bag fa-3x"
      }
    ]
  };
  render() {
    return (
      <div className="commiteesShow container">
        <h1>our commitees</h1>
        <SingleCommittee cards={this.state.cardsInformation} />
      </div>
    );
  }
}

export default AllCommittee;
