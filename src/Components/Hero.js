import React, { useEffect, useState } from "react";
import Technician from "../Assets/customer_service.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">Need immediate flood or mold services?</p>
          <h2 className="text-title">
            Click "Emergency Service" below or call us and we will come right away!
          </h2>
          <p className="text-descritpion">
            Talk to online Technicians and get advice, expert advice, and assistance from
            one of our techs within minutes. On-demand restoration
            services at your fingertips.
          </p>
          <div style={{display: "-webkit-flex"}}>
              <div style={{margin: "5px"}}>
                <button
                  className="text-appointment-btn"
                  type="button"
                  onClick={handleBookAppointmentClick}
                >
                <FontAwesomeIcon icon={faCalendarCheck} /> Emergency Service
                </button>
              </div>
              <div style={{margin: "5px"}}>
                <button
                  className="text-appointment-btn"
                  type="button"
                >
                <FontAwesomeIcon icon={faPhone} /> Call: 913 717 8945
                </button>
              </div>
          </div>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>45k+</p>
              <p>Received Customers</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Expert Technicians</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Technician} alt="Technician" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
