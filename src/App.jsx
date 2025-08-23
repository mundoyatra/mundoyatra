import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function App(){
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="brand">
              <img src="/assets/logo.svg" width="28" height="28" alt="Mundo Yatra logo" />
              <span>Mundo Yatra</span>
            </div>
            <div className="navlinks">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/packages">Packages</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/faqs">FAQs</NavLink>
              <NavLink to="/contact"><button className="btn">WhatsApp Us</button></NavLink>
            </div>
          </nav>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <div className="container">
          <div style={{display:'flex',gap:20,flexWrap:'wrap',justifyContent:'space-between',alignItems:'center'}}>
            <div>&copy; {new Date().getFullYear()} Mundo Yatra • CM Block, Sainik Nagar, Nawada, Delhi, 110059</div>
            <div style={{display:'flex',gap:12}}>
              <a href="tel:+919354262859">9354262859</a>
              <a href="mailto:mundoyatra@gmail.com">mundoyatra@gmail.com</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/refunds">Refunds</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
