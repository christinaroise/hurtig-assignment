import React from 'react';
import './searchBar.css';
import { ReactComponent as MagnifyingGlass } from '../assets/magnifying-glass.svg';

const SearchBar = (props) => {
    return (
        <div className="search-box">
            <input className="search-input-value" type="text" autoComplete="off" value={props.inputValue} onChange={props.onChange} placeholder="Search"/>
    <button className="search-button" type="submit" onClick={props.onSearchClick}><MagnifyingGlass/></button>
        </div>
    );
};

export default SearchBar;