import Login from "./Login";

export default function LoginPage() {
  return (
    <div className="relative h-screen w-screen bg-custom-dark-blue overflow-hidden">
      {/* Background Logo (blurred, semi-transparent) */}
      <img
        src="./logo-light.svg"
        alt="Background Logo"
        className="absolute -bottom-44 -right-2 min-w-[42rem] lg:-bottom-64 lg:-right-52 lg:w-[54rem] blur-[3px] opacity-10 h-auto pointer-events-none"
      />

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center h-full px-4">
        <div className="z-10 mb-8 w-full max-w-md">
          <Login />
        </div>
        <p className="text-custom-cream text-md lg:text-lg font-montserrat">
          © 2024 Way Finder Edu. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}