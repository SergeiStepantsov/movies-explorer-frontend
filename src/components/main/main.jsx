import AboutMe from './about-me/about-me';
import AboutProject from './about-project/about-project';
import Promo from './promo/promo';
import Techs from './techs/techs';

function Main() {
  return (
    <section className='introduction'>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </section>
  );
}

export default Main;
