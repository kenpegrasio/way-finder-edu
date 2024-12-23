import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 flex flex-col bg-customLightBlue items-center py-4 md:flex-row md:h-auto md:gap-4 md:pl-10">
      <div className="flex items-center md:justify-center md:flex-none">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 w-16 mr-4 rounded-full md:h-12 md:w-12"
          />
        </Link>
        <h1 className="text-white text-xl md:text-center">Way Finder Edu</h1>
      </div>

      <div className="flex flex-col flex-1 items-center justify-end gap-3 md:mr-10 md:w-full md:flex-wrap md:gap-20 md:flex-row">
        <Link to="/">
          <h3 className="text-white hover:underline">Home</h3>
        </Link>
        <Link to="/courses">
          <h3 className="text-white hover:underline">Courses</h3>
        </Link>
        <Link to="/about">
          <h3 className="text-white hover:underline">About</h3>
        </Link>
        <Link to="https://api.whatsapp.com/send?phone=6287831687797">
          <h3 className="text-white hover:underline">Book</h3>
        </Link>
        <Link to="/account" className="text-white hover:underline">
        <h3 className="text-white hover:underline">Account</h3>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
