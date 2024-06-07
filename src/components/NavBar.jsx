import React from 'react'

const NavBar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">STUDENT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Add Entry</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Search Entry</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Delete entry</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">View Details</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar