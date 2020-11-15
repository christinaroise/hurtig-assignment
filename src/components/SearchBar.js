import React, { useState } from 'react';
import './searchBar.css';
import { ReactComponent as MagnifyingGlass } from '../assets/magnifying-glass.svg';
import { ReactComponent as Exit } from '../assets/cross.svg';

const SearchBar = ({ parentCallback })  =>{
    let [icon, setIcon] = useState(<MagnifyingGlass/>);
    let [searchClicked, setSearchClicked] = useState(false);
    let [inputValue, setInputValue] = useState("");

    let search = () => {
        if(inputValue === ""){
            console.log('You cannot search EMPTY')
            // insert code for alert.message here
        }else{
            setSearchClicked(!searchClicked);
            setIcon( searchClicked ? <MagnifyingGlass/> : <Exit/>);
            if(searchClicked){
                setInputValue("");
                console.log('Input Value was cleaned out')
            }else{
                parentCallback(inputValue);
            }
        }
    }

    return (
        <div className="search-box">
            <input className="search-input-value" type="text" autoComplete="off" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Search"/>
            <button className="search-button" type="submit" onClick={() => {search()}}>{icon}</button>
        </div>
    );
};

export default SearchBar 