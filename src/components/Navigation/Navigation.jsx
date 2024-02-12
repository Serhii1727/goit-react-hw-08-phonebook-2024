import { Link } from './Navigation.styled';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ul className={css.navList}>
      <li className={css.navItem}>
        <Link to="/">Home</Link>
      </li>
      {isLoggedIn ? (
        <li className={css.navItem}>
          <Link to="contacts">Contacts</Link>
        </li>
      ) : (
        <>
          <li className={css.navItem}>
            <Link to="login">Login</Link>
          </li>
          <li className={css.navItem}>
            <Link to="register">Register</Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Navigation;
