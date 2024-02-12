import { NavLink } from 'react-router-dom';
import css from './Home.module.css';
import image from '../../services/images/mobile-app-go.webp';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <main>
      <section className={css.mainSection}>
        <h1 className={css.title}>Welcome to Phonebook</h1>
        <p className={css.description}>
          your comprehensive solution for convenient organization of contacts
          and access to them, say goodbye to flipping through traditional phone
          books and hello to the convenience of a digital companion that's
          always with you
        </p>
        {!isLoggedIn && (
          <div className={css.buttonContainer}>
            <NavLink to="login">
              <button type="button" className={css.button}>
                Get started
              </button>
            </NavLink>
          </div>
        )}

        <img className={css.image} src={image} alt="Phonebook app" />
      </section>
    </main>
  );
};

export default Home;
