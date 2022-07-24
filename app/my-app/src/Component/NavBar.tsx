import React from "react";
import logomc from './Img/logomc.png';
import { Link } from 'react-router-dom';
import '../App.css'

const NavBar: React.FunctionComponent = () => {
    return(
        <div>
          <div style={{backgroundColor: '#222244', color: 'white', width: '100%'}}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                   <button className="navbar-toggler" type="button" data-bs-toogle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                   </button>
                   <img src={logomc} style={{width: '70px', height: '70px', borderRadius: '80px'}}/>
                   <a className="navbar-brand text-white mx-3" href="#">MortalCombat</a>
                   <div className="collapse navbar-collapse mx-5" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/'><a className="nav-link active text-white mx-4" aria-current="page" href="#">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white mx-3" href="#">Documentation</a>
                        </li>
                        <li className="nav-item">
                            <Link to='/Login'><a className="nav-link disable text-white mx-3" href="#" aria-disabled="true">Login</a></Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-lable="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                   </div>
                </div>
            </nav>
          </div>
        </div>
    )
}

export default NavBar;
