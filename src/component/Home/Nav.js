import React from 'react';
import { Link} from 'react-router-dom';
import img from "../images/suncraft.png";
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';

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
                           
                      
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 md">
                        <li>
                            <a className='text-lg'>Home</a>
                        </li>
                        <li>
                        <a className='text-lg '>About Us</a>
                    </li>
                    <li>
                        <a className='text-lg '>Consulting</a>
                    </li>
                    <li>
                        <a className='text-lg '>Projects</a>
             
                    </li>
                    <li>
                        <a className='text-lg '>Products</a>
                    </li>
                    <li>
                        <a className='text-lg '>Productive Load Applications</a>
                    </li>
                    <li>
                        <a className='text-lg '>Investment Opportunitoes</a>
                    </li>
                   <br></br>
                    <li>
                        <a className='text-lg '>Work With Us</a>
                    </li>
                      
                       
                    </ul>
                </div>
               <Link to='/'> <img className='w-[190px]' src={img} alt="#"/></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 py-1">
                    <li>
                        <Link className='text-lg font-semibold' to="/">Home</Link>
                       
                    </li>
                    <li>
                    <Link className='text-lg font-semibold' to='/About'>About Us</Link> 
                    </li>
                    <li>
                       <Link className='text-lg font-semibold' to='/login'>Consulting</Link> 
                    </li>
                    <li>
                        <Link to="../Project" className='text-lg font-semibold'>Projects</Link>
                    </li>
                    <li>
                        <a className='text-lg font-semibold'>Products</a>
                    </li>
                    <li>
                        <a className='text-lg w-[180px] font-semibold'>Productive Load Applications</a>
                    </li>
                    <li>
                        <a className='text-lg w-[120px] font-semibold'>Investment Opportunities</a>
                    </li>
                    
                    <li>
                        <a className='text-lg font-semibold'>Work With Us</a>
                    </li>
                  
                 
                    
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
