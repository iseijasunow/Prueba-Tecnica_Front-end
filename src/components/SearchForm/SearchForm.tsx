import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchForm.scss";

const SearchForm = () => {
  return (
    <form className="form">
      <label htmlFor="word" className="form__label">
        User to search:{" "}
      </label>
      <input
        type="text"
        id="word"
        placeholder="search"
        className="form__input"
      />
      <button type="submit" className="form__button">
        <FontAwesomeIcon icon={faSearch} color="#fbfef9" size="2x" />
      </button>
    </form>
  );
};

export default SearchForm;
