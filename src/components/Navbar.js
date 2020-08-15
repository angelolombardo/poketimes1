import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    
    return(
    <nav className="nav-wrapper red darken-3">
        <div className="container">
            <a href="../home" className="brand-logo">Poke'Times</a>
            <ul className="right">
                <li><Link to="../home">Home</Link></li>
                <li><NavLink to="../about">About</NavLink></li>
                <li><Link to="../contact">Contact</Link></li>
                
            </ul>
        </div>
    </nav>
    )
}

export default Navbar
