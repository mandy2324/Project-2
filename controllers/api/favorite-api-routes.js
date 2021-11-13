const router = require('express').Router();
const axios = require('axios');

// Gets a list of movies based on which Genre is selected
router.get('/:genre', async (req, res) => {
  const genre = req.params.genre;
  const api_key = '72c07f67dd80001ac7962b9ba959039c';
  const api_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-USc&page=1&with_genres=${genre}`;
  console.log(api_url);
  const fetch_res = await axios(api_url);
  res.json(fetch_res.data);
});

// Gets a list of movies based on the user's input
router.get('/movie/:movie', async (req, res) => {
  const movie_input = req.params.movie;
  const api_key = '72c07f67dd80001ac7962b9ba959039c';
  const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${movie_input}&page=1&include_adult=false`;
  console.log(api_url);
  const fetch_res = await axios(api_url);
  res.json(fetch_res.data);
  console.log(fetch_res.data);
});

// function displayMovie(data) {
//   const movie = results[0];
//   const movieDiv = document.getElementById('movie');
//   const movieName = results[0].title;
//   const heading = document.createElement('h1');
//   heading.innerHTML = movieName;
//   movieDiv.appendChild(heading);
//   const movieImg = document.createElement('img');
//   movieImg.src = results[0].poster_path;
//   movieDiv.appendChild(movieImg);
//   document.body.style.backgroundImage =
//     "url('" + results[0].backdrop_path + "')";
// }

module.exports = router;
