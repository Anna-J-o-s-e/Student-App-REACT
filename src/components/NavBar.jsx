import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">STUDENT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Add Entry</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search">Search Entry</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/delete">Delete entry</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/view">View Details</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar