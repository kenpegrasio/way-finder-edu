import Login from "./Login";

function LoginPage() {
  return (
    <div className="flex flex-col align-center justify-center text-center h-screen lg:px-96 lg:pt-12 bg-customDarkBlue">
      <div className="lg:pb-12">
        <Login />
      </div>
      <div>
        <p className="font-montserrat font-medium text-customCream lg:text-lg">
          © 2024 Way Finder Edu. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
