import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonSpan,
  SearchFormInput,
  SearchHeader,
} from './Searchbar.styled';

export function SearchBar({ onSubmit, resetValue }) {
  const [inputValue, setInputValue] = useState('');

  function handleValueChange(event) {
    setInputValue(event.currentTarget.value.toLowerCase());
  }

  function handleSubmit(event) {
    resetValue();
    event.preventDefault();
    if (inputValue.trim() === '') {
      alert('Write something ');
      return;
    }
    onSubmit(inputValue);
  }

  return (
    <SearchHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonSpan>Search</SearchFormButtonSpan>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleValueChange}
        />
      </SearchForm>
    </SearchHeader>
  );
}

SearchBar.propTypes = {
  resetValue: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
