import MoviesCardList from '../movies/movies-card-list/movies-card-list';
import { testFavoriteCards } from '../../data/testCards';
import SearchForm from '../movies/search-form/search-form';

function SavedMovies({ currentLocation }) {
  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList moviesForLayout={testFavoriteCards} currentLocation={currentLocation} />
    </section>
  );
}

export default SavedMovies;
