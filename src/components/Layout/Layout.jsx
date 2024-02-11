import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Components from 'services/lazyComponents';
import css from './Layout.module.css';
import UserMenu from 'components/UserMenu';

import Navigation from 'components/Navigation';

const Layout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Navigation />
        <div className={css.userMenu}>
          <UserMenu />
        </div>
      </header>
      <Suspense fallback={<Components.Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
