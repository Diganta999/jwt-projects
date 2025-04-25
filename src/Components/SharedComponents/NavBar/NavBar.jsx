import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    console.log(user);
    const navigate = useNavigate();
    const links = <>
        <li><NavLink className={" font-medium "}>Home</NavLink></li>
        <li><NavLink className={" font-medium "}>Find a Job</NavLink></li>
        <li><NavLink className={" font-medium "}>Recruiters</NavLink></li>
        <li><NavLink className={" font-medium "}>Candidates</NavLink></li>
        <li><NavLink className={" font-medium "}>Blog</NavLink></li>
        <li><NavLink className={" font-medium "}>Pages</NavLink></li>
    </> 

    const handleSignOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                signOutUser()
            .then(() => {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  navigate('/signin')
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            });

                
              
            }
          });


        
        
    }

    
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-3xl font-bold btn btn-ghost">Job box</a>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        {links}
                    </ul>
                </div>
                <div className="flex gap-12 navbar-end">
                    {user ? <>
                        
                        <details className="dropdown">
                            <summary className="m-1 text-white bg-blue-800 rounded-full btn">Settings</summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow gap-4">
                                <li><button className='py-6 font-medium border border-spacing-2 btn px-7'>Profile</button></li>
                                <li><button onClick={handleSignOut} className='py-6 font-medium border border-spacing-2 btn px-7'>LogOut</button></li>
                            </ul>
                        </details>
                    </> : <>
                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                `font-medium ${isActive ? "btn bg-blue-700 text-white " : "text-gray-600 underline"}`
                            }
                        >
                            Register
                        </NavLink>

                        <NavLink
                            to="/signin"
                            className={
                                `font-medium btn bg-blue-700 text-white py-6 px-7`
                            }
                        >
                            Sign in
                        </NavLink>

                    </>}


                </div>
            </div>
        </div>
    );
};

export default NavBar;