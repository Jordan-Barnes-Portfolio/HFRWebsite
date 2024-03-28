import React from "react";
import InformationCard from "./InformationCard";
import { faHourglass, faBook, faIndustry } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          Specializing in a range of flood-related issues including burst pipes, flood repair, water leaks, and mold remediation, 
          we're equipped to handle any challenge that comes our way. Whether it's extracting water, restoring damaged structures, 
          or mitigating mold growth, our experienced team is here to restore your property to its pre-flood condition efficiently 
          and effectively. When disaster strikes, you can rely on Heartland Restoration to be your trusted partner in recovery. 
          Don't hesitate to reach out to us today to discover how our flood restoration services can help you navigate through water 
          damage with confidence.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Service"
          description="Our Emergency Service is designed to be your reliable support
            in critical situations. Whether it's a sudden pipe burst, flood, or
            any concern that requires immediate attention, our team of
            dedicated professionals is available 24/7 to provide
            prompt and efficient help."
          icon={faHourglass}
        />

        <InformationCard
          title="Book an appointment"
          description="Our team of experienced technicians and flood experts use
            will come at your convenience to assess your home and
            design personalized plans to attack the problem. From comprehensive investigations
            to advanced flood and mold care, we are committed to helping you maintain
            a safe home."
          icon={faBook}
        />

        <InformationCard
          title="Insurance"
          description="Be confident! Our services cater to all your
            insurance needs. Our skilled appraisers provide support
            with your insurance agency to ensure you arent paying anything
            extra out of pocket."
          icon={faIndustry}
        />
      </div>
    </div>
  );
}

export default Info;
