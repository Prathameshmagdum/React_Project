import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [logAndLogout, setLogAndLogout] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo" 
                src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul >
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