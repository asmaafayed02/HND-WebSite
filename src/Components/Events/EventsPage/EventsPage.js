import React, { Component } from "react";
import "../../Home/EventsSection/EventsSection.css";
import UpComingEventsSection from "./UpCamingEventSection/UpCamingEventsSection";
import HiddenEventsSection from "./HiddenEventSection/HiddenEventsSection";
import LastEventsSection from "./LastEventSection/LastEventsSection";
import '../EventsPage/EventsPage.css'

class EventsPage extends React.Component {
  render() {
    return (
      //all Event Page
      <div className="events-page">
        <div className="events-section container">
          {/* *SHOW ALL CAMING EVENTS */}
          <UpComingEventsSection />
          {/**SHOW ALL LAST EVENTS */}
          <LastEventsSection />
          {/**SHOW ALL EVENTS */}
          <HiddenEventsSection />
        </div>
      </div>
    );
  }
}

export default EventsPage;
