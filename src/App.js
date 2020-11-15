import React, { useState } from 'react';
import SearchBar from './components/SearchBar.js';

function App() {
  const searchCallback = (value) => {
   console.log('Search value is: ' + value)
  }

  return (
    <div className="page-wrapper">
      <div className="container">
        <SearchBar parentCallback={searchCallback}/>
      </div>
    </div>
  );
}

export default App;
