import React, { useState } from 'react'

const galleryImages = [
  {
    src: '/assets/gallery-1.jpg',
    alt: 'Beautiful beach destination',
    title: 'Tropical Paradise',
    location: 'Maldives'
  },
  {
    src: '/assets/gallery-2.jpg',
    alt: 'Mountain landscape',
    title: 'Mountain Adventure',
    location: 'Swiss Alps'
  },
  {
    src: '/assets/gallery-3.jpg',
    alt: 'City skyline',
    title: 'Urban Exploration',
    location: 'New York'
  },
  {
    src: '/assets/gallery-4.jpg',
    alt: 'Desert landscape',
    title: 'Desert Safari',
    location: 'Dubai'
  },
  {
    src: '/assets/gallery-5.jpg',
    alt: 'Forest trail',
    title: 'Nature Walk',
    location: 'Amazon'
  },
  {
    src: '/assets/gallery-6.jpg',
    alt: 'Historic architecture',
    title: 'Cultural Heritage',
    location: 'Rome'
  },
  {
    src: '/assets/gallery-7.jpg',
    alt: 'Snowy mountains',
    title: 'Winter Wonderland',
    location: 'Switzerland'
  },
  {
    src: '/assets/gallery-8.jpg',
    alt: 'Island resort',
    title: 'Island Getaway',
    location: 'Bali'
  }
]

export default function Gallery(){
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in travel packages. Please contact me.`
    const whatsappUrl = `https://wa.me/919354262859?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section style={{marginTop: 60}}>
      <div className="text-center">
        <span className="kicker">Gallery</span>
        <h2>Explore Our Travel Destinations</h2>
        <p>Discover breathtaking places and unforgettable experiences through our curated collection</p>
      </div>
      
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => handleImageClick(image)}>
            <img src={image.src} alt={image.alt} />
            <div className="gallery-overlay">
              <div className="gallery-info">
                <h4>{image.title}</h4>
                <p>📍 {image.location}</p>
                <span className="view-more">Click to view details</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center" style={{marginTop: 40}}>
        <p className="text-muted">Ready to visit these amazing destinations?</p>
        <button className="btn btn-primary" onClick={handleWhatsApp}>
          🌍 Plan My Trip
        </button>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>📍 {selectedImage.location}</p>
              <p>Experience the magic of {selectedImage.title} with our exclusive travel packages!</p>
              <button className="btn btn-secondary" onClick={handleWhatsApp}>
                🚀 Book This Destination
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
