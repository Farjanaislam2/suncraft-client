import React, { useContext } from 'react';
import Nav from '../component/Home/Nav';
import { Link, Outlet } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../context/AuthProvider';

const DashboardLayout = () => {
  const {user}=useContext(AuthContext);
  const [isAdmin]=useAdmin(user?.email)


    return (
        <div>
            <Nav></Nav>
            <div className="drawer drawer-mobile bg-gray-200">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex ">

        <label htmlFor="my-drawer-2" className="mx-5 mt-2 lg:hidden"><FaBars></FaBars></label>
        <Outlet></Outlet>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     
         {
          isAdmin && <>  <li><Link to='/dashboard'>Add Home Image</Link>
          </li></>
         }
          <li><Link to='/dashboard/logoimg'>Add Logo Image</Link></li>
          <li><Link to='/dashboard/cutomerLogo'>Cutomer Logo</Link></li>
          <li><Link to='/dashboard/homeVideo'>Add Home Video</Link>
          </li>
          <li><Link to='/dashboard/tabledata'>Add Table Data</Link></li>
          <li><Link to='/dashboard/about'>AboutUs</Link></li>
          <li><Link to='/dashboard/aboutVideo'>Add About Video</Link></li>
          <li><Link to='/dashboard/consulting'>Add Consulting Data</Link></li>
          <li><Link to='/dashboard/users'>All Users</Link>
          </li>
       
         
        </ul>
      
      </div>
    </div>
        </div>
    );
};

export default DashboardLayout;