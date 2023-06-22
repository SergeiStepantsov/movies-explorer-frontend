import './movies-card-list.css';
import MoviesCard from '../movies-card/movies-card';

function MoviesCardList({ moviesForLayout, currentLocation }) {
  return (
    <ul className='movies-list'>
      {moviesForLayout.map((movie) => (
        <MoviesCard
          title={movie.title}
          duration={movie.duration}
          preview={movie.preview}
          active={movie.active}
          currentLocation={currentLocation}
          key={movie.id}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
