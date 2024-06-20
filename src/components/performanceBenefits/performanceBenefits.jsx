import "./performanceBenefits.css";
//Json
import benefitsJson from "../data/performanceBenefits.json";

export const PerformanceBenefits = () => {
  return (
    <div className="benefits_cards">
      {benefitsJson &&
        benefitsJson.map((item) => {
          return (
            <div className="benefitsCard" key={item.id}>
              <img className="icon" src={item.images} alt="" />
              <h2>Customize with ease</h2>
              <p className="benefits-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
            </div>
          );
        })}
    </div>
  );
};
