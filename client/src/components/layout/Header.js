import React from "react";

function Header() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-primary bg-primary fixed-top"
        id="head"
      >
        <div class="container">
          <a class="navbar-brand text-light" href="/">
            AfroMeme
          </a>
          <button
            class="navbar-toggler text-light"
            type="button"
            id="colapseBtn"
            data-toggle="collapse"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon text-light">&#9776;</span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link text-light" href="/users">
                  USERS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="/upload">
                  UPLOAD
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="/me/logout">
                  LOG OUT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="/me">
                  PROFILE
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="/register">
                  REGISTER
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="/login">
                  LOGIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
