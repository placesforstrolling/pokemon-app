import './pokemon.scss';
import pika from '../../resources/img/pikachu.png';
import { useGetPokemonQuery } from '../../api/apiSlice';

const SinglePokemon = ({id, name}) => {

    const {data: pokemon=[],  
        isLoading,
        isError} = useGetPokemonQuery(id);
    let image;
    if (!isLoading) {
        image = pokemon.sprites.front_default;
    }
   

    const rndRgb = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    let color = {
        filter: `drop-shadow(3px 5px 2px rgb(${rndRgb(25, 255)}, ${rndRgb(25, 255)}, ${rndRgb(25, 255)}))`
    };
    let animation = {
        animation: `poke ${rndRgb(0.6, 0.8)}s infinite alternate`
    }

    return (
        <div className="col-lg-2">
            <div className="pokemon-item">
                <svg viewBox="0 0 300 436" className="cell" style={color}>
                    <defs>
                        <linearGradient id="bg-gradient" x1="157.02" y1="90.68" x2="157.02" y2="246.27" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="rgba( 255, 255, 255, 0.3 )" />
                            <stop offset={1} stopColor="rgba( 255, 255, 255, 0.5 )" />
                        </linearGradient>
                        <linearGradient id="bg-gradient-selected" x1="157.02" y1="90.68" x2="157.02" y2="246.27" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="rgba(255, 246, 146, 0.7)" />
                            <stop offset={1} stopColor="rgba(255, 225, 85, 0.8)" />
                        </linearGradient>
                    </defs>
                    <path d="M270.88,433C242,438,196,441,155,441s-93.84-3.61-115.88-8C14,428,11,405,9,368c-.92-17-4-70-4-145S9,77,9,77c1-37,5.23-59,30.12-64S114,5,155,5s91.77,2,115.88,8S300,40,301,77c0,0,4,71,4,146s-1.36,124.73-3,145C299,405,299.77,428,270.88,433Z" transform="translate(-5 -5)" className="bg" style={{ fill: 'url("#bg-gradient")' }} />
                    <path d="M155,15.31c18.41,0,80.61.55,108.25,7.62,10.49,2.69,17.29,8.7,21.39,18.91,3.59,8.94,5.34,21.33,5.87,41.45,0,.68,3.72,68.76,3.72,139.71,0,64.71-1,116.58-2.79,138.73-.22,2.86-.42,5.62-.62,8.3-2.22,30.4-3.56,48.75-27.5,53-26.06,4.64-68.58,7.64-108.32,7.64-38.49,0-88.09-3.5-108.3-7.64-22.62-4.63-25.37-26.25-27.21-61.29l-.13-2.36c-1-18.54-3.59-67.8-3.59-136.4,0-70.95,3.68-139,3.72-139.74,1-36.47,5.43-55.81,27.22-60.31,24.25-5,72.83-7.64,108.29-7.64m0-1c-38.14,0-85.35,2.87-108.5,7.66s-27.08,25.84-28,61.26c0,0-3.72,68-3.72,139.77s2.87,122.56,3.72,138.81c1.86,35.42,4.65,57.44,28,62.22,20.51,4.2,70.36,7.66,108.5,7.66s81.63-2.87,108.5-7.66,26.15-26.8,28.94-62.22c1.53-19.41,2.79-67,2.79-138.81s-3.72-139.77-3.72-139.77c-.93-35.42-5.58-55.52-28-61.26S193.14,14.31,155,14.31Z" transform="translate(-5 -5)" className="stroke" style={{ fill: 'rgb(255, 255, 255)' }} />
                    <svg viewBox="0 0 204.54 207.46" className="pokeball"><path d="M9.57,128.66l60.57,0s.42,1.17,1.49,3.35c10.51,22.12,34.09,31.79,56.93,22.92,12.07-4.69,20.49-13.53,24.76-26.27h60.6c-3.66,40.18-40.45,85.21-95.06,88.75C60.8,221.14,15.86,177.72,9.57,128.66Z" transform="translate(-9.57 -10.14)"></path> <path d="M214.11,99.09H153.33a15.33,15.33,0,0,0-1.28-3.46c-8-16.74-21.42-25.84-39.89-25.95C93.44,69.56,80,78.77,71.65,95.58c-.77,1.53-1.51,3.51-1.51,3.51H9.79c5.15-45.56,47-89.37,102.94-88.95S209.31,54.53,214.11,99.09Z" transform="translate(-9.57 -10.14)"></path> <path d="M111.72,134.54a20.39,20.39,0,1,1,20.53-19.9A20.5,20.5,0,0,1,111.72,134.54Z" transform="translate(-9.57 -10.14)"></path></svg>
                </svg>
                <img src={image} alt="Pokemon" className="pokeImg" style={animation}/>
                <h4 className="name">{name}</h4>
            </div>
        </div>
            
    );
}

export default SinglePokemon;
