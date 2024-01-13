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

const getUserFollowers = async (userName, setUserFollowers) => {
  try {
    const dataFollowers = await fetch(
      `https://api.github.com/users/${userName}/followers`
    );
    const userDataFollowers = await dataFollowers.json();
    setUserFollowers(userDataFollowers);
  } catch (error) {
    console.log("Error fetching user data:", error);
    ErrorCard(error);
  }
};

export { getUserFollowers };

const getUserRepos = async (userName, setUserRepos) => {
  try {
    const dataRepos = await fetch(
      `https://api.github.com/users/${userName}/repos`
    );
    const userDataRepos = await dataRepos.json();
    setUserRepos(userDataRepos);
  } catch (error) {
    console.log("Error fetching user data:", error);
    ErrorCard(error);
  }
};

export { getUserRepos };
