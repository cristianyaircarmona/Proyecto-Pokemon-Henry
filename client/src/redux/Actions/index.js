export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID';
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';

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


/*
export const getAllPokemons = (filter)=>{
    return async function(dispatch){
        fetch('http://localhost:3001/pokemons')
        .then(r=>r.json())
        .then(json=>dispatch({type:GET_ALL_POKEMONS,payload:json}))
    }
};
*/