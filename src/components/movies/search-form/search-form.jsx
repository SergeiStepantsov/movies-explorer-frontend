import { useState, useEffect } from 'react';
import './search-form.css';
import SearchIcon from '../../../images/search-icon.svg';

function SearchForm({ onSearchSubmit, onCheckboxClick, currentLocation }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchData, setSearchData] = useState('');
  const [shortSelected, setShortSelected] = useState(false);
  const [searchError, setSearchError] = useState('');

  useEffect(() => {
    if (currentLocation === '/saved-movies') {
      const storedFilterSavedData = localStorage.getItem('filterSavedData');
      if (storedFilterSavedData) {
        setSearchData(JSON.parse(storedFilterSavedData).params);
        setShortSelected(JSON.parse(storedFilterSavedData).short);
      }
    } else {
      const storedFilterData = localStorage.getItem('filterData');
      if (storedFilterData) {
        setSearchData(JSON.parse(storedFilterData).params);
        setShortSelected(JSON.parse(storedFilterData).short);
      }
    }
  }, []);

  const formFillHandle = (event) => {
    const value = event.target.value;
    if (value) {
      setSearchError('');
    }
    setSearchData(value);
  };

  function handleCheckboxChange() {
    setShortSelected(!shortSelected);
    onCheckboxClick(!shortSelected);
  }

  const formSubmitHandle = (evt) => {
    evt.preventDefault();
    if (!searchData) {
      setSearchError('Вам необходимо ввести ключевое слово');
    } else {
      onSearchSubmit(searchData, shortSelected);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='search'>
      <form className='search__form' name='search' onSubmit={formSubmitHandle}>
        {windowWidth < 550 ? null : (
          <img className='search__form-image' src={SearchIcon} alt='search icon' />
        )}
        <input
          placeholder='Movie'
          name='search'
          className='search__form-input'
          type='text'
          value={searchData}
          onChange={formFillHandle}></input>
        <button className='search__form-button' type='submit'>
          Найти
        </button>
      </form>
      <span className='search__form-error'>{searchError}</span>
      <div className='search__slider'>
        <input
          type='checkbox'
          className={`search__slider-button ${shortSelected ? 'search__slider-button_active' : ''}`}
          name='short'
          checked={shortSelected}
          onChange={handleCheckboxChange}></input>
        <label className='search__slider-title'>Короткометражки</label>
      </div>
    </div>
  );
}

export default SearchForm;
