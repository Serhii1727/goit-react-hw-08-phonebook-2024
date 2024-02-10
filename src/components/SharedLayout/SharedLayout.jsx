import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Components from 'services/lazyComponents';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink to="login" state={{ from: '/' }}>
              Login
            </NavLink>
          </li>
        </ul>
      </header>
      <Suspense fallback={<Components.Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
