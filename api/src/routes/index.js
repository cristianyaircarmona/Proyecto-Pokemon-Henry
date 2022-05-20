const { Router, json} = require('express');
const { getAllPokemons, getPokemon } = require('./des');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();
router.use( json())


router.get('/pokemons',(req,res,next)=>{
    getAllPokemons().then(r=>res.send(r))
        .catch(e=>res.send(e))
})


router.get('/pokemons/:id',async (req,res,next)=>{
    let  id  = req.params.id;
    getPokemon(id).then(r=>res.json(r))
    .catch(e=>res.json(e))
})

router.get('/pokemon',async(req,res,next)=>{
    let name  = req.query.name;
    getPokemon(name).then(r=>res.json(r))
    .catch(e=>res.json(e))
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
