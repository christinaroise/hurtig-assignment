const express = require('express');
const ships = require('./data/ships');
const server = express();

const cors = require('cors');
server.use(cors());

const port = 4000;

/* 
I've never worked with CORS before, but did some research and some trial/errors. 
I'm not certain if the solution I found is preferred or correct.
*/ 

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});

server.get(['/api/ships', '/api/ships/:query'], (req, res) => {
    const query = req.params.query;

    if (!query) {
        return res.json(ships);
    }

    const matches = ships.filter(ship =>
        ship.name.toLowerCase().includes(query.toLowerCase())
    );

    res.json(matches);
});
