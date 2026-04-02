//TODO: 사용자 로그인 상태 관리 구현
import { createContext, useState, useContext } from "react";

const UserContext = createContext(null);

export function LoginProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useLogin() {
  return useContext(UserContext);
}
