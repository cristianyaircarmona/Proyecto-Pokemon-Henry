import React from "react";
import { getPokemonById } from "../../redux/Actions";
import { connect } from "react-redux";


export const Detail = props=>{
    React.useEffect(()=>{
    console.log(props)
    props.getPokemonById(props.match.params.id)
    },[])
    console.log(props.pokemonById.stats)
    
    return <div>
        Hola Estoy en Detail
        <h1>{props.pokemonById.name}</h1>
        <img src={props.pokemonById.img} alt={props.pokemonById.name}/>
        weight: {props.pokemonById.weight}  
        
        height: {props.pokemonById.height}
        <ul>Types
            {!!props.pokemonById.types && props.pokemonById.types.map(i=><ul>{i}</ul>)}
        </ul>
        <h2>stats:</h2>
            {!!props.pokemonById.stats && props.pokemonById.stats.map(i=>{
                return(
                <div>
                    <h4>attack: {i.attack} </h4>
                    <h4>defense: {i.defense}</h4>
                    <h4>hp: {i.hp}</h4>
                    <h4>speed: {i.speed}</h4>
                    <h4>special attack: {i.SpecialAttack} </h4>
                    <h4>special defense: {i.SpecialDefense}</h4>
                </div>
                ) 
            })}
            
    </div>
};

export const mapStateToProps = state=>{
    return{pokemonById:state.pokemonById}
}

export default connect(mapStateToProps,{getPokemonById})(Detail);


/*
: {hp: 45}
1: {attack: 49}
2: {defense: 49}
3: {special-attack: 65}
4: {special-defense: 65}
5: {speed: 45}
*/