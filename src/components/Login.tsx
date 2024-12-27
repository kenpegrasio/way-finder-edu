import { useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { UserContext } from "../UserContextProvider";
import axios from "axios";
import React from "react";

function Login() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error(
      "UserContext is not provided."
    );
  }

  const { setUser } = userContext;

  const handleLoginSuccess = async (tokenResponse: {
    access_token: string;
  }) => {
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
    <button
      onClick={handleButtonClick}
      className="inline-block justify-center align-center text-center text-white bg-customLightBlue border border-black rounded-3xl px-5 min-h-10 hover:bg-white hover:text-customLightBlue hover:scale-110"
    >
      Login with Google
    </button>
  );
}

export default Login;
