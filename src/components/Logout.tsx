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
      className="font-montserrat font-semibold text-center text-customCream bg-customDarkBlue border border-customDarkBlue text-2xl rounded-md px-3 py-1 md:rounded-lg lg:rounded-lg md:text-2xl lg:text-2xl md:px-4 lg:px-4 md:py-2 lg:py-2 hover:bg-customCream hover:text-customDarkBlue hover:scale-105"
    >
      Sign Out
    </button>
  );
}

export default Logout;
