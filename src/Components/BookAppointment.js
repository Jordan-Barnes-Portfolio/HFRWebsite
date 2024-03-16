import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      {/* <div className="ba-image-content">
        <img src={Technician} alt="Technician Group" className="ba-image1" />
      </div> */}

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Heartland Restoration</span>
        </h3>
        <p className="ba-description">
          Discover the reasons to choose Heartland Restoration for your restoration needs.
          Experience expert service, convenience, and personalized solutions,
          making prompt and efficient service our top priority.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2c6598" }} /> Best Professional Technicians
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2c6598" }} /> Emergency Services
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2c6598" }} /> 24/7 Support Live Chat
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2c6598" }} /> Appointments only a click away
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
