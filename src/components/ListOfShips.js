import React, { useState, useEffect } from 'react';
import { ApiService } from '../services/ApiService';
import './listOfShips.css';

const ListOfShips = (props) => {
  const [ships, setShips] = useState([])

  useEffect(() => {
    const shipsURL = `http://localhost:4000/api/ships/` + props.shipName;
    ApiService.getData(shipsURL).then(res => {
      setShips(res.data); 
    });
  }, [])

  return (
    <div>
      {ships.length > 0 
        ? <ul className="list-of-ships">
            {ships.map(i => (
              <li key={i.id} className="ship">
                  {i.name}
              </li>
            ))}
          </ul>
        : <div className="error-container">
            <p>No such ship with that name</p>
          </div>
      }
    </div>
  );
}

export default ListOfShips
