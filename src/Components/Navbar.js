import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserName('');
    history('/');
  };

  // Check if user is logged in
  const checkLoggedIn = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      setIsLoggedIn(true);
      setUserName((JSON.parse(user)).name); // Set the username from localStorage
    }
  };

  // Call checkLoggedIn when component mounts
  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <nav className="bg-gray-900 text-white relative">
    <div className="flex items-center justify-between lg:mx-10 p-4">
      <div className="flex items-center gap-5">
        <Link to="/" className="flex items-center gap-5">
          <img src='/icon.png ' className="h-10 w-10 md:h-16 md:w-16" alt="Craftopia Logo" />
          <span className="self-center italic lg:text-3xl font-bold p-1 font-[Lemon]">
            Craftopia
          </span>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 z-50 bg-gray-100 ${showMobileMenu ? 'block' : 'hidden'}`}>
       <ul className="flex flex-col  text-center gap-3 p-2 font-bold lg:text-xl">
         <li>
           <Link
             to="/"
             className="block px-3 text-gray-900 hover:bg-transparent hover:text-blue-700 font-[Salsa]"
           >
             Home
           </Link>
         </li>
         <li>
           <Link
             to="/arts"
             className="block px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 font-[Salsa]"
           >
             Art
           </Link>
         </li>
         <li>
           <Link
             to="/musics"
             className="block px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 font-[Salsa]"
           >
             Music
           </Link>
         </li>
         <li>
           <Link
             to="/potteries"
             className="block px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 font-[Salsa]"
           >
             Pottery
           </Link>
         </li>
       </ul>
     </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex p-2 font-bold lg:text-xl">
        <li>
          <Link
            to="/"
            className="block px-3 text-white hover:bg-transparent hover:text-blue-700 font-[Salsa]"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/arts"
            className="block px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 font-[Salsa]"
          >
            Art
          </Link>
        </li>
        <li>
          <Link
            to="/musics"
            className="block px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 font-[Salsa]"
          >
            Music
          </Link>
        </li>
        <li>
          <Link
            to="/potteries"
            className="block px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 font-[Salsa]"
          >
            Pottery
          </Link>
        </li>
      </ul>

      {/* Search */}
      <div className="hidden md:flex items-center gap-2">
        <IoSearch className="w-4 h-4 lg:w-8 lg:h-8" />
        <input
          type="text"
          id="search-navbar"
          className="block p-2 text-sm md:w-[100px] lg:w-[180px] rounded-lg bg-gray-100 text-gray-900"
          placeholder="Search...."
        />
      </div>

      {/* Cart and Authentication */}
      <div className="ml-3 flex items-center lg:gap-8">
        <Link to="/cart">
          <FaCartArrowDown className="w-5 h-5 lg:h-9 lg:w-8" />
        </Link>
        {isLoggedIn ? (
          <>
            <span className='text-lr  px-2'>{userName}</span>
            <button onClick={handleLogout} className='text-md  px-2'>Logout</button>
          </>
        ) : (
          <Link  to="/auth" className='text-md px-3'>Login / Register</Link>
        )}
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-gray-100 focus:outline-none">
          {showMobileMenu ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>  
    </div>
  </nav>
  );
}

export default Navbar;
