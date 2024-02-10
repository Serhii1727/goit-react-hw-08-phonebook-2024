import { FcGoogle } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { NavLink, useLocation } from 'react-router-dom';
import image from '../../services/image/ea3d219854b076d03f3eeb276c51c24bfb74d595031e15e0f1bd09a32ab4f263.jpg';
import css from './Login.module.css';

const Login = () => {
  const location = useLocation();
  console.log(location.state.from);
  return (
    <div className={css.loginSection}>
      <div className={css.loginBar}>
        <h1 className={css.title}>Login</h1>
        <form className={css.formContainer}>
          <label htmlFor="email" className={css.label}>
            Email
          </label>
          <input id="email" className={css.input}></input>
          <label htmlFor="password" className={css.label}>
            Password
          </label>
          <input id="password" className={css.input}></input>
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
