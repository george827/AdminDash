import React from "react";
import { Link } from 'react-router-dom'; 
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
                    <Link to="/"> 
                        <div className="icons">
                            <img src={schools} alt="schools" className="icon"/>
                            <span>Schools</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/teachers">
                        <div className="icons">
                            <img src={teachers} alt="teachers" className="icon"/>
                            <span>Teachers</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/managePost">
                        <div className="icons">
                            <img src={managePost} alt="managePost" className="icon"/>
                            <span>Manage Post</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/finances">
                        <div className="icons">
                            <img src={finances} alt="finances" className="icon"/>
                            <span>Finances</span>
                        </div>
                    </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
};

export default SideBar;
