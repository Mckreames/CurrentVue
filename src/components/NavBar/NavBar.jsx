import React, { useState } from 'react';
import logo from '../../imgs/currentvue-favicon-color.png'

import "./NavBar.css";

export default function NavBar({ onSearch }) {
  const [search, setSearch] = useState('');

  const searchPressed = (e) => {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand offset-1 me-auto" href="#top">
          <img src={logo} className="App-logo" alt="logo" />
          CurrentVue
        </a>
        <form className="input-group w-25 me-5" onSubmit={searchPressed} role="search">
          <input className="form-control" type="text" placeholder="Enter A City..." aria-label="Search" onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-outline-success" type='submit' onClick={searchPressed}>Search</button>
        </form>
        <div className="offset-1"></div>
      </div>
    </nav>
  )
}
