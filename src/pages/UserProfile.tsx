import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { UserContext } from "../UserContextProvider";
import Logout from "../components/Logout";

function UserProfile() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const user = context;
  
  return (
    <>
      <Navbar />
      <div className="pt-10 md:pt-20 h-screen bg-custom-cream">
        <div className="flex flex-col md:flex-row lg:flex-col-2 align-center justify-center text-center bg-customWhite py-48 px-6 md:py-36 md:px-24 lg:py-36 lg:px-24">
          <div className="flex align-center justify-center pb-3 md:pr-8 lg:pb-0 lg:pr-8">
            <img
              src={'./user_profile_template.svg'}
              alt="User Profile"
              className="border-custom-dark-blue border-2 p-3 h-28 w-28 md:h-48 md:w-48 md:border-4 lg:border-4 rounded-full"
            />
          </div>
          <div className="flex flex-col align-center justify-center text-center md:text-left lg:text-left">
            <p className="font-bold font-montserrat text-custom-black text-5xl pb-1 lg:pb-1/2 md:text-[2.75rem] lg:text-[2.75rem]">{user.user.name}</p>
            <p className="font-semibold font-montserrat text-custom-dark-blue text-[1.15rem] md:text-3xl lg:text-3xl">{user.user.email}</p>
            <br />
            <div className="-mt-2 lg:-mt-1">
              <Logout />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserProfile;
