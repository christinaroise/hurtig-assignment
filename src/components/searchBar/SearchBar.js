import React from 'react';
import './searchBar.css';
import { ReactComponent as MagnifyingGlass } from '../../assets/magnifying-glass.svg';

const SearchBar = () => {
    return (
        <div class="search-box">
            <input className="search-input-value" type="text" autoComplete="off" value="Search" placeholder="Search"/>
            <button className="search-button" type="submit"><MagnifyingGlass/></button>
        </div>
    );
};

export default SearchBar;