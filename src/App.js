import { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Favorites from './components/Favorites';
import { FavoritesProvider } from './contexts/FavoritesContext';

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <FavoritesProvider>
      <div className="container mx-auto p-4">
        <SearchBar onSearch={setSearch} />
        <MovieList search={search} />
        <Favorites />
      </div>
    </FavoritesProvider>
  );
};

export default App;