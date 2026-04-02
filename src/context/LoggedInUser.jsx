import { createContext, useState } from "react";

export const LoggedInUserContext = createContext(null);

export function LoggedInUserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <LoggedInUserContext.Provider value={{ user, setUser }}>
      {children}
    </LoggedInUserContext.Provider>
  );
}
