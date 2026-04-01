import { createContext, useContext, useEffect, useState } from "react";

//TODO: 사용자 로그인 상태 관리 구현
// const DEFAULT_CONTEXT_VALUE = {
//   userName: null,
//   isLoggedIn: false,
//   login: () => {},
//   logout: () => {},
// };

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const isLoggedIn = !!userName;

  const login = (user) => {
    setUserName(user.username);
  };

  const logout = () => {
    setUserName(null);
  };

  return (
    <UserContext.Provider value={{ userName, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider.");
  }
  return context;
};
