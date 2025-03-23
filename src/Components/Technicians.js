import React from "react";
import TechCard from "./TechCard";
import "../Styles/Technicians.css";
import billy from "../Assets/billy.png";
import joshua from "../Assets/joshua.png";
import kaleb from "../Assets/kaleb.png";
import { flippedCards } from '../Pages/HeartlandConcierge';

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
          img={joshua}
          name="Joshua Barnes"
          title="General Manager"
        />
        <TechCard
          img={billy}
          name="Billy Graham"
          title="Technician"
        />
        <TechCard
          img={kaleb}
          name="Kaleb Barnes"
          title="Technician"
        />
      </div>
    </div>
  );
}

export default Technicians;
