
 import React from "react";
 import { Link } from  'react-router-dom'
 import './NavBar.css';




const NavBar = ({ user, handleSignOut }) => {
  return (
    <>
      {user ? (
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/abaya"> Abaya </Link>
            </li>
            <li>
              <Link to="/custom"> Custom </Link>
            </li>

            {/* <li>
                <Link to ="/abaya/new"> add abaya </Link>
            </li> */}

            <li>
              <Link to="/abaya/new"> Add Abaya </Link>
            </li>

            <li>
              <Link to="/cart"> Cart </Link>
            </li>
            <li>
              <Link to="/" onClick={handleSignOut}>
                Sign Out
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/abaya"> Abaya </Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
