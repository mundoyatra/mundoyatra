import React from 'react'
const posts = [
  {title:'Top 5 Honeymoon Destinations Under ₹1 Lakh', excerpt:'Handpicked romantic getaways that fit your budget.'},
  {title:'Visa-Free Countries for Indians in 2025', excerpt:'Explore without the paperwork—updated list for 2025.'},
  {title:'Packing Checklist for International Trips', excerpt:'Never forget the essentials on your next adventure.'},
]
export default function Blog(){
  return (
    <section className="section">
      <h1>Travel Blog</h1>
      <div className="grid grid-3">
        {posts.map((p,i)=> (
          <div className="package-card" key={i}>
            <div className="content">
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
