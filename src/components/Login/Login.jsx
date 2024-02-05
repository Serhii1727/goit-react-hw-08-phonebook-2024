import { FcGoogle } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import image from '../../services/image/ea3d219854b076d03f3eeb276c51c24bfb74d595031e15e0f1bd09a32ab4f263.jpg';
import css from './Login.module.css';

const Login = () => {
  return (
    <div className={css.loginSection}>
      <div className={css.loginBar}>
        <h1 className={css.title}>Login</h1>
        <form className={css.formContainer}>
          <label for="email" className={css.label}>
            Email
          </label>
          <input id="email" className={css.input}></input>
          <label for="password" className={css.label}>
            Password
          </label>
          <input id="password" className={css.input}></input>
          <button className={css.buttonSignIn} type="submit">
            Log in
          </button>
          <p className={css.p}>or</p>
          <button className={css.buttonGoogle}>
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
          Don't have an account? <NavLink to="register">Sign up</NavLink>
        </p>
      </div>
      <div className={css.imageContainer}>
        <img className={css.image} src={image} alt="fhonebook" />
      </div>
    </div>
  );
};

export default Login;
