import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navbar0 from "./components/Navbar0";
import Footer from "./components/Footer";
import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

const subjects = [
  {
    id: 0,
    name: "Mathematics",
    description:
      "Exponential, absolute, &  composition function, trigonometry, circles, 3D shape, probability, polynomials, binomial & normal distribution, etc.",
  },
  {
    id: 1,
    name: "Physics",
    description:
      "Kinematics, rotation, thermodynamics, fluids, elasticity, waves, optics, electricity, magnetism field, relativity theory, quantum physics, etc.",
  },
  {
    id: 2,
    name: "Chemistry",
    description:
      "Stoichiometry, electrochemistry, hydrocarbons & its derivatives, thermochemistry, equilibrium, acid-base, redox reactions, etc.",
  },
  {
    id: 3,
    name: "Informatics",
    description: "Data types, base number, looping, array, string, etc.",
  },
];

const facilities = [
  {
    id: 0,
    description: "Recorded sessions",
    image: "/video-icon.svg",
  },
  {
    id: 1,
    description: "High-quality practice papers",
    image: "/paper-icon.svg",
  },
  {
    id: 2,
    description: "All materials are provided",
    image: "/file-icon.svg",
  },
  {
    id: 3,
    description: "Free consultation via WhatsApp",
    image: "/chat-icon.svg",
  },
];

function App() {
  const { user } = useContext(UserContext) ?? { user: { email: "", name: "" } };

  return (
    <>
      {!user.email ? <Navbar0 /> : <Navbar />}
      <div className="relative flex flex-col w-380 h-256 pl-8 bg-customCream items-center justify-center md:flex-row -mt-2">
        <div className="absolute left-0 z-10 text-left md:flex-1 pl-20 mb-6">
          <h1 className="font-bold font-montserrat text-left text-8xl text-customDarkBlue -mt-5">
            Elevate your<br />
            <span className="block -mt-5">academics</span>
          </h1>
          <p className="font-medium font-montserrat text-left text-3xl text-customBlack leading-8 mt-1">
            Take your learning to the next level with<br />in-depth resources, expert guidance, and<br />strategies to achieve academic excellence.
          </p>
          <br />
          {!user.email ? (
            <button className="inline-block justify-center align-center text-center text-customCream bg-customDarkBlue rounded-xl px-4 pt-2 pb-2 hover:bg-transparent hover:outline hover:outline-customDarkBlue hover:outline-1 hover:text-customDarkBlue hover:scale-105 font-montserrat font-semibold text-xl">
              <Link to="/account">Sign In</Link>
            </button>
          ) : (
            <button className="inline-block justify-center align-center text-center text-customCream bg-customDarkBlue rounded-xl px-4 pt-2 pb-2 hover:bg-transparent hover:outline hover:outline-customDarkBlue hover:outline-1 hover:text-customDarkBlue hover:scale-105 font-montserrat font-semibold text-xl">
              <Link to="/courses">Get Started</Link>
            </button>
          )}
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-[2] lg:h-full">
          <img src="./cover.png" className="object-fill" style={{ height: '512px' }} />
        </div>
      </div>

      {/* After Login */}
      {user.email && (
        <>
          <div className="flex flex-col items-center justify-center bg-customDarkBlue">
            <h1 className="font-bold font-montserrat text-customCream text-5xl text-center mt-48 mb-4 pb-4">
              What Do We Teach?
            </h1>
            <div className="grid grid-cols-2 gap-8 pt-6 mb-40 w-90 mx-auto pl-20 pr-14">
              {subjects.map((subject) => {
                return (
                  <div
                    key={subject.id}
                    className="flex flex-col w-full my-5 mx-2 justify-center align-center text-left">
                    <h1 className="font-montserrat font-semibold text-3xl text-customCream mb-2">{subject.name}</h1>
                    <p className="font-montserrat font-medium text-lg text-customCream">{subject.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center bg-customCream py-20">
            <h1 className="font-bold font-montserrat text-customDarkBlue text-5xl text-center mt-12 mb-6">
              Facilities
            </h1>
            <div className="grid grid-cols-2 gap-x-24 gap-y-10 w-90 mx-auto mt-6 mb-16">
              {facilities.map((facility) => (
                <div
                  key={facility.id}
                  className="flex flex-col items-center px-4 text-center">
                  <img
                    src={facility.image}
                    className="w-20 h-20 rounded-md mb-2"
                  />
                  <p className="text-customBlack font-montserrat font-medium text-2xl mb-2">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
