const { Router } = require('express');
const axios = require('axios');

const router = Router();

router.get('/api/v1/pokemons', async(req, res) => {
  const { limite } = req.query;
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limite}`);
    res.send(data);
  } catch (error) {
    console.error(error);
  }
})

module.exports = router;