import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";
import herobg from "../Assets/hero-bg.jpg";
import logo from "../Assets/logo.png";

function Hero() {
  
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  const handleCall = () => {
    window.gtag('config', 'AW-1032093322');
    window.gtag('event', 'conversion', {'send_to': 'AW-1032093322/DBHRCJ74wqIZEIr9kewD'});
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
      <div className="hero-section" style={{margin: "10px;"}}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          overflow: "hidden"
        }}>
          <img 
            src={herobg} 
            alt="hero-bg" 
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>
          <div className="text-section" >
            <p className="text-headline">24/7 Emergency Response Service Available</p>
            
            <h2 className="text-title" style={{width: "100%"}}>
              If There's Water or Mold Where It Shouldn't Be, Call Me!
            </h2>
            <p className="text-descritpion" style={{width: "100%"}}>
              Concerned about a leak, or damage to your home? You will get expert advice and assistance from
              one us within minutes. Fast acting restoration services
              with home town values from a Family Owned & Operated Company.
            </p>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
              width: "100%"
            }}>
              <button
                className="text-appointment-btn"
                type="button"
                onClick={handleBookAppointmentClick}
                style={{
                  width: "100%",
                  minWidth: "200px"
                }}
              >
                <FontAwesomeIcon icon={faCalendarCheck} /> Schedule emergency service
              </button>
              <a href="tel:9132133686" onClick={handleCall} style={{width: "100%"}}>
                <button
                  className="text-appointment-btn"
                  type="button"
                  style={{
                    width: "100%",
                    minWidth: "200px"
                  }}
                >
                  <FontAwesomeIcon icon={faPhone} /> Call: 913 213 3686
                </button>
              </a>
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
  );
}

export default Hero;