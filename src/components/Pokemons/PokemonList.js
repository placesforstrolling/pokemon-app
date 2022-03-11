import './pokemon.scss';
import heart from '../../resources/img/heart.png'

import SinglePokemon from './SinglePokemon';
import ButtonGo from '../buttonGo/ButtonGo';
import Spinner from '../Spinner/Spinner'
import { useMemo, useState } from 'react';

const PokemonList = () => {

    const [offset, setOffset] = useState(142);
    const [pokemons, setPokemons] = useState([]);
    const [oldPokemns, setOldPokemons] = useState([]);
    const [id, setId] = useState(1);

    const renderPokemonsList = () => {
        setId(id + 12);
        setOldPokemons([...oldPokemns, ...pokemons]);
        setPokemons([]);
        for (let i = id; i < id + 12; i++) {
            console.log(i);
            setPokemons(pokemons => [...pokemons,<SinglePokemon id={i} key={i}/>] );

            console.log(pokemons);
        }
        return [...oldPokemns, ...pokemons];
    }


    const elements = useMemo(() => {
        return renderPokemonsList()
    }, [offset])

    const loadMore = () => {
        setOffset(offset + 12);
    }

    return (
       <section className="pokemon-list">
           <h2 className="text-center">All our Lovely Pokes <img src={heart} alt="Heart" /></h2>
           <div className="pokes">
               <div className="row justify-content-around">
                   
                   {elements}
                   {<ButtonGo text={'More'} link={'javascript:void(0)'} action={loadMore} disable={false}/>}
               </div>
               
           </div>
       </section>
        
    );
}

export default PokemonList;