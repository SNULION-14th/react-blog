//TODO: 사용자 로그인 상태 관리 구현
import { createContext, useState, useContext } from "react";

const LoggedInContext = createContext();

export const LoggedInProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <LoggedInContext.Provider
      value={{ user, isLoggedIn: !!user, login, logout }}
    >
      {children}
    </LoggedInContext.Provider>
  );
};

export const useLoggedIn = () => useContext(LoggedInContext);
