import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import logo from './honestT_logo.png'

class NavBar extends React.Component {
    render() {
        return(
            <nav className="nav">
                <Link to='/'><img src={logo} className="homeLogo" /></Link>
                <Link to='/posts' className="navLinks">Main</Link>
            </nav>
        )
    }
}

export default NavBar;