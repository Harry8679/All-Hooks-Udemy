import { useContext, useMemo } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  const averageYear = useMemo(() => {
    if (!favorites.length) return 0;
    return (
      favorites.reduce((sum, movie) => sum + parseInt(movie.Year), 0) /
      favorites.length
    ).toFixed(0);
  }, [favorites]);

  return (
    <div>
      <h3 className="text-xl">Favoris ({favorites.length})</h3>
      <p>Année moyenne : {averageYear}</p>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.imdbID}>{movie.Title} ({movie.Year})</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;