//TODO: 사용자 로그인 상태 관리 구현
import { createContext, useState, useContext } from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <userContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </userContext.Provider>
  );
};
