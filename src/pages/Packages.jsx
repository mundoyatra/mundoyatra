import React from 'react'
import PackageCard from '../components/PackageCard'
import { featured } from '../data/packages'
export default function Packages(){
  return (
    <section style={{marginTop:20}}>
      <h1>All Packages</h1>
      <p className="kicker">More destinations launching soon</p>
      <div className="grid cols-2" style={{marginTop:10}}>
        {featured.map((p,i)=> <PackageCard key={i} {...p} />)}
      </div>
    </section>
  )
}
