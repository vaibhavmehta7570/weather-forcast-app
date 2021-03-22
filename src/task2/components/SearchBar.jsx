import React from 'react'

const SearchBar = ({ input, onCityChange, onSubmit, statusCode }) => {
  const getSearchBarClasses = () => {
    let classes = 'searchbar__input'
    return (classes += statusCode !== 200 ? ' searchbar__input--error' : '')
  }

  return (
    <form className='searchbar' onSubmit={(e) => onSubmit(e)}>
      <input
        type='text'
        placeholder='Enter city'
        className={getSearchBarClasses()}
        value={input}
        onChange={onCityChange}
      />
      <button type='submit' className='searchbar__submit'>
        find!
      </button>
    </form>
  )
}

export default SearchBar
