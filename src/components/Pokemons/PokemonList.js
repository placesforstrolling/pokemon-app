import './pokemon.scss';
import heart from '../../resources/img/heart.png'

import SinglePokemon from './SinglePokemon';
import ButtonGo from '../buttonGo/ButtonGo';
import Spinner from '../Spinner/Spinner'
import { useGetPokemonsQuery, useGetPokemonQuery } from '../../api/apiSlice';

const PokemonList = () => {

    const {
        data: pokemons = [],
        isLoading,
        isError,
    } = useGetPokemonsQuery(12);

    if (isLoading) {
        return <Spinner/>;
    } else if (isError) {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderPokemonsList = (arr) => {
        if (arr.length === 0) {
            return (
                <h5 className="text-center mt-5">No Pokemons</h5>
            )
        }

        return arr.map(({...props}, i) => {
            i++;
            return (
                <SinglePokemon id={i} {...props} />
            )
        })
    }

    const elements = !isLoading ? renderPokemonsList(pokemons.results) : null;

    const loadMore = () => {
        console.log(1)
    }

    return (
       <section className="pokemon-list">
           <h2 className="text-center">All our Lovely Pokes <img src={heart} alt="Heart" /></h2>
           <div className="pokes">
               <div className="row justify-content-around">
                   {elements}
                   {<ButtonGo text={'More'} link={'javascript:void(0)'} action={loadMore}/>}
               </div>
               
           </div>
       </section>
        
    );
}

export default PokemonList;