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
         <div className='hidden lg:flex flex-col'>
         <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8">
                    <li>
                        <Link className=' font-semibold' to="/">Home</Link>
                       
                    </li>
                    <li>
                    <Link className=' font-semibold' to='/About'>About Us</Link> 
                    </li>
                    <li>
                       <Link className=' font-semibold' to='/Consulting'>Consultancy</Link> 
                    </li>
                    <li>
                        <Link to="../Project" className=' font-semibold'>Projects</Link>
                    </li>
                  
                   
                </ul>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  gap-8">
                  
                    {/* <li>
                        <Link to='/buy project' className='font-semibold'>Buy Project From Us</Link>
                    </li> */}
                    <li>
                        <a className=' font-semibold'>Investment Opportunities</a>
                    </li>
                    <li>
                        <a className=' font-semibold'>Our Investors</a>
                    </li>
                    <li>
                        <Link to='/work with us' className=' font-semibold'>Work With Us</Link> 
                    </li>
                
                    
                </ul>
                
            </div>
         </div>
            
            <div className="navbar-end">
               {
                user?.uid?
                <>
                
                <ul><Link className='mx-6  font-semibold' to ="/dashboard">Dashboard</Link>
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
