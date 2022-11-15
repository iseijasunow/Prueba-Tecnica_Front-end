import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUser } from "../services/fetchUser";
import { FaUserAlt } from "react-icons/fa";

import '../styles/DataUser.scss';

export const DataUser = () => {

  let { name } = useParams();
  const navigate = useNavigate();

  const [ result, setResult ] = useState();


  useEffect(() => {
    fetchUser(name)
      .then(response => {
        setResult(response);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className="data-user">
        <div className="data-user-title">
          <FaUserAlt/>
          <h2>{(result?.login)}</h2>
        </div>
        <img 
          src={result?.avatar_url} 
          alt={result?.login} 
          className="avatar-user"
        />
        <a href={result?.html_url}>
          {name}'s GitHub Profile
        </a>
        <button onClick={() => navigate('/')}>
          Regresar
        </button>
      </div>
    </>
  )
}


