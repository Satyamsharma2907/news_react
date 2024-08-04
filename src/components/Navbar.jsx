import React from 'react'
import Home from '../pages/Home'
import { Link } from 'react-router-dom'
import './Navbar.css'
const navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand text-white" to="/">
        <h5>  News Hub</h5>
      
        </Link>
    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/general">General</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/business">Business</Link>

        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/entertainment">Entertainment</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/health">Health</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/science">Science</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/sports">Sports</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/technology">Technology</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar