import { GET_ALL_POKEMONS,GET_POKEMON_BY_ID,GET_POKEMON_BY_NAME, GET_TYPES, CREATE_POKEMON, VACIAR,VACIAR_BUSQUEDA } from "../Actions";

const initialState = {
    pokemons:[],
    pokemonById:{},
    pokemonByName: [],
    types:[],
    create: {}
}

const rootReducer = (state = initialState,action)=>{
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {...state,pokemons:action.payload};
        case GET_POKEMON_BY_ID:
            return {...state,pokemonById:action.payload};
        case GET_POKEMON_BY_NAME:
            return {...state,pokemonByName:action.payload} ;
        case GET_TYPES:
            return {...state, types:action.payload};
        case CREATE_POKEMON:
        return {...state, create:action.payload};
        case VACIAR:
            return {...state,pokemonById:action.payload}
        case VACIAR_BUSQUEDA:
            return {...state,pokemonByName:action.payload}
        default:
            return state
    }
};

export default rootReducer;