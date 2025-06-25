import React from "react";
import "../Styles/Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/BookAppointment.css";
import { useNavigate  } from "react-router-dom";


function Info() {

    const navigate = useNavigate();

    const handleBookAppointmentClick = () => {
      navigate("/appointment");
    };

    return (
        <div className="info-section-extra">
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                padding: "20px"
            }}>
                <div>
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
                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2c6598" }} /> Amazing Professional Technicians
                    </p>
                    <p className="ba-checks">
                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2c6598" }} /> Emergency Services Immediately
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
        </div>
    );
}

export default Info;