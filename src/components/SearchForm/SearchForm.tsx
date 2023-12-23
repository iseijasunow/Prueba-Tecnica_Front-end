import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchForm.scss";
import { useContext, useState } from "react";
import UsersContext from "../../store/users/context/UsersContext";

const SearchForm = () => {
  const [wordToSearch, setWordToSearch] = useState<string>("");

  const { loadUsers } = useContext(UsersContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWordToSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    loadUsers(wordToSearch);
  };

  return (
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
  );
};

export default SearchForm;
