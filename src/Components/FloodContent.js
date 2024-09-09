import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "../Styles/FloodContent.css";
import waterDamageImage from "../Assets/dryer-hardwood-image.jpg";
import logo from "../Assets/HR_Stacked-Logo.png";
import mascot from "../Assets/HR_Hydro-Man.jpg";

function FloodContent() {
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const heartlandLocation = { lat: 38.9631, lon: -94.7809 }; // 8705 Redbud Lane, Lenexa KS
  const phoneNumber = "913-586-4014";

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          fetchLocationName(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
          setError("Unable to retrieve your location");
          console.error(err);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      const calculatedDistance = calculateDistance(
        userLocation.lat,
        userLocation.lon,
        heartlandLocation.lat,
        heartlandLocation.lon
      );
      setDistance(calculatedDistance);
    }
  }, [userLocation]);

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 3959; // Radius of the Earth in miles
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }

  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  async function fetchLocationName(lat, lon) {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
      const data = await response.json();
      if (data.address) {
        setCity(data.address.city || data.address.town || data.address.village || '');
        setState(data.address.state || '');
      }
    } catch (error) {
      console.error("Error fetching location name:", error);
    }
  }


  return (
    <div className="flood-content">
      <header className="flood-header">
        <div className="logo">    
          <img src={logo} alt="Heartland Restoration Logo" />
        </div>
        <div className="help-banner">
          <h2>I Need Help!</h2>
          <div className="time-options">
            <span className="now">Now</span> | <span>Today</span> | <span>Soon</span>
          </div>
        </div>
        <div className="contact-info">
          <p>We're Standing By 24/7</p>
          <h2>Call Our Claims Specialist</h2>
          <a href={`tel:${phoneNumber}`} className="phone-number">
            <FontAwesomeIcon icon={faPhone} /> {phoneNumber}
          </a>
        </div>
      </header>

      <main className="main-content">
        <h1>Water Damage Cleanup and Restoration</h1>
        <div className="content-flex">
          <div className="text-content">
            <p>
              Heartland Restoration® is a name you can trust when you need water damage restoration, cleanup, and repair, near you. Who you choose will have a major impact on not only how well your home is cared for but whether or not your insurance rates will rise, or even be canceled. Trust our claims specialist to help you navigate your claim with our "Heartland Loss Prevention" mobile app.
            </p>
            <p className="call-now">
              Call Now: {phoneNumber}
            </p>
          </div>
          <div className="image-content">
            <img src={waterDamageImage} alt="Water Damage in Living Room" />
          </div>
        </div>
      </main>

      <div className="resources-section">
        <div className="mascot">
          <img src={mascot} alt="Heartland Restoration Mascot" />
        </div>
        <div className="resto-resources-card">
          <h3>Resto-Resources</h3>
          <ul>
            <li>What Insurance Expects You To Do</li>
            <li>What To Do While You Wait</li>
            <li>Our Process</li>
          </ul>
        </div>
      </div>

      <div className="location-banner">
        {distance !== null ? (
          distance <= 45 ? (
            <>
        <div className="location-info">
          <h3>Your Location: {city}, {state}</h3>
          <p className="expert-distance"><strong>Your Restoration Experts are <span className="highlight-text">{Math.round(distance * 1.25)} minutes away</span></strong></p>
        </div>
        <div className="service-rating">
          <p>24/7 Emergency Service</p>
          <div className="stars">★★★★★ 5 (40++ reviews)</div>
        </div>
        <a href={`tel:${phoneNumber}`} className="call-button">
          <FontAwesomeIcon icon={faPhone} /> Call {phoneNumber}
        </a>
      </>
          ) : (
            <div className="out-of-service">
              Unfortunately, we don't service {city}, {state} yet. Call us to get referred to a mitigation partner.
            </div>
          )
        ) : error ? (
          <div className="location-error">{error}</div>
        ) : (
          <div className="loading">Loading location...</div>
        )}
      </div>
    </div>
  );
  }

export default FloodContent;