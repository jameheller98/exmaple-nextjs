import { useAuthContext } from '../../../state/auth/AuthContext';
import styles from './AuthButton.module.css';

export type TAuthButton = {} & React.ComponentPropsWithoutRef<'button'>;

const AuthButton: React.FC<TAuthButton> = ({ className, ...buttonProps }) => {
  const { authenticated, login, logOut } = useAuthContext();
  return (
    <button
      onClick={authenticated ? logOut : login}
      className={`${styles.container} ${className} border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white w-28`}
      {...buttonProps}
    >
      {authenticated ? 'Sign Out' : 'Sign In'}
    </button>
  );
};

export default AuthButton;
