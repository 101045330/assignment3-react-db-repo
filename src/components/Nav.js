import React from 'react'

const Nav = () => {
  return (

    <nav className="container-fluid">
    <div className="row">
      <section className="col-12">
        <ul className="nav">
          <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
        </ul>
      </section>
    </div>
  </nav>
  )
}

export default Nav