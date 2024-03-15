import React from "react";
import TechCard from "./TechCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Technicians.css";

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
          img={profile1}
          name="Joshua Barnes"
          title="Owner and Leading expert"
          stars="4.9"
          reviews="100+"
        />
        <TechCard
          img={profile2}
          name="Caleb Barnes"
          title="Technician"
          stars="4.8"
          reviews="32"
        />
      </div>
    </div>
  );
}

export default Technicians;
