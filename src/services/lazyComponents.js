import { lazy } from 'react';

const Components = {
  Home: lazy(() => import('../components/Home/Home')),
  Contacts: lazy(() => import('../components/Contacts/Contacts')),
  Register: lazy(() => import('../components/Register')),
  Login: lazy(() => import('../components/Login/Login')),
  ContactForm: lazy(() => import('../components/ContactForm')),
  Filter: lazy(() => import('../components/Filter')),
  ContactList: lazy(() => import('../components/ContactList/ContactList')),
  Title: lazy(() => import('../components/Title')),
  Loader: lazy(() => import('../components/Loader/Loader')),
  Error: lazy(() => import('../components/Error/Error')),
};

export default Components;
