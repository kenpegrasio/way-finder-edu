import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContextProvider";

function Navbar() {
  const { user } = useContext(UserContext) ?? {
    user: { name: "", email: "", picture: "" },
  };
  return (
    <nav className="sticky z-50 top-0 flex flex-col bg-customCream items-center py-4 md:flex-row md:h-auto md:gap-4 md:pl-10 shadow-customDarkBlue">
      <div className="flex items-center md:justify-center md:flex-none">
        <Link to="/">
          <img
            src="/logo-dark.svg"
            alt="Logo"
            className="ml-9 -mt-2 h-16 w-16 mr-2 rounded-full "
          />
        </Link>
        <h1 className="text-customDarkBlue font-montserrat font-semibold text-2xl md:text-center">
          Way Finder Edu
        </h1>
      </div>

      {user.email ? (
        <div className="flex flex-col flex-1 items-center justify-end gap-3 md:mr-10 md:w-full md:flex-wrap md:gap-20 md:flex-row font-montserrat font-semibold text-customBlack">
          <Link to="/">
            <h3 className=" hover:underline">Home</h3>
          </Link>
          <Link to="/about">
            <h3 className=" hover:underline">About</h3>
          </Link>
          <Link to="/courses">
            <h3 className=" hover:underline">Courses</h3>
          </Link>
          <Link to="https://api.whatsapp.com/send?phone=6287831687797">
            <h3 className=" hover:underline">Book Now</h3>
          </Link>
          <Link to="/account" className=" hover:underline">
            <h3 className=" hover:underline">Hello, {user.name}</h3>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}

export default Navbar;
