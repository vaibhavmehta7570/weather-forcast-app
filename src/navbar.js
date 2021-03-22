import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/counter">Counter Task</Link>
      <Link to="/weatherapp">Weather App</Link>
    </nav>
  )
}

export default Navbar
