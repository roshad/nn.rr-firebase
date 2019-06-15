import React from 'react';

import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <nav className='blue'>
            <div class='navbar-wrapper '>
                <div class="container">
                    <Link to='' class="brand-logo">PMS</Link>

                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                    <In/>
                </div>

            </div>
        </nav>

    )
}

function In(props) {
    return (
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to='/Dashboard' >Dashboard</Link></li>
            <li><Link to='/newProject' >New Project</Link></li>
            
            <li><Link >Log Out</Link></li>
            <li><Link className='btn-floating'>Avatar</Link></li>
        </ul>
    )
}

function Out(props) {

}
export default Navbar;