import './pokePage.scss';

import { useParams } from "react-router";
import { useGetPokemonQuery } from '../../api/apiSlice';
import Spinner from "../Spinner/Spinner";

{/* <i class="fa-solid fa-hand-back-fist"></i> */}
const PokePage = () => {

    const {id} = useParams();

    const {data: pokemon=[],  
           isLoading,
           isError} = useGetPokemonQuery(id);

    const renderPoke = (pokemon, isLoading, isError) => {
        if (!isLoading && !isError) {
            // const {name, height} = pokemon;
            let icon = '';
            switch (pokemon.types[0].type.name) {
                case 'normal':
                    icon = <i class="fa-solid fa-hand-peace"></i>;
                    break;
                case 'fighting':
                    icon = <i class="fa-solid fa-hand-fist"></i>;
                    break;
                case 'flying':
                    icon = <i class="fa-brands fa-fly"></i>;
                    break;
                case 'poison':
                    icon = <i class="fa-solid fa-skull-crossbones"></i>;
                    break;
                case 'ground':
                    icon = <i class="fa-solid fa-plane-slash"></i>;
                    break;
                case 'rock':
                    icon = <i class="fa-solid fa-mountain"></i>;
                    break;
                case 'bug':
                    icon = <i class="fa-solid fa-bug"></i>;
                    break;
                case 'ghost':
                    icon = <i class="fa-solid fa-ghost"></i>;
                    break;
                case 'steel':
                    icon = <i class="fa-solid fa-diamond"></i>;
                    break;
                case 'fire':
                    icon = <i class="fa-solid fa-fire"></i>;
                    break;
                case 'water':
                    icon = <i class="fa-solid fa-droplet"></i>;
                    break;
                case 'grass':
                    icon = <i class="fa-brands fa-pagelines"></i>;
                    break;
                case 'electric':
                    icon = <i class="fa-solid fa-bolt"></i>;
                    break;
                case 'psychic':
                    icon = <i class="fa-solid fa-brain"></i>;
                    break;
                case 'ice':
                    icon = <i class="fa-solid fa-icicles"></i>;
                    break;
                case 'dragon':
                    icon = <i class="fa-solid fa-dragon"></i>;
                    break;
                case 'dark':
                    icon = <i class="fa-solid fa-moon"></i>;
                    break;
                case 'fairy':
                    icon = <i class="fa-solid fa-wand-sparkles"></i>;
                    break;
                default:
                    icon = <i class="fa-brands fa-cloudsmith"></i>;
                    break;
            }
            console.log(pokemon)
            return (
                <div className="col-lg-12">
                    <h2>{pokemon.name}</h2>
                    <h4>Height: {pokemon.height}</h4>
                    <h4>Weight: {pokemon.weight}</h4>
                    <h4>Type: {pokemon.types[0].type.name} {icon}</h4>
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