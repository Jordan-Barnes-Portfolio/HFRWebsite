import React from "react";
import Navbar from "./Navbar"; // Adjust path to your actual Navbar component

function HeartlandConciergeNavbar() {
  return (
    <div className="heartland-navbar-wrapper">
      <style jsx>{`
        .heartland-navbar-wrapper {
          background-color: #1e5c97;
          /*border-bottom: 1px solid #00000090;*/
          padding-bottom: 5px;
        }
        .heartland-navbar-wrapper :global(.navbar-section .navbar-title) {
          color: white !important;
        }

        /* Target the Navbar elements with :global() */
        .heartland-navbar-wrapper :global(nav),
        .heartland-navbar-wrapper :global(.navbar) {
          background-color: rgba(255, 255, 255, 0.9) !important;
          box-shadow: 0 2px 4px rgba(179, 52, 52, 0.1);
        }

        .heartland-navbar-wrapper :global(.nav-link),
        .heartland-navbar-wrapper :global(a) {
          color: rgb(207, 14, 104) !important;
          font-weight: bold;
          padding: 5px 10px;
          border: 2px solid transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .heartland-navbar-wrapper :global(.nav-link:hover),
        .heartland-navbar-wrapper :global(a:hover) {
          color: #f7941d !important;
          border-color: white !important;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .heartland-navbar-wrapper :global(.nav-link:active),
        .heartland-navbar-wrapper :global(a:active) {
          color: #d17c19 !important;
          background-color: rgba(255, 255, 255, 0.2);
          transform: scale(0.98);
        }

        .heartland-navbar-wrapper :global(.navbar-section .navbar-title),
        .heartland-navbar-wrapper
          :global(.navbar-section)
          :global(.navbar-title),
        .heartland-navbar-wrapper
          :global(div.navbar-section)
          :global(div.navbar-title),
        .heartland-navbar-wrapper :global(.navbar-title) {
          color: rgb(255, 255, 255) !important;
        }

        /* Target the text elements directly */
        .heartland-navbar-wrapper :global(.navbar-title h1),
        .heartland-navbar-wrapper :global(.navbar-title p),
        .heartland-navbar-wrapper :global(.navbar-title span),
        .heartland-navbar-wrapper :global(.navbar-title div) {
          color: rgb(255, 255, 255) !important;
        }
      `}</style>
      <Navbar />
    </div>
  );
}

export default HeartlandConciergeNavbar;