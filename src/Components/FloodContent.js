import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faClock, faShieldAlt, faHome, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../Styles/FloodContent.css";
import logo from "../Assets/HR_Stacked-Logo.png";
import emailjs from "@emailjs/browser";

function FloodContent() {
  const [showModal, setShowModal] = useState(false);
  const [hasShownFirstModal, setHasShownFirstModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const phoneNumber = "913-289-3104";

  // Show modal after 30 seconds
  useEffect(() => {
    if (!hasShownFirstModal) {
      const timer = setTimeout(() => {
        setShowModal(true);
        setHasShownFirstModal(true);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [hasShownFirstModal]);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (
        e.clientY <= 0 &&
        !showModal &&
        hasShownFirstModal &&
        !localStorage.getItem('exitModalShown')
      ) {
        setShowModal(true);
        localStorage.setItem('exitModalShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showModal, hasShownFirstModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_oqq2gx9",
        "template_45q2x0c",
        {
          name: formData.name,
          message: `Phone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
          to_name: "Heartland Restoration",
          email: formData.email || "No email provided",
          phone: formData.phone
        },
        "JMBl585lEMg3cdw0Z"
      );

      setShowSuccess(true);
      setTimeout(() => {
        setShowModal(false);
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const Modal = () => (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="modal"
            onClick={e => e.stopPropagation()}
          >
            <button className="close-modal" onClick={() => setShowModal(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {showSuccess ? (
              <div className="success-message">
                <h2>Thank You!</h2>
                <p>We'll contact you right away.</p>
                <p>For immediate assistance, call {phoneNumber}</p>
              </div>
            ) : (
              <>
                <h2>Get Emergency Help Now</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email (optional)"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <textarea
                    placeholder="Tell us about your emergency"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Get Help Now'}
                  </button>
                </form>
                <div className="form-footer">
                  <p>OR CALL NOW: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

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
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero-section"
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
            We'll Be There in 30 Minutes
          </h1>
          <h2>Professional Water Damage & Flood Restoration Services</h2>
          
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href={`tel:${phoneNumber}`} className="cta-button call-now">
              <FontAwesomeIcon icon={faPhone} /> Call {phoneNumber}
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="benefits-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
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
        </div>
      </motion.div>

      <motion.div 
        className="emergency-tips"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3>While You Wait: Emergency Tips</h3>
        <ul>
          <li><FontAwesomeIcon icon={faCheck} /> Turn off the main water supply</li>
          <li><FontAwesomeIcon icon={faCheck} /> Remove valuable items from wet areas</li>
          <li><FontAwesomeIcon icon={faCheck} /> Take photos for insurance documentation</li>
          <li><FontAwesomeIcon icon={faCheck} /> Do not use electrical appliances in wet areas</li>
        </ul>
      </motion.div>

      <motion.div 
        className="final-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Don't Wait - Water Damage Gets Worse Every Minute!</h2>
        <a href={`tel:${phoneNumber}`} className="cta-button call-now">
          <FontAwesomeIcon icon={faPhone} /> Call {phoneNumber} Now
        </a>
      </motion.div>

      <Modal />
    </div>
  );
}

export default FloodContent;