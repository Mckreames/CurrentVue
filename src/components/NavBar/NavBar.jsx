import React, { useState } from 'react';
import logo from '../../imgs/currentvue-favicon-color.png';

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
        <ul className="me-auto d-flex align-items-center">
          <li>
            <a className="navbar-brand offset-1" href="#top">
              <img src={logo} className="App-logo" alt="logo" />
              CurrentVue
            </a>
          </li>
          {/* <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu {...args}>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem text>Dropdown Item Text</DropdownItem>
              <DropdownItem disabled>Action (disabled)</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
          <li className="nav-item dropdown">
            <a className="nav-link ms-5 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Saved Locations
            </a>
            <ul className="dropdown-menu navbar-nav">
              <li><a className="dropdown-item" href="#">Knoxville</a></li>
              <li><a className="dropdown-item" href="#">Morristown</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Paris</a></li>
            </ul>
          </li>
        </ul>
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
