import React from "react";
import { NavLink } from "react-router-dom";


const Nav = () =>{

    return (
        <div>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/create'>Create Pokemon</NavLink>
        </div>
    );
}

export default Nav