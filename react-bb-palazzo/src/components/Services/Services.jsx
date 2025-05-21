import React, { lazy, Suspense } from 'react';
import './Services.css';

/**
 * @component Services
 * @description Componente che visualizza la sezione dei servizi offerti dal B&B.
 * Presenta una griglia di card con icone e descrizioni dei vari servizi disponibili.
 * Ogni servizio è rappresentato con un'icona, un titolo e una breve descrizione.
 * @returns {JSX.Element} Sezione dei servizi con griglia responsive
 */
const Services = () => {
  /**
   * Array contenente i dati dei servizi offerti
   * @type {Array<{id: number, icon: string, title: string, description: string}>}
   */
  const services = [
    {
      id: 1,
      icon: 'wifi',
      title: 'Wi-Fi Gratuito',
      description: 'Connessione Wi-Fi ad alta velocità disponibile in tutte le aree del B&B.'
    },
    {
      id: 2,
      icon: 'coffee',
      title: 'Colazione Inclusa',
      description: 'Ogni mattina serviamo una ricca colazione con prodotti locali e fatti in casa.'
    },
    {
      id: 3,
      icon: 'concierge',
      title: 'Servizio Concierge',
      description: 'Il nostro staff è a disposizione per consigli, prenotazioni e assistenza durante il vostro soggiorno.'
    },
    {
      id: 4,
      icon: 'cleaning',
      title: 'Pulizia Giornaliera',
      description: 'Servizio di pulizia quotidiano per garantire il massimo comfort durante il vostro soggiorno.'
    },
    {
      id: 5,
      icon: 'transfer',
      title: 'Servizio Transfer',
      description: 'Su richiesta, organizziamo il trasferimento da/per aeroporto o stazione ferroviaria.'
    },
    {
      id: 6,
      icon: 'tour',
      title: 'Tour Guidati',
      description: 'Possiamo organizzare tour privati della città e delle attrazioni circostanti.'
    }
  ];

  return (
    <section id="servizi" className="services-section" aria-labelledby="servizi-titolo">
      <div className="container">
        <h2 id="servizi-titolo">I Nostri Servizi</h2>
        <div className="services-grid">
          {services.map(service => (
            <div 
              className="service-card" 
              key={service.id} 
              tabIndex="0" 
              role="article" 
              aria-labelledby={`service-title-${service.id}`}
              aria-describedby={`service-desc-${service.id}`}
            >
              <div className="service-icon" aria-hidden="true">
                <img 
                  src={`/images/icons/${service.icon}.svg`} 
                  alt="" 
                  loading="lazy" 
                />
              </div>
              <h3 id={`service-title-${service.id}`}>{service.title}</h3>
              <p id={`service-desc-${service.id}`}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;