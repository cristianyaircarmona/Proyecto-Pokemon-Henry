const { default: axios } = require('axios');
const { Router, json} = require('express');
const { getAllPokemons, getPokemon, getTypes, getByName } = require('./des');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { conn,Pokemon, Types } = require("../db");




const router = Router();
router.use( json())


router.get('/pokemons',async(req,res,next)=>{
        let validate = await Pokemon.findAll()
        if(validate.length > 0){
            let typesPoke = [];
            for (let i = 0; i < validate.length; i++) {
                let type = await Pokemon.findOne({where:{id:validate[i].id}})
                let res = await type.getTypes()
                let tipos = res.map(i=>i.dataValues.name)
                let poke = {name:validate[i].dataValues.name,id:validate[i].dataValues.id,attack:validate[i].dataValues.attack,img:validate[i].dataValues.img,types:tipos,created:true}
                typesPoke.push(poke)
            }
            await conn.sync({force:false})
            getAllPokemons().then(r=>{
                res.json(r.concat(typesPoke))
            })
            .catch(e=>res.json(e))
        } 
        else getAllPokemons().then(r=>res.json(r))
        .catch(e=>res.json(e))
})


router.get('/pokemons/:id',async (req,res,next)=>{
    let  id  = req.params.id;
    
    getPokemon(id).then(r=>res.json(r))
    .catch(e=>res.json(e))
})

router.get('/pokemon',async(req,res,next)=>{
    let name  = req.query.name;
    getByName(name).then(r=>res.json(r))
    .catch(e=>res.json(e))
})

router.get('/pokemon/types',async(req,res,next)=>{
    getTypes().then(r=>res.json(r))
    .catch(e=>res.json(e))
})
router.post('/create',async(req,res,next)=>{
    try {
        const data  = req.body
    let newPokemon = await Pokemon.create({
        name:data.name,
        hp: data.hp,
        attack: data.attack,
            defense: data.defense,
            speed: data.speed,
            height: data.height,
            weight: data.weight,
            SpecialAttack: data.SpecialAttack,
            SpecialDefense: data.SpecialDefense,
            img: data.image,
        })
        await newPokemon.addTypes(data.type)
        if(data.typeDos) {
            await newPokemon.addTypes(data.typeDos)
        }
        await conn.sync({force:false})
        res.json({name: 'Creado Exitosamente'})
    } catch (error) {
        res.json({name:'Algo fallo :c'})
    }
    
})


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
