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

  const isUserEmpty = !user || (!user.picture && !user.name && !user.email);

  if (isUserEmpty) {
    window.location.href = "/";
  }
  return (
    <>
      <Navbar />
      <div className="flex flex-row items-center px-10 bg-customCream h-screen">
        <img
          src="/logo-dark.svg"
          alt="Logo"
          className="size-4/5 mx-5"
        />
        <div className="flex flex-col items-center justify-center">
          <div className="font-montserrat leading-tight text-customDarkBlue text-7xl font-bold py-3 pe-28">
            Welcome to Way Finder Edu
          </div>
          <div className="font-montserrat text-customBlack text-3xl font-medium pt-2 pe-28">
            Way Finder Edu is an online tutoring institution that
            provides various classes for high school level Mathematics,
            Physics, Chemistry and Informatics subjects. All of our
            classes are held online, with accomplished teachers.
          </div>
        </div>
      </div>
      <div className="bg-customDarkBlue h-screen flex flex-col items-center justify-center">
        <div className="text-4xl font-bold font-montserrat text-customCream text-center">
          Vision
        </div>
        <div className="text-1xl font-montserrat text-customCream py-5 ps-60 pe-60">
          "To be an agent of change in Indonesian education by inspiring
          children to love science and learn happily. Therefore, they
          become creative, open-minded individuals, who are ready to face
          future challenges." 
        </div>
        <div className="text-4xl font-bold font-montserrat text-customCream text-center pt-16">
          Mission
        </div>
        <div className="text-1xl font-montserrat text-customCream pt-5 ps-64 pe-60">
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
      {/* <div className="bg-customCream h-screen flex flex-col items-center justify-center">
        <div className="font-montserrat font-bold text-6xl text-center text-customBlack">
          Our Team
        </div>
        <div className="font-montserrat text-4xl text-center text-customBlack py-32">
          (Coming Soon)
        </div>
      </div> */}
      <Footer />
    </>
  );
}

export default About;
