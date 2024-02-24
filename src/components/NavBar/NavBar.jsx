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
        <form className="input-group w-25 me-5" role="search">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className="offset-1"></div>
      </div>
    </nav>
  )
}
