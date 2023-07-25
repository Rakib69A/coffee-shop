import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../Component/Pages/Home/Home";
import About from "../../Component/Pages/About/About";
import Contact from "../../Component/Pages/Contact/Contact";
import ErrorPage from "../../Component/Shared/ErrorPage/ErrorPage";
import Login from "../../Component/Pages/Login/Login";
import SignUp from "../../Component/Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,

        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'\home',
                element:<Home></Home>
            },
            {
                path:'\about',
                element:<About></About>
            },
            {
                path:'\contact',
                element:<Contact></Contact>
            },  
            {
                path:'\login',
                element:<Login></Login>
            },
            {
                path:'\signup',
                element:<SignUp></SignUp>
            }  
        ]
    }
])
export default router;
