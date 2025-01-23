import React from 'react'
import"./Hero.scss"

const Hero = () => {
  return (
    <div className='startHero'>
        <div className="overlay">   </div>

      <div className='d-flex align-items-center justify-content-center flex-column heroText' style={{
        height:"100%",
        color:"white"
      }}>
      <h1 style={{fontSize:"60px"}} class="mb-2">We serve Fresh Vegestables &amp; Fruits</h1>
      <p class="subheading mb-4">We deliver organic vegetables &amp; fruits</p>
      <button className='btn btn-success'>View Details</button>
      </div>
    </div>
  )
}

export default Hero

