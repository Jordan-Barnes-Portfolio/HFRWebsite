import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import emailjs from '@emailjs/browser';
import "../Styles/Hero.css";
import herobg from "../Assets/hero-bg.jpg";
import herovid from "../Assets/herobannermedia.mp4";
import { useMediaQuery } from "react-responsive";



function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const hero_bg = isMobile ? herobg : herovid;
  const [CustomerName, setCustomerName] = useState("");
  const [CustomerNumber, setCustomerNumber] = useState("");
  const [CustomerEmail, setCustomerEmail] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};

    console.log(CustomerEmail, CustomerName, CustomerNumber);

    if (!CustomerName.trim()) {
      errors.CustomerName = "Customer name is required";
    }

    if (!CustomerNumber.trim()) {
      errors.CustomerNumber = "Customer phone number is required";
    } else if (CustomerNumber.trim().length !== 10) {
      errors.CustomerNumber = "Customer phone number must be of 10 digits";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    var theMessage = "Appointment Date/Time: " + appointmentTime + "\nContact Phone: " + CustomerNumber + 
    "\nCustomer Email: " + CustomerEmail;

    emailjs.send('service_dsufijf', 'template_jz5nakq', {
      email_from: CustomerName,
      message: theMessage,
    }, 'Qa5vDU0zqykjmk4N7');

    window.gtag('config', 'AW-1032093322');
    window.gtag('event', 'conversion', {'send_to': 'AW-1032093322/Ykr5CKPAgaEZEIr9kewD'});
    
    // Reset form fields and errors after successful submission
    setCustomerName("");
    setCustomerNumber("");
    setCustomerEmail("");
    setAppointmentTime("");
    setFormErrors({});
    
    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-container">
      <div style={{position: "fixed",  zIndex: "-1", maxWidth: "100%", height: "auto", backgroundSize: "cover"}}>
          {
            isMobile ? <img src={hero_bg} alt="hero-bg" /> : <video autoPlay muted loop><source src={hero_bg} type="video/mp4"/></video>
          }
        </div>
      <div className="form-container">
        <h2 className="form-title">
          <span>Book Appointment</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={CustomerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
            {formErrors.CustomerName && <p className="error-message">{formErrors.CustomerName}</p>}
          </label>

          <br />
          <label>
            Phone Number:
            <input
              type="text"
              value={CustomerNumber}
              onChange={(e) => setCustomerNumber(e.target.value)}
              required
            />
            {formErrors.CustomerNumber && <p className="error-message">{formErrors.CustomerNumber}</p>}
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              value={CustomerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
            />
            {formErrors.CustomerEmail && <p className="error-message">{formErrors.CustomerEmail}</p>}
          </label>
          <br />
          <label>
            Preferred Appointment Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>
          <button type="submit" className="text-appointment-btn">
            Confirm Appointment
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Your appointment has been scheduled, we will contact you promptly with details!</p>
        </form>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
