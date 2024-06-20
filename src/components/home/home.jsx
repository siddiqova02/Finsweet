//Style
import "./home.css";

import cardImg1 from "../../../public/assets/images/cardImg1.svg";
import cardImg2 from "../../../public/assets/images/cardImg2.svg";
import cardImg3 from "../../../public/assets/images/cardImg3.svg";

import { BuildingSteller } from "../buildingStellar/buildingSteller";
import { Header } from "../header/header";
import { HowWeWork } from "../howWeWork/howWeWork";
import { HowWeWorkCard } from "../howWeWorkCard/howWeWorkCard";
import { ViewOurProjects } from "../viewOurProjects/viewOurProjects";
import { Features } from "../fearutes/features";
import { ClientsAbout } from "../clientsAbout/clientsAbout";
import { FrequentlyAskedQuestions } from "../frequentlyAskedQuestions/frequentlyAskedQuestions";
import { Registration } from "../registration/registration";
import { OurBlog } from "../ourBlog/ourBlog";
import { Footer } from "../footer/footer";
import { FooterPages } from "../footerPages/footerPages";

export const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="main-container">
          <BuildingSteller />
          <div className="how_we_work_section">
            <HowWeWork />
            <div className="cards">
              <HowWeWorkCard />
            </div>
          </div>
          <ViewOurProjects />
          <Features />
          <ClientsAbout />
          <FrequentlyAskedQuestions />
          <Registration />
          <div className="ourBlog-section">
            <div className="ourBlog-section-div">
              <h1 className="ourBlog-text">Our blog</h1>
              <div className="ourBlog-cards">
                <OurBlog images={cardImg1} />
                <OurBlog images={cardImg2} />
                <OurBlog images={cardImg3} />
              </div>
            </div>
          </div>
          <footer>
            <div className="footer-container">
              <Footer />
              <FooterPages />
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};
