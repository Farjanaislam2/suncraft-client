import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../component/Home/Nav';
import Footer from '../component/Pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;