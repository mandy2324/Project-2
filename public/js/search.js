const comedySearch = async () => {
  const genre = 35;
  const response = await fetch(`/api/favorites/${genre}`);
  const json = await response.json();
  console.log(json);
};

const horrorSearch = async () => {
  const genre = 27;
  const response = await fetch(`/api/favorites/${genre}`);
  const json = await response.json();
  console.log(json);
};

const actionSearch = async () => {
  const genre = 28;
  const response = await fetch(`/api/favorites/${genre}`);
  const json = await response.json();
  console.log(json);
};

const dramaSearch = async () => {
  const genre = 18;
  const response = await fetch(`/api/favorites/${genre}`);
  const json = await response.json();
  console.log(json);
};

const romanceSearch = async () => {
  const genre = 10749;
  const response = await fetch(`/api/favorites/${genre}`);
  const json = await response.json();
  console.log(json);
};

const familySearch = async () => {
  const genre = 10751;
  const response = await fetch(`/api/favorites/${genre}`);
  console.log(response);
  const json = await response.json();
  console.log(json);
};

const movieSearch = async () => {
  const movie = document.getElementById('movie_input').value;
  console.log(movie);
  const response = await fetch(`/api/favorites/movie/${movie}`);
  console.log(response);
  const json = await response.json();
  console.log(json);
};

$('.heart').click(function () {
  $(this).toggleClass('green');
});
