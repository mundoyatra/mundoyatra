import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="hero">
      <div className="container">
        <p className="kicker">Explore the World with Mundo Yatra</p>
        <h1>Customized Travel Packages, Hassle-Free Bookings & Unforgettable Experiences</h1>
        <p>Flights • Hotels • Visa • Cabs • Packages — Starting from ₹6,999 | Easy EMI Available</p>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <Link to="/contact" className="btn">Plan My Trip</Link>
          <Link to="/contact" className="btn secondary">WhatsApp Us</Link>
        </div>
      </div>
    </section>
  )
}
