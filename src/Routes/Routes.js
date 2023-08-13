import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Main from "../Layout/Main";
import Login from "../component/Pages/Login/Login";
import Signup from "../component/Pages/Signup/Signup";
import Projects from "../component/Project/Projects";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import HomeImage from "../component/Pages/Dashboard/HomeImage";
import Dashboard from "../component/Pages/Dashboard/Dashboard"
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
      
    ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<HomeImage></HomeImage>
            },
            {
                path:'/dashboard/homeVideo',
                element:<HomeVideoPost></HomeVideoPost>
            },
            {
                path:'/dashboard/logoimg',
                element:<LogImage></LogImage>
            },
            {
                path:'/dashboard/tabledata',
                element:<TableForm></TableForm>
            },
            {
                path:'/dashboard/about',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/dashboard/aboutVideo',
                element:<AboutVideoInput></AboutVideoInput>
            },
            {
                path:'/dashboard/cutomerLogo',
                element:<CustomerLogo></CustomerLogo>
            },
            {
                path:'/dashboard/consulting',
                element:<ConsultingForm></ConsultingForm>
            },
        ]
    }
])