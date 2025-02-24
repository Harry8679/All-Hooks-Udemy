import { useState, useEffect, useRef } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const debounceRef = useRef(null);

  useEffect(() => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearch(query);
    }, 500);
  }, [query, onSearch]);

  return (
    <input
      type="text"
      placeholder="Recherche film..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="border p-2 w-full"
    />
  );
};

export default SearchBar;