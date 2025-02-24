import { useContext, useMemo } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  const averageYear = useMemo(() => {
    if (favorites.length === 0) return 0;
    const sum = favorites.reduce((acc, cur) => acc + Number(cur.release_date.slice(0, 4)), 0);
    return (sum / favorites.length).toFixed(0);
  }, [favorites]);

  return (
    <div className="mt-4">
      <h2 className="font-bold">Favoris ({favorites.length})</h2>
      <p>Année moyenne : {averageYear}</p>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>{movie.title} ({movie.release_date.slice(0,4)})</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;