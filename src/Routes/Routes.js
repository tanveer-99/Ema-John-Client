import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Main from "../Layout/Main";
import Shop from '../components/Shop/Shop'
import Inventory from '../components/Inventory/Inventory'
import Orders from '../components/Orders/Orders'
import Login from '../components/Login/Login'
import { productsAndCartLoader } from "../Loaders/productsAndCartloader";
import SignUp from "../components/SignUp/SignUp";
import Shipping from "../components/Shipping/Shipping";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Shop></Shop>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/inventory',
                element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
            },
            {
                path: '/orders',
                loader: productsAndCartLoader,
                element: <Orders></Orders>
            },
            {
                path: '/shipping',
                element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])
export default router;