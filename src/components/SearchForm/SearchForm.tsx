import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchForm.scss";
import { useContext, useState } from "react";
import UsersContext from "../../store/users/context/UsersContext";

const SearchForm = () => {
  const [wordToSearch, setWordToSearch] = useState<string>("");
  const [isShort, setIsShort] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");

  const { loadUsers } = useContext(UsersContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWordToSearch(event.target.value);

    if (wordToSearch.length < 3) {
      setIsShort(true);

      return;
    }

    setIsShort(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isShort) {
      setMessage("Word must be 4 or more characters");
      loadUsers("");

      return;
    }

    if (wordToSearch.toLowerCase() === "iseijasunow") {
      setMessage("You cannot search for iseijasunow");
      loadUsers("");

      return;
    }

    setMessage("");
    loadUsers(wordToSearch);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="word" className="form__label">
          User to search:{" "}
        </label>
        <input
          type="text"
          id="word"
          placeholder="search"
          className="form__input"
          onChange={handleChange}
        />
        <button type="submit" className="form__button">
          <FontAwesomeIcon icon={faSearch} color="#6f6f8b" size="2x" />
        </button>
      </form>
      <span>{message}</span>
    </>
  );
};

export default SearchForm;
