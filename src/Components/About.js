import React from "react";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      {/* 
      
      Change to group of technicians
      <div className="about-image-content">
        <img src={Technician} alt="Technician Group" className="about-image1" />
      </div> */}

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Heartland Restoration, your trusted partner for accessible and
          personalized flood and mold restoration services. Our expert technicians offer online consultations
          and specialized services, prioritizing you!
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Emeregency? Call or Book now!"
          description="Book with ease at Heartland Restoration. An expert team of technicians will prioritize you as the customer and arrive promptly."
        />

        <SolutionStep
          title="Make an appointment"
          description="Choose the date and time that suits you best, and let our dedicated team of professionals ensure your service with personalized assistance."
        />

        <SolutionStep
          title="Find a Solution"
          description="Our experienced technicians and specialists are here to provide expert advice and personalized plans."
        />
      </div>
    </div>
  );
}

export default About;
