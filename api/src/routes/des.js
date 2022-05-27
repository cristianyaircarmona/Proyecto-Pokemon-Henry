const { default: axios } = require("axios");
const { conn,Pokemon, Types } = require("../db");


const getAllPokemons = async ()=>{
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
            return {id:e.id,name: e.name,types: e.types.map(i=>i.type.name),img: e.sprites.other.dream_world.front_default, attack: e.stats[1].base_stat,created:false}
        })
        return pokemons
    } catch (error){
        return [{error:error.message, name : 'not found'}]
    }
    
}

const getPokemon = async arg => {
        try {
            if(arg.length > 9){
                console.log('estoy en el if DB');
                var resDB = await Pokemon.findAll()
                var respuesta;
                for (let i = 0; i < resDB.length; i++) {
                    if(resDB[i].dataValues.id === arg){
                        respuesta = resDB[i]
                    }
                }
                let typepoke = await Pokemon.findOne({where:{id:respuesta.id}})
                let Type = await typepoke.getTypes()
                let respuestaFinal = {name:respuesta.name,id:respuesta.id,img:respuesta.img,stats:[{hp:respuesta.hp,attack:respuesta.attack,defense:respuesta.defense,speed:respuesta.speed,SpecialAttack:respuesta.SpecialAttack,SpecialDefense:respuesta.SpecialDefense}],height:respuesta.height,weight:respuesta.weight,types:Type.map(i=>{
                    return i.dataValues.name
                })}
                
                conn.sync({force:false})
                return respuestaFinal
            } else {
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
            }
        } catch (error) {
            return {error:error.message, name : 'not found'}        }
        }

const getTypes = async ()=>{
    try {
        let respuesta = await axios('https://pokeapi.co/api/v2/type').then(response=>response.data.results)
        let validate = await Types.findAll()
        if(validate.length === 0){
            for (let i = 0; i < respuesta.length; i++) {
                await Types.create({name:respuesta[i].name})
            }
            let prueba = await Types.findAll()  
            conn.sync({force:false})
            return prueba
        } else {
            return validate
        }
        } catch (error) {
        return error
    }
}

const getByName = async arg =>{
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
        var pokemons = [{id : poke.id, name: poke.name, types:poke.types.map(i=>i.type.name),img: poke.sprites.other.dream_world.front_default,weight:poke.weight,height :poke.height,stats: estadisticas}]
        return pokemons
    } catch (error) {
        return error
    }
}


module.exports = {
    getAllPokemons,
    getPokemon,
    getTypes,
    getByName
}