import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends React.Component {
    render() {
        return(
            <nav className="nav">
                <Link to='/' className="navLinks">Home</Link>
                <Link to='/posts' className="navLinks">Main</Link>
            </nav>
        )
    }
}

export default NavBar;