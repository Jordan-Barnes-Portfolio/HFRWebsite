import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faClock, faShieldAlt, faHome, faCheck, faTimes, faStar, faUser, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../Styles/FloodContent.css";
import logo from "../Assets/HR_Stacked-Logo.png";
import fbIcon from "../Assets/fb.png";
import googlerevIcon from "../Assets/googlerev.png";
import iircIcon from "../Assets/iirc.png";
import stateFarmLogo from "../Assets/State_Farm_logo.svg";
import farmersLogo from "../Assets/farmers-insurance-3.svg";
import allstateLogo from "../Assets/allstate.svg";
import nationwideLogo from "../Assets/nationwide-insurance.svg";
import libertyMutualLogo from "../Assets/liberty-mutual.svg";
import ccPartners1 from "../Assets/ccPartners1.png";
import ccPartners2 from "../Assets/ccPartners2.png";
import ccPartners3 from "../Assets/ccPartners3.png";
import ccPartners4 from "../Assets/ccPartners4.png";
import { useNavigate } from "react-router-dom";


function FloodContent() {
  const navigate = useNavigate();
  const phoneNumber = "913-213-3686";
  const address = "Kansas City, MO 64111";

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
    <div className="flood-content">
      <header className="flood-header">
        <div className="logo">
          <img src={logo} alt="Heartland Restoration Logo" />
        </div>
        <div className="contact-info">
          <h2 className="centered-header">Water Damage? Need Help Today?</h2>
          <h3>Get Help in Minutes, Not Hours</h3>
          <a href={`tel:${phoneNumber}`} className="phone-number" onClick={trackPhoneCall}>
            <FontAwesomeIcon icon={faPhone} /> {phoneNumber}
          </a>
        </div>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero-section enhanced-hero shorter-hero"
      >
        <div className="hero-overlay">
          <h1>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="highlight-text"
            >
              Emergency Water Damage?
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="highlight-text-alt"
            >
              We'll Be There in 30 Minutes
            </motion.span>
          </h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Professional Water Damage & Flood Restoration Services in Kansas City
          </motion.h2>
          
          <motion.div 
            className="trust-badges"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="accreditation-icons">
              <img src={iircIcon} alt="IIRC Certified" className="accreditation-icon" />
              <img src={googlerevIcon} alt="Google Verified" className="accreditation-icon" />
              <img src={fbIcon} alt="Facebook Verified" className="accreditation-icon" />
            </div>
            <div className="trust-badge-divider"></div>
            <div className="trust-badge-item">
              <img src="https://www.gstatic.com/images/icons/material/system/1x/verified_user_grey600_48dp.png" alt="Licensed & Insured" className="trust-badge" />
              <span>Licensed & Insured</span>
            </div>
            <div className="trust-badge-item">
              <img src="https://www.gstatic.com/images/icons/material/system/1x/star_grey600_48dp.png" alt="5-Star Google Reviews" className="trust-badge" />
              <span className="google-reviews-badge">★★★★★ 5/5 on Google</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="cta-buttons prominent-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
          >
            <motion.a 
              href={`tel:${phoneNumber}`} 
              className="cta-button call-now"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={trackPhoneCall}
            >
              <FontAwesomeIcon icon={faPhone} /> Call {phoneNumber}
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="combined-benefits-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="main-benefits-header">Why Choose Us?</h2>
        
        {/* Core Benefits */}
        <div className="benefits-grid">
          <div className="benefit-card">
            <FontAwesomeIcon icon={faClock} className="benefit-icon" />
            <h3>30-Minute Response</h3>
            <p>We arrive quickly to prevent further damage</p>
          </div>
          <div className="benefit-card">
            <FontAwesomeIcon icon={faShieldAlt} className="benefit-icon" />
            <h3>Insurance Experts</h3>
            <p>We work directly with your insurance</p>
          </div>
          <div className="benefit-card">
            <FontAwesomeIcon icon={faHome} className="benefit-icon" />
            <h3>Full Service</h3>
            <p>From emergency response to complete restoration</p>
          </div>
          <div className="benefit-card">
            <FontAwesomeIcon icon={faStar} className="benefit-icon" />
            <h3>5 Star Rated on Google</h3>
            <p className="star-rating">
              <FontAwesomeIcon icon={faStar} className="star-icon" />
              <FontAwesomeIcon icon={faStar} className="star-icon" />
              <FontAwesomeIcon icon={faStar} className="star-icon" />
              <FontAwesomeIcon icon={faStar} className="star-icon" />
              <FontAwesomeIcon icon={faStar} className="star-icon" />
            </p>
          </div>
        </div>
        
        {/* Insurance Section */}
        <div className="sub-section insurance-subsection">
          <h3>We Take All Insurance</h3>
          <div className="insurance-logos">
            <div className="insurance-logo">
              <img src={stateFarmLogo} alt="State Farm" />
            </div>
            <div className="insurance-logo">
              <img src={farmersLogo} alt="Farmers Insurance" />
            </div>
            <div className="insurance-logo">
              <img src={allstateLogo} alt="Allstate" />
            </div>
            <div className="insurance-logo">
              <img src={nationwideLogo} alt="Nationwide" />
            </div>
            <div className="insurance-logo">
              <img src={libertyMutualLogo} alt="Liberty Mutual" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="testimonials-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <div className="testimonial-text">"Heartland Restoration was at my house in 20 minutes and saved my basement! Highly recommend."</div>
            <div className="testimonial-author">- Sarah M.</div>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <div className="testimonial-text">"They handled everything with my insurance and made a stressful situation easy."</div>
            <div className="testimonial-author">- John D.</div>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <div className="testimonial-text">"Professional, fast, and friendly. My home looks better than before!"</div>
            <div className="testimonial-author">- Lisa T.</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="combined-emergency-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>While You Wait: Emergency Tips</h2>
        
        <div className="emergency-tips-content">
          <ul>
            <li><FontAwesomeIcon icon={faCheck} /> Turn off the main water supply</li>
            <li><FontAwesomeIcon icon={faCheck} /> Remove valuable items from wet areas</li>
            <li><FontAwesomeIcon icon={faCheck} /> Take photos for insurance documentation</li>
            <li><FontAwesomeIcon icon={faCheck} /> Do not use electrical appliances in wet areas</li>
          </ul>
        </div>
        
        <div className="emergency-cta">
          <h3>Don't Wait - Water Damage Gets Worse Every Minute!</h3>
          <motion.div className="cta-buttons prominent-cta">
            <motion.a 
              href={`tel:${phoneNumber}`} 
              className="cta-button call-now"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={trackPhoneCall}
            >
              <FontAwesomeIcon icon={faPhone} /> Call {phoneNumber}
            </motion.a>
          </motion.div>
          <div className="main-website-link">
            <a href="/">Go to main website</a>
          </div>
        </div>
      </motion.div>

      {/* Partners Section moved to bottom */}
      <motion.div 
        className="sub-section partners-subsection"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3>We Partner With...</h3>
        <div className="partners-logos">
          <div className="partner-logo">
            <img src={ccPartners1} alt="Partner 1" />
          </div>
          <div className="partner-logo">
            <img src={ccPartners2} alt="Partner 2" />
          </div>
          <div className="partner-logo">
            <img src={ccPartners3} alt="Partner 3" />
          </div>
          <div className="partner-logo">
            <img src={ccPartners4} alt="Partner 4" />
          </div>
        </div>
      </motion.div>

      {/* Added Footer */}
      <footer className="flood-footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Serving Kansas City</h3>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {address}
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> {phoneNumber}
            </p>
          </div>
          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FloodContent;