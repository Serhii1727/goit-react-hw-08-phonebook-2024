import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Components from 'services/lazyComponents';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink to="login">Login</NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink to="register">Register</NavLink>
          </li>

          <li className={css.navItem}>
            <NavLink to="contacts">Contacts</NavLink>
          </li>
        </ul>
      </header>
      <Suspense fallback={<Components.Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
