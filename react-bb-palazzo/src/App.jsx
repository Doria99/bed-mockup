import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import Rooms from './components/Rooms/Rooms'
import Services from './components/Services/Services'
import Location from './components/Location/Location'
import Reviews from './components/Reviews/Reviews'
import Booking from './components/Booking/Booking'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <Rooms />
        <Services />
        <Location />
        <Reviews />
        <Booking />
      </main>
      <Footer />
    </>
  )
}

export default App