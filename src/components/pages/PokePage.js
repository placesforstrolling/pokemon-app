import './pokePage.scss';

import { useParams } from "react-router";
import { useGetPokemonQuery } from '../../api/apiSlice';
import Spinner from "../Spinner/Spinner";
import { Link } from 'react-router-dom';

{/* <i class="fa-solid fa-hand-back-fist"></i> */}
const PokePage = () => {

    const {id} = useParams();

    const {data: pokemon=[],  
           isLoading,
           isError} = useGetPokemonQuery(id);

    const renderPoke = (pokemon, isLoading, isError) => {
        if (!isLoading && !isError) {
            
            console.log(pokemon);
            let types = [];
            pokemon.types.forEach(type => {
                // switch (type.type.name) {
                //     case 'normal':
                //         icon = <i class="fa-solid fa-hand-peace"></i>;
                //         color = 'gray';
                //         break;
                //     case 'fighting':
                //         icon = <i class="fa-solid fa-hand-fist"></i>;
                //         break;
                //     case 'flying':
                //         icon = <i class="fa-brands fa-fly"></i>;
                //         break;
                //     case 'poison':
                //         icon = <i class="fa-solid fa-skull-crossbones"></i>;
                //         color = '#b97fc9';
                //         break;
                //     case 'ground':
                //         icon = <i class="fa-solid fa-plane-slash"></i>;
                //         break;
                //     case 'rock':
                //         icon = <i class="fa-solid fa-mountain"></i>;
                //         break;
                //     case 'bug':
                //         icon = <i class="fa-solid fa-bug"></i>;
                //         color = '#729f3f'
                //         break;
                //     case 'ghost':
                //         icon = <i class="fa-solid fa-ghost"></i>;
                //         break;
                //     case 'steel':
                //         icon = <i class="fa-solid fa-diamond"></i>;
                //         break;
                //     case 'fire':
                //         icon = <i class="fa-solid fa-fire"></i>;
                //         color = '#fd7d24'
                //         break;
                //     case 'water':
                //         icon = <i class="fa-solid fa-droplet"></i>;
                //         break;
                //     case 'grass':
                //         icon = <i class="fa-brands fa-pagelines"></i>;
                //         color = '9bcc50';
                //         break;
                //     case 'electric':
                //         icon = <i class="fa-solid fa-bolt"></i>;
                //         break;
                //     case 'psychic':
                //         icon = <i class="fa-solid fa-brain"></i>;
                //         break;
                //     case 'ice':
                //         icon = <i class="fa-solid fa-icicles"></i>;
                //         break;
                //     case 'dragon':
                //         icon = <i class="fa-solid fa-dragon"></i>;
                //         break;
                //     case 'dark':
                //         icon = <i class="fa-solid fa-moon"></i>;
                //         break;
                //     case 'fairy':
                //         icon = <i class="fa-solid fa-wand-sparkles"></i>;
                //         break;
                //     default:
                //         icon = <i class="fa-brands fa-cloudsmith"></i>;
                //         color = 'violet'
                //         break;
                // }
                types.push(<span className={'type ' + 'background-color-' + type.type.name}>{type.type.name}</span>);
            })
            return (
                <div className="col-lg-12">
                    <div className="btn-group">
                        {id > 1 ? <Link to={`/poke/${parseInt(id, 10)-1}`}>Previous</Link> : null}
                        {id < 898 ? <Link to={`/poke/${(parseInt(id, 10)+1)}`}>Next</Link> : null}
                        
                    </div>
                    <div className="info">
                    <h2>{pokemon.name}</h2>
                    <h4>Height: {pokemon.height}</h4>
                    <h4>Weight: {pokemon.weight}</h4>
                    <h4>Type: {types}</h4>
                    </div>     
                    <img className="front" src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <img className="back" src={pokemon.sprites.back_default} alt={pokemon.name} />
                </div>

            )

        } else if (isLoading) {
            return <Spinner/>
        } else {
            console.log('Error');
        }
    }

    const poke = renderPoke(pokemon, isLoading, isError);


    return (
        <section className="pokemonSingle">
            <div className="row">
                {poke}
            </div>
        </section>
    )
}

export default PokePage;