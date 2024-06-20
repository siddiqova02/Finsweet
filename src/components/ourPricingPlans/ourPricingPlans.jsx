import "./ourPricingPlans.css";

export const OurPricingPlans = () => {
  return (
    <div className="OurPricingPlans-section">
      <h2 className="ourPricingPlans-title">Our Pricing Plans</h2>
      <p className="ourPricingPlans-text">
        When you’re ready to go beyond prototyping in Figma, Webflow is ready to
        help you bring your designs to life — without coding them.
      </p>
      <div className="pricing-cards">
        <div className="pricing-card">
            <div>
                <h2>$299</h2>
                <p>Per Design</p>
            </div>
            <p>Landing Page </p>
            <p>When you’re ready to go beyond prototyping in Figma, </p>
            <div>
                <img src="" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};
