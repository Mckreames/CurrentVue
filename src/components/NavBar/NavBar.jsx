import React, { useState } from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, UncontrolledDropdown, } from 'reactstrap';

import logo from '../../imgs/currentvue-favicon-color.png';

import "./NavBar.css";

export default function NavBar({ onSearch, shadowColor, updateFavorites, favorites, setFavorites }) {
  const [search, setSearch] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const handleSavedLocationClick = (location) => {
    console.log(favorites)
    onSearch(location);
    setDropdownOpen(false);
    // const newFavorite = [location, ""];
    // updateFavorites(newFavorite)
  };

  const handleDeleteFavorite = (index) => {
    const newFavorites = favorites.filter((_, i) => i !==index);
    updateFavorites(newFavorites);
    setFavorites(newFavorites);
  }

  const handleClearLocalStorage = () => {
    localStorage.clear();
    setFavorites([]);
  }

    // String input is passed to OnSearch out of NavBar into App for API call
  const searchPressed = (e) => {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <Navbar expand="lg" className="navbar-expand-xl bg-body-tertiary fixed-top" style={{ boxShadow: `5px 5px 8px ${shadowColor}` }}>
      <div className="d-flex flex-column flex-lg-row align-items-center container-fluid">
          <NavbarBrand className="offset-none offset-xl-1" href="#top">
            <img src={logo} className="App-logo" alt="logo" />
            CurrentVue&deg;
          </NavbarBrand>
      <NavbarToggler onClick={() => setCollapsed(!collapsed)} className="d-lg-none" />
        <Collapse isOpen={!collapsed} navbar>

          <UncontrolledDropdown nav inNavbar className="no-dot">
            <DropdownToggle caret className="" style={{ backgroundColor: 'white', color: 'black' }}>
              Saved Locations
            </DropdownToggle>
            <DropdownMenu>
              {favorites.map((favorites, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center">
                  <DropdownItem key={index}>
                    <span onClick={() => handleSavedLocationClick(favorites[0])}>
                      {favorites[0]}
                    </span>
                    <button className="btn btn-link favorite-btn" onClick={() => handleDeleteFavorite(index)}>X</button>
                  </DropdownItem>
                </div>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>

          <button className="btn btn-link w-50 clear" onClick={handleClearLocalStorage}>Clear-Favorites</button>

          <Nav className="d-flex flex-wrap flex-md-nowrap ms-auto me-5 align-items-center">
            <form className="input-group" onSubmit={searchPressed} role="search">
              <input className="form-control" type="text" placeholder="Enter A City..." aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
              <button className="btn btn-outline-success" type='submit'>Search</button>
            </form>
            <div className="d-none d-lg-block offset-1"></div>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}