import './randomPokemon.scss';

import { useGetPokemonQuery, useGetTotalNumberQuery } from '../../api/apiSlice';
import { useState } from 'react';
import ButtonGo from '../buttonGo/ButtonGo';
import Spinner from '../Spinner/Spinner';

const RandomPokemon = () => {

    const [id, setId] = useState(rnd(1, 800));
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [image, setImage] = useState('');
    const {data: pokemon, isLoading, isError} = useGetPokemonQuery(id);

  
    const getRandomPokemon = () => {

        setId(rnd(1, 800));
        if (!isLoading) {
            setName(pokemon.name);
            setHeight(pokemon.height);
            setImage(pokemon.sprites.front_default);
            setWeight(pokemon.weight)
        }
    }

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
                    </div>
                    
                    <ButtonGo 
                            text={'Random'}  
                            link={'javascript:void(0)'} 
                            action={getRandomPokemon} 
                            disable={isLoading ? true : false}/>
        </section>
    )
}

export default RandomPokemon;