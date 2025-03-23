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
          color: #1e5c97 !important;
          font-weight: bold;
        }

        .heartland-navbar-wrapper :global(.navbar-brand) {
          color: #1e5c97 !important;
        }

        .heartland-navbar-wrapper :global(.navbar-section .navbar-title),
        .heartland-navbar-wrapper
          :global(.navbar-section)
          :global(.navbar-title),
        .heartland-navbar-wrapper
          :global(div.navbar-section)
          :global(div.navbar-title),
        .heartland-navbar-wrapper :global(.navbar-title) {
          color:rgb(255, 255, 255) !important;
        }

        /* Target the text elements directly */
        .heartland-navbar-wrapper :global(.navbar-title h1),
        .heartland-navbar-wrapper :global(.navbar-title p),
        .heartland-navbar-wrapper :global(.navbar-title span),
        .heartland-navbar-wrapper :global(.navbar-title div) {
          color:rgb(255, 255, 255) !important;
        }
      `}</style>
      <Navbar />
    </div>
  );
}

export default HeartlandConciergeNavbar;
