import React from "react";
import style from './Pokemon.module.css'
import { NavLink } from "react-router-dom";
import imagen from './descarga.jpg'

const Pokemon = props=>{
    let key  = 1
    return <>
    {props.name !== 'Pokemon not Found'? (
        <div className={style.general}>
            <NavLink to={`/poke/pokemon/${props.id}`}>
            <h3>{props.name}</h3>
            </NavLink>
            <img className={style.imagen}  src={props.img} alt={props.name} key={props.id} id={props.id}/>
            <div className={style.types}>
                <ul> types
                {!!props.types && props.types.map(i=><li key={key++}>{i}</li>)}
                </ul>
            </div>
            </div>
        ) : <div className={style.general}>
            <img className={style.img} src={imagen} alt="Pokemon not Found" />
        </div>
        }
    </>
};

export default Pokemon;