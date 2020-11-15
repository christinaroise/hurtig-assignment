import React, { useState, useEffect } from 'react';
import { ApiService } from '../services/ApiService';
import './listOfShips.css';

const ListOfShips = (props) => {
  const [ships, setShips] = useState([])
  const shipsURL = `http://localhost:4000/api/ships/` + props.shipName;

  useEffect(() => {
    let isMounted = true; 
    ApiService.getData(shipsURL).then(res => {
      if (isMounted) setShips(res.data); 
    });
    return () => { isMounted = false };
  }, [ships])

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
