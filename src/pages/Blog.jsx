import React from 'react'
const posts = [
  {title:'Top 5 Honeymoon Destinations Under ₹1 Lakh', excerpt:'Handpicked romantic getaways that fit your budget.'},
  {title:'Visa-Free Countries for Indians in 2025', excerpt:'Explore without the paperwork—updated list for 2025.'},
  {title:'Packing Checklist for International Trips', excerpt:'Never forget the essentials on your next adventure.'},
]
export default function Blog(){
  return (
    <section style={{marginTop:20}}>
      <h1>Travel Blog</h1>
      <div className="grid cols-3" style={{marginTop:10}}>
        {posts.map((p,i)=> (
          <div className="card" key={i}>
            <div className="kicker">{p.title}</div>
            <p>{p.excerpt}</p>
            <button className="btn">Read</button>
          </div>
        ))}
      </div>
    </section>
  )
}
