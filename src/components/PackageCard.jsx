import React from 'react'
export default function PackageCard({title, price, highlights=[], includes=[], cta1="View Details", cta2="Enquire Now", img="/assets/placeholder-1.jpg"}){
  return (
    <div className="card package-card">
      <img src={img} alt={title} />
      <h3 style={{margin:'10px 0 6px'}}>{title} – <span className="badge">{price}</span></h3>
      <div><strong>Highlights:</strong> {highlights.join(', ')}</div>
      <div><strong>Includes:</strong> {includes.join(', ')}</div>
      <div style={{display:'flex',gap:10,marginTop:12}}>
        <button className="btn">{cta1}</button>
        <button className="btn secondary">{cta2}</button>
      </div>
    </div>
  )
}
