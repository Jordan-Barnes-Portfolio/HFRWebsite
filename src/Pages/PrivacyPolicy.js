import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../Styles/PrivacyPolicy.css';
import logo from '../Assets/HR_Stacked-Logo.png';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <header className="privacy-header">
        <Link to="/" className="back-link">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
        </Link>
        <div className="privacy-logo">
          <img src={logo} alt="Heartland Restoration Logo" />
        </div>
      </header>
      
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <p className="effective-date">Last Updated: June 1, 2023</p>
        
        <section>
          <h2>Introduction</h2>
          <p>
            Heartland Restoration ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p>
            Please read this Privacy Policy carefully. By accessing or using our website or services, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </section>
        
        <section>
          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when filling out forms on our website or contacting us.
            </li>
            <li>
              <strong>Usage Information:</strong> Information about how you use our website, including pages visited, time spent on the site, and browser information.
            </li>
            <li>
              <strong>Device Information:</strong> Information about the device you use to access our website, including IP address, browser type, and operating system.
            </li>
          </ul>
        </section>
        
        <section>
          <h2>How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and fulfill your requests</li>
            <li>Send you information about our services, promotions, and events</li>
            <li>Monitor and analyze usage patterns and trends</li>
            <li>Protect our rights, property, or safety, and that of our users</li>
          </ul>
        </section>
        
        <section>
          <h2>Disclosure of Your Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers who perform services on our behalf</li>
            <li>Professional advisors, such as lawyers and accountants</li>
            <li>Business partners with whom we jointly offer products or services</li>
            <li>Law enforcement or other governmental officials, as required by law</li>
          </ul>
        </section>
        
        <section>
          <h2>Cookies and Similar Technologies</h2>
          <p>
            We may use cookies and similar tracking technologies to collect information about your browsing activities. 
            You can set your browser to refuse all or some browser cookies, but this may prevent some parts of our website from functioning properly.
          </p>
        </section>
        
        <section>
          <h2>Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
          <ul>
            <li>Access to your personal information</li>
            <li>Correction of inaccurate or incomplete information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction or objection to processing</li>
            <li>Data portability</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
          </p>
        </section>
        
        <section>
          <h2>Security</h2>
          <p>
            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. 
            However, no data transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
          </p>
        </section>
        
        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. 
            We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
          </p>
        </section>
        
        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <div className="contact-details">
            <p>Heartland Restoration</p>
            <p>Kansas City, MO 64111</p>
            <p>Phone: 913-213-3686</p>
            <p>Email: info@heartlandrestoration.com</p>
          </div>
        </section>
      </div>
      
      <footer className="privacy-footer">
        <p>&copy; {new Date().getFullYear()} Heartland Restoration. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PrivacyPolicy; 