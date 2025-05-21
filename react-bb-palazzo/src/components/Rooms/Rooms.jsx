import React from 'react';
import './Rooms.css';

/**
 * @component Rooms
 * @description Componente che visualizza la sezione delle camere disponibili nel B&B.
 * Mostra una griglia di camere con immagini, descrizioni e caratteristiche.
 * Ogni camera è rappresentata come una card con informazioni dettagliate.
 * @returns {JSX.Element} Sezione delle camere con griglia responsive
 */
const Rooms = () => {
  /**
   * Array contenente i dati delle camere disponibili
   * @type {Array<{id: number, name: string, description: string, image: string, features: Array<string>}>}
   */
  const rooms = [
    {
      id: 1,
      name: 'Camera Duomo',
      description: 'Elegante camera matrimoniale con vista sul Duomo di Firenze. Dotata di bagno privato, aria condizionata e Wi-Fi gratuito.',
      image: '/images/room-duomo.jpg',
      features: ['Letto matrimoniale', 'Vista Duomo', 'Bagno privato', 'Aria condizionata', 'Wi-Fi gratuito']
    },
    {
      id: 2,
      name: 'Camera Ponte Vecchio',
      description: 'Spaziosa camera con letto king-size e vista sul fiume Arno. Arredata in stile classico fiorentino con elementi moderni.',
      image: '/images/room-ponte.jpg',
      features: ['Letto king-size', 'Vista fiume', 'Bagno con doccia', 'Smart TV', 'Mini frigo']
    },
    {
      id: 3,
      name: 'Suite Medici',
      description: 'La nostra suite più lussuosa con salottino privato e balcone. Perfetta per soggiorni speciali e lunghe permanenze.',
      image: '/images/room-suite.jpg',
      features: ['Letto matrimoniale', 'Salottino', 'Balcone privato', 'Vasca idromassaggio', 'Colazione in camera']
    }
  ];

  return (
    <section id="camere" className="rooms-section" aria-labelledby="camere-titolo">
      <div className="container">
        <h2 id="camere-titolo">Le Nostre Camere</h2>
        <div className="rooms-grid">
          {rooms.map(room => (
            <article className="room-card" key={room.id}>
              <div className="room-image">
                <img 
                  src={room.image} 
                  alt={`Camera ${room.name}`} 
                  loading="lazy" 
                  width="800" 
                  height="500" 
                />
              </div>
              <div className="room-info">
                <h3 id={`room-title-${room.id}`}>{room.name}</h3>
                <p id={`room-desc-${room.id}`}>{room.description}</p>
                <ul 
                  className="room-features" 
                  aria-label="Caratteristiche della camera"
                >
                  {room.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <a 
                  href="#prenotazione" 
                  className="btn-secondary" 
                  aria-label={`Prenota la camera ${room.name}`}
                >
                  Prenota Ora
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;