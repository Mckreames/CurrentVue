import React from 'react';
import logo from '../../imgs/currentvue-favicon-color.png'

import "./NavBar.css";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div class="container-fluid d-inline">
        <a class="navbar-brand me-auto" href="#top">
          <img src={logo} className="App-logo" alt="logo" />
          CurrentVue
        </a>
        <form role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}
