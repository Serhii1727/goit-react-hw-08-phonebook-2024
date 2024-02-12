import { Routes, Route } from 'react-router-dom';
import SharedLayout from './Layout/Layout';
import Components from '../services/lazyComponents';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { apiRefreshUser } from '../redux/auth/authSlice';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Components.Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Components.Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute>
              <Components.Register />
            </RestrictedRoute>
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute>
              <Components.Login />
            </RestrictedRoute>
          }
        />
        <Route path="*" element={<Components.Home />} />
      </Route>
    </Routes>
  );
}
