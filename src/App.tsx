import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const subjects = [
  {
    id: 0,
    name: "Mathematics",
    description:
      "Exponential, absolute, & composition function, trigonometry, circles, 3D shape, probability, polynomials, binomial & normal distribution, etc.",
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
  const logged_in = sessionStorage.getItem("user");
  var user;
  if (!logged_in) {
    user = { name: "", email: "", picture: "" };
  } else {
    user = JSON.parse(logged_in);
  }

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="pt-24 md:pt-20 flex flex-col w-full bg-custom-cream md:flex-row">
        <div className="text-left w-full px-6 py-6 mt-0 md:py-16 lg:-mx-3 lg:px-24 lg:pr-12 text-custom-dark-blue flex-1 ">
          <h1 className="font-bold font-montserrat text-6xl md:text-9xl lg:text-7xl leading-20 pt-4  ">
            <span className="block lg:whitespace-nowrap lg:inline">Elevate your</span>
            <span className="block lg:mt-2">academics</span>
          </h1>

          {/* For Desktop only */}
          <p className="hidden font-medium font-montserrat text-lg md:text-2xl lg:text-3xl lg:max-w-144 text-custom-black mt-4 md:block leading-9">
            Take your learning to the next level with in-depth resources, expert
            guidance, and strategies to achieve academic excellence.
          </p>
          <br className="hidden md:block" />
          <div className="hidden md:block">
            {!user.email ? (
              <button className="inline-block text-custom-cream bg-custom-dark-blue rounded-xl px-4 py-2 hover:bg-transparent hover:outline-solid hover:outline-custom-dark-blue hover:text-custom-dark-blue hover:scale-105 font-montserrat font-semibold md:text-lg lg:text-[1.3rem] lg:-mt-1">
                <Link to="/account">Sign In</Link>
              </button>
            ) : (
              <button className="inline-block text-custom-cream bg-custom-dark-blue rounded-xl px-4 py-2 hover:bg-transparent hover:outline-solid hover:outline-custom-dark-blue hover:text-custom-dark-blue hover:scale-105 font-montserrat font-semibold md:text-lg lg:text-[1.3rem] lg:-mt-1">
                <Link to="/courses">Get Started</Link>
              </button>
            )}
          </div>
        </div>

        {/* Image Content */}
        <img
          src="./cover.png"
          className="flex-2 max-h-144 object-cover"
          alt="Cover"
        />

        {/* Text Content */}
        <div className="md:hidden text-left w-full px-6 pt-2 pb-8 md:py-0 lg:-mx-3 lg:-mt-2 text-custom-dark-blue">
          <p className="font-medium font-montserrat text-lg md:text-2xl lg:text-3xl lg:max-w-144 text-custom-black mt-4">
            Take your learning to the next level with in-depth resources, expert
            guidance, and strategies to achieve academic excellence.
          </p>
          <br />
          {!user.email ? (
            <button className="inline-block text-custom-cream bg-custom-dark-blue rounded-xl px-4 py-2 hover:bg-transparent hover:outline-solid hover:outline-custom-dark-blue hover:text-custom-dark-blue hover:scale-105 font-montserrat font-semibold md:text-lg lg:text-[1.3rem] lg:-mt-1">
              <Link to="/account">Sign In</Link>
            </button>
          ) : (
            <button className="inline-block text-custom-cream bg-custom-dark-blue rounded-xl px-4 py-2 hover:bg-transparent hover:outline-solid hover:outline-custom-dark-blue hover:text-custom-dark-blue hover:scale-105 font-montserrat font-semibold md:text-lg lg:text-[1.3rem] lg:-mt-1">
              <Link to="/courses">Get Started</Link>
            </button>
          )}
        </div>
      </div>

      {/* After Login */}
      {user.email && (
        <>
          {/* Subjects Section */}
          <div className="flex flex-col items-center justify-center bg-custom-dark-blue py-12 lg:py-20">
            <h1 className="font-bold font-montserrat text-custom-cream text-3xl md:text-4xl lg:text-5xl text-center mb-8">
              What Do We Teach?
            </h1>
            <div className="grid grid-cols-1 gap-6 px-6 py-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-12 lg:px-24 lg:py-6 w-full max-w-7xl">
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  className="flex flex-col text-left"
                >
                  <h1 className="font-montserrat font-semibold text-xl md:text-2xl lg:text-3xl text-custom-cream mb-2">
                    {subject.name}
                  </h1>
                  <p className="font-montserrat font-medium text-sm md:text-base lg:text-lg text-custom-cream">
                    {subject.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities Section */}
          <div className="flex flex-col items-center justify-center bg-custom-cream py-12 lg:py-20">
            <h1 className="font-bold font-montserrat text-custom-dark-blue text-3xl md:text-4xl lg:text-5xl text-center mb-8">
              Facilities
            </h1>
            <div className="grid grid-cols-1 gap-8 px-6 py-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-12 lg:py-6 w-full max-w-7xl">
              {facilities.map((facility) => (
                <div
                  key={facility.id}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={facility.image}
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4"
                    alt={facility.description}
                  />
                  <p className="font-montserrat font-medium text-lg lg:text-xl text-custom-black">
                    {facility.description}
                  </p>
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
