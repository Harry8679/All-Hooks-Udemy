import useFetch from '../hooks/useFetch';
import MovieCard from './MovieCard';

const MovieList = ({ search }) => {
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const { data: movies, loading } = useFetch(
    search ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&language=fr-FR` : null
  );

  if (loading) return <p>Chargement...</p>;
  if (!movies || movies.length === 0) return <p>Aucun film trouvé.</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;