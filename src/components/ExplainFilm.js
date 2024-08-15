import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ExplainFilm = () => {
  const { t } = useTranslation();

  return (
    <div className="explain-film-container">
      <h2 className="content-headline">
        <Trans i18nKey="explain-film.headline">
          Interaktive Werbefilme,<br />Was ist das überhaupt
        </Trans>
        <span className="headline-question-end">?</span>
      </h2>
      <p>
        <Trans
          i18nKey="explain-film.text"
          components={{
            strong: <strong />,
            br: <br />,
            Link: <Link to="/about" className="link-to-about" />,
          }}
        />
      </p>
    </div>
  );
};

export default ExplainFilm;
