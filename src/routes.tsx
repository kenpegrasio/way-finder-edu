import App from "./App";
import Courses from "./pages/Courses";
import About from "./pages/About";

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
    }
]

export default routes;