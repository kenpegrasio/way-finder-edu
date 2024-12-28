import Login from "./Login.tsx";
import Logout from "./Logout.tsx";
import { useContext } from "react";
import { UserContext } from "../UserContextProvider.tsx";

function UserInfo() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const user = context;

  if (
    JSON.stringify(user.user) ===
    JSON.stringify({ picture: "", name: "", email: "" })
  ) {
    return (
      <div className="flex flex-col align-center justify-center text-center bg-customWhite h-fit p-24 bg-customCream">
        <h1 className="font-montserrat text-2xl font-bold">User Information</h1>
        <br />
        <p className="font-montserrat">Not registered yet</p> <br />
        <div>
          <Login />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col align-center justify-center text-center bg-customWhite h-fit p-24 bg-customCream">
        <h1 className="font-montserrat text-4xl font-bold py-5">
          User Information
        </h1>
        <div className="flex align-center justify-center m-3">
          <img
            src={user.user.picture}
            alt="User Profile"
            className="max-w-24 rounded-full"
          />
        </div>
        <p className="font-montserrat text-xl">
          <strong>Name:</strong> {user.user.name}
        </p>
        <p className="font-montserrat text-xl">
          <strong>Email:</strong> {user.user.email}
        </p>
        <br />
        <div>
          <Logout />
        </div>
      </div>
    );
  }
}

export default UserInfo;
