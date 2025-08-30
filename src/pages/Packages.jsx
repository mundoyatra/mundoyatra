import React from 'react'
import PackageCard from '../components/PackageCard'
import { featured } from '../data/packages'
export default function Packages(){
  return (
    <section className="section">
      <h1>All Packages</h1>
      <p className="kicker">More destinations launching soon</p>
      <div className="grid grid-2">
        {featured.map((p,i)=> <PackageCard key={i} {...p} />)}
      </div>
    </section>
  )
}
