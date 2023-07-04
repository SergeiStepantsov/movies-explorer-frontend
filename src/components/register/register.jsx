import Form from '../form/form';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../input/input';
import useFormWithValidation from '../../utils/formValidator';
import logo from '../../images/logo.svg';
import { useState } from 'react';


export default function Register({ onRegistration, serverError }) {
  const formValidator = useFormWithValidation();
  const navigate = useNavigate();
  const [message, setMessage] = useState(serverError);

  function handleSubmit(e) {
    e.preventDefault();
    if (!formValidator.isValid) {
      setMessage('Пожалуйста, укажите корректные данные!');
    }
    onRegistration(
      formValidator.values['Name'],
      formValidator.values['Email'],
      formValidator.values['Password'],
    );
    formValidator.resetForm();
  }

  return (
    <section className='entry'>
      <div className='entry__container'>
        <Link className='header__logo' to='/'>
          <img src={logo} alt='логотип' />
        </Link>
        <h2 className='entry__title'>Добро пожаловать!</h2>
        <Form
          name='email'
          onSubmit={handleSubmit}
          isValid={formValidator.isValid}
          buttonText='Зарегистрироваться'
          registration={true}
          message={message}>
          <Input
            minLength={'2'}
            maxLength={'50'}
            type={'name'}
            name={'Name'}
            placeholder={'Имя'}
            formValidator={formValidator}
          />
          <Input
            minLength={'2'}
            maxLength={'50'}
            type={'email'}
            name={'Email'}
            placeholder={'Email'}
            formValidator={formValidator}
          />
          <Input
            minLength={'2'}
            maxLength={'200'}
            type={'password'}
            name={'Password'}
            placeholder={'Пароль'}
            formValidator={formValidator}
          />
        </Form>
        <p className='entry__question'>
          Уже зарегистрированы?
          <button
            onClick={() => {
              navigate('/signin', { replace: true });
            }}
            className='entry__login-button'>
            Войти
          </button>
        </p>
      </div>
    </section>
  );
}
