import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";
import herobg from "../Assets/hero-bg.jpg";
import herovid from "../Assets/herobannermedia.mp4";
import logo from "../Assets/logo.png";
import { useMediaQuery } from "react-responsive";


function Hero() {

  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const hero_bg = isMobile ? herobg : herovid;
  
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
          {
            isMobile ? 
              <img 
                src={hero_bg} 
                alt="hero-bg" 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              /> 
              : 
              <video 
                autoPlay 
                muted 
                loop 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              >
                <source src={hero_bg} type="video/mp4"/>
              </video>
          }
        </div>
          <div className="text-section" >
            <p className="text-headline">We're On Standby 24/7 Ready To Take On Your Most Difficult Home Restoration Challenge</p>
            
            <h2 className="text-title" style={{width: "100%"}}>
              Click "Emergency Service" below or call us and we will come right away!
            </h2>
            <p className="text-descritpion" style={{width: "100%"}}>
              Talk to one of our Technicians! You will get expert advice and assistance from
              one us within minutes. On-demand restoration
              services at your fingertips.
            </p>
            <div style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
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
                  width: isMobile ? "100%" : "auto",
                  minWidth: "200px"
                }}
              >
                <FontAwesomeIcon icon={faCalendarCheck} /> Schedule emergency service
              </button>
              <a href="tel:9132133686" onClick={handleCall} style={{width: isMobile ? "100%" : "auto"}}>
                <button
                  className="text-appointment-btn"
                  type="button"
                  style={{
                    width: isMobile ? "100%" : "auto",
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
