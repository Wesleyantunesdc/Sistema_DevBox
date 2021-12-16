import React from "react";

function RepoItem({ repo }) {
    return (
        <div className="item shadow p-3 mb-5  rounded">
            <div className="box-esquerda">
                <a href={repo.owner.html_url}
                    className="imagem_avatar"
                    target="_blank" rel="noreferrer">
                    <img src={repo.owner.avatar_url} height="100px" alt="avatar do autor do projeto"/>
                </a>
            </div>
            <div className="box-direita">
                <p>Projeto: {repo.name}</p>
                <p>Autor: {repo.owner.login}</p>
                <p>Descricao: {repo.description}</p>
                <p>Linguagem: {repo.language}</p>
            </div>
        </div>

    )

}

export default RepoItem;