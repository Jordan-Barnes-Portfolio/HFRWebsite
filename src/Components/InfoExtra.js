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
            <div className="info-section-extra">
                <div style={{float: "left", height: "100%", width: "50%", margin: "auto"}}>
                    <img src={InformationCard} style={{ height:"100%", maxWidth: "100%",  border: "2px", borderRadius: "12px" }}/> 
                </div>
                <div style={{float: "right", width: "50%", alignContent: "center"}}>
                    <div>
                        <h3 className="ba-title">
                        <span>Why Choose Heartland Restoration</span>
                        </h3>
                        <p className="ba-description">
                            Our team of experienced technicians and flood experts use will 
                            come at your convenience to assess your home and design personalized 
                            plans to attack the problem. From comprehensive investigations to 
                            advanced flood and mold care, we are committed to helping you maintain 
                            a safe home.
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
                
        );       
    }
}

export default Info;
