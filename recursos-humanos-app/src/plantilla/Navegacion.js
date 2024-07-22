import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navegacion() {
  return (
    <div className='container'>

<nav className="navbar navbar-expand-lg navbar-dark bg-info" ><div className="container-fluid">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
  </svg>
<a className="navbar-brand" href="/" name="body" >Personas</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Inicio</a>
        <Link className="nav-link active" to="/agregar">Agregar Empleado</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
