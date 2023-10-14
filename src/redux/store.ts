import {configureStore} from '@reduxjs/toolkit';
import todoReducers from './slice/todoSlice';

export const store = configureStore({
  reducer: todoReducers,
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
