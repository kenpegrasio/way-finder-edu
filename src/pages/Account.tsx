import { GoogleOAuthProvider } from "@react-oauth/google";
import { useContext } from "react";
import { UserContext } from "../UserContextProvider";
import LoginPage from "../components/LoginPage";
import UserProfile from "../components/UserProfile";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function Account() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const { user } = context;

  const isUserEmpty = !user || (!user.picture && !user.name && !user.email);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      {isUserEmpty ? <LoginPage /> : <UserProfile />}
    </GoogleOAuthProvider>
  );
}

export default Account;
