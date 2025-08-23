import React from 'react'
const faqs = [
  {q:'Do you help with Schengen visa?', a:'Yes, we assist with full documentation, appointment booking & travel insurance.'},
  {q:'How can I make a booking?', a:'Fill out our “Plan My Trip” form or call us directly at 9354262859.'}
]
export default function FAQ(){
  return (
    <section style={{marginTop:30}}>
      <h2>FAQs</h2>
      <div className="grid cols-2" style={{marginTop:10}}>
        {faqs.map((f,i)=> (
          <div className="card" key={i}>
            <div style={{fontWeight:700}}>{f.q}</div>
            <div style={{color:'#475569'}}>{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
