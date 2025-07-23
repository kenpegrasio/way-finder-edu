import { useContext } from "react";
import { UserContext } from "../UserContextProvider";

function NotFound() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const { user } = context;

  const isUserEmpty = !user || (!user.name && !user.email);

  if (isUserEmpty) {
    window.location.href = "/";
  }
  return <></>;
}

export default NotFound;
