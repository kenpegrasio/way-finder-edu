import { useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { UserContext } from "../UserContextProvider";
import axios from "axios";
import React from "react";

function Login() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext is not provided.");
  }

  const { setUser } = userContext;

  const handleLoginSuccess = async (tokenResponse: { access_token: string }) => {
    console.log("Login Success!", tokenResponse);
    try {
      const { data: userProfile } = await axios.get(
        "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        }
      );
      console.log(userProfile);

      sessionStorage.setItem("user", JSON.stringify(userProfile));
      setUser(userProfile);
    } catch (error) {
      console.error("Failed to fetch user profile", error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: (error) => {
      console.error("Login Failed", error);
    },
  });

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    login();
  };

  return (
    <div className="flex flex-col items-center justify-center bg-customCream  lg:px-3 lg:py-16 lg:pb-24 lg:rounded-[2.5rem]">
      <p className="text-lg font-montserrat font-bold text-customDarkBlue lg:text-[2.5rem] lg:pb-12">
        Sign In
      </p>
      <button
        onClick={handleButtonClick}
        className="flex items-center justify-center text-center text-customCream bg-customDarkBlue rounded-xl px-5 py-3 font-montserrat font-medium lg:text-2xl transition-transform duration-100 hover:text-customDarkBlue hover:bg-customCream hover:outline hover:outline-2 hover:outline-customDarkBlue hover:scale-105"
      >
        <img
          src="/google-logo.svg"
          alt="Google"
          className="w-8 h-8 mr-2"
        />
        Sign In with Google
      </button>
    </div>
  );  
}

export default Login;
