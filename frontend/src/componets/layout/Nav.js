import React from 'react';
import '../../styles/components/layout/Nav.css';

import { Link } from 'react-router-dom';

const Nav = (props) =>{
    return (
        <nav>
            <div id='holdernav'>
                <ul>
                    <li><Link id='mit' to='/'>Home</Link></li>
                    <li><Link id='mit' to='/nosotros'>Nosotros</Link></li>
                    <li><Link id='mit' to='/novedades'>Novedades</Link></li>
                    <li><Link id='mit' to='/contacto'>Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;