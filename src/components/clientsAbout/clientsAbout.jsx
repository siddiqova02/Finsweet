import "./clientsAbout.css";
import contact from "../../../public/assets/images/Jenny Wilson.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const ClientsAbout = () => {
  return (
    <div>
      <div className="clientsAbout-section">
        <div className="section-left">
          <h3 className="section-left-title">What our clients say about us</h3>
          <p className="section-left-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <div className="section-right">
          <p className="section-right-text">
            "The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus."
          </p>
          <div className="section-contact">
            <div className="contact">
              <div className="img-firstname">
                  <img className="contact-img" src={contact} alt="" />
                  <div>
                    <p className="firsName">Jenny Wilson</p>
                    <p className="vice-president">Vice President</p>
                  </div>
              </div>
              <div className="icons">
                <div className="icons-1">
                  <IoIosArrowBack />
                </div>
                <div className="icons-2">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
