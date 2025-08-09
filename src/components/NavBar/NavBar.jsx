import React from "react";
 import { Link } from  'react-router'

 const NavBar = ()=> {


    return (

<nav>
        <ul>
            <li>
                <Link to ="/" >  Home </Link>
            </li>
            <li>
                <Link to ="/abaya" >  Abaya </Link>
            </li>
            <li>
                <Link to ="/custom" > Custom </Link>
            </li>
            <li>
                <Link to ="/abaya/new"> add abaya </Link>
            </li>
            <li>
                <Link to ="/cart"> Cart </Link>
            </li>
            <li>
                <Link to ="/signin">Sign In</Link>
            </li>
            <li>
                <Link to="/signup">Sign Up</Link>
            </li>

        </ul>

</nav>

    )
 }

 export default NavBar