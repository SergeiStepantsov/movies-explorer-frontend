import photo from '../../../images/photo.png';
import Portfolio from '../portfolio/portfolio';
import './about-me.css';

function AboutMe() {
  return (
    <div className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__main'>
        <div className='about-me__text-block'>
          <h2 className='about-me__text-title'>Сергей</h2>
          <h3 className='about-me__text-subtitle'>Фронтенд-разработчик, 43 года</h3>
          <p className='about-me__text'>
            Я родился и жил в Туле, закончил машиностроительный факультет ТулГУ. У меня есть жена, сын и дочь.
            Любим проводить время вместе, путешествовать. Недавно начал кодить и немного занимаюсь дизайном. С 2008 года работал
            в университете. После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className='about-me__link'
            href='https://github.com/SergeiStepantsov'
            target='_blank'
            rel='noreferrer'>
            Github
          </a>
        </div>
        <img className='about-me__photo' src={photo} alt='Фото студента' />
      </div>
      <Portfolio />
    </div>
  );
}

export default AboutMe;
