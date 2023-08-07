import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar(): React.ReactElement {
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <span>Logo</span>
      </div>
      <Link className='links' to="/">Home</Link>
      <Link className='links' to="/carts">Carts</Link>
      <Link className='links' to="/signin">Sign In</Link>
    </nav>
  )
}
