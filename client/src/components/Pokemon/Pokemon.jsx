import React from "react";
import style from './Pokemon.module.css'
import { NavLink } from "react-router-dom";
import imagen from './descarga.jpg'

const Pokemon = props=>{
    return <>
    {props.name !== 'Pokemon not Found'? (
        <div className={style.general}>
        <NavLink to={`/pokemon/${props.id}`}>
        <span>{props.name}</span>
        </NavLink>
        <img className={style.imagen}  src={props.img} alt={props.name} key={props.id} id={props.id}/>
        <ul>types
        {!!props.types && props.types.map(i=><li>{i}</li>)}
        </ul>
        </div>
        ) : <div className={style.general}>
            <img className={style.img} src={imagen} alt="Pokemon not Found" />
        </div>
        }
    </>
};

export default Pokemon;