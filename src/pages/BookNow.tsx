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
      <div className="h-fit md:h-screen bg-customCream flex flex-col items-center justify-center py-16">
        <div className="font-montserrat text-4xl md:text-6xl text-center text-customDarkBlue font-bold mb-6">
          Contact Us on WhatsApp
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:mt-12">
          <img
          src="/logo-dark.svg"
          alt="Logo"
          className="h-32 md:h-44 mb-5 md:mr-8 md:-my-12 px-3 py-3 border-4 border-customBlack rounded-full "
          />
          <div className="font-montserrat flex flex-col justify-center items-center md:items-start">
            <div className="text-customBlack text-center md:text-left font-semibold text-3xl md:text-5xl mb-5">
              Way Finder Edu Admin
            </div>
            <button className="bg-customDarkBlue text-customCream max-w-40 font-medium text-lg lg:text-2xl px-5 rounded-lg hover:bg-customCream hover:text-customDarkBlue hover:outline hover:outline-[1.5px] hover:outline-customDarkBlue transform hover:scale-105 transition-all">
              <Link to="https://api.whatsapp.com/send?phone=6287831687797">
                Chat Now
              </Link>
            </button>
          </div>
        </div>
        
      </div>

      <Footer />
    </>
  );
}

export default BookNow;
