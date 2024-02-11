import css from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={css.userMenu}>
      <p className={css.authEmail}>mango@mail.com</p>
      <div className={css.buttonContainer}>
        <button className={css.button}>Logout</button>
      </div>
    </div>
  );
};

export default UserMenu;
