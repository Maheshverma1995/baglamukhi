import React from 'react'
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <div className='container-fluid'> 
        <div className='row'>
          
          <nav className="navbar navbar-expand-lg bg">
                <div className="container">
                    <Link className="navbar-brand" to="/">बगलामुखी माता</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to="home" smooth={true} duration={500}>होम</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="home" smooth={true} duration={500}>सक्षिप्त विवरण</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="home" smooth={true} duration={500}>बगलामुखी पूजा</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="home" smooth={true} duration={500}>गैलरी</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="home" smooth={true} duration={500}>वीडियो</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="home" smooth={true} duration={500}>न्यूज़</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
          </div>
        </div>
        
    )
}

export default NavBar
