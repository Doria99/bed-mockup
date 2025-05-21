import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <section id="posizione" className="location-section">
      <div className="container">
        <h2>Dove Siamo</h2>
        <div className="location-content">
          <div className="location-map">
            {/* Qui si potrebbe integrare una mappa di Google Maps o OpenStreetMap */}
            <img src="/images/map.jpg" alt="Mappa della posizione del B&B Palazzo Fiorentino" />
          </div>
          <div className="location-info">
            <h3>B&B Palazzo Fiorentino</h3>
            <p className="address">
              <i className="icon-location"></i> Via dei Calzaiuoli 15, 50122 Firenze, Italia
            </p>
            <p className="contact">
              <i className="icon-phone"></i> +39 055 123 4567
            </p>
            <p className="contact">
              <i className="icon-email"></i> info@palazzofiorentino.it
            </p>
            
            <div className="directions">
              <h4>Come Raggiungerci</h4>
              <div className="direction-item">
                <h5><i className="icon-train"></i> In Treno</h5>
                <p>Dalla stazione di Santa Maria Novella, 10 minuti a piedi o 5 minuti in taxi.</p>
              </div>
              <div className="direction-item">
                <h5><i className="icon-plane"></i> In Aereo</h5>
                <p>Dall'aeroporto di Firenze, 20 minuti in taxi o 30 minuti con la navetta.</p>
              </div>
              <div className="direction-item">
                <h5><i className="icon-car"></i> In Auto</h5>
                <p>Parcheggio convenzionato a 200 metri dal B&B (€25 al giorno).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;