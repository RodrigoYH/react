import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">UNIVERSIDAD MODELO</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="#">Home</Link>
            </div>
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/nosotros">Nosotros</Link>
            </div>
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/mision">Misión</Link>
            </div>
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/vision">Visión</Link>
            </div>
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/contacto">Contacto</Link>
            </div>
          </div>
        </div>
    </nav>
)