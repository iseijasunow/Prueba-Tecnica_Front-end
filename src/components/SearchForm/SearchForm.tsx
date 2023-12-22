import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchForm = () => {
  return (
    <form className="form">
      <label htmlFor="word" className="form__label">
        user to search:{" "}
      </label>
      <input
        type="text"
        id="word"
        placeholder="search"
        className="form__input"
      />
      <button type="submit" className="form__button">
        <FontAwesomeIcon icon={faSearch} color="white" />
      </button>
    </form>
  );
};

export default SearchForm;
