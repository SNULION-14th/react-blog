import { createContext, useState, useContext } from "react";

const DEFAULT_LOG_IN = {
  isLoggedIn: false,
  userid: null,
  username: null,
  logIn: () => {},
  logOut: () => {},
};

const LogInContext = createContext(DEFAULT_LOG_IN);

export const LogInProvider = ({ children }) => {
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
    <LogInContext.Provider
      value={{ isLoggedIn, userid, username, logIn, logOut }}
    >
      {children}
    </LogInContext.Provider>
  );
};

export const useLogIn = () => {
  const { isLoggedIn, userid, username, logIn, logOut } =
    useContext(LogInContext);
  if (!logIn || !logOut) {
    throw new Error("logIn and logOut must be used within a LogInProvider");
  }
  return { isLoggedIn, userid, username, logIn, logOut };
};
