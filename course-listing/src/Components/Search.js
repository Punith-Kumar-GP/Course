
import React, { useState } from 'react';
import "../css/Search.css"

const SearchComponent = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <form className='search'>
      <input
        type="text"
        placeholder="Search by Course or Instructor"
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchComponent;
