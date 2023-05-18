import React from 'react';
import Nav from '../component/Home/Nav';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="drawer drawer-mobile bg-gray-200">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex ">

        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet></Outlet>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">

          <li><Link to='/dashboard'>Add Home Image</Link>
          </li>
          <li><Link to='/dashboard/logoimg'>Add Logo Image</Link></li>
          <li><Link to='/dashboard/tabledata'>Add Table Data</Link></li>
          <li><Link to='/dashboard/about'>AboutUs</Link></li>
        </ul>
      
      </div>
    </div>
        </div>
    );
};

export default DashboardLayout;