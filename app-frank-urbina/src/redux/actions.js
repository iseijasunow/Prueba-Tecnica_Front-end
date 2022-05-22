export const actions = {
  setIsLoading: "SET_IS_LOADING",
  setUsers: "SET_USERS",
};

export const setIsLoading = (boolean) => ({
  type: actions.setIsLoading,
  payload: boolean,
});

export const setUsers = (element) => ({
  type: actions.setUsers,
  payload: element,
});
