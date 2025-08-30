import React from 'react'

export default function ContactForm(){
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h3>Get in Touch</h3>
        <p>Ready to start your journey? Contact us through any of these methods and we'll get back to you within 24 hours.</p>
        
        <div className="contact-methods">
          <a href="https://wa.me/919354262859" target="_blank" rel="noreferrer" className="contact-method whatsapp">
            <span className="icon">📱</span>
            <div>
              <strong>WhatsApp</strong>
              <span>Start planning on WhatsApp</span>
            </div>
          </a>
          
          <a href="tel:+919354262859" className="contact-method call">
            <span className="icon">📞</span>
            <div>
              <strong>Call Now</strong>
              <span>+91 9354262859</span>
            </div>
          </a>
          
          <a href="mailto:mundoyatra@gmail.com" className="contact-method email">
            <span className="icon">📧</span>
            <div>
              <strong>Email Us</strong>
              <span>mundoyatra@gmail.com</span>
            </div>
          </a>
        </div>
      </div>
      
      <div className="contact-form">
        <h3>Quick Information</h3>
        <p>Here's what we offer to make your travel experience exceptional:</p>
        
        <div className="info-grid">
          <div className="info-item">
            <span className="info-icon">✈️</span>
            <div>
              <strong>Flights & Hotels</strong>
              <span>Best deals worldwide</span>
            </div>
          </div>
          
          <div className="info-item">
            <span className="info-icon">🏨</span>
            <div>
              <strong>Luxury Stays</strong>
              <span>Premium accommodations</span>
            </div>
          </div>
          
          <div className="info-item">
            <span className="info-icon">🛂</span>
            <div>
              <strong>Visa Services</strong>
              <span>Expert assistance</span>
            </div>
          </div>
          
          <div className="info-item">
            <span className="info-icon">🚗</span>
            <div>
              <strong>Transportation</strong>
              <span>Reliable travel options</span>
            </div>
          </div>
        </div>
        
        <div className="cta-section">
          <div className="highlight">Ready to start your adventure?</div>
          <a href="https://wa.me/919354262859" target="_blank" rel="noreferrer" className="btn btn-primary">
            Start Planning on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
