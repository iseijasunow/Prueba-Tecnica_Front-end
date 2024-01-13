import React, { useEffect, useState } from "react";
import "./Form.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [nameSearch, setNameSearch] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const updateName = (event) => {
    setNameSearch(event.target.value);
  };

  useEffect(() => {
    console.log(nameSearch);
  }, [nameSearch]);

  const handleSearch = (event) => {
    event.preventDefault();

    if (nameSearch.length < 4) {
      setAlertMessage("The search must have at least 4 characters long.");
      return;
    }

    if (nameSearch.toLowerCase() === "iseijasunow") {
      setAlertMessage("You cannot search this term, try with another one.");
      return;
    }

    navigate(`/results/${nameSearch}`);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter a name"
          onChange={updateName}
        ></input>
        <button type="button" onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <span>{alertMessage}</span>
    </>
  );
}
