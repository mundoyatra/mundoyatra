import React from 'react'
export default function About(){
  return (
    <section className="section">
      <h1>About Mundo Yatra</h1>
      <p>Mundo Yatra is a Delhi-based travel company passionate about turning your travel dreams into reality. With a dedicated team and years of industry experience, we provide tailored travel solutions, ensuring comfort, value, and unforgettable memories.</p>
      <div className="grid grid-2" style={{marginTop: '2rem'}}>
        <div className="package-card">
          <div className="content">
            <h3>Our Mission</h3>
            <p>To provide exceptional travel experiences that inspire, connect, and create lasting memories for our valued customers.</p>
          </div>
        </div>
        <div className="package-card">
          <div className="content">
            <h3>Why Choose Us</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{marginBottom: '8px'}}>✅ Personalized Itineraries</li>
              <li style={{marginBottom: '8px'}}>✅ Trusted Visa Experts</li>
              <li style={{marginBottom: '8px'}}>✅ Competitive Prices</li>
              <li style={{marginBottom: '8px'}}>✅ 24/7 Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
