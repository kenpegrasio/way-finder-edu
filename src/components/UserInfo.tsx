import Login from "./Login.tsx";
import Logout from "./Logout.tsx";
import { useContext } from "react";
import { UserContext } from "../UserContextProvider.tsx";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";

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
      <>
        <div className="flex flex-col align-center justify-center text-center h-screen lg:px-96 lg:pt-12 bg-customDarkBlue">
          <div className="lg:pb-12">
            <Login />
          </div>
          <div>
            <p className="font-montserrat font-medium text-customCream lg:text-lg">
              © 2024 Way Finder Edu. All Rights Reserved.
            </p>
          </div>
        </div>
      </>
    );
  } else {
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
}

export default UserInfo;
