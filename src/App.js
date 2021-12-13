import { useState } from 'react';
import logo from './assets/logo.png'

import './App.css';

function App() {

  const [search, setSearch] = useState('');
  const [repositorioData, setRepositorioData] = useState();

  const buscarRepositorios = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then(resposta => resposta.json())
      .then(repositoriosResponse => setRepositorioData(repositoriosResponse))
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  console.log(repositorioData)

  return (
    <div className='container text-center'>
      <header>
        <h1 className='py-5 text-uppercase'>Repositorios do GitHub</h1>
        <img src={logo} className='responsive ' alt='logoSistema' height='120px'/>
      </header>
      
      <form onSubmit={buscarRepositorios}>
        <div className='formulario'>
          <input
            type="text"
            className='input-group'
            required
            value={search}
            onChange={handleChange}/>
            <button type='submit' className='botao'>
              Buscar
            </button>
        </div>
      </form>
      {repositorioData && (
      <div>
        <img
          src={repositorioData.avatar_url}/>
      </div>)}
    </div>
  );
}

export default App;
