import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styles/RestorationResources.css';
import DryingHardwood from '../Assets/dryer-hardwood-image.jpg';
import LongJoshuaImage from '../Assets/joshua-long-image.jpg';
import LeakyFaucet from '../Assets/ai-faucet-image.jpg';
import LeakingDishwasher from '../Assets/ai-dishwasher-image.jpg';

function RestorationResources() {

  const [showFaucetTip, setShowFaucetTip] = useState(false);
  const [showDishwasherTip, setShowDishwasherTip] = useState(false);

  return (
    <div className="restoration-resources-page">
      <Navbar />
      <main>
        <section className="content-section">
          <h2>Purpose</h2>
          <p>This website is your go-to guide for understanding water damage, mold, and the restoration process. We break down the essentials of how mitigation works, from dealing with clean or gray water to preventing mold growth. You'll get insider knowledge on the IICRC standards, especially the S500, so you know exactly what to expect when disaster strikes.</p>
          <p>We also help you get a handle on your insurance coverage, making sure you're prepared and protected. It's all about giving you the tools to make smart decisions and be ready for anything.</p>
        </section>
        <img src={LongJoshuaImage} alt="Water Damage Illustration" />
        <section className="open-letter">
        
          <h2>Open Letter For All Insured:</h2>
          <img src={DryingHardwood} alt="Water Damage Illustration" />
          <p>Water damage is a common issue, but it's essential to know how to handle it properly. Whether the source is clean water (like from a broken pipe) or gray water (from appliances like washing machines), the approach to mitigation matters. Gray water, in particular, poses more significant risks due to potential contaminants.</p>
          <p>At the core of proper water damage response is the IICRC's S500 Standard, which guides mitigation companies in safely and effectively handling such situations. These standards ensure that all water is removed, areas are thoroughly dried, and further damage or mold growth is prevented.</p>
          <p>Understanding your insurance coverage is just as critical. Start by reviewing your endorsements, which are additional coverages added to your policy. Not all water damage scenarios are automatically covered by standard insurance policies. Typically, sudden and accidental water discharge is covered, but gray water or slow leaks may not be. Knowing what's included in your policy helps avoid surprises later on.</p>
          <p>When selecting a mitigation company, choose one that focuses on educating you about the process and your options. Relying solely on insurance as a complete bailout can be costly. A reputable company will work with you to manage risks and costs, rather than assuming your insurance will cover everything.</p>
          <p>Staying informed and prepared can make a significant difference in how you handle water damage. For any questions or further information, feel free to reach out to us.</p>
          <p>Best regards,<br/>Heartland Restoration<br/>Joshua Barnes, Owner</p>
        </section>

        <section className="diy-resources">
          <h2>Tips & DIY Resources for Common Household Leaks & Water Invasions</h2>

          <div className="tip-image-container">
            <div className="tip-image" onClick={() => setShowFaucetTip(!showFaucetTip)}>
              <img src={LeakyFaucet} alt="Leaky Faucet" />
              <h3>What to Do When Your Faucet Leaks</h3>
            </div>
            <div className="tip-image" onClick={() => setShowDishwasherTip(!showDishwasherTip)}>
              <img src={LeakingDishwasher} alt="Leaking Dishwasher" />
              <h3>How to Handle a Leaking or Broken Dishwasher</h3>
            </div>
          </div>

          {showFaucetTip && (
            <div className="tip-container">
            <h3>What to Do When Your Faucet Leaks</h3>
            <p>A leaking faucet might seem like a minor issue, but if left unchecked, it can lead to bigger problems, like water damage or mold growth. Here's what you can do to tackle a leaky faucet and prevent further issues:</p>
            
            <h4>First: Turn Off the Water and Inspect the Leak</h4>
            <p>Immediately turn off the water supply to the faucet to prevent more water from leaking. This is usually done by turning the shut-off valves under the sink clockwise. Once the water is off, check around the faucet for any signs of water damage or leaking.</p>

            <h4>Next: Attempt a Fix or Decide on a Replacement</h4>
            <p>You might be able to fix the leak yourself if it's something simple like replacing a worn washer or tightening a loose connection. <a href="https://www.youtube.com/watch?v=F4LeAVpTdds" target="_blank" rel="noopener noreferrer">Here's a video that might help you!</a> However, if the leak is more complicated, it might be best to call a plumber.</p>

            <h4>Then: Call Heartland Restoration for Water Damage Assessment</h4>
            <p>If there's any sign of water damage, especially in areas you can't easily see, it's important to call professionals. At Heartland Restoration, we use advanced thermal imaging to detect hidden moisture that could lead to mold growth. We can help you ensure that all affected areas are thoroughly dried and restored.</p>

            <h4>Last: Monitor the Area for Mold Growth</h4>
            <p>Keep an eye on the area for any signs of mold in the coming days and weeks. Mold can develop if moisture remains, even after the leak is fixed. If you spot mold or suspect hidden moisture use hydrogen peroxide, not bleach! Bleach only stains it white, but hydrogen peroxide should kill it. If you have any doubts contact us for a free assessment.</p>
          </div>
          )}

          {showDishwasherTip && (
            <div className="tip-container">
            <h3>How to Handle a Leaking or Broken Dishwasher</h3>
            <p>A leaking dishwasher can cause water damage that you might not even notice at first. It can quickly spread under your kitchen cabinets and flooring, leading to serious issues like mold. Here's how to handle a leaking dishwasher safely:</p>

            <h4>First: Turn Off the Dishwasher and Inspect the Area</h4>
            <p>Immediately stop the dishwasher and shut off the water supply to prevent more water from leaking. Pull it out from its position if possible, and look underneath for any signs of leaks or pooling water. Also, check around and under the dishwasher for any water damage to the flooring or cabinetry.</p>

            <h4>Next: Assess Flooring Type and Potential Hidden Damage</h4>
            <p>If you have vinyl or laminate flooring, water can seep underneath, potentially damaging the subfloor. With hardwood floors, water can cause warping or buckling. In such cases, professional assessment is crucial to address the damage effectively and prevent long-term issues.</p>

            <h4>Then: Call Heartland Restoration</h4>
            <p>For any signs of water damage or if you're unsure about the source of the leak, it's important to call professionals. At Heartland Restoration, we can assess the damage using advanced thermal imaging to detect moisture that isn't visible, ensuring all water is thoroughly removed.</p>

            <h4>Call a Plumber for Repairs</h4>
            <p>If the leak is more than a simple fix or you're not sure how to handle it, it's a good idea to call a plumber. They can fix the leak and help prevent future issues, providing peace of mind that your dishwasher and plumbing are in good shape.</p>

            <h4>Last: Monitor for Mold and Additional Damage</h4>
            <p>After addressing the immediate issues, keep an eye on the area for signs of mold or further damage. Persistent moisture can lead to mold growth, which is a health hazard and can cause further damage to your home.</p>
          </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default RestorationResources;