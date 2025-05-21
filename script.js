document.addEventListener('DOMContentLoaded', function() {
    // Gestione menu mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Chiudi menu quando si clicca su un link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Cambia stile della navbar durante lo scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.padding = '1rem 5%';
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.padding = '1.5rem 5%';
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Gestione form di prenotazione
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validazione date
            const checkIn = document.getElementById('check-in').value;
            const checkOut = document.getElementById('check-out').value;
            
            if (new Date(checkIn) >= new Date(checkOut)) {
                alert('La data di partenza deve essere successiva alla data di arrivo.');
                return;
            }
            
            // Simulazione invio form
            const formData = new FormData(reservationForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // In un'applicazione reale, qui si invierebbe il form al server
            console.log('Dati prenotazione:', formObject);
            
            // Mostra messaggio di conferma
            alert('Grazie per la tua richiesta! Ti contatteremo presto per confermare la disponibilità.');
            reservationForm.reset();
        });
    }

    // Imposta data minima per check-in e check-out
    const today = new Date().toISOString().split('T')[0];
    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');
    
    if (checkInInput && checkOutInput) {
        checkInInput.min = today;
        
        // Aggiorna la data minima di check-out quando cambia il check-in
        checkInInput.addEventListener('change', function() {
            if (checkInInput.value) {
                const nextDay = new Date(checkInInput.value);
                nextDay.setDate(nextDay.getDate() + 1);
                checkOutInput.min = nextDay.toISOString().split('T')[0];
                
                // Se la data di check-out è precedente alla nuova data minima, aggiornala
                if (checkOutInput.value && new Date(checkOutInput.value) <= new Date(checkInInput.value)) {
                    checkOutInput.value = nextDay.toISOString().split('T')[0];
                }
            }
        });
    }

    // Animazione smooth scroll per i link interni
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Crea directory per le immagini
    function createImagePlaceholder() {
        // Questa funzione è solo per il mockup
        // In un sito reale, le immagini sarebbero file reali
        console.log('Le immagini verrebbero caricate qui in un sito reale');
    }
    
    createImagePlaceholder();
});