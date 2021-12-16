import React from "react";
import RepoItem from "./Components/RepoItem"


function RepoList({ repos }) {
    return (
        <div>
            <h2>Principais resultados:</h2>
            <div className="resultado">

                {repos.map(repo => (
                    // <h1 key={repo.id}>{repo.id}</h1>
                    <RepoItem key={repo.id} repo={repo} />
                ))}
            </div>
        </div>

    )
}

// const RepoList = ({ repos }) => (
//     <div>
//         {repos.map(repo => (
//             // <RepoItem repo={repo} />
//             <h1>{repo.id}</h1>
//         ))}
//     </div>

// )

export default RepoList;