import { FcGoogle } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import image from '../../services/images/ea3d219854b076d03f3eeb276c51c24bfb74d595031e15e0f1bd09a32ab4f263.jpg';
import css from './Register.module.css';
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../../redux/auth/authSlice';

const Register = () => {
  const dispatch = useDispatch();
  const onSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(apiRegisterUser(formData));
  };

  return (
    <div className={css.loginSection}>
      <div className={css.loginBar}>
        <h1 className={css.title}>Register</h1>
        <form className={css.formContainer} onSubmit={onSubmit}>
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
          <button type="submit" className={css.buttonSignIn}>
            Register
          </button>
          <p className={css.p}>or</p>
          <button type="submit" className={css.buttonGoogle}>
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
        <img className={css.image} src={image} alt="phonebook" />
      </div>
    </div>
  );
};

export default Register;
