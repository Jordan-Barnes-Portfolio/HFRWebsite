import React from "react";
import InformationCard from "../Assets/info-section.png";
import "../Styles/Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/BookAppointment.css";
import { useNavigate  } from "react-router-dom";
import { useMediaQuery } from "react-responsive";


function Info() {

    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    const navigate = useNavigate();

    const handleBookAppointmentClick = () => {
      navigate("/appointment");
    };

    if(!isMobile){
        return (
            <div
            className="info-section-extra"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
            <div style={{ textAlign: "center" }}>
                <h3 className="ba-title">
                <span>Why Choose Heartland Restoration</span>
                </h3>
                <p className="ba-description">
                Heartland is family-owned & locally operated company. We treat your home & business like it is our own. Our technicians
                will arrive in a uniform and ready to help. The problems you're experiencing, we're going to solve. Overflows, floods, back-up
                broken pipes, leaks, sewage & mold is our specialty. The best part of our service is that you don't pay until you're absolutely
                satisfied.
                </p>

                <p className="ba-checks ba-check-first">
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2c6598" }} /> Professional Technicians
                </p>
                <p className="ba-checks">
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2c6598" }} /> 24/7 Emergency Services
                </p>
                <p className="ba-checks ba-check-last">
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2c6598" }} /> Call Or Make An Appointment
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
    } else {
        return (
            <div className="info-section-extra">
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
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2c6598" }} /> Professional Technicians
                    </p>
                    <p className="ba-checks">
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2c6598" }} /> 24/7 Emergency Services
                    </p>
                    <p className="ba-checks ba-check-last">
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2c6598" }} /> Call Or Make An Appointment
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
}

export default Info;
