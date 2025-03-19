import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [logAndLogout, setLogAndLogout] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
               <Link to="/"> 
               <img 
                className="logo" 
                src={LOGO_URL}
                // alt="Logo"
                />
                </Link>
            </div>
            <div className="nav-items">
                <ul >
                    <li>
                        Online Status: {onlineStatus ? "✅" : "❌"}
                    </li>
                    <li>
                        <Link to="/" className="no-underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="no-underline">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contactus" className="no-underline">Contact Us</Link>                    </li>
                    <li>Cart</li>
                    <button className="login-logout" onClick={()=> {
                       logAndLogout === 'Login'? setLogAndLogout("Logout"): setLogAndLogout("Login")
                    }}>{logAndLogout}</button>
                </ul>
            </div>

        </div>
    )
}
export default Header;