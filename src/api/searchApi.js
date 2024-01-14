import ErrorCard from "../components/ErrorCard/ErrorCard";

const searchData = async (searchName, setUsers) => {
  try {
    const response = await fetch(`https://api.github.com/search/users?q=${searchName}&per_page=10`);
    const data = await response.json();

    setUsers([]);

    if (data.items && Array.isArray(data.items)) {
      data.items.forEach(async (item) => {
        const userResponse = await fetch(`https://api.github.com/users/${item.login}`);
        const userData = await userResponse.json();

        setUsers((users) => [
          ...users,
          {
            id: userData.id,
            userName: userData.login,
            image: userData.avatar_url,
            followers: userData.followers,
            profileUrl: userData.html_url,
          },
        ]);
      });
    }
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
};


export {searchData};