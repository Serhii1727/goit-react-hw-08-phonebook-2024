import { lazy } from 'react';

const Components = {
  Home: lazy(() => import('../pages/Home/Home')),
  Contacts: lazy(() => import('../pages/Contacts/Contacts')),
  Register: lazy(() => import('../pages/Register/Register')),
  Login: lazy(() => import('../pages/Login/Login')),
  ContactForm: lazy(() => import('../components/ContactForm')),
  Filter: lazy(() => import('../components/Filter')),
  ContactList: lazy(() => import('../components/ContactList/ContactList')),
  Title: lazy(() => import('../components/Title')),
  Loader: lazy(() => import('../components/Loader/Loader')),
  Error: lazy(() => import('../components/Error/Error')),
};

export default Components;
