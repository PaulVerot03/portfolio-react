import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-switch">
      <span className="flag-icon left">🇬🇧</span>
      <div className="switch-container" onClick={toggleLanguage}>
        <div className={`switch-track ${language === 'fr' ? 'active' : ''}`}>
          <div className={`switch-thumb ${language === 'fr' ? 'active' : ''}`}></div>
        </div>
      </div>
      <span className="flag-icon right">🇫🇷</span>
    </div>
  );
};