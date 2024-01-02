import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './pageSlice.js'
import userReducer from './userSlice.js'

export const store = configureStore({
  reducer: {
    page: pageReducer,
    user: userReducer
  },
})