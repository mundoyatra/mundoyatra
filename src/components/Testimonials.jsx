import React from 'react'

const items = [
  { 
    quote: "Booked my honeymoon through Mundo Yatra. Perfect planning & on-time services. The Bali package exceeded all expectations!", 
    name: "Ravi Mehta", 
    location: "Mumbai",
    rating: 5,
    package: "Bali Honeymoon"
  },
  { 
    quote: "Got my Dubai visa and tickets done in 2 days! Professional service and great pricing. Highly recommended!", 
    name: "Sana Ali", 
    location: "Delhi",
    rating: 5,
    package: "Dubai Visa & Flights"
  },
  { 
    quote: "Shimla-Manali trip was amazing! Hotels were perfect, transport was comfortable, and the guide was very knowledgeable.", 
    name: "Priya Sharma", 
    location: "Bangalore",
    rating: 5,
    package: "Shimla-Manali Package"
  },
  { 
    quote: "Excellent customer service! They helped me plan a last-minute trip to Goa and everything was perfectly arranged.", 
    name: "Amit Patel", 
    location: "Chennai",
    rating: 5,
    package: "Goa Beach Package"
  }
]

export default function Testimonials(){
  const renderStars = (rating) => {
    return '⭐'.repeat(rating)
  }

  return (
    <section style={{marginTop: 60}}>
      <div className="text-center">
        <span className="kicker">Testimonials</span>
        <h2>What our travelers say</h2>
        <p>Real experiences from happy customers who chose Mundo Yatra for their adventures</p>
      </div>
      
      <div className="grid cols-2" style={{marginTop: 40}}>
        {items.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="testimonial-rating">
              {renderStars(t.rating)}
            </div>
            <p>"{t.quote}"</p>
            <div className="testimonial-author">
              <div className="author-info">
                <strong>{t.name}</strong>
                <span className="author-location">{t.location}</span>
              </div>
              <div className="package-tag">{t.package}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center" style={{marginTop: 40}}>
        <p className="text-muted">Join hundreds of satisfied travelers who trust Mundo Yatra</p>
        <div className="trust-indicators">
          <div className="trust-item">
            <span className="trust-icon">🔒</span>
            <span>100% Secure</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">💰</span>
            <span>Best Price Guarantee</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">📞</span>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
