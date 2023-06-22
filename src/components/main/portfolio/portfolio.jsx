import arrow from '../../../images/link-arrow.svg';
import './portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__links-element'>
          <a
            className='portfolio__link'
            href='https://sergeistepantsov.github.io/how-to-learn/'
            target='_blank'
            rel='noreferrer'>
            Статичный сайт
            <img className='portfolio__link-arrow' src={arrow} alt='' />
          </a>
        </li>
        <li className='portfolio__links-element'>
          <a
            className='portfolio__link'
            href='https://sergeistepantsov.github.io/russian-travel/'
            target='_blank'
            rel='noreferrer'>
            Адаптивный сайт
            <img className='portfolio__link-arrow' src={arrow} alt='' />
          </a>
        </li>
        <li className='portfolio__links-element'>
          <a
            className='portfolio__link'
            href='https://sergeist.mesto.nomoredomains.rocks'
            target='_blank'
            rel='noreferrer'>
            Одностраничное приложение
            <img className='portfolio__link-arrow' src={arrow} alt='' />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
