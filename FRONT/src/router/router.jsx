import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/products";
import Login from "../pages/login";
import Register from "../pages/register";
import Admin from "../pages/admin";
import AddProduct from "../pages/admin/products/add";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/products",
        element: <Products />,
    },
    {
        path: "/admin",
        element: <Admin />,
    },
    {
        path: "/admin/add-product",
        element: <AddProduct />,
    }
])
