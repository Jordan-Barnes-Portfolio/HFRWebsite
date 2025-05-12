import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../Styles/ThankYou.css';
import logo from '../Assets/HR_Stacked-Logo.png';

function ThankYou() {
  const phoneNumber = "913-213-3686";
  
  // Fire conversion tracking when the page loads
  useEffect(() => {
    // Track page load as conversion
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-1032093322/SBE_CMybz8YaEIr9kewD',
        'value': 1.0,
        'currency': 'USD'
      });
    }
  }, []);

  // Track phone number clicks for conversion
  const trackPhoneCall = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-1032093322/SBE_CMybz8YaEIr9kewD',
        'value': 1.0,
        'currency': 'USD'
      });
    }
  };

  return (
    <div className="thankyou-container">
      <div className="thankyou-content">
        <div className="logo">
          <img src={logo} alt="Heartland Restoration Logo" />
        </div>
        
        <div className="success-message">
          <div className="success-icon-container">
            <FontAwesomeIcon icon={faCheck} className="success-icon" />
          </div>
          
          <h1>Thank You!</h1>
          <p className="message-lead">Your request has been received.</p>
          <p>We'll contact you right away to address your emergency.</p>
          
          <div className="immediate-help">
            <h2>Need Immediate Assistance?</h2>
            <a href={`tel:${phoneNumber}`} className="call-button" onClick={trackPhoneCall}>
              <FontAwesomeIcon icon={faPhone} /> Call {phoneNumber}
            </a>
          </div>
          
          <div className="navigation-options">
            <Link to="/flood" className="back-link">
              <FontAwesomeIcon icon={faArrowLeft} /> Return to previous page
            </Link>
            <Link to="/" className="home-link">
              Go to main website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou; 