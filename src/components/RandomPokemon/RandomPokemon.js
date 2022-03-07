import './randomPokemon.scss';

import { useGetPokemonQuery, useGetTotalNumberQuery } from '../../api/apiSlice';
import { useState } from 'react';
import ButtonGo from '../buttonGo/ButtonGo';

const RandomPokemon = () => {

    const [id, setId] = useState();

    const {data: pokemon, isLoading, isError} = useGetPokemonQuery(id);
  
    const getRandomPokemon = () => {
        if (!isLoading) {
            setId(Math.floor(Math.random() * (800 - 1) + 1));
        }
    }
    const name = '';
    const height = '';

    if (!isLoading) {
        const {name, height} = pokemon;

    }

    return (
        <section className="randomPokemon">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Randomizer</h2>
                    <div className="random-pokemon"></div>
                    <div className="door"></div>
                    <h2>Name: {isLoading ? '' : name}</h2>
                    <h2>Height: {isLoading ? '' : height}</h2>
                    <ButtonGo text={'Random'}  link={'javascript:void(0)'} action={getRandomPokemon} disable={isLoading ? true : false}/>
                </div>
            </div>
        </section>
    )
}

export default RandomPokemon;