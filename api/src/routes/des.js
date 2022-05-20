const { default: axios } = require("axios");
const { conn,Pokemon, Types } = require("../db");


const getAllPokemons = async ()=>{
    //await axios('https://pokeapi.co/api/v2/pokemon?limit=40').then(r=>r.data)
    try {
        let poke = [];
        await axios('https://pokeapi.co/api/v2/pokemon?limit=40')
        .then(response=>response.data.results)
        .then( r=>{
            for (let i = 0; i < r.length; i++) {
                poke.push(axios(r[i].url).then(response=>response.data))
            }
        })
        let final = await Promise.all(poke).then()
        var pokemons = final.map(e=>{
            return {id:e.id,name: e.name,types: e.types.map(i=>i.type.name),img: e.sprites.other.dream_world.front_default, attack: e.stats[1].base_stat}
        })
        
        return pokemons
    } catch (error){
        return {error:error.message, name : 'not found'}
    }
    
}

const getPokemon = async arg => {
    try {
        let estadisticas = [];
        let obj = {};
        let poke = await axios(`https://pokeapi.co/api/v2/pokemon/${arg}`).then(response=>response.data);
        for(let i = 0; i<poke.stats.length;i++){
            if(poke.stats[i].stat.name === 'special-attack') poke.stats[i].stat.name = 'SpecialAttack'
            if(poke.stats[i].stat.name === 'special-defense') poke.stats[i].stat.name = 'SpecialDefense'
            obj[poke.stats[i].stat.name] = poke.stats[i].base_stat
        }
        estadisticas.push(obj)
        var pokemons = {id : poke.id, name: poke.name, types:poke.types.map(i=>i.type.name),img: poke.sprites.other.dream_world.front_default,weight:poke.weight,height :poke.height,stats: estadisticas}
        return pokemons
    } catch (error) {
        return {error:error.message, name : 'not found'}
    }
}

module.exports = {
    getAllPokemons,
    getPokemon
}