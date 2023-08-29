import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Main from "../Layout/Main";
import Login from "../component/Pages/Login/Login";
import Signup from "../component/Pages/Signup/Signup";
import Projects from "../component/Project/Projects";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import HomeImage from "../component/Pages/Dashboard/HomeImage";
import Customer from "../component/Customer/Customer";
import LogImage from "../component/Pages/Dashboard/LogImage";
import TableForm from "../component/Pages/Dashboard/TableForm";
import About from "../component/About/About";
import AboutUs from "../component/Pages/Dashboard/AboutUs";
import CustomerLogo from "../component/Pages/Dashboard/CustomerLogo";
import Consulting from "../component/Consulting/Consulting";
import AboutVideoInput from "../component/Pages/Dashboard/AboutVideoInput";
import ConsultingForm from "../component/Pages/Dashboard/ConsultingForm";
import Journey from "../component/Home/Journey";
import HomeVideoPost from "../component/Pages/Dashboard/HomeVideoPost";
import Contacts from "../component/Contact/Contacts";
import Privacy from "../component/About/Privacy";
import Capex from "../component/Project/Capex";
import Resco from "../component/Project/Resco";
import Users from "../component/Pages/Dashboard/Users";
import AdminRoute from "./AdminRoute/AdminRoute";




export const router =createBrowserRouter([
    {
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
        {
            path:'/project',
            element:<Projects></Projects>
        },
     
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/customer',
            element:<Customer></Customer>
        },
        {
            path:'/consulting',
            element:<Consulting></Consulting>
        },
        {
            path:'/journey',
            element:<Journey></Journey>
        },
       
      
        {
            path:'/contacts' ,
            element:<Contacts></Contacts>
        }, 
        {
            path:'/privacy' ,
            element:<Privacy></Privacy>
        }, 
        {
            path:'/capex' ,
            element:<Capex></Capex>
        }, 
        {
            path:'/resco' ,
            element:<Resco></Resco>
        },
    ]
    },
    {
        path:'/dashboard',
        element:<AdminRoute><DashboardLayout></DashboardLayout>
        </AdminRoute>,
        children:[
            {
                path:'/dashboard',
                element:<AdminRoute><HomeImage></HomeImage></AdminRoute>
            },
            {
                path:'/dashboard/homeVideo',
                element:<AdminRoute><HomeVideoPost></HomeVideoPost></AdminRoute>
            },
            {
                path:'/dashboard/logoimg',
                element:<AdminRoute><LogImage></LogImage></AdminRoute>
            },
            {
                path:'/dashboard/tabledata',
                element:<AdminRoute><TableForm></TableForm></AdminRoute>
            },
            {
                path:'/dashboard/about',
                element:<AdminRoute><AboutUs></AboutUs></AdminRoute>
            },
            {
                path:'/dashboard/aboutVideo',
                element:<AdminRoute><AboutVideoInput></AboutVideoInput> </AdminRoute>
            },
            {
                path:'/dashboard/cutomerLogo',
                element:<AdminRoute><CustomerLogo></CustomerLogo></AdminRoute>
            },
            {
                path:'/dashboard/consulting',
                element:<AdminRoute><ConsultingForm></ConsultingForm> </AdminRoute>
            },
            {
                path:'/dashboard/users',
                element:<AdminRoute><Users></Users></AdminRoute>
            },
        ]
    }
])