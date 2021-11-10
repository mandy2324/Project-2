const movieForm = document.querySelector('.movie-search');

const genreSearch = async () => {
  const genre = 35;
  console.log('response');
  const response = await fetch(`/api/favorites/${genre}`);
  const json = await response.json();
  console.log(json);
  // console.log(response.json());
};

// movieForm.addEventListener('submit', async function (event) {
//   event.preventDefault();
//   const searchInput = document.querySelector('#search-input').value.trim();
//   const response = await fetch('/api/movies/search', {
//     method: 'GET',
//     body: JSON.stringify({ searchInput }),
//     headers: { 'Content-Type': 'application/json' },
//   });
//   console.log(response);
// });

genreSearch();
