import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

const NotFound= () => {
  const { t } = useTranslation();
  return (
    <div className="not-found-container">
        <h2 className="page-headline">{t('notfound.headline')}<span className="headline-end">.</span></h2>
        <p>{t('notfound.text')}</p>
        <Link className="link-to-film" to="/">{t('notfound.link')}</Link>
    </div>
  )
}

export default NotFound