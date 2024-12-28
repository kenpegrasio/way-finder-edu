import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky z-10 top-0 flex flex-col bg-customCream items-center py-4 md:flex-row md:h-auto md:gap-4 md:pl-10 shadow-customDarkBlue border border-red-700">
      <div className="flex items-center md:justify-center md:flex-none">
        <Link to="/">
          <img
            src="/logo-dark.svg"
            alt="Logo"
            className="md:ml-9 -mt-2 h-16 w-16 mr-2 rounded-full "
          />
        </Link>
        <h1 className="text-customDarkBlue font-montserrat font-semibold text-2xl md:text-center">Way Finder Edu</h1>
      </div>

      <div className="flex flex-col flex-1 items-center justify-end gap-3 md:mr-10 md:w-full md:flex-wrap md:gap-20 md:flex-row font-montserrat font-semibold text-customBlack">
        
      </div>
    </nav>
  );
}

export default Navbar;
