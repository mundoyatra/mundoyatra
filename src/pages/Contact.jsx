import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <section style={{marginTop:20}}>
      <h1>Contact Us</h1>
      <div className="grid cols-2" style={{marginTop:10}}>
        <ContactForm />
        <div className="card" style={{height:'fit-content'}}>
          <h3>Reach us</h3>
          <div>📍 CM Block, Sainik Nagar, Nawada, Delhi, 110059</div>
          <div>📞 <a href="tel:+919354262859">9354262859</a></div>
          <div>📧 <a href="mailto:mundoyatra@gmail.com">mundoyatra@gmail.com</a></div>
          <div style={{marginTop:12}}>
            <a className="btn" href="https://wa.me/919354262859" target="_blank" rel="noreferrer">WhatsApp Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}
