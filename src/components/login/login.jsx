import Form from '../form/form';
import Input from '../input/input';
import useFormWithValidation from '../../utils/formValidator';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';


export default function Login({ onAuthoriz }) {
  const formValidator = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onAuthoriz(formValidator.values['Email'], formValidator.values['Password']);
    formValidator.resetForm();
  }

  return (
    <section className='entry'>
      <div className='entry__container'>
        <Link className='header__logo' to='/'>
          <img src={logo} alt='логотип' />
        </Link>
        <h2 className='entry__title'>Рады видеть!</h2>
        <Form
          name='email'
          onSubmit={handleSubmit}
          isValid={formValidator.isValid}
          buttonText='Войти'
          registration={false}>
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
          Ещё не зарегистрированы?
          <Link className='entry__login-button' to='/signup'>
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}
