import React from 'react'
import { Trans, useTranslation } from 'react-i18next';

const InfoHeadline = () => {
    const { t } = useTranslation();

  return (
    <h2 className="content-headline">
        <Trans i18nKey="info-section.headline">
          Unsere Expertise auf<br />einen Blick
        </Trans>
        <span className='headline-end'>.</span>
    </h2>
  )
}

export default InfoHeadline