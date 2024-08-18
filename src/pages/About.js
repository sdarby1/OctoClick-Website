import React from 'react'
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation();

  return (
    <div className="margin-container">
      <div className="boxed-container">
        <div className='about-container'>
          <h2 className='page-headline'>{t('about-us.headline')}<span className="headline-end">.</span></h2>
          <p>{t('about-us.text')}</p>
        </div>
      </div>
    </div>
  )
}

export default About