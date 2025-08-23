import React from 'react'
const images = [
  '/assets/gallery-1.jpg','/assets/gallery-2.jpg','/assets/gallery-3.jpg','/assets/gallery-4.jpg',
  '/assets/gallery-5.jpg','/assets/gallery-6.jpg','/assets/gallery-7.jpg','/assets/gallery-8.jpg',
]
export default function Gallery(){
  return (
    <section style={{marginTop:20}}>
      <h2>Travel Gallery</h2>
      <div className="gallery" style={{marginTop:10}}>
        {images.map((src,i)=> <img key={i} src={src} alt={'Trip photo '+(i+1)} />)}
      </div>
    </section>
  )
}
