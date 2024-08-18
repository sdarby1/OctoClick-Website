import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Footer = () => {
  const {t} = useTranslation();
  return (
    <div className="margin-container">
       <div className="boxed-container">
          <div className="footer-content">
            <p>© 2024 OctoClick Productions | All rights reserved.</p>
            <div className="footer-links-cr">
              <Link className='footer-link'>{t('privacy-policy')}</Link>
              <Link to="impressum" className='footer-link'>{t('legal-notice')}</Link>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Footer