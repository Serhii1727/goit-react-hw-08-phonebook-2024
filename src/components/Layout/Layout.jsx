import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Components from 'services/lazyComponents';
import css from './Layout.module.css';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';

import Navigation from 'components/Navigation';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Navigation />
        <div className={css.userMenu}>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <div className={css.nameAppContainer}>
              <p className={css.title}>Phonebook App</p>
            </div>
          )}
        </div>
      </header>
      <Suspense fallback={<Components.Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
