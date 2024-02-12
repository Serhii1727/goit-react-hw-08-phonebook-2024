import { FcGoogle } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import image from '../../services/images/ea3d219854b076d03f3eeb276c51c24bfb74d595031e15e0f1bd09a32ab4f263.jpg';
import css from './Login.module.css';
import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../redux/auth/authSlice';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChangeInput = event => {
    if (event.currentTarget.name === 'email') {
      setEmail(event.currentTarget.value);
    }

    if (event.currentTarget.name === 'password') {
      setPassword(event.currentTarget.value);
    }
  };

  const onSubmit = event => {
    event.preventDefault();

    const formData = {
      email,
      password,
    };

    dispatch(apiLoginUser(formData));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <div className={css.loginSection}>
      <div className={css.loginBar}>
        <h1 className={css.title}>Login</h1>
        <form className={css.formContainer} onSubmit={onSubmit}>
          <label htmlFor="email" className={css.label}>
            Email
          </label>
          <input
            onChange={handleChangeInput}
            type="email"
            placeholder="email@email.com"
            id="email"
            name="email"
            value={email}
            required
            className={css.input}
          ></input>
          <label htmlFor="password" className={css.label}>
            Password
          </label>
          <input
            onChange={handleChangeInput}
            type="password"
            placeholder="*******"
            minLength={7}
            id="password"
            name="password"
            value={password}
            required
            className={css.input}
          ></input>
          <button className={css.buttonSignIn} type="submit">
            Log in
          </button>
          <p className={css.p}>or</p>
          <button type="button" className={css.buttonGoogle}>
            <span className={css.icon}>
              <IconContext.Provider
                value={{ style: { height: '25px', width: '25px' } }}
              >
                <FcGoogle />
              </IconContext.Provider>
            </span>
            <span className={css.textButtonGoogle}>
              <p> Sign in with Google</p>
            </span>
          </button>
        </form>
        <p className={css.register}>
          Don't have an account?{' '}
          <NavLink to="http://localhost:3000/register">Sign up</NavLink>
        </p>
      </div>
      <div className={css.imageContainer}>
        <img className={css.image} src={image} alt="phonebook" />
      </div>
    </div>
  );
};

export default Login;
