import "./viewOurProjects.css";
import viewBtn from "../../../public/assets/images/ViewMoreBtn.svg";
import viewOurimg1 from "../../../public/assets/images/view-our-img1.svg";
import viewOurimg2 from "../../../public/assets/images/view-our-img2.svg";
import viewProject from "../../../public/assets/images/viewProject.svg";
import viewOurimg3 from "../../../public/assets/images/view-our-img3.svg";
import viewOurimg4 from "../../../public/assets/images/view-our-img4.svg";
import viewOurimg5 from "../../../public/assets/images/view-our-img5.svg";
import viewPortfolio from "../../../public/assets/images/view-portfolio.svg";

export const ViewOurProjects = () => {
  return (
    <div>
      <div className="viewOurProject_section">
        <div className="view-our-project-title-btn">
          <h2 className="view-our-project-title">View our projects</h2>
          <a href="#">
            <img src={viewBtn} alt="" />
          </a>
        </div>
        <div className="view-our-project-imgs">
          <div className="view-our-img-left">
            <img className="view-our-img1" src={viewOurimg1} alt="" />
            <img className="view-our-img2" src={viewOurimg2} alt="" />
            <div className="view-our-title-text-btn">
              <h2 className="view-our-title">
                Workhub office Webflow Webflow Design
              </h2>
              <p className="view-our-text">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam{" "}
              </p>
              <a href="#">
                <img src={viewProject} alt="" />
              </a>
            </div>
          </div>
          <div className="view-our-img-right">
            <div className="view-our-img-portfolio">
              <img className="viewOurimg3" src={viewOurimg3} alt="" />
              <img className="viewOurimg4" src={viewOurimg4} alt="" />
              <div className="view-our-title-btn">
                <h2 className="view-title">Unisaas Website Design</h2>
                <a href="#">
                  <img src={viewPortfolio} alt="" />
                </a>
              </div>
            </div>
            <img className="viewOurimg5" src={viewOurimg5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
