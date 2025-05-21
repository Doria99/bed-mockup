import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Marco Bianchi',
      location: 'Milano, Italia',
      rating: 5,
      text: 'Posizione perfetta nel centro di Firenze. La camera era spaziosa e pulita, la colazione deliziosa. Lo staff è stato molto disponibile nel consigliarci ristoranti e attrazioni. Torneremo sicuramente!',
      date: 'Settembre 2023'
    },
    {
      id: 2,
      name: 'Sophie Martin',
      location: 'Parigi, Francia',
      rating: 5,
      text: 'Un soggiorno meraviglioso in un palazzo storico restaurato con gusto. La nostra camera aveva una vista spettacolare sul Duomo. Ottimo rapporto qualità-prezzo per la posizione centrale.',
      date: 'Agosto 2023'
    },
    {
      id: 3,
      name: 'Antonio Rossi',
      location: 'Roma, Italia',
      rating: 4,
      text: 'Bellissimo B&B in posizione strategica. Camere confortevoli e ben arredate. Unico piccolo neo: il rumore dalla strada la mattina presto, ma è comprensibile data la posizione centrale.',
      date: 'Luglio 2023'
    }
  ];

  // Funzione per renderizzare le stelle della valutazione
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section id="recensioni" className="reviews-section">
      <div className="container">
        <h2>Recensioni dei Nostri Ospiti</h2>
        <div className="reviews-slider">
          {reviews.map(review => (
            <div className="review-card" key={review.id}>
              <div className="review-rating">
                {renderStars(review.rating)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <h4>{review.name}</h4>
                <p>{review.location}</p>
                <span className="review-date">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="review-cta">
          <p>Hai soggiornato da noi? Lascia una recensione!</p>
          <a href="#" className="btn-secondary">Scrivi Recensione</a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;