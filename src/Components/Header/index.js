import React from 'react';
import logo from './../../assets/logo_dev.png'

function Header() {
    return (
        <div className='cabecalho'>
            <a href="https://www.devbox.net.br/" target="_blank">
                <img src={logo} alt='logo da empresa dev box' width="150px"/>
            </a>
            
        </div>

    )
}

export default Header;