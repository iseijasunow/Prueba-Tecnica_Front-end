export const fetchUser = async (user) => {
  const url = `https://api.github.com/users/${user}`;
  const data = await fetch(url);
  return await data.json();
};
