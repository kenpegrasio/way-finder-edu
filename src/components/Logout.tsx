function Logout() {
  const handleLogout = () => {
    console.log("Log out successful");
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <button
      onClick={handleLogout}
      className="font-montserrat font-semibold text-center text-custom-cream bg-custom-dark-blue border border-custom-dark-blue text-2xl rounded-md px-3 py-1 md:rounded-lg lg:rounded-lg md:text-2xl lg:text-2xl md:px-4 lg:px-4 md:py-2 lg:py-2 hover:bg-custom-cream hover:text-custom-dark-blue hover:scale-105"
    >
      Sign Out
    </button>
  );
}

export default Logout;
