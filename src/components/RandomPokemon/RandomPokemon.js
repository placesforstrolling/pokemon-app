import './randomPokemon.scss';

import { useGetPokemonQuery } from '../../api/apiSlice';
import { useState, useEffect } from 'react';
import ButtonGo from '../buttonGo/ButtonGo';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';

const RandomPokemon = () => {

    const [id, setId] = useState(rnd(1, 898));
    const [oldId, setOldId] = useState(id);
    const [info, setInfo] = useState();
    const {data: pokemon, isLoading, isError} = useGetPokemonQuery(id);

    const changeId = () => {
        setId(rnd(1, 898));
        setOldId(id);
    };

    const render = (pokemon) => {
        return (
            <>
                <img src={pokemon.sprites.front_default} alt="" class="pokeImage"/>
                <div className="info">
                    <h4>Name: {pokemon.name}</h4>
                    <h4>Height: {pokemon.height} </h4>
                    <h4>Weight: {pokemon.weight} </h4>
                    <Link to={`/poke/${oldId}`} >More</Link>
                </div>
            </>
        )   
    }
    useEffect(() => {
        if (!isLoading) {
                setInfo(render(pokemon))  
        }
    }, [id, isLoading])

    function rnd (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    return (
        <section className="randomPokemon">

            <h2>Randomizer 🎲</h2>
            <div className="random-pokemon"></div>
            <div className="door"></div>
            {isLoading ? <Spinner/> : info}
            <ButtonGo 
                    text={'Random'}  
                    link={'javascript:void(0)'} 
                    action={changeId} 
                    disable={isLoading ? true : false}/>
        </section>
    )
}

export default RandomPokemon;