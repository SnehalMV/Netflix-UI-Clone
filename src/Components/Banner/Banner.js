import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='banner-title'>Money Heist</h1>
        <div>
          <button className='button'>Play</button>
          <button className='button'>My List + </button>
        </div>
        <h2 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text  </h2>
      </div>
      <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner