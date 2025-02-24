import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

const MovieCard = ({ movie }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="border p-4 rounded shadow">
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className="mb-2"
      />
      <h3 className="font-bold">{movie.title}</h3>
      <p>{movie.release_date}</p>
      <button
        className={`mt-2 px-4 py-1 rounded ${
          isFavorite ? 'bg-red-500' : 'bg-blue-500'
        } text-white`}
        onClick={() => toggleFavorite(movie)}
      >
        {isFavorite ? 'Retirer' : 'Ajouter'}
      </button>
    </div>
  );
};

export default MovieCard;