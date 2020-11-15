import React, { useState, useEffect } from 'react';
import './searchBar.css';
import { ReactComponent as MagnifyingGlass } from '../assets/magnifying-glass.svg';
import { ReactComponent as Exit } from '../assets/cross.svg';

const SearchBar = ({ parentCallback })  =>{
    let [icon, setIcon] = useState(<MagnifyingGlass/>);
    let [inputValue, setInputValue] = useState("");

    useEffect(() => {
        search();
    }, [inputValue])

    let search = () => {
        setIcon( inputValue.length > 0 ? <Exit/> : <MagnifyingGlass/>);
        parentCallback(inputValue); 
    }

    const clearInputValue = () => {
        setIcon(<MagnifyingGlass/>);
        setInputValue("");
    }

    return (
        <div className="search-box">
            <input className="search-input-value" type="text" autoComplete="off" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Search"/>
            <button className="search-button" type="submit" onClick={() => {clearInputValue()}}>{icon}</button>
        </div>
    );
};

export default SearchBar 