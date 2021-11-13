const comedySearch = async () => {
  const genre = 35;
  const response = await fetch(`/api/favorites/${genre}`);
  const json = await response.json();

  json.results.forEach((movie) => {
    renderMovie(movie);
  });
};

const horrorSearch = async () => {
  const genre = 27;
  const response = await fetch(`/api/favorites/${genre}`);
  const json = await response.json();

  json.results.forEach((movie) => {
    renderMovie(movie);
  });
};

const actionSearch = async () => {
  const genre = 28;
  const response = await fetch(`/api/favorites/${genre}`);
  const json = await response.json();

  json.results.forEach((movie) => {
    renderMovie(movie);
  });
};

const dramaSearch = async () => {
  const genre = 18;
  const response = await fetch(`/api/favorites/${genre}`);
  const json = await response.json();

  json.results.forEach((movie) => {
    renderMovie(movie);
  });
};

const romanceSearch = async () => {
  const genre = 10749;
  const response = await fetch(`/api/favorites/${genre}`);
  const json = await response.json();

  json.results.forEach((movie) => {
    renderMovie(movie);
  });
};

const familySearch = async () => {
  const genre = 10751;
  const response = await fetch(`/api/favorites/${genre}`);
  const json = await response.json();

  json.results.forEach((movie) => {
    renderMovie(movie);
  });
};

const movieSearch = async () => {
  const movie = document.getElementById('movie_input').value;
  const response = await fetch(`/api/favorites/movie/${movie}`);
  const json = await response.json();

  json.results.forEach((movie) => {
    renderMovie(movie);
  });
};

function renderMovie(movie) {
  const movieDiv = document.createElement('div');
  movieDiv.classList.add('card');
  movieDiv.classList.add('movie-card');

  const movieImg = document.createElement('img');
  movieImg.src = 'https://image.tmdb.org/t/p/w400' + movie.poster_path;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.innerHTML = movie.title;

  const relDate = document.createElement('p');
  relDate.classList.add('card-text');
  relDate.innerHTML = movie.release_date;

  const details = document.createElement('p');
  details.classList.add('card-text');
  const movieOverview = movie.overview.slice(0, 60) + '...';
  details.innerHTML = movieOverview;

  const movieButton = document.createElement('button');
  movieButton.classList.add('btn');
  movieButton.classList.add('btn-primary');
  movieButton.classList.add('container-fluid');

  cardBody.append(cardTitle);
  cardBody.append(relDate);
  cardBody.append(details);
  cardBody.append(movieButton);

  movieDiv.appendChild(movieImg);
  movieDiv.append(cardBody);
  // document.body.style.backgroundImage = "url('" + movie.backdrop_path + "')";

  const container = document.getElementById('card-container');
  container.appendChild(movieDiv);
}
