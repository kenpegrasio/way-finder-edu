import React, { createContext, useState, useEffect, ReactNode } from "react";

interface User {
  name: string;
  username: string;
  email: string;
  accesstype: string;
  school: string;
  phone_number: string;
  gender: string;
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
    name: "",
    username: "",
    email: "",
    accesstype: "",
    school: "",
    phone_number: "",
    gender: ""
  });

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
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
