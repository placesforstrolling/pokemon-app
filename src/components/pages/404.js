import './404.scss'

import {Link} from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <div class="container1">
        <ul class="moon">
          <li class="crater"></li>
          <li class="crater"></li>
          <li class="crater"></li>
        </ul>
        <ul class="mountain-range">
          <li class="mountain"></li>
          <li class="mountain"></li>
          <li class="mountain"></li>
          <li class="mountain"></li>
          <li class="mountain"></li>
          <li class="mountain"></li>
          <li class="mountain"></li>
          <li class="mountain"></li>
          <li class="mountain"></li>
          <li class="mountain"></li>
          <li class="mountain"></li>
        </ul>
      <ul class="forest">
        <li class="hill"></li>
        <li class="hill"></li>
        <li class="hill"></li>
      </ul>
      <ul class="sparkles">
          <li class="sparkle one"></li>
          <li class="sparkle one"></li>
          <li class="sparkle one"></li>
          <li class="sparkle one"></li>
          <li class="sparkle two"></li>
          <li class="sparkle two"></li>
          <li class="sparkle two"></li>
          <li class="sparkle two"></li>
          <li class="sparkle three"></li>
          <li class="sparkle three"></li>
          <li class="sparkle three"></li>
          <li class="sparkle three"></li>
          <li class="sparkle four"></li>
          <li class="sparkle four"></li>
          <li class="sparkle four"></li>
          <li class="sparkle four"></li>
          <li class="sparkle five"></li>
          <li class="sparkle five"></li>
          <li class="sparkle five"></li>
          <li class="sparkle five"></li>
          <li class="sparkle six"></li>
          <li class="sparkle six"></li>
          <li class="sparkle six"></li>
          <li class="sparkle six"></li>
          <li class="sparkle seven"></li>
          <li class="sparkle seven"></li>
          <li class="sparkle seven"></li>
          <li class="sparkle seven"></li>
          <li class="sparkle eight"></li>
          <li class="sparkle eight"></li>
          <li class="sparkle eight"></li>
          <li class="sparkle eight"></li>
        </ul>
      <div class="grass">
        <div class="pokemon">
          <div class="poke" id="bulbasaur">
            <div class="ear"></div>
            <div class="ear"></div>
            <div class="head"></div>
            <div class="leg"></div>
            <div class="bulba-body"></div>
            <div class="bulbs">
              <div class="bulb"></div>
            </div>
          </div>
          <div class="poke" id="pikachu">
            <div class="ear"></div>
            <div class="ear"></div>
            <div class="hand"></div>
            <div class="pika-body"></div>
            <div class="head"></div>
            <div class="pika-tail"></div>
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