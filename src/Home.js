import React from 'react'
import background from './assets/home.svg'
import './Home.css'

const Home = () => {
  return (
    <div>
      <img className='home__background' src={background} alt='home' />
      <div className='welcome-text'>Welcome !!</div>
    </div>
  )
}

export default Home
