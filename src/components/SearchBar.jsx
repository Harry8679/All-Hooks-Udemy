import { useState, useRef, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = (e) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      ref={inputRef}
      type="text"
      className="border p-2 w-full mb-4"
      placeholder="Recherche film..."
      value={value}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;