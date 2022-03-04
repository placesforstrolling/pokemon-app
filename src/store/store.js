import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

export const store = configureStore({
  reducer: {[apiSlice.reducerPath]: apiSlice.reducer},
  // middleware: getDefaultMiddleware => (true),
  devTools: process.env.NODE_ENV !== 'production',
})

