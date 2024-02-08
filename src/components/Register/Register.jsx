import { FcGoogle } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import image from '../../services/image/ea3d219854b076d03f3eeb276c51c24bfb74d595031e15e0f1bd09a32ab4f263.jpg';
import css from './Register.module.css';

const Register = () => {
  return (
    <div className={css.loginSection}>
      <div className={css.loginBar}>
        <h1 className={css.title}>Register</h1>
        <form className={css.formContainer}>
          <label htmlFor="name" className={css.label}>
            Name
          </label>
          <input
            type="text"
            placeholder="Serhii Kravchenko"
            id="name"
            minLength={2}
            required
            className={css.input}
          ></input>
          <label htmlFor="email" className={css.label}>
            Email
          </label>
          <input
            type="email"
            placeholder="email@email.com"
            id="email"
            required
            className={css.input}
          ></input>
          <label htmlFor="password" className={css.label}>
            Password
          </label>
          <input
            type="password"
            placeholder="*******"
            minLength={7}
            id="password"
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
      </div>
      <div className={css.imageContainer}>
        <img className={css.image} src={image} alt="fhonebook" />
      </div>
    </div>
  );
};

export default Register;
