import './randomPokemon.scss';

import { useGetPokemonQuery } from '../../api/apiSlice';
import { useState, useEffect } from 'react';
import ButtonGo from '../buttonGo/ButtonGo';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';

const RandomPokemon = () => {

    const [id, setId] = useState(1);
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [image, setImage] = useState('');
    const {data: pokemon, isLoading, isError} = useGetPokemonQuery(id);

    const changeId = () => {
            setId(rnd(1, 800));
    };

    useEffect(() => {
        if (!isLoading) {
            setName(pokemon.name);
            setHeight(pokemon.height);
            setImage(pokemon.sprites.front_default);
            setWeight(pokemon.weight);
        }
    }, [isLoading])
    
    function rnd (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    return (
        <section className="randomPokemon">

            <h2>Randomizer 🎲</h2>
            <div className="random-pokemon"></div>
            <div className="door"></div>
            <img src={image} alt="" class="pokeImage"/>
            {isLoading ? <Spinner/> : null}
            <div className="info">
                <h4>Name: {name}</h4>
                <h4>Height: {height} </h4>
                <h4>Weight: {weight} </h4>
                <Link to={`/poke/${id}`} >More</Link>
            </div>
            
            <ButtonGo 
                    text={'Random'}  
                    link={'javascript:void(0)'} 
                    action={changeId} 
                    disable={isLoading ? true : false}/>
        </section>
    )
}

export default RandomPokemon;