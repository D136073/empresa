import React from 'react';

const Header = (props) =>{
    return (
       <header>
        <div className='holder'>
            <img src='/frontend/public/images/logo.png' width='100' alt='Imagen'>
            </img>
            <h1>TITULO</h1>
        </div>
       </header>
    );
}
export default Header;