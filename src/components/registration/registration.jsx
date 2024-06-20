import "./registration.css";
import buildingStellar from "../../../public/assets/images/building_stellar.svg";
import Get_In_Touch from "../../../public/assets/images/Get_In_Touch _With_Us.svg"

export const Registration = () => {
  return (
    <div className="building_stellar_section">
      <div className="buildingForm">
        <img className="buildingStellar" src={buildingStellar} alt="" />
        <div className="buildingBackground"></div>
        <div className="building-title-text">
          <p className="building-title">
            Building stellar websites for early startups
          </p>
          <p className="building-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
        <div className="form">
          <h3 className="send_inquiry">Send inquiry</h3>
          <p className="form-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="form-inputs">
              <input type="text" placeholder="Your Name"/>
              <input type="text" placeholder="Email"/>
              <input type="text" placeholder="Paste your Figma design URL"/>
              <button className="form-button">Send an Inquiry</button>
              <a className="Get_In_Touch" href="#"><img src={Get_In_Touch} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};
