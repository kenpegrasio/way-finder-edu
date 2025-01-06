import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { UserContext } from "../UserContextProvider";

function BookNow() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const { user } = context;

  const isUserEmpty = !user || (!user.picture && !user.name && !user.email);

  if (isUserEmpty) {
    window.location.href = '/'
  }

  return (
    <>
      <Navbar />
      <h1>Book Now</h1>
      <button className="bg-customDarkBlue text-customCream font-montserrat font-medium text-lg lg:text-2xl px-4 py-2 rounded-lg hover:bg-customCream hover:text-customDarkBlue hover:outline hover:outline-[1.5px] hover:outline-customDarkBlue transform hover:scale-105 transition-all">
        <Link to="https://api.whatsapp.com/send?phone=6287831687797">
          Chat us now
        </Link>
      </button>

      <Footer />
    </>
  );
}

export default BookNow;
