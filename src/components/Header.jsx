import React from 'react';
import '../assets/styles/Header.css'

const Header = () => {
    return(
        <React.Fragment>
       <header className='Header'>
            <a href="/" className='Header__logo'>Sergio Leal</a>
            <nav>
               <ul className='Header__links'>
                    <li><a href="/">Sobre mí</a></li>
                    <li><a href="/">Sobre mí</a></li>
                    <li><a href="/">Sobre mí</a></li>
               </ul>
           </nav>
                <a href="/"><button className='btn btn-primary Header__button'>Contácto</button></a>
       </header>
        </React.Fragment>
    )
}

export default Header