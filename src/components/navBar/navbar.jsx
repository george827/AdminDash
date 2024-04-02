import React from "react";
import logo from "../../assets/weteachLogo.svg";
import profilePic from "../../assets/peterNjenga.svg";
import bell from "../../assets/bell.svg";

import "./navbar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="WeTeach Logo" className="teachLogo"/>
                <h1 className="weteach-text">Weteach</h1>
            </div>
            <div className="welcome">
                <p>hello 🖐</p>
                <h5>Welcome back</h5>
                <div className="notification">
                    <img src={bell} alt="bell" className="bell" />
                </div>
            </div>
            <div className="profile">
                <img src={profilePic} alt="Profile" className="profilePic"/> 
                <h5 className="profileName">Peter Njenga</h5>              
            </div>
        
        </nav>
    );
    };

export default NavBar;