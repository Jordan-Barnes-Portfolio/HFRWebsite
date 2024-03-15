import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Heartland Restoration
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to Heartland Restoration, your trusted online flood restoration
          platform. Our mission is to provide accessible and personalized restorative services
          to individuals seeking expert advice and assistance. By using
          our platform, you agree to the terms outlined in our Privacy Policy
          and Terms of Service.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is paramount to us. Our Privacy Policy outlines how we
          collect, use, and protect your personal and information. We
          ensure secure data handling, and you can trust that your information
          is treated with the utmost confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          When using Heartland Restoration, you agree to our Terms of Service. This
          includes guidelines for using our platform, interacting with Technicians,
          and the responsibilities of both parties. It's essential to understand
          these terms to ensure a smooth experience for all users.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
          Our platform connects you with expert Technicians who provide online
          consultations. These consultations are not a replacement for in-person
          visits but serve as a convenient option for restorative advice,
          help, and guidance. It's crucial to provide accurate and
          complete information to receive the best possible assistance.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          Heartland Restoration is designed to simplify restorative access. You can choose
          a specialist, schedule an appointment, and engage in a virtual
          consultation. Our specialists offer personalized advice and service
          plans tailored to your needs. Please remember that emergencies require
          immediate attention and should be directed to our emergency services scheduling
          section. You can reach this section by going back to the home page and clicking
          "Emergency Service".
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2023-2024 Heartland Flood and Restoration. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
