import ErrorCard from "../components/ErrorCard/ErrorCard";

const getUserData = async (userName, setUsers) => {
  try {
    const data = await fetch(`https://api.github.com/users/${userName}`);
    const userData = await data.json();
    setUsers(userData);
  } catch (error) {
    console.log("Error fetching user data:", error);
    ErrorCard(error);
  }
};

export { getUserData };