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
  movieImg.classList.add('movie-poster');
  movieImg.src = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.innerHTML = movie.title;

  const relDate = document.createElement('p');
  relDate.classList.add('card-text');
  relDate.classList.add('movie-release-date');
  relDate.innerHTML = movie.release_date;

  const details = document.createElement('p');
  details.classList.add('card-text');
  details.classList.add('movie-card-text');
  const movieOverview = movie.overview.slice(0, 200) + '...';
  details.innerHTML = movieOverview;

  const buttonIcon = document.createElement('i');
  buttonIcon.classList.add('far');
  buttonIcon.classList.add('fa-heart');

  const movieButton = document.createElement('button');
  movieButton.classList.add('btn');
  movieButton.classList.add('btn-primary');
  movieButton.classList.add('container-fluid');
  movieButton.classList.add('saveFavorite');

  movieButton.append(buttonIcon);

  cardBody.append(movieButton);
  cardBody.append(cardTitle);
  cardBody.append(relDate);
  cardBody.append(details);

  movieDiv.appendChild(movieImg);
  movieDiv.append(cardBody);

  const container = document.getElementById('card-container');
  container.appendChild(movieDiv);
}

const logout = async () => {
  const response = await fetch('/api/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

// const saveMovie = document.querySelector('saveFavorite');

// saveMovie.addEventListener('submit', async () => {
//   try {
//     const response = await fetch('yourUrl', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newFavorite),
//       //
//     });
//     console.log('Completed!', response);
//   } catch (err) {
//     console.log(`Error: ${err}`);
//   }
// });

// if (saveMovie) {
//   saveMovie
//     .addEventListener('submit', (e) => {
//       e.preventDefault();

//       const newFavorite = {};

//       fetch('api/favorite', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newFavorite),
//       });
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }

//Get the button:
mybutton = document.getElementById('goBackTop');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
