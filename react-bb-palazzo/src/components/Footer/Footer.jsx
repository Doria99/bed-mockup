import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" aria-label="Informazioni di contatto e collegamenti">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/images/logo.svg" alt="Logo B&B Palazzo Fiorentino" width="150" height="50" />
            <h3>B&B Palazzo Fiorentino</h3>
            <p>La tua casa nel cuore di Firenze</p>
          </div>
          <nav className="footer-links" aria-label="Collegamenti rapidi nel footer">
            <h4>Collegamenti Rapidi</h4>
            <ul>
              <li><a href="#camere" aria-label="Vai alla sezione camere">Camere</a></li>
              <li><a href="#servizi" aria-label="Vai alla sezione servizi">Servizi</a></li>
              <li><a href="#posizione" aria-label="Vai alla sezione dove siamo">Dove Siamo</a></li>
              <li><a href="#recensioni" aria-label="Vai alla sezione recensioni">Recensioni</a></li>
              <li><a href="#prenotazione" aria-label="Vai alla sezione prenota">Prenota</a></li>
            </ul>
          </nav>
          <div className="footer-contact">
            <h4>Contatti</h4>
            <address>
              <p><i className="icon-location" aria-hidden="true"></i> <span>Via dei Calzaiuoli 15, 50122 Firenze</span></p>
              <p>
                <i className="icon-phone" aria-hidden="true"></i> 
                <a href="tel:+390551234567" aria-label="Chiama il nostro numero">+39 055 123 4567</a>
              </p>
              <p>
                <i className="icon-email" aria-hidden="true"></i> 
                <a href="mailto:info@palazzofiorentino.it" aria-label="Invia un'email">info@palazzofiorentino.it</a>
              </p>
            </address>
            <div className="social-links" aria-label="I nostri social media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visita la nostra pagina Facebook">
                <i className="icon-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visita il nostro profilo Instagram">
                <i className="icon-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" aria-label="Leggi le nostre recensioni su TripAdvisor">
                <i className="icon-tripadvisor" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} B&B Palazzo Fiorentino. {t('footer.diritti')}</p>
          <nav className="footer-legal" aria-label="Pagine legali">
            <a href="/privacy" aria-label="Leggi la nostra Privacy Policy">{t('footer.privacy')}</a>
            <a href="/termini" aria-label="Leggi i nostri Termini e Condizioni">{t('footer.termini')}</a>
            <a href="/cookie" aria-label="Leggi la nostra Cookie Policy">Cookie Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;