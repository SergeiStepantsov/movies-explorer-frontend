import SearchForm from './search-form/search-form';
import MoviesCardList from './movies-card-list/movies-card-list';
import Preloader from './preloader/preloader';
import { testCards } from '../../data/testCards';

function Movies({ currentLocation }) {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList moviesForLayout={testCards} currentLocation={currentLocation} />
      <Preloader />
    </section>
  );
}

export default Movies;
