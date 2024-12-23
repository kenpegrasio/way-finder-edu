import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserInfo from "../components/UserInfo";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function Account() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Navbar />
      <UserInfo />
      <Footer />
    </GoogleOAuthProvider>
  );
}

export default Account;