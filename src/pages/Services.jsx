import React from 'react'

const services = [
  {title:'Holiday Packages', desc:'Domestic & International tailored tours.'},
  {title:'Flight Tickets', desc:'Best deals on one-way & round-trip flights.'},
  {title:'Visa Assistance', desc:'Tourist, Business & Transit visas made easy.'},
  {title:'Hotel Booking', desc:'Budget to luxury hotels worldwide.'},
  {title:'Attestation Services', desc:'MEA, HRD, and Embassy attestation support.'},
  {title:'Cab Services', desc:'Local, airport transfers & intercity rides.'},
]

export default function Services(){
  return (
    <section className="section">
      <h1>Services We Offer</h1>
      <div className="grid grid-3">
        {services.map((s,i)=> (
          <div className="package-card" key={i}>
            <div className="content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
