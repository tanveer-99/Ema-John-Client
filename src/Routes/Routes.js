import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Main from "../Layout/Main";
import Shop from '../components/Shop/Shop'
import Inventory from '../components/Inventory/Inventory'
import Orders from '../components/Orders/Orders'
import Login from '../components/Login/Login'
import { productsAndCartLoader } from "../Loaders/productsAndCartloader";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => {
                    return fetch('products.json');
                },
                element: <Shop></Shop>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/inventory',
                element: <Inventory></Inventory>
            },
            {
                path: '/orders',
                loader: productsAndCartLoader,
                element: <Orders></Orders>
            }
        ]
    }
])
export default router;