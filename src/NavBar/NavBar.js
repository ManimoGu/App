import React from 'react'
import './NavBar.css';

const NavBar = ({name}) => {

  console.log(name)
    return (
        <div>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-warning" href="#">
            Anime-Site
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>

            <form className={`d-flex align-items-center w-75 ${name ==='App' ? 'justify-content-end':'justify-content-evenly'}`}>
              <div className ={`input-group w-75 ${name ==='App' ? 'd-none': ''}`}>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
              </div>
              <button class="btn btn-warning" type="submit">
                Sign-in
              </button>
            </form>
          </div>
        </div>
      </nav>
            
        </div>
    )
}

export default NavBar
