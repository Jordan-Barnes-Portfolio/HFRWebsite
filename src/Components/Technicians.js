import React from "react";
import TechCard from "./TechCard";
import "../Styles/Technicians.css";
import tech1 from "../Assets/tech1.png";
import tech2 from "../Assets/tech2.png";
import tech3 from "../Assets/tech3.png";

function Technicians() {
  return (
    <div className="Technician-section" id="Technicians">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Technicians</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist technicians, dedicated to
          providing top-notch services at Heartland Restoration. Trust in their
          decades of knowledge and experience.
        </p>
      </div>

      <div className="dt-cards-content">
        <TechCard
          img={tech2}
          name="Joshua Barnes"
          title="Owner and Leading expert"
          stars="4.9"
          reviews="100+"
        />
        <TechCard
          img={tech1}
          name="Billy Graham"
          title="Technician"
          stars="4.8"
          reviews="32"
        />
        <TechCard
          img={tech3}
          name="Kaleb Barnes"
          title="Technician"
          stars="4.8"
          reviews="27"
        />
      </div>
    </div>
  );
}

export default Technicians;
