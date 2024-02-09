// const express = require('express');
const { Router } = require('express');

// const router = express.Router();
const router = Router();

const petList = {
  "pets": [
    {
      "id": 1,
      "name": "Firulais",
      "age": 3,
      "type": "dog"
    },
    {
      "id": 2,
      "name": "Michi",
      "age": 2,
      "type": "cat"
    },
    {
      "id": 3,
      "name": "Scooby Doo",
      "age": 6,
      "type": "dog"
    },
  ]
}

router.get('/api/v1/pets', (req, res)=>{
  res.json(petList);
})


module.exports = router;