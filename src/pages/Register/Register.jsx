import { FcGoogle } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import image from '../../services/images/ea3d219854b076d03f3eeb276c51c24bfb74d595031e15e0f1bd09a32ab4f263.jpg';
import css from './Register.module.css';
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../../redux/auth/authSlice';
import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
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

    if (event.currentTarget.name === 'name') {
      setName(event.currentTarget.value);
    }
  };
  const onSubmit = event => {
    event.preventDefault();

    const formData = {
      name,
      email,
      password,
    };

    dispatch(apiRegisterUser(formData));

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
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
            onChange={handleChangeInput}
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={name}
            minLength={2}
            required
            className={css.input}
          ></input>
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
