import './about.scss'

import ButtonGo from '../buttonGo/ButtonGo';
import catchPokemon from '../../resources/img/catchPokemon.png'

const About = () => {

    return (
        <section className="about">
            <div className="row">
                <div className="col-lg-6 text-center">
                    <h1>Catch Your Pokemon!</h1>
                    <ButtonGo text="Pokemon Go" link="/random"/>
                </div>
                <div className="col-lg-6">
                    <img src={catchPokemon} alt="Catch Pokemon" />
                </div>
            </div>
        </section>
    );
}

export default About;