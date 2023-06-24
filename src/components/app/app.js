import { useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Login from '../login/login';
import Main from '../main/main';
import Movies from '../movies/movies';
import NotFound from '../not-found/not-found';
import { Route, Routes, useLocation } from 'react-router-dom';
import Register from '../register/register';
import Profile from '../profile/profile';
import SavedMovies from '../saved-movies/saved-movies';

function App() {
  const location = useLocation();
  const [navigationOpened, setNavigationOpened] = useState(false);

  function handleNavMenuVisability() {
    setNavigationOpened(!navigationOpened);
  }

  return (
    <>
      {location.pathname === '/' ||
      location.pathname === '/movies' ||
      location.pathname === '/saved-movies' ||
      location.pathname === '/profile' ? (
        <Header
          currentLocation={location.pathname}
          onNavButtonClick={handleNavMenuVisability}
          onCloseButtonClick={handleNavMenuVisability}
          visability={navigationOpened}
        />
      ) : null}
      <main className='content'>
        <Routes>
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies currentLocation={location.pathname} />} />
          <Route
            path='/saved-movies'
            element={<SavedMovies currentLocation={location.pathname} />}
          />
          <Route path='/*' element={<NotFound />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>
      {location.pathname === '/' ||
      location.pathname === '/movies' ||
      location.pathname === '/saved-movies' ? (
        <Footer />
      ) : null}
    </>
  );
}

export default App;
