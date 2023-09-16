import React from 'react'
import { Link } from 'react-router-dom'

const NavHeader = () => {
    return (
        <div className='bg-body-tertiary'>
            <nav className="navbar ">
                <div className="container">
                    <Link className="navbar-brand">Navbar</Link>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavHeader
