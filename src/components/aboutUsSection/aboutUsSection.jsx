import "./aboutUsSection.css";
//Images
import AboutUsImg from "../../../public/assets/images/aboutUs-img.svg"

export const AboutUsSection = () => {
  return (
    <div className="aboutUsSection">
      <div className="aboutUs-information">
          <p className="about_us">About Us</p>
          <h2 className="aboutUs-title">Our designs solve problems</h2>
          <p className="aboutUs-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam.
          </p>
      </div>
      <img src={AboutUsImg} alt="" />
    </div>
  );
};
