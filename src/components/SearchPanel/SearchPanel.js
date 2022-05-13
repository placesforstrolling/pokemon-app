import './search.scss';

import { useSearchPokemonQuery } from '../../api/apiSlice';
import ButtonGo from '../buttonGo/ButtonGo';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const SearchPanel = () => {

    const [str, setStr] = useState('');
    const [searchStr, setSearchStr] = useState();
    const {data: pokemon, isLoading, isError} = useSearchPokemonQuery(searchStr);

    const search = () => {
        setSearchStr(str);
        console.log(isError ? 'Error' : pokemon);
        if (!isLoading && !isError) {
            console.log(pokemon);
        }
    }

    return (
        <section className="search">
            <h1>Find your Pokemon!</h1>
            <form className="row g-3" action="">
            <div className="col-auto">
                <input 
                    onChange={(event) => setStr(event.target.value.toLowerCase())}
                    value={str} 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. Pikachu" 
                    required/>
            </div>
            <div className="col-auto">
                <ButtonGo text={'Search'} link={'javascript:void(0)'} action={search} disable={false}/>
            </div>
            </form>
            {!isLoading && !isError ? <><h4>That's it!</h4><Link className="nav-link" to={`/poke/${pokemon.id}`}>Your Poke</Link></> : <p className="nothing">Nothing found :(</p>}
        </section>
    )
}

export default SearchPanel;