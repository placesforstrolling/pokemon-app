import './about.scss'

import catchPokemon from '../../resources/img/catchPokemon.png'

const About = () => {

    return (
        <section className="about">
            <div className="row">
                <div className="col-lg-6">
                    <h1>Catch Your Pokemon!</h1>
                </div>
                <div className="col-lg-6">
                    <img src={catchPokemon} alt="Catch Pokemon" />
                </div>
            </div>
        </section>
    );
}

export default About;