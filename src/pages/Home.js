import InfoSection from "../components/InfoSection"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

const Home = () => {

  const { t } = useTranslation();

    return (
      <>
        <div className="latest-film">
        <svg id="Ebene_1" className="cls-3" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.47 190.47">
            <defs>
              <style>

              </style>
            </defs>
            <circle cx="95.24" cy="95.24" r="94.74" transform="translate(-39.45 95.24) rotate(-45)"/>
          </svg>
          <h2 className="latest-film-headline">{t('new-film-container.title')}</h2>
          <Link className="latest-film-btn">{t('new-film-container.button')}</Link>
          <svg id="Ebene_1" className="cls-4" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.47 190.47">
            <defs>
              <style>

              </style>
            </defs>
            <circle cx="95.24" cy="95.24" r="94.74" transform="translate(-39.45 95.24) rotate(-45)"/>
          </svg>
        </div>
        <div className="margin-container">
          <div className="boxed-container">
            <h1>Unsere Fachbereiche</h1>
            <InfoSection />
          </div>
        </div>
      </>
    )
  }
  
  export default Home