import Login from "./Login";

function LoginPage() {
  return (
    <>
      <div className="relative h-screen overflow-hidden bg-customDarkBlue">
        <img
          src="./logo-light.svg"
          className="absolute -bottom-64 -right-52 w-[54rem] blur-[3px] opacity-10 h-auto"
        />
        <div className="flex flex-col align-center justify-center text-center h-screen lg:px-96 lg:pt-12">
          <div className="lg:pb-12">
            <Login />
          </div>
          <div>
            <p className="font-montserrat font-medium text-customCream lg:text-lg">
              © 2024 Way Finder Edu. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;