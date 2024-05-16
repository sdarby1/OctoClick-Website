import React from 'react';
import { useTranslation } from 'react-i18next';
import germanyFlag from '../images/icons/de-icon.svg'; 
import ukFlag from '../images/icons/en-icon.svg'; 

function LanguageSwitch() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'de' ? 'en' : 'de';
    i18n.changeLanguage(newLang);
  };

  const flagImage = i18n.language === 'de' ? germanyFlag : ukFlag;
  const flagAlt = i18n.language === 'de' ? 'Deutsche Flagge' : 'Britische Flagge';

  return (
    <button onClick={toggleLanguage} style={{ border: 'none', background: 'none', padding:'0px', cursor:'pointer' }}>
      <img src={flagImage} alt={flagAlt} style={{ width: '30px', height: '20px' }} />
    </button>
  );
}

export default LanguageSwitch;