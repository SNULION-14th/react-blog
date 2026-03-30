//TODO: 사용자 로그인 상태 관리 구현
import { createContext, useState, useContext } from "react";

const DEFAULT_USER = {
  isLoggedIn: false,
  userid: null,
  username: null,
  logIn: () => {},
  logOut: () => {},
};

const UserContext = createContext(DEFAULT_USER);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userid, setUserid] = useState(null);
  const [username, setUsername] = useState(null);

  function logIn(id, username) {
    if (isLoggedIn) {
      console.log("Login failed: user is currently logged in.");
      return;
    }
    setIsLoggedIn(true);
    setUserid(id);
    setUsername(username);
    console.log(`Login success: id=${id} username=${username}.`);
  }

  function logOut() {
    if (!isLoggedIn) {
      console.log("Logout failed: user is not currently logged in.");
      return;
    }
    setIsLoggedIn(false);
    setUserid(null);
    setUsername(null);
    console.log(`Logout success.`);
  }

  return (
    <UserContext.Provider
      value={{ isLoggedIn, userid, username, logIn, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { isLoggedIn, userid, username, logIn, logOut } =
    useContext(UserContext);
  if (!logIn || !logOut) {
    throw new Error("logIn and logOut must be used within a UserProvider");
  }
  return { isLoggedIn, userid, username, logIn, logOut };
};
