import './header.scss'

import {Link} from 'react-router-dom';
import logo from '../../resources/img/logo.png'

const Header = () => {

    return (
        <header>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="Pokemon logo" className="logotype"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/random">Random</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/whataf">Defunct </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Header;