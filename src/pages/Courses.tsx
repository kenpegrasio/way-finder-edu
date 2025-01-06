import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { UserContext } from "../UserContextProvider";

function Courses() {
  const semiPrivateCourses = [
    {
      title: "8 Meetings",
      subtitle: "2 meetings/week",
      description: "Free to choose any subjects",
    },
    {
      title: "12 Meetings",
      subtitle: "3 meetings/week",
      description: "Free to choose any subjects",
    },
    {
      title: "16 Meetings",
      subtitle: "4 meetings/week",
      description: "Free to choose any subjects",
    },
  ];

  const privateCourses = [
    {
      title: "4 Meetings",
      subtitle: "1 meetings/week",
      description: "Free to choose any subjects\nFree reschedule 1x",
    },
    {
      title: "8 Meetings",
      subtitle: "2 meetings/week",
      description: "Free to choose any subjects\nFree reschedule 2x",
    },
    {
      title: "12 Meetings",
      subtitle: "3 meetings/week",
      description: "Free to choose any subjects\nFree reschedule 3x",
    },
    {
      title: "16 Meetings",
      subtitle: "4 meetings/week",
      description: "Free to choose any subjects\nFree reschedule 4x",
    },
  ];

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
      <div className="w-full bg-customCream px-6 py-10 md:flex-row lg:py-12">
        <h1 className="text-center text-customBlack font-montserrat font-bold text-3xl pb-2 md:text-5xl lg:text-[2.5rem] lg:pb-4">
          Courses
        </h1>
        <p className="text-center text-customDarkBlue font-montserrat font-semibold text-xl pb-3 md:text-xl lg:text-4xl lg:pb-5">
          Semi-Private (2-3 students)
        </p>

        {/* Semi-Private Courses */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 pb-5 lg:gap-8 lg:px-36 lg:pb-8">
          {semiPrivateCourses.map((course, index) => (
            <div
              key={index}
              className="bg-customCream shadow-customCoursesContainer rounded-2xl py-8 lg:rounded-3xl lg:py-20 text-center"
            >
              <p className="text-customDarkBlue font-montserrat font-bold text-2xl md:text-2xl lg:text-5xl lg:-mb-1/2">
                {course.title}
              </p>
              <p className="text-customBlack font-montserrat font-semibold text-md md:text-lg lg:text-2xl lg:pb-1">
                {course.subtitle}
              </p>
              <p className="text-customBlack font-montserrat font-medium text-[0.6rem] md:text-base lg:text-md">
                {course.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center pb-12 lg:pb-36">
          <button className="bg-customDarkBlue text-customCream font-montserrat font-medium text-lg lg:text-2xl px-4 py-2 rounded-lg hover:bg-customCream hover:text-customDarkBlue hover:outline hover:outline-[1.5px] hover:outline-customDarkBlue transform hover:scale-105 transition-all">
            <Link to="/book-now">Order Now</Link>
          </button>
        </div>

        {/* Private Courses */}
        <p className="text-center text-customDarkBlue font-montserrat font-semibold text-xl pb-3 md:text-xl lg:text-4xl lg:pb-5">
          Private
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2 pb-5 lg:gap-5 lg:px-[4.5rem] lg:pb-8">
          {privateCourses.map((course, index) => (
            <div
              key={index}
              className="bg-customCream shadow-customCoursesContainer rounded-2xl py-8 lg:rounded-3xl lg:py-20 text-center"
            >
              <p className="text-customDarkBlue font-montserrat font-bold text-2xl md:text-2xl lg:text-5xl lg:-mb-1/2">
                {course.title}
              </p>
              <p className="text-customBlack font-montserrat font-semibold text-md md:text-lg lg:text-2xl lg:pb-1">
                {course.subtitle}
              </p>
              <p className="text-customBlack font-montserrat font-medium text-[0.6rem] whitespace-pre-line md:text-base lg:text-md">
                {course.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center pb-8 lg:pb-24">
          <button className="bg-customDarkBlue text-customCream font-montserrat font-medium text-lg lg:text-2xl px-4 py-2 rounded-lg hover:bg-customCream hover:text-customDarkBlue hover:outline hover:outline-[1.5px] hover:outline-customDarkBlue transform hover:scale-105 transition-all">
            <Link to="/book-now">Order Now</Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Courses;
