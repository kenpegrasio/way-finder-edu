import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../UserContextProvider";

function Navbar() {
  const { user } = useContext(UserContext) ?? {
    user: { name: "", email: "", picture: "" },
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const burgerClicked = () => {
    console.log("Burger is Clicked");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed z-50 w-screen flex bg-customCream justify-center md:justify-start items-center py-4 md:h-auto md:gap-4 md:pl-10 shadow-customDarkBlue">
      {user.email ? (
        <div className="flex-1 pl-3 md:hidden">
          <img src="/burger-menu.svg" alt="menu" onClick={burgerClicked} />
        </div>
      ) : (
        <></>
      )}
      <div className="flex items-center md:justify-center md:flex-none pr-5">
        <Link to="/">
          <img
            src="/logo-dark.svg"
            alt="Logo"
            className="-mt-2 h-16 w-16 mr-2 md:ml-9"
          />
        </Link>
        <h1 className="text-customDarkBlue font-montserrat font-semibold text-2xl md:text-center">
          Way Finder Edu
        </h1>
      </div>

      {user.email ? (
        <div className="hidden md:flex flex-1 items-center justify-end gap-3 md:mr-10 md:w-full md:flex-wrap md:gap-20 md:flex-row font-montserrat font-semibold text-customBlack">
          <Link to="/">
            <h3 className=" hover:underline">Home</h3>
          </Link>
          <Link to="/about">
            <h3 className=" hover:underline">About</h3>
          </Link>
          <Link to="/courses">
            <h3 className=" hover:underline">Courses</h3>
          </Link>
          <Link to="/meetings">
            <h3 className=" hover:underline">Meetings</h3>
          </Link>
          <Link to="/account" className=" hover:underline">
            <h3 className=" hover:underline">Hello, {user.name}</h3>
          </Link>
        </div>
      ) : null}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-1/2 bg-customCream z-50 flex flex-col items-end py-8 pl-7 pr-5 gap-4 shadow-lg">
          <img src="/burger-menu.svg" alt="menu" onClick={burgerClicked} className="pb-3"/>
          <Link
            to="/account"
            onClick={burgerClicked}
            className="text-end font-montserrat font-semibold text-customBlack hover:underline"
          >
            Hello, {user.name}
          </Link>
          <Link
            to="/"
            onClick={burgerClicked}
            className="font-montserrat font-semibold text-customBlack hover:underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={burgerClicked}
            className="font-montserrat font-semibold text-customBlack hover:underline"
          >
            About
          </Link>
          <Link
            to="/courses"
            onClick={burgerClicked}
            className="font-montserrat font-semibold text-customBlack hover:underline"
          >
            Courses
          </Link>
          <Link
            to="/meetings"
            onClick={burgerClicked}
            className="font-montserrat font-semibold text-customBlack hover:underline"
          >
            Meetings
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
