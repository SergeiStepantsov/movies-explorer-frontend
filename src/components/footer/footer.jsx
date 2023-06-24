import './footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__wrapper'>
        <p className='footer__date'>&copy; {new Date().getFullYear()}</p>
        <div className='footer__links'>
          <a
            href='https://practicum.yandex.ru'
            target='_blank'
            rel='noreferrer'
            className='footer__link'>
            Яндекс.Практикум
          </a>
          <a
            href='https://github.com/SergeiStepantsov'
            target='_blank'
            rel='noreferrer'
            className='footer__link'>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
