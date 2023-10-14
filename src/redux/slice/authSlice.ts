import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AuthModel} from '../../models/authModel';

const initialState: AuthModel = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<AuthModel>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const {setIsAuthenticated} = authSlice.actions;
export default authSlice.reducer;
