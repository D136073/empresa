import React from 'react';
import '../../styles/components/layout/Header.css';

const Header = (props) =>{
    return (
       <header className='holder'>
        <div className='logo'>
            <img id='logo' src='images/logo.png' width='100' alt='Imagen' />   
        </div>
        <div id='titulo'>
            <h1 id='nombre'>DIEGO TESTA</h1>
            <h3>Creador Digital</h3>
        </div>
       </header>
    );
}
export default Header;