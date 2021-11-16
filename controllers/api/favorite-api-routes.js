const router = require('express').Router();
const axios = require('axios');

// Gets a list of movies based on which Genre is selected
router.get('/:genre', async (req, res) => {
  const genre = req.params.genre;
  const api_key = '72c07f67dd80001ac7962b9ba959039c';
  const api_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-USc&page=2&with_genres=${genre}`;
  const fetch_res = await axios(api_url);
  res.json(fetch_res.data);
});

// Gets a list of movies based on the user's input
router.get('/movie/:movie', async (req, res) => {
  const movie_input = req.params.movie;
  const api_key = '72c07f67dd80001ac7962b9ba959039c';
  const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${movie_input}&page=2&include_adult=false`;
  const fetch_res = await axios(api_url);
  res.json(fetch_res.data);
});

module.exports = router;
