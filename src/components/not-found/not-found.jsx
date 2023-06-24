import './not-found.css';
import { Link } from 'react-router-dom';


function NotFound() {
  return (
    <div className='not-found'>
      <p className='not-found__title'>404</p>
      <p className='not-found__subtitle'>Страница не найдена</p>
      <Link className='not-found__button' to='/'>
            Назад
      </Link>
    </div>
  );
}

export default NotFound;
