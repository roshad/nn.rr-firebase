import React from 'react';

import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        // <nav>
        //     <div className='navbar-wrapper'>
        //         <Link className="brand-logo">PMS</Link>
        //         <a href="#" class="brand-logo">Logo</a>
        //         <ul id="nav-mobile" class="right hide-on-med-and-down">
        //             <li><a href="sass.html">Sass</a></li>
        //             <li><a href="badges.html">Components</a></li>
        //             <li><a href="collapsible.html">JavaScript</a></li>
        //         </ul>
        //     </div>
        // </nav>
        <nav>
        <div class="nav-wrapper">
          <a href="#" className="brand-logo left">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;