import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <section className="section">
      <h1>Contact Us</h1>
      <div className="grid grid-2">
        <ContactForm />
        <div className="package-card" style={{height:'fit-content'}}>
          <div className="content">
            <h3>Reach us</h3>
            <div style={{marginBottom: '12px'}}>📍 CM Block, Sainik Nagar, Nawada, Delhi, 110059</div>
            <div style={{marginBottom: '12px'}}>📞 <a href="tel:+919354262859">+91 9354262859</a></div>
            <div style={{marginBottom: '12px'}}>📧 <a href="mailto:mundoyatra@gmail.com">mundoyatra@gmail.com</a></div>
            <div style={{marginTop: '16px'}}>
              <a className="btn btn-primary" href="https://wa.me/919354262859" target="_blank" rel="noreferrer">WhatsApp Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
