import useFetch from '../hooks/useFetch';
import MovieCard from './MovieCard';

const MovieList = ({ search }) => {
  const { data, loading, error } = useFetch(
    search ? `https://www.omdbapi.com/?apikey=TON_API_KEY&s=${search}` : null
  );

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;
  if (!data || !data.Search) return <p>Aucun film trouvé.</p>;

  return data.Search.map((movie) => (
    <MovieCard key={movie.imdbID} movie={movie} />
  ));
};

export default MovieList;