export const getAllUsers = (name) => {
  return `https://api.github.com/search/users?q=${name}`;
};

export const getUser = (name) => {
  return `https://api.github.com/users/${name}`;
};
