import React from "react";
import "./navStyle.scss"


const Navbar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <span className="circle"></span>
                <p className="title">Anywhere app</p>
            </div>
            <div className="items">
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Join</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar