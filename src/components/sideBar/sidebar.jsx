import React from "react";
import "./sidebar.css";

import schools from "../../assets/sidebar/schools.svg";
import teachers from "../../assets/sidebar/teachers.svg";
import finances from "../../assets/sidebar/finances.svg";
import managePost from "../../assets/sidebar/managepost.svg";


const SideBar = () => {
    return (
        <nav className="sidebar">
        <div className="sidebar-container">
            <div className="sidebar-logo">
            </div>
            <div className="sidebar-links">
            <ul>
                <li>
                    <div className="icons">
                        <img src={schools} alt="schools" className="icon"/>
                        <span>Schools</span>
                    </div>
                </li>
                <li>
                    <div className="icons">
                        <img src={teachers} alt="teachers" className="icon"/>
                        <span>Teachers</span>
                    </div>
                </li>
                <li>
                    <div className="icons">
                        <img src={managePost} alt="managePost" className="icon"/>
                        <span>Manage Post</span>
                    </div>
                </li>
                <li>
                    <div className="icons">
                        <img src={finances} alt="finances" className="icon"/>
                        <span>Finances</span>
                    </div>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
    };

export default SideBar;
