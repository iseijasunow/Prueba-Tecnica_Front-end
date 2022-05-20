import { combineReducers } from '@reduxjs/toolkit';
import { reducer as userReducer } from 'src/slices/user';

const rootReducer = combineReducers({
    users: userReducer,
});

export default rootReducer;
