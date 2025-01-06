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
      <h1 className="text-blue-800">About</h1>
      <Footer />
    </>
  );
}

export default About;
