import { useState } from "react";
import "./SearchInput.scss";

const SearchInput = ({ setName }) => {
  const [value, setValue] = useState("");
  return (
    <div className="search_input">
      <input
        type="text"
        value={value}
        placeholder="Search"
        className="search_input__bar"
        style={{ bacgroundColor: "white" }}
        onChange={(item) => setValue(item.target.value)}
      />
      {value.length > 3 && value !== "iseijasunow" ? (
        <button
          type="button"
          className="search_input__btn"
          onClick={() => {
            setName(value);
            setValue("");
          }}
        >
          Search
          <span
            className="material-symbols-outlined"
            style={{ marginLeft: "0.4rem" }}
          >
            manage_search
          </span>
        </button>
      ) : null}
      <button
        className="search_input__btn_reset"
        onClick={() => {
          setName("YOUR_NAME");
          setValue("");
        }}
      >
        <span className="material-symbols-outlined">autorenew</span>
      </button>
    </div>
  );
};

export default SearchInput;
