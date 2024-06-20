import "./whoWeAre.css";
import img_div2 from "../../../public/assets/images/whoWediv2.svg"

export const WhoWeAre = () => {
  return (
    <div className="whoWeAre-secrion">
      <div className="whoWeAre-div1">
          <div className="whoWeAre-information1">
              <p className="whoWeAre">Who we are</p>
              <h2 className="whoWeAre-title">Goal focussed</h2>
              <p className="whoWeAre-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
          </div>
          <div className="whoWeAre-information2">
              <h2 className="whoWeAre-title">Continuous improvement</h2>
              <p className="whoWeAre-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
          </div>
      </div>
      <img src={img_div2} alt="" />
    </div>
  );
};
