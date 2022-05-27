import React from "react";
import { getPokemonById, vaciarInfo } from "../../redux/Actions";
import { connect } from "react-redux";
import style from './Detail.module.css'


export const Detail = props=>{
    React.useEffect(()=>{
    props.getPokemonById(props.match.params.id)
    return props.vaciarInfo()
    },[])    
    return (
        <div className={style.todo}>
        <div className={style.contenedor}>
        <div >
        <h1>{props.pokemonById.error}</h1>
        <img className={style.img} src={props.pokemonById.img} alt={props.pokemonById.name}/>
        </div>
        <div className={style.data}>
        <table className={style.table}>
            <caption><h1 className={style.name}>{props.pokemonById.name}</h1></caption>
                <thead>
                    <tr>
                        <th>
                            <h2 className={style.stat}>Stats</h2>
                        </th>
                        <th>
                            <h2>Value</h2>
                        </th>
                    </tr>
                </thead>
                    {!!props.pokemonById.stats && props.pokemonById.stats.map(i=>{
                    return(<tbody>
                    <tr><td>id:</td>  <td>{props.match.params.id}</td></tr>
                    <tr><td>attack: </td> <td> {i.attack} </td></tr>
                    <tr><td>defense: </td> <td> {i.defense} </td> </tr>
                    <tr><td>hp: </td> <td> {i.hp}</td> </tr>
                    <tr><td>speed:</td> <td>{i.speed}</td> </tr>
                    <tr><td>special attack</td>  <td>{i.SpecialAttack}</td></tr>
                    <tr><td>special defense:</td> <td>{i.SpecialDefense}</td> </tr>
                    <tr><td>weight:</td> <td>{props.pokemonById.weight}</td> </tr>
                    <tr><td>height:</td> <td>{props.pokemonById.height}</td> </tr>
                    <tr>
                        <th>
                            <h2 className={style.type}>Types</h2> 
                        </th>
                    </tr>
                    {!!props.pokemonById.types && props.pokemonById.types.map(i=><tr><td>{i}</td></tr>)}
                    </tbody>
                    )})}
            </table>
            
        </div>
        </div>
    </div>
)};

export const mapStateToProps = state=>{
    return{pokemonById:state.pokemonById}
}

export default connect(mapStateToProps,{getPokemonById,vaciarInfo})(Detail);


