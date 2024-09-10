import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../Styles/FloodContent.css";
import waterDamageImage from "../Assets/dryer-hardwood-image.jpg";
import logo from "../Assets/HR_Stacked-Logo.png";
import mascot from "../Assets/HR_Hydro-Man.jpg";
import emailjs from "@emailjs/browser";

function FloodContent() {
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const heartlandLocation = { lat: 38.9631, lon: -94.7809 }; // 8705 Redbud Lane, Lenexa KS
  const phoneNumber = "913-586-4014";

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };

  const Modal = () => {
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
    });
    const [localSubmitError, setLocalSubmitError] = useState("");
    const [localIsSubmitting, setLocalIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };
      
    const handleLocalSubmit = async (e) => {
      e.preventDefault();
      setLocalIsSubmitting(true);
      setLocalSubmitError("");

      try {
        let message = `Customer requested contact. Name: ${formData.name}\nPhone: ${formData.phone}`;
        if(formData.email !== ""){
          message += `\nEmail: ${formData.email}`;
        }
        
        await emailjs.send(
          "service_oqq2gx9",
          "template_e8vd6de",
          {
            name: formData.name,
            message: message,
          },
          "JMBl585lEMg3cdw0Z"
        );
    
        window.gtag("config", "AW-1032093322");
        window.gtag("event", "conversion", {
          send_to: "AW-1032093322/tFwICLP4k6MZEIr9kewD",
        });    

        alert("Your request has been submitted. We'll contact you shortly.");
        closeModal();
      } catch (error) {
        console.error('Error:', error);
        setLocalSubmitError("There was an error submitting your request. Please try again.");
      } finally {
        setLocalIsSubmitting(false);
      }
    };

    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-modal" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2>Request {modalType} Call</h2>
          <form onSubmit={handleLocalSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              value={formData.email}
              onChange={handleInputChange}
            />
            {localSubmitError && <p className="error-message">{localSubmitError}</p>}
            <button type="submit" disabled={localIsSubmitting}>
              {localIsSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    );
  };


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
            <a href="#" onClick={(e) => { e.preventDefault(); openModal("Immediate"); }} className="now">Now</a> | 
            <a href="#" onClick={(e) => { e.preventDefault(); openModal("Today"); }}> Today</a> | 
            <a href={`tel:${phoneNumber}`}> Soon</a>
          </div>
        </div>
        <div className="contact-info">
          <h2 style={{color: "cadetblue"}}>We're Standing By 24/7</h2>
          <h2>Call Our Claims Specialist</h2>
          <a href={`tel:${phoneNumber}`} className="phone-number">
            <FontAwesomeIcon icon={faPhone} /> {phoneNumber}
          </a>
        </div>
      </header>

      <main className="main-content">
        <h2>Water Damage Cleanup and Restoration</h2>
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
          <h3><a href="/restoration-resources" target="_blank">Resto-Resources</a></h3>
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
      {showModal && <Modal />}
    </div>
  );
}

export default FloodContent;