import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { UserContext } from "../UserContextProvider";

function About() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const { user } = context;

  const isUserEmpty = !user || (!user.name && !user.email);

  if (isUserEmpty) {
    window.location.href = "/";
  }

  const text = "Welcome to\nWay Finder Edu";
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center pt-32 pb-8 px-10 md:pt-40 bg-custom-cream">
        <img
          src="/logo-dark.svg"
          alt="Logo"
          className="h-128 w-auto mx-5 -my-28 -mb-32"
        />
        <div className="flex flex-col items-start justify-center text-left">
          <div className="font-montserrat leading-tight text-custom-dark-blue text-5xl md:text-7xl font-bold py-3 md:pe-28 whitespace-pre-line">
            {text}
          </div>
          <div className="font-montserrat text-custom-black text-xl md:text-3xl font-medium pt-2 pb-12 md:pe-28">
            Way Finder Edu is an online tutoring institution that
            provides various classes for high school level Mathematics,
            Physics, Chemistry and Informatics subjects. All of our
            classes are held online, with accomplished teachers.
          </div>
        </div>
      </div>
      <div className="bg-custom-dark-blue h-fit md:h-screen py-20 flex flex-col items-center justify-center">
        <div className="text-3xl md:text-4xl font-bold font-montserrat text-custom-cream text-center">
          Vision
        </div>
        <div className="text-left text-md md:text-xl font-montserrat text-custom-cream px-8 py-5 md:px-60">
          "To be an agent of change in Indonesian education by inspiring
          children to love science and learn happily. Therefore, they
          become creative, open-minded individuals, who are ready to face
          future challenges." 
        </div>
        <div className="text-3xl md:text-4xl font-bold font-montserrat text-custom-cream text-center pt-8 md:pt-16">
          Mission
        </div>
        <div className="text-md md:text-xl font-montserrat text-custom-cream pt-5 pl-12 pr-8 md:pl-64 md:pr-60">
          <ol className="list-decimal">
            <li>
              Presenting teachers who are experienced, highly qualified and
              accomplished in their respective fields to provide quality learning.
            </li>
            <li>
              Providing learning programs that are fun, interactive and relevant to
              students' needs to increase interest in learning and understanding of concepts.
            </li>
            <li>
              Providing inclusive classes while paying attention to the diversity of students,
              and as a result each individual can feel valued and motivated.
            </li>
          </ol>
        </div>
      </div>
      {/* <div className="bg-custom-cream h-screen flex flex-col items-center justify-center">
        <div className="font-montserrat font-bold text-6xl text-center text-custom-black">
          Our Team
        </div>
        <div className="font-montserrat text-4xl text-center text-custom-black py-32">
          (Coming Soon)
        </div>
      </div> */}
      <Footer />
    </>
  );
}

export default About;
