import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import emailjs from '@emailjs/browser';

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [CustomerName, setCustomerName] = useState("");
  const [CustomerNumber, setCustomerNumber] = useState("");
  const [CustomerEmail, setCustomerEmail] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};

    console.log(CustomerEmail, CustomerName, CustomerNumber);

    if (!CustomerName.trim()) {
      errors.CustomerName = "Customer name is required";
    } else if (CustomerName.trim().length < 4) {
      errors.CustomerName = "Customer name must be at least 4 characters";
    }

    if (!CustomerNumber.trim()) {
      errors.CustomerNumber = "Customer phone number is required";
    } else if (CustomerNumber.trim().length !== 10) {
      errors.CustomerNumber = "Customer phone number must be of 10 digits";
    }

    if (CustomerEmail === "default") {
      errors.CustomerEmail = "Please enter your email";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    var theMessage = "Appointment Date/Time: " + appointmentTime + "\nContact Phone: " + CustomerNumber + 
    "\nCustomer Email: " + CustomerEmail + "\nMode: " + preferredMode;

    emailjs.send('service_dsufijf', 'template_jz5nakq', {
      email_from: CustomerName,
      message: theMessage,
    }, 'Qa5vDU0zqykjmk4N7');

    // Reset form fields and errors after successful submission
    setCustomerName("");
    setCustomerNumber("");
    setCustomerEmail("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});
    
    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Heartland Restoration<span className="legal-siteSign"></span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Customer Full Name:
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
            Customer Phone Number:
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
            Customer Email:
            <input
              type="text"
              value={CustomerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
            />
            {formErrors.CustomerNumber && <p className="error-message">{formErrors.CustomerNumber}</p>}
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

          <br />
          <label>
            Preferred Mode:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="in person">In Person</option>
              <option value="voice">Voice Call</option>
              <option value="video">Video Call</option>
            </select>
            {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Confirm Appointment
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Appointment details has been sent to the Customers phone number via SMS.</p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2023-2024 Heartland Flood and Restoration. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
