import { useState } from "react";
import { fetchDataUsers } from "../services/fetchDataUsers";
import { ErrorBoundary } from "./ErrorBoundary";
import { Graphs } from "./Graphs";
import { FaUserAlt } from "react-icons/fa";

import "../styles/SearchUser.scss";

export const SearchUser = () => {

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState();
  const [followers, setFollowers] = useState([]);

  const input = document.querySelector('.search-input');

  const searchUser = async (user) => {
    /* validator */
    if(user.length <= 4 || user === 'iseijasunow') {
      return null;
    }
    await fetchDataUsers(user).then((response) => {
      setResult(response.items);
    
      /* Estado para mandar al componente Graphs */
      setFollowers(response.items.map((user, index) => {
        if(index < 10) {
          return { 
            name: user.login, 
            followers: user.followers_url.length
          }
        } 
        }
      )
      .filter(maped => maped != undefined)  // no se me ocurría otra solución tan fea de quitar los undefined de los resultados, sorry :(
      );
      input.value = '';
    })
    .catch(error => console.log(error));

  };

  return (
    <>
      <ErrorBoundary>
        <h1 className="title">Prueba Técnica FrontEnd</h1>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={() => searchUser(prompt)}>Search</button>
        <div className="main-content">
          <div className="search-results">
          {result?.map((user, index) => {
            /* Return only 10 first users */
            return (
              index < 10 && (
                <div key={user.id} className="user-list">
                  <FaUserAlt/> 
                  <a href={`user/${user.login}`}>
                    <span>{user.id} - {user.login}</span>
                    <img src={user.avatar_url} alt={user.login} style={{ width: '100px' }}/>
                  </a>
                </div>
              )
            );
            
          })}
          </div>
          {
            followers.length > 0 ? <Graphs data = { followers }/> : null
          }
        </div>
      </ErrorBoundary>
    </>
  );

}
