import React from "react";
import { connect } from "react-redux";
import { getTypes, createPokemon } from "../../redux/Actions";
import style from './Create.module.css'

const CreatePokemon = props =>{
    const[input, setInput] = React.useState({})
    const[errores, setErrores] = React.useState({})
    React.useEffect(()=>{
        props.getTypes()
    },[])
    const controlador = valor=>{
        let errores = {}
        if(!valor.name) errores.name = 'Requerido'
        else if(!/^[a-zA-Z ]+$/.test(valor.name)){
            errores.name = 'Nombre no admitido'
        }
        if(!valor.image) errores.image = 'Requerido'
        if(!valor.attack) errores.attack = 'Requerido'
        else if(!/^\d{1,6}(\.\d{1,3})?$/.test(valor.attack)){
            errores.attack = 'Valor máximo 999999,999'
        }
        if(!valor.defense) errores.defense = 'Requerido'
        else if(!/^\d{1,6}(\.\d{1,3})?$/.test(valor.defense)){
            errores.defense = 'Valor máximo 999999,999'
        }
        if(!valor.hp) errores.hp = 'Requerido'
        else if(!/^\d{1,6}(\.\d{1,3})?$/.test(valor.hp)){
            errores.hp = 'Valor máximo 999999,999'
        }
        if(!valor.speed) errores.speed = 'Requerido'
        else if(!/^\d{1,6}(\.\d{1,3})?$/.test(valor.speed)){
            errores.speed = 'Valor máximo 999999,999'
        }
        if(!valor.height) errores.height = 'Requerido'
        else if(!/^\d{1,6}(\.\d{1,3})?$/.test(valor.height)){
            errores.height = 'Valor máximo 999999,999'
        }
        if(!valor.weight) errores.weight = 'Requerido'
        else if(!/^\d{1,6}(\.\d{1,3})?$/.test(valor.weight)){
            errores.weight = 'Valor máximo 999999,999'
        }
        if(!valor.SpecialAttack) errores.SpecialAttack = 'Requerido'
        else if(!/^\d{1,6}(\.\d{1,3})?$/.test(valor.SpecialAttack)){
            errores.SpecialAttack = 'Valor máximo 999999,999'
        }
        if(!valor.SpecialDefense) errores.SpecialDefense = 'Requerido'
        else if(!/^\d{1,6}(\.\d{1,3})?$/.test(valor.SpecialDefense)){
            errores.SpecialDefense = 'Valor máximo 999999,999'
        }
        return errores
    }
    const validate = evento=>{
        setInput({
            ...input,
            [evento.target.name]:evento.target.value
        })
        setErrores(controlador({
            ...input,
            [evento.target.name]:evento.target.value
        }))
    }
    return <div className={style.general}>
            <div className={style.contenedor}>

            <select name='type' onChange={(e)=>validate(e)}>
            <option >Escoje una</option>
            {!!props.types && props.types.map(i=>{
                return <option name={i.name} value={i.type_id}>{i.name}</option>
            })}
            </select>
            <select name='typeDos' onChange={(e)=>validate(e)}>
            <option >Escoje una</option>
            {!!props.types && props.types.map(i=>{
                return <option name={i.name} value={i.type_id}>{i.name}</option>
            })}
            </select>
        <form onSubmit={e=>{
            e.preventDefault()
        }}>
        <label htmlFor="name">Nombre</label>
        <input className={style.input} onChange={(e)=>validate(e)} type="text" name='name' id='name'/>
        <br />
        {errores.name?<span className={style.error}>{errores.name}</span>:null}
        <br />
        <label htmlFor="img">Imagen</label>
        <input className={style.input} onChange={(e)=>validate(e)} type="text" name='image' id="image"/>
        <br />
        {errores.image?<span className={style.error}>{errores.image}</span>:null}
        <br />
        <label htmlFor="attack">Attack</label>
        <input className={style.input} onChange={(e)=>validate(e)} type="number" name='attack' id="attack"/>
        <br />
        {errores.attack?<span className={style.error}>{errores.attack}</span>:null}
        <br />
        <label htmlFor="defense">Defense</label>
        <input className={style.input} onChange={(e)=>validate(e)} type="number" name='defense' id="defense"/>
        <br />
        {errores.defense?<span className={style.error}>{errores.defense}</span>:null}
        <br />
        <label htmlFor="hp">Hp</label>
        <input className={style.input} onChange={(e)=>validate(e)} type="number" name='hp' id="hp"/>
        <br />
        {errores.hp?<span className={style.error}>{errores.hp}</span>:null}
        <br />
        <label htmlFor="speed">Speed</label>
        <input className={style.input} onChange={(e)=>validate(e)} type="number" name='speed' id="speed"/>
        <br />
        {errores.speed?<span className={style.error}>{errores.speed}</span>:null}
        <br />
        <label htmlFor="height">Height</label>
        <input className={style.input} onChange={(e)=>validate(e)} type="number" name='height' id="height"/>
        <br />
        {errores.height?<span className={style.error}>{errores.height}</span>:null}
        <br />
        <label htmlFor="weight">Weight</label>
        <input className={style.input} onChange={(e)=>validate(e)} type="number" name='weight' id="weight"/>
        <br />
        {errores.weight?<span className={style.error}>{errores.weight}</span>:null}
        <br />
        <label htmlFor="SpecialAttack">SpecialAttack</label>
        <input className={style.input} onChange={(e)=>validate(e)} type="number" name='SpecialAttack' id="SpecialAttack"/>
        <br />
        {errores.SpecialAttack?<span className={style.error}>{errores.SpecialAttack}</span>:null}
        <br />
        <label htmlFor="SpecialDefense">SpecialDefense</label>
        <input className={style.input} onChange={(e)=>validate(e)} type="number" name='SpecialDefense' id="SpecialDefense"/>
        <br />
        {errores.SpecialDefense?<span className={style.error}>{errores.SpecialDefense}</span>:null}
        <br />
        <input className={style.btn} onClick={()=>{props.createPokemon(input)}} type="submit" value="Enviar" disabled={Object.keys(errores).length === 0? false:true}/>
        <span>{!!props.create && <h4>{props.create.name}</h4>}</span>
        </form>
        </div>
    </div>
}
const mapStateToProps = state=>{
    return{types:state.types,create:state.create}
}

export default connect(mapStateToProps,{getTypes,createPokemon})(CreatePokemon)