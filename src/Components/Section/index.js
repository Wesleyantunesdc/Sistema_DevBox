import React from "react";
import { useState } from 'react';
import RepoList from "./RepoList";
import logo from "./../../assets/logo.png"

function Section() {
    const [search, setSearch] = useState('')
    const [repositorioData, setRepositorioData] = useState('')
    const [loading, setLoading] = useState(false);

   const handleSumit = (event) => {
        setLoading(true);
        event.preventDefault();
        fetch(`https://api.github.com/search/repositories?q=language:${search}&sort=starts&page=1`)
            .then((resposta) => resposta.json())
            .then((repositoriosResponse) => setRepositorioData(repositoriosResponse))
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false);
            })
        console.log(repositorioData)
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    if(loading){
        return <p>Data is loading</p>
    }


    return (
        <div>
            <div className="caixa-apresentacao">
                <h1 className='py-5 text-uppercase'>Repositorios do GitHub</h1>
                <img src={logo} className='responsive ' alt='logoSistema' height='120px' />
            </div>
            <form onSubmit={handleSumit}>
                <div className='formulario'>
                    <input
                        type="text"
                        className='input-group'
                        placeholder='Linguagem de programacao'
                        required
                        value={search}
                        onChange={handleChange} />
                    <button type='submit' className='botao'>
                        Buscar
                    </button>
                </div>
            </form>
            {repositorioData.items && loading===false && (
                <RepoList repos={repositorioData.items} />
            )}
        </div>
    )



    // const [search, setSearch] = useState('');
    // const [repositorioData, setRepositorioData] = useState('');

    // const buscarRepositorios = (event) => {
    //     event.preventDefault();
    //     fetch(`https://api.github.com/users/facebook/repos`)
    //         .then(resposta => resposta.json())
    //         .then(repositoriosResponse => setRepositorioData(repositoriosResponse))
    //     console.log(repositorioData)
    // }

    // const handleChange = (event) => {
    //     setSearch(event.target.value)
    // }

    // <div>
    //     <h1 className='py-5 text-uppercase'>Repositorios do GitHub</h1>
    //     <img src={logo} className='responsive ' alt='logoSistema' height='120px' />
    //     <form onSubmit={buscarRepositorios}>
    //         <div className='formulario'>
    //             <input
    //                 type="text"
    //                 className='input-group'
    //                 placeholder='Linguagem de programacao'
    //                 required
    //                 value={search}
    //                 onChange={handleChange} />
    //             <button type='submit' className='botao'>
    //                 Buscar
    //             </button>
    //         </div>
    //     </form>
    // </div>
}

export default Section;