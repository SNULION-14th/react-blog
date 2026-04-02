import { createContext, useState, useContext } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    isLoggedIn: false,
  });

  const setLogIn = (username) => {
    setUser((prev) => ({ ...prev, username: username, isLoggedIn: true }));
  };

  const setLogOut = () => {
    setUser((prev) => ({ ...prev, username: null, isLoggedIn: false }));
  };

  const value = {
    username: user.username,
    isLoggedIn: user.isLoggedIn,
    setLogIn: setLogIn,
    setLogOut: setLogOut,
  };

  return (
    <>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
