import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faClock, faShieldAlt, faHome, faCheck, faTimes, faStar, faUser, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../Styles/FloodContent.css";
import logo from "../Assets/HR_Stacked-Logo.png";
import emailjs from "@emailjs/browser";
import stateFarmLogo from "../Assets/State_Farm_logo.svg";
import farmersLogo from "../Assets/farmers-insurance-3.svg";
import allstateLogo from "../Assets/allstate.svg";
import nationwideLogo from "../Assets/nationwide-insurance.svg";
import libertyMutualLogo from "../Assets/liberty-mutual.svg";
import ccPartners1 from "../Assets/ccPartners1.png";
import ccPartners2 from "../Assets/ccPartners2.png";
import ccPartners3 from "../Assets/ccPartners3.png";
import ccPartners4 from "../Assets/ccPartners4.png";
import ccPartners5 from "../Assets/ccPartners5.png";
import { useNavigate } from "react-router-dom";

function FloodContent() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [hasShownFirstModal, setHasShownFirstModal] = useState(false);
  const [hasShownSecondModal, setHasShownSecondModal] = useState(false);
  const secondModalTimerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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

  // Show first modal after 20 seconds
  useEffect(() => {
    if (!hasShownFirstModal) {
      const timer = setTimeout(() => {
        setShowModal(true);
        setHasShownFirstModal(true);
      }, 20000);
      return () => clearTimeout(timer);
    }
  }, [hasShownFirstModal]);

  // Set up second modal timer when first modal closes
  useEffect(() => {
    if (hasShownFirstModal && !showModal && !hasShownSecondModal) {
      secondModalTimerRef.current = setTimeout(() => {
        setShowModal(true);
        setHasShownSecondModal(true);
      }, 40000);
      
      return () => {
        if (secondModalTimerRef.current) {
          clearTimeout(secondModalTimerRef.current);
        }
      };
    }
  }, [hasShownFirstModal, showModal, hasShownSecondModal]);

  // Clear second modal timer if user submits form in first modal
  useEffect(() => {
    if (showSuccess && secondModalTimerRef.current) {
      clearTimeout(secondModalTimerRef.current);
    }
  }, [showSuccess]);

  // Exit intent detection - only after both scheduled modals have shown
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (
        e.clientY <= 0 &&
        !showModal &&
        hasShownFirstModal &&
        hasShownSecondModal &&
        !localStorage.getItem('exitModalShown')
      ) {
        setShowModal(true);
        localStorage.setItem('exitModalShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showModal, hasShownFirstModal, hasShownSecondModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get values directly from form
    const formElements = e.target.elements;
    const submittedData = {
      name: formElements.name.value,
      phone: formElements.phone.value,
      email: formElements.email.value || '',
      message: formElements.message.value || ''
    };

    try {
      await emailjs.send(
        "service_oqq2gx9",
        "template_45q2x0c",
        {
          name: submittedData.name,
          message: `Phone: ${submittedData.phone}\nEmail: ${submittedData.email}\nMessage: ${submittedData.message}`,
          to_name: "Heartland Restoration",
          email: submittedData.email || "No email provided",
          phone: submittedData.phone
        },
        "JMBl585lEMg3cdw0Z"
      );

      // Update state with submitted data
      setFormData(submittedData);
      setShowSuccess(true);
      
      // Track form submission as conversion
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-1032093322/SBE_CMybz8YaEIr9kewD',
          'value': 1.0,
          'currency': 'USD'
        });
      }
      
      // Redirect to thank you page after a brief delay
      setTimeout(() => {
        setShowModal(false);
        setShowSuccess(false);
        navigate('/thank-you');
      }, 1500);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle all form input changes with a single function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form autofill detection
  useEffect(() => {
    if (showModal) {
      // Brief delay to allow autofill to complete
      const autofillTimer = setTimeout(() => {
        const form = document.getElementById('emergencyForm');
        if (form) {
          // Check for autofilled inputs
          const inputs = form.querySelectorAll('input, textarea');
          let updatedData = {...formData};
          let hasAutofilled = false;
          
          inputs.forEach(input => {
            // Check if browser has autofilled this input
            const isAutofilled = input.matches(':-webkit-autofill') || 
                               (window.getComputedStyle(input, null).getPropertyValue('background-color') !== 'rgb(255, 255, 255)');
            
            if (isAutofilled && input.value && input.name) {
              updatedData[input.name] = input.value;
              hasAutofilled = true;
            }
          });
          
          if (hasAutofilled) {
            setFormData(updatedData);
          }
        }
      }, 100);
      
      return () => clearTimeout(autofillTimer);
    }
  }, [showModal]);

  const Modal = () => {
    if (!showModal) return null;
    
    return (
      <div className="modal-overlay" onClick={() => setShowModal(false)}>
        <div 
          className="enhanced-modal"
          onClick={e => e.stopPropagation()}
        >
          <div className="modal-header">
            <button className="close-modal" onClick={() => setShowModal(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {showSuccess ? (
            <div className="success-message">
              <FontAwesomeIcon icon={faCheck} className="success-icon" />
              <h2>Thank You!</h2>
              <p>We'll contact you right away.</p>
              <p>For immediate assistance, call:</p>
              <a href={`tel:${phoneNumber}`} className="success-phone" onClick={trackPhoneCall}>
                <FontAwesomeIcon icon={faPhone} /> {phoneNumber}
              </a>
            </div>
          ) : (
            <>
              <h2>Get Emergency Help Now</h2>
              <p className="modal-subtitle">Fast response for water damage emergency service in Kansas City and Johnson County</p>
              <form id="emergencyForm" onSubmit={handleSubmit} autoComplete="on">
                <div className="form-group">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    defaultValue={formData.name}
                    required
                  />
                </div>
                <div className="form-group">
                  <FontAwesomeIcon icon={faPhone} className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    defaultValue={formData.phone}
                    required
                  />
                </div>
                <div className="form-group">
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email (optional)"
                    defaultValue={formData.email}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Tell us about your emergency"
                    defaultValue={formData.message}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Get Help Now'}
                </button>
              </form>
              <div className="form-divider">
                <span>OR</span>
              </div>
              <div className="modal-cta">
                <a href={`tel:${phoneNumber}`} className="modal-phone" onClick={trackPhoneCall}>
                  <FontAwesomeIcon icon={faPhone} className="phone-icon" /> Call {phoneNumber}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flood-content">
      <header className="flood-header">
        <div className="logo">
          <img src={logo} alt="Heartland Restoration Logo" />
        </div>
        <div className="contact-info">
          <h2>Water Damage? Need Help Today?</h2>
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

      <Modal />
    </div>
  );
}

export default FloodContent;