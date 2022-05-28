import React from "react";
import { useEffect, useState} from "react";
import Axios from "axios"
import "./apiAxios.css";
import Loader from "./loader";

export default function ApiAxios(){
      const [user, setUser]= useState([]);
      const[search, setSearch ]= useState("");
    
     useEffect(()=>{
     Axios.get("https://api.github.com/search/users?q=YOUR_NAME")
     .then(response => {setUser(response.data.items)})
      },[]);

const searcher = (e) =>{
      setSearch(e.target.value)
};

let result = !search ? user : user.filter((dato => dato.login.toLowerCase().includes(search.toLowerCase())))
return(
<>
<div   className="todoSearch">
<h1 className="title">Users</h1>

<input
      type="text"
      value={search}
      onChange={searcher}
      placeholder="Search ..."
    />
</div>      
      <div  className="container">
       { result?.length !== 0?(result.map((item) =>
       <div className="card" >
      <img className="image" src={item.avatar_url}  alt="image_comic"/>
      <h2>Name User:</h2>
      <a href={item.html_url} className="url-user" target='blank'> 
      {item.login}
      </a>
      <h2>Name Id:</h2>
      <h2 className="title1">{item.id}</h2>
      </div> 
       )):<Loader />}      
      </div>
   
</>
);
};