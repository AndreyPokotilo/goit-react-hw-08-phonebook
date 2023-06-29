import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, fetchCurrentUser } from './auth-operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>  {
    builder.addCase(register.fulfilled,(state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogedIn = true;
    })

    .addCase(login.fulfilled,(state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogedIn = true;
      })

      .addCase(logOut.fulfilled,(state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLogedIn = false;
      })

      .addCase(fetchCurrentUser.pending,(state) => {
        state.isRefreshing = true;
      })

      .addCase(fetchCurrentUser.fulfilled,(state, action) => {
        state.user = action.payload;
        state.isLogedIn = true;
        state.isRefreshing = false;
      })

      .addMatcher(fetchCurrentUser.rejected,(state) => {
        state.isRefreshing = false;
      })
  },
      
});

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };


export const persistedReducer = persistReducer(
    authPersistConfig,
    authSlice.reducer
  );