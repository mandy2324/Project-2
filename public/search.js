const movieForm = document.querySelector('.movie-search')
movieForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const searchInput = document.querySelector('#search-input').value.trim()
    const response = await fetch('/api/movies/search', {
        method: 'GET',
        body: JSON.stringify({ searchInput }),
        headers: { 'Content-Type': 'application/json' },
      });
    console.log(response);
})
