import React from 'react'
const items = [
  { quote: "Booked my honeymoon through Mundo Yatra. Perfect planning & on-time services. Highly recommended!", name: "Ravi Mehta, Mumbai" },
  { quote: "Got my Dubai visa and tickets done in 2 days! Thank you Mundo Yatra.", name: "Sana Ali, Delhi" },
]
export default function Testimonials(){
  return (
    <section style={{marginTop:30}}>
      <h2>What our travelers say</h2>
      <div className="grid cols-2" style={{marginTop:10}}>
        {items.map((t,i)=> (
          <div className="card" key={i}>
            <p style={{fontSize:18,margin:0}}>"{t.quote}"</p>
            <div style={{marginTop:8,color:'#475569'}}>— {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
