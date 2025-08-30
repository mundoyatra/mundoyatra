import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="kicker">✨ Your Journey Begins Here</span>
        <h1>Discover the World with Mundo Yatra</h1>
        <p>Experience customized travel packages, seamless bookings, and unforgettable adventures. From domestic getaways to international expeditions, we make your travel dreams come true.</p>
        
        <div className="hero-features">
          <div className="feature-item">
            <span className="feature-icon">✈️</span>
            <span>Flights & Hotels</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🏨</span>
            <span>Luxury Stays</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🛂</span>
            <span>Visa Services</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🚗</span>
            <span>Transportation</span>
          </div>
        </div>

        <div className="hero-buttons">
          <Link to="/packages" className="btn btn-primary">
            🌍 Plan My Trip
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            📞 Contact Us
          </Link>
          <Link to="/gallery" className="btn btn-outline">
            🎬 View Gallery
          </Link>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Travelers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Destinations</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">₹6,999</div>
            <div className="stat-label">Starting Price</div>
          </div>
        </div>
      </div>
    </section>
  )
}
