import { Link } from './Navigation.styled';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={css.navList}>
      <li className={css.navItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={css.navItem}>
        <Link to="login">Login</Link>
      </li>
      <li className={css.navItem}>
        <Link to="register">Register</Link>
      </li>
    </ul>
  );
};

export default Navigation;
