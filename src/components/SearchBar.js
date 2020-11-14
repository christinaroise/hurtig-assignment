import React from 'react';
import './searchBar.css';
import { ReactComponent as MagnifyingGlass } from '../assets/magnifying-glass.svg';

const SearchBar = (props) => {
    return (
        <div class="search-box">
            <input className="search-input-value" type="text" autoComplete="off" value={props.inputValue} onChange={props.onChangeValue} placeholder="Search"/>
            <button className="search-button" type="submit"><MagnifyingGlass/></button>
        </div>
    );
};

export default SearchBar;