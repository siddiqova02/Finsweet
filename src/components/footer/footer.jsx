import "./footer.css";
import finsweet from "../../../public/assets/images/finsweet.svg";

//Icons
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { ImTwitter } from "react-icons/im";
import { SiLogmein } from "react-icons/si";

export const Footer = () => {
  return (
      <div className="footer-container-div1">
        <div className="finsweet-footer">
          <img src={finsweet} alt="" />
          <p className="footer-text">
            We are always open to discuss your project and improve your online
            presence.
          </p>
          <div className="email-callUs">
            <div className="footer-email">
              <p className="EmailMeAt">Email me at</p>
              <a href="#">contact@website.com</a>
            </div>
            <div className="footer-callUs">
              <p>Call us</p>
              <a href="#">0927 6277 28525</a>
            </div>
          </div>
        </div>
        <div className="letsTalk">
          <h1 className="footer-title">Lets Talk!</h1>
          <p className="footer-div2-text">
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div className="icons">
            <FaFacebook />
            <RiInstagramFill />
            <ImTwitter />
            <SiLogmein />
          </div>
        </div>
      </div>
  );
};
