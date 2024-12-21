import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const subjects = [
  {
    "id": 0,
    "name": "Compulsory Math",
    "path": "/compulsory-math.png",
    "description": "Exponential function, absolute function, composition function, trigonometry, circles, 3D shape, probability, etc."
  }, 
  {
    "id": 1, 
    "name": "Physics",
    "path": "/physics.png",
    "description": "Kinematics, rotation, thermodynamics, fluids, waves, optics, electricity, magnetism field, etc."
  },
  {
    "id": 2, 
    "name": "Chemistry",
    "path": "/chemistry.png",
    "description": "Stoichiometry, electrochemistry, hydrocarbons & its derivatives, thermochemistry, equilibrium, acid-base, redox reactions, etc."
  },
  {
    "id": 3,
    "name": "Informatics",
    "path": "/informatics.png",
    "description": "Data types, base number, looping, array, string, etc."
  },
  {
    "id": 4,
    "name": "Elective Math",
    "path": "/elective-math.png",
    "description": "Polynomial, Binomial Distribution, Normal Distribution"
  }
]

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col h-72 bg-customCream items-center justify-center md:flex-row">
        <div className="text-center p-5 md:flex-1">
          <h1 className="font-bold text-xl pb-1">About Us</h1>
          <p>
            📚 Online tutors for senior high student! <br />
            ✨ Personalized Lessons & Expert Guidances <br />
            🔥 Take your learning to the next level with in-depth resources,{" "}
            <br />
            expert guidance, and strategies <br />
            to achieve academic excellence
          </p>
          <br />
          <button className="inline-block justify-center align-center text-center text-white bg-customLightBlue border border-black rounded-3xl px-5 min-h-10 hover:bg-white hover:text-customLightBlue hover:scale-110">
            <Link to="/about">More About Us</Link>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-[2] lg:h-full">
          <img
            src="./side-picture-2.png"
            className="h-full w-full object-fill"
          />
        </div>
      </div>
      <div className="flex items-center justify-center bg-customCream h-fit">
        <div className="hidden md:block md:text-center md:flex-1 md:p-5">
          <h1 className="font-bold text-xl pb-1">What Do We Teach?</h1>
          <br />
          <p>
            We teach critical thinking and apply adaptive learning. <br />
            🧮 Matematika <br />
            ⚛️ Fisika <br />
            🧪 Kimia <br />
            💻 Informatika <br />
          </p>
          <br />
          <button className="inline-block justify-center align-center text-center text-white bg-customLightBlue border border-black rounded-3xl px-5 min-h-10 hover:bg-white hover:text-customLightBlue hover:scale-110">
            <Link to="/about">More About Us</Link>
          </button>
        </div>
        <div className="flex-[2] flex items-center justify-center flex-wrap pt-6 mb-7">
          {subjects.map((subject) => {
            return (
              <div key={subject.id} className="flex flex-col h-fit w-72 my-10 mx-5 justify-center align-center text-center">
                <h1 className="text-lg font-bold">{subject.name}</h1>
                <img src={subject.path} className="h-64 w-auto my-2 text-center"/>
                <p>{subject.description}</p>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
