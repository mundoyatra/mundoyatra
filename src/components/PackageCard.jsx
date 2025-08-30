import React, { useState } from 'react'

export default function PackageCard({title, price, highlights=[], includes=[], cta1="Plan My Trip", cta2="Enquire Now", img="/mundoyatra/assets/placeholder-1.jpg"}){
  const [isExpanded, setIsExpanded] = useState(false)

  const handlePlanTrip = () => {
    // Open WhatsApp for planning the trip
    const message = `Hi! I want to plan a trip to ${title}. Please help me with details and booking.`
    const whatsappUrl = `https://wa.me/919354262859?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEnquire = () => {
    // Open WhatsApp for enquiry
    const message = `Hi! I'm interested in ${title} package. Please contact me.`
    const whatsappUrl = `https://wa.me/919354262859?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="package-card">
      <img src={img} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <div className="price">{price}</div>
        
        <div className="features">
          <div><strong>🌟 Highlights:</strong> {highlights.join(', ')}</div>
          <div><strong>✅ Includes:</strong> {includes.join(', ')}</div>
        </div>

        {isExpanded && (
          <div className="additional-info">
            <div className="info-item">
              <span className="info-label">📅 Duration:</span>
              <span>5N/6D</span>
            </div>
            <div className="info-item">
              <span className="info-label">🏨 Hotels:</span>
              <span>4-star accommodation</span>
            </div>
            <div className="info-item">
              <span className="info-label">🍽️ Meals:</span>
              <span>Breakfast & Dinner</span>
            </div>
            <div className="info-item">
              <span className="info-label">🚗 Transport:</span>
              <span>AC Vehicle with driver</span>
            </div>
            <div className="info-item">
              <span className="info-label">👨‍💼 Guide:</span>
              <span>Professional English-speaking</span>
            </div>
          </div>
        )}

        <div className="actions">
          <button 
            onClick={handlePlanTrip} 
            className="btn btn-primary"
          >
            {cta1}
          </button>
          <button 
            onClick={handleEnquire} 
            className="btn btn-secondary"
          >
            {cta2}
          </button>
        </div>
      </div>
    </div>
  )
}
