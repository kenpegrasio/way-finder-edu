import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { UserContext } from "../UserContextProvider";
import Logout from "./Logout";

function UserProfile() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const user = context;
  return (
    <>
      <Navbar />
      <div className="h-screen bg-customCream">
        <div className="flex flex-col align-center justify-center text-center bg-customWhite h-4/5 p-24">
          <h1 className="text-2xl font-bold py-5">User Information</h1>
          <div className="flex align-center justify-center m-3">
            <img
              src={user.user.picture}
              alt="User Profile"
              className="max-w-24 rounded-full"
            />
          </div>
          <p>
            <strong>Name:</strong> {user.user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.user.email}
          </p>
          <br />
          <Logout />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserProfile;
