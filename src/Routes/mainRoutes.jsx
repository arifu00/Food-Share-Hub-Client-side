import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import PrivateRoute from "../Provider/PrivateRoute";
import FoodDetail from "../Pages/FoodDetail/FoodDetail";
import ManageDetail from "../Pages/ManageMyFoods/ManageDetail";
import Update from "../Pages/ManageMyFoods/Update";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        // path: '/',
        element: <Home></Home>,
      },
      {
        path: "availableFoods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "food/:id",
        element: (
          <PrivateRoute>
            <FoodDetail></FoodDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://food-share-hub-server-seven.vercel.app/food/${params.id}`),
      },
      {
        path: "addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "manageMyFoods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "manageMyFood/:id",
        element: (
          <PrivateRoute>
            <ManageDetail></ManageDetail>
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://food-share-hub-server-seven.vercel.app/update/${params.id}`),
      },
      {
        path: "myFoodRequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default mainRoutes;
