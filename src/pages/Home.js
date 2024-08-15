import InfoSection from "../components/InfoSection"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";
import OurStrengths from "../components/OurStrengths";
import ExplainFilm from "../components/ExplainFilm";
import LatestProjectCarousel from "../components/LatestProjectCarousel";

const Home = () => {

  const { t } = useTranslation();

    return (
      <>
        {/* <div className="latest-film">
        <svg id="Ebene_1" className="cls-3" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.47 190.47">
            <defs>
              <style>

              </style>
            </defs>
            <circle cx="95.24" cy="95.24" r="94.74" transform="translate(-39.45 95.24) rotate(-45)"/>
          </svg>
          <h2 className="latest-film-headline">{t('new-film-container.title')}</h2>
          <Link to="/projects/hofgarten" className="latest-film-btn">{t('new-film-container.button')}</Link>
          <svg id="Ebene_1" className="cls-4" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.47 190.47">
            <defs>
              <style>

              </style>
            </defs>
            <circle cx="95.24" cy="95.24" r="94.74" transform="translate(-39.45 95.24) rotate(-45)"/>
          </svg>
        </div>
        <div className="custom-shape-divider-top-1723036677">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
            </svg>
            <img className="florapower-logo" src="./images/hofgarten/florapower-logo.png" alt="Flora Power Logo"/>
        </div> */}
        <LatestProjectCarousel />
        <div className="margin-container">
          <div className="boxed-container">
            <OurStrengths />
          </div>
        </div>
        <div className="margin-container">
          <div className="boxed-container">
            <ExplainFilm />
            <InfoSection />
          </div>
        </div>
      </>
    )
  }
  
  export default Home