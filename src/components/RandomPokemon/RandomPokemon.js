import './randomPokemon.scss';

import { useGetPokemonQuery, useGetTotalNumberQuery } from '../../api/apiSlice';
import { useState } from 'react';
import ButtonGo from '../buttonGo/ButtonGo';

const RandomPokemon = () => {

    const [id, setId] = useState(1);
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [image, setImage] = useState('');
    const {data: pokemon, isLoading, isError} = useGetPokemonQuery(id);

  
    const getRandomPokemon = () => {

        setId(Math.floor(Math.random() * (800 - 1) + 1));
        if (!isLoading) {
            setName(pokemon.name);
            setHeight(pokemon.height);
            setImage(pokemon.sprites.front_default);
            console.log(pokemon)
        }

    }

  

    return (
        <section className="randomPokemon">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Randomizer</h2>
                    <div className="random-pokemon"></div>
                    <div className="door"></div>
                    <h2>Name: {name}</h2>
                    <h2>Height: {height} </h2>
                    <img src={image} alt="" class="pokeImage"/>
                    <ButtonGo text={'Random'}  link={'javascript:void(0)'} action={getRandomPokemon} disable={isLoading ? true : false}/>
                </div>
            </div>
        </section>
    )
}

export default RandomPokemon;