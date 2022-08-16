import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

interface IAuthContext {
  authenticated: boolean;
  login: () => void;
  logOut: () => void;
}

const defautValue: IAuthContext = {
  authenticated: false,
  login: () => undefined,
  logOut: () => undefined,
};

const AuthContext = createContext<IAuthContext>(defautValue);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(defautValue.authenticated);

  const value = useMemo(() => {
    const login = () => {
      setAuthenticated(true);
    };

    const logOut = () => {
      setAuthenticated(false);
    };

    return { authenticated, login, logOut };
  }, [authenticated]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
