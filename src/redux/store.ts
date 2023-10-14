import {combineReducers, configureStore} from '@reduxjs/toolkit';
import todoReducers from './slice/todoSlice';
import authReducer from './slice/authSlice';

export const store = configureStore({
  reducer: combineReducers({
    todoReducers,
    authReducer,
  }),
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
