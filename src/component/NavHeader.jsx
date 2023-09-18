import React from 'react'
import { Link } from 'react-router-dom'


const NavHeader = () => {
    return (
        <div className='bg container-fluid'>
            <div className='row'>
            <div className='col'>
            <nav className="navbar ">
                <div className="container">
                    <div className='row'>
                    <Link className="navbar-brand" to="/"> <h1 id='header-h1'>श्री बगलामुखी पीतांबरा सिद्ध पीठ जबलपुर</h1></Link>                     
                    </div>

                </div>
            </nav>
            </div>
            </div>
        </div>
    )
}

export default NavHeader
