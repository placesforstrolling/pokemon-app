import './pokemon.scss';
import heart from '../../resources/img/heart.png'

import SinglePokemon from './SinglePokemon';
import ButtonGo from '../buttonGo/ButtonGo';
import Spinner from '../Spinner/Spinner'
import { useGetPokemonsQuery } from '../../api/apiSlice';
import { useMemo, useState } from 'react';

const PokemonList = () => {

    const [offset, setOffset] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    const [id, setId] = useState(1);

    const {
        data,
        isLoading,
        isError,
    } = useGetPokemonsQuery(offset);

    const renderPokemonsList = (arr) => {
        setId(id + 12);

        if (arr.length === 0) {
            return (
                <h5 className="text-center mt-5">No Pokemons</h5>
            )
        }

        // for (let i = id; i < id + 12; i++) {
        //     console.log(i);

        //         return <SinglePokemon id={i} key={i}/>
            
        // }
        return arr.map(({...props}, i) => {
            i++;
            console.log(props)
            return (
                <SinglePokemon id={i} {...props} key={i}/>
            )
        })
        
    }


    const elements = useMemo(() => {
        if (isLoading) {
            return <Spinner/>
        }
        if (data !== undefined) {
           return renderPokemonsList([...pokemons, ...data.results])
        } else {
            return <Spinner/>
        }
       
        
    }, [offset, isLoading])


    const loadMore = () => {
        setOffset(offset + 12);
        setPokemons([...pokemons, ...data.results])
    }

    return (
       <section className="pokemon-list">
           <h2 className="text-center">All our Lovely Pokes <img src={heart} alt="Heart" /></h2>
           <div className="pokes">
               <div className="row justify-content-around">
                   
                   {elements}
                   {<ButtonGo text={'More'} link={'javascript:void(0)'} action={loadMore} disable={isLoading ? true : false}/>}
               </div>
               
           </div>
       </section>
        
    );
}

export default PokemonList;