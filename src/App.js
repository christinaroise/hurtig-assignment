import React, { useState } from 'react';
import SearchBar from './components/SearchBar.js';
import ListOfShips from './components/ListOfShips.js';

// ERROR message in console: Manifest: Line: 10, column: 3, Unexpected token. manifest.json:10 
// I have briefly looked into this, but this is outside of my knowledge

// WARNING messages also warns about missing dependencies: serch and shipsURL. 
// I suspect the solution is to restructure the code (just adding the two in useEffect creates new error messages)

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
