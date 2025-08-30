import React from 'react'

export default function ContactForm(){
  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in travel packages. Please contact me.`
    const whatsappUrl = `https://wa.me/919354262859?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleCall = () => {
    window.open('tel:+919354262859', '_self')
  }

  const handleEmail = () => {
    window.open('mailto:mundoyatra@gmail.com', '_self')
  }

  return (
    <div className="contact-section">
      <div className="contact-info">
        <h3>📞 Get in Touch</h3>
        <p>Ready to start your journey? Contact us through any of these channels:</p>
        
        <div className="contact-methods">
          <button onClick={handleWhatsApp} className="contact-method whatsapp">
            <span className="icon">📱</span>
            <div>
              <strong>WhatsApp</strong>
              <span>+91 9354262859</span>
            </div>
          </button>
          
          <button onClick={handleCall} className="contact-method call">
            <span className="icon">📞</span>
            <div>
              <strong>Call Now</strong>
              <span>+91 935426262859</span>
            </div>
          </button>
          
          <button onClick={handleEmail} className="contact-method email">
            <span className="icon">📧</span>
            <div>
              <strong>Email</strong>
              <span>mundoyatra@gmail.com</span>
            </div>
          </button>
          
          <div className="contact-method address">
            <span className="icon">📍</span>
            <div>
              <strong>Office</strong>
              <span>CM Block, Sainik Nagar, Nawada, Delhi, 110059</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form card">
        <h3>📋 Quick Information</h3>
        <p>Here's what you need to know about our services:</p>
        
        <div className="info-grid">
          <div className="info-item">
            <span className="info-icon">✈️</span>
            <div>
              <strong>Flights & Hotels</strong>
              <span>Best rates guaranteed</span>
            </div>
          </div>
          
          <div className="info-item">
            <span className="info-icon">🏨</span>
            <div>
              <strong>Luxury Stays</strong>
              <span>4 & 5 star accommodations</span>
            </div>
          </div>
          
          <div className="info-item">
            <span className="info-icon">🛂</span>
            <div>
              <strong>Visa Services</strong>
              <span>Fast processing & support</span>
            </div>
          </div>
          
          <div className="info-item">
            <span className="info-icon">🚗</span>
            <div>
              <strong>Transportation</strong>
              <span>AC vehicles with drivers</span>
            </div>
          </div>
          
          <div className="info-item">
            <span className="info-icon">👨‍💼</span>
            <div>
              <strong>Professional Guides</strong>
              <span>English speaking experts</span>
            </div>
          </div>
          
          <div className="info-item">
            <span className="info-icon">💰</span>
            <div>
              <strong>Best Prices</strong>
              <span>Starting from ₹6,999</span>
            </div>
          </div>
        </div>
        
        <div className="cta-section">
          <p className="highlight">Ready to plan your dream vacation?</p>
          <button onClick={handleWhatsApp} className="btn">
            📱 Start Planning on WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}
