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
      console.log("user profile: ", userProfile.id);

      const user = await axios.get(
        `https://way-finder-edu-api.vercel.app/api/user/${userProfile.id}`
      );

      console.log("user.data: ", user.data)

      if (Object.keys(user.data).length === 0) {
        await axios
          .post(`https://way-finder-edu-api.vercel.app/api/user/`, {
            name: userProfile.name,
            email: userProfile.email,
            google_id: userProfile.id,
          })
          .then((res) => {
            console.log(res.data);
            sessionStorage.setItem("user", JSON.stringify(res.data));
            setUser(res.data);
          });
      } else {
        sessionStorage.setItem("user", JSON.stringify(user.data));
        setUser(user.data);
      }
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
    <div className="flex flex-col items-center justify-center bg-customCream shadow-customLoginContainer pt-20 pb-[6.5rem] rounded-[2rem] lg:px-3 lg:pt-16 lg:pb-24 lg:rounded-[2.5rem]">
      <p className="font-montserrat font-bold text-customDarkBlue text-[2.5rem] pb-10 lg:text-[2.5rem] lg:pb-12">
        Sign In
      </p>
      <button
        onClick={handleButtonClick}
        className="flex items-center justify-center text-center text-customCream bg-customDarkBlue rounded-xl px-5 py-3 font-montserrat font-medium text-2xl lg:text-2xl transition-transform duration-100 hover:text-customDarkBlue hover:bg-customCream hover:outline hover:outline-2 hover:outline-customDarkBlue hover:scale-105"
      >
        <img src="/google-logo.svg" alt="Google" className="w-8 h-8 mr-2" />
        Sign In with Google
      </button>
    </div>
  );
}

export default Login;
