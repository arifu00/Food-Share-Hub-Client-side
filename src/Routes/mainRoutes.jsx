import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

const mainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                // path: '/',
                element: <Home></Home>,
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'registration',
                element: <Registration></Registration>,
            }
        ],
    },
]);

export default mainRoutes;