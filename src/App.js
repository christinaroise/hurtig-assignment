import React, { useState } from 'react';
import SearchBar from './components/SearchBar.js';
import ListOfShips from './components/ListOfShips.js';

function App() {
  const [searchValue, setSearchValue] = useState("")
  
  const searchCallback = (value) => {
    if(value === ""){
      setSearchValue("")
    }else{
      setSearchValue(value)
      console.log('Search value is: ' + value)
    }
  }


  return ( 
    <div className="page-wrapper">
      <div className="container">
        <SearchBar parentCallback={searchCallback}/>
        {searchValue.length > 0
          ? <ListOfShips
          shipName={searchValue}/>
          : null 
        }
      </div>
    </div>
  )
}

export default App;
