import React, { useState } from 'react'
export default function ContactForm(){
  const [status, setStatus] = useState(null)
  const onSubmit = (e) => {
    e.preventDefault()
    setStatus("Thanks! This is a static demo. We'll reach out shortly.")
  }
  return (
    <form onSubmit={onSubmit} className="card" style={{maxWidth:700}}>
      <h3>Request a Callback</h3>
      <div style={{display:'grid',gap:12}}>
        <input className="input" placeholder="Full Name" required />
        <input className="input" type="tel" placeholder="Phone Number" required />
        <input className="input" type="email" placeholder="Email (optional)" />
        <textarea rows="4" placeholder="Tell us about your trip (dates, destination, budget)"></textarea>
        <button className="btn" type="submit">Submit</button>
        {status && <div className="card" style={{background:'#ecfeff'}}>{status}</div>}
      </div>
    </form>
  )
}
