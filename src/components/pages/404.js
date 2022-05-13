import './404.scss'

import {Link} from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <div className="container1">
        <ul className="moon">
          <li className="crater"></li>
          <li className="crater"></li>
          <li className="crater"></li>
        </ul>
        <ul className="mountain-range">
          <li className="mountain"></li>
          <li className="mountain"></li>
          <li className="mountain"></li>
          <li className="mountain"></li>
          <li className="mountain"></li>
          <li className="mountain"></li>
          <li className="mountain"></li>
          <li className="mountain"></li>
          <li className="mountain"></li>
          <li className="mountain"></li>
          <li className="mountain"></li>
        </ul>
      <ul className="forest">
        <li className="hill"></li>
        <li className="hill"></li>
        <li className="hill"></li>
      </ul>
      <ul className="sparkles">
          <li className="sparkle one"></li>
          <li className="sparkle one"></li>
          <li className="sparkle one"></li>
          <li className="sparkle one"></li>
          <li className="sparkle two"></li>
          <li className="sparkle two"></li>
          <li className="sparkle two"></li>
          <li className="sparkle two"></li>
          <li className="sparkle three"></li>
          <li className="sparkle three"></li>
          <li className="sparkle three"></li>
          <li className="sparkle three"></li>
          <li className="sparkle four"></li>
          <li className="sparkle four"></li>
          <li className="sparkle four"></li>
          <li className="sparkle four"></li>
          <li className="sparkle five"></li>
          <li className="sparkle five"></li>
          <li className="sparkle five"></li>
          <li className="sparkle five"></li>
          <li className="sparkle six"></li>
          <li className="sparkle six"></li>
          <li className="sparkle six"></li>
          <li className="sparkle six"></li>
          <li className="sparkle seven"></li>
          <li className="sparkle seven"></li>
          <li className="sparkle seven"></li>
          <li className="sparkle seven"></li>
          <li className="sparkle eight"></li>
          <li className="sparkle eight"></li>
          <li className="sparkle eight"></li>
          <li className="sparkle eight"></li>
        </ul>
      <div className="grass">
        <div className="pokemon">
          <div className="poke" id="bulbasaur">
            <div className="ear"></div>
            <div className="ear"></div>
            <div className="head"></div>
            <div className="leg"></div>
            <div className="bulba-body"></div>
            <div className="bulbs">
              <div className="bulb"></div>
            </div>
          </div>
          <div className="poke" id="pikachu">
            <div className="ear"></div>
            <div className="ear"></div>
            <div className="hand"></div>
            <div className="pika-body"></div>
            <div className="head"></div>
            <div className="pika-tail"></div>
          </div>
        </div>
      </div>
    </div>
            <p className="fof" style={{'textAlign': 'center', 'fontWeight': 'bold'}}>Page doesn't exist</p>
            <Link className="fof-link" style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'marginTop': '10px'}} to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;