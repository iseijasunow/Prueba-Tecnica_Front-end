export const fetchDataUsers = async (user) => {
  const url = `https://api.github.com/search/users?q=${user}`;
  const data = await fetch(url);
  return await data.json();
}