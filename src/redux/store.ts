import {combineReducers, configureStore} from '@reduxjs/toolkit';
import todoReducers from './slice/todoSlice';
import authReducer from './slice/authSlice';

// configure the app store where the app state will be managed
// import all reducers available to update the store
// export the store so we can use it inside app store at App entry
export const store = configureStore({
  reducer: combineReducers({
    todoReducers,
    authReducer,
  }),
});

// export StoreDispatch type to use it when dispatching redux actions
export type StoreDispatch = typeof store.dispatch;
// export StoreState to use it while dealing with the store state type
export type StoreState = ReturnType<typeof store.getState>;
