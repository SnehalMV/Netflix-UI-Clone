import React, { useEffect, useState }from 'react'
import axios from '../../axios'
import './Banner.css'
import { imageURL, trending } from '../../constants'


function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(trending).then((response) => {
      setMovie(response?.data?.results[Math.floor(Math.random()*10+2)])
    })
  }, [])
  
  return (
  <div className='banner' 
  style={{backgroundImage:`url(${imageURL+movie?.backdrop_path})`}}>
      <div className='content'>
        <h1 className='banner-title'>{movie?.title}</h1>
        <div>
          <button className='button'>Play</button>
          <button className='button'>My List + </button>
        </div>
        <h2 className='description'>{movie?.overview}</h2>
      </div>
      <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner