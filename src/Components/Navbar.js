import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-section">
      <style jsx>{`
        /* Styling for navbar links */
        .navbar-links {
          color:rgb(255, 255, 255)   !important;
          font-weight: bold;
          padding: 5px 10px;
          border: 2px solid transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .navbar-links:hover {
          color: #f7941d !important;
          border-color: white !important;
          background-color: rgb(255, 255, 255);
        }

        .navbar-links:active {
          color: #d17c19 !important;
          background-color: rgb(255, 255, 255);
          transform: scale(0.98);
        }

        /* Mobile navbar link styling */
        .mobile-navbar-links li a {
          color:rgb(5, 43, 78) !important;
          font-weight: bold;
          padding: 5px 10px;
          border: 2px solid transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .mobile-navbar-links li a:hover {
          color:rgb(138, 78, 5) !important;
          border-color: white !important;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .mobile-navbar-links li a:active {
          color: #d17c19 !important;
          background-color: rgba(255, 255, 255);
          transform: scale(0.98);
        }
      `}</style>

      <h1 className="navbar-title">
        <Link to="/">
          {isMobile ? "Heartland" : "Heartland Restoration"}
        </Link>
      </h1>

      {!isMobile && (
        <ul className="navbar-items">
          <li><Link to="/" className="navbar-links">Home</Link></li>
          <li><a href="#services" className="navbar-links">Services</a></li>
          <li><a href="#about" className="navbar-links">About</a></li>
          <li><a href="#reviews" className="navbar-links">Reviews</a></li>
          <li><a href="#Technicians" className="navbar-links">Technicians</a></li>
          <li><Link to="/appointment" className="navbar-links">Appointment</Link></li>
          <li><Link to="/concierge-contractor" className="navbar-links">Concierge Contractor</Link></li>
          <li><a href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x67bbabee79e27d99:0x619c3c1752aca767!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2" className="navbar-links">Leave a Review</a></li>
        </ul>
      )}

      {isMobile && (
        <>
          <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
            <div onClick={openNav} className="mobile-navbar-close">
              <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
            </div>
            <ul className="mobile-navbar-links">
              <li><Link onClick={openNav} to="/">Home</Link></li>
              <li><a onClick={openNav} href="#services">Services</a></li>
              <li><a onClick={openNav} href="#about">About</a></li>
              <li><a onClick={openNav} href="#reviews">Reviews</a></li>
              <li><a onClick={openNav} href="#Technicians">Technicians</a></li>
              <li><Link onClick={openNav} to="/appointment">Appointment</Link></li>
              <li><Link onClick={openNav} to="/restoration-resources">Concierge Contractor</Link></li>
              <li><a onClick={openNav} href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x67bbabee79e27d99:0x619c3c1752aca767!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2">Leave a Review</a></li>
            </ul>
          </div>
          <div className="mobile-nav">
            <FontAwesomeIcon icon={faBars} onClick={openNav} className="hamb-icon" />
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;