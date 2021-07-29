import React, { Component } from 'react'
import Commitee from "./committee.js"
import "./committee.css"

export default class AllCommittee extends Component {

state = {
    cardsInformation: [
      {
        id: 1,
        name: "Developers",
        des:
          "One of techenical Commitee is called The developers committee is divided into three sections :" ,
        part1: "Web Development" ,
        part2: "Mobile Application (Flutter)",
        part3: "Testing",         

        icon: "fa fa-laptop"
      },
      {
        id: 2,
        name: "Media",
        des:
          "One of the technical committees, There are effective more than we can actually imagine, with every word, every thought, so they are on 6 Track: ",
        part1: "Graphic Design",
        part2: "Voice Over (VO)",
        part3: "Vidio Editing",
        part4: "Illustration ",
        part5: "Photography ",
        part6: "Motion Graphic ",

        icon: "fa fa-camera"
      },
      {
        id: 3,
        name: "Tecoons",
        des:
          "One of the technical committees, Found before as (IT committee). It contains six tracks as follows: " ,

        part1: "java",
        part2: "Embeded System",
        part3: "DataBase",
        part4: "Artificial Intiligance (AI)",
        part5: "Network",
        part6: "Security",
          
        icon: "fa fa-desktop"
      },
      {
        id: 4,
        name: "FR",
        des:
          "Fr is acronym for fundraising and it's part of of non -profit marketing It is a process that aims to provide support to non -profit institutions and activities for students or even your own project whether it is material or non-material support to achieve the goals of the institution ",
        icon: "fa fa-users",
        icon: "fa fa-money"
      },
      
      {
        id: 5,
        name: "HR",
        des:
          "Here We meet a lot of the challenges , we deal with all of them, committee we deal with team members , to achieve goals of committees and goals of team.we are are responsible for coordinating between Heads and their members,  and among and among all committees.  we are also responsible for recruitment and selection,  evaluating members in addition to participants and tracking thier progress too. we have to motivate them else . If you are in HR committee you will learn alot , HR coordinators always seek improvement ",
        icon: "fa fa-smile-o"
      },
      {
        id: 6,
        name: "PR",
        des:
          "public Relations Committee is considerd as the bridge between the team and any other outer party . students,  VIP or Media . this communication helps spreading the awareness about the team & it's vision besides contributing to achieve it. ",
        icon: "fa fa-users"
      },
      {
        id: 7,
        name: "Digital marketing",
        des:
          "They are in charge of planning and managing marketing campaigns that promote MSP's  brand, Events ,and services, so they are on two teams :" ,
          part1:"social media  Team: responsible for managing and the moderation of our pages on different platforms"  , 
          part2: "Content Creation Team: responsible for converting our theme and Plans on a written copy, Transforming ideas into a suitable content .",
        icon: "fa fa-shopping-bag"
      },
      {
        id: 8,
        name: "Logistic",
        des:
          "The Committee contributes to the organization of meetings of the team through the preparation of the necessary giveaway , also organizing Events . This committee is responsible for supplies , It contributes to the optimal use of available financial resources and  Provide logistic needs. Premaring Gifts from the Simplest Tools with the best quality, cityning for community com orde to the Importro to the Improve their skills and inconease the self-confident and motivating my called Commettee to the At the time the weekly to meet the space. ",
        icon: "fa fa-chain-broken"
      }
      
      
    ]
  };

  render() {
    return (
        <div className="commit-style container">
          <h2 className="commit-heading">Our Committee</h2>
          <Commitee Info = {this.state.cardsInformation} />
        </div>
    )
}
}