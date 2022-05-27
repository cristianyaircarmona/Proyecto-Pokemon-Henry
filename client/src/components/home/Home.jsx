import React from "react";
import { getAllPokemons, getPokemonByName, vaciarBusqueda} from "../../redux/Actions";
import style from './Home.module.css'
import { connect } from 'react-redux'
import Pokemon from "../Pokemon/Pokemon.jsx";


export const Home = props=>{
    const [poke, setPoke] = React.useState('')
    const [page, setPage] = React.useState(0)
    const [prueba, setPrueba] = React.useState([])
    const [pokemon, setPokemon] = React.useState([])
    const [filter, setFilter ] = React.useState({min:false,max:false,a_z:false,z_a:false,restablecer:false,types:{grass:false,poison:false,fire:false,flying:false,water:false,bug:false,normal:false,electric:false,ground:false,fairy:false},created:false,existentes:false})
    const [typePoke, setTypePoke] = React.useState([])
    
    React.useEffect(()=>{
        props.getAllPokemons()
        
        console.log(props.pokemonByName)
        return setPokemon( (prev)=>prev.sort((a,b)=>{
            if(a.id < b.id) return -1
        }))
    },[])
    const paginado = ()=>{
        if(props.pokemons.length > 0 && pokemon.length === 0){
            setPokemon(props.pokemons)           
        } 
        if(pokemon.length > 0 && typePoke.length === 0){
            setTypePoke(pokemon)
        }
        if(poke.length === 0){
            if(filter.types.bug){
                if(pokemon.length < 39) setPokemon(typePoke)
                setFilter(prev=>{
                    return {...prev, types:{bug:false}} })
                setPokemon(prev=> prev.filter(i=>{
                        if(i.types.includes('bug')){
                            return i
                        }}))
                setPage(0)
            } else if(filter.types.electric){
                if(pokemon.length < 39) setPokemon(typePoke)
                setFilter(prev=>{
                    return {...prev, types:{electric:false}} })
                setPokemon(prev=> prev.filter(i=>{
                        if(i.types.includes('electric')){
                            return i
                        }}))
                setPage(0)
            } else if(filter.types.fire){
                if(pokemon.length < 39) setPokemon(typePoke)
                setFilter(prev=>{
                    return {...prev, types:{fire:false}} })
                setPokemon(prev=> prev.filter(i=>{
                        if(i.types.includes('fire')){
                            return i
                        }}))
                setPage(0)
            } else if(filter.types.normal){
                if(pokemon.length < 39) setPokemon(typePoke)
                setFilter(prev=>{
                    return {...prev, types:{normal:false}} })
                setPokemon(prev=> prev.filter(i=>{
                        if(i.types.includes('normal')){
                            return i
                        }}))
                setPage(0)
            } else if(filter.types.water){
                if(pokemon.length < 39) setPokemon(typePoke)
                setFilter(prev=>{
                    return {...prev, types:{water:false}} })
                setPokemon(prev=> prev.filter(i=>{
                        if(i.types.includes('water')){
                            return i
                        }}))
                setPage(0)
            } else if(filter.types.grass){
                if(pokemon.length < 39) setPokemon(typePoke)
                setFilter(prev=>{
                    return {...prev, types:{grass:false}} })
                setPokemon(prev=> prev.filter(i=>{
                        if(i.types.includes('grass')){
                            return i
                        }}))
                setPage(0)
            } else if(filter.types.poison){
                if(pokemon.length < 39) setPokemon(typePoke)
                setFilter(prev=>{
                    return {...prev, types:{poison:false}} })
                setPokemon(prev=> prev.filter(i=>{
                        if(i.types.includes('poison')){
                            return i
                        }}))
                setPage(0)
            } else if(filter.types.fairy){
                if(pokemon.length < 39) setPokemon(typePoke)
                setFilter(prev=>{
                    return {...prev, types:{fairy:false}} })
                setPokemon(prev=> prev.filter(i=>{
                        if(i.types.includes('fairy')){
                            return i
                        }}))
                setPage(0)
            } else if(filter.types.ground){
                if(pokemon.length < 39) setPokemon(typePoke)
                setFilter(prev=>{
                    return {...prev, types:{ground:false}} })
                setPokemon(prev=> prev.filter(i=>{
                        if(i.types.includes('ground')){
                            return i
                        }}))
                setPage(0)
            } else if(filter.types.flying){
                if(pokemon.length < 39) setPokemon(typePoke)
                setFilter(prev=>{
                    return {...prev, types:{flying:false}} })
                setPokemon(prev=> prev.filter(i=>{
                        if(i.types.includes('flying')){
                            return i
                        }}))
                setPage(0)
            } else if(filter.existentes){
                if(pokemon.length < 39) setPokemon(typePoke)
                setFilter(prev=>{
                    return {...prev,existentes:false} })
                setPokemon(prev=> prev.filter(i=>i.created !== false))
                setPage(0)
            } 
            if(filter.restablecer){
                if(pokemon.length < 39) setPokemon(typePoke)
                setPokemon( (prev)=>prev.sort((a,b)=>{
                    if(a.id < b.id) return -1
                }))
                setFilter(prev=>{
                    return {...prev, restablecer: false} })
                setPage(0)
            }else if(filter.min) {
                if(pokemon.length < 39) setPokemon(typePoke)
                setPokemon( (prev)=>prev.sort((a,b)=>{
                    if(a.attack < b.attack) return -1
                }))
                setFilter(prev=>{
                    return {...prev, min: false} })
                setPage(0)
            } else if (filter.max){
                if(pokemon.length < 39) setPokemon(typePoke)
                setPokemon( (prev)=>prev.sort((a,b)=>{
                    if(a.attack > b.attack) return -1
                }))
                setFilter(prev=>{
                    return {...prev, max: false} })
                setPage(0)
            } else if (filter.a_z){
                if(pokemon.length < 39) setPokemon(typePoke)
                setPokemon( (prev)=>prev.sort((a,b)=>{
                    if(a.name < b.name) return -1
                }))
                setFilter(prev=>{
                    return {...prev, a_z: false} })
                setPage(0)
            } else if(filter.z_a){
                if(pokemon.length < 39) setPokemon(typePoke)
                setPokemon( (prev)=>prev.sort((a,b)=>{
                    if(a.name > b.name) return -1
                }))
                setFilter(prev=>{
                    return {...prev, z_a: false} })
                setPage(0)
            } else if(filter.created){
                if(pokemon.length < 39) setPokemon(typePoke)
                setFilter(prev=>{
                    return {...prev,created:false} })
                setPokemon(prev=> prev.filter(i=>i.created !== true))
                setPage(0)
            }
            
            return pokemon.slice(page,page + 12)
        }
        if(props.pokemonByName.length > 0){
            if(!props.pokemonByName[0].message){
                return props.pokemonByName
            }
        }
        const bus = pokemon.filter(i=>i.name === poke) 
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
    const typeBug = ()=>{
        setFilter(prev=>{
            return {...prev,types:{...prev,bug:true}}})
    }
    const typeElectric = ()=>{
        setFilter(prev=>{
            return {...prev,types:{...prev,electric:true}}})
    }
    const typeFire = ()=>{
        setFilter(prev=>{
            return {...prev,types:{...prev,fire:true}}})
    }
    const typeGround = ()=>{
        setFilter(prev=>{
            return {...prev,types:{...prev,ground:true}}})
    }
    const typeGrass = ()=>{
        setFilter(prev=>{
            return {...prev,types:{...prev,grass:true}}})
    }
    const typeNormal = ()=>{
        setFilter(prev=>{
            return {...prev,types:{...prev,normal:true}}})
    }
    const typePoison = ()=>{
        setFilter(prev=>{
            return {...prev,types:{...prev,poison:true}}})
    }
    const typeWater = ()=>{
        setFilter(prev=>{
            return {...prev,types:{...prev,water:true}}})
    }
    const typeFlying = ()=>{
        setFilter(prev=>{
            return {...prev,types:{...prev,flying:true}}})
    }
    const typeFairy = ()=>{
        setFilter(prev=>{
            return {...prev,types:{...prev,fairy:true}}})
    }
    const created = ()=>{
        setFilter(prev=>{
            return {...prev,created:true}})
    }
    const existentes = ()=>{
        setFilter(prev=>{
            return {...prev,existentes:true}})
    }
    return(
        <div className={style.prueba}>
            <form onSubmit={e=>{e.preventDefault()}}>
            <input className={style.buscador} type="text" name="busqueda" value={poke} onChange={(e)=>{
                busqueda(e)
                props.getPokemonByName(poke)
                }}  placeholder='introduce un nombre'/>
            <button className={style.btnbuscador} onClick={()=>props.getPokemonByName(poke)}>Buscar</button>
            </form>
            <button className={style.ant} onClick={antPag} >Anterior</button>
            <button className={style.sig} onClick={sigPag} >Siguiente</button>
            <div className={style.contenedor}>
                <div className={style.filtros}>
                    <form >
                        <h2 className={style.nombre}>Filtrar por:</h2>
                        <table>
                            <tbody>
                            <tr>
                            <td className={style.input}>
                            <input type='radio' onChange={sinFiltros} id='sin filtros' name="filtro" value='sin filtros' />
                            </td>
                            <td>
                            <label htmlFor='sin filtros' >Restablecer</label>
                            </td>
                            </tr>
                            <tr>
                            <td>
                            <input type='radio' onChange={minAttack} id='MinAttack' name="filtro" value='MinAttack'/>
                            </td>
                            <td>
                            <label htmlFor='MinAttack' >MinAttack</label>
                            </td>
                            </tr>
                            <tr>
                            <td>
                            <input type='radio' onChange={maxAttack} id='maxAttack' name="filtro" value='maxAttack'/>
                            </td>
                            <td>
                            <label htmlFor='maxAttack' >MaxAttack</label>
                            </td>
                            </tr>
                            <tr>
                            <td>
                            <input type='radio' onChange={alfAZ} id='Filtrar por orden alfabetico(A-Z)' name="filtro" value='Filtrar por orden alfabetico(A-Z)' />
                            </td>
                            <td>
                            <label htmlFor='Filtrar por orden alfabetico(A-Z)' >Orden alfabético(A-Z)</label>
                            </td>
                            </tr>
                            <tr>
                            <td>
                            <input type='radio' onChange={alfZA} id='Filtrar por orden alfabetico(Z-A)' name="filtro" value='Filtrar por orden alfabetico(Z-A)' />
                            </td>
                            <td>
                            <label htmlFor='Filtrar por orden alfabetico(Z-A)' >Orden alfabético(Z-A)</label>
                            </td>
                            </tr>
                            <tr>
                            <td>
                            <input onChange={existentes} type='radio'  id='existentes' name="filtro" value='existentes' />
                            </td>
                            <td>
                            <label htmlFor='existentes'>Creados</label>
                            </td>
                            </tr>
                            <tr>
                            <td>
                            <input onChange={created} type='radio'  id='creados' name="filtro" value='creados' />
                            </td>
                            <td>
                            <label htmlFor='creados'>Existentes</label>
                            </td>
                            </tr>
                            </tbody>
                        </table>
                        <h2 className={style.name}>Por tipo:</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                    <input onChange={typeBug} type="radio" name="filtro" id="bug" value='bug'/>
                                    </td>
                                    <td>
                                    <label htmlFor="bug">Bug</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <input onChange={typeElectric} type="radio" name="filtro" id="electric" value='electric'/>
                                    </td>
                                    <td>
                                    <label htmlFor="electric">Electric</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <input onChange={typeFairy} type="radio" name="filtro" id="fairy" value='fairy'/>
                                    </td>
                                    <td>
                                    <label htmlFor="fairy">Fairy</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <input onChange={typeFire} type="radio" name="filtro" id="fire" value='fire'/>
                                    </td>
                                    <td>
                                    <label htmlFor="fire">Fire</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <input onChange={typeFlying} type="radio" name="filtro" id="flying" value='flying'/>
                                    </td>
                                    <td>
                                    <label htmlFor="flying">Flying</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <input onChange={typeNormal} type="radio" name="filtro" id="normal" value='normal'/>
                                    </td>
                                    <td>
                                    <label htmlFor="normal">Normal</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <input onChange={typeGrass} type="radio" name="filtro" id="grass" value='grass'/>
                                    </td>
                                    <td>
                                    <label htmlFor="grass">Grass</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <input onChange={typeGround} type="radio" name="filtro" id="ground" value='ground'/>
                                    </td>
                                    <td>
                                    <label htmlFor="ground">Ground</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <input onChange={typePoison} type="radio" name="filtro" id="poison" value='poison'/>
                                    </td>
                                    <td>
                                    <label htmlFor="poison">Poison</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <input onChange={typeWater} type="radio" name="filtro" id="water" value='water'/>
                                    </td>
                                    <td>
                                    <label htmlFor="water">Water</label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
            </div>
                <div>
                    {pokemon.length===0?<><h1>Cargando...</h1><div className={style.cargando}></div></>:null}
                    <span className={paginado().length > 2? style.pokemons: style.otro}>
                    {!!props.pokemons && paginado().map(i=><Pokemon name={i.name} img={i.img} types={i.types} key={i.id} id={i.id}/>)}
                    {props.pokemons.length === 1? <h1>{props.pokemons[0].error}</h1>:null}
                    </span>
                </div>
            </div>
        </div>
    )
}
export const mapStateToProps = state=>{
    return {pokemons:state.pokemons, pokemonByName: state.pokemonByName}
}
export default connect(mapStateToProps, {getAllPokemons, getPokemonByName,vaciarBusqueda})(Home)


