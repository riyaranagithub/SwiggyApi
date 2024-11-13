import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filter } from '../../store/homeSlice';

function SearchBar() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    dispatch(filter(newQuery));
   
  };

  return (
    <div>
      <form className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-md" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="flex-grow bg-transparent outline-none text-gray-800 placeholder-gray-500"
        />
        <button type="submit" className="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M9.8 18a8.5 8.5 0 100-17 8.5 8.5 0 000 17z" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
