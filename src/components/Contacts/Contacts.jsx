import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';
import Components from 'services/lazyComponents';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Components.Title title="Phonebook" />
      <Components.ContactForm />
      <Components.Title title="Contacts" />
      <Components.Filter />
      {isLoading && <Components.Loader />}
      {error ? <Components.Error /> : <Components.ContactList />}{' '}
    </div>
  );
};

export default Contacts;
