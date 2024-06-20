import { AboutUsSection } from "../../aboutUsSection/aboutUsSection";
import { FinsweetUsers } from "../../finsweetUsers/finsweetUsers";
import { Footer } from "../../footer/footer";
import { FooterPages } from "../../footerPages/footerPages";
import { Header } from "../../header/header";
import { MeetOurTeam } from "../../meetOurTeam/meetOurTeam";
import { OurMissionVision } from "../../ourMissionVision/ourMissionVision";
import { PerformanceBenefits } from "../../performanceBenefits/performanceBenefits";
import { TheProcessFollow } from "../../theProcessWeFollow/theProcessFollow";
import { WhoWeAre } from "../../whoWeAre/whoWeAre";
import "./aboutUs.css";

export const AboutUs = () => {
  return (
    <div>
      <Header />
      <AboutUsSection />
      <WhoWeAre />
      <div className="theProcessFollow-section">
        <h1 className="section-title">The process we follow</h1>
        <div className="card">
          <TheProcessFollow />
        </div>
      </div>
      <OurMissionVision />
      <div className="performance_benefits_section">
        <h2 className="benefints-title">The benefits of working with us</h2>
        <PerformanceBenefits />
      </div>
      <FinsweetUsers/>
      <div className="meetOurTeam-section">
        <h2 className="team-title">Meet our team</h2>
        <div className="meetOurTeam-card"><MeetOurTeam/></div>
      </div>
      <footer>
            <div className="footer-container">
              <Footer />
              <FooterPages />
            </div>
          </footer>
    </div>
  );
};
