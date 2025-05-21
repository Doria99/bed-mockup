import React, { useState, useEffect } from 'react';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    roomType: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Imposta la data minima di check-in a oggi
  const today = new Date().toISOString().split('T')[0];
  
  // Calcola la data minima di check-out in base alla data di check-in
  const getMinCheckoutDate = () => {
    if (!formData.checkIn) return today;
    
    const checkInDate = new Date(formData.checkIn);
    const nextDay = new Date(checkInDate);
    nextDay.setDate(checkInDate.getDate() + 1);
    return nextDay.toISOString().split('T')[0];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Rimuovi l'errore quando l'utente inizia a correggere il campo
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
    
    // Se cambia la data di check-in e la data di check-out è precedente, aggiorna la data di check-out
    if (name === 'checkIn' && formData.checkOut && new Date(value) >= new Date(formData.checkOut)) {
      const nextDay = new Date(value);
      nextDay.setDate(nextDay.getDate() + 1);
      setFormData({
        ...formData,
        checkIn: value,
        checkOut: nextDay.toISOString().split('T')[0]
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Validazione campi obbligatori
    if (!formData.checkIn) newErrors.checkIn = 'La data di arrivo è obbligatoria';
    if (!formData.checkOut) newErrors.checkOut = 'La data di partenza è obbligatoria';
    if (!formData.roomType) newErrors.roomType = 'Seleziona una tipologia di camera';
    if (!formData.name.trim()) newErrors.name = 'Il nome è obbligatorio';
    
    // Validazione email
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Inserisci un indirizzo email valido';
    }
    
    // Validazione telefono (opzionale ma se inserito deve essere valido)
    if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = 'Inserisci un numero di telefono valido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      // Qui si implementerebbe la logica per inviare i dati del form
      console.log('Form inviato:', formData);
      
      // Simulazione invio dati
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
        
        // Reset del form dopo 3 secondi
        setTimeout(() => {
          setFormData({
            checkIn: '',
            checkOut: '',
            adults: 2,
            children: 0,
            roomType: '',
            name: '',
            email: '',
            phone: '',
            specialRequests: ''
          });
          setFormSubmitted(false);
        }, 3000);
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };
  
  // Effetto per lo scroll automatico al messaggio di successo
  useEffect(() => {
    if (formSubmitted) {
      const successMessage = document.getElementById('success-message');
      if (successMessage) {
        successMessage.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [formSubmitted]);

  return (
    <section id="prenotazione" className="booking-section">
      <div className="container">
        <h2>Prenota il Tuo Soggiorno</h2>
        
        {formSubmitted && (
          <div id="success-message" className="success-message" role="alert" aria-live="assertive">
            <i className="icon-check" aria-hidden="true"></i>
            <p>Grazie per la tua prenotazione! Ti contatteremo presto per confermare.</p>
          </div>
        )}
        
        <div className="booking-container">
          <div className="booking-info">
            <h3>Informazioni di Prenotazione</h3>
            <p>
              Prenota direttamente con noi per ottenere le migliori tariffe garantite e servizi esclusivi.
            </p>
            <ul className="booking-benefits">
              <li>Miglior tariffa garantita</li>
              <li>Colazione inclusa</li>
              <li>Cancellazione gratuita fino a 48 ore prima</li>
              <li>Check-in prioritario</li>
              <li>Possibilità di late check-out (su disponibilità)</li>
            </ul>
            <div className="contact-info">
              <p>Per assistenza con la prenotazione:</p>
              <p><strong>Telefono:</strong> <a href="tel:+390551234567" aria-label="Chiama il nostro numero">+39 055 123 4567</a></p>
              <p><strong>Email:</strong> <a href="mailto:booking@palazzofiorentino.it" aria-label="Invia un'email per prenotazione">booking@palazzofiorentino.it</a></p>
            </div>
          </div>
          <div className="booking-form">
            <form onSubmit={handleSubmit} noValidate aria-label="Modulo di prenotazione">
              <div className="form-row">
                <div className={`form-group ${errors.checkIn ? 'has-error' : ''}`}>
                  <label htmlFor="checkIn">Data di Arrivo <span className="required" aria-hidden="true">*</span></label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    min={today}
                    required
                    aria-required="true"
                    aria-invalid={errors.checkIn ? 'true' : 'false'}
                    aria-describedby={errors.checkIn ? 'checkIn-error' : undefined}
                  />
                  {errors.checkIn && <div id="checkIn-error" className="error-message" role="alert">{errors.checkIn}</div>}
                </div>
                <div className={`form-group ${errors.checkOut ? 'has-error' : ''}`}>
                  <label htmlFor="checkOut">Data di Partenza <span className="required" aria-hidden="true">*</span></label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    min={getMinCheckoutDate()}
                    required
                    aria-required="true"
                    aria-invalid={errors.checkOut ? 'true' : 'false'}
                    aria-describedby={errors.checkOut ? 'checkOut-error' : undefined}
                  />
                  {errors.checkOut && <div id="checkOut-error" className="error-message" role="alert">{errors.checkOut}</div>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="adults">Adulti <span className="required" aria-hidden="true">*</span></label>
                  <select
                    id="adults"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  >
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="children">Bambini</label>
                  <select
                    id="children"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                  >
                    {[0, 1, 2, 3].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={`form-group ${errors.roomType ? 'has-error' : ''}`}>
                <label htmlFor="roomType">Tipo di Camera <span className="required" aria-hidden="true">*</span></label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={errors.roomType ? 'true' : 'false'}
                  aria-describedby={errors.roomType ? 'roomType-error' : undefined}
                >
                  <option value="">Seleziona una camera</option>
                  <option value="duomo">Camera Duomo</option>
                  <option value="ponte">Camera Ponte Vecchio</option>
                  <option value="suite">Suite Medici</option>
                </select>
                {errors.roomType && <div id="roomType-error" className="error-message" role="alert">{errors.roomType}</div>}
              </div>
              <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                <label htmlFor="name">Nome e Cognome <span className="required" aria-hidden="true">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <div id="name-error" className="error-message" role="alert">{errors.name}</div>}
              </div>
              <div className="form-row">
                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="email">Email <span className="required" aria-hidden="true">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <div id="email-error" className="error-message" role="alert">{errors.email}</div>}
                </div>
                <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                  <label htmlFor="phone">Telefono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+39 123 456 7890"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && <div id="phone-error" className="error-message" role="alert">{errors.phone}</div>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="specialRequests">Richieste Speciali</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="3"
                  aria-label="Inserisci eventuali richieste speciali"
                ></textarea>
              </div>
              <div className="form-footer">
                <p className="required-fields"><span className="required" aria-hidden="true">*</span> Campi obbligatori</p>
                <button 
                  type="submit" 
                  className="btn-primary btn-block" 
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Invio in corso...' : 'Prenota Ora'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;