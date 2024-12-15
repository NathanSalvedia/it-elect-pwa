import React, { useEffect, useState } from 'react';
import './index.css';
import './App.css';
import MovieCard from './components/MovieCard';
import MoviesNav from './components/MoviesNav';
import MovieHeading from './components/MovieHeading';

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=9708ed02ce778a317f8dd2a5e89774bc';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
  }, []);


  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchQuery, movies]);

  return (
    <div className="min-h-screen">
      <div>
        <MoviesNav nav="IMovies" />
      </div>
      <div className="container p-5 mx-auto mt-16">
        <MovieHeading heading="Popular Movies" />
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 text-lg text-black bg-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 md:w-1/2"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
