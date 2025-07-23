import LoginPage from "./LoginPage";
import UserProfile from "./UserProfile";

function Account() {
  const logged_in = sessionStorage.getItem("user");
  return (
    <>
      {!logged_in ? <LoginPage /> : <UserProfile />}
    </>
  );
}

export default Account;
