import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsApi } from './contacts/contactApi';
import { filterSliceReducer } from './contacts/filterSlice';
import { persistedReducer } from './auth/auth-Slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(contactsApi.middleware),
];


export const store = configureStore({
  reducer: {
    auth: persistedReducer ,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSliceReducer,
  },
   middleware,
   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
