import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

const OurStrengths = () => {
  const { t } = useTranslation();

  return (
    <div className="our-strengths-container">
      <h2 className="content-headline">
        <Trans i18nKey="our-strengths.headline">
          Interaktive Werbung,<br />Kreatives Storytelling,<br />Erfolgreiche Kampagne
        </Trans>
        <span className='headline-end'>.</span>
      </h2>
      <p>
        <Trans i18nKey="our-strengths.text">
          Wir entwickeln, gestalten und realisieren für Sie <strong>maßgeschneiderte</strong> Werbefilme, die Ihre Kunden <strong>fesseln</strong> und Ihr Unternehmen <strong>nachhaltig</strong> in Erinnerung bleiben lassen. Mit unserer Expertise in der Produktion interaktiver Inhalte und einem klaren Fokus auf <strong>zielgerichtetes Marketing</strong> unterstützen wir Sie dabei, Ihre Ziele zu erreichen und Ihr Publikum nachhaltig zu begeistern. Vertrauen Sie auf unsere Erfahrung, und schaffen Sie mit uns <strong>unvergessliche</strong> Erlebnisse, die Ihre Marke stärken.
        </Trans>
      </p>
    </div>
  );
};

export default OurStrengths;
