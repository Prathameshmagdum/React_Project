import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";

const Header = () => {
    const [logAndLogout, setLogAndLogout] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedIn} = useContext(UserContext);
    console.log(loggedIn);
        return (
        <div className="flex bg-blue-200 sm:bg-pink-100 justify-between shadow-xl m-2">
            <div className="logo-container">
               <Link to="/"> 
               <img 
                className="w-36" 
                src={LOGO_URL}
                // alt="Logo"
                />
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "❌"}
                    </li>

                    <li className="px-4">
                        <Link to="/" className="no-underline">Home</Link>
                    </li>

                    <li className="px-4">
                        <Link to="/about" className="no-underline">About Us</Link>
                    </li>

                    <li className="px-4">
                        <Link to="/contactus" className="no-underline">Contact Us</Link>                    
                    </li>

                    <li className="px-4">
                        <Link to="/grocery" className="no-underline">Grocery</Link>                    
                    </li>

                    <li className="px-4">
                        Cart
                    </li>

                    <button className="px-4" onClick={()=> {
                       logAndLogout === 'Login'? setLogAndLogout("Logout"): setLogAndLogout("Login")
                    }}>  
                        {logAndLogout}
                    </button>
                    <li className="px-4 text-lg">
                        {loggedIn}
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Header;