import './movies-card-list.css';
import MoviesCard from '../movies-card/movies-card';

function MoviesCardList({ 
  moviesForLayout,
  savedMovies,
  currentLocation,
  onCardLike,
  onCardUnlike,
 }) {
  return (
    <ul className='movies-list'>
    {moviesForLayout.map((movie) => {
        return (
          <MoviesCard
            movie={movie}
            currentLocation={currentLocation}
            key={movie.id}
            savedMovies={savedMovies}
            onCardLike={onCardLike}
            onCardUnlike={onCardUnlike}
          />
        );
      })}
    </ul>
  );
}

export default MoviesCardList;
