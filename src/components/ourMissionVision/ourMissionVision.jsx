import "./ourMissionVision.css";

//Images
import mission from "../../../public/assets/images/Mission.svg"
import vision from "../../../public/assets/images/Vision.svg"

export const OurMissionVision = () => {
  return (
    <div className="ourMisVis-section">
      <div className="ourMission">
          <div className="ourMissionVision">
              <p className="mis-vis-text1">Our Mission </p>
              <h2 className="mis-vis-tile">Inspire, Innovate, Share</h2>
              <p className="mis-vis-text2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
          </div>
          <img src={mission} alt="" />
      </div>
      <div className="ourVision">
          <img src={vision} alt="" />
          <div className="ourMissionVision">
              <p className="mis-vis-text1">Our Vision </p>
              <h2 className="mis-vis-tile">Laser focus</h2>
              <p className="mis-vis-text2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
          </div>
      </div>
    </div>
  );
};
