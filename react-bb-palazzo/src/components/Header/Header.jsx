import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header role="banner">
      <nav className={scrolled ? 'scrolled' : ''} aria-label="Navigazione principale">
        <div className="logo">
          <img src="/images/logo.svg" alt="Logo B&B Palazzo Fiorentino" width="40" height="40" />
          <span>B&B Palazzo Fiorentino</span>
        </div>
        <div 
          className={`nav-links ${isMenuOpen ? 'active' : ''}`}
          id="main-menu"
          role="navigation"
          aria-expanded={isMenuOpen}
          aria-label="Menu principale"
        >
          <a href="#camere" onClick={closeMenu} aria-label="Vai alla sezione camere">{t('header.camere')}</a>
          <a href="#servizi" onClick={closeMenu} aria-label="Vai alla sezione servizi">{t('header.servizi')}</a>
          <a href="#posizione" onClick={closeMenu} aria-label="Vai alla sezione dove siamo">{t('header.doveSiamo')}</a>
          <a href="#prenotazione" onClick={closeMenu} aria-label="Vai alla sezione prenota">{t('header.prenota')}</a>
          <div className="language-selector" role="region" aria-label="Selettore lingua">
            <button 
              onClick={() => changeLanguage('it')} 
              className={i18n.language === 'it' ? 'active' : ''} 
              aria-current={i18n.language === 'it' ? 'page' : undefined} 
              lang="it"
            >
              {t('header.lingua.it')}
            </button>
            <button 
              onClick={() => changeLanguage('en')} 
              className={i18n.language === 'en' ? 'active' : ''} 
              aria-current={i18n.language === 'en' ? 'page' : undefined} 
              lang="en"
            >
              {t('header.lingua.en')}
            </button>
          </div>
        </div>
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
        >
          <span className="sr-only">{isMenuOpen ? 'Chiudi menu' : 'Apri menu'}</span>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </nav>
      <div className="hero" role="region" aria-label="Banner principale">
        <div className="hero-content">
          <h1>B&B Palazzo Fiorentino</h1>
          <h2>Ospitalità nel cuore di Firenze</h2>
          <a href="#prenotazione" className="btn-primary" aria-label="Vai alla sezione prenota ora">Prenota Ora</a>
        </div>
      </div>
    </header>
  );
};

export default Header;