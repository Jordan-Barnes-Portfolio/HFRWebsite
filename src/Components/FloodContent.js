import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "../Styles/FloodContent.css";
import waterDamageImage from "../Assets/water-damage-image.jpg";

function FloodContent() {
  return (
    <div className="flood-content">
      <div className="help-banner">
        <h2>I Need Help!</h2>
        <div className="time-options">
          <span className="now">Now</span> | <span>Today</span> | <span>Soon</span>
        </div>
      </div>

      <div className="main-content">
        <div className="text-content">
          <h1>Water Damage Cleanup and Restoration</h1>
          <p>
            Heartland Restoration® is a name you can trust when you need water damage restoration, cleanup, and repair, near you. Who you choose will have a major impact on not only how well your home is cared for but whether or not your insurance rates will rise, or even be canceled. Trust our claims specialist to help you navigate your claim with our "Heartland Loss Prevention" mobile app.
          </p>
          <p>Call Now: 913-586-4014</p>
        </div>
        <div className="image-content">
          <img src={waterDamageImage} alt="Water Damage in Living Room" />
        </div>
      </div>

      <div className="location-banner">
        <div className="location-info">
          <h3>Your Location: Lenexa, KS</h3>
          <p>Your Restoration Experts Are 11 minutes Away</p>
        </div>
        <div className="service-rating">
          <p>24/7 Emergency Service</p>
          <div className="stars">★★★★★ 4.8 (257 reviews)</div>
        </div>
        <Link to="/appointment" className="call-button">
          <FontAwesomeIcon icon={faPhone} /> Call 913-586-4014
        </Link>
      </div>

      <aside className="sidebar">
        <h3>Resto-Resources</h3>
        <ul>
          <li>What Insurance Expects You To Do</li>
          <li>What To Do While You Wait</li>
          <li>Our Process</li>
        </ul>
        <div className="mascot">
          {/* Add your mascot image here */}
        </div>
      </aside>
    </div>
  );
}

export default FloodContent;