import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTimes, faCalendarAlt, faWater, faLeaf, faClock, faShieldAlt, faHome, faCheck } from "@fortawesome/free-solid-svg-icons";
import "../Styles/FloodContent.css";
import waterDamageImage from "../Assets/dryer-hardwood-image.jpg";
import logo from "../Assets/HR_Stacked-Logo.png";
import mascot from "../Assets/HR_Hydro-Man.jpg";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FloodContent() {
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [activeTab, setActiveTab] = useState("water"); // Default to water damage tab
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const heartlandLocation = { lat: 38.9631, lon: -94.7809 }; // 8705 Redbud Lane, Lenexa KS
  const phoneNumber = "913-289-3104"; // Updated phone number as requested

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  // Automatically show modal after 15 seconds of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!showModal) {
        openModal("Schedule");
      }
    }, 15000);
    
    return () => clearTimeout(timer);
  }, [showModal]);

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };

  const testimonials = [
    {
      name: "Sarah J.",
      text: "After a pipe burst in our basement, Heartland Restoration was here within 30 minutes! They saved our home from extensive water damage. Can't thank them enough!",
      rating: 5
    },
    {
      name: "Michael T.",
      text: "Found mold in my bathroom and was panicking. Called Heartland and they came the same day, removed it completely and made sure it wouldn't come back. Professional service from start to finish.",
      rating: 5
    },
    {
      name: "Rebecca L.",
      text: "Their team was incredible handling our insurance claim. They documented everything, spoke with our adjuster, and we got full coverage! So glad we called them first.",
      rating: 5
    }
  ];

  const emergencyTips = {
    water: [
      "Turn off the main water supply",
      "Remove valuable items from wet areas",
      "Take photos for insurance documentation",
      "Do not use electrical appliances in wet areas"
    ],
    mold: [
      "Do not disturb the mold (can release spores)",
      "Turn off HVAC systems to prevent spread",
      "Keep people with allergies away from affected areas",
      "Document the mold growth with photos"
    ]
  };

  const Modal = () => {
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      issue: "water damage",
      preferredDateTime: new Date(),
      urgency: "urgent",
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

    const handleDateChange = (date) => {
      setFormData(prevData => ({
        ...prevData,
        preferredDateTime: date
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
        message += `\nIssue: ${formData.issue}\nUrgency: ${formData.urgency}`;
        message += `\nPreferred Date/Time: ${formData.preferredDateTime.toLocaleString()}`;
        
        await emailjs.send(
          "service_oqq2gx9",
          "template_45q2x0c",
          {
            name: formData.name,
            message: message,
            to_name: "Heartland Restoration",
            email: formData.email || "No email provided",
            phone: formData.phone,
            issue: formData.issue,
            urgency: formData.urgency,
            preferred_time: formData.preferredDateTime.toLocaleString()
          },
          "JMBl585lEMg3cdw0Z"
        );
    
        window.gtag("config", "AW-1032093322");
        window.gtag("event", "conversion", {
          send_to: "AW-1032093322/tFwICLP4k6MZEIr9kewD",
        });    

        setShowSuccessMessage(true);
        setTimeout(() => {
          closeModal();
          setShowSuccessMessage(false);
        }, 3000);
      } catch (error) {
        console.error('Error:', error);
        setLocalSubmitError("There was an error submitting your request. Please try again or call us directly.");
      } finally {
        setLocalIsSubmitting(false);
      }
    };

    // Custom input component for DatePicker
    const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
      <input
        className="custom-datepicker-input"
        onClick={onClick}
        ref={ref}
        value={value}
        readOnly
      />
    ));

    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-modal" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {showSuccessMessage ? (
            <div className="success-message">
              <h2>Thank You!</h2>
              <p>Your request has been submitted. We'll contact you shortly.</p>
              <p>For immediate assistance, call {phoneNumber}</p>
            </div>
          ) : (
            <>
              <h2>{modalType === "Today" ? "Get Help Today" : "Request Service"}</h2>
              <form onSubmit={handleLocalSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
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
                <select
                  name="issue"
                  value={formData.issue}
                  onChange={handleInputChange}
                  required
                >
                  <option value="water damage">Water Damage</option>
                  <option value="mold remediation">Mold Problem</option>
                  <option value="flood cleanup">Flood Cleanup</option>
                  <option value="other">Other Issues</option>
                </select>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  required
                >
                  <option value="urgent">Urgent - Need help ASAP</option>
                  <option value="today">Today - Need help same day</option>
                  <option value="this week">This Week - Need help soon</option>
                  <option value="estimate">Just need an estimate</option>
                </select>
                <div className="date-picker-container">
                  <label htmlFor="preferredDateTime">Preferred Contact Time:</label>
                  <DatePicker
                    id="preferredDateTime"
                    selected={formData.preferredDateTime}
                    onChange={handleDateChange}
                    showTimeSelect
                    timeFormat="h:mm aa"
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    customInput={<CustomInput />}
                    minDate={new Date()}
                  />
                </div>
                {localSubmitError && <p className="error-message">{localSubmitError}</p>}
                <button type="submit" disabled={localIsSubmitting} className="submit-button">
                  {localIsSubmitting ? 'Submitting...' : 'Get Emergency Help Now'}
                </button>
              </form>
              <div className="form-footer">
                <p>OR CALL US DIRECTLY: <a href={`tel:${phoneNumber}`} className="modal-phone">{phoneNumber}</a></p>
              </div>
            </>
          )}
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
        <div className="emergency-banner">
          <div className="emergency-pulse"></div>
          <h2>24/7 EMERGENCY RESPONSE</h2>
        </div>
        <div className="contact-info">
          <h2>Water Damage? Mold Problem?</h2>
          <h3>Get Help in Minutes, Not Hours</h3>
          <a href={`tel:${phoneNumber}`} className="phone-number">
            <FontAwesomeIcon icon={faPhone} /> {phoneNumber}
          </a>
        </div>
      </header>

      <div className="hero-section">
        <div className="hero-overlay">
          <h1><span className="highlight-text">Fast, Professional</span> Restoration Services</h1>
          <h2>Water Damage • Mold Remediation • 24/7 Emergency Response</h2>
          <div className="cta-buttons">
            <a href={`tel:${phoneNumber}`} className="cta-button call-now">
              <FontAwesomeIcon icon={faPhone} /> Call Now
            </a>
            <button onClick={() => openModal("Schedule")} className="cta-button schedule">
              <FontAwesomeIcon icon={faCalendarAlt} /> Schedule Service
            </button>
          </div>
        </div>
      </div>

      <div className="location-banner">
        {distance !== null ? (
          distance <= 45 ? (
            <>
              <div className="location-info">
                <h3>Your Location: {city}, {state}</h3>
                <p className="expert-distance"><strong>Our Experts Are <span className="highlight-text">{Math.round(distance * 1.25)} Minutes Away</span></strong></p>
              </div>
              <div className="service-rating">
                <div className="stars">★★★★★</div>
                <p>5-Star Service (40+ verified reviews)</p>
                <p>Free Inspection • Free Estimates</p>
              </div>
              <a href={`tel:${phoneNumber}`} className="call-button">
                <FontAwesomeIcon icon={faPhone} /> Call {phoneNumber}
              </a>
            </>
          ) : (
            <div className="out-of-service">
              <p>We notice you're in {city}, {state}.</p>
              <p>Call us now and we'll connect you with our trusted restoration partner in your area!</p>
              <a href={`tel:${phoneNumber}`} className="call-button">
                <FontAwesomeIcon icon={faPhone} /> Call {phoneNumber}
              </a>
            </div>
          )
        ) : error ? (
          <div className="location-error">
            <p>{error}</p>
            <p>Call us now for immediate service in your area!</p>
            <a href={`tel:${phoneNumber}`} className="call-button">
              <FontAwesomeIcon icon={faPhone} /> Call {phoneNumber}
            </a>
          </div>
        ) : (
          <div className="loading">
            <p>Locating your position for fastest service...</p>
            <a href={`tel:${phoneNumber}`} className="call-button">
              <FontAwesomeIcon icon={faPhone} /> Call {phoneNumber}
            </a>
          </div>
        )}
      </div>

      <div className="service-tabs">
        <div className="tabs-header">
          <button 
            className={activeTab === "water" ? "active" : ""} 
            onClick={() => setActiveTab("water")}
          >
            <FontAwesomeIcon icon={faWater} /> Water Damage
          </button>
          <button 
            className={activeTab === "mold" ? "active" : ""} 
            onClick={() => setActiveTab("mold")}
          >
            <FontAwesomeIcon icon={faLeaf} /> Mold Remediation
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === "water" ? (
            <div className="water-damage-content">
              <div className="content-flex">
                <div className="text-content">
                  <h2>Fast & Effective Water Damage Restoration</h2>
                  <p>
                    When water damage strikes, every minute counts. Our certified technicians arrive quickly with advanced equipment to extract water, dry your property, and prevent further damage.
                  </p>
                  <ul className="benefits-list">
                    <li><FontAwesomeIcon icon={faClock} /> <strong>30-Minute Response Time</strong> in most service areas</li>
                    <li><FontAwesomeIcon icon={faShieldAlt} /> <strong>Insurance Claim Specialists</strong> who maximize your coverage</li>
                    <li><FontAwesomeIcon icon={faHome} /> <strong>Complete Restoration</strong> from extraction to rebuild</li>
                  </ul>
                  <div className="emergency-tips">
                    <h3>While You Wait: Emergency Tips</h3>
                    <ul>
                      {emergencyTips.water.map((tip, index) => (
                        <li key={index}><FontAwesomeIcon icon={faCheck} /> {tip}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="call-now">
                    Don't wait - water damage gets worse by the minute!
                  </p>
                  <a href={`tel:${phoneNumber}`} className="emergency-button">
                    <FontAwesomeIcon icon={faPhone} /> Call {phoneNumber} Now
                  </a>
                </div>
                <div className="image-content">
                  <img src={waterDamageImage} alt="Water Damage Restoration" />
                  <div className="image-caption">
                    <p>Our team responding to a home flood in {city || "your area"}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mold-remediation-content">
              <div className="content-flex">
                <div className="text-content">
                  <h2>Professional Mold Remediation & Removal</h2>
                  <p>
                    Mold isn't just unsightly - it's a health hazard that requires professional attention. Our certified mold remediation specialists identify the source, safely remove all mold, and prevent future growth.
                  </p>
                  <ul className="benefits-list">
                    <li><FontAwesomeIcon icon={faShieldAlt} /> <strong>Certified Mold Specialists</strong> using industry-best practices</li>
                    <li><FontAwesomeIcon icon={faHome} /> <strong>Complete Containment</strong> to prevent spore spread</li>
                    <li><FontAwesomeIcon icon={faClock} /> <strong>Long-term Prevention</strong> to keep mold from returning</li>
                  </ul>
                  <div className="emergency-tips">
                    <h3>While You Wait: Emergency Tips</h3>
                    <ul>
                      {emergencyTips.mold.map((tip, index) => (
                        <li key={index}><FontAwesomeIcon icon={faCheck} /> {tip}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="call-now">
                    Mold can pose serious health risks - don't delay!
                  </p>
                  <a href={`tel:${phoneNumber}`} className="emergency-button">
                    <FontAwesomeIcon icon={faPhone} /> Call {phoneNumber} Now
                  </a>
                </div>
                <div className="image-content">
                  <img src={waterDamageImage} alt="Mold Remediation Services" />
                  <div className="image-caption">
                    <p>Recent mold remediation project completed in {city || "your area"}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="why-choose-section">
        <h2>Why Choose Heartland Restoration</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <FontAwesomeIcon icon={faClock} className="benefit-icon" />
            <h3>Fast Response</h3>
            <p>On-site within 30 minutes in most service areas</p>
          </div>
          <div className="benefit-card">
            <FontAwesomeIcon icon={faShieldAlt} className="benefit-icon" />
            <h3>Insurance Experts</h3>
            <p>We work directly with your insurance to maximize coverage</p>
          </div>
          <div className="benefit-card">
            <FontAwesomeIcon icon={faHome} className="benefit-icon" />
            <h3>Full Service</h3>
            <p>From emergency response to complete restoration</p>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">
                {"★".repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="resources-section">
        <div className="mascot">
          <img src={mascot} alt="Heartland Restoration Mascot" />
        </div>
        <div className="resto-resources-card">
          <h3>Restoration Resources</h3>
          <ul>
            <li>Understanding Your Insurance Coverage</li>
            <li>Water Damage Prevention Tips</li>
            <li>Mold Health Risks & Prevention</li>
            <li>Our 5-Step Restoration Process</li>
          </ul>
          <button onClick={() => openModal("Resources")} className="resources-button">
            Get Free Resources
          </button>
        </div>
      </div>

      <div className="final-cta">
        <h2>Don't Wait - Water Damage Gets Worse Every Minute!</h2>
        <div className="cta-buttons">
          <a href={`tel:${phoneNumber}`} className="cta-button call-now">
            <FontAwesomeIcon icon={faPhone} /> Call {phoneNumber} Now
          </a>
          <button onClick={() => openModal("Schedule")} className="cta-button schedule">
            <FontAwesomeIcon icon={faCalendarAlt} /> Schedule Service
          </button>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Heartland Restoration</h3>
            <p>Your trusted local water damage and mold remediation experts</p>
            <p>Available 24/7 for emergencies</p>
          </div>
          <div className="footer-contact">
            <a href={`tel:${phoneNumber}`} className="footer-phone">
              <FontAwesomeIcon icon={faPhone} /> {phoneNumber}
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Heartland Restoration. All Rights Reserved.</p>
        </div>
      </footer>

      {showModal && <Modal />}
    </div>
  );
}

export default FloodContent;