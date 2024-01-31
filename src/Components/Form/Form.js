import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.scss";

export default function Form() {
  const [nameSearch, setNameSearch] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const updateName = (event) => {
    setNameSearch(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (nameSearch.length < 4) {
      setAlertMessage("The search must be at least 4 characters long.");
      return;
    }

    if (nameSearch.toLowerCase() === "iseijasunow") {
      setAlertMessage("You cannot search this term, try with another one.");
      return;
    }

    navigate(`/results/${nameSearch}`);
    setAlertMessage("");
  };

  return (
    <div className="form">
      <a>Find any user on Github</a>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter a name"
          onChange={updateName}
        ></input>
        <button type="button" onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon"/>
        </button>
      </form>
      <span className="alert">{alertMessage}</span>
    </div>
  );
}
