import React from "react";
import "./Structure.css"
import StructureImage from "./structure.jpg"

function About() {
  return (
    <div className="Structure container">
      <h2>Our Structure</h2>
      <img src={StructureImage} alt="Our Structure in this Season" title="Structure" />
    </div>
  );
}

export default About;

