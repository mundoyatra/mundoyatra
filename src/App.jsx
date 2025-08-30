import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function App(){
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src="/assets/logo.svg" width="28" height="28" alt="Mundo Yatra logo" />
            <span>Mundo Yatra</span>
          </div>
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/packages">Packages</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/faqs">FAQs</NavLink></li>
            <li><a href="https://wa.me/919354262859" target="_blank" rel="noreferrer" className="btn btn-primary">WhatsApp Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Mundo Yatra</h3>
            <p>Your trusted travel partner for unforgettable journeys across India and beyond.</p>
            <p>CM Block, Sainik Nagar, Nawada, Delhi, 110059</p>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <a href="tel:+919354262859">+91 9354262859</a>
            <a href="mailto:mundoyatra@gmail.com">mundoyatra@gmail.com</a>
            <a href="https://wa.me/919354262859">WhatsApp</a>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="/packages">Travel Packages</a>
            <a href="/services">Our Services</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/refunds">Refund Policy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mundo Yatra. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
