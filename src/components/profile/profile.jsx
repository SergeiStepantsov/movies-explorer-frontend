import './profile.css';

function Profile() {
  return (
    <div className='profile'>
      <h1 className='profile__title'>Привет, Сергей!</h1>
      <div className='profile__data-container'>
        <div className='profile__data'>
          <p className='profile__data-text'>Имя</p>
          <p className='profile__data-text'>Сергей</p>
        </div>
        <div className='profile__data'>
          <p className='profile__data-text'>E-mail</p>
          <p className='profile__data-text'>pochta@pochta.ru</p>
        </div>
      </div>
      <div className='profile__menu'>
        <button className='profile__button'>Редактировать</button>
        <button className='profile__button profile__button_logout'>Выйти из аккаунта</button>
      </div>
    </div>
  );
}

export default Profile;
