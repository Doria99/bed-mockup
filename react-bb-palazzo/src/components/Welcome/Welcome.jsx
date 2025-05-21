import React from 'react';
import { useTranslation } from 'react-i18next';
import './Welcome.css';

/**
 * @component Welcome
 * @description Componente che visualizza la sezione di benvenuto del B&B.
 * Presenta un'introduzione alla struttura con testo descrittivo e un'immagine rappresentativa.
 * La sezione è progettata per dare il primo impatto visivo e informativo agli ospiti.
 * @returns {JSX.Element} Sezione di benvenuto con layout responsive
 */
const Welcome = () => {
  const { t } = useTranslation();
  
  return (
    <section id="benvenuto" className="welcome-section">
      <div className="container">
        <h2>{t('welcome.titolo')}</h2>
        <div className="welcome-content">
          <div className="welcome-text">
            <p>
              {t('welcome.paragrafo1')}
            </p>
            <p>
              {t('welcome.paragrafo2')}
            </p>
            <p>
              {t('welcome.paragrafo3')}
            </p>
          </div>
          <div className="welcome-image">
            <img src="/images/palazzo-entrance.jpg" alt={t('welcome.altImmagine')} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;