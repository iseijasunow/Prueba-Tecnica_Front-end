import { useState } from "react";
import axios from "axios";
import Text from "../Text/Text";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ItemList from "../ItemList/ItemList";
import { useNotificationServices } from "../Notification/Notification";
import "../../styles/App.scss";

const SearchContainer = () => {
  const [users, setUsers] = useState([]); //
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Error handling
  const setNotification = useNotificationServices();

  // Petition to the API
  const petition = async (search) => {
    await axios
      .get(`https://api.github.com/search/users?q=${search}`)
      .then((res) => {
        setUsers(res.data.items);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // filtering data
  const handleClick = () => {
    
    // Validate the input
    if (search === "") {
      setNotification("Plase enter a search term");
    } else if (search.length <= 3) {
      setNotification("Please enter a search term with more than 4 characters");
    } else if (search === "iseijasunow") {
      setNotification("You can't search for iseijasunow");
    } else if (search.trim() === "") {
      setNotification("Please enter a search term");
    } else {
      petition(search);
      setIsLoading(true);
      setSearch("");
    }
  };

  return (
    <div className="search-container">
      <Text text="Search a Github user" className="description" />
      <div className="search-container-input">
        <Input onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search" className="input" />
        <Button handleClick={() => handleClick()} textButton="Search" className="button" />
      </div>

      {isLoading ? (<div className="loading">Loading...</div>) : (<ItemList users={users} />)}
    </div>
  );
};

export default SearchContainer;
