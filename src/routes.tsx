import App from "./App";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Account from "./pages/Account";
import BookNow from "./pages/BookNow";
import NotFound from "./pages/NotFound";

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
    },
    {
        path: "/book-now",
        element: <BookNow />
    },
    {
        path: "*",
        element: <NotFound />
    }
]

export default routes;