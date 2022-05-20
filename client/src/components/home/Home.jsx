import React from "react";
import { getAllPokemons, getPokemonByName} from "../../redux/Actions";
import style from './Home.module.css'
import { connect } from 'react-redux'
import Pokemon from "../Pokemon/Pokemon.jsx";


export const Home = props=>{
    const [poke, setPoke] = React.useState('')
    const [page, setPage] = React.useState(0)
    const [pokemon, setPokemon] = React.useState([])
    const [filter, setFilter ] = React.useState({min:false,max:false,a_z:false,z_a:false,restablecer:false})
    
    React.useEffect(()=>{
        props.getAllPokemons()
        return setPokemon( (prev)=>prev.sort((a,b)=>{
            if(a.id < b.id) return -1
        }))
    },[])
    
    const paginado = ()=>{
        if(props.pokemons.length > 0 && pokemon.length === 0){
            setPokemon(props.pokemons)           
        } 
        if(poke.length === 0){
            if(filter.restablecer){
                setPokemon( (prev)=>prev.sort((a,b)=>{
                    if(a.id < b.id) return -1
                }))
                setFilter(prev=>{
                    return {...prev, restablecer: false} })
            }else if(filter.min) {
                setPokemon( (prev)=>prev.sort((a,b)=>{
                    if(a.attack < b.attack) return -1
                }))
                setFilter(prev=>{
                    return {...prev, min: false} })
            } else if (filter.max){
                setPokemon( (prev)=>prev.sort((a,b)=>{
                    if(a.attack > b.attack) return -1
                }))
                setFilter(prev=>{
                    return {...prev, max: false} })
            } else if (filter.a_z){
                setPokemon( (prev)=>prev.sort((a,b)=>{
                    if(a.name < b.name) return -1
                }))
                setFilter(prev=>{
                    return {...prev, a_z: false} })
            } else if(filter.z_a){
                setPokemon( (prev)=>prev.sort((a,b)=>{
                    if(a.name > b.name) return -1
                }))
                setFilter(prev=>{
                    return {...prev, z_a: false} })
            } 
            return pokemon.slice(page,page + 12)
        }
        const bus =pokemon.filter(i=>i.name.includes(poke)) 
        if(bus.length > 0) return bus
        bus.push({name: 'Pokemon not Found'})  
        return bus
    } 
    const sigPag = ()=> {
        if(pokemon.length > page + 12)setPage(page + 12)
    }
    const antPag = ()=>{
        if(page > 0) setPage(page - 12)
    }

    const busqueda = (e)=>{
        setPage(0)
        setPoke(e.target.value)
    }

    const sinFiltros = ()=>{
        setFilter(prev=>{
        return {...prev, restablecer: true} })
    }
    const minAttack = ()=>{
        setFilter(prev=>{
            return {...prev, min: true} })
    }
    const maxAttack = ()=>{
        setFilter(prev=>{
        return {...prev, max: true} })
    }
    const alfAZ= ()=>{
        setFilter(prev=>{
        return {...prev, a_z: true} })
    }
    const alfZA = ()=>{
        setFilter(prev=>{
        return {...prev, z_a: true} })
    }
    return(
        <div className={style.general} >
            <form onSubmit={e=>{e.preventDefault()}}>Prueba de Busqueda
            <input type="text" name="busqueda" value={poke} onChange={busqueda}  placeholder='introduce un nombre'/>
            
            <button onClick={()=>props.getPokemonByName(poke)}>Buscar</button>
            </form>
            <br />
            <form >
            <input type='radio' onChange={sinFiltros} id='sin filtros' name="filtro" value='sin filtros' />
            <label htmlFor='sin filtros' >sin filtros</label>
            <input type='radio' onChange={minAttack} id='MinAttack' name="filtro" value='MinAttack'/>
            <label htmlFor='MinAttack' >MinAttack</label>
            <input type='radio' onChange={maxAttack} id='maxAttack' name="filtro" value='maxAttack'/>
            <label htmlFor='maxAttack' >maxAttack</label>
            <input type='radio' onChange={alfAZ} id='Filtrar por orden alfabetico(A-Z)' name="filtro" value='Filtrar por orden alfabetico(A-Z)' />
            <label htmlFor='Filtrar por orden alfabetico(A-Z)' >Filtrar por orden alfabetico(A-Z)</label>
            <input type='radio' onChange={alfZA} id='Filtrar por orden alfabetico(Z-A)' name="filtro" value='Filtrar por orden alfabetico(Z-A)' />
            <label htmlFor='Filtrar por orden alfabetico(Z-A)' >Filtrar por orden alfabetico(Z-A)</label>
            </form>
            
            <button onClick={antPag} >Anterior</button>
            <button onClick={sigPag} >Siguiente</button>
            <div >
                pokemons:
                <span className={style.pokemon}>
                {!!props.pokemons && paginado().map(i=><Pokemon name={i.name} img={i.img} types={i.types} key={i.id} id={i.id}/>)}
                </span>
            </div>
        </div>
    )
}

export const mapStateToProps = state=>{
    return {pokemons:state.pokemons, pokemonByName: state.pokemonByName}
}
export default connect(mapStateToProps, {getAllPokemons, getPokemonByName})(Home)




