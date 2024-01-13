import ErrorCard from "../components/ErrorCard/ErrorCard";

const searchData = async (searchName, setUsers) => {
  try {
    fetch(`https://api.github.com/search/users?q=${searchName}&per_page=10`)
      .then((response) => response.json())
      .then((json) => {
        setUsers([]);
        if (json.items && Array.isArray(json.items)) {
          json.items.map((item) => {
            setUsers((users) => [
              ...users,
              {
                id: item.id,
                userName: item.login,
                image: item.avatar_url,
                followers: item.followers_url,
                profileUrl: item.url,
              },
            ]);
          });
        }
      });
  } catch (error) {
    console.log("Error fetching user data:", error);
    ErrorCard(error);
  }
};

export {searchData};