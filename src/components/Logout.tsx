import { googleLogout } from "@react-oauth/google";
import { useContext } from "react";
import { UserContext } from "../UserContextProvider";

function Logout() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext is not provided.");
  }

  const { setUser } = userContext;

  const handleLogout = () => {
    googleLogout();
    console.log("Log out successful");
    sessionStorage.clear();
    setUser({
        picture: "",
        name: "",
        email: ""
    });
  };

  return (
    <button
      onClick={handleLogout}
      className="font-montserrat inline-block justify-center align-center text-center text-white bg-customLightBlue border border-black rounded-3xl px-5 min-h-10 hover:bg-white hover:text-customLightBlue hover:scale-110"
    >
      Logout
    </button>
  );
}

export default Logout;
