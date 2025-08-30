import React from 'react'
import Hero from '../components/Hero'
import PackageCard from '../components/PackageCard'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Gallery from '../components/Gallery'
import { featured } from '../data/packages'

export default function Home(){
  return (
    <>
      <Hero />
      <section className="section">
        <h2>Featured Tour Packages</h2>
        <div className="grid grid-2">
          {featured.map((p,i)=> <PackageCard key={i} {...p} />)}
        </div>
      </section>
      <Testimonials />
      <Gallery />
      <FAQ />
    </>
  )
}
