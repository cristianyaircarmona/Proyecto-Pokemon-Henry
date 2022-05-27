import React from "react";
import { Link } from "react-router-dom";
import style from './Inicio.module.css'

const Inicio = ()=>{
    return <div className={style.general}>
        <div className={style.contenedor}>
        <h1 className={style.text}>Bienvenido!!!</h1>
        <span className={style.link}><Link to='/poke/home'>Start</Link></span>
        </div>
    </div>
}

export default Inicio;