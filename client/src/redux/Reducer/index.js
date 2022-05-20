import { GET_ALL_POKEMONS,GET_POKEMON_BY_ID,GET_POKEMON_BY_NAME } from "../Actions";

const initialState = {
    pokemons:[],
    pokemonById:{},
    pokemonByName: {}
}

const rootReducer = (state = initialState,action)=>{
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {...state,pokemons:action.payload};
        case GET_POKEMON_BY_ID:
            return {...state,pokemonById:action.payload};
        case GET_POKEMON_BY_NAME:
            return {...state,pokemonByName:action.payload}    
        default:
            return state
    }
};

export default rootReducer;