import { useContext } from "react";
import { UserContext } from "../UserContextProvider";
import LoginPage from "./LoginPage";
import UserProfile from "./UserProfile";

function Account() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const { user } = context;

  const isUserEmpty = !user || (!user.name && !user.email);

  return (
    <>
      {isUserEmpty ? <LoginPage /> : <UserProfile />}
    </>
  );
}

export default Account;
