import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

const Projects = () => {

  const { t } = useTranslation();
  return (
    <div className="margin-container">
       <div className="boxed-container">
          <div>
          <h2 className='page-headline'>{t('projects.headline')}<span className="headline-end">.</span></h2>
              <div class="project-container">
              <Link to="/projects/hofgarten" className="link-to-project">
                <div className="project">
                  <img src="../images/thumbnail/thumbnail.png" className="project-thumbnail"></img>
                  <h4>Hofgarten - Flora Power</h4>
                </div>
              </Link>  
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects