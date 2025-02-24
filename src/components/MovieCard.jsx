import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

const MovieCard = ({ movie }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className="border rounded-lg shadow-md p-4 mb-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/50'}
          alt={movie.Title}
          className="w-12 rounded"
        />
        <div>
          <h3 className="font-bold text-lg">{movie.Title}</h3>
          <p className="text-gray-600">{movie.Year}</p>
        </div>
      </div>

      <button
        onClick={() => toggleFavorite(movie)}
        className={`px-4 py-2 rounded transition ${
          isFavorite ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
        }`}
      >
        {isFavorite ? 'Retirer 💔' : 'Favoris ❤️'}
      </button>
    </div>
  );
};

export default MovieCard;