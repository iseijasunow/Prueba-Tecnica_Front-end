import { UserRespository } from "./UserRepository"
import { useState, useEffect } from 'react'
import { GitHub } from './services/GitHubService/GitHub'


export function RepositoryList({user}) {
    const [repositories, setRepositories] = useState([])


    useEffect(() => {
        console.log(user)
        if(user){
            const github = new GitHub()
            github.getRepositories(user)
            .then(result => {
                setRepositories(result)
            })
            .catch(error => {
                setRepositories([])
            })
        }
      }, [user])


    return (
        <div className="repository-list">
            <p><strong>Repositories</strong></p>
            <div>
                {
                    repositories.map(({id, name, description, language}) => 
                        <UserRespository 
                            key={id}
                            name={name}
                            description={description}
                            language={language}
                         />
                    )
                }
            </div>
        </div>
    )
}