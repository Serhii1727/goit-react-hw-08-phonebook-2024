import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectUserData,
} from '../../redux/auth/selectorsAuth';
import { apiLogOutUser } from '../../redux/auth/authSlice';

const UserMenu = () => {
  const isLoading = useSelector(selectIsLoading);
  const { email } = useSelector(selectUserData);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(apiLogOutUser());
  };

  return (
    <>
      <p className={css.authEmail}>{email}</p>
      <div className={css.buttonContainer}>
        <button
          onClick={handleLogOut}
          disabled={isLoading}
          type="button"
          className={css.button}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default UserMenu;
