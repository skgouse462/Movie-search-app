const API_KEY = '5dde9039'; // Replace with your API key
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const movieContainer = document.getElementById('movie-container');
const loading = document.getElementById('loading');
const movieModal = new bootstrap.Modal(document.getElementById('movieModal'));

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    searchMovies(query);
  } else {
    alert('Please enter a movie title');
  }
});

async function searchMovies(query) {
  movieContainer.innerHTML = '';
  loading.style.display = 'block';

  try {
    const response = await fetch(`${API_URL}s=${query}`);
    const data = await response.json();

    loading.style.display = 'none';

    if (data.Response === 'True') {
      displayMovies(data.Search);
    } else {
      movieContainer.innerHTML = `<p class="text-center">No movies found for "${query}".</p>`;
    }
  } catch (error) {
    loading.style.display = 'none';
    console.error('Error fetching data:', error);
    movieContainer.innerHTML = '<p class="text-center text-danger">Something went wrong. Please try again later.</p>';
  }
}

function displayMovies(movies) {
  movieContainer.innerHTML = movies
    .map(movie => {
      return `
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="card">
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" class="card-img-top" alt="${movie.Title}">
            <div class="card-body">
              <h5 class="card-title text-white">${movie.Title}</h5>
              <p class="card-text text-white">Year: ${movie.Year}</p>
              <button class="btn btn-highlight" onclick="fetchMovieDetails('${movie.imdbID}')">View Details</button>
            </div>
          </div>
        </div>
      `;
    })
    .join('');
}

async function fetchMovieDetails(id) {
  try {
    const response = await fetch(`${API_URL}i=${id}`);
    const movie = await response.json();

    if (movie.Response === 'True') {
      displayMovieDetails(movie);
    } else {
      alert('Unable to fetch movie details.');
    }
  } catch (error) {
    console.error('Error fetching movie details:', error);
    alert('Something went wrong. Please try again later.');
  }
}

function displayMovieDetails(movie) {
  const movieDetails = `
    <div class="d-flex">
      <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" class="me-3" style="width: 200px;">
      <div>
        <h3>${movie.Title}</h3>
        <p><strong>Year:</strong> ${movie.Year}</p>
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
      </div>
    </div>
  `;
  document.getElementById('movie-details').innerHTML = movieDetails;
  movieModal.show();
}