import React from 'react';
import logo from './../../assets/logo_dev.png'

function Header() {
    return (
        <div className='cabecalho shadow p-3 mb-5 bg-white rounded'>
            <a href="https://www.devbox.net.br/" target="_blank" rel="noreferrer">
                <img src={logo} alt='logo da empresa dev box' width="150px"/>
            </a>
        </div>

    )
}

export default Header;