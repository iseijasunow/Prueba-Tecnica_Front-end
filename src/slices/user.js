import { createSlice } from '@reduxjs/toolkit';
import baseurl from 'src/config/baseurl';
import axs from 'src/utils/axs';

const initialState = {
    users: []
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers(state, action) {
      const users = action.payload;

          state.users = users;
    }
  }
});

export const reducer = slice.reducer;

export const getUsers = (userValue) => async (dispatch) => {
    const response = await axs.get(baseurl + `?q=${userValue}`);
    dispatch(slice.actions.getUsers(response.data));
};