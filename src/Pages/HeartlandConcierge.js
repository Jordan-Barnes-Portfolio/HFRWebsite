import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeartlandConciergeNavbar from '../Components/HeartlandConciergeNavBar';



// HeartlandConcierge component that contains all sections
const HeartlandConcierge = () => {
  // Feature cards data
  const features = [
    {
      title: "Complete Transparency",
      description: "Our software platform provides real-time updates and complete visibility into every step of the restoration process, empowering you to oversee progress without the hassle."
    },
    {
      title: "Trusted Local Experts",
      description: "We've vetted and partnered with the best hometown, values-based restoration companies in Kansas City who deliver exceptional service with integrity and craftsmanship."
    },
    {
      title: "Simplified Service & Claims Process",
      description: "From documentation to coordination of multiple trades, we compile all necessary evidence in one actionable chain, making insurance claims straightforward and efficient."
    },
    {
      title: "All Trades Under One Roof",
      description: "Water damage often requires multiple specialists. Our network includes every necessary trade, coordinated seamlessly to provide comprehensive restoration solutions."
    }
  ];

  // Process steps data
  const steps = [
    {
      number: 1,
      title: "Dispatch",
      description: "Using our Workforce+ Software, you can request any trade or service we provide and include the details of your need."
    },
    {
      number: 2,
      title: "Match",
      description: "We connect you with the right restoration experts for your specific needs."
    },
    {
      number: 3,
      title: "Track",
      description: "Monitor progress in real-time through our transparent software platform, including end of day reports!"
    },
    {
      number: 4,
      title: "Resolve",
      description: "Experience a smooth restoration process with complete documentation for claims and service needs."
    }
  ];

  // Insurance benefits data
  const insuranceBenefits = [
    {
      title: "Prevent Unnecessary Claims",
      description: "Our expert assessment helps determine when a claim is truly needed, protecting your clients' claim history and your loss ratios."
    },
    {
      title: "Real-Time Oversight",
      description: "Access our platform to monitor progress, review documentation, and stay informed without constant phone calls."
    },
    {
      title: "Client Satisfaction",
      description: "Provide your clients with reliable, quality restoration services that reflect positively on your recommendation."
    }
  ];

  return (
    <div className="heartland-concierge">
       <HeartlandConciergeNavbar />
      {/* CSS styles */}
      <style jsx>{`
        :root {
          --primary: #1e5c97;
          --secondary: #e8f1f9;
          --accent: #f59e0b;
          --dark: #2c3e50;z
          --light: #f8fafc;
        }
        
        .heartland-concierge * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .heartland-concierge {
          color: var(--dark);
          line-height: 1.6;
        }
        
        .container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-title h2 {
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }
        
        .btn {
          display: inline-block;
          background-color: var(--accent);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
          transition: background-color 0.3s;
        }
        
        .btn:hover {
          background-color: #e08c00;
        }

        /* Hero Section */
        .hero {
          background-color: var(--primary);
          color: white;
          padding: 5rem 0;
          text-align: center;
        }
        
        .hero h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .hero p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto 2rem;
        }

        /* Features Section */
        .features {
          padding: 5rem 0;
          background-color: var(--light);
        }
        
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .feature-card {
          background-color: white;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
        }
        
        .feature-card h3 {
          margin-bottom: 1rem;
          color: var(--primary);
        }

        /* Process Section */
        .process {
          padding: 5rem 0;
        }
        
        .process-steps {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 2rem;
        }
        
        .step {
          flex-basis: calc(25% - 1.5rem);
          text-align: center;
          position: relative;
        }
        
        .step-number {
          width: 50px;
          height: 50px;
          background-color: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 1rem;
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        .step:not(:last-child):after {
          content: "";
          position: absolute;
          top: 25px;
          right: -50%;
          width: 100%;
          height: 2px;
          background-color: var(--primary);
          z-index: -1;
        }

        /* Insurance Partners Section */
        .insurance-partners {
          padding: 5rem 0;
          background-color: var(--secondary);
        }

        /* Partners Section */
        .partners {
          padding: 5rem 0;
          background-color: var(--secondary);
        }
        
        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          align-items: center;
          justify-items: center;
          margin-top: 2rem;
        }
        
        .partner-logo {
          max-width: 120px;
          height: auto;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: all 0.3s;
        }
        
        .partner-logo:hover {
          filter: grayscale(0);
          opacity: 1;
        }

        /* CTA Section */
        .cta {
          padding: 5rem 0;
          background-color: var(--primary);
          color: white;
          text-align: center;
        }
        
        .cta h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
        
        .cta p {
          max-width: 800px;
          margin: 0 auto 2rem;
          font-size: 1.1rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .step {
            flex-basis: 100%;
            margin-bottom: 2rem;
          }
          
          .step:after {
            display: none;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero" id="concierge">
        <div className="container">
          <h1>CONCIERGE CONTRACTOR</h1>
          <p>
            <div style={{fontSize: '24px',fontWeight:'bold',  textDecoration:'underline',color:'#f7941d',}}> Kansas City's Premier Concierge Trade-Services Alliance</div>Connecting insurance agents, HOAs, property managers, 
            and commercial entities with trusted, hometown experts while providing unmatched transparency and oversight.</p>
          <a href="#contact" className="btn">Get Started Today</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our Concierge Program</h2>
            <p>We bring value through transparency, expertise, and accountability</p>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process" id="process">
        <div className="container">
          <div className="section-title">
            <h2>How Our Concierge Program Works</h2>
            <p>A simple, efficient process designed with your needs in mind</p>
          </div>
          <div className="process-steps">
            {steps.map((step, index) => (
              <div className="step" key={index}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Insurance Agents Section */}
      <section className="insurance-partners">
        <div className="container">
          <div className="section-title">
            <h2>For Insurance Agents & Commercial Partners</h2>
            <p>We help you deliver exceptional client experiences while reducing unnecessary claims</p>
          </div>
          <div className="feature-grid">
            {insuranceBenefits.map((benefit, index) => (
              <div className="feature-card" key={index}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners" id="partners">
        <div className="container">
          <div className="section-title">
            <h2>Our Trusted Partners</h2>
            <p>Working with Kansas City's finest restoration specialists</p>
          </div>
          <div className="partners-grid">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <img 
                key={num}
                src={`../Assets/ccPartners${num}.png`} 
                alt={`Partner Logo ${num}`} 
                className="partner-logo"
              />
            ))}
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="contact">
        <div className="container">
          <h2>Ready to Experience Hassle-Free Restoration?</h2>
          <p>Join our concierge program and provide your clients with the transparent, high-quality service they deserve.</p>
          <a href="tel:+9132893104" className="btn">Contact Us Today</a>
        </div>
      </section>
    </div>
  );
};

export default HeartlandConcierge;