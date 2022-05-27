export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID';
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';
export const GET_TYPES = 'GET_TYPES';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const VACIAR = 'VACIAR';
export const VACIAR_BUSQUEDA =  'VACIAR_BUSQUEDA';  

export const getAllPokemons = ()=>{
    return async function(dispatch){
        fetch('http://localhost:3001/pokemons')
        .then(r=>r.json())
        .then(json=>dispatch({type:GET_ALL_POKEMONS,payload:json}))
    }
};

export const getPokemonById = id=>{
    return async function(dispatch){
        fetch(`http://localhost:3001/pokemons/${id}`)
        .then(r=>r.json())
        .then(json=>dispatch({type:GET_POKEMON_BY_ID,payload:json}))
    }
};

export const getPokemonByName = name=>{
    return async function(dispatch){
        fetch(`http://localhost:3001/pokemon?name=${name}`)
        .then(r=>r.json())
        .then(json=>dispatch({type:GET_POKEMON_BY_NAME,payload:json}))
    }
};

export const getTypes = ()=>{
    return async function(dispatch){
        fetch('http://localhost:3001/pokemon/types')
        .then(r=>r.json())
        .then(json=>dispatch({type:GET_TYPES,payload:json}))

    }
}

export const createPokemon = (data)=>{
    return async function(dispatch){
        fetch('http://localhost:3001/create',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)})
        .then(r=>r.json())
        .then(json=>dispatch({type:CREATE_POKEMON,payload:json}))
        
    }
}
export const vaciarInfo = ()=>{
    return {type:VACIAR,payload:{}}
}

export const vaciarBusqueda =()=>{
    return {type:VACIAR_BUSQUEDA,payload:[]}
}