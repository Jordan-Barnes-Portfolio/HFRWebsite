import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";
import herobg from "../Assets/hero-bg.jpg";
import logo from "../Assets/logo.png";
import { useMediaQuery } from "react-responsive";

function Hero() {

  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const mainWrapper = isMobile ? "main-wrapper-mobile" : "main-wrapper";
  
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
    <div className={mainWrapper}>
      <div className="hero-section" style={{margin: "10px;"}}>
        <div style={{position: "fixed",  zIndex: "-1", maxWidth: "100%", height: "auto", backgroundSize: "cover"}}>
            <img src={herobg} alt="loading.." />
        </div>
          <div className="text-section" >
            <p className="text-headline">Need immediate flood or mold services?</p>
            <h2 className="text-title" style={{width: "100%"}}>
              Click "Emergency Service" below or call us and we will come right away!
            </h2>
            <p className="text-descritpion" style={{width: "100%"}}>
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
                <a href="tel:9137178945">
                  <button
                    className="text-appointment-btn"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faPhone} /> Call: 913 717 8945
                  </button>
                </a>
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
        <div className="hero-logo">
          <img src={logo} alt="logo" width={300} height={300}/>
        </div>

        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
