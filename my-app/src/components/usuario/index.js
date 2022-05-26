import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react';
import './style.css'
const Usuario = () =>{

    const {login} = useParams()
   

    const [usuario, setUsuario] = useState([]);

React.useEffect(() => {
    peticionGet()
},[])

    const peticionGet = (login) => {
        
        axios.get(`https://api.github.com/users/hernandez20`)
          .then((response) => {
            setUsuario(response.data)
            console.log(response.data)
            console.log('usuario',usuario)
            
            
            
    
    
          }).catch(error => {
            console.log(error);
          })
      }


return(<>

<div className='user-profile'>
                <div className="user-profile-grid">
                    <div className='user-img'>
                        <img className='user-img' src={'' + usuario.avatar_url} alt="" />
                    </div>
                    <div className="profile-user-settings">
                        <h1 className='user-name'>{usuario.name}</h1>
                        <a className="btn-visit" href={usuario.html_url} >Visit Profile</a>
                    </div>
                    <div className="user-bio">
                        <p className='user-bio'>{usuario.bio}</p>
                    </div>
                    <div className="user-stats">
                        <ul>
                            <li className='user-following'
                                onClick={(event) => this.getUserData(event, `${usuario.url}/following`)} >
                                <b>{usuario.following}</b>
                                <p>Following</p>
                            </li>
                            <li className='user-followers'
                                onClick={(event) => this.getUserData(event, `${usuario.url}/followers`)} >
                                <b>{usuario.followers}</b>
                                <p>Followers</p>
                            </li>
                            <li className='user-repos'
                                onClick={(event) => this.getUserData(event, `${usuario.url}/repos`)} >
                                <b>{usuario.public_repos}</b>
                                <p>Repos</p>
                            </li>
                        </ul>

                    </div>
                   
                  
                </div>
            </div>


</>)
}
export default Usuario;
