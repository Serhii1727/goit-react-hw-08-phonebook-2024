import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
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
      {isLoading ? <Components.Loader /> : <Components.ContactList />}
      {error && <Components.Error />}
    </div>
  );
};

export default Contacts;
