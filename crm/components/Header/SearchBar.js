'use client';
import React, { useState, useEffect } from 'react';
import MyInput from '../UI/MyInput/MyInput';

export function SearchBar() {
  const [searching, setSearching] = useState(false);
  const [value, setValue] = useState('');

  const toggleSearchBar = () => {
    setSearching(!searching);
  };

  const clearInput = () => {
    setValue('');
  };

  const setInputString = (e) => {
    const string = e.target.value;
    setValue(string);
  };

  return (
    <div className={searching ? 'search search-active' : 'search'}>
      <div className="search-icon" onClick={toggleSearchBar}></div>
      <div className="search-input">
        <MyInput
          value={value}
          type="text"
          placeholder="Search…"
          onInput={(e) => setInputString(e)}
          className="search-field"
          autoComplete="off"
        />
      </div>
      <span className="search-clear" onClick={clearInput}></span>
    </div>
  );
}
