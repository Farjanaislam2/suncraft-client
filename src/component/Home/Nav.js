import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from "../images/suncraft.png";
import { AuthContext } from '../../context/AuthProvider';

const Nav = () => {
    const {user,logOut} =useContext(AuthContext);

    const handleLogout=()=>{
        logOut()
        .then(()=>{})
        .catch(err => console.log(err));
    }

    const menuItems = <>
        <li>
            <a>Home</a>
        </li>


        {/* <li tabIndex={0}>
            <a className="justify-between">
                Buisness
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
            </a>
            <ul className="p-2">
                <li>
                    <a>Design & Drawing</a>
                </li>


                <li tabIndex={0}>
                    <a>Renewable Energy Projects
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                    </a>
                    <ul className="p-2">
                        <li>
                            <a>CAPEX-EPC</a>
                        </li>
                        <li>
                            <a>RESCO-BOOT</a>
                        </li>
                    </ul>
                </li>

                <li tabIndex={0}>
                    <a>Renewable Energy Products
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                    </a>
                    <ul className="p-2">
                        <li>
                            <a>CAPEX-EPC</a>
                        </li>
                        <li>
                            <a>RESCO-BOOT</a>
                        </li>
                    </ul>
                </li>


            </ul>
        </li> */}
        {/* <li>
            <a>Buisness</a>
        </li> */}
        <li>
            <a>Buy Project From Us</a>
        </li>


    </>
    return (
        <div
         className="navbar bg-gray-100 px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0}
                        className="btn btn-ghost ">
                        <image src={img} alt="#"/>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className='text-lg'>Home</a>
                        </li>
                        <li>
                        <a className='text-lg'>About Us</a>
                    </li>
                    <li>
                        <a className='text-lg'>Consulting</a>
                    </li>
                    <li>
                        <a className='text-lg'>Projects</a>
                    </li>
                    <li>
                        <a className='text-lg'>Products</a>
                    </li>
                    <li>
                        <a className='text-lg'>Productive Load Applications</a>
                    </li>
                    <li>
                        <a className='text-lg'>Investment Opportunitoes</a>
                    </li>
                    <li>
                        <a className='text-lg'>Contact Us</a>
                    </li>
                    <li>
                        <a className='text-lg'>Work With Us</a>
                    </li>
                        {/* <li tabIndex={0}>
                        <a>
                            Buisness
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-slate-50">
                            <li>
                                <a>Design & Drawing</a>
                            </li>
                            <li className="dropdown  dropdown-right">
                              

                              
  <label tabIndex={0} className="btn  bg-slate-50  border-none hover:bg-slate-50">Renewable Energy Projects</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 rounded-box w-52 bg-slate-50">
 
                        <li>
                            <a>CAPEX-EPC</a>
                        </li>
                        <li>
                            <a>RESCO-BOOT</a>
                        </li>
                    
  </ul>

                            </li>

                            <li>
                                <a>Renewable Energy Products</a>
                            </li>
                        </ul>
                    </li> */}
                       
                    </ul>
                </div>
                <image className='' src={img} alt="#"/>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 py-1">
                    <li>
                        <Link className='text-lg' to="/">Home</Link>
                       
                    </li>
                    <li>
                        <a className='text-lg'>About Us</a>
                    </li>
                    <li>
                       <Link className='text-lg' to='/login'>Consulting</Link> 
                    </li>
                    <li>
                        <a className='text-lg'>Projects</a>
                    </li>
                    <li>
                        <a className='text-lg'>Products</a>
                    </li>
                    <li>
                        <a className='text-lg w-[180px]'>Productive Load Applications</a>
                    </li>
                    <li>
                        <a className='text-lg w-[120px]'>Investment Opportunities</a>
                    </li>
                    <li>
                        <a className='text-lg'>Contact Us</a>
                    </li>
                    <li>
                        <a className='text-lg'>Work With Us</a>
                    </li>
                  
                    {/* <li tabIndex={0}>
                        <a className='text-lg'>
                            Buisness
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-slate-50">
                            <li>
                                <a>Design & Drawing</a>
                            </li>
                            <li className="dropdown  dropdown-right">
                              

                              
  <label tabIndex={0} className="btn  bg-slate-50  border-none hover:bg-slate-50">Renewable Energy Projects</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 rounded-box w-52 bg-slate-50">
 
                        <li>
                            <a>CAPEX-EPC</a>
                        </li>
                        <li>
                            <a>RESCO-BOOT</a>
                        </li>
                    
  </ul>

                            </li>

                            <li>
                                <a>Renewable Energy Products</a>
                            </li>
                        </ul>
                    </li> */}
                    
                </ul>
            </div>
            
            <div className="navbar-end">
               {
                user?.uid?
                <>
                
                <ul><Link className='mx-2 text-lg' to ="/dashboard">Dashboard</Link>
                </ul>
                 <button onClick={handleLogout} className='bg-slate-300 px-3 font-medium rounded-md  py-3'>
                 Sign Out
                </button>
                </>
                :
                <button className='bg-slate-300 px-5 font-medium rounded-md  py-3'>
                <Link to="/login"> Login</Link>
               </button>
               }
            </div>
          
            
        </div>
    );
};

export default Nav;
