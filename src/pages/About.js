import React from 'react'
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation();

  return (
    <div className="margin-container">
      <div className="boxed-container">


        <h2 className='page-headline'>{t('about-us.headline')}<span className="headline-end">.</span></h2>

        
      </div>
    </div>
  )
}

export default About