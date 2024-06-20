
import { FeaturesCard } from "../fearutesCard/fearutesCard";
import "./features.css";

export const Features = () => {
  return (
    <>
      <div className="features-section">
        <p className="features-text">Features</p>
        <h1 className="features-title">
          Design that solves problems, one product at a time
        </h1>
        <div className="features_cards">
          <FeaturesCard/>
        </div>
      </div>
    </>
  );
};
