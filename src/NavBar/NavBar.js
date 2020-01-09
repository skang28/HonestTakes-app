import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends React.Component {
    render() {
        return(
            <nav className="nav">
                <Link to='/'>Home</Link>
                <Link to='/posts'>Main</Link>
            </nav>
        )
    }
}

export default NavBar;