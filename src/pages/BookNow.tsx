import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function BookNow() {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");
  if (!token) {
    navigate("/");
    return;
  }

  return (
    <>
      <Navbar />
      <div className="h-fit md:h-screen bg-custom-cream flex flex-col items-center justify-center pt-56 md:pt-32 pb-20 px-3">
        <div className="font-montserrat text-4xl md:text-6xl text-center text-custom-dark-blue font-bold mb-6">
          Contact Us on WhatsApp
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:mt-12">
          <img
            src="/logo-dark.svg"
            alt="Logo"
            className="h-32 md:h-44 mb-5 md:mr-8 md:-my-12 px-3 py-3 border-4 border-custom-black rounded-full "
          />
          <div className="font-montserrat flex flex-col justify-center items-center md:items-start">
            <div className="text-custom-black text-center md:text-left font-semibold text-3xl md:text-5xl mb-5">
              Way Finder Edu Admin
            </div>
            <button className="bg-custom-dark-blue text-custom-cream max-w-40 font-medium text-lg lg:text-2xl px-5 rounded-lg hover:bg-custom-cream hover:text-custom-dark-blue hover:outline-solid hover:outline-[1.5px] hover:outline-custom-dark-blue transform hover:scale-105 transition-all">
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
