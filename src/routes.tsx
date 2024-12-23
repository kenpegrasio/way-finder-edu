import App from "./App";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Account from "./pages/Account";

const routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/courses",
        element: <Courses />
    }, 
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/account",
        element: <Account />
    }
]

export default routes;