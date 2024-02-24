import React from 'react';
import logo from '../../imgs/currentvue-favicon-color.png'

import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand offset-1 me-auto" href="#top">
          <img src={logo} className="App-logo" alt="logo" />
          CurrentVue
        </a>
        <form role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}
