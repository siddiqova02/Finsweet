import "./buildingSteller.css";
import text_button from "../../../public/assets/images/Text Button.svg";
import buildingImg from "../../../public/assets/images/buildingImg.svg";

export const BuildingSteller = () => {
  return (
    <div>
      <div className="building_steller">
        <div className="building_title_text_btn">
          <h1 className="building-title">
            Building stellar websites for early startups
          </h1>
          <p className="building-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="building-btn">
            <a className="view-our-work" href="#">View our work</a>
            <a href="#"><img src={text_button} alt="" /></a>
          </div>
        </div>
        <img className="buildingImg" src={buildingImg} alt="" />
      </div>
    </div>
  );
};
