import React, { useState } from 'react';
import SearchBar from './components/SearchBar.js';
import ListOfShips from './components/ListOfShips.js';

function App() {
  const [inputValue, setInputValue] = useState("")
  const searchCallback = (value) => {
    if(value === ""){
      setInputValue("")
    }else{
      setInputValue(value)
      console.log('Search value is: ' + value)
    }
  }

  return ( 
    <div className="page-wrapper">
      <div className="container">
        <SearchBar parentCallback={searchCallback}/>
        {inputValue.length > 0
          ? <ListOfShips
          shipName={inputValue}/>
          : null 
        }
      </div>
    </div>
  )
}

export default App;
