import React from 'react';

function MovieCard({ movie }) {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="relative overflow-hidden bg-gray-800 rounded-lg shadow-lg group"> 
      <img
        src={posterUrl}
        alt={movie.title}
        className="object-cover w-screen transition-transform duration-300 h-50 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black via-transparent to-black group-hover:opacity-100"></div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm">
        <h2 className="text-lg font-bold text-white truncate">{movie.title}</h2>
        <p className="text-sm text-gray-300">
          {movie.release_date ? `Released: ${movie.release_date}` : 'No release date available'}
        </p>
        <button className="px-4 py-2 mt-2 text-sm font-medium text-black bg-yellow-400 rounded-lg hover:bg-yellow-500">
          View Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
