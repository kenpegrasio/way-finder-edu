import React, { createContext, useState, useEffect, ReactNode } from "react";

interface User {
  picture: string;
  name: string;
  email: string;
}

export const UserContext = createContext<{
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
} | null>(null);

interface UserContextProviderProps {
  children: ReactNode;
}

function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User>({
    picture: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    console.log("Stored User", storedUser);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
