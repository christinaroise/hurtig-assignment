import React, { useState } from 'react';
import './searchBar.css';
import { ReactComponent as MagnifyingGlass } from '../assets/magnifying-glass.svg';
import { ReactComponent as Exit } from '../assets/cross.svg';

const SearchBar = (props) =>{
    let [icon, setIcon] = useState(<MagnifyingGlass/>)
    let [buttonClicked, setButtonClicked] = useState(false)

    const onClickSearch = () => {
        setButtonClicked(!buttonClicked)
        if(!buttonClicked){
            setIcon(<Exit/>)
        }else{
            setIcon(<MagnifyingGlass/>)
        }
    }

    function test (){
        console.log('test')
    }

    return (
        <div className="search-box">
            <input className="search-input-value" type="text" autoComplete="off" value={props.inputValue} onChange={props.onChange} placeholder="Search"/>
            <button className="search-button" type="submit" onClick={() => {onClickSearch()}}>{icon}</button>
        </div>
    );
};

export default SearchBar 