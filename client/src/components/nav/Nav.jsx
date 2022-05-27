import React from "react";
import { NavLink, Link } from "react-router-dom";
import style from './Nav.module.css'
import imagen from './pokemon2.jpg'

const Nav = () =>{

    return (
        <div className={style.general}>

            <img className={style.img} src={imagen} alt="logo pokemon" /> 
            <span className={style.text}>
            <NavLink to='/poke/home'>Home</NavLink>
            </span>
            <span className={style.texto}>
            <Link to='/poke/create'>Create Pokemon</Link>
            </span>
            
        </div>
    );
}

export default Nav
