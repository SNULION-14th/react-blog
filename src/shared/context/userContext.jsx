//TODO: 사용자 로그인 상태 관리 구현
<<<<<<< HEAD
import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const toggleUser = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <UserContext.Provider value={{ user, toggleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
=======
>>>>>>> 8bd667ae521a4b890bfdc16c768f0f1e683d7f2a
