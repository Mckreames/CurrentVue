import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import logo from '../../imgs/currentvue-favicon-color.png';

import "./NavBar.css";

export default function NavBar({ onSearch, shadowColor, updateFavorites, favorites, setFavorites }) {
  const [search, setSearch] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSavedLocationClick = (location) => {
    console.log(favorites)
    onSearch(location);
    setDropdownOpen(false);
    // const newFavorite = [location, ""];
    // updateFavorites(newFavorite)
  };

  const handleDeleteFavorite = (index) => {
    debugger
    const newFavorites = favorites.filter((_, i) => i !==index);
    updateFavorites(newFavorites);
    console.log(favorites)
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
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{ boxShadow: `5px 5px 8px ${shadowColor}` }}>
      <div className="container-fluid">
        <ul className="me-auto d-flex align-items-center">
          <li>
            <a className="navbar-brand offset-1" href="#top">
              <img src={logo} className="App-logo" alt="logo" />
              CurrentVue
            </a>
          </li>
          <li className="nav-item offset-1 dropdown">
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle caret style={{ backgroundColor: 'white', color: 'black' }}>
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
            </Dropdown>
          </li>
          <li>
          <button className="btn btn-link clear" onClick={handleClearLocalStorage}>Clear-Favorites</button>
          </li>
        </ul>
          <form className="input-group w-25 me-5" onSubmit={searchPressed} role="search">
            <input className="form-control" type="text" placeholder="Enter A City..." aria-label="Search" onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-success" type='submit'>Search</button>
          </form>
          <div className="offset-1"></div>
      </div>
    </nav>
  )
}