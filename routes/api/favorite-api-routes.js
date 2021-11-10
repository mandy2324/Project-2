const router = require('express').Router();
const axios = require('axios');

router.get('/:genre', async (req, res) => {
  //   const genre = req.params.genre;
  const api_key = '72c07f67dd80001ac7962b9ba959039c';
  // const api_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-USc&page=1&with_genres=${genre}`;
  const api_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-USc&page=1&with_genres=35`;
  const fetch_res = await axios(api_url);
  // const json = await fetch_res.json();
  res.json(fetch_res.data);
});

module.exports = router;
