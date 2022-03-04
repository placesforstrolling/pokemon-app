import './pokemon.scss';
import heart from '../../resources/img/heart.png'

import SinglePokemon from './SinglePokemon';
import { useGetPokemonsQuery } from '../../api/apiSlice';

const PokemonList = () => {

    const {
        data: pokemons = [],
        isLoading,
        isError,
    } = useGetPokemonsQuery();

    console.log(pokemons)
    return (
       <section className="pokemon-list">
           <h2 className="text-center">All our Lovely Pokes <img src={heart} alt="Heart" /></h2>
           <div className="pokes">
               <div className="row justify-content-around">
                   <SinglePokemon/>
                   <SinglePokemon/>
                   <SinglePokemon/>
                   <SinglePokemon/>
                   <SinglePokemon/>
                   <SinglePokemon/>
                   <SinglePokemon/>
                   <SinglePokemon/>
                   <SinglePokemon/>
                   <SinglePokemon/>
                   <SinglePokemon/>
                   <SinglePokemon/>
               </div>
               
           </div>
       </section>
        
    );
}

export default PokemonList;